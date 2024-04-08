import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as a,d as t,e as p}from"./app-5f6064b2.js";const l="/assets/1668006370555-99c927ff-03ba-4808-8a0e-444e5b65782e-e4edb919.png",u="/assets/1668007068077-d3adea97-3791-42b9-9916-3276bffe0ca8-f7de21a6.jpeg",r="/assets/1666078919892-238a8f5c-beea-4cef-8874-34c5dd431647-ac3c60a0.png",k="/assets/1666078939427-d67abbac-316e-4377-b92f-65ca682bcfbf-861d225e.png",d="/assets/1666078960233-b641c8ed-0e33-412d-98d0-817dc8fc25e8-c5b38fd2.png",g="/assets/1666078971344-eaa1b3e3-ccd0-45d8-97a7-987daa25ca81-8815082b.png",m="/assets/1666078981288-87bb1cf8-e259-4516-91fd-4e0977f54fa3-e0e9cbd7.png",b="/assets/1666079043594-6c550bb7-4297-4632-a51d-6138eb4f8833-24542682.png",v="/assets/1666079177817-0a44ba5f-06ad-41fe-b8df-e8535f11826a-75413507.png",f="/assets/1666079456153-cc98deef-ecb1-4e35-81bf-d25588915f8b-7905a188.png",h="/assets/1666079551922-1b19d128-4816-400d-89db-2003acb77f6e-7939994f.png",_="/assets/1666079574479-01b328bc-117b-4778-9558-beac57c274dd-bf663ed2.png",y="/assets/1666079618461-a7b00305-9381-4684-95c4-99ddf733f7a7-463ae475.png",x="/assets/1666079661077-b08e06e2-c4e7-4c07-864e-095f6a1aa9b5-a28f1552.png",w="/assets/1666079718948-90c1faad-67e0-4e06-94fe-95ce2a8b9880-57622bb9.png",T="/assets/1666079772068-41f5c1b5-f7e2-496e-8491-af16ae8015ee-8fe2f65d.png",I="/assets/1666079824788-f359f6e2-a0f3-471e-af4c-d3ce3cef73f1-56af2035.png",O="/assets/1666079849250-fff9f6dc-bf7c-4382-bfb2-e927917f9ada-07a72f90.png",z="/assets/1666080107818-b898b760-4a2c-431b-aea7-9f7d15517c4d-29bf20f3.png",S="/assets/1666080330679-e452e29d-dfce-47d4-b285-1c52fc804501-6bd03e4b.png",j="/assets/1666080316709-f85ca464-7c8f-4720-a4f2-3983636f4323-45437ad6.png",q={},N=p('<h2 id="_1、了解权限管家" tabindex="-1"><a class="header-anchor" href="#_1、了解权限管家" aria-hidden="true">#</a> 1、了解权限管家</h2><h3 id="_1-1、介绍" tabindex="-1"><a class="header-anchor" href="#_1-1、介绍" aria-hidden="true">#</a> 1.1、介绍</h3><p>公司有多个业务系统，这些业务系统的公共部分包括组织、用户、权限等系统管理：</p><figure><img src="'+l+'" alt="image-20220228161416340.png" tabindex="0" loading="lazy"><figcaption>image-20220228161416340.png</figcaption></figure><p>这个公共的系统管理，可以剥离出一套基础组件服务，即权限管家。</p><p>传智权限管家是一个通用的权限管理中台服务，在神领物流项目中，我们使用权限系统管理企业内部员工，比如：快递员、司机、管理员等。</p><p>在权限管家中可以管理用户，管理后台系统的菜单，以及角色的管理。</p><h3 id="_1-2、逻辑模型" tabindex="-1"><a class="header-anchor" href="#_1-2、逻辑模型" aria-hidden="true">#</a> 1.2、逻辑模型</h3><p>权限管家的接口根据管理范围分为公司级、应用级和系统接口，如下图：</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、部署安装" tabindex="-1"><a class="header-anchor" href="#_2、部署安装" aria-hidden="true">#</a> 2、部署安装</h2>',11),D={href:"https://sl-express.itheima.net/#/zh-cn/base-service?id=%e6%9d%83%e9%99%90%e7%ae%a1%e5%ae%b6",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"_3、登录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3、登录","aria-hidden":"true"},"#"),a(" 3、登录")],-1),M={href:"http://auth.sl-express.com/api/authority/static/index.html#/login",target:"_blank",rel:"noopener noreferrer"},J=p('<p>用户名密码：admin/123456</p><figure><img src="'+r+'" alt="image-20220729150005960.png" tabindex="0" loading="lazy"><figcaption>image-20220729150005960.png</figcaption></figure><figure><img src="'+k+'" alt="image-20220729150028329.png" tabindex="0" loading="lazy"><figcaption>image-20220729150028329.png</figcaption></figure><h2 id="_4、应用管理" tabindex="-1"><a class="header-anchor" href="#_4、应用管理" aria-hidden="true">#</a> 4、应用管理</h2><p>权限管家是一个多应用的管理系统，所以要接入权限管家首先需要创建应用。</p><p>【应用管理】 =&gt; 【添加应用】<br><img src="'+d+'" alt="image-20220729150644377.png" loading="lazy"></p><p>创建成功：</p><figure><img src="'+g+'" alt="image-20220729151041632.png" tabindex="0" loading="lazy"><figcaption>image-20220729151041632.png</figcaption></figure><p>查看应用所对应的ID和CODE：<br><img src="'+m+'" alt="image-20220729151124872.png" loading="lazy"></p><h2 id="_5、组织管理" tabindex="-1"><a class="header-anchor" href="#_5、组织管理" aria-hidden="true">#</a> 5、组织管理</h2><p>一般公司会设置不同的组织结构用来管理人员，比如：总部、分公司、人事部、行政部、财务部、物流部、物流转运等。</p><figure><img src="'+b+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>添加组织，组织是一颗树，所以需要选择上级组织：</p><figure><img src="'+v+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>添加完成：</p><figure><img src="'+f+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_6、进入应用" tabindex="-1"><a class="header-anchor" href="#_6、进入应用" aria-hidden="true">#</a> 6、进入应用</h2><p>对于应用的操作需要进入到应用中才能操作：</p><figure><img src="'+h+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>进入应用后，可以看到左侧菜单有3项管理：【用户管理】、【菜单管理】、【角色管理】</p><figure><img src="'+_+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>对应的后台系统的菜单列表：<strong>（不要修改）</strong></p><figure><img src="'+y+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>应用中的角色：</p><figure><img src="'+x+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_7、新增用户" tabindex="-1"><a class="header-anchor" href="#_7、新增用户" aria-hidden="true">#</a> 7、新增用户</h2><p>新增用户需要【返回权限管家】进行操作，在【用户管理】中【新增用户】：</p><figure><img src="'+w+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+T+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>新增用户：</p><figure><img src="'+I+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>添加成功：</p><figure><img src="'+O+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_8、分配角色" tabindex="-1"><a class="header-anchor" href="#_8、分配角色" aria-hidden="true">#</a> 8、分配角色</h2><p>现在为【test01】分配快递员角色，怎么操作呢？</p><p>首先需要进入到【神领物流】应用，在【用户管理】中分配角色：</p><figure><img src="'+z+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+S+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+j+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>这样，test01就拥有了【快递员】角色了。</p><p>同理，可以添加其他的用户了。</p><h2 id="_9、sdk使用说明" tabindex="-1"><a class="header-anchor" href="#_9、sdk使用说明" aria-hidden="true">#</a> 9、SDK使用说明</h2><h3 id="_9-1、关于authority-sdk" tabindex="-1"><a class="header-anchor" href="#_9-1、关于authority-sdk" aria-hidden="true">#</a> 9.1、关于authority-sdk</h3><p>authority-sdk是基于authority-sdk的restful接口实现的Java SDK的封装，实现了token、组织、菜单、角色等功能。</p><h3 id="_9-2、快速集成使用" tabindex="-1"><a class="header-anchor" href="#_9-2、快速集成使用" aria-hidden="true">#</a> 9.2、快速集成使用</h3><p>authority-sdk提供了两种方式与业务系统对接，分别是：</p><ul><li>java sdk方式</li><li>Spring Boot集成方式</li></ul><h3 id="_9-3、使用方法" tabindex="-1"><a class="header-anchor" href="#_9-3、使用方法" aria-hidden="true">#</a> 9.3、使用方法</h3><h4 id="_9-3-1、java-sdk方式" tabindex="-1"><a class="header-anchor" href="#_9-3-1、java-sdk方式" aria-hidden="true">#</a> 9.3.1、java sdk方式</h4><blockquote><p><strong>第一步，导入maven依赖</strong></p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.itheima.em.auth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>authority-sdk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>{version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>第二步，实例化AuthTemplate对象</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> host <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">;</span> <span class="token comment">//Authority服务地址</span>
<span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">8764</span><span class="token punctuation">;</span> <span class="token comment">//Authority服务端口</span>
<span class="token keyword">int</span> timeout <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">//http请求的超时时间，不传值默认为10S</span>
        
<span class="token comment">//token，非登录请求都需要带上,一般情况下登录成功后将该数据放入缓存中        </span>
<span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxIiwiYWNjb3VudCI6ImFkbWluIiwibmFtZSI6IuW5s-WPsOeuoeeQhuWRmCIsIm9yZ2lkIjo4NzQyMjc2MTUxNzM0NDk4MjUsInN0YXRpb25pZCI6ODU3OTQwMTU3NDYwOTU3NTM3LCJhZG1pbmlzdHJhdG9yIjp0cnVlLCJleHAiOjE2NTEyNTkyODB9.anqT0MD9zAr13KG9OE4mqHHK2UMCOXUjeMrEsN1wy9_a14zFbjPkiDZ8dM7JirsAgj61yvshoP6pqBImdmyilQN-iFSa_ci15Ii4HhfFE1mcaRon3ojX_T9ncjHKuF9Y9ZPKT68NOzOfCwvhDrG_sDiaI1C-TwEJmhLM78FhwAI&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//应用ID，非登录请求都需要带上，该参数表示你需要查询哪个应用相关数据,一般情况下置于配置文件中</span>
<span class="token class-name">Long</span> applicationId <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
<span class="token comment">//登录获取token</span>
<span class="token class-name">AuthTemplate</span> authTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthTemplate</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span>port<span class="token punctuation">,</span><span class="token constant">TIME_OUT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginDTO</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> authTemplate<span class="token punctuation">.</span><span class="token function">opsForLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">token</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//后续基于AuthTemplate可以调用各种服务</span>
<span class="token class-name">AuthTemplate</span> authTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthTemplate</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span>port<span class="token punctuation">,</span><span class="token constant">TIME_OUT</span><span class="token punctuation">,</span>token<span class="token punctuation">,</span>applicationId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">MenuDTO</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> authTemplate<span class="token punctuation">.</span><span class="token function">opsForPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;菜单：{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-3-2、spring-boot集成方式" tabindex="-1"><a class="header-anchor" href="#_9-3-2、spring-boot集成方式" aria-hidden="true">#</a> 9.3.2、Spring Boot集成方式</h4><blockquote><p><strong>第一步，导入maven依赖</strong></p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.itheima.em.auth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>itcast-auth-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 如果是SNAPSHOT版本，如要在项目的pom.xml文件中引入快照版源 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>sonatypeSnapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Sonatype Snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://s01.oss.sonatype.org/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>第二步，配置application.yml文件</strong></p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">itcast</span><span class="token punctuation">:</span>
  <span class="token key atrule">authority</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1 <span class="token comment">#authority服务地址,根据实际情况更改</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8764</span> <span class="token comment">#authority服务端口</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10000</span> <span class="token comment">#http请求的超时时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三步，使用用例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span></span><span class="token class-name">AuthTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Result</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">LoginDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">MenuDTO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${itcast.authority.host}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> host<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${itcast.authority.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token constant">TIME_OUT</span> <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 登录获取token
     * <span class="token keyword">@param</span> <span class="token parameter">account</span>
     * <span class="token keyword">@param</span> <span class="token parameter">password</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">String</span> account<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AuthTemplate</span> authTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthTemplate</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LoginDTO</span><span class="token punctuation">&gt;</span></span> loginDTO <span class="token operator">=</span> authTemplate<span class="token punctuation">.</span><span class="token function">opsForLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">token</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;登录结果：{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>loginDTO<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60);function L(E,U){const s=o("ExternalLinkIcon");return c(),i("div",null,[N,n("p",null,[a("参考："),n("a",D,[a("https://sl-express.itheima.net/#/zh-cn/base-service?id=权限管家"),t(s)])]),A,n("p",null,[a("登录地址："),n("a",M,[a("http://auth.sl-express.com/api/authority/static/index.html#/login"),t(s)])]),J])}const V=e(q,[["render",L],["__file","权限管家使用说明.html.vue"]]);export{V as default};
