import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as s,b as n,d as t,e as a}from"./app-5f6064b2.js";const o="/assets/202306162158337-2d065126.png",r="/assets/202306162158495-e5e47e9c.png",u={},d=a('<h1 id="八、docker-安装私人镜像仓库" tabindex="-1"><a class="header-anchor" href="#八、docker-安装私人镜像仓库" aria-hidden="true">#</a> 八、docker 安装私人镜像仓库</h1><h2 id="_1-安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-安装docker-compose" aria-hidden="true">#</a> 1 安装docker-compose</h2><h3 id="_1-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-下载" aria-hidden="true">#</a> 1.1 下载</h3><p>Linux下需要通过命令下载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>\n<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.23.1/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果下载速度较慢，或者下载失败，可以使用课前资料提供的docker-compose文件：</p><figure><img src="'+o+`" alt="image-20210417133020614" tabindex="0" loading="lazy"><figcaption>image-20210417133020614</figcaption></figure><p>上传到<code>/usr/local/bin/</code>目录也可以。</p><h3 id="_1-2-修改文件权限" tabindex="-1"><a class="header-anchor" href="#_1-2-修改文件权限" aria-hidden="true">#</a> 1.2 修改文件权限</h3><p>修改文件权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改权限</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-base自动补全命令" tabindex="-1"><a class="header-anchor" href="#_1-3-base自动补全命令" aria-hidden="true">#</a> 1.3 Base自动补全命令：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 补全命令</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.githubusercontent.com/docker/compose/1.29.1/contrib/completion/bash/docker-compose <span class="token operator">&gt;</span> /etc/bash_completion.d/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果这里出现错误，需要修改自己的hosts文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;199.232.68.133 raw.githubusercontent.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-搭建docker镜像仓库v1版本-了解即可" tabindex="-1"><a class="header-anchor" href="#_2-搭建docker镜像仓库v1版本-了解即可" aria-hidden="true">#</a> 2 搭建Docker镜像仓库V1版本（了解即可）</h2><p>搭建镜像仓库可以基于Docker官方提供的DockerRegistry来实现。</p>`,17),k={href:"https://hub.docker.com/_/registry",target:"_blank",rel:"noopener noreferrer"},v=a(`<h3 id="_2-1-简化版镜像仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-简化版镜像仓库" aria-hidden="true">#</a> 2.1 简化版镜像仓库</h3><p>Docker官方的Docker Registry是一个基础版本的Docker镜像仓库，具备仓库管理的完整功能，但是没有图形化界面。</p><p>搭建方式比较简单，命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> registry	<span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> registry-data:/var/lib/registry <span class="token punctuation">\\</span>
    registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令中挂载了一个数据卷registry-data到容器内的/var/lib/registry 目录，这是私有镜像库存放数据的目录。</p>`,5),m={href:"http://YourIp:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},b=a(`<h3 id="_2-2-带有图形化界面版本-v1版本-官方说已废弃" tabindex="-1"><a class="header-anchor" href="#_2-2-带有图形化界面版本-v1版本-官方说已废弃" aria-hidden="true">#</a> 2.2 带有图形化界面版本（V1版本，官方说已废弃）</h3><p>使用DockerCompose部署带有图象界面的DockerRegistry，命令如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.0&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./registry<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/registry
  <span class="token key atrule">ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> joxit/docker<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>ui<span class="token punctuation">:</span>static
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> REGISTRY_TITLE=传智教育私有仓库
      <span class="token punctuation">-</span> REGISTRY_URL=http<span class="token punctuation">:</span>//registry<span class="token punctuation">:</span><span class="token number">5000</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置docker信任地址" tabindex="-1"><a class="header-anchor" href="#_2-3-配置docker信任地址" aria-hidden="true">#</a> 2.3 配置Docker信任地址</h3><p>我们的私服采用的是http协议，默认不被Docker信任，所以需要做一个配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开要修改的文件</span>
<span class="token function">vi</span> /etc/docker/daemon.json
<span class="token comment"># 添加内容：</span>
<span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;http://{centos所在的ip（非dockerip））}:8080&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 重加载</span>
systemctl daemon-reload
<span class="token comment"># 重启docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-搭建docker镜像仓库v2版本-使用本地存储" tabindex="-1"><a class="header-anchor" href="#_3-搭建docker镜像仓库v2版本-使用本地存储" aria-hidden="true">#</a> 3 搭建Docker镜像仓库V2版本（使用本地存储）</h2>`,7),h={href:"https://github.com/Joxit/docker-registry-ui",target:"_blank",rel:"noopener noreferrer"},y=a(`<h3 id="_3-1-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_3-1-docker-compose-yml" aria-hidden="true">#</a> 3.1 docker-compose.yml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">registry-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> joxit/docker<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>ui<span class="token punctuation">:</span>main
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SINGLE_REGISTRY=true
      <span class="token punctuation">-</span> REGISTRY_TITLE=Docker Registry UI
      <span class="token punctuation">-</span> DELETE_IMAGES=true
      <span class="token punctuation">-</span> SHOW_CONTENT_DIGEST=true
      <span class="token punctuation">-</span> NGINX_PROXY_PASS_URL=http<span class="token punctuation">:</span>//registry<span class="token punctuation">-</span>server<span class="token punctuation">:</span><span class="token number">5000</span>
      <span class="token punctuation">-</span> SHOW_CATALOG_NB_TAGS=true
      <span class="token punctuation">-</span> CATALOG_MIN_BRANCHES=1
      <span class="token punctuation">-</span> CATALOG_MAX_BRANCHES=1
      <span class="token punctuation">-</span> TAGLIST_PAGE_SIZE=100
      <span class="token punctuation">-</span> REGISTRY_SECURED=false
      <span class="token punctuation">-</span> CATALOG_ELEMENTS_LIMIT=1000
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> registry<span class="token punctuation">-</span>ui

  <span class="token key atrule">registry-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry<span class="token punctuation">:</span>2.8.2
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">REGISTRY_HTTP_HEADERS_Access-Control-Origin</span><span class="token punctuation">:</span> <span class="token string">&#39;[&quot;*&quot;]&#39;</span>
      <span class="token key atrule">REGISTRY_STORAGE_DELETE_ENABLED</span><span class="token punctuation">:</span> <span class="token string">&#39;true&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./registry/data<span class="token punctuation">:</span>/var/lib/registry
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> registry<span class="token punctuation">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-使用如下命令启动即可" tabindex="-1"><a class="header-anchor" href="#_3-2-使用如下命令启动即可" aria-hidden="true">#</a> 3.2 使用如下命令启动即可</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-搭建docker镜像仓库v2版本-使用s3标准对象存储进行存储" tabindex="-1"><a class="header-anchor" href="#_4-搭建docker镜像仓库v2版本-使用s3标准对象存储进行存储" aria-hidden="true">#</a> 4 搭建Docker镜像仓库V2版本（使用S3标准对象存储进行存储）</h2><h3 id="_4-1-创建配置文件config-yml" tabindex="-1"><a class="header-anchor" href="#_4-1-创建配置文件config-yml" aria-hidden="true">#</a> 4.1 创建配置文件config.yml</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ./registry-config
<span class="token builtin class-name">cd</span> ./registry-config
<span class="token function">vim</span> config.yml
<span class="token comment"># 将config.yml中的内容写入即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-1-config-yml" tabindex="-1"><a class="header-anchor" href="#_4-1-1-config-yml" aria-hidden="true">#</a> 4.1.1 config.yml</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">0.1</span>

<span class="token key atrule">log</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span> debug
  <span class="token key atrule">fields</span><span class="token punctuation">:</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span> registry<span class="token punctuation">-</span>server
<span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">delete</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">blobdescriptor</span><span class="token punctuation">:</span> inmemory
  <span class="token key atrule">s3</span><span class="token punctuation">:</span>
    <span class="token key atrule">accesskey</span><span class="token punctuation">:</span> admin
    <span class="token key atrule">secretkey</span><span class="token punctuation">:</span> admin123456
    <span class="token key atrule">region</span><span class="token punctuation">:</span> us<span class="token punctuation">-</span>east<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">regionendpoint</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//minio<span class="token punctuation">-</span>server<span class="token punctuation">:</span><span class="token number">9000</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> lyf110<span class="token punctuation">-</span>docker<span class="token punctuation">-</span>repo
    <span class="token key atrule">encrypt</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">secure</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">v4auth</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">chunksize</span><span class="token punctuation">:</span> <span class="token number">5242880</span>
    <span class="token key atrule">rootdirectory</span><span class="token punctuation">:</span> /
  <span class="token key atrule">redirect</span><span class="token punctuation">:</span>
    <span class="token key atrule">disable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token key atrule">addr</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">5000</span>
  <span class="token key atrule">headers</span><span class="token punctuation">:</span>
    <span class="token key atrule">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>
<span class="token key atrule">health</span><span class="token punctuation">:</span>
  <span class="token key atrule">storagedriver</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">threshold</span><span class="token punctuation">:</span> <span class="token number">3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#_4-2-docker-compose-yaml" aria-hidden="true">#</a> 4.2 docker-compose.yaml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/lyf110<span class="token punctuation">-</span>docker<span class="token punctuation">-</span>repo/minio<span class="token punctuation">:</span>RELEASE.2023<span class="token punctuation">-</span>06<span class="token punctuation">-</span>09T07<span class="token punctuation">-</span>32<span class="token punctuation">-</span>12Z
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9000<span class="token punctuation">:</span><span class="token number">9000</span>
      <span class="token punctuation">-</span> 9090<span class="token punctuation">:</span><span class="token number">9090</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/minio/data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> ./data/minio/minio<span class="token punctuation">:</span>/minio
      <span class="token punctuation">-</span> ./data/minio/config<span class="token punctuation">:</span>/root/.minio
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> LANG=en_US.UTF<span class="token punctuation">-</span><span class="token number">8</span>
      <span class="token punctuation">-</span> MINIO_ROOT_USER=admin
      <span class="token punctuation">-</span> MINIO_ROOT_PASSWORD=admin123456
      <span class="token punctuation">-</span> MINIO_REGION=us<span class="token punctuation">-</span>east<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> minio<span class="token punctuation">-</span>server
    <span class="token key atrule">command</span><span class="token punctuation">:</span> server /data  <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &quot;<span class="token punctuation">:</span>9090&quot;

  <span class="token key atrule">registry-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry<span class="token punctuation">:</span>2.8.2
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./registry<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/registry
      <span class="token punctuation">-</span> ./registry<span class="token punctuation">-</span>config/config.yml<span class="token punctuation">:</span>/etc/docker/registry/config.yml
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> registry<span class="token punctuation">-</span>server
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> minio<span class="token punctuation">-</span>server

  <span class="token key atrule">registry-ui</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> joxit/docker<span class="token punctuation">-</span>registry<span class="token punctuation">-</span>ui
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SINGLE_REGISTRY=true
      <span class="token punctuation">-</span> REGISTRY_TITLE=lyf110的私人仓库
      <span class="token punctuation">-</span> DELETE_IMAGES=true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-使用如下命令启动" tabindex="-1"><a class="header-anchor" href="#_4-3-使用如下命令启动" aria-hidden="true">#</a> 4.3 使用如下命令启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-重要-我们需要手动去s3存储服务器创建bucket" tabindex="-1"><a class="header-anchor" href="#_4-4-重要-我们需要手动去s3存储服务器创建bucket" aria-hidden="true">#</a> 4.4 重要：我们需要手动去S3存储服务器创建bucket</h3><figure><img src="`+r+'" alt="image-20230616215439823" tabindex="0" loading="lazy"><figcaption>image-20230616215439823</figcaption></figure>',15);function g(_,f){const e=p("ExternalLinkIcon");return c(),l("div",null,[d,s("p",null,[n("官网地址："),s("a",k,[n("https://hub.docker.com/_/registry"),t(e)])]),v,s("p",null,[n("访问"),s("a",m,[n("http://YourIp:5000/v2/_catalog"),t(e)]),n(" 可以查看当前私有镜像服务中包含的镜像")]),b,s("p",null,[n("项目地址: "),s("a",h,[n("docker-registry-ui"),t(e)])]),y])}const T=i(u,[["render",g],["__file","Docker安装私人镜像仓库.html.vue"]]);export{T as default};
