import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e}from"./app-5f6064b2.js";const t="/assets/202210190833477-02d3ef2c.png",l="/assets/202210190833560-096149df.jpeg",i="/assets/202210190834129-6d766689.jpeg",p="/assets/202210190842503-f9cb7e88.jpeg",o="/assets/202210190847428-9acca432.jpeg",c={},r=e('<h1 id="_2-主从复制" tabindex="-1"><a class="header-anchor" href="#_2-主从复制" aria-hidden="true">#</a> 2. 主从复制</h1><h2 id="_2-1-概述" tabindex="-1"><a class="header-anchor" href="#_2-1-概述" aria-hidden="true">#</a> 2.1 概述</h2><p>主从复制是指将主数据库的 DDL 和 DML 操作通过二进制日志传到从库服务器中，然后在从库上对这 些日志重新执行（也叫重做），从而使得从库和主库的数据保持同步。</p><p>MySQL支持一台主库同时向多台从库进行复制， 从库同时也可以作为其他从服务器的主库，实现链状复制。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>MySQL 复制的优点主要包含以下三个方面：</p><ul><li><p>主库出现问题，可以快速切换到从库提供服务。</p></li><li><p>实现读写分离，降低主库的访问压力。</p></li><li><p>可以在从库中执行备份，以避免备份期间影响主库服务。</p></li></ul><h2 id="_2-2-原理" tabindex="-1"><a class="header-anchor" href="#_2-2-原理" aria-hidden="true">#</a> 2.2 原理</h2><p>MySQL主从复制的核心就是 二进制日志，具体的过程如下：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上图来看，复制分成三步：</p><ol><li>Master 主库在事务提交时，会把数据变更记录在二进制日志文件 Binlog 中。</li><li>从库读取主库的二进制日志文件 Binlog ，写入到从库的中继日志 Relay Log 。</li><li>slave重做中继日志中的事件，将改变修改到它自己的数据中。</li></ol><h2 id="_2-3-搭建" tabindex="-1"><a class="header-anchor" href="#_2-3-搭建" aria-hidden="true">#</a> 2.3 搭建</h2><h3 id="_2-3-1-准备" tabindex="-1"><a class="header-anchor" href="#_2-3-1-准备" aria-hidden="true">#</a> 2.3.1 准备</h3><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>


命令含义
-- zone <span class="token comment"># 作用域</span>
--add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token comment"># 添加端口，格式为：端口/通讯协议</span>
<span class="token parameter variable">--permanent</span> <span class="token comment"># 永久生效，没有此参数重启后失效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备好两台服务器之后，在上述的两台服务器中分别安装好MySQL，并完成基础的初始化准备(安装、 密码配置等操作)工作。</p><p>其中：</p><ul><li><p>192.168.200.200 作为主服务器master</p></li><li><p>192.168.200.201 作为从服务器slave</p></li></ul><h3 id="_2-3-2-主库配置" tabindex="-1"><a class="header-anchor" href="#_2-3-2-主库配置" aria-hidden="true">#</a> 2.3.2 主库配置</h3><h4 id="_1、修改配置文件-etc-my-cnf" tabindex="-1"><a class="header-anchor" href="#_1、修改配置文件-etc-my-cnf" aria-hidden="true">#</a> 1、修改配置文件 /etc/my.cnf</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># mysql 服务ID，保证整个集群环境中唯一，取值范围：1 – 232-1，默认为1</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token comment"># 是否只读,1 代表只读, 0 代表读写</span>
<span class="token key attr-name">read-only</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token comment"># 忽略的数据, 指不需要同步的数据库</span>
<span class="token comment"># binlog-ignore-db=mysql</span>

<span class="token comment"># 指定同步的数据库</span>
<span class="token comment"># binlog-do-db=db01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、重启mysql服务器" tabindex="-1"><a class="header-anchor" href="#_2、重启mysql服务器" aria-hidden="true">#</a> 2、重启MySQL服务器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、登录mysql-创建远程连接的账号-并授予主从复制权限" tabindex="-1"><a class="header-anchor" href="#_3、登录mysql-创建远程连接的账号-并授予主从复制权限" aria-hidden="true">#</a> 3、登录mysql，创建远程连接的账号，并授予主从复制权限</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#创建itcast用户，并设置密码，该用户可在任意主机连接该MySQL服务</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;itcast&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;Root@123456&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#为 &#39;itcast&#39;@&#39;%&#39; 用户分配主从复制权限</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;itcast&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、通过指令-查看二进制日志坐标" tabindex="-1"><a class="header-anchor" href="#_4、通过指令-查看二进制日志坐标" aria-hidden="true">#</a> 4、通过指令，查看二进制日志坐标</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> master <span class="token keyword">status</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>字段含义说明：</p><ul><li>file : 从哪个日志文件开始推送日志文件</li><li>position ： 从哪个位置开始推送日志</li><li>binlog_ignore_db : 指定不需要同步的数据库</li></ul><h3 id="_2-3-3-从库配置" tabindex="-1"><a class="header-anchor" href="#_2-3-3-从库配置" aria-hidden="true">#</a> 2.3.3 从库配置</h3><h4 id="_1、修改配置文件-etc-my-cnf-1" tabindex="-1"><a class="header-anchor" href="#_1、修改配置文件-etc-my-cnf-1" aria-hidden="true">#</a> 1、修改配置文件 /etc/my.cnf</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># mysql 服务ID，保证整个集群环境中唯一，取值范围：1 – 2^32-1，和主库不一样即可</span>
<span class="token key attr-name">server-id</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>

<span class="token comment"># 是否只读,1 代表只读, 0 代表读写</span>
<span class="token key attr-name">read-only</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、重新启动mysql服务" tabindex="-1"><a class="header-anchor" href="#_2、重新启动mysql服务" aria-hidden="true">#</a> 2、重新启动MySQL服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、登录mysql-设置主库配置" tabindex="-1"><a class="header-anchor" href="#_3、登录mysql-设置主库配置" aria-hidden="true">#</a> 3、登录mysql，设置主库配置</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>CHANGE <span class="token keyword">REPLICATION</span> SOURCE <span class="token keyword">TO</span> SOURCE_HOST<span class="token operator">=</span><span class="token string">&#39;192.168.200.200&#39;</span><span class="token punctuation">,</span> SOURCE_USER<span class="token operator">=</span><span class="token string">&#39;itcast&#39;</span><span class="token punctuation">,</span>SOURCE_PASSWORD<span class="token operator">=</span><span class="token string">&#39;Root@123456&#39;</span><span class="token punctuation">,</span> SOURCE_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;binlog.000004&#39;</span><span class="token punctuation">,</span>SOURCE_LOG_POS<span class="token operator">=</span><span class="token number">663</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述是8.0.23中的语法。如果mysql是 8.0.23 之前的版本，执行如下SQL：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>CHANGE MASTER <span class="token keyword">TO</span> MASTER_HOST<span class="token operator">=</span><span class="token string">&#39;192.168.200.200&#39;</span><span class="token punctuation">,</span> MASTER_USER<span class="token operator">=</span><span class="token string">&#39;itcast&#39;</span><span class="token punctuation">,</span>MASTER_PASSWORD<span class="token operator">=</span><span class="token string">&#39;Root@123456&#39;</span><span class="token punctuation">,</span> MASTER_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;binlog.000004&#39;</span><span class="token punctuation">,</span>MASTER_LOG_POS<span class="token operator">=</span><span class="token number">663</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名</th><th>含义</th><th>8.0.23之前</th></tr></thead><tbody><tr><td>SOURCE_HOST</td><td>主库IP地址</td><td>MASTER_HOST</td></tr><tr><td>SOURCE_USER</td><td>连接主库的用户名</td><td>MASTER_USER</td></tr><tr><td>SOURCE_PASSWORD</td><td>连接主库的密码</td><td>MASTER_PASSWORD</td></tr><tr><td>SOURCE_LOG_FILE</td><td>binlog日志文件名</td><td>MASTER_LOG_FILE</td></tr><tr><td>SOURCE_LOG_POS</td><td>binlog日志文件位置</td><td>MASTER_LOG_POS</td></tr></tbody></table><h4 id="_4、开启同步操作" tabindex="-1"><a class="header-anchor" href="#_4、开启同步操作" aria-hidden="true">#</a> 4、开启同步操作</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">start</span> replica <span class="token punctuation">;</span> <span class="token comment">#8.0.22之后</span>
<span class="token keyword">start</span> slave <span class="token punctuation">;</span> <span class="token comment">#8.0.22之前</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、-查看主从同步状态" tabindex="-1"><a class="header-anchor" href="#_5、-查看主从同步状态" aria-hidden="true">#</a> 5、 查看主从同步状态</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> replica <span class="token keyword">status</span> <span class="token punctuation">;</span> <span class="token comment">#8.0.22之后</span>
<span class="token keyword">show</span> slave <span class="token keyword">status</span> <span class="token punctuation">;</span> <span class="token comment">#8.0.22之前</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-3-4-测试" tabindex="-1"><a class="header-anchor" href="#_2-3-4-测试" aria-hidden="true">#</a> 2.3.4 测试</h3><h4 id="_1、在主库-192-168-200-200-上创建数据库、表-并插入数据" tabindex="-1"><a class="header-anchor" href="#_1、在主库-192-168-200-200-上创建数据库、表-并插入数据" aria-hidden="true">#</a> 1、在主库 192.168.200.200 上创建数据库、表，并插入数据</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> db01<span class="token punctuation">;</span>
<span class="token keyword">use</span> db01<span class="token punctuation">;</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> tb_user<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">innodb</span> <span class="token keyword">default</span> <span class="token keyword">charset</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> tb_user<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;Trigger&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span><span class="token string">&#39;Dawn&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、在从库-192-168-200-201-中查询数据-验证主从是否同步" tabindex="-1"><a class="header-anchor" href="#_2、在从库-192-168-200-201-中查询数据-验证主从是否同步" aria-hidden="true">#</a> 2、在从库 192.168.200.201 中查询数据，验证主从是否同步</h4>`,50),d=[r];function u(k,m){return s(),n("div",null,d)}const b=a(c,[["render",u],["__file","2 主从复制.html.vue"]]);export{b as default};
