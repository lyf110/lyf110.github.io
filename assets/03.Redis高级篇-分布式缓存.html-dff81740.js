import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as d,c as o,a as e,b as a,d as n,e as s}from"./app-5f6064b2.js";const c="/assets/image-20210725144240631-7098511e.png",g="/assets/image-20210725144536958-981d82c0.png",m="/assets/image-20210725144725943-25f555fc.png",u="/assets/image-20210725151319695-ac3eab79.png",f="/assets/image-20210725151543640-eeea19b7.png",h="/assets/image-20210725151654046-f9697d10.png",v="/assets/image-20210725151729118-d827d93a.png",b="/assets/image-20210725151940515-33dd1bef.png",_="/assets/image-20210725152037611-36202b4d.png",k="/assets/image-20210725152052501-b8a7a9fb.png",x="/assets/image-20210725152222497-d2223f19.png",y="/assets/image-20210725152700914-0d6d2065.png",R="/assets/image-20210725153201086-ba535b71.png",z="/assets/image-20210725153359022-435875fd.png",B="/assets/image-20210725153524190-b370fb4c.png",D="/assets/image-20210725153715910-6e3ac8b0.png",A="/assets/image-20210725153937031-15526cc6.png",F="/assets/image-20210725154155984-9ebea34f.png",O="/assets/image-20210725154216392-9b347241.png",E="/assets/image-20210725154405899-841f6635.png",C="/assets/image-20210725154528072-0ba9baca.png",I="/assets/image-20210725154632354-028b8f0f.png",S="/assets/image-20210725154816841-42f84e57.png",w="/assets/image-20210725152052501-b8a7a9fb.png",q="/assets/image-20210725155124958-d4fba741.png",T="/assets/image-20210725155747294-ed902a02.png",j="/assets/image-20210725152052501-b8a7a9fb.png",L="/assets/image-20210725155820320-9f23e1bb.png",P="/assets/image-20210725155850200-799238af.png",N="/assets/image-20210725160138290-8a6c83a9.png",t="/assets/image-20210725160448139-c77ca11f.png",V="/assets/image-20210725161007099-147c6794.png",M="/assets/image-20210725161241793-2a08dbd3.png",G="/assets/image-20210725161401925-8b02a66b.png",H="/assets/image-20210725161506241-76ac78d7.png",J="/assets/image-20210725161540841-763076e0.png",K="/assets/image-20210725161637152-56b30113.png",Q="/assets/image-20210725161731738-0dd8b685.png",U="/assets/image-20210725161817642-0b3e5a8c.png",W="/assets/image-20210725162030478-80de5fa3.png",X="/assets/image-20210725162101228-b2e82cbd.png",Y="/assets/image-20210725162145497-17930b14.png",Z="/assets/image-20210725162224058-f4d2a452.png",l="/assets/image-20210727161152065-8a322451.png",$="/assets/image-20210725162319490-a4d765bf.png",aa="/assets/image-20210725162408979-44f1254b.png",ea="/assets/image-20210727160803386-3c719a73.png",sa="/assets/image-20210725162441407-234af58b.png",ia="/assets/image-20210727160037766-4a7b9e57.png",na={},ta=s('<h1 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h1><p>-- 基于Redis集群解决单机Redis存在的问题</p><p>单机的Redis存在四大问题：</p><figure><img src="'+c+'" alt="image-20210725144240631" tabindex="0" loading="lazy"><figcaption>image-20210725144240631</figcaption></figure><h1 id="_0-学习目标" tabindex="-1"><a class="header-anchor" href="#_0-学习目标" aria-hidden="true">#</a> 0.学习目标</h1><h1 id="_1-redis持久化" tabindex="-1"><a class="header-anchor" href="#_1-redis持久化" aria-hidden="true">#</a> 1.Redis持久化</h1><p>Redis有两种持久化方案：</p><ul><li>RDB持久化</li><li>AOF持久化</li></ul><h2 id="_1-1-rdb持久化" tabindex="-1"><a class="header-anchor" href="#_1-1-rdb持久化" aria-hidden="true">#</a> 1.1.RDB持久化</h2><p>RDB全称Redis Database Backup file（Redis数据备份文件），也被叫做Redis数据快照。简单来说就是把内存中的所有数据都记录到磁盘中。当Redis实例故障重启后，从磁盘读取快照文件，恢复数据。快照文件称为RDB文件，默认是保存在当前运行目录。</p><h3 id="_1-1-1-执行时机" tabindex="-1"><a class="header-anchor" href="#_1-1-1-执行时机" aria-hidden="true">#</a> 1.1.1.执行时机</h3><p>RDB持久化在四种情况下会执行：</p><ul><li>执行save命令</li><li>执行bgsave命令</li><li>Redis停机时</li><li>触发RDB条件时</li></ul><p><strong>1）save命令</strong></p><p>执行下面的命令，可以立即执行一次RDB：</p><figure><img src="'+g+'" alt="image-20210725144536958" tabindex="0" loading="lazy"><figcaption>image-20210725144536958</figcaption></figure><p>save命令会导致主进程执行RDB，这个过程中其它所有命令都会被阻塞。只有在数据迁移时可能用到。</p><p><strong>2）bgsave命令</strong></p><p>下面的命令可以异步执行RDB：</p><figure><img src="'+m+`" alt="image-20210725144725943" tabindex="0" loading="lazy"><figcaption>image-20210725144725943</figcaption></figure><p>这个命令执行后会开启独立进程完成RDB，主进程可以持续处理用户请求，不受影响。</p><p><strong>3）停机时</strong></p><p>Redis停机时会执行一次save命令，实现RDB持久化。</p><p><strong>4）触发RDB条件</strong></p><p>Redis内部有触发RDB的机制，可以在redis.conf文件中找到，格式如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 900秒内，如果至少有1个key被修改，则执行bgsave ， 如果是save &quot;&quot; 则表示禁用RDB</span>
<span class="token key attr-name">save</span> <span class="token value attr-value">900 1  </span>
<span class="token key attr-name">save</span> <span class="token value attr-value">300 10  </span>
<span class="token key attr-name">save</span> <span class="token value attr-value">60 10000 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RDB的其它配置也可以在redis.conf文件中设置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 是否压缩 ,建议不开启，压缩也会消耗cpu，磁盘的话不值钱</span>
<span class="token key attr-name">rdbcompression</span> <span class="token value attr-value">yes</span>

<span class="token comment"># RDB文件名称</span>
<span class="token key attr-name">dbfilename</span> <span class="token value attr-value">dump.rdb  </span>

<span class="token comment"># 文件保存的路径目录</span>
<span class="token key attr-name">dir</span> <span class="token value attr-value">./ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-2-rdb原理" tabindex="-1"><a class="header-anchor" href="#_1-1-2-rdb原理" aria-hidden="true">#</a> 1.1.2.RDB原理</h3><p>bgsave开始时会fork主进程得到子进程，子进程共享主进程的内存数据。完成fork后读取内存数据并写入 RDB 文件。</p><p>fork采用的是copy-on-write技术：</p><ul><li>当主进程执行读操作时，访问共享内存；</li><li>当主进程执行写操作时，则会拷贝一份数据，执行写操作。</li></ul><figure><img src="`+u+'" alt="image-20210725151319695" tabindex="0" loading="lazy"><figcaption>image-20210725151319695</figcaption></figure><h3 id="_1-1-3-小结" tabindex="-1"><a class="header-anchor" href="#_1-1-3-小结" aria-hidden="true">#</a> 1.1.3.小结</h3><p>RDB方式bgsave的基本流程？</p><ul><li>fork主进程得到一个子进程，共享内存空间</li><li>子进程读取内存数据并写入新的RDB文件</li><li>用新RDB文件替换旧的RDB文件</li></ul><p>RDB会在什么时候执行？save 60 1000代表什么含义？</p><ul><li>默认是服务停止时</li><li>代表60秒内至少执行1000次修改则触发RDB</li></ul><p>RDB的缺点？</p><ul><li>RDB执行间隔时间长，两次RDB之间写入数据有丢失的风险</li><li>fork子进程、压缩、写出RDB文件都比较耗时</li></ul><h2 id="_1-2-aof持久化" tabindex="-1"><a class="header-anchor" href="#_1-2-aof持久化" aria-hidden="true">#</a> 1.2.AOF持久化</h2><h3 id="_1-2-1-aof原理" tabindex="-1"><a class="header-anchor" href="#_1-2-1-aof原理" aria-hidden="true">#</a> 1.2.1.AOF原理</h3><p>AOF全称为Append Only File（追加文件）。Redis处理的每一个写命令都会记录在AOF文件，可以看做是命令日志文件。</p><figure><img src="'+f+`" alt="image-20210725151543640" tabindex="0" loading="lazy"><figcaption>image-20210725151543640</figcaption></figure><h3 id="_1-2-2-aof配置" tabindex="-1"><a class="header-anchor" href="#_1-2-2-aof配置" aria-hidden="true">#</a> 1.2.2.AOF配置</h3><p>AOF默认是关闭的，需要修改redis.conf配置文件来开启AOF：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 是否开启AOF功能，默认是no</span>
<span class="token key attr-name">appendonly</span> <span class="token value attr-value">yes</span>
<span class="token comment"># AOF文件的名称</span>
<span class="token key attr-name">appendfilename</span> <span class="token value attr-value">&quot;appendonly.aof&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AOF的命令记录的频率也可以通过redis.conf文件来配：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 表示每执行一次写命令，立即记录到AOF文件</span>
<span class="token key attr-name">appendfsync</span> <span class="token value attr-value">always </span>
<span class="token comment"># 写命令执行完先放入AOF缓冲区，然后表示每隔1秒将缓冲区数据写到AOF文件，是默认方案</span>
<span class="token key attr-name">appendfsync</span> <span class="token value attr-value">everysec </span>
<span class="token comment"># 写命令执行完先放入AOF缓冲区，由操作系统决定何时将缓冲区内容写回磁盘</span>
<span class="token key attr-name">appendfsync</span> <span class="token value attr-value">no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三种策略对比：</p><figure><img src="`+h+'" alt="image-20210725151654046" tabindex="0" loading="lazy"><figcaption>image-20210725151654046</figcaption></figure><h3 id="_1-2-3-aof文件重写" tabindex="-1"><a class="header-anchor" href="#_1-2-3-aof文件重写" aria-hidden="true">#</a> 1.2.3.AOF文件重写</h3><p>因为是记录命令，AOF文件会比RDB文件大的多。而且AOF会记录对同一个key的多次写操作，但只有最后一次写操作才有意义。通过执行bgrewriteaof命令，可以让AOF文件执行重写功能，用最少的命令达到相同效果。</p><figure><img src="'+v+`" alt="image-20210725151729118" tabindex="0" loading="lazy"><figcaption>image-20210725151729118</figcaption></figure><p>如图，AOF原本有三个命令，但是<code>set num 123 和 set num 666</code>都是对num的操作，第二次会覆盖第一次的值，因此第一个命令记录下来没有意义。</p><p>所以重写命令后，AOF文件内容就是：<code>mset name jack num 666</code></p><p>Redis也会在触发阈值时自动去重写AOF文件。阈值也可以在redis.conf中配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># AOF文件比上次文件 增长超过多少百分比则触发重写</span>
<span class="token key attr-name">auto-aof-rewrite-percentage</span> <span class="token value attr-value">100</span>
<span class="token comment"># AOF文件体积最小多大以上才触发重写 </span>
<span class="token key attr-name">auto-aof-rewrite-min-size</span> <span class="token value attr-value">64mb </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-rdb与aof对比" tabindex="-1"><a class="header-anchor" href="#_1-3-rdb与aof对比" aria-hidden="true">#</a> 1.3.RDB与AOF对比</h2><p>RDB和AOF各有自己的优缺点，如果对数据安全性要求较高，在实际开发中往往会<strong>结合</strong>两者来使用。</p><figure><img src="`+b+'" alt="image-20210725151940515" tabindex="0" loading="lazy"><figcaption>image-20210725151940515</figcaption></figure><h1 id="_2-redis主从" tabindex="-1"><a class="header-anchor" href="#_2-redis主从" aria-hidden="true">#</a> 2.Redis主从</h1><h2 id="_2-1-搭建主从架构" tabindex="-1"><a class="header-anchor" href="#_2-1-搭建主从架构" aria-hidden="true">#</a> 2.1.搭建主从架构</h2><p>单节点Redis的并发能力是有上限的，要进一步提高Redis的并发能力，就需要搭建主从集群，实现读写分离。</p><figure><img src="'+_+'" alt="image-20210725152037611" tabindex="0" loading="lazy"><figcaption>image-20210725152037611</figcaption></figure>',65),la={href:"http://xn--Redis-2o3nn90k.md",target:"_blank",rel:"noopener noreferrer"},ra=s('<figure><img src="'+k+'" alt="image-20210725152052501" tabindex="0" loading="lazy"><figcaption>image-20210725152052501</figcaption></figure><h2 id="_2-2-主从数据同步原理" tabindex="-1"><a class="header-anchor" href="#_2-2-主从数据同步原理" aria-hidden="true">#</a> 2.2.主从数据同步原理</h2><h3 id="_2-2-1-全量同步" tabindex="-1"><a class="header-anchor" href="#_2-2-1-全量同步" aria-hidden="true">#</a> 2.2.1.全量同步</h3><p>主从第一次建立连接时，会执行<strong>全量同步</strong>，将master节点的所有数据都拷贝给slave节点，流程：</p><figure><img src="'+x+'" alt="image-20210725152222497" tabindex="0" loading="lazy"><figcaption>image-20210725152222497</figcaption></figure><p>这里有一个问题，master如何得知salve是第一次来连接呢？？</p><p>有几个概念，可以作为判断依据：</p><ul><li><strong>Replication Id</strong>：简称replid，是数据集的标记，id一致则说明是同一数据集。每一个master都有唯一的replid，slave则会继承master节点的replid</li><li><strong>offset</strong>：偏移量，随着记录在repl_baklog中的数据增多而逐渐增大。slave完成同步时也会记录当前同步的offset。如果slave的offset小于master的offset，说明slave数据落后于master，需要更新。</li></ul><p>因此slave做数据同步，必须向master声明自己的replication id 和offset，master才可以判断到底需要同步哪些数据。</p><p>因为slave原本也是一个master，有自己的replid和offset，当第一次变成slave，与master建立连接时，发送的replid和offset是自己的replid和offset。</p><p>master判断发现slave发送来的replid与自己的不一致，说明这是一个全新的slave，就知道要做全量同步了。</p><p>master会将自己的replid和offset都发送给这个slave，slave保存这些信息。以后slave的replid就与master一致了。</p><p>因此，<strong>master判断一个节点是否是第一次同步的依据，就是看replid是否一致</strong>。</p><p>如图：</p><figure><img src="'+y+'" alt="image-20210725152700914" tabindex="0" loading="lazy"><figcaption>image-20210725152700914</figcaption></figure><p>完整流程描述：</p><ul><li>slave节点请求增量同步</li><li>master节点判断replid，发现不一致，拒绝增量同步</li><li>master将完整内存数据生成RDB，发送RDB到slave</li><li>slave清空本地数据，加载master的RDB</li><li>master将RDB期间的命令记录在repl_baklog，并持续将log中的命令发送给slave</li><li>slave执行接收到的命令，保持与master之间的同步</li></ul><h3 id="_2-2-2-增量同步" tabindex="-1"><a class="header-anchor" href="#_2-2-2-增量同步" aria-hidden="true">#</a> 2.2.2.增量同步</h3><p>全量同步需要先做RDB，然后将RDB文件通过网络传输个slave，成本太高了。因此除了第一次做全量同步，其它大多数时候slave与master都是做<strong>增量同步</strong>。</p><p>什么是增量同步？就是只更新slave与master存在差异的部分数据。如图：</p><figure><img src="'+R+'" alt="image-20210725153201086" tabindex="0" loading="lazy"><figcaption>image-20210725153201086</figcaption></figure><p>那么master怎么知道slave与自己的数据差异在哪里呢?</p><h3 id="_2-2-3-repl-backlog原理" tabindex="-1"><a class="header-anchor" href="#_2-2-3-repl-backlog原理" aria-hidden="true">#</a> 2.2.3.repl_backlog原理</h3><p>master怎么知道slave与自己的数据差异在哪里呢?</p><p>这就要说到全量同步时的repl_baklog文件了。</p><p>这个文件是一个固定大小的数组，只不过数组是环形，也就是说<strong>角标到达数组末尾后，会再次从0开始读写</strong>，这样数组头部的数据就会被覆盖。</p><p>repl_baklog中会记录Redis处理过的命令日志及offset，包括master当前的offset，和slave已经拷贝到的offset：</p><figure><img src="'+z+'" alt="image-20210725153359022" tabindex="0" loading="lazy"><figcaption>image-20210725153359022</figcaption></figure><p>slave与master的offset之间的差异，就是salve需要增量拷贝的数据了。</p><p>随着不断有数据写入，master的offset逐渐变大，slave也不断的拷贝，追赶master的offset：</p><figure><img src="'+B+'" alt="image-20210725153524190" tabindex="0" loading="lazy"><figcaption>image-20210725153524190</figcaption></figure><p>直到数组被填满：</p><figure><img src="'+D+'" alt="image-20210725153715910" tabindex="0" loading="lazy"><figcaption>image-20210725153715910</figcaption></figure><p>此时，如果有新的数据写入，就会覆盖数组中的旧数据。不过，旧的数据只要是绿色的，说明是已经被同步到slave的数据，即便被覆盖了也没什么影响。因为未同步的仅仅是红色部分。</p><p>但是，如果slave出现网络阻塞，导致master的offset远远超过了slave的offset：</p><figure><img src="'+A+'" alt="image-20210725153937031" tabindex="0" loading="lazy"><figcaption>image-20210725153937031</figcaption></figure><p>如果master继续写入新数据，其offset就会覆盖旧的数据，直到将slave现在的offset也覆盖：</p><figure><img src="'+F+'" alt="image-20210725154155984" tabindex="0" loading="lazy"><figcaption>image-20210725154155984</figcaption></figure><p>棕色框中的红色部分，就是尚未同步，但是却已经被覆盖的数据。此时如果slave恢复，需要同步，却发现自己的offset都没有了，无法完成增量同步了。只能做全量同步。</p><figure><img src="'+O+'" alt="image-20210725154216392" tabindex="0" loading="lazy"><figcaption>image-20210725154216392</figcaption></figure><h2 id="_2-3-主从同步优化" tabindex="-1"><a class="header-anchor" href="#_2-3-主从同步优化" aria-hidden="true">#</a> 2.3.主从同步优化</h2><p>主从同步可以保证主从数据的一致性，非常重要。</p><p>可以从以下几个方面来优化Redis主从就集群：</p><ul><li>在master中配置repl-diskless-sync yes启用无磁盘复制，避免全量同步时的磁盘IO。</li><li>Redis单节点上的内存占用不要太大，减少RDB导致的过多磁盘IO</li><li>适当提高repl_baklog的大小，发现slave宕机时尽快实现故障恢复，尽可能避免全量同步</li><li>限制一个master上的slave节点数量，如果实在是太多slave，则可以采用主-从-从链式结构，减少master压力</li></ul><p>主从从架构图：</p><figure><img src="'+E+'" alt="image-20210725154405899" tabindex="0" loading="lazy"><figcaption>image-20210725154405899</figcaption></figure><h2 id="_2-4-小结" tabindex="-1"><a class="header-anchor" href="#_2-4-小结" aria-hidden="true">#</a> 2.4.小结</h2><p>简述全量同步和增量同步区别？</p><ul><li>全量同步：master将完整内存数据生成RDB，发送RDB到slave。后续命令则记录在repl_baklog，逐个发送给slave。</li><li>增量同步：slave提交自己的offset到master，master获取repl_baklog中从offset之后的命令给slave</li></ul><p>什么时候执行全量同步？</p><ul><li>slave节点第一次连接master节点时</li><li>slave节点断开时间太久，repl_baklog中的offset已经被覆盖时</li></ul><p>什么时候执行增量同步？</p><ul><li>slave节点断开又恢复，并且在repl_baklog中能找到offset时</li></ul><h1 id="_3-redis哨兵" tabindex="-1"><a class="header-anchor" href="#_3-redis哨兵" aria-hidden="true">#</a> 3.Redis哨兵</h1><p>Redis提供了哨兵（Sentinel）机制来实现主从集群的自动故障恢复。</p><h2 id="_3-1-哨兵原理" tabindex="-1"><a class="header-anchor" href="#_3-1-哨兵原理" aria-hidden="true">#</a> 3.1.哨兵原理</h2><h3 id="_3-1-1-集群结构和作用" tabindex="-1"><a class="header-anchor" href="#_3-1-1-集群结构和作用" aria-hidden="true">#</a> 3.1.1.集群结构和作用</h3><p>哨兵的结构如图：</p><figure><img src="'+C+'" alt="image-20210725154528072" tabindex="0" loading="lazy"><figcaption>image-20210725154528072</figcaption></figure><p>哨兵的作用如下：</p><ul><li><strong>监控</strong>：Sentinel 会不断检查您的master和slave是否按预期工作</li><li><strong>自动故障恢复</strong>：如果master故障，Sentinel会将一个slave提升为master。当故障实例恢复后也以新的master为主</li><li><strong>通知</strong>：Sentinel充当Redis客户端的服务发现来源，当集群发生故障转移时，会将最新信息推送给Redis的客户端</li></ul><h3 id="_3-1-2-集群监控原理" tabindex="-1"><a class="header-anchor" href="#_3-1-2-集群监控原理" aria-hidden="true">#</a> 3.1.2.集群监控原理</h3><p>Sentinel基于心跳机制监测服务状态，每隔1秒向集群的每个实例发送ping命令：</p><p>•主观下线：如果某sentinel节点发现某实例未在规定时间响应，则认为该实例<strong>主观下线</strong>。</p><p>•客观下线：若超过指定数量（quorum）的sentinel都认为该实例主观下线，则该实例<strong>客观下线</strong>。quorum值最好超过Sentinel实例数量的一半。</p><figure><img src="'+I+'" alt="image-20210725154632354" tabindex="0" loading="lazy"><figcaption>image-20210725154632354</figcaption></figure><h3 id="_3-1-3-集群故障恢复原理" tabindex="-1"><a class="header-anchor" href="#_3-1-3-集群故障恢复原理" aria-hidden="true">#</a> 3.1.3.集群故障恢复原理</h3><p>一旦发现master故障，sentinel需要在salve中选择一个作为新的master，选择依据是这样的：</p><ul><li>首先会判断slave节点与master节点断开时间长短，如果超过指定值（down-after-milliseconds * 10）则会排除该slave节点</li><li>然后判断slave节点的slave-priority值，越小优先级越高，如果是0则永不参与选举</li><li>如果slave-prority一样，则判断slave节点的offset值，越大说明数据越新，优先级越高</li><li>最后是判断slave节点的运行id大小，越小优先级越高。</li></ul><p>当选出一个新的master后，该如何实现切换呢？</p><p>流程如下：</p><ul><li>sentinel给备选的slave1节点发送slaveof no one命令，让该节点成为master</li><li>sentinel给所有其它slave发送slaveof 192.168.150.101 7002 命令，让这些slave成为新master的从节点，开始从新的master上同步数据。</li><li>最后，sentinel将故障节点标记为slave，当故障节点恢复后会自动成为新的master的slave节点</li></ul><figure><img src="'+S+'" alt="image-20210725154816841" tabindex="0" loading="lazy"><figcaption>image-20210725154816841</figcaption></figure><h3 id="_3-1-4-小结" tabindex="-1"><a class="header-anchor" href="#_3-1-4-小结" aria-hidden="true">#</a> 3.1.4.小结</h3><p>Sentinel的三个作用是什么？</p><ul><li>监控</li><li>故障转移</li><li>通知</li></ul><p>Sentinel如何判断一个redis实例是否健康？</p><ul><li>每隔1秒发送一次ping命令，如果超过一定时间没有相向则认为是主观下线</li><li>如果大多数sentinel都认为实例主观下线，则判定服务下线</li></ul><p>故障转移步骤有哪些？</p><ul><li>首先选定一个slave作为新的master，执行slaveof no one</li><li>然后让所有节点都执行slaveof 新master</li><li>修改故障节点配置，添加slaveof 新master</li></ul><h2 id="_3-2-搭建哨兵集群" tabindex="-1"><a class="header-anchor" href="#_3-2-搭建哨兵集群" aria-hidden="true">#</a> 3.2.搭建哨兵集群</h2>',81),pa={href:"http://xn--Redis-2o3nn90k.md",target:"_blank",rel:"noopener noreferrer"},da=s('<figure><img src="'+w+'" alt="image-20210725155019276" tabindex="0" loading="lazy"><figcaption>image-20210725155019276</figcaption></figure><h2 id="_3-3-redistemplate" tabindex="-1"><a class="header-anchor" href="#_3-3-redistemplate" aria-hidden="true">#</a> 3.3.RedisTemplate</h2><p>在Sentinel集群监管下的Redis主从集群，其节点会因为自动故障转移而发生变化，Redis的客户端必须感知这种变化，及时更新连接信息。Spring的RedisTemplate底层利用lettuce实现了节点的感知和自动切换。</p><p>下面，我们通过一个测试来实现RedisTemplate集成哨兵机制。</p><h3 id="_3-3-1-导入demo工程" tabindex="-1"><a class="header-anchor" href="#_3-3-1-导入demo工程" aria-hidden="true">#</a> 3.3.1.导入Demo工程</h3><p>首先，我们引入课前资料提供的Demo工程：</p><figure><img src="'+q+`" alt="image-20210725155124958" tabindex="0" loading="lazy"><figcaption>image-20210725155124958</figcaption></figure><h3 id="_3-3-2-引入依赖" tabindex="-1"><a class="header-anchor" href="#_3-3-2-引入依赖" aria-hidden="true">#</a> 3.3.2.引入依赖</h3><p>在项目的pom文件中引入依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-3-配置redis地址" tabindex="-1"><a class="header-anchor" href="#_3-3-3-配置redis地址" aria-hidden="true">#</a> 3.3.3.配置Redis地址</h3><p>然后在配置文件application.yml中指定redis的sentinel相关信息：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  redis<span class="token operator">:</span>
    sentinel<span class="token operator">:</span>
      master<span class="token operator">:</span> mymaster
      nodes<span class="token operator">:</span>
        <span class="token operator">-</span> <span class="token number">192.168</span><span class="token number">.150</span><span class="token number">.101</span><span class="token operator">:</span><span class="token number">27001</span>
        <span class="token operator">-</span> <span class="token number">192.168</span><span class="token number">.150</span><span class="token number">.101</span><span class="token operator">:</span><span class="token number">27002</span>
        <span class="token operator">-</span> <span class="token number">192.168</span><span class="token number">.150</span><span class="token number">.101</span><span class="token operator">:</span><span class="token number">27003</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-4-配置读写分离" tabindex="-1"><a class="header-anchor" href="#_3-3-4-配置读写分离" aria-hidden="true">#</a> 3.3.4.配置读写分离</h3><p>在项目的启动类中，添加一个新的bean：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">LettuceClientConfigurationBuilderCustomizer</span> <span class="token function">clientConfigurationBuilderCustomizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> clientConfigurationBuilder <span class="token operator">-&gt;</span> clientConfigurationBuilder<span class="token punctuation">.</span><span class="token function">readFrom</span><span class="token punctuation">(</span><span class="token class-name">ReadFrom</span><span class="token punctuation">.</span><span class="token constant">REPLICA_PREFERRED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个bean中配置的就是读写策略，包括四种：</p><ul><li>MASTER：从主节点读取</li><li>MASTER_PREFERRED：优先从master节点读取，master不可用才读取replica</li><li>REPLICA：从slave（replica）节点读取</li><li>REPLICA _PREFERRED：优先从slave（replica）节点读取，所有的slave都不可用才读取master</li></ul><h1 id="_4-redis分片集群" tabindex="-1"><a class="header-anchor" href="#_4-redis分片集群" aria-hidden="true">#</a> 4.Redis分片集群</h1><h2 id="_4-1-搭建分片集群" tabindex="-1"><a class="header-anchor" href="#_4-1-搭建分片集群" aria-hidden="true">#</a> 4.1.搭建分片集群</h2><p>主从和哨兵可以解决高可用、高并发读的问题。但是依然有两个问题没有解决：</p><ul><li><p>海量数据存储问题</p></li><li><p>高并发写的问题</p></li></ul><p>使用分片集群可以解决上述问题，如图:</p><figure><img src="`+T+'" alt="image-20210725155747294" tabindex="0" loading="lazy"><figcaption>image-20210725155747294</figcaption></figure><p>分片集群特征：</p><ul><li><p>集群中有多个master，每个master保存不同数据</p></li><li><p>每个master都可以有多个slave节点</p></li><li><p>master之间通过ping监测彼此健康状态</p></li><li><p>客户端请求可以访问集群任意节点，最终都会被转发到正确节点</p></li></ul>',26),oa={href:"http://xn--Redis-2o3nn90k.md",target:"_blank",rel:"noopener noreferrer"},ca=s('<figure><img src="'+j+'" alt="image-20210725155806288" tabindex="0" loading="lazy"><figcaption>image-20210725155806288</figcaption></figure><h2 id="_4-2-散列插槽" tabindex="-1"><a class="header-anchor" href="#_4-2-散列插槽" aria-hidden="true">#</a> 4.2.散列插槽</h2><h3 id="_4-2-1-插槽原理" tabindex="-1"><a class="header-anchor" href="#_4-2-1-插槽原理" aria-hidden="true">#</a> 4.2.1.插槽原理</h3><p>Redis会把每一个master节点映射到0~16383共16384个插槽（hash slot）上，查看集群信息时就能看到：</p><figure><img src="'+L+'" alt="image-20210725155820320" tabindex="0" loading="lazy"><figcaption>image-20210725155820320</figcaption></figure><p>数据key不是与节点绑定，而是与插槽绑定。redis会根据key的有效部分计算插槽值，分两种情况：</p><ul><li>key中包含&quot;{}&quot;，且“{}”中至少包含1个字符，“{}”中的部分是有效部分</li><li>key中不包含“{}”，整个key都是有效部分</li></ul><p>例如：key是num，那么就根据num计算，如果是{itcast}num，则根据itcast计算。计算方式是利用CRC16算法得到一个hash值，然后对16384取余，得到的结果就是slot值。</p><figure><img src="'+P+'" alt="image-20210725155850200" tabindex="0" loading="lazy"><figcaption>image-20210725155850200</figcaption></figure><p>如图，在7001这个节点执行set a 1时，对a做hash运算，对16384取余，得到的结果是15495，因此要存储到103节点。</p><p>到了7003后，执行<code>get num</code>时，对num做hash运算，对16384取余，得到的结果是2765，因此需要切换到7001节点</p><h3 id="_4-2-1-小结" tabindex="-1"><a class="header-anchor" href="#_4-2-1-小结" aria-hidden="true">#</a> 4.2.1.小结</h3><p>Redis如何判断某个key应该在哪个实例？</p><ul><li>将16384个插槽分配到不同的实例</li><li>根据key的有效部分计算哈希值，对16384取余</li><li>余数作为插槽，寻找插槽所在实例即可</li></ul><p>如何将同一类数据固定的保存在同一个Redis实例？</p><ul><li>这一类数据使用相同的有效部分，例如key都以{typeId}为前缀</li></ul><h2 id="_4-3-集群伸缩" tabindex="-1"><a class="header-anchor" href="#_4-3-集群伸缩" aria-hidden="true">#</a> 4.3.集群伸缩</h2><p>redis-cli --cluster提供了很多操作集群的命令，可以通过下面方式查看：</p><figure><img src="'+N+'" alt="image-20210725160138290" tabindex="0" loading="lazy"><figcaption>image-20210725160138290</figcaption></figure><p>比如，添加节点的命令：</p><figure><img src="'+t+`" alt="image-20210725160448139" tabindex="0" loading="lazy"><figcaption>image-20210725160448139</figcaption></figure><h3 id="_4-3-1-需求分析" tabindex="-1"><a class="header-anchor" href="#_4-3-1-需求分析" aria-hidden="true">#</a> 4.3.1.需求分析</h3><p>需求：向集群中添加一个新的master节点，并向其中存储 num = 10</p><ul><li>启动一个新的redis实例，端口为7004</li><li>添加7004到之前的集群，并作为一个master节点</li><li>给7004节点分配插槽，使得num这个key可以存储到7004实例</li></ul><p>这里需要两个新的功能：</p><ul><li>添加一个节点到集群中</li><li>将部分插槽分配到新插槽</li></ul><h3 id="_4-3-2-创建新的redis实例" tabindex="-1"><a class="header-anchor" href="#_4-3-2-创建新的redis实例" aria-hidden="true">#</a> 4.3.2.创建新的redis实例</h3><p>创建一个文件夹：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token number">7004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拷贝配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> redis.conf /7004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> /s/6379/7004/g <span class="token number">7004</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-server <span class="token number">7004</span>/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-3-添加新节点到redis" tabindex="-1"><a class="header-anchor" href="#_4-3-3-添加新节点到redis" aria-hidden="true">#</a> 4.3.3.添加新节点到redis</h3><p>添加节点的语法如下：</p><figure><img src="`+t+`" alt="image-20210725160448139" tabindex="0" loading="lazy"><figcaption>image-20210725160448139</figcaption></figure><p>执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> add-node  <span class="token number">192.168</span>.150.101:7004 <span class="token number">192.168</span>.150.101:7001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过命令查看集群状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-p</span> <span class="token number">7001</span> cluster nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如图，7004加入了集群，并且默认是一个master节点：</p><figure><img src="`+V+'" alt="image-20210725161007099" tabindex="0" loading="lazy"><figcaption>image-20210725161007099</figcaption></figure><p>但是，可以看到7004节点的插槽数量为0，因此没有任何数据可以存储到7004上</p><h3 id="_4-3-4-转移插槽" tabindex="-1"><a class="header-anchor" href="#_4-3-4-转移插槽" aria-hidden="true">#</a> 4.3.4.转移插槽</h3><p>我们要将num存储到7004节点，因此需要先看看num的插槽是多少：</p><figure><img src="'+M+'" alt="image-20210725161241793" tabindex="0" loading="lazy"><figcaption>image-20210725161241793</figcaption></figure><p>如上图所示，num的插槽为2765.</p><p>我们可以将0~3000的插槽从7001转移到7004，命令格式如下：</p><figure><img src="'+G+'" alt="image-20210725161401925" tabindex="0" loading="lazy"><figcaption>image-20210725161401925</figcaption></figure><p>具体命令如下：</p><p>建立连接：</p><figure><img src="'+H+'" alt="image-20210725161506241" tabindex="0" loading="lazy"><figcaption>image-20210725161506241</figcaption></figure><p>得到下面的反馈：</p><figure><img src="'+J+'" alt="image-20210725161540841" tabindex="0" loading="lazy"><figcaption>image-20210725161540841</figcaption></figure><p>询问要移动多少个插槽，我们计划是3000个：</p><p>新的问题来了：</p><figure><img src="'+K+'" alt="image-20210725161637152" tabindex="0" loading="lazy"><figcaption>image-20210725161637152</figcaption></figure><p>那个node来接收这些插槽？？</p><p>显然是7004，那么7004节点的id是多少呢？</p><figure><img src="'+Q+'" alt="image-20210725161731738" tabindex="0" loading="lazy"><figcaption>image-20210725161731738</figcaption></figure><p>复制这个id，然后拷贝到刚才的控制台后：</p><figure><img src="'+U+'" alt="image-20210725161817642" tabindex="0" loading="lazy"><figcaption>image-20210725161817642</figcaption></figure><p>这里询问，你的插槽是从哪里移动过来的？</p><ul><li>all：代表全部，也就是三个节点各转移一部分</li><li>具体的id：目标节点的id</li><li>done：没有了</li></ul><p>这里我们要从7001获取，因此填写7001的id：</p><figure><img src="'+W+'" alt="image-20210725162030478" tabindex="0" loading="lazy"><figcaption>image-20210725162030478</figcaption></figure><p>填完后，点击done，这样插槽转移就准备好了：</p><figure><img src="'+X+'" alt="image-20210725162101228" tabindex="0" loading="lazy"><figcaption>image-20210725162101228</figcaption></figure><p>确认要转移吗？输入yes：</p><p>然后，通过命令查看结果：</p><figure><img src="'+Y+'" alt="image-20210725162145497" tabindex="0" loading="lazy"><figcaption>image-20210725162145497</figcaption></figure><p>可以看到：</p><figure><img src="'+Z+'" alt="image-20210725162224058" tabindex="0" loading="lazy"><figcaption>image-20210725162224058</figcaption></figure><p>目的达成。</p><h2 id="_4-4-故障转移" tabindex="-1"><a class="header-anchor" href="#_4-4-故障转移" aria-hidden="true">#</a> 4.4.故障转移</h2><p>集群初识状态是这样的：</p><figure><img src="'+l+`" alt="image-20210727161152065" tabindex="0" loading="lazy"><figcaption>image-20210727161152065</figcaption></figure><p>其中7001、7002、7003都是master，我们计划让7002宕机。</p><h3 id="_4-4-1-自动故障转移" tabindex="-1"><a class="header-anchor" href="#_4-4-1-自动故障转移" aria-hidden="true">#</a> 4.4.1.自动故障转移</h3><p>当集群中有一个master宕机会发生什么呢？</p><p>直接停止一个redis实例，例如7002：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-p</span> <span class="token number">7002</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1）首先是该实例与其它实例失去连接</p><p>2）然后是疑似宕机：</p><figure><img src="`+$+'" alt="image-20210725162319490" tabindex="0" loading="lazy"><figcaption>image-20210725162319490</figcaption></figure><p>3）最后是确定下线，自动提升一个slave为新的master：</p><figure><img src="'+aa+'" alt="image-20210725162408979" tabindex="0" loading="lazy"><figcaption>image-20210725162408979</figcaption></figure><p>4）当7002再次启动，就会变为一个slave节点了：</p><figure><img src="'+ea+'" alt="image-20210727160803386" tabindex="0" loading="lazy"><figcaption>image-20210727160803386</figcaption></figure><h3 id="_4-4-2-手动故障转移" tabindex="-1"><a class="header-anchor" href="#_4-4-2-手动故障转移" aria-hidden="true">#</a> 4.4.2.手动故障转移</h3><p>利用cluster failover命令可以手动让集群中的某个master宕机，切换到执行cluster failover命令的这个slave节点，实现无感知的数据迁移。其流程如下：</p><figure><img src="'+sa+'" alt="image-20210725162441407" tabindex="0" loading="lazy"><figcaption>image-20210725162441407</figcaption></figure><p>这种failover命令可以指定三种模式：</p><ul><li>缺省：默认的流程，如图1~6歩</li><li>force：省略了对offset的一致性校验</li><li>takeover：直接执行第5歩，忽略数据一致性、忽略master状态和其它master的意见</li></ul><p><strong>案例需求</strong>：在7002这个slave节点执行手动故障转移，重新夺回master地位</p><p>步骤如下：</p><p>1）利用redis-cli连接7002这个节点</p><p>2）执行cluster failover命令</p><p>如图：</p><figure><img src="'+ia+'" alt="image-20210727160037766" tabindex="0" loading="lazy"><figcaption>image-20210727160037766</figcaption></figure><p>效果：</p><figure><img src="'+l+`" alt="image-20210727161152065" tabindex="0" loading="lazy"><figcaption>image-20210727161152065</figcaption></figure><h2 id="_4-5-redistemplate访问分片集群" tabindex="-1"><a class="header-anchor" href="#_4-5-redistemplate访问分片集群" aria-hidden="true">#</a> 4.5.RedisTemplate访问分片集群</h2><p>RedisTemplate底层同样基于lettuce实现了分片集群的支持，而使用的步骤与哨兵模式基本一致：</p><p>1）引入redis的starter依赖</p><p>2）配置分片集群地址</p><p>3）配置读写分离</p><p>与哨兵模式相比，其中只有分片集群的配置方式略有差异，如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">cluster</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">7001</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">7002</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">7003</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">8001</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">8002</span>
        <span class="token punctuation">-</span> 192.168.150.101<span class="token punctuation">:</span><span class="token number">8003</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,111);function ga(ma,ua){const i=p("ExternalLinkIcon");return d(),o("div",null,[ta,e("p",null,[a("具体搭建流程参考课前资料《"),e("a",la,[a("Redis集群.md"),n(i)]),a("》：")]),ra,e("p",null,[a("具体搭建流程参考课前资料《"),e("a",pa,[a("Redis集群.md"),n(i)]),a("》：")]),da,e("p",null,[a("具体搭建流程参考课前资料《"),e("a",oa,[a("Redis集群.md"),n(i)]),a("》：")]),ca])}const va=r(na,[["render",ga],["__file","03.Redis高级篇-分布式缓存.html.vue"]]);export{va as default};
