import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as u,a as n,b as s,d as a,e as i}from"./app-5f6064b2.js";const d="/assets/1567691051440-dff99b83.png",c="/assets/1567691098941-56c9ae82.png",r="/assets/1567691213668-cae69eef.png",p="/assets/1567696557762-399b3eb9.png",v="/assets/1567696574236-0fbdc4ad.png",m="/assets/1567696692347-034e2f59.png",q="/assets/1567696700718-7f441cee.png",b="/assets/1567696712256-629e37c7.png",k="/assets/1567696843304-2d317ebc.png",g="/assets/1568622526251-64ac6583.png",h="/assets/1568622589010-ce0c3dcf.png",_="/assets/1568622607418-ed5b4e79.png",x="/assets/1568622619503-fef13406.png",y="/assets/1568622671957-81609ef9.png",f="/assets/1568622683707-5fc7c102.png",w="/assets/1568627572838-1673126b.png",E="/assets/1568627617789-9ef341a6.png",A="/assets/1568632608676-29094666.png",T="/assets/1568632860925-6511b01b.png",S="/assets/1568632872820-d0831041.png",R="/assets/1568632881931-b84bb8e5.png",j="/assets/1568632895254-d334dc43.png",M="/assets/1568978200919-6658d049.png",B="/assets/1568989192034-ed74ef78.png",I="/assets/1568990520717-e0fae2ce.png",P="/assets/1569123478530-b00805a3.png",O="/assets/1571494142950-c13777bd.png",D="/assets/1571494159465-ae0d7678.png",U="/assets/1571494176760-350e0734.png",C="/assets/1573212830146-cecc6733.png",z="/assets/1573291947262-bf915692.png",L={},G=i('<h1 id="elk搜索高级课程" tabindex="-1"><a class="header-anchor" href="#elk搜索高级课程" aria-hidden="true">#</a> ELK搜索高级课程</h1><h1 id="_1-课程简介" tabindex="-1"><a class="header-anchor" href="#_1-课程简介" aria-hidden="true">#</a> 1． 课程简介</h1><h2 id="_1-1-课程内容" tabindex="-1"><a class="header-anchor" href="#_1-1-课程内容" aria-hidden="true">#</a> 1.1 课程内容</h2><p>ELK是包含但不限于Elasticsearch（简称es）、Logstash、Kibana 三个开源软件的组成的一个整体。这三个软件合成ELK。是用于数据抽取（Logstash）、搜索分析（Elasticsearch）、数据展现（Kibana）的一整套解决方案，所以也称作ELK stack。</p><p>本课程从分别对三个组件经行详细介绍，尤其是Elasticsearch，因为它是elk的核心。本课程从es底层对文档、索引、搜索、聚合、集群经行介绍，从搜索和聚合分析实例来展现es的魅力。Logstash从内部如何采集数据到指定地方来展现它数据采集的功能。Kibana则从数据绘图展现数据可视化的功能。</p><h2 id="_1-2-面向人员" tabindex="-1"><a class="header-anchor" href="#_1-2-面向人员" aria-hidden="true">#</a> 1.2 面向人员</h2><ul><li>java工程师：深入研究es,使得java工程师向搜索工程师迈进。</li><li>运维工程师：搭建整体elk集群。不需写代码，仅需配置，即可收集服务器指标、日志文件、数据库数据，并在前端华丽展现。</li><li>数据分析人员：不需写代码，仅需配置kibana图表，即可完成数据可视化工作，得到想要的数据图表。</li><li>大厂架构师：完成数据中台的搭建。对公司数据流的处理得心应手，对接本公司大数据业务。</li></ul><h2 id="_1-3-课程优势" tabindex="-1"><a class="header-anchor" href="#_1-3-课程优势" aria-hidden="true">#</a> 1.3 课程优势</h2><ul><li><p>基于最新的elk7.3版本讲解。最新api。包含sql功能。</p></li><li><p>理论和实际代码相辅相成。理论结合画图讲解。代码与spring boot结合。</p></li><li><p>包含实际运维部署理论与实践。</p></li><li><p>Elk整体流程项目，包含数据采集。</p></li></ul><h2 id="_1-4-学习路径" tabindex="-1"><a class="header-anchor" href="#_1-4-学习路径" aria-hidden="true">#</a> 1.4 学习路径</h2><p>参照目录，按照介绍，es入门，文档、映射、索引、分词器、搜索、聚合。logstash、kibana。集群部署。项目实战。</p><p>每个知识点先学概念，在学rest api,最后java代码上手。</p><h1 id="_2-elastic-stack简介" tabindex="-1"><a class="header-anchor" href="#_2-elastic-stack简介" aria-hidden="true">#</a> 2． Elastic Stack简介</h1><h2 id="_2-1简介" tabindex="-1"><a class="header-anchor" href="#_2-1简介" aria-hidden="true">#</a> 2.1简介</h2>',14),H={href:"https://www.elastic.co/cn%E3%80%82%E5%8C%85%E5%90%AB%E4%B8%89%E5%A4%A7%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%88%86%E5%88%AB%E6%98%AFElasticsearch%E3%80%81Logstash%E3%80%81Kibana%E3%80%82%E4%BD%86%E5%AE%9E%E9%99%85%E4%B8%8AELK%E4%B8%8D%E4%BB%85%E4%BB%85%E9%80%82%E7%94%A8%E4%BA%8E%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90%EF%BC%8C%E5%AE%83%E8%BF%98%E5%8F%AF%E4%BB%A5%E6%94%AF%E6%8C%81%E5%85%B6%E5%AE%83%E4%BB%BB%E4%BD%95%E6%95%B0%E6%8D%AE%E6%90%9C%E7%B4%A2%E3%80%81%E5%88%86%E6%9E%90%E5%92%8C%E6%94%B6%E9%9B%86%E7%9A%84%E5%9C%BA%E6%99%AF%EF%BC%8C%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90%E5%92%8C%E6%94%B6%E9%9B%86%E5%8F%AA%E6%98%AF%E6%9B%B4%E5%85%B7%E6%9C%89%E4%BB%A3%E8%A1%A8%E6%80%A7%E3%80%82%E5%B9%B6%E9%9D%9E%E5%94%AF%E4%B8%80%E6%80%A7%E3%80%82%E4%B8%8B%E9%9D%A2%E6%98%AFELK%E6%9E%B6%E6%9E%84%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},N=i('<figure><img src="'+d+'" alt="1567691051440" tabindex="0" loading="lazy"><figcaption>1567691051440</figcaption></figure><p>随着elk的发展，又有新成员Beats、elastic cloud的加入，所以就形成了Elastic Stack。所以说，ELK是旧的称呼，Elastic Stack是新的名字。</p><figure><img src="'+c+'" alt="1567691098941" tabindex="0" loading="lazy"><figcaption>1567691098941</figcaption></figure><h2 id="_2-2特色" tabindex="-1"><a class="header-anchor" href="#_2-2特色" aria-hidden="true">#</a> 2.2特色</h2><ul><li><p>处理方式灵活：elasticsearch是目前最流行的准实时全文检索引擎，具有高速检索大数据的能力。</p></li><li><p>配置简单：安装elk的每个组件，仅需配置每个组件的一个配置文件即可。修改处不多，因为大量参数已经默认配在系统中，修改想要修改的选项即可。</p></li><li><p>接口简单：采用json形式RESTFUL API接受数据并响应，无关语言。</p></li><li><p>性能高效：elasticsearch基于优秀的全文搜索技术Lucene，采用倒排索引，可以轻易地在百亿级别数据量下，搜索出想要的内容，并且是秒级响应。</p></li><li><p>灵活扩展：elasticsearch和logstash都可以根据集群规模线性拓展，elasticsearch内部自动实现集群协作。</p></li><li><p>数据展现华丽：kibana作为前端展现工具，图表华丽，配置简单。</p></li></ul><h2 id="_2-3组件介绍" tabindex="-1"><a class="header-anchor" href="#_2-3组件介绍" aria-hidden="true">#</a> 2.3组件介绍</h2><p><strong>Elasticsearch</strong></p><p>Elasticsearch 是使用java开发，基于Lucene、分布式、通过Restful方式进行交互的近实时搜索平台框架。它的特点有：分布式，零配置，自动发现，索引自动分片，索引副本机制，restful风格接口，多数据源，自动搜索负载等。</p><p><strong>Logstash</strong></p><p>Logstash 基于java开发，是一个数据抽取转化工具。一般工作方式为c/s架构，client端安装在需要收集信息的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往elasticsearch或其他组件上去。</p><p><strong>Kibana</strong></p><p>Kibana 基于nodejs，也是一个开源和免费的可视化工具。Kibana可以为 Logstash 和 ElasticSearch 提供的日志分析友好的 Web 界面，可以汇总、分析和搜索重要数据日志。</p><p><strong>Beats</strong></p><p>Beats 平台集合了多种单一用途数据采集器。它们从成百上千或成千上万台机器和系统向 Logstash 或 Elasticsearch 发送数据。</p><p>Beats由如下组成:</p><p>​ Packetbeat：轻量型网络数据采集器，用于深挖网线上传输的数据，了解应用程序动态。Packetbeat 是一款轻量型网络数据包分析器，能够将数据发送至 Logstash 或 Elasticsearch。其支 持ICMP (v4 and v6)、DNS、HTTP、Mysql、PostgreSQL、Redis、MongoDB、Memcache等协议。</p><p>​ Filebeat：轻量型日志采集器。当您要面对成百上千、甚至成千上万的服务器、虚拟机和容器生成的日志时，请告别 SSH 吧。Filebeat 将为您提供一种轻量型方法，用于转发和汇总日志与文件，让简单的事情不再繁杂。</p><p>​ Metricbeat ：轻量型指标采集器。Metricbeat 能够以一种轻量型的方式，输送各种系统和服务统计数据，从 CPU 到内存，从 Redis 到 Nginx，不一而足。可定期获取外部系统的监控指标信息，其可以监控、收集 Apache http、HAProxy、MongoDB、MySQL、Nginx、PostgreSQL、Redis、System、Zookeeper等服务。</p><p>​ Winlogbeat：轻量型 Windows 事件日志采集器。用于密切监控基于 Windows 的基础设施上发生的事件。Winlogbeat 能够以一种轻量型的方式，将 Windows 事件日志实时地流式传输至 Elasticsearch 和 Logstash。</p><p>​ Auditbeat：轻量型审计日志采集器。收集您 Linux 审计框架的数据，监控文件完整性。Auditbeat 实时采集这些事件，然后发送到 Elastic Stack 其他部分做进一步分析。</p><p>​ Heartbeat：面向运行状态监测的轻量型采集器。通过主动探测来监测服务的可用性。通过给定 URL 列表，Heartbeat 仅仅询问：网站运行正常吗？Heartbeat 会将此信息和响应时间发送至 Elastic 的其他部分，以进行进一步分析。</p><p>​ Functionbeat：面向云端数据的无服务器采集器。在作为一项功能部署在云服务提供商的功能即服务 (FaaS) 平台上后，Functionbeat 即能收集、传送并监测来自您的云服务的相关数据。</p><p><strong>Elastic cloud</strong></p><p>基于 Elasticsearch 的软件即服务(SaaS)解决方案。通过 Elastic 的官方合作伙伴使用托管的 Elasticsearch 服务。</p><figure><img src="'+r+'" alt="1567691213668" tabindex="0" loading="lazy"><figcaption>1567691213668</figcaption></figure><h1 id="_3-elasticsearch是什么" tabindex="-1"><a class="header-anchor" href="#_3-elasticsearch是什么" aria-hidden="true">#</a> 3． Elasticsearch是什么</h1><h2 id="_3-1搜索是什么" tabindex="-1"><a class="header-anchor" href="#_3-1搜索是什么" aria-hidden="true">#</a> 3.1搜索是什么</h2><p>概念：用户输入想要的关键词，返回含有该关键词的所有信息。</p><p>场景：</p><p>​ 1互联网搜索：谷歌、百度、各种新闻首页</p><p>​ 2 站内搜索（垂直搜索）：企业OA查询订单、人员、部门，电商网站内部搜索商品（淘宝、京东）场景。</p><h2 id="_3-2-数据库做搜索弊端" tabindex="-1"><a class="header-anchor" href="#_3-2-数据库做搜索弊端" aria-hidden="true">#</a> 3.2 数据库做搜索弊端</h2><h3 id="_3-2-1站内搜索-垂直搜索-数据量小-简单搜索-可以使用数据库。" tabindex="-1"><a class="header-anchor" href="#_3-2-1站内搜索-垂直搜索-数据量小-简单搜索-可以使用数据库。" aria-hidden="true">#</a> 3.2.1站内搜索（垂直搜索）：数据量小，简单搜索，可以使用数据库。</h3><p>问题出现：</p><p>l 存储问题。电商网站商品上亿条时，涉及到单表数据过大必须拆分表，数据库磁盘占用过大必须分库（mycat）。</p><p>l 性能问题：解决上面问题后，查询“笔记本电脑”等关键词时，上亿条数据的商品名字段逐行扫描，性能跟不上。</p><p>l 不能分词。如搜索“笔记本电脑”，只能搜索完全和关键词一样的数据，那么数据量小时，搜索“笔记电脑”，“电脑”数据要不要给用户。</p><h3 id="_3-2-2互联网搜索-肯定不会使用数据库搜索。数据量太大。pb级。" tabindex="-1"><a class="header-anchor" href="#_3-2-2互联网搜索-肯定不会使用数据库搜索。数据量太大。pb级。" aria-hidden="true">#</a> 3.2.2互联网搜索，肯定不会使用数据库搜索。数据量太大。PB级。</h3><h2 id="_3-3全文检索、倒排索引和lucene" tabindex="-1"><a class="header-anchor" href="#_3-3全文检索、倒排索引和lucene" aria-hidden="true">#</a> 3.3全文检索、倒排索引和Lucene</h2><h4 id="全文检索" tabindex="-1"><a class="header-anchor" href="#全文检索" aria-hidden="true">#</a> <strong>全文检索</strong></h4><p>倒排索引。数据存储时，经行分词建立term索引库。见画图。</p>',41),F={href:"https://baike.baidu.com/item/%E7%B4%A2%E5%BC%95%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://baike.baidu.com/item/%E5%80%92%E6%8E%92%E6%96%87%E4%BB%B6/4137688",target:"_blank",rel:"noopener noreferrer"},Y=i('<h4 id="lucene" tabindex="-1"><a class="header-anchor" href="#lucene" aria-hidden="true">#</a> Lucene</h4><p>就是一个jar包，里面封装了全文检索的引擎、搜索的算法代码。开发时，引入lucen的jar包，通过api开发搜索相关业务。底层会在磁盘建立索引库。</p><h2 id="_3-4-什么是elasticsearch" tabindex="-1"><a class="header-anchor" href="#_3-4-什么是elasticsearch" aria-hidden="true">#</a> 3.4 什么是Elasticsearch</h2><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><figure><img src="'+p+'" alt="1567696557762" tabindex="0" loading="lazy"><figcaption>1567696557762</figcaption></figure>',5),V={href:"https://www.elastic.co/cn/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"},K=i('<figure><img src="'+v+'" alt="1567696574236" tabindex="0" loading="lazy"><figcaption>1567696574236</figcaption></figure><h4 id="elasticsearch的功能" tabindex="-1"><a class="header-anchor" href="#elasticsearch的功能" aria-hidden="true">#</a> Elasticsearch的功能</h4><ul><li>分布式的搜索引擎和数据分析引擎</li></ul><p>搜索：互联网搜索、电商网站站内搜索、OA系统查询</p><p>数据分析：电商网站查询近一周哪些品类的图书销售前十；新闻网站，最近3天阅读量最高的十个关键词，舆情分析。</p><ul><li>全文检索，结构化检索，数据分析</li></ul><p>全文检索：搜索商品名称包含java的图书select * from books where book_name like &quot;%java%&quot;。</p><p>结构化检索：搜索商品分类为spring的图书都有哪些，select * from books where category_id=&#39;spring&#39;</p><p>数据分析：分析每一个分类下有多少种图书，select category_id,count(*) from books group by category_id</p><ul><li>对海量数据进行近实时的处理</li></ul><p>分布式：ES自动可以将海量数据分散到多台服务器上去存储和检索,经行并行查询，提高搜索效率。相对的，Lucene是单机应用。</p><p>近实时：数据库上亿条数据查询，搜索一次耗时几个小时，是批处理（batch-processing）。而es只需秒级即可查询海量数据，所以叫近实时。秒级。</p><h4 id="elasticsearch的使用场景" tabindex="-1"><a class="header-anchor" href="#elasticsearch的使用场景" aria-hidden="true">#</a> Elasticsearch的使用场景</h4><p>国外：</p><ul><li><p>维基百科，类似百度百科，“网络七层协议”的维基百科，全文检索，高亮，搜索推荐</p></li><li><p>Stack Overflow（国外的程序讨论论坛），相当于程序员的贴吧。遇到it问题去上面发帖，热心网友下面回帖解答。</p></li><li><p>GitHub（开源代码管理），搜索上千亿行代码。</p></li><li><p>电商网站，检索商品</p></li><li><p>日志数据分析，logstash采集日志，ES进行复杂的数据分析（ELK技术，elasticsearch+logstash+kibana）</p></li><li><p>商品价格监控网站，用户设定某商品的价格阈值，当低于该阈值的时候，发送通知消息给用户，比如说订阅《java编程思想》的监控，如果价格低于27块钱，就通知我，我就去买。</p></li><li><p>BI系统，商业智能（Business Intelligence）。大型连锁超市，分析全国网点传回的数据，分析各个商品在什么季节的销售量最好、利润最高。成本管理，店面租金、员工工资、负债等信息进行分析。从而部署下一个阶段的战略目标。</p></li></ul><p>国内：</p><ul><li><p>百度搜索，第一次查询，使用es。</p></li><li><p>OA、ERP系统站内搜索。</p></li></ul><h4 id="elasticsearch的特点" tabindex="-1"><a class="header-anchor" href="#elasticsearch的特点" aria-hidden="true">#</a> Elasticsearch的特点</h4><ul><li><p>可拓展性：大型分布式集群（数百台服务器）技术，处理PB级数据，大公司可以使用。小公司数据量小，也可以部署在单机。大数据领域使用广泛。</p></li><li><p>技术整合：将全文检索、数据分析、分布式相关技术整合在一起：lucene（全文检索），商用的数据分析软件（BI软件），分布式数据库（mycat）</p></li><li><p>部署简单：开箱即用，很多默认配置不需关心，解压完成直接运行即可。拓展时，只需多部署几个实例即可，负载均衡、分片迁移集群内部自己实施。</p></li><li><p>接口简单：使用restful api经行交互，跨语言。</p></li><li><p>功能强大：Elasticsearch作为传统数据库的一个补充，提供了数据库所不不能提供的很多功能，如全文检索，同义词处理，相关度排名。</p></li></ul><figure><img src="'+m+'" alt="1567696692347" tabindex="0" loading="lazy"><figcaption>1567696692347</figcaption></figure><figure><img src="'+q+'" alt="1567696700718" tabindex="0" loading="lazy"><figcaption>1567696700718</figcaption></figure><figure><img src="'+b+'" alt="1567696712256" tabindex="0" loading="lazy"><figcaption>1567696712256</figcaption></figure><h2 id="_3-5-elasticsearch核心概念" tabindex="-1"><a class="header-anchor" href="#_3-5-elasticsearch核心概念" aria-hidden="true">#</a> 3.5 elasticsearch核心概念</h2><h3 id="_3-5-1-lucene和elasticsearch的关系" tabindex="-1"><a class="header-anchor" href="#_3-5-1-lucene和elasticsearch的关系" aria-hidden="true">#</a> 3.5.1 lucene和elasticsearch的关系</h3><p>Lucene：最先进、功能最强大的搜索库，直接基于lucene开发，非常复杂，api复杂</p>',25),Z={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.3/java-rest-low.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.3/java-rest-low.html",target:"_blank",rel:"noopener noreferrer"},W=i('<figure><img src="'+k+`" alt="1567696843304" tabindex="0" loading="lazy"><figcaption>1567696843304</figcaption></figure><p>起源：Shay Banon。2004年失业，陪老婆去伦敦学习厨师。失业在家帮老婆写一个菜谱搜索引擎。封装了lucene的开源项目，compass。找到工作后，做分布式高性能项目，再封装compass，写出了elasticsearch，使得lucene支持分布式。现在是Elasticsearch创始人兼Elastic首席执行官。</p><h3 id="_3-5-2-elasticsearch的核心概念" tabindex="-1"><a class="header-anchor" href="#_3-5-2-elasticsearch的核心概念" aria-hidden="true">#</a> 3.5.2 elasticsearch的核心概念</h3><h4 id="_1-nrt-near-realtime-近实时" tabindex="-1"><a class="header-anchor" href="#_1-nrt-near-realtime-近实时" aria-hidden="true">#</a> 1 NRT（Near Realtime）：近实时</h4><p>两方面：</p><ul><li><p>写入数据时，过1秒才会被搜索到，因为内部在分词、录入索引。</p></li><li><p>es搜索时：搜索和分析数据需要秒级出结果。</p></li></ul><h4 id="_2-cluster-集群" tabindex="-1"><a class="header-anchor" href="#_2-cluster-集群" aria-hidden="true">#</a> 2 Cluster：集群</h4><p>包含一个或多个启动着es实例的机器群。通常一台机器起一个es实例。同一网络下，集名一样的多个es实例自动组成集群，自动均衡分片等行为。默认集群名为“elasticsearch”。</p><h4 id="_3-node-节点" tabindex="-1"><a class="header-anchor" href="#_3-node-节点" aria-hidden="true">#</a> 3 Node：节点</h4><p>每个es实例称为一个节点。节点名自动分配，也可以手动配置。</p><h4 id="_4-index-索引" tabindex="-1"><a class="header-anchor" href="#_4-index-索引" aria-hidden="true">#</a> 4 Index：索引</h4><p>包含一堆有相似结构的文档数据。</p><p>索引创建规则：</p><ul><li><p>仅限小写字母</p></li><li><p>不能包含<code>\\、/、 *、?、&quot;、&lt;、&gt;、|、#以及空格符等特殊符号</code></p></li><li><p>从7.0版本开始不再包含冒号</p></li><li><p>不能以<code>-、_或+开头</code></p></li><li><p>不能超过255个字节（注意它是字节，因此多字节字符将计入255个限制）</p></li></ul><h4 id="_5-document-文档" tabindex="-1"><a class="header-anchor" href="#_5-document-文档" aria-hidden="true">#</a> 5 Document：文档</h4><p>es中的最小数据单元。一个document就像数据库中的一条记录。通常以json格式显示。多个document存储于一个索引（Index）中。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>book document

<span class="token punctuation">{</span>
  <span class="token property">&quot;book_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;book_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java编程思想&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;book_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;从Java的基础语法到最高级特性（深入的[面向对象](https://baike.baidu.com/item/面向对象)概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-field-字段" tabindex="-1"><a class="header-anchor" href="#_6-field-字段" aria-hidden="true">#</a> 6 Field:字段</h4><p>就像数据库中的列（Columns），定义每个document应该有的字段。</p><h4 id="_7-type-类型" tabindex="-1"><a class="header-anchor" href="#_7-type-类型" aria-hidden="true">#</a> 7 Type：类型</h4><p>每个索引里都可以有一个或多个type，type是index中的一个逻辑数据分类，一个type下的document，都有相同的field。</p><p><strong>注意</strong>：6.0之前的版本有type（类型）概念，type相当于关系数据库的表，ES官方将在ES9.0版本中彻底删除type。本教程typy都为_doc。</p><h4 id="_8-shard-分片" tabindex="-1"><a class="header-anchor" href="#_8-shard-分片" aria-hidden="true">#</a> 8 shard：分片</h4><p>index数据过大时，将index里面的数据，分为多个shard，分布式的存储在各个服务器上面。可以支持海量数据和高并发，提升性能和吞吐量，充分利用多台机器的cpu。</p><h4 id="_9-replica-副本" tabindex="-1"><a class="header-anchor" href="#_9-replica-副本" aria-hidden="true">#</a> 9 replica：副本</h4><p>在分布式环境下，任何一台机器都会随时宕机，如果宕机，index的一个分片没有，导致此index不能搜索。所以，为了保证数据的安全，我们会将每个index的分片经行备份，存储在另外的机器上。保证少数机器宕机es集群仍可以搜索。</p><p>能正常提供查询和插入的分片我们叫做主分片（primary shard），其余的我们就管他们叫做备份的分片（replica shard）。</p><p>es6默认新建索引时，5分片，2副本，也就是一主一备，共10个分片。所以，es集群最小规模为两台。</p><h3 id="_3-5-3-elasticsearch核心概念-vs-数据库核心概念" tabindex="-1"><a class="header-anchor" href="#_3-5-3-elasticsearch核心概念-vs-数据库核心概念" aria-hidden="true">#</a> 3.5.3 elasticsearch核心概念 vs. 数据库核心概念</h3><table><thead><tr><th><strong>关系型数据库（比如Mysql）</strong></th><th><strong>非关系型数据库（Elasticsearch）</strong></th></tr></thead><tbody><tr><td>数据库Database</td><td>索引Index</td></tr><tr><td>表Table</td><td>索引Index（原为Type）</td></tr><tr><td>数据行Row</td><td>文档Document</td></tr><tr><td>数据列Column</td><td>字段Field</td></tr><tr><td>约束 Schema</td><td>映射Mapping</td></tr></tbody></table><h1 id="_4-elasticsearch相关软件安装" tabindex="-1"><a class="header-anchor" href="#_4-elasticsearch相关软件安装" aria-hidden="true">#</a> 4． Elasticsearch相关软件安装</h1><h2 id="_4-1-windows安装elasticsearch" tabindex="-1"><a class="header-anchor" href="#_4-1-windows安装elasticsearch" aria-hidden="true">#</a> 4.1. Windows安装elasticsearch</h2><h3 id="_1、安装jdk-至少1-8-0-73以上版本-验证-java-version。" tabindex="-1"><a class="header-anchor" href="#_1、安装jdk-至少1-8-0-73以上版本-验证-java-version。" aria-hidden="true">#</a> 1、安装JDK，至少1.8.0_73以上版本，验证：java -version。</h3><h3 id="_2、下载和解压缩elasticsearch安装包-查看目录结构。" tabindex="-1"><a class="header-anchor" href="#_2、下载和解压缩elasticsearch安装包-查看目录结构。" aria-hidden="true">#</a> 2、下载和解压缩Elasticsearch安装包，查看目录结构。</h3>`,34),X={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},$=i(`<p>bin：脚本目录，包括：启动、停止等可执行脚本</p><p>config：配置文件目录</p><p>data：索引目录，存放索引文件的地方</p><p>logs：日志目录</p><p>modules：模块目录，包括了es的功能模块</p><p>plugins :插件目录，es支持插件机制</p><h3 id="_3、配置文件" tabindex="-1"><a class="header-anchor" href="#_3、配置文件" aria-hidden="true">#</a> 3、配置文件：</h3><p>位置：</p><p>ES的配置文件的地址根据安装形式的不同而不同：</p><p>使用zip、tar安装，配置文件的地址在安装目录的config下。</p><p>使用RPM安装，配置文件在/etc/elasticsearch下。</p><p>使用MSI安装，配置文件的地址在安装目录的config下，并且会自动将config目录地址写入环境变量ES_PATH_CONF。</p><p><strong>elasticsearch.yml</strong></p><p>配置格式是YAML，可以采用如下两种方式：</p><p>方式1：层次方式</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">path</span><span class="token punctuation">:</span>
    <span class="token key atrule">data</span><span class="token punctuation">:</span> /var/lib/elasticsearch
    <span class="token key atrule">logs</span><span class="token punctuation">:</span> /var/log/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：属性方式</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">path.data</span><span class="token punctuation">:</span> /var/lib/elasticsearch
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /var/log/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的配置项如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> 
	配置elasticsearch的集群名称，默认是elasticsearch。建议修改成一个有意义的名称。
<span class="token key atrule">node.name</span><span class="token punctuation">:</span>
	节点名，通常一台物理服务器就是一个节点，es会默认随机指定一个名字，建议指定一个有意义的名称，方便管理
	一个或多个节点组成一个cluster集群，集群是一个逻辑的概念，节点是物理概念，后边章节会详细介绍。
<span class="token key atrule">path.conf</span><span class="token punctuation">:</span> 
	设置配置文件的存储路径，tar或zip包安装默认在es根目录下的config文件夹，rpm安装默认在/etc/ elasticsearch
<span class="token key atrule">path.data</span><span class="token punctuation">:</span>
	设置索引数据的存储路径，默认是es根目录下的data文件夹，可以设置多个存储路径，用逗号隔开。
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span>
	设置日志文件的存储路径，默认是es根目录下的logs文件夹
<span class="token key atrule">path.plugins</span><span class="token punctuation">:</span> 
	设置插件的存放路径，默认是es根目录下的plugins文件夹
<span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
	设置为true可以锁住ES使用的内存，避免内存与swap分区交换数据。
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 
	设置绑定主机的ip地址，设置为0.0.0.0表示绑定任何ip，允许外网访问，生产环境建议设置为具体的ip。
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
	设置对外服务的http端口，默认为9200。
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> 9300  集群结点之间通信端口
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> 
	指定该节点是否有资格被选举成为master结点，默认是true，如果原来的master宕机会重新选举新的master。
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> 
	指定该节点是否存储索引数据，默认为true。
<span class="token key atrule">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;host1:port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host2:port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span>
	设置集群中master节点的初始列表。
<span class="token key atrule">discovery.zen.ping.timeout</span><span class="token punctuation">:</span> 3s
	设置ES自动发现节点连接超时的时间，默认为3秒，如果网络延迟高可设置大些。
<span class="token key atrule">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span>
	主结点数量的最少值 <span class="token punctuation">,</span>此值的公式为：(master_eligible_nodes / 2) + 1 ，比如：有3个符合要求的主结点，那么这里要设置为2。
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> 
	单机允许的最大存储结点数，通常单机启动一个结点建议设置为1，开发环境如果单机启动多个节点可设置大于1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jvm.options</strong></p><p>设置最小及最大的JVM堆内存大小：</p><p>在jvm.options中设置 -Xms和-Xmx：</p><p>1） 两个值设置为相等</p><p>2） 将Xmx 设置为不超过物理内存的一半。</p><p><strong>log4j2.properties</strong></p><p>日志文件设置，ES使用log4j，注意日志级别的配置。</p><h3 id="_4、启动elasticsearch-bin-elasticsearch-bat-es的特点就是开箱即-无需配置-启动即可。" tabindex="-1"><a class="header-anchor" href="#_4、启动elasticsearch-bin-elasticsearch-bat-es的特点就是开箱即-无需配置-启动即可。" aria-hidden="true">#</a> 4、启动<code>Elasticsearch：bin\\elasticsearch.bat</code>，es的特点就是开箱即，无需配置，启动即可。</h3><p>注意：es7 windows版本不支持机器学习，所以elasticsearch.yml中添加如下几个参数：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>  
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>  
<span class="token key atrule">xpack.ml.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> 
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> /.<span class="token important">*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),nn={id:"_5、检查es是否启动成功-浏览器访问http-localhost-9200-pretty",tabindex:"-1"},sn=n("a",{class:"header-anchor",href:"#_5、检查es是否启动成功-浏览器访问http-localhost-9200-pretty","aria-hidden":"true"},"#",-1),en={href:"http://localhost:9200/?Pretty",target:"_blank",rel:"noopener noreferrer"},an=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elasticsearch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cluster_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HqAKQ_0tQOOm8b6qU-2Qug&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7.3.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_flavor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zip&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_hash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;de777fa&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-07-24T18:30:11.767338Z&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build_snapshot&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lucene_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.1.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_wire_compatibility_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6.8.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_index_compatibility_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tagline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><p>name: node名称，取自机器的hostname</p><p>cluster_name: 集群名称（默认的集群名称就是elasticsearch）</p><p>version.number: 7.3.0，es版本号</p><p>version.lucene_version:封装的lucene版本号</p>`,6),tn={id:"_6、浏览器访问-http-localhost-9200-cluster-health-查询集群状态",tabindex:"-1"},ln=n("a",{class:"header-anchor",href:"#_6、浏览器访问-http-localhost-9200-cluster-health-查询集群状态","aria-hidden":"true"},"#",-1),on={href:"http://localhost:9200/_cluster/health",target:"_blank",rel:"noopener noreferrer"},un=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;cluster_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elasticsearch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_nodes&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_data_nodes&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_primary_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relocating_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initializing_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;delayed_unassigned_shards&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_pending_tasks&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_in_flight_fetch&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;task_max_waiting_in_queue_millis&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active_shards_percent_as_number&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：</p><p>Status：集群状态。Green 所有分片可用。Yellow所有主分片可用。Red主分片不可用，集群不可用。</p><h2 id="_4-2-windows安装kibana" tabindex="-1"><a class="header-anchor" href="#_4-2-windows安装kibana" aria-hidden="true">#</a> 4.2. Windows安装Kibana</h2><p>1、kibana是es数据的前端展现，数据分析时，可以方便地看到数据。作为开发人员，可以方便访问es。</p><p>2、下载，解压kibana。</p><p>3、启动<code>Kibana：bin\\kibana.bat</code></p>`,7),dn={href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"},cn=i('<p>5、发送get请求，查看集群状态GET _cluster/health。相当于浏览器访问。</p><p>​ <img src="'+g+'" alt="1568622526251" loading="lazy"></p><p>​ 总览</p><figure><img src="'+h+'" alt="1568622589010" tabindex="0" loading="lazy"><figcaption>1568622589010</figcaption></figure><p>​ Dev Tools界面</p><figure><img src="'+_+'" alt="1568622607418" tabindex="0" loading="lazy"><figcaption>1568622607418</figcaption></figure><p>​ 监控集群界面</p><figure><img src="'+x+'" alt="1568622619503" tabindex="0" loading="lazy"><figcaption>1568622619503</figcaption></figure><p>​ 集群状态（搜索速率、索引速率等）</p><h2 id="_4-3-windows安装postman" tabindex="-1"><a class="header-anchor" href="#_4-3-windows安装postman" aria-hidden="true">#</a> 4.3 Windows安装postman</h2><p>是什么：postman是一个模拟http请求的工具。能够非常细致地定制化各种http请求。如get]\\post\\pu\\delete,携带body参数等。</p><p>为什么：在没有kibana时，可以使用postman调试。</p><p>怎么用：</p>',13),rn={href:"http://localhost:9200/",target:"_blank",rel:"noopener noreferrer"},pn=n("figure",null,[n("img",{src:y,alt:"1568622671957",tabindex:"0",loading:"lazy"}),n("figcaption",null,"1568622671957")],-1),vn={href:"http://localhost:9200/_cluster/health",target:"_blank",rel:"noopener noreferrer"},mn=n("figure",null,[n("img",{src:f,alt:"1568622683707",tabindex:"0",loading:"lazy"}),n("figcaption",null,"1568622683707")],-1),qn=n("h2",{id:"_4-4-windows安装head插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-4-windows安装head插件","aria-hidden":"true"},"#"),s(" 4.4 Windows安装head插件")],-1),bn={href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"},kn=i(`<p>从ES6.0开始，head插件支持使得node.js运行。</p><h3 id="_1安装node-js" tabindex="-1"><a class="header-anchor" href="#_1安装node-js" aria-hidden="true">#</a> 1安装node.js</h3><h3 id="_2下载head并运行" tabindex="-1"><a class="header-anchor" href="#_2下载head并运行" aria-hidden="true">#</a> 2下载head并运行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone git://github.com/mobz/elasticsearch-head.git 
cd elasticsearch-head 
npm install 
npm run start 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),gn={href:"http://localhost:9100/",target:"_blank",rel:"noopener noreferrer"},hn=i('<h3 id="_3运行" tabindex="-1"><a class="header-anchor" href="#_3运行" aria-hidden="true">#</a> 3运行</h3><figure><img src="'+w+`" alt="1568627572838" tabindex="0" loading="lazy"><figcaption>1568627572838</figcaption></figure><p>打开浏览器调试工具发现报错：</p><p>Origin null is not allowed by Access-Control-Allow-Origin.</p><p>原因是：head插件作为客户端要连接ES服务（localhost:9200），此时存在跨域问题，elasticsearch默认不允许跨域访问。</p><p>解决方案：</p><p>设置elasticsearch允许跨域访问。</p><p>在config/elasticsearch.yml 后面增加以下参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#开启cors跨域访问支持，默认为false   
http.cors.enabled: true   
#跨域访问允许的域名地址，(允许所有域名)以上使用正则   
http.cors.allow-origin: /.*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：将config/elasticsearch.yml另存为utf-8编码格式。</p><p>成功连接ES</p><figure><img src="`+E+'" alt="1568627617789" tabindex="0" loading="lazy"><figcaption>1568627617789</figcaption></figure><p>注意：kibana\\postman\\head插件选择自己喜欢的一种使用即可。</p>',13),_n={href:"http://localhost:9200",target:"_blank",rel:"noopener noreferrer"},xn=i(`<h1 id="_5-es快速入门" tabindex="-1"><a class="header-anchor" href="#_5-es快速入门" aria-hidden="true">#</a> 5． es快速入门</h1><h2 id="_5-1-文档-document-的数据格式" tabindex="-1"><a class="header-anchor" href="#_5-1-文档-document-的数据格式" aria-hidden="true">#</a> 5.1． 文档（document）的数据格式</h2><p>（1）应用系统的数据结构都是面向对象的，具有复杂的数据结构</p><p>（2）对象存储到数据库，需要将关联的复杂对象属性插到另一张表，查询时再拼接起来。</p><p>（3）es面向文档，文档中存储的数据结构，与对象一致。所以一个对象可以直接存成一个文档。</p><p>（4）es的document用json数据格式来表达。</p><p>例如：班级和学生关系</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  
  <span class="token keyword">private</span> <span class="token class-name">String</span> classInfoId<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">ClassInfo</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> className<span class="token punctuation">;</span>
。。。。。

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库中要设计所谓的一对多，多对一的两张表，外键等。查询出来时，还要关联，mybatis写映射文件，很繁琐。</p><p>而在es中，一个学生存成文档如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhang&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;classInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;className&quot;</span><span class="token operator">:</span> <span class="token string">&quot;三年二班&quot;</span><span class="token punctuation">,</span>     
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2图书网站商品管理案例-背景介绍" tabindex="-1"><a class="header-anchor" href="#_5-2图书网站商品管理案例-背景介绍" aria-hidden="true">#</a> 5.2图书网站商品管理案例：背景介绍</h2><p>有一个售卖图书的网站，需要为其基于ES构建一个后台系统，提供以下功能：</p><p>（1）对商品信息进行CRUD（增删改查）操作</p><p>（2）执行简单的结构化查询</p><p>（3）可以执行简单的全文检索，以及复杂的phrase（短语）检索</p><p>（4）对于全文检索的结果，可以进行高亮显示</p><p>（5）对数据进行简单的聚合分析</p><h2 id="_5-3-简单的集群管理" tabindex="-1"><a class="header-anchor" href="#_5-3-简单的集群管理" aria-hidden="true">#</a> 5.3． 简单的集群管理</h2><h3 id="_5-3-1快速检查集群的健康状况" tabindex="-1"><a class="header-anchor" href="#_5-3-1快速检查集群的健康状况" aria-hidden="true">#</a> 5.3.1快速检查集群的健康状况</h3><p>es提供了一套api，叫做cat api，可以查看es中各种各样的数据</p><p><code>GET /_cat/health?v</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>epoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent
1568635460 12:04:20  elasticsearch green           1         1      4   4    0    0        0             0                  -                100.0%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如何快速了解集群的健康状况？green、yellow、red？</p><p>green：每个索引的primary shard和replica shard都是active状态的</p><p>yellow：每个索引的primary shard都是active状态的，但是部分replica shard不是active状态，处于不可用的状态</p><p>red：不是所有索引的primary shard都是active状态的，部分索引有数据丢失了</p><h3 id="_5-3-2-快速查看集群中有哪些索引" tabindex="-1"><a class="header-anchor" href="#_5-3-2-快速查看集群中有哪些索引" aria-hidden="true">#</a> 5.3.2 快速查看集群中有哪些索引</h3><p><code>GET /_cat/indices?v</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>health status index                           uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   .kibana_task_manager            JBMgpucOSzenstLcjA_G4A   1   0          2            0     45.5kb         45.5kb
green  open   .monitoring-kibana-7-2019.09.16 LIskf15DTcS70n4Q6t2bTA   1   0        433            0    218.2kb        218.2kb
green  open   .monitoring-es-7-2019.09.16     RMeUN3tQRjqM8xBgw7Zong   1   0       3470         1724      1.9mb          1.9mb
green  open   .kibana_1                       1cRiyIdATya5xS6qK5pGJw   1   0          4            0     18.2kb         18.2kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-3-简单的索引操作" tabindex="-1"><a class="header-anchor" href="#_5-3-3-简单的索引操作" aria-hidden="true">#</a> 5.3.3 简单的索引操作</h3><p>创建索引：<code>PUT /demo_index?pretty</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;demo_index&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除索引：<code>DELETE /demo_index?pretty</code></p><h2 id="_5-4商品的crud操作-document-crud操作" tabindex="-1"><a class="header-anchor" href="#_5-4商品的crud操作-document-crud操作" aria-hidden="true">#</a> 5.4商品的CRUD操作（document CRUD操作）</h2><h3 id="_5-4-1-新建图书索引" tabindex="-1"><a class="header-anchor" href="#_5-4-1-新建图书索引" aria-hidden="true">#</a> 5.4.1 新建图书索引</h3><p>首先建立图书索引 book</p><p>语法：<code>put /index</code></p><p><code>PUT /book</code></p><figure><img src="`+A+`" alt="1568632608676" tabindex="0" loading="lazy"><figcaption>1568632608676</figcaption></figure><h3 id="_5-4-2-新增图书-新增文档" tabindex="-1"><a class="header-anchor" href="#_5-4-2-新增图书-新增文档" aria-hidden="true">#</a> 5.4.2 新增图书 :新增文档</h3><p>语法：<code>PUT /index/type/id</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /book/_doc/<span class="token number">1</span>

<span class="token punctuation">{</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bootstrap开发&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;studymodel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201002&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">38.6</span><span class="token punctuation">,</span>
<span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2019-08-25 19:11:35&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;bootstrap&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /book/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java编程思想&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;studymodel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">68.6</span><span class="token punctuation">,</span>
<span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2019-08-25 19:11:35&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">PUT</span> <span class="token operator">/</span>book<span class="token operator">/</span>_doc<span class="token operator">/</span><span class="token number">3</span>
<span class="token punctuation">{</span>
<span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spring开发基础&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spring 在java领域非常流行，java程序员都在用。&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;studymodel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">88.6</span><span class="token punctuation">,</span>
<span class="token string">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2019-08-24 19:11:35&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-3-查询图书-检索文档" tabindex="-1"><a class="header-anchor" href="#_5-4-3-查询图书-检索文档" aria-hidden="true">#</a> 5.4.3 查询图书：检索文档</h3><p>语法：<code>GET /index/type/id</code></p><p>查看图书:<code>GET /book/_doc/1</code> 就可看到json形式的文档。方便程序解析。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot; : &quot;book&quot;,
  &quot;_type&quot; : &quot;_doc&quot;,

  &quot;_id&quot; : &quot;1&quot;,

  &quot;_version&quot; : 4,

  &quot;_seq_no&quot; : 5,

  &quot;_primary_term&quot; : 1,

  &quot;found&quot; : true,

  &quot;_source&quot; : {

    &quot;name&quot; : &quot;Bootstrap开发&quot;,

    &quot;description&quot; : &quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;,

    &quot;studymodel&quot; : &quot;201002&quot;,

    &quot;price&quot; : 38.6,

    &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,

    &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,

    &quot;tags&quot; : [

      &quot;bootstrap&quot;,

      &quot;开发&quot;

    ]

  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为方便查看索引中的数据，kibana可以如下操作</p><p>Kibana-discover- Create index pattern- Index pattern填book</p><figure><img src="`+T+'" alt="1568632860925" tabindex="0" loading="lazy"><figcaption>1568632860925</figcaption></figure><p>下一步，再点击discover就可看到数据。</p><figure><img src="'+S+'" alt="1568632872820" tabindex="0" loading="lazy"><figcaption>1568632872820</figcaption></figure><p>点击json还可以看到原始数据</p><figure><img src="'+R+'" alt="1568632881931" tabindex="0" loading="lazy"><figcaption>1568632881931</figcaption></figure><p>为方便查看索引中的数据，head可以如下操作</p><p>点击数据浏览，点击book索引。</p><figure><img src="'+j+`" alt="1568632895254" tabindex="0" loading="lazy"><figcaption>1568632895254</figcaption></figure><h3 id="_5-4-4-修改图书-替换操作" tabindex="-1"><a class="header-anchor" href="#_5-4-4-修改图书-替换操作" aria-hidden="true">#</a> 5.4.4 修改图书：替换操作</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /book/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bootstrap开发教程1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;studymodel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201002&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">38.6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2019-08-25 19:11:35&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;bootstrap&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;开发&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换操作是整体覆盖，要带上所有信息。</p><h3 id="_5-4-5-修改图书-更新文档" tabindex="-1"><a class="header-anchor" href="#_5-4-5-修改图书-更新文档" aria-hidden="true">#</a> 5.4.5 修改图书：更新文档</h3><p>语法：<code>POST /{index}/type /{id}/_update</code></p><p>或者<code>POST /{index}/_update/{id}</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /book/_update/<span class="token number">1</span>/ 
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot; Bootstrap开发教程高级&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-6-删除图书-删除文档" tabindex="-1"><a class="header-anchor" href="#_5-4-6-删除图书-删除文档" aria-hidden="true">#</a> 5.4.6 删除图书：删除文档</h3><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /book/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-文档document入门" tabindex="-1"><a class="header-anchor" href="#_6-文档document入门" aria-hidden="true">#</a> 6． 文档document入门</h1><h2 id="_6-1-默认自带字段解析" tabindex="-1"><a class="header-anchor" href="#_6-1-默认自带字段解析" aria-hidden="true">#</a> 6.1． 默认自带字段解析</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Bootstrap开发教程1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;studymodel&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;201002&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">38.6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timestamp&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2019-08-25 19:11:35&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pic&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;bootstrap&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;开发&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-1-index" tabindex="-1"><a class="header-anchor" href="#_6-1-1-index" aria-hidden="true">#</a> 6.1.1 _index</h3><ul><li>含义：此文档属于哪个索引</li><li>原则：类似数据放在一个索引中。数据库中表的定义规则。如图书信息放在book索引中，员工信息放在employee索引中。各个索引存储和搜索时互不影响。</li><li>定义规则：英文小写。尽量不要使用特殊字符。order user</li></ul><h3 id="_6-1-2-type" tabindex="-1"><a class="header-anchor" href="#_6-1-2-type" aria-hidden="true">#</a> 6.1.2 _type</h3><ul><li>含义：类别。book java node</li><li>注意：以后的es9将彻底删除此字段，所以当前版本在不断弱化type。不需要关注。见到_type都为doc。</li></ul><h3 id="_6-1-3-id" tabindex="-1"><a class="header-anchor" href="#_6-1-3-id" aria-hidden="true">#</a> 6.1.3 _id</h3><p>含义：文档的唯一标识。就像表的id主键。结合索引可以标识和定义一个文档。</p><p>生成：手动<code>（put /index/_doc/id）</code>、自动</p><h3 id="_6-1-4-创建索引时-不同数据放到不同索引中" tabindex="-1"><a class="header-anchor" href="#_6-1-4-创建索引时-不同数据放到不同索引中" aria-hidden="true">#</a> 6.1.4 创建索引时，不同数据放到不同索引中</h3><h2 id="_6-2-生成文档id" tabindex="-1"><a class="header-anchor" href="#_6-2-生成文档id" aria-hidden="true">#</a> 6.2． 生成文档id</h2><h3 id="_6-2-1-手动生成id" tabindex="-1"><a class="header-anchor" href="#_6-2-1-手动生成id" aria-hidden="true">#</a> 6.2.1 手动生成id</h3><p>场景：数据从其他系统导入时，本身有唯一主键。如数据库中的图书、员工信息等。</p><p>用法：<code>put /index/_doc/id</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /test_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-2-自动生成id" tabindex="-1"><a class="header-anchor" href="#_6-2-2-自动生成id" aria-hidden="true">#</a> 6.2.2 自动生成id</h3><p>用法：<code>POST /index/_doc</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /test_index/_doc
<span class="token punctuation">{</span>
  <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;x29LOm0BPsY0gSJFYZAl&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动id特点：</p><p>长度为20个字符，URL安全，base64编码，GUID，分布式生成不冲突</p><h2 id="_6-3-source-字段" tabindex="-1"><a class="header-anchor" href="#_6-3-source-字段" aria-hidden="true">#</a> 6.3． _source 字段</h2><h3 id="_6-3-1-source" tabindex="-1"><a class="header-anchor" href="#_6-3-1-source" aria-hidden="true">#</a> 6.3.1 _source</h3><p>含义：插入数据时的所有字段和值。在get获取数据时，在_source字段中原样返回。</p><p><code>GET /book/_doc/1</code></p><h3 id="_6-3-2-定制返回字段" tabindex="-1"><a class="header-anchor" href="#_6-3-2-定制返回字段" aria-hidden="true">#</a> 6.3.2 定制返回字段</h3><p>就像sql不要<code>select *</code>,而要<code>select name,price from book …</code>一样。</p><p><code>GET /book/_doc/1?__source_includes=name,price </code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">38.6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Bootstrap开发教程1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-文档的替换与删除" tabindex="-1"><a class="header-anchor" href="#_6-4-文档的替换与删除" aria-hidden="true">#</a> 6.4． 文档的替换与删除</h2><h3 id="_6-4-1全量替换" tabindex="-1"><a class="header-anchor" href="#_6-4-1全量替换" aria-hidden="true">#</a> 6.4.1全量替换</h3><p>执行两次，返回结果中版本号（_version）在不断上升。此过程为全量替换。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /test_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实质：旧文档的内容不会立即删除，只是标记为deleted。适当的时机，集群会将这些文档删除。</p><h3 id="_6-4-2-强制创建" tabindex="-1"><a class="header-anchor" href="#_6-4-2-强制创建" aria-hidden="true">#</a> 6.4.2 强制创建</h3><p>为防止覆盖原有数据，我们在新增时，设置为强制创建，不会覆盖原有文档。</p><p>语法：<code>PUT /index/ _doc/id/_create</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /test_index/_doc/<span class="token number">1</span>/_create
<span class="token punctuation">{</span>
  <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;root_cause&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;version_conflict_engine_exception&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[2]: version conflict, document already exists (current version [1])&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lqzVqxZLQuCnd6LYtZsMkg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;shard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_index&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;version_conflict_engine_exception&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[2]: version conflict, document already exists (current version [1])&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lqzVqxZLQuCnd6LYtZsMkg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;shard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_index&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">409</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-3-删除" tabindex="-1"><a class="header-anchor" href="#_6-4-3-删除" aria-hidden="true">#</a> 6.4.3 删除</h3><p><code>DELETE /index/_doc/id</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE  /test_index/_doc/1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实质：旧文档的内容不会立即删除，只是标记为deleted。适当的时机，集群会将这些文档删除。</p><p>lazy delete</p><h2 id="_6-5-局部替换-partial-update" tabindex="-1"><a class="header-anchor" href="#_6-5-局部替换-partial-update" aria-hidden="true">#</a> 6.5． 局部替换 partial update</h2><p>使用 <code>PUT /index/type/id </code>为文档全量替换，需要将文档所有数据提交。</p><p>partial update局部替换则只修改变动字段。</p><p>用法：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>post /index/type/id/_update 
<span class="token punctuation">{</span>
   <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;field&quot;</span>：<span class="token string">&quot;value&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图解内部原理" tabindex="-1"><a class="header-anchor" href="#图解内部原理" aria-hidden="true">#</a> 图解内部原理</h4><p>内部与全量替换是一样的，旧文档标记为删除，新建一个文档。</p><p>优点：</p><ul><li>大大减少网络传输次数和流量，提升性能</li><li>减少并发冲突发生的概率。</li></ul><h4 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h4><p>插入文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/5
{
  &quot;test_field1&quot;: &quot;itcst&quot;,
  &quot;test_field2&quot;: &quot;itheima&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改字段1</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /test_index/_doc/<span class="token number">5</span>/_update
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test_field2&quot;</span><span class="token operator">:</span> <span class="token string">&quot; itheima 2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-使用脚本更新" tabindex="-1"><a class="header-anchor" href="#_6-6-使用脚本更新" aria-hidden="true">#</a> 6.6． 使用脚本更新</h2><p>es可以内置脚本执行复杂操作。例如painless脚本。</p><p>注意：groovy脚本在es6以后就不支持了。原因是耗内存，不安全远程注入漏洞。</p><h3 id="_6-6-1内置脚本" tabindex="-1"><a class="header-anchor" href="#_6-6-1内置脚本" aria-hidden="true">#</a> 6.6.1内置脚本</h3><p>需求1：修改文档6的num字段，+1。</p><p>插入数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /test_index/_doc/<span class="token number">6</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行脚本操作</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /test_index/_doc/<span class="token number">6</span>/_update
<span class="token punctuation">{</span>
   <span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ctx._source.num+=1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;found&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;num&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求2：搜索所有文档，将num字段乘以2输出</p><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/7
{
  &quot;num&quot;: 5
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /test_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;script_fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;my_doubled_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expression&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;doc[&#39;num&#39;] * multiplier&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;multiplier&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
        &quot;_index&quot; : &quot;test_index&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;7&quot;,
        &quot;_score&quot; : 1.0,
        &quot;fields&quot; : {
          &quot;my_doubled_field&quot; : [
            10.0
          ]
        }
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-2-外部脚本" tabindex="-1"><a class="header-anchor" href="#_6-6-2-外部脚本" aria-hidden="true">#</a> 6.6.2 外部脚本</h3><p>Painless是内置支持的。脚本内容可以通过多种途径传给 es，包括 rest 接口，或者放到 config/scripts目录等，默认开启。</p><p>注意：脚本性能低下，且容易发生注入，本教程忽略。</p>`,159),yn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-using.html",target:"_blank",rel:"noopener noreferrer"},fn=i(`<h2 id="_6-7-图解es的并发问题" tabindex="-1"><a class="header-anchor" href="#_6-7-图解es的并发问题" aria-hidden="true">#</a> 6.7． 图解es的并发问题</h2><p>如同秒杀，多线程情况下，es同样会出现并发冲突问题。</p><h2 id="_6-8-图解悲观锁与乐观锁机制" tabindex="-1"><a class="header-anchor" href="#_6-8-图解悲观锁与乐观锁机制" aria-hidden="true">#</a> 6.8． 图解悲观锁与乐观锁机制</h2><p>为控制并发问题，我们通常采用锁机制。分为悲观锁和乐观锁两种机制。</p><p>悲观锁：很悲观，所有情况都上锁。此时只有一个线程可以操作数据。具体例子为数据库中的行级锁、表级锁、读锁、写锁等。</p><p>特点：优点是方便，直接加锁，对程序透明。缺点是效率低。</p><p>乐观锁：很乐观，对数据本身不加锁。提交数据时，通过一种机制验证是否存在冲突，如es中通过版本号验证。</p><p>特点：优点是并发能力高。缺点是操作繁琐，在提交数据时，可能反复重试多次。</p><h2 id="_6-9-图解es内部基于-version乐观锁控制" tabindex="-1"><a class="header-anchor" href="#_6-9-图解es内部基于-version乐观锁控制" aria-hidden="true">#</a> 6.9． 图解es内部基于_version乐观锁控制</h2><h4 id="实验基于-version的版本控制" tabindex="-1"><a class="header-anchor" href="#实验基于-version的版本控制" aria-hidden="true">#</a> 实验基于_version的版本控制</h4><p>es对于文档的增删改都是基于版本号。</p><p>1新增多次文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/3
{
  &quot;test_field&quot;: &quot;test&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回版本号递增</p><p>2删除此文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /test_index/_doc/3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /test_index/_doc/3
{
  &quot;_index&quot; : &quot;test_index&quot;,
  &quot;_type&quot; : &quot;_doc&quot;,
  &quot;_id&quot; : &quot;2&quot;,
  &quot;_version&quot; : 6,
  &quot;result&quot; : &quot;deleted&quot;,
  &quot;_shards&quot; : {
    &quot;total&quot; : 2,
    &quot;successful&quot; : 1,
    &quot;failed&quot; : 0
  },
  &quot;_seq_no&quot; : 7,
  &quot;_primary_term&quot; : 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3再新增</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/3
{
  &quot;test_field&quot;: &quot;test&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到版本号依然递增，验证延迟删除策略。</p><p>如果删除一条数据立马删除的话，所有分片和副本都要立马删除，对es集群压力太大。</p><h4 id="图解es内部并发控制" tabindex="-1"><a class="header-anchor" href="#图解es内部并发控制" aria-hidden="true">#</a> 图解es内部并发控制</h4><p>es内部主从同步时，是多线程异步。乐观锁机制。</p><h2 id="_6-10-演示客户端程序基于-version并发操作流程" tabindex="-1"><a class="header-anchor" href="#_6-10-演示客户端程序基于-version并发操作流程" aria-hidden="true">#</a> 6.10． 演示客户端程序基于_version并发操作流程</h2><p>java python客户端更新的机制。</p><h4 id="新建文档" tabindex="-1"><a class="header-anchor" href="#新建文档" aria-hidden="true">#</a> 新建文档</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /test_index/_doc/<span class="token number">5</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itcast&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test_index&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端1修改。带版本号1。" tabindex="-1"><a class="header-anchor" href="#客户端1修改。带版本号1。" aria-hidden="true">#</a> 客户端1修改。带版本号1。</h4><p>首先获取数据的当前版本号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/5?version=1
{
  &quot;test_field&quot;: &quot;itcast1&quot;
}
PUT /test_index/_doc/5?if_seq_no=21&amp;if_primary_term=1
{
  &quot;test_field&quot;: &quot;itcast1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端2并发修改。带版本号1。" tabindex="-1"><a class="header-anchor" href="#客户端2并发修改。带版本号1。" aria-hidden="true">#</a> 客户端2并发修改。带版本号1。</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/5?version=1
{
  &quot;test_field&quot;: &quot;itcast2&quot;
}
PUT /test_index/_doc/5?if_seq_no=21&amp;if_primary_term=1
{
  &quot;test_field&quot;: &quot;itcast1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错。</p><h4 id="客户端2重新查询。得到最新版本为2。seq-no-22" tabindex="-1"><a class="header-anchor" href="#客户端2重新查询。得到最新版本为2。seq-no-22" aria-hidden="true">#</a> 客户端2重新查询。得到最新版本为2。seq_no=22</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="客户端2并发修改。带版本号2。" tabindex="-1"><a class="header-anchor" href="#客户端2并发修改。带版本号2。" aria-hidden="true">#</a> 客户端2并发修改。带版本号2。</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/4?version=2
{
  &quot;test_field&quot;: &quot;itcast2&quot;
}
es7
PUT /test_index/_doc/5?if_seq_no=22&amp;if_primary_term=1
{
  &quot;test_field&quot;: &quot;itcast2&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改成功。</p><h2 id="_6-11-演示自己手动控制版本号-external-version" tabindex="-1"><a class="header-anchor" href="#_6-11-演示自己手动控制版本号-external-version" aria-hidden="true">#</a> 6.11． 演示自己手动控制版本号 external version</h2><p>背景：已有数据是在数据库中，有自己手动维护的版本号的情况下，可以使用external version控制。hbase。</p><p>要求：修改时external version要大于当前文档的_version</p><p>对比：基于_version时，修改的文档version等于当前文档的版本号。</p><p>使用<code>?version=1&amp;version_type=external</code></p><h4 id="新建文档-1" tabindex="-1"><a class="header-anchor" href="#新建文档-1" aria-hidden="true">#</a> 新建文档</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/4
{
  &quot;test_field&quot;: &quot;itcast&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新文档：</p><h4 id="客户端1修改文档" tabindex="-1"><a class="header-anchor" href="#客户端1修改文档" aria-hidden="true">#</a> 客户端1修改文档</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/4?version=2&amp;version_type=external
{
  &quot;test_field&quot;: &quot;itcast1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端2同时修改" tabindex="-1"><a class="header-anchor" href="#客户端2同时修改" aria-hidden="true">#</a> 客户端2同时修改</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/4?version=2&amp;version_type=external
{
  &quot;test_field&quot;: &quot;itcast2&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: {
    &quot;root_cause&quot;: [
      {
        &quot;type&quot;: &quot;version_conflict_engine_exception&quot;,
        &quot;reason&quot;: &quot;[4]: version conflict, current version [2] is higher or equal to the one provided [2]&quot;,
        &quot;index_uuid&quot;: &quot;-rqYZ2EcSPqL6pu8Gi35jw&quot;,
        &quot;shard&quot;: &quot;1&quot;,
        &quot;index&quot;: &quot;test_index&quot;
      }
    ],
    &quot;type&quot;: &quot;version_conflict_engine_exception&quot;,
    &quot;reason&quot;: &quot;[4]: version conflict, current version [2] is higher or equal to the one provided [2]&quot;,
    &quot;index_uuid&quot;: &quot;-rqYZ2EcSPqL6pu8Gi35jw&quot;,
    &quot;shard&quot;: &quot;1&quot;,
    &quot;index&quot;: &quot;test_index&quot;
  },
  &quot;status&quot;: 409
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端2重新查询数据" tabindex="-1"><a class="header-anchor" href="#客户端2重新查询数据" aria-hidden="true">#</a> 客户端2重新查询数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_doc/4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="客户端2重新修改数据" tabindex="-1"><a class="header-anchor" href="#客户端2重新修改数据" aria-hidden="true">#</a> 客户端2重新修改数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/4?version=3&amp;version_type=external
{
  &quot;test_field&quot;: &quot;itcast2&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-12-更新时-retry-on-conflict-参数" tabindex="-1"><a class="header-anchor" href="#_6-12-更新时-retry-on-conflict-参数" aria-hidden="true">#</a> 6.12．更新时 retry_on_conflict 参数</h2><h4 id="retry-on-conflict" tabindex="-1"><a class="header-anchor" href="#retry-on-conflict" aria-hidden="true">#</a> retry_on_conflict</h4><p>指定重试次数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /test_index/_doc/5/_update?retry_on_conflict=3
{
  &quot;doc&quot;: {
    &quot;test_field&quot;: &quot;itcast1&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="与-version结合使用" tabindex="-1"><a class="header-anchor" href="#与-version结合使用" aria-hidden="true">#</a> 与 _version结合使用</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /test_index/_doc/<span class="token number">5</span>/_update?retry_on_conflict=<span class="token number">3</span>&amp;version=<span class="token number">22</span>&amp;version_type=external
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itcast1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-13-批量查询-mget" tabindex="-1"><a class="header-anchor" href="#_6-13-批量查询-mget" aria-hidden="true">#</a> 6.13． 批量查询 mget</h2><p>单条查询 <code>GET /test_index/_doc/1</code>，如果查询多个id的文档一条一条查询，网络开销太大。</p><h4 id="mget-批量查询" tabindex="-1"><a class="header-anchor" href="#mget-批量查询" aria-hidden="true">#</a> mget 批量查询：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_mget
{
   &quot;docs&quot; : [
      {
         &quot;_index&quot; : &quot;test_index&quot;,
         &quot;_type&quot; :  &quot;_doc&quot;,
         &quot;_id&quot; :    1
      },
      {
         &quot;_index&quot; : &quot;test_index&quot;,
         &quot;_type&quot; :  &quot;_doc&quot;,
         &quot;_id&quot; :    7
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;docs&quot; : [
    {
      &quot;_index&quot; : &quot;test_index&quot;,
      &quot;_type&quot; : &quot;_doc&quot;,
      &quot;_id&quot; : &quot;2&quot;,
      &quot;_version&quot; : 6,
      &quot;_seq_no&quot; : 12,
      &quot;_primary_term&quot; : 1,
      &quot;found&quot; : true,
      &quot;_source&quot; : {
        &quot;test_field&quot; : &quot;test12333123321321&quot;
      }
    },
    {
      &quot;_index&quot; : &quot;test_index&quot;,
      &quot;_type&quot; : &quot;_doc&quot;,
      &quot;_id&quot; : &quot;3&quot;,
      &quot;_version&quot; : 6,
      &quot;_seq_no&quot; : 18,
      &quot;_primary_term&quot; : 1,
      &quot;found&quot; : true,
      &quot;_source&quot; : {
        &quot;test_field&quot; : &quot;test3213&quot;
      }
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示去掉type</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_mget
{
   &quot;docs&quot; : [
      {
         &quot;_index&quot; : &quot;test_index&quot;,
         &quot;_id&quot; :    2
      },
      {
         &quot;_index&quot; : &quot;test_index&quot;,
         &quot;_id&quot; :    3
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同一索引下批量查询" tabindex="-1"><a class="header-anchor" href="#同一索引下批量查询" aria-hidden="true">#</a> 同一索引下批量查询：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_mget
{
   &quot;docs&quot; : [
      {
         &quot;_id&quot; :    2
      },
      {
         &quot;_id&quot; :    3
      }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三种写法-搜索写法" tabindex="-1"><a class="header-anchor" href="#第三种写法-搜索写法" aria-hidden="true">#</a> 第三种写法：搜索写法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post /test_index/_doc/_search
{
    &quot;query&quot;: {
        &quot;ids&quot; : {
            &quot;values&quot; : [&quot;1&quot;, &quot;7&quot;]
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-14-批量增删改-bulk" tabindex="-1"><a class="header-anchor" href="#_6-14-批量增删改-bulk" aria-hidden="true">#</a> 6.14． 批量增删改 bulk</h2><p>Bulk 操作解释将文档的增删改查一些列操作，通过一次请求全都做完。减少网络传输次数。</p><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_bulk
{&quot;action&quot;: {&quot;metadata&quot;}}
{&quot;data&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下操作，删除5，新增14，修改2。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_bulk
{ &quot;delete&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;5&quot; }} 
{ &quot;create&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;14&quot; }}
{ &quot;test_field&quot;: &quot;test14&quot; }
{ &quot;update&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;2&quot;} }
{ &quot;doc&quot; : {&quot;test_field&quot; : &quot;bulk test&quot;} }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><p>1功能：</p><ul><li>delete：删除一个文档，只要1个json串就可以了</li><li>create：相当于强制创建 PUT /index/type/id/_create</li><li>index：普通的put操作，可以是创建文档，也可以是全量替换文档</li><li>update：执行的是局部更新partial update操作</li></ul><p>2格式：每个json不能换行。相邻json必须换行。</p><p>3隔离：每个操作互不影响。操作失败的行会返回其失败信息。</p><p>4实际用法：bulk请求一次不要太大，否则一下积压到内存中，性能会下降。所以，一次请求几千个操作、大小在几M正好。</p><h2 id="_6-15-文档概念学习总结" tabindex="-1"><a class="header-anchor" href="#_6-15-文档概念学习总结" aria-hidden="true">#</a> 6.15． 文档概念学习总结</h2><p><strong>章节回顾</strong></p><p>1文档的增删改查</p><p>2文档字段解析</p><p>3内部锁机制</p><p>4批量查询修改</p><p><strong>es是什么</strong></p><p>一个分布式的文档数据存储系统distributed document store。es看做一个分布式nosql数据库。如redis\\mongoDB\\hbase。</p><p>文档数据：es可以存储和操作json文档类型的数据，而且这也是es的核心数据结构。<br> 存储系统：es可以对json文档类型的数据进行存储，查询，创建，更新，删除，等等操作。</p><p><strong>应用场景</strong></p><ul><li>大数据。es的分布式特点，水平扩容承载大数据。</li><li>数据结构灵活。列随时变化。使用关系型数据库将会建立大量的关联表，增加系统复杂度。</li><li>数据操作简单。就是查询，不涉及事务。</li></ul><p><strong>举例</strong></p><p>电商页面、传统论坛页面等。面向的对象比较复杂，但是作为终端，没有太复杂的功能（事务），只涉及简单的增删改查crud。</p><p>这个时候选用ES这种NoSQL型的数据存储，比传统的复杂的事务强大的关系型数据库，更加合适一些。无论是性能，还是吞吐量，可能都会更好。</p><h1 id="_7-java-api-实现文档管理" tabindex="-1"><a class="header-anchor" href="#_7-java-api-实现文档管理" aria-hidden="true">#</a> 7． Java api 实现文档管理</h1><h2 id="_7-1-es技术特点" tabindex="-1"><a class="header-anchor" href="#_7-1-es技术特点" aria-hidden="true">#</a> 7.1 es技术特点</h2><p>1es技术比较特殊，不像其他分布式、大数据课程，haddop、spark、hbase。es代码层面很好写，难的是概念的理解。</p><p>2es最重要的是他的rest api。跨语言的。在真实生产中，探查数据、分析数据，使用rest更方便。</p><p>3本课程将会大量讲解内部原理及rest api。java代码会在重要的api后学习。</p><h2 id="_7-2-java-客户端简单获取数据" tabindex="-1"><a class="header-anchor" href="#_7-2-java-客户端简单获取数据" aria-hidden="true">#</a> 7.2 java 客户端简单获取数据</h2>`,111),wn={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.3/java-rest-overview.html",target:"_blank",rel:"noopener noreferrer"},En=i(`<p>low : 偏向底层。</p><p>high：高级封装。足够。</p><p>1导包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch.client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-rest-high-level-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2代码</p><p>步骤</p><p>​ 1 获取连接客户端</p><p>​ 2构建请求</p><p>​ 3执行</p><p>​ 4获取结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">//获取连接客户端</span>
    <span class="token class-name">RestHighLevelClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span>
            <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//构建请求</span>
    <span class="token class-name">GetRequest</span> getRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行</span>
    <span class="token class-name">GetResponse</span> getResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>getRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取结果</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>getResponse<span class="token punctuation">.</span><span class="token function">isExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> version <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检索文档(String形式)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-结合spring-boot-test测试文档查询" tabindex="-1"><a class="header-anchor" href="#_7-3-结合spring-boot-test测试文档查询" aria-hidden="true">#</a> 7.3 结合spring-boot-test测试文档查询</h2><p>0为什么使用spring boot test</p><ul><li>​ 当今趋势</li><li>​ 方便开发</li><li>​ 创建连接交由spring容器，避免每次请求的网络开销。</li></ul><p>1导包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2配置 application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>search
<span class="token key atrule">heima</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostlist</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9200</span> <span class="token comment">#多个结点中间用逗号分隔</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3代码</p><p>主类</p><p>配置类</p><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token comment">//查询文档</span>
       <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//构建请求</span>
        <span class="token class-name">GetRequest</span> getRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetRequest</span><span class="token punctuation">(</span><span class="token string">&quot;test_post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//========================可选参数 start======================</span>
        <span class="token comment">//为特定字段配置_source_include</span>
<span class="token comment">//        String[] includes = new String[]{&quot;user&quot;, &quot;message&quot;};</span>
<span class="token comment">//        String[] excludes = Strings.EMPTY_ARRAY;</span>
<span class="token comment">//        FetchSourceContext fetchSourceContext = new FetchSourceContext(true, includes, excludes);</span>
<span class="token comment">//        getRequest.fetchSourceContext(fetchSourceContext);</span>

        <span class="token comment">//为特定字段配置_source_excludes</span>
<span class="token comment">//        String[] includes1 = new String[]{&quot;user&quot;, &quot;message&quot;};</span>
<span class="token comment">//        String[] excludes1 = Strings.EMPTY_ARRAY;</span>
<span class="token comment">//        FetchSourceContext fetchSourceContext1 = new FetchSourceContext(true, includes1, excludes1);</span>
<span class="token comment">//        getRequest.fetchSourceContext(fetchSourceContext1);</span>

        <span class="token comment">//设置路由</span>
<span class="token comment">//        getRequest.routing(&quot;routing&quot;);</span>

        <span class="token comment">// ========================可选参数 end=====================</span>


        <span class="token comment">//查询 同步查询</span>
      <span class="token class-name">GetResponse</span> getResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>getRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//异步查询</span>
<span class="token comment">//        ActionListener&lt;GetResponse&gt; listener = new ActionListener&lt;GetResponse&gt;() {</span>
<span class="token comment">//            //查询成功时的立马执行的方法</span>
<span class="token comment">//            @Override</span>
<span class="token comment">//            public void onResponse(GetResponse getResponse) {</span>
<span class="token comment">//                long version = getResponse.getVersion();</span>
<span class="token comment">//                String sourceAsString = getResponse.getSourceAsString();//检索文档(String形式)</span>
<span class="token comment">//                System.out.println(sourceAsString);</span>
<span class="token comment">//            }</span>
<span class="token comment">//</span>
<span class="token comment">//            //查询失败时的立马执行的方法</span>
<span class="token comment">//            @Override</span>
<span class="token comment">//            public void onFailure(Exception e) {</span>
<span class="token comment">//                e.printStackTrace();</span>
<span class="token comment">//            }</span>
<span class="token comment">//        };</span>
<span class="token comment">//        //执行异步请求</span>
<span class="token comment">//        client.getAsync(getRequest, RequestOptions.DEFAULT, listener);</span>
<span class="token comment">//        try {</span>
<span class="token comment">//            Thread.sleep(5000);</span>
<span class="token comment">//        } catch (InterruptedException e) {</span>
<span class="token comment">//            e.printStackTrace();</span>
<span class="token comment">//        }</span>

        <span class="token comment">// 获取结果</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>getResponse<span class="token punctuation">.</span><span class="token function">isExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> version <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> sourceAsString <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检索文档(String形式)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sourceAsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sourceAsBytes <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getSourceAsBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//以字节接受</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sourceAsMap <span class="token operator">=</span> getResponse<span class="token punctuation">.</span><span class="token function">getSourceAsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sourceAsMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-结合spring-boot-test测试文档新增" tabindex="-1"><a class="header-anchor" href="#_7-4-结合spring-boot-test测试文档新增" aria-hidden="true">#</a> 7.4 结合spring-boot-test测试文档新增</h2><p>rest api</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT test_post/_doc/2
{
  &quot;user&quot;:&quot;tomas&quot;,
  &quot;postDate&quot;:&quot;2019-07-18&quot;,
  &quot;message&quot;:&quot;trying out es1&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
    public void testAdd() throws IOException {
//        1构建请求
        IndexRequest request=new IndexRequest(&quot;test_posts&quot;);
        request.id(&quot;3&quot;);
//        =======================构建文档============================
//        构建方法1
        String jsonString=&quot;{\\n&quot; +
                &quot;  \\&quot;user\\&quot;:\\&quot;tomas J\\&quot;,\\n&quot; +
                &quot;  \\&quot;postDate\\&quot;:\\&quot;2019-07-18\\&quot;,\\n&quot; +
                &quot;  \\&quot;message\\&quot;:\\&quot;trying out es3\\&quot;\\n&quot; +
                &quot;}&quot;;
        request.source(jsonString, XContentType.JSON);

//        构建方法2
//        Map&lt;String,Object&gt; jsonMap=new HashMap&lt;&gt;();
//        jsonMap.put(&quot;user&quot;, &quot;tomas&quot;);
//        jsonMap.put(&quot;postDate&quot;, &quot;2019-07-18&quot;);
//        jsonMap.put(&quot;message&quot;, &quot;trying out es2&quot;);
//        request.source(jsonMap);

//        构建方法3
//        XContentBuilder builder= XContentFactory.jsonBuilder();
//        builder.startObject();
//        {
//            builder.field(&quot;user&quot;, &quot;tomas&quot;);
//            builder.timeField(&quot;postDate&quot;, new Date());
//            builder.field(&quot;message&quot;, &quot;trying out es2&quot;);
//        }
//        builder.endObject();
//        request.source(builder);
//        构建方法4
//        request.source(&quot;user&quot;,&quot;tomas&quot;,
//                    &quot;postDate&quot;,new Date(),
//                &quot;message&quot;,&quot;trying out es2&quot;);
//
//        ========================可选参数===================================
        //设置超时时间
        request.timeout(TimeValue.timeValueSeconds(1));
        request.timeout(&quot;1s&quot;);

        //自己维护版本号
//        request.version(2);
//        request.versionType(VersionType.EXTERNAL);



//        2执行
        //同步
        IndexResponse indexResponse = client.index(request, RequestOptions.DEFAULT);
        //异步
//        ActionListener&lt;IndexResponse&gt; listener=new ActionListener&lt;IndexResponse&gt;() {
//            @Override
//            public void onResponse(IndexResponse indexResponse) {
//
//            }
//
//            @Override
//            public void onFailure(Exception e) {
//
//            }
//        };
//        client.indexAsync(request,RequestOptions.DEFAULT, listener );
//        try {
//            Thread.sleep(5000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }


//        3获取结果
        String index = indexResponse.getIndex();
        String id = indexResponse.getId();
        //获取插入的类型
        if(indexResponse.getResult()== DocWriteResponse.Result.CREATED){
            DocWriteResponse.Result result=indexResponse.getResult();
            System.out.println(&quot;CREATED:&quot;+result);
        }else if(indexResponse.getResult()== DocWriteResponse.Result.UPDATED){
            DocWriteResponse.Result result=indexResponse.getResult();
            System.out.println(&quot;UPDATED:&quot;+result);
        }

        ReplicationResponse.ShardInfo shardInfo = indexResponse.getShardInfo();
        if(shardInfo.getTotal()!=shardInfo.getSuccessful()){
            System.out.println(&quot;处理成功的分片数少于总分片！&quot;);
        }
        if(shardInfo.getFailed()&gt;0){
           for (ReplicationResponse.ShardInfo.Failure failure:shardInfo.getFailures()) {
               String reason = failure.reason();//处理潜在的失败原因
               System.out.println(reason);
           }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5结合spring-boot-test测试文档修改" tabindex="-1"><a class="header-anchor" href="#_7-5结合spring-boot-test测试文档修改" aria-hidden="true">#</a> 7.5结合spring-boot-test测试文档修改</h2><p>rest api</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>post /test_posts/_doc/3/_update 
{
   &quot;doc&quot;: {
      &quot;user&quot;：&quot;tomas J&quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  @Test
    public void testUpdate() throws IOException {
//        1构建请求
        UpdateRequest request = new UpdateRequest(&quot;test_posts&quot;, &quot;3&quot;);
        Map&lt;String, Object&gt; jsonMap = new HashMap&lt;&gt;();
        jsonMap.put(&quot;user&quot;, &quot;tomas JJ&quot;);
        request.doc(jsonMap);
//===============================可选参数==========================================
        request.timeout(&quot;1s&quot;);//超时时间

        //重试次数
        request.retryOnConflict(3);

        //设置在继续更新之前，必须激活的分片数
//        request.waitForActiveShards(2);
        //所有分片都是active状态，才更新
//        request.waitForActiveShards(ActiveShardCount.ALL);

//        2执行
//        同步
        UpdateResponse updateResponse = client.update(request, RequestOptions.DEFAULT);
//        异步

//        3获取数据
        updateResponse.getId();
        updateResponse.getIndex();

        //判断结果
        if (updateResponse.getResult() == DocWriteResponse.Result.CREATED) {
            DocWriteResponse.Result result = updateResponse.getResult();
            System.out.println(&quot;CREATED:&quot; + result);
        } else if (updateResponse.getResult() == DocWriteResponse.Result.UPDATED) {
            DocWriteResponse.Result result = updateResponse.getResult();
            System.out.println(&quot;UPDATED:&quot; + result);
        }else if(updateResponse.getResult() == DocWriteResponse.Result.DELETED){
            DocWriteResponse.Result result = updateResponse.getResult();
            System.out.println(&quot;DELETED:&quot; + result);
        }else if (updateResponse.getResult() == DocWriteResponse.Result.NOOP){
            //没有操作
            DocWriteResponse.Result result = updateResponse.getResult();
            System.out.println(&quot;NOOP:&quot; + result);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6结合spring-boot-test测试文档删除" tabindex="-1"><a class="header-anchor" href="#_7-6结合spring-boot-test测试文档删除" aria-hidden="true">#</a> 7.6结合spring-boot-test测试文档删除</h2><p>rest api</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /test_posts/_doc/3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Test
    public void testDelete() throws IOException {
//        1构建请求
        DeleteRequest request =new DeleteRequest(&quot;test_posts&quot;,&quot;3&quot;);
        //可选参数


//        2执行
        DeleteResponse deleteResponse = client.delete(request, RequestOptions.DEFAULT);


//        3获取数据
        deleteResponse.getId();
        deleteResponse.getIndex();

        DocWriteResponse.Result result = deleteResponse.getResult();
        System.out.println(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-7结合spring-boot-test测试文档bulk" tabindex="-1"><a class="header-anchor" href="#_7-7结合spring-boot-test测试文档bulk" aria-hidden="true">#</a> 7.7结合spring-boot-test测试文档bulk</h2><p>rest api</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_bulk
{&quot;action&quot;: {&quot;metadata&quot;}}
{&quot;data&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Test
    public void testBulk() throws IOException {
//        1创建请求
        BulkRequest request = new BulkRequest();
//        request.add(new IndexRequest(&quot;post&quot;).id(&quot;1&quot;).source(XContentType.JSON, &quot;field&quot;, &quot;1&quot;));
//        request.add(new IndexRequest(&quot;post&quot;).id(&quot;2&quot;).source(XContentType.JSON, &quot;field&quot;, &quot;2&quot;));

        request.add(new UpdateRequest(&quot;post&quot;,&quot;2&quot;).doc(XContentType.JSON, &quot;field&quot;, &quot;3&quot;));
        request.add(new DeleteRequest(&quot;post&quot;).id(&quot;1&quot;));

//        2执行
        BulkResponse bulkResponse = client.bulk(request, RequestOptions.DEFAULT);

        for (BulkItemResponse itemResponse : bulkResponse) {
            DocWriteResponse itemResponseResponse = itemResponse.getResponse();

            switch (itemResponse.getOpType()) {
                case INDEX:
                case CREATE:
                    IndexResponse indexResponse = (IndexResponse) itemResponseResponse;
                    indexResponse.getId();
                    System.out.println(indexResponse.getResult());
                    break;
                case UPDATE:
                    UpdateResponse updateResponse = (UpdateResponse) itemResponseResponse;
                    updateResponse.getIndex();
                    System.out.println(updateResponse.getResult());
                    break;
                case DELETE:
                    DeleteResponse deleteResponse = (DeleteResponse) itemResponseResponse;
                    System.out.println(deleteResponse.getResult());
                    break;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-图解es内部机制" tabindex="-1"><a class="header-anchor" href="#_8-图解es内部机制" aria-hidden="true">#</a> 8． 图解es内部机制</h1><h2 id="_8-1-图解es分布式基础" tabindex="-1"><a class="header-anchor" href="#_8-1-图解es分布式基础" aria-hidden="true">#</a> 8.1． 图解es分布式基础</h2><h3 id="_8-1-1es对复杂分布式机制的透明隐藏特性" tabindex="-1"><a class="header-anchor" href="#_8-1-1es对复杂分布式机制的透明隐藏特性" aria-hidden="true">#</a> 8.1.1es对复杂分布式机制的透明隐藏特性</h3><ul><li>分布式机制：分布式数据存储及共享。</li><li>分片机制：数据存储到哪个分片，副本数据写入。</li><li>集群发现机制：cluster discovery。新启动es实例，自动加入集群。</li><li>shard负载均衡：大量数据写入及查询，es会将数据平均分配。</li><li>shard副本：新增副本数，分片重分配。</li></ul><h3 id="_8-1-2elasticsearch的垂直扩容与水平扩容" tabindex="-1"><a class="header-anchor" href="#_8-1-2elasticsearch的垂直扩容与水平扩容" aria-hidden="true">#</a> 8.1.2Elasticsearch的垂直扩容与水平扩容</h3><p>垂直扩容：使用更加强大的服务器替代老服务器。但单机存储及运算能力有上线。且成本直线上升。如10t服务器1万。单个10T服务器可能20万。</p><p>水平扩容：采购更多服务器，加入集群。大数据。</p><h3 id="_8-1-3增减或减少节点时的数据rebalance" tabindex="-1"><a class="header-anchor" href="#_8-1-3增减或减少节点时的数据rebalance" aria-hidden="true">#</a> 8.1.3增减或减少节点时的数据rebalance</h3><p>新增或减少es实例时，es集群会将数据重新分配。</p><h3 id="_8-1-4master节点" tabindex="-1"><a class="header-anchor" href="#_8-1-4master节点" aria-hidden="true">#</a> 8.1.4master节点</h3><p>功能：</p><ul><li>创建删除节点</li><li>创建删除索引</li></ul><h3 id="_8-1-5节点对等的分布式架构" tabindex="-1"><a class="header-anchor" href="#_8-1-5节点对等的分布式架构" aria-hidden="true">#</a> 8.1.5节点对等的分布式架构</h3><ul><li>节点对等，每个节点都能接收所有的请求</li><li>自动请求路由</li><li>响应收集</li></ul><h2 id="_8-2-图解分片shard、副本replica机制" tabindex="-1"><a class="header-anchor" href="#_8-2-图解分片shard、副本replica机制" aria-hidden="true">#</a> 8.2． 图解分片shard、副本replica机制</h2><h3 id="_8-2-1shard-replica机制" tabindex="-1"><a class="header-anchor" href="#_8-2-1shard-replica机制" aria-hidden="true">#</a> 8.2.1shard&amp;replica机制</h3><p>（1）每个index包含一个或多个shard</p><p>（2）每个shard都是一个最小工作单元，承载部分数据，lucene实例，完整的建立索引和处理请求的能力</p><p>（3）增减节点时，shard会自动在nodes中负载均衡</p><p>（4）primary shard和replica shard，每个document肯定只存在于某一个primary shard以及其对应的replica shard中，不可能存在于多个primary shard</p><p>（5）replica shard是primary shard的副本，负责容错，以及承担读请求负载</p><p>（6）primary shard的数量在创建索引的时候就固定了，replica shard的数量可以随时修改</p><p>（7）primary shard的默认数量是1，replica默认是1，默认共有2个shard，1个primary shard，1个replica shard</p><p>注意：es7以前primary shard的默认数量是5，replica默认是1，默认有10个shard，5个primary shard，5个replica shard</p><p>（8）primary shard不能和自己的replica shard放在同一个节点上（否则节点宕机，primary shard和副本都丢失，起不到容错的作用），但是可以和其他primary shard的replica shard放在同一个节点上</p><h2 id="_8-3图解单node环境下创建index是什么样子的" tabindex="-1"><a class="header-anchor" href="#_8-3图解单node环境下创建index是什么样子的" aria-hidden="true">#</a> 8.3图解单node环境下创建index是什么样子的</h2><p>（1）单node环境下，创建一个index，有3个primary shard，3个replica shard<br> （2）集群status是yellow<br> （3）这个时候，只会将3个primary shard分配到仅有的一个node上去，另外3个replica shard是无法分配的<br> （4）集群可以正常工作，但是一旦出现节点宕机，数据全部丢失，而且集群不可用，无法承接任何请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index1
{
   &quot;settings&quot; : {
      &quot;number_of_shards&quot; : 3,
      &quot;number_of_replicas&quot; : 1
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4图解2个node环境下replica-shard是如何分配的" tabindex="-1"><a class="header-anchor" href="#_8-4图解2个node环境下replica-shard是如何分配的" aria-hidden="true">#</a> 8.4图解2个node环境下replica shard是如何分配的</h2><p>（1）replica shard分配：3个primary shard，3个replica shard，1 node<br> （2）primary ---&gt; replica同步<br> （3）读请求：primary/replica</p><h2 id="_8-5图解横向扩容" tabindex="-1"><a class="header-anchor" href="#_8-5图解横向扩容" aria-hidden="true">#</a> 8.5图解横向扩容</h2><ul><li>分片自动负载均衡，分片向空闲机器转移。</li><li>每个节点存储更少分片，系统资源给与每个分片的资源更多，整体集群性能提高。</li><li>扩容极限：节点数大于整体分片数，则必有空闲机器。</li><li>超出扩容极限时，可以增加副本数，如设置副本数为2，总共3*3=9个分片。9台机器同时运行，存储和搜索性能更强。容错性更好。</li><li>容错性：只要一个索引的所有主分片在，集群就就可以运行。</li></ul><h2 id="_8-6-图解es容错机制-master选举-replica容错-数据恢复" tabindex="-1"><a class="header-anchor" href="#_8-6-图解es容错机制-master选举-replica容错-数据恢复" aria-hidden="true">#</a> 8.6 图解es容错机制 master选举，replica容错，数据恢复</h2><p>以3分片，2副本数，3节点为例介绍。</p><ul><li>master node宕机，自动master选举，集群为red</li><li>replica容错：新master将replica提升为primary shard，yellow</li><li>重启宕机node，master copy replica到该node，使用原有的shard并同步宕机后的修改，green</li></ul><h1 id="_9-图解文档存储机制" tabindex="-1"><a class="header-anchor" href="#_9-图解文档存储机制" aria-hidden="true">#</a> 9． 图解文档存储机制</h1><h2 id="_9-1-数据路由" tabindex="-1"><a class="header-anchor" href="#_9-1-数据路由" aria-hidden="true">#</a> 9.1． 数据路由</h2><h3 id="_9-1-1文档存储如何路由到相应分片" tabindex="-1"><a class="header-anchor" href="#_9-1-1文档存储如何路由到相应分片" aria-hidden="true">#</a> 9.1.1文档存储如何路由到相应分片</h3><p>一个文档，最终会落在主分片的一个分片上，到底应该在哪一个分片？这就是数据路由。</p><h3 id="_9-1-2路由算法" tabindex="-1"><a class="header-anchor" href="#_9-1-2路由算法" aria-hidden="true">#</a> 9.1.2路由算法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shard = hash(routing) % number_of_primary_shards
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>哈希值对主分片数取模。</p><p>举例：</p><p>对一个文档经行crud时，都会带一个路由值 routing number。默认为文档_id（可能是手动指定，也可能是自动生成）。</p><p>存储1号文档，经过哈希计算，哈希值为2,此索引有3个主分片，那么计算2%3=2，就算出此文档在P2分片上。</p><p>决定一个document在哪个shard上，最重要的一个值就是routing值，默认是_id，也可以手动指定，相同的routing值，每次过来，从hash函数中，产出的hash值一定是相同的</p><p>无论hash值是几，无论是什么数字，对number_of_primary_shards求余数，结果一定是在0~number_of_primary_shards-1之间这个范围内的。0,1,2。</p><h3 id="_9-1-3手动指定-routing-number" tabindex="-1"><a class="header-anchor" href="#_9-1-3手动指定-routing-number" aria-hidden="true">#</a> 9.1.3手动指定 routing number</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /test_index/_doc/15?routing=num
{
  &quot;num&quot;: 0,
  &quot;tags&quot;: []
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景：在程序中，架构师可以手动指定已有数据的一个属性为路由值，好处是可以定制一类文档数据存储到一个分片中。缺点是设计不好，会造成数据倾斜。</p><p>所以，不同文档尽量放到不同的索引中。剩下的事情交给es集群自己处理。</p><h3 id="_9-1-4主分片数量不可变" tabindex="-1"><a class="header-anchor" href="#_9-1-4主分片数量不可变" aria-hidden="true">#</a> 9.1.4主分片数量不可变</h3><p>涉及到以往数据的查询搜索，所以一旦建立索引，主分片数不可变。</p><h2 id="_9-2-图解文档的增删改内部机制" tabindex="-1"><a class="header-anchor" href="#_9-2-图解文档的增删改内部机制" aria-hidden="true">#</a> 9.2． 图解文档的增删改内部机制</h2><p>增删改可以看做update,都是对数据的改动。一个改动请求发送到es集群，经历以下四个步骤：</p><p>（1）客户端选择一个node发送请求过去，这个node就是coordinating node（协调节点）</p><p>（2）coordinating node，对document进行路由，将请求转发给对应的node（有primary shard）</p><p>（3）实际的node上的primary shard处理请求，然后将数据同步到replica node。</p><p>（4）coordinating node，如果发现primary node和所有replica node都搞定之后，就返回响应结果给客户端。</p><h2 id="_9-3-图解文档的查询内部机制" tabindex="-1"><a class="header-anchor" href="#_9-3-图解文档的查询内部机制" aria-hidden="true">#</a> 9.3．图解文档的查询内部机制</h2><p>1、客户端发送请求到任意一个node，成为coordinate node</p><p>2、coordinate node对document进行路由，将请求转发到对应的node，此时会使用round-robin随机轮询算法，在primary shard以及其所有replica中随机选择一个，让读请求负载均衡</p><p>3、接收请求的node返回document给coordinate node</p><p>4、coordinate node返回document给客户端</p><p>5、特殊情况：document如果还在建立索引过程中，可能只有primary shard有，任何一个replica shard都没有，此时可能会导致无法读取到document，但是document完成索引建立之后，primary shard和replica shard就都有了。</p><h2 id="_9-4-bulk-api奇特的json格式" tabindex="-1"><a class="header-anchor" href="#_9-4-bulk-api奇特的json格式" aria-hidden="true">#</a> 9.4．bulk api奇特的json格式</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /_bulk
<span class="token punctuation">{</span><span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\\n
<span class="token punctuation">{</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">}</span>\\n
<span class="token punctuation">{</span><span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\\n
<span class="token punctuation">{</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">}</span>\\n

<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;create&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field1&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field1&quot;</span><span class="token operator">:</span><span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;create&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field1&quot;</span><span class="token operator">:</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;field1&quot;</span><span class="token operator">:</span><span class="token string">&quot;spring&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>       
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、bulk中的每个操作都可能要转发到不同的node的shard去执行</p><p>2、如果采用比较良好的json数组格式</p><p>允许任意的换行，整个可读性非常棒，读起来很爽，es拿到那种标准格式的json串以后，要按照下述流程去进行处理</p><p>（1）将json数组解析为JSONArray对象，这个时候，整个数据，就会在内存中出现一份一模一样的拷贝，一份数据是json文本，一份数据是JSONArray对象</p><p>（2）解析json数组里的每个json，对每个请求中的document进行路由</p><p>（3）为路由到同一个shard上的多个请求，创建一个请求数组。100请求中有10个是到P1.</p><p>（4）将这个请求数组序列化</p><p>（5）将序列化后的请求数组发送到对应的节点上去</p><p>3、耗费更多内存，更多的jvm gc开销</p><p>我们之前提到过bulk size最佳大小的那个问题，一般建议说在几千条那样，然后大小在10MB左右，所以说，可怕的事情来了。假设说现在100个bulk请求发送到了一个节点上去，然后每个请求是10MB，100个请求，就是1000MB = 1GB，然后每个请求的json都copy一份为jsonarray对象，此时内存中的占用就会翻倍，就会占用2GB的内存，甚至还不止。因为弄成jsonarray之后，还可能会多搞一些其他的数据结构，2GB+的内存占用。</p><p>占用更多的内存可能就会积压其他请求的内存使用量，比如说最重要的搜索请求，分析请求，等等，此时就可能会导致其他请求的性能急速下降。</p><p>另外的话，占用内存更多，就会导致java虚拟机的垃圾回收次数更多，跟频繁，每次要回收的垃圾对象更多，耗费的时间更多，导致es的java虚拟机停止工作线程的时间更多。</p><p>4、现在的奇特格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_bulk
{ &quot;delete&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;5&quot; }} \\n
{ &quot;create&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;14&quot; }}\\n
{ &quot;test_field&quot;: &quot;test14&quot; }\\n
{ &quot;update&quot;: { &quot;_index&quot;: &quot;test_index&quot;,  &quot;_id&quot;: &quot;2&quot;} }\\n
{ &quot;doc&quot; : {&quot;test_field&quot; : &quot;bulk test&quot;} }\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）不用将其转换为json对象，不会出现内存中的相同数据的拷贝，直接按照换行符切割json</p><p>（2）对每两个一组的json，读取meta，进行document路由</p><p>（3）直接将对应的json发送到node上去</p><p>5、最大的优势在于，不需要将json数组解析为一个JSONArray对象，形成一份大数据的拷贝，浪费内存空间，尽可能地保证性能。</p><h1 id="_10-mapping映射入门" tabindex="-1"><a class="header-anchor" href="#_10-mapping映射入门" aria-hidden="true">#</a> 10． Mapping映射入门</h1><h2 id="_10-1-什么是mapping映射" tabindex="-1"><a class="header-anchor" href="#_10-1-什么是mapping映射" aria-hidden="true">#</a> 10.1． 什么是mapping映射</h2><p>概念：自动或手动为index中的_doc建立的一种数据结构和相关配置，简称为mapping映射。</p><p>插入几条数据，让es自动为我们建立一个索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /website/_doc/1
{
  &quot;post_date&quot;: &quot;2019-01-01&quot;,
  &quot;title&quot;: &quot;my first article&quot;,
  &quot;content&quot;: &quot;this is my first article in this website&quot;,
  &quot;author_id&quot;: 11400
}

PUT /website/_doc/2
{
  &quot;post_date&quot;: &quot;2019-01-02&quot;,
  &quot;title&quot;: &quot;my second article&quot;,
  &quot;content&quot;: &quot;this is my second article in this website&quot;,
  &quot;author_id&quot;: 11400
}
 
PUT /website/_doc/3
{
  &quot;post_date&quot;: &quot;2019-01-03&quot;,
  &quot;title&quot;: &quot;my third article&quot;,
  &quot;content&quot;: &quot;this is my third article in this website&quot;,
  &quot;author_id&quot;: 11400
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比数据库建表语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table website(
     post_date date,
     title varchar(50),     
     content varchar(100),
     author_id int(11) 
 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态映射：dynamic mapping，自动为我们建立index，以及对应的mapping，mapping中包含了每个field对应的数据类型，以及如何分词等设置。</p><p>重点：我们当然，后面会讲解，也可以手动在创建数据之前，先创建index，以及对应的mapping</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET  /website/_mapping/
{
  &quot;website&quot; : {
    &quot;mappings&quot; : {
      &quot;properties&quot; : {
        &quot;author_id&quot; : {
          &quot;type&quot; : &quot;long&quot;
        },
        &quot;content&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        },
        &quot;post_date&quot; : {
          &quot;type&quot; : &quot;date&quot;
        },
        &quot;title&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尝试各种搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /website/_search?q=2019        0条结果             
GET /website/_search?q=2019-01-01           1条结果
GET /website/_search?q=post_date:2019-01-01     1条结果
GET /website/_search?q=post_date:2019          0 条结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索结果为什么不一致，因为es自动建立mapping的时候，设置了不同的field不同的data type。不同的data type的分词、搜索等行为是不一样的。所以出现了_all field和post_date field的搜索表现完全不一样。</p><h2 id="_10-2-精确匹配与全文搜索的对比分析" tabindex="-1"><a class="header-anchor" href="#_10-2-精确匹配与全文搜索的对比分析" aria-hidden="true">#</a> 10.2． 精确匹配与全文搜索的对比分析</h2><h3 id="_10-2-1-exact-value-精确匹配" tabindex="-1"><a class="header-anchor" href="#_10-2-1-exact-value-精确匹配" aria-hidden="true">#</a> 10.2.1 exact value 精确匹配</h3><p>2019-01-01，exact value，搜索的时候，必须输入2019-01-01，才能搜索出来</p><p>如果你输入一个01，是搜索不出来的</p><p>select * from book where name= &#39;java&#39;</p><h3 id="_10-2-2-full-text-全文检索" tabindex="-1"><a class="header-anchor" href="#_10-2-2-full-text-全文检索" aria-hidden="true">#</a> 10.2.2 full text 全文检索</h3><p>搜“笔记电脑”，笔记本电脑词条会不会出现。</p><p>select * from book where name like &#39;%java%&#39;</p><p>（1）缩写 vs. 全称：cn vs. china</p><p>（2）格式转化：like liked likes</p><p>（3）大小写：Tom vs tom</p><p>（4）同义词：like vs love</p><p>2019-01-01，2019 01 01，搜索2019，或者01，都可以搜索出来</p><p>china，搜索cn，也可以将china搜索出来</p><p>likes，搜索like，也可以将likes搜索出来</p><p>Tom，搜索tom，也可以将Tom搜索出来</p><p>like，搜索love，同义词，也可以将like搜索出来</p><p>就不是说单纯的只是匹配完整的一个值，而是可以对值进行拆分词语后（分词）进行匹配，也可以通过缩写、时态、大小写、同义词等进行匹配。深入 NPL,自然语义处理。</p><h2 id="_10-3-全文检索下倒排索引核心原理快速揭秘" tabindex="-1"><a class="header-anchor" href="#_10-3-全文检索下倒排索引核心原理快速揭秘" aria-hidden="true">#</a> 10.3． 全文检索下倒排索引核心原理快速揭秘</h2><p>doc1：I really liked my small dogs, and I think my mom also liked them.</p><p>doc2：He never liked any dogs, so I hope that my mom will not expect me to liked him.</p><h4 id="分词-初步的倒排索引的建立" tabindex="-1"><a class="header-anchor" href="#分词-初步的倒排索引的建立" aria-hidden="true">#</a> 分词，初步的倒排索引的建立</h4><table><thead><tr><th>term</th><th><strong>doc1</strong></th><th><strong>doc2</strong></th></tr></thead><tbody><tr><td><strong>I</strong></td><td>*</td><td>*</td></tr><tr><td><strong>really</strong></td><td>*</td><td></td></tr><tr><td><strong>liked</strong></td><td>*</td><td>*</td></tr><tr><td><strong>my</strong></td><td>*</td><td>*</td></tr><tr><td><strong>small</strong></td><td>*</td><td></td></tr><tr><td><strong>dogs</strong></td><td>*</td><td></td></tr><tr><td><strong>and</strong></td><td>*</td><td></td></tr><tr><td><strong>think</strong></td><td>*</td><td></td></tr><tr><td><strong>mom</strong></td><td>*</td><td>*</td></tr><tr><td><strong>also</strong></td><td>*</td><td></td></tr><tr><td><strong>them</strong></td><td>*</td><td></td></tr><tr><td><strong>He</strong></td><td></td><td>*</td></tr><tr><td><strong>never</strong></td><td></td><td>*</td></tr><tr><td><strong>any</strong></td><td></td><td>*</td></tr><tr><td><strong>so</strong></td><td></td><td>*</td></tr><tr><td><strong>hope</strong></td><td></td><td>*</td></tr><tr><td><strong>that</strong></td><td></td><td>*</td></tr><tr><td><strong>will</strong></td><td></td><td>*</td></tr><tr><td><strong>not</strong></td><td></td><td>*</td></tr><tr><td><strong>expect</strong></td><td></td><td>*</td></tr><tr><td><strong>me</strong></td><td></td><td>*</td></tr><tr><td><strong>to</strong></td><td></td><td>*</td></tr><tr><td><strong>him</strong></td><td></td><td>*</td></tr></tbody></table><p>演示了一下倒排索引最简单的建立的一个过程</p><h4 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h4><p>mother like little dog，不可能有任何结果</p><p>mother</p><p>like</p><p>little</p><p>dog</p><p>这不是我们想要的结果。同义词mom\\mother在我们人类看来是一样。想进行标准化操作。</p><h4 id="重建倒排索引" tabindex="-1"><a class="header-anchor" href="#重建倒排索引" aria-hidden="true">#</a> 重建倒排索引</h4><p>normalization正规化，建立倒排索引的时候，会执行一个操作，也就是说对拆分出的各个单词进行相应的处理，以提升后面搜索的时候能够搜索到相关联的文档的概率</p><p>时态的转换，单复数的转换，同义词的转换，大小写的转换</p><p>mom ―&gt; mother</p><p>liked ―&gt; like</p><p>small ―&gt; little</p><p>dogs ―&gt; dog</p><p>重新建立倒排索引，加入normalization，再次用mother liked little dog搜索，就可以搜索到了</p><table><thead><tr><th><strong>word</strong></th><th><strong>doc1</strong></th><th><strong>doc2</strong></th><th><strong>normalization</strong></th></tr></thead><tbody><tr><td><strong>I</strong></td><td>*</td><td>*</td><td></td></tr><tr><td><strong>really</strong></td><td>*</td><td></td><td></td></tr><tr><td><strong>like</strong></td><td>*</td><td>*</td><td>liked ―&gt; like</td></tr><tr><td><strong>my</strong></td><td>*</td><td>*</td><td></td></tr><tr><td><strong>little</strong></td><td>*</td><td></td><td>small ―&gt; little</td></tr><tr><td><strong>dog</strong></td><td>*</td><td></td><td>dogs ―&gt; dog</td></tr><tr><td><strong>and</strong></td><td>*</td><td></td><td></td></tr><tr><td><strong>think</strong></td><td>*</td><td></td><td></td></tr><tr><td><strong>mother</strong></td><td>*</td><td>*</td><td>mom ―&gt; mother</td></tr><tr><td><strong>also</strong></td><td>*</td><td></td><td></td></tr><tr><td><strong>them</strong></td><td>*</td><td></td><td></td></tr><tr><td><strong>He</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>never</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>any</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>so</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>hope</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>that</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>will</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>not</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>expect</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>me</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>to</strong></td><td></td><td>*</td><td></td></tr><tr><td><strong>him</strong></td><td></td><td>*</td><td></td></tr></tbody></table><h4 id="重新搜索" tabindex="-1"><a class="header-anchor" href="#重新搜索" aria-hidden="true">#</a> 重新搜索</h4><p>搜索：mother liked little dog，</p><p>对搜索条件经行分词 normalization</p><p>mother</p><p>liked -》like</p><p>little</p><p>dog</p><p>doc1和doc2都会搜索出来</p><h2 id="_10-4-分词器-analyzer" tabindex="-1"><a class="header-anchor" href="#_10-4-分词器-analyzer" aria-hidden="true">#</a> 10.4. 分词器 analyzer</h2><h3 id="_10-4-1什么是分词器-analyzer" tabindex="-1"><a class="header-anchor" href="#_10-4-1什么是分词器-analyzer" aria-hidden="true">#</a> 10.4.1什么是分词器 analyzer</h3><p>作用：切分词语，normalization（提升recall召回率）</p><p>给你一段句子，然后将这段句子拆分成一个一个的单个的单词，同时对每个单词进行normalization（时态转换，单复数转换）</p><p>recall，召回率：搜索的时候，增加能够搜索到的结果的数量</p><p>analyzer 组成部分：</p><p>1、character filter：在一段文本进行分词之前，先进行预处理，比如说最常见的就是，过滤html标签（<code>&lt;span&gt;hello&lt;span&gt;</code> --&gt; hello），&amp; --&gt; and（I&amp;you --&gt; I and you）</p><p>2、<code>tokenizer：分词，hello you and me --&gt; hello, you, and, me</code></p><p>3、<code>token filter：lowercase，stop word，synonymom，dogs --&gt; dog，liked --&gt; like，Tom --&gt; tom，a/the/an --&gt; 干掉，mother --&gt; mom，small --&gt; little</code></p><p>stop word 停用词： 了 的 呢。</p><p>一个分词器，很重要，将一段文本进行各种处理，最后处理好的结果才会拿去建立倒排索引。</p><h3 id="_10-4-2内置分词器的介绍" tabindex="-1"><a class="header-anchor" href="#_10-4-2内置分词器的介绍" aria-hidden="true">#</a> 10.4.2内置分词器的介绍</h3><p>例句：Set the shape to semi-transparent by calling set_trans(5)</p><p>standard analyzer标准分词器：set, the, shape, to, semi, transparent, by, calling, set_trans, 5（默认的是standard）</p><p>simple analyzer简单分词器：set, the, shape, to, semi, transparent, by, calling, set, trans</p><p>whitespace analyzer：Set, the, shape, to, semi-transparent, by, calling, set_trans(5)</p><p>language analyzer（特定的语言的分词器，比如说，english，英语分词器）：set, shape, semi, transpar, call, set_tran, 5</p><p>官方文档：</p>`,207),An={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.4/analysis-analyzers.html",target:"_blank",rel:"noopener noreferrer"},Tn=i('<figure><img src="'+M+`" alt="1568978200919" tabindex="0" loading="lazy"><figcaption>1568978200919</figcaption></figure><h2 id="_10-5-query-string根据字段分词策略" tabindex="-1"><a class="header-anchor" href="#_10-5-query-string根据字段分词策略" aria-hidden="true">#</a> 10.5. query string根据字段分词策略</h2><h3 id="_10-5-1query-string分词" tabindex="-1"><a class="header-anchor" href="#_10-5-1query-string分词" aria-hidden="true">#</a> 10.5.1query string分词</h3><p>query string必须以和index建立时相同的analyzer进行分词</p><p>query string对exact value和full text的区别对待</p><p>如： date：exact value 精确匹配</p><p>​ text: full text 全文检索</p><h3 id="_10-5-2测试分词器" tabindex="-1"><a class="header-anchor" href="#_10-5-2测试分词器" aria-hidden="true">#</a> 10.5.2测试分词器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;Text to analyze 80&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;tokens&quot; : [
    {
      &quot;token&quot; : &quot;text&quot;,
      &quot;start_offset&quot; : 0,
      &quot;end_offset&quot; : 4,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 0
    },
    {
      &quot;token&quot; : &quot;to&quot;,
      &quot;start_offset&quot; : 5,
      &quot;end_offset&quot; : 7,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 1
    },
    {
      &quot;token&quot; : &quot;analyze&quot;,
      &quot;start_offset&quot; : 8,
      &quot;end_offset&quot; : 15,
      &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
      &quot;position&quot; : 2
    },
    {
      &quot;token&quot; : &quot;80&quot;,
      &quot;start_offset&quot; : 16,
      &quot;end_offset&quot; : 18,
      &quot;type&quot; : &quot;&lt;NUM&gt;&quot;,
      &quot;position&quot; : 3
    }
  ]
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>token 实际存储的term 关键字</p><p>position 在此词条在原文本中的位置</p><p><code>start_offset/end_offset</code>字符在原始字符串中的位置</p><h2 id="_10-6-mapping回顾总结" tabindex="-1"><a class="header-anchor" href="#_10-6-mapping回顾总结" aria-hidden="true">#</a> 10.6． mapping回顾总结</h2><p>（1）往es里面直接插入数据，es会自动建立索引，同时建立对应的mapping。(dynamic mapping)</p><p>（2）mapping中就自动定义了每个field的数据类型</p><p>（3）不同的数据类型（比如说text和date），可能有的是exact value，有的是full text</p><p>（4）exact value，在建立倒排索引的时候，分词的时候，是将整个值一起作为一个关键词建立到倒排索引中的；full text，会经历各种各样的处理，分词，normaliztion（时态转换，同义词转换，大小写转换），才会建立到倒排索引中。</p><p>（5）同时呢，exact value和full text类型的field就决定了，在一个搜索过来的时候，对exact value field或者是full text field进行搜索的行为也是不一样的，会跟建立倒排索引的行为保持一致；比如说exact value搜索的时候，就是直接按照整个值进行匹配，full text query string，也会进行分词和normalization再去倒排索引中去搜索</p><p>（6）可以用es的dynamic mapping，让其自动建立mapping，包括自动设置数据类型；也可以提前手动创建index和tmapping，自己对各个field进行设置，包括数据类型，包括索引行为，包括分词器，等。</p><h2 id="_10-7-mapping的核心数据类型以及dynamic-mapping" tabindex="-1"><a class="header-anchor" href="#_10-7-mapping的核心数据类型以及dynamic-mapping" aria-hidden="true">#</a> 10.7． mapping的核心数据类型以及dynamic mapping</h2><h3 id="_10-7-1-核心的数据类型" tabindex="-1"><a class="header-anchor" href="#_10-7-1-核心的数据类型" aria-hidden="true">#</a> 10.7.1 核心的数据类型</h3><p><code>string :text and keyword</code></p><p><code>byte，short，integer，long,float，double</code></p><p><code>boolean</code></p><p><code>date</code></p>`,27),Sn={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.3/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},Rn=i('<p>下图是ES7.3核心的字段类型如下：</p><figure><img src="'+B+`" alt="1568989192034" tabindex="0" loading="lazy"><figcaption>1568989192034</figcaption></figure><h3 id="_10-7-2-dynamic-mapping-推测规则" tabindex="-1"><a class="header-anchor" href="#_10-7-2-dynamic-mapping-推测规则" aria-hidden="true">#</a> 10.7.2 dynamic mapping 推测规则</h3><p><code>true or false --&gt; boolean</code></p><p><code>123 --&gt; long</code></p><p><code>123.45 --&gt; double</code></p><p><code>2019-01-01 --&gt; date</code></p><p><code>&quot;hello world&quot; --&gt; text/keywod</code></p><h3 id="_10-7-3-查看mapping" tabindex="-1"><a class="header-anchor" href="#_10-7-3-查看mapping" aria-hidden="true">#</a> 10.7.3 查看mapping</h3><p><code>GET /index/_mapping/</code></p><h2 id="_10-8-手动管理mapping" tabindex="-1"><a class="header-anchor" href="#_10-8-手动管理mapping" aria-hidden="true">#</a> 10.8 手动管理mapping</h2><h3 id="_10-8-1查询所有索引的映射" tabindex="-1"><a class="header-anchor" href="#_10-8-1查询所有索引的映射" aria-hidden="true">#</a> 10.8.1查询所有索引的映射</h3><p><code>GET /_mapping</code></p><h3 id="_10-8-2-创建映射" tabindex="-1"><a class="header-anchor" href="#_10-8-2-创建映射" aria-hidden="true">#</a> 10.8.2 创建映射 ！！</h3><p>创建索引后，应该立即手动创建映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT book/_mapping
{
	&quot;properties&quot;: {
           &quot;name&quot;: {
                  &quot;type&quot;: &quot;text&quot;
            },
           &quot;description&quot;: {
              &quot;type&quot;: &quot;text&quot;,
              &quot;analyzer&quot;:&quot;english&quot;,
              &quot;search_analyzer&quot;:&quot;english&quot;
           },
           &quot;pic&quot;:{
             &quot;type&quot;:&quot;text&quot;,
             &quot;index&quot;:false
           },
           &quot;studymodel&quot;:{
             &quot;type&quot;:&quot;text&quot;
           }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="text-文本类型" tabindex="-1"><a class="header-anchor" href="#text-文本类型" aria-hidden="true">#</a> Text 文本类型</h4><p>1）analyzer</p><p>通过analyzer属性指定分词器。</p><p>上边指定了analyzer是指在索引和搜索都使用english，如果单独想定义搜索时使用的分词器则可以通过search_analyzer属性。</p><p>2）index</p><p>index属性指定是否索引。</p><p>默认为index=true，即要进行索引，只有进行索引才可以从索引库搜索到。</p><p>但是也有一些内容不需要索引，比如：商品图片地址只被用来展示图片，不进行搜索图片，此时可以将index设置为false。</p><p>删除索引，重新创建映射，将pic的index设置为false，尝试根据pic去搜索，结果搜索不到数据。</p><p>3）store</p><p>是否在source之外存储，每个文档索引后会在 ES中保存一份原始文档，存放在<code>&quot;_source&quot;</code>中，一般情况下不需要设置store为true，因为在_source中已经有一份原始文档了。</p><p>测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT book/_mapping
{
		&quot;properties&quot;: {
           &quot;name&quot;: {
                  &quot;type&quot;: &quot;text&quot;
            },
           &quot;description&quot;: {
              &quot;type&quot;: &quot;text&quot;,
              &quot;analyzer&quot;:&quot;english&quot;,
              &quot;search_analyzer&quot;:&quot;english&quot;
           },
           &quot;pic&quot;:{
             &quot;type&quot;:&quot;text&quot;,
             &quot;index&quot;:false
           },
           &quot;studymodel&quot;:{
             &quot;type&quot;:&quot;text&quot;
           }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/_doc/1
{
  &quot;name&quot;:&quot;Bootstrap开发框架&quot;,
  &quot;description&quot;:&quot;Bootstrap是由Twitter推出的一个前台页面开发框架，在行业之中使用较为广泛。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长页面开发的程序人员）轻松的实现一个不受浏览器限制的精美界面效果。&quot;,
  &quot;pic&quot;:&quot;group1/M00/00/01/wKhlQFqO4MmAOP53AAAcwDwm6SU490.jpg&quot;,
  &quot;studymodel&quot;:&quot;201002&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Get /book/_search?q=name:开发</code></p><p><code>Get /book/_search?q=description:开发</code></p><p><code>Get /book/_search?q=pic:group1/M00/00/01/wKhlQFqO4MmAOP53AAAcwDwm6SU490.jpg</code></p><p><code>Get /book/_search?q=studymodel:201002</code></p><p>通过测试发现：name和description都支持全文检索，pic不可作为查询条件。</p><h4 id="keyword关键字字段" tabindex="-1"><a class="header-anchor" href="#keyword关键字字段" aria-hidden="true">#</a> keyword关键字字段</h4><p>目前已经取代了&quot;index&quot;: false。上边介绍的text文本字段在映射时要设置分词器，keyword字段为关键字字段，通常搜索keyword是按照整体搜索，所以创建keyword字段的索引时是不进行分词的，比如：邮政编码、手机号码、身份证等。keyword字段通常用于过虑、排序、聚合等。</p><h4 id="date日期类型" tabindex="-1"><a class="header-anchor" href="#date日期类型" aria-hidden="true">#</a> date日期类型</h4><p>日期类型不用设置分词器。</p><p>通常日期类型的字段用于排序。</p><p>format</p><p>通过format设置日期格式</p><p>例子：</p><p>下边的设置允许date字段存储年月日时分秒、年月日及毫秒三种格式。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>

   <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span>   <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>

          <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd&quot;</span>

        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入文档：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Post book/doc/<span class="token number">3</span> 

<span class="token punctuation">{</span>

<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spring开发基础&quot;</span><span class="token punctuation">,</span>

<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spring 在java领域非常流行，java程序员都在用。&quot;</span><span class="token punctuation">,</span>

<span class="token property">&quot;studymodel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;201001&quot;</span><span class="token punctuation">,</span>

 <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span><span class="token string">&quot;group1/M00/00/01/wKhlQFqO4MmAOP53AAAcwDwm6SU490.jpg&quot;</span><span class="token punctuation">,</span>

 <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;2018-07-04 18:28:58&quot;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h4><p>下边是ES支持的数值类型</p><figure><img src="`+I+`" alt="1568990520717" tabindex="0" loading="lazy"><figcaption>1568990520717</figcaption></figure><p>1、尽量选择范围小的类型，提高搜索效率</p><p>2、对于浮点数尽量用比例因子，比如一个价格字段，单位为元，我们将比例因子设置为100这在ES中会按 分 存储，映射如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;price&quot;: {
        &quot;type&quot;: &quot;scaled_float&quot;,
        &quot;scaling_factor&quot;: 100
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于比例因子为100，如果我们输入的价格是23.45则ES中会将23.45乘以100存储在ES中。</p><p>如果输入的价格是23.456，ES会将23.456乘以100再取一个接近原始值的数，得出2346。</p><p>使用比例因子的好处是整型比浮点型更易压缩，节省磁盘空间。</p><p>如果比例因子不适合，则从下表选择范围小的去用：</p><p>更新已有映射，并插入文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT book/doc/3
{
&quot;name&quot;: &quot;spring开发基础&quot;,
&quot;description&quot;: &quot;spring 在java领域非常流行，java程序员都在用。&quot;,
&quot;studymodel&quot;: &quot;201001&quot;,
 &quot;pic&quot;:&quot;group1/M00/00/01/wKhlQFqO4MmAOP53AAAcwDwm6SU490.jpg&quot;,
 &quot;timestamp&quot;:&quot;2018-07-04 18:28:58&quot;,
 &quot;price&quot;:38.6
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-8-3修改映射" tabindex="-1"><a class="header-anchor" href="#_10-8-3修改映射" aria-hidden="true">#</a> 10.8.3修改映射</h3><p>只能创建index时手动建立mapping，或者新增field mapping，但是不能update field mapping。</p><p>因为已有数据按照映射早已分词存储好。如果修改，那这些存量数据怎么办。</p><p>新增一个字段mapping</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/_mapping/
{
  &quot;properties&quot; : {
    &quot;new_field&quot; : {
      &quot;type&quot; :    &quot;text&quot;,
     &quot;index&quot;:    &quot;false&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果修改mapping,会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/_mapping/
{
  &quot;properties&quot; : {
    &quot;studymodel&quot; : {
     &quot;type&quot; :    &quot;keyword&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: {
    &quot;root_cause&quot;: [
      {
        &quot;type&quot;: &quot;illegal_argument_exception&quot;,
        &quot;reason&quot;: &quot;mapper [studymodel] of different type, current_type [text], merged_type [keyword]&quot;
      }
    ],
    &quot;type&quot;: &quot;illegal_argument_exception&quot;,
    &quot;reason&quot;: &quot;mapper [studymodel] of different type, current_type [text], merged_type [keyword]&quot;
  },
  &quot;status&quot;: 400
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-8-4删除映射" tabindex="-1"><a class="header-anchor" href="#_10-8-4删除映射" aria-hidden="true">#</a> 10.8.4删除映射</h3><p>通过删除索引来删除映射。</p><h2 id="_10-9-复杂数据类型" tabindex="-1"><a class="header-anchor" href="#_10-9-复杂数据类型" aria-hidden="true">#</a> 10.9 复杂数据类型</h2><h3 id="_10-9-1-multivalue-field" tabindex="-1"><a class="header-anchor" href="#_10-9-1-multivalue-field" aria-hidden="true">#</a> 10.9 .1 multivalue field</h3><p><code>{ &quot;tags&quot;: [ &quot;tag1&quot;, &quot;tag2&quot; ]}</code></p><p>建立索引时与string是一样的，数据类型不能混</p><h3 id="_10-9-2-empty-field" tabindex="-1"><a class="header-anchor" href="#_10-9-2-empty-field" aria-hidden="true">#</a> 10.9 .2. empty field</h3><p><code>null，[]，[null]</code></p><h3 id="_10-9-3-object-field" tabindex="-1"><a class="header-anchor" href="#_10-9-3-object-field" aria-hidden="true">#</a> 10.9 .3. object field</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /company/_doc/1
{
  &quot;address&quot;: {
    &quot;country&quot;: &quot;china&quot;,
    &quot;province&quot;: &quot;guangdong&quot;,
    &quot;city&quot;: &quot;guangzhou&quot;
  },
  &quot;name&quot;: &quot;jack&quot;,
  &quot;age&quot;: 27,
  &quot;join_date&quot;: &quot;2019-01-01&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>address：object类型</p><p>查询映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /company/_mapping
{
  &quot;company&quot; : {
    &quot;mappings&quot; : {
      &quot;properties&quot; : {
        &quot;address&quot; : {
          &quot;properties&quot; : {
            &quot;city&quot; : {
              &quot;type&quot; : &quot;text&quot;,
              &quot;fields&quot; : {
                &quot;keyword&quot; : {
                  &quot;type&quot; : &quot;keyword&quot;,
                  &quot;ignore_above&quot; : 256
                }
              }
            },
            &quot;country&quot; : {
              &quot;type&quot; : &quot;text&quot;,
              &quot;fields&quot; : {
                &quot;keyword&quot; : {
                  &quot;type&quot; : &quot;keyword&quot;,
                  &quot;ignore_above&quot; : 256
                }
              }
            },
            &quot;province&quot; : {
              &quot;type&quot; : &quot;text&quot;,
              &quot;fields&quot; : {
                &quot;keyword&quot; : {
                  &quot;type&quot; : &quot;keyword&quot;,
                  &quot;ignore_above&quot; : 256
                }
              }
            }
          }
        },
        &quot;age&quot; : {
          &quot;type&quot; : &quot;long&quot;
        },
        &quot;join_date&quot; : {
          &quot;type&quot; : &quot;date&quot;
        },
        &quot;name&quot; : {
          &quot;type&quot; : &quot;text&quot;,
          &quot;fields&quot; : {
            &quot;keyword&quot; : {
              &quot;type&quot; : &quot;keyword&quot;,
              &quot;ignore_above&quot; : 256
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>object</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;address&quot;: {
    &quot;country&quot;: &quot;china&quot;,
    &quot;province&quot;: &quot;guangdong&quot;,
    &quot;city&quot;: &quot;guangzhou&quot;
  },
  &quot;name&quot;: &quot;jack&quot;,
  &quot;age&quot;: 27,
  &quot;join_date&quot;: &quot;2017-01-01&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>底层存储格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;name&quot;:            [jack],
    &quot;age&quot;:          [27],
    &quot;join_date&quot;:      [2017-01-01],
    &quot;address.country&quot;:         [china],
    &quot;address.province&quot;:   [guangdong],
    &quot;address.city&quot;:  [guangzhou]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;authors&quot;: [
        { &quot;age&quot;: 26, &quot;name&quot;: &quot;Jack White&quot;},
        { &quot;age&quot;: 55, &quot;name&quot;: &quot;Tom Jones&quot;},
        { &quot;age&quot;: 39, &quot;name&quot;: &quot;Kitty Smith&quot;}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;authors.age&quot;:    [26, 55, 39],
    &quot;authors.name&quot;:   [jack, white, tom, jones, kitty, smith]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-索引index入门" tabindex="-1"><a class="header-anchor" href="#_11-索引index入门" aria-hidden="true">#</a> 11． 索引Index入门</h1><h2 id="_11-1-索引管理" tabindex="-1"><a class="header-anchor" href="#_11-1-索引管理" aria-hidden="true">#</a> 11.1． 索引管理</h2><h3 id="_11-1-1-为什么我们要手动创建索引" tabindex="-1"><a class="header-anchor" href="#_11-1-1-为什么我们要手动创建索引" aria-hidden="true">#</a> 11.1.1. 为什么我们要手动创建索引</h3><p>直接put数据 PUT index/_doc/1,es会自动生成索引，并建立动态映射dynamic mapping。</p><p>在生产上，我们需要自己手动建立索引和映射，为了更好地管理索引。就像数据库的建表语句一样。</p><h3 id="_11-1-2-索引管理" tabindex="-1"><a class="header-anchor" href="#_11-1-2-索引管理" aria-hidden="true">#</a> 11.1.2. 索引管理</h3><h4 id="_11-1-2-1-创建索引" tabindex="-1"><a class="header-anchor" href="#_11-1-2-1-创建索引" aria-hidden="true">#</a> 11.1.2.1 创建索引</h4><p>创建索引的语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /index
{
    &quot;settings&quot;: { ... any settings ... },
    &quot;mappings&quot;: {
       &quot;properties&quot; : {
            &quot;field1&quot; : { &quot;type&quot; : &quot;text&quot; }
        }
    },
    &quot;aliases&quot;: {
    	&quot;default_index&quot;: {}
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 1
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;field1&quot;:{
        &quot;type&quot;: &quot;text&quot;
      },
      &quot;field2&quot;:{
        &quot;type&quot;: &quot;text&quot;
      }
    }
  },
  &quot;aliases&quot;: {
    &quot;default_index&quot;: {}
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>索引别名</strong></p><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /my_index/_doc/1
{
	&quot;field1&quot;:&quot;java&quot;,
	&quot;field2&quot;:&quot;js&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询数据 都可以查到</p><p><code>GET /my_index/_doc/1</code></p><p><code>GET /default_index/_doc/1</code></p><h4 id="_11-1-2-2查询索引" tabindex="-1"><a class="header-anchor" href="#_11-1-2-2查询索引" aria-hidden="true">#</a> 11.1.2.2查询索引</h4><p><code>GET /my_index/_mapping</code></p><p><code>GET /my_index/_setting</code></p><h4 id="_11-1-2-3修改索引" tabindex="-1"><a class="header-anchor" href="#_11-1-2-3修改索引" aria-hidden="true">#</a> 11.1.2.3修改索引</h4><p>修改副本数</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT /my_index/_settings
{
    &quot;index&quot; : {
        &quot;number_of_replicas&quot; : 2
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-1-2-4删除索引" tabindex="-1"><a class="header-anchor" href="#_11-1-2-4删除索引" aria-hidden="true">#</a> 11.1.2.4删除索引</h4><p><code>DELETE /my_index</code></p><p><code>DELETE /index_one,index_two</code></p><p><code>DELETE /index_*</code></p><p><code>DELETE /_all</code></p><p>为了安全起见，防止恶意删除索引，删除时必须指定索引名：</p><p><code>elasticsearch.yml</code></p><p><code>action.destructive_requires_name: true</code></p><h2 id="_11-2-定制分词器" tabindex="-1"><a class="header-anchor" href="#_11-2-定制分词器" aria-hidden="true">#</a> 11.2． 定制分词器</h2><h3 id="_11-2-1-默认的分词器" tabindex="-1"><a class="header-anchor" href="#_11-2-1-默认的分词器" aria-hidden="true">#</a> 11.2.1 默认的分词器</h3><p>standard</p><p>分词三个组件，character filter，tokenizer，token filter</p><p>standard tokenizer：以单词边界进行切分</p><p>standard token filter：什么都不做</p><p>lowercase token filter：将所有字母转换为小写</p><p>stop token filer（默认被禁用）：移除停用词，比如a the it等等</p><h3 id="_11-2-2-修改分词器的设置" tabindex="-1"><a class="header-anchor" href="#_11-2-2-修改分词器的设置" aria-hidden="true">#</a> 11.2.2 修改分词器的设置</h3><p>启用english停用词token filter</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index
{
  &quot;settings&quot;: {
    &quot;analysis&quot;: {
      &quot;analyzer&quot;: {
        &quot;es_std&quot;: {
          &quot;type&quot;: &quot;standard&quot;,
          &quot;stopwords&quot;: &quot;_english_&quot;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试分词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /my_index/_analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;, 
  &quot;text&quot;: &quot;a dog is in the house&quot;
}

GET /my_index/_analyze
{
  &quot;analyzer&quot;: &quot;es_std&quot;,
  &quot;text&quot;:&quot;a dog is in the house&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-3-定制化自己的分词器" tabindex="-1"><a class="header-anchor" href="#_11-2-3-定制化自己的分词器" aria-hidden="true">#</a> 11.2.3 定制化自己的分词器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index
{
  &quot;settings&quot;: {
    &quot;analysis&quot;: {
      &quot;char_filter&quot;: {
        &quot;&amp;_to_and&quot;: {
          &quot;type&quot;: &quot;mapping&quot;,
          &quot;mappings&quot;: [&quot;&amp;=&gt; and&quot;]
        }
      },
      &quot;filter&quot;: {
        &quot;my_stopwords&quot;: {
          &quot;type&quot;: &quot;stop&quot;,
          &quot;stopwords&quot;: [&quot;the&quot;, &quot;a&quot;]
        }
      },
      &quot;analyzer&quot;: {
        &quot;my_analyzer&quot;: {
          &quot;type&quot;: &quot;custom&quot;,
          &quot;char_filter&quot;: [&quot;html_strip&quot;, &quot;&amp;_to_and&quot;],
          &quot;tokenizer&quot;: &quot;standard&quot;,
          &quot;filter&quot;: [&quot;lowercase&quot;, &quot;my_stopwords&quot;]
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /my_index/_analyze
{
  &quot;analyzer&quot;: &quot;my_analyzer&quot;,
  &quot;text&quot;: &quot;tom&amp;jerry are a friend in the house, &lt;a&gt;, HAHA!!&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置字段使用自定义分词器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_mapping/
{
  &quot;properties&quot;: {
    &quot;content&quot;: {
      &quot;type&quot;: &quot;text&quot;,
      &quot;analyzer&quot;: &quot;my_analyzer&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-3-type底层结构及弃用原因" tabindex="-1"><a class="header-anchor" href="#_11-3-type底层结构及弃用原因" aria-hidden="true">#</a> 11.3 type底层结构及弃用原因</h2><h3 id="_11-3-1type是什么" tabindex="-1"><a class="header-anchor" href="#_11-3-1type是什么" aria-hidden="true">#</a> 11.3.1type是什么</h3><p>type，是一个index中用来区分类似的数据的，类似的数据，但是可能有不同的fields，而且有不同的属性来控制索引建立、分词器.<br> field的value，在底层的lucene中建立索引的时候，全部是opaque bytes类型，不区分类型的。<br> lucene是没有type的概念的，在document中，实际上将type作为一个document的field来存储，即_type，es通过_type来进行type的过滤和筛选。</p><h3 id="_11-3-2es中不同type存储机制" tabindex="-1"><a class="header-anchor" href="#_11-3-2es中不同type存储机制" aria-hidden="true">#</a> 11.3.2es中不同type存储机制</h3><p>一个index中的多个type，实际上是放在一起存储的，因此一个index下，不能有多个type重名，而类型或者其他设置不同的，因为那样是无法处理的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
   &quot;goods&quot;: {
      &quot;mappings&quot;: {
         &quot;electronic_goods&quot;: {
            &quot;properties&quot;: {
               &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
               },
               &quot;price&quot;: {
                  &quot;type&quot;: &quot;double&quot;
               },
               &quot;service_period&quot;: {
                  &quot;type&quot;: &quot;string&quot;
                   }			
                }
         },
         &quot;fresh_goods&quot;: {
            &quot;properties&quot;: {
               &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
               },
               &quot;price&quot;: {
                  &quot;type&quot;: &quot;double&quot;
               },
               &quot;eat_period&quot;: {
              		&quot;type&quot;: &quot;string&quot;
               }
                }
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /goods/electronic_goods/1
{
  &quot;name&quot;: &quot;小米空调&quot;,
  &quot;price&quot;: 1999.0,
  &quot;service_period&quot;: &quot;one year&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /goods/fresh_goods/1
{
  &quot;name&quot;: &quot;澳洲龙虾&quot;,
  &quot;price&quot;: 199.0,
  &quot;eat_period&quot;: &quot;one week&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>es文档在底层的存储是这样子的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
   &quot;goods&quot;: {
      &quot;mappings&quot;: {
        &quot;_type&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;index&quot;: &quot;false&quot;
        },
        &quot;name&quot;: {
          &quot;type&quot;: &quot;string&quot;
        }
        &quot;price&quot;: {
          &quot;type&quot;: &quot;double&quot;
        }
        &quot;service_period&quot;: {
          &quot;type&quot;: &quot;string&quot;
        },
        &quot;eat_period&quot;: {
          &quot;type&quot;: &quot;string&quot;
        }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>底层数据存储格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_type&quot;: &quot;electronic_goods&quot;,
  &quot;name&quot;: &quot;小米空调&quot;,
  &quot;price&quot;: 1999.0,
  &quot;service_period&quot;: &quot;one year&quot;,
  &quot;eat_period&quot;: &quot;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_type&quot;: &quot;fresh_goods&quot;,
  &quot;name&quot;: &quot;澳洲龙虾&quot;,
  &quot;price&quot;: 199.0,
  &quot;service_period&quot;: &quot;&quot;,
  &quot;eat_period&quot;: &quot;one week&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-3-type弃用" tabindex="-1"><a class="header-anchor" href="#_11-3-3-type弃用" aria-hidden="true">#</a> 11.3.3 type弃用</h3><p>同一索引下，不同type的数据存储其他type的field 大量空值，造成资源浪费。</p><p>所以，不同类型数据，要放到不同的索引中。</p><p>es9中，将会彻底删除type。</p><h2 id="_11-4-定制dynamic-mapping" tabindex="-1"><a class="header-anchor" href="#_11-4-定制dynamic-mapping" aria-hidden="true">#</a> 11.4.定制dynamic mapping</h2><h3 id="_11-4-1定制dynamic策略" tabindex="-1"><a class="header-anchor" href="#_11-4-1定制dynamic策略" aria-hidden="true">#</a> 11.4.1定制dynamic策略</h3><p>true：遇到陌生字段，就进行dynamic mapping</p><p>false：新检测到的字段将被忽略。这些字段将不会被索引，因此将无法搜索，但仍将出现在返回点击的源字段中。这些字段不会添加到映射中，必须显式添加新字段。</p><p>strict：遇到陌生字段，就报错</p><p>创建mapping</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index
{
    &quot;mappings&quot;: {
      &quot;dynamic&quot;: &quot;strict&quot;,
       &quot;properties&quot;: {
        &quot;title&quot;: {
          &quot;type&quot;: &quot;text&quot;
        },
        &quot;address&quot;: {
          &quot;type&quot;: &quot;object&quot;,
          &quot;dynamic&quot;: &quot;true&quot;
        }
	    }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_doc/1
{
  &quot;title&quot;: &quot;my article&quot;,
  &quot;content&quot;: &quot;this is my article&quot;,
  &quot;address&quot;: {
    &quot;province&quot;: &quot;guangdong&quot;,
    &quot;city&quot;: &quot;guangzhou&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: {
    &quot;root_cause&quot;: [
      {
        &quot;type&quot;: &quot;strict_dynamic_mapping_exception&quot;,
        &quot;reason&quot;: &quot;mapping set to strict, dynamic introduction of [content] within [_doc] is not allowed&quot;
      }
    ],
    &quot;type&quot;: &quot;strict_dynamic_mapping_exception&quot;,
    &quot;reason&quot;: &quot;mapping set to strict, dynamic introduction of [content] within [_doc] is not allowed&quot;
  },
  &quot;status&quot;: 400
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-2自定义-dynamic-mapping策略" tabindex="-1"><a class="header-anchor" href="#_11-4-2自定义-dynamic-mapping策略" aria-hidden="true">#</a> 11.4.2自定义 dynamic mapping策略</h3><p>es会根据传入的值，推断类型。</p><figure><img src="`+P+`" alt="1569123478530" tabindex="0" loading="lazy"><figcaption>1569123478530</figcaption></figure><h4 id="date-detection-日期探测" tabindex="-1"><a class="header-anchor" href="#date-detection-日期探测" aria-hidden="true">#</a> date_detection 日期探测</h4><p>默认会按照一定格式识别date，比如yyyy-MM-dd。但是如果某个field先过来一个2017-01-01的值，就会被自动dynamic mapping成date，后面如果再来一个&quot;hello world&quot;之类的值，就会报错。可以手动关闭某个type的date_detection，如果有需要，自己手动指定某个field为date类型。</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT /my_index
{
    &quot;mappings&quot;: {
      &quot;date_detection&quot;: false,
       &quot;properties&quot;: {
        &quot;title&quot;: {
          &quot;type&quot;: &quot;text&quot;
        },
        &quot;address&quot;: {
          &quot;type&quot;: &quot;object&quot;,
          &quot;dynamic&quot;: &quot;true&quot;
        }
	    }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_doc/1
{
  &quot;title&quot;: &quot;my article&quot;,
  &quot;content&quot;: &quot;this is my article&quot;,
  &quot;address&quot;: {
    &quot;province&quot;: &quot;guangdong&quot;,
    &quot;city&quot;: &quot;guangzhou&quot;
  },
  &quot;post_date&quot;:&quot;2019-09-10&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /my_index/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="自定义日期格式" tabindex="-1"><a class="header-anchor" href="#自定义日期格式" aria-hidden="true">#</a> 自定义日期格式</h4><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT my_index
{
  &quot;mappings&quot;: {
    &quot;dynamic_date_formats&quot;: [&quot;MM/dd/yyyy&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT my_index/_doc/1
{
  &quot;create_date&quot;: &quot;09/25/2019&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="numeric-detection-数字探测" tabindex="-1"><a class="header-anchor" href="#numeric-detection-数字探测" aria-hidden="true">#</a> numeric_detection 数字探测</h4><p>虽然json支持本机浮点和整数数据类型，但某些应用程序或语言有时可能将数字呈现为字符串。通常正确的解决方案是显式地映射这些字段，但是可以启用数字检测（默认情况下禁用）来自动完成这些操作。</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT my_index
{
  &quot;mappings&quot;: {
    &quot;numeric_detection&quot;: true
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT my_index/_doc/1
{
  &quot;my_float&quot;:   &quot;1.0&quot;, 
  &quot;my_integer&quot;: &quot;1&quot; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-3定制自己的dynamic-mapping-template" tabindex="-1"><a class="header-anchor" href="#_11-4-3定制自己的dynamic-mapping-template" aria-hidden="true">#</a> 11.4.3定制自己的dynamic mapping template</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index
{
    &quot;mappings&quot;: {
            &quot;dynamic_templates&quot;: [
                { 
                  &quot;en&quot;: {
                      &quot;match&quot;:              &quot;*_en&quot;, 
                      &quot;match_mapping_type&quot;: &quot;string&quot;,
                      &quot;mapping&quot;: {
                          &quot;type&quot;:           &quot;text&quot;,
                          &quot;analyzer&quot;:       &quot;english&quot;
                      }
                }                  
            }
        ]
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_doc/1
{
  &quot;title&quot;: &quot;this is my first article&quot;
}

PUT /my_index/_doc/2
{
  &quot;title_en&quot;: &quot;this is my first article&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET my_index/_search?q=first
GET my_index/_search?q=is
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>title没有匹配到任何的dynamic模板，默认就是standard分词器，不会过滤停用词，is会进入倒排索引，用is来搜索是可以搜索到的</p><p>title_en匹配到了dynamic模板，就是english分词器，会过滤停用词，is这种停用词就会被过滤掉，用is来搜索就搜索不到了</p><h4 id="模板写法" tabindex="-1"><a class="header-anchor" href="#模板写法" aria-hidden="true">#</a> 模板写法</h4><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>PUT my_index
{
  &quot;mappings&quot;: {
    &quot;dynamic_templates&quot;: [
      {
        &quot;integers&quot;: {
          &quot;match_mapping_type&quot;: &quot;long&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;integer&quot;
          }
        }
      },
      {
        &quot;strings&quot;: {
          &quot;match_mapping_type&quot;: &quot;string&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;text&quot;,
            &quot;fields&quot;: {
              &quot;raw&quot;: {
                &quot;type&quot;:  &quot;keyword&quot;,
                &quot;ignore_above&quot;: 256
              }
            }
          }
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板参数</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>&quot;match&quot;:   &quot;long_*&quot;,
&quot;unmatch&quot;: &quot;*_text&quot;,
&quot;match_mapping_type&quot;: &quot;string&quot;,
&quot;path_match&quot;:   &quot;name.*&quot;,
&quot;path_unmatch&quot;: &quot;*.middle&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;match_pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;regex&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^profit_\\d+$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h4><p>1结构化搜索</p><p>默认情况下，elasticsearch将字符串字段映射为带有子关键字字段的文本字段。但是，如果只对结构化内容进行索引，而对全文搜索不感兴趣，则可以仅将“字段”映射为“关键字”。请注意，这意味着为了搜索这些字段，必须搜索索引所用的完全相同的值。</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>	{
        &quot;strings_as_keywords&quot;: {
          &quot;match_mapping_type&quot;: &quot;string&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;keyword&quot;
          }
        }
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2仅搜索</p><p>与前面的示例相反，如果您只关心字符串字段的全文搜索，并且不打算对字符串字段运行聚合、排序或精确搜索，您可以告诉弹性搜索将其仅映射为文本字段（这是5之前的默认行为）</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>	{
        &quot;strings_as_text&quot;: {
          &quot;match_mapping_type&quot;: &quot;string&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;text&quot;
          }
        }
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3norms 不关心评分</p><p>norms是指标时间的评分因素。如果您不关心评分，例如，如果您从不按评分对文档进行排序，则可以在索引中禁用这些评分因子的存储并节省一些空间。</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>{
        &quot;strings_as_keywords&quot;: {
          &quot;match_mapping_type&quot;: &quot;string&quot;,
          &quot;mapping&quot;: {
            &quot;type&quot;: &quot;text&quot;,
            &quot;norms&quot;: false,
            &quot;fields&quot;: {
              &quot;keyword&quot;: {
                &quot;type&quot;: &quot;keyword&quot;,
                &quot;ignore_above&quot;: 256
              }
            }
          }
        }
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-5-零停机重建索引" tabindex="-1"><a class="header-anchor" href="#_11-5-零停机重建索引" aria-hidden="true">#</a> 11.5． 零停机重建索引</h2><h3 id="_11-5-1零停机重建索引" tabindex="-1"><a class="header-anchor" href="#_11-5-1零停机重建索引" aria-hidden="true">#</a> 11.5.1零停机重建索引</h3><p>场景：</p><p>一个field的设置是不能被修改的，如果要修改一个Field，那么应该重新按照新的mapping，建立一个index，然后将数据批量查询出来，重新用bulk api写入index中。</p><p>批量查询的时候，建议采用scroll api，并且采用多线程并发的方式来reindex数据，每次scoll就查询指定日期的一段数据，交给一个线程即可。</p><p>(1)一开始，依靠dynamic mapping，插入数据，但是不小心有些数据是2019-09-10这种日期格式的，所以title这种field被自动映射为了date类型，实际上它应该是string类型的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_doc/1
{
  &quot;title&quot;: &quot;2019-09-10&quot;
}

PUT /my_index/_doc/2
{
  &quot;title&quot;: &quot;2019-09-11&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）当后期向索引中加入string类型的title值的时候，就会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_doc/3
{
  &quot;title&quot;: &quot;my first article&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: {
    &quot;root_cause&quot;: [
      {
        &quot;type&quot;: &quot;mapper_parsing_exception&quot;,
        &quot;reason&quot;: &quot;failed to parse [title]&quot;
      }
    ],
    &quot;type&quot;: &quot;mapper_parsing_exception&quot;,
    &quot;reason&quot;: &quot;failed to parse [title]&quot;,
    &quot;caused_by&quot;: {
      &quot;type&quot;: &quot;illegal_argument_exception&quot;,
      &quot;reason&quot;: &quot;Invalid format: \\&quot;my first article\\&quot;&quot;
    }
  },
  &quot;status&quot;: 400
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）如果此时想修改title的类型，是不可能的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_mapping
{
  &quot;properties&quot;: {
    &quot;title&quot;: {
      &quot;type&quot;: &quot;text&quot;
   	}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: {
    &quot;root_cause&quot;: [
      {
        &quot;type&quot;: &quot;illegal_argument_exception&quot;,
        &quot;reason&quot;: &quot;mapper [title] of different type, current_type [date], merged_type [text]&quot;
      }
    ],
    &quot;type&quot;: &quot;illegal_argument_exception&quot;,
    &quot;reason&quot;: &quot;mapper [title] of different type, current_type [date], merged_type [text]&quot;
  },
  &quot;status&quot;: 400
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）此时，唯一的办法，就是进行reindex，也就是说，重新建立一个索引，将旧索引的数据查询出来，再导入新索引。</p><p>（5）如果说旧索引的名字，是old_index，新索引的名字是new_index，终端java应用，已经在使用old_index在操作了，难道还要去停止java应用，修改使用的index为new_index，才重新启动java应用吗？这个过程中，就会导致java应用停机，可用性降低。</p><p>（6）所以说，给java应用一个别名，这个别名是指向旧索引的，java应用先用着，java应用先用prod_index alias来操作，此时实际指向的是旧的my_index</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index/_alias/prod_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）新建一个index，调整其title的类型为string</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index_new
{
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
		&quot;title&quot;: {
         &quot;type&quot;: &quot;text&quot;
        }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（8）使用scroll api将数据批量查询出来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /my_index/_search?scroll=1m
{
    &quot;query&quot;: {
        &quot;match_all&quot;: {}
    },    
    &quot;size&quot;:  1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_scroll_id&quot;: &quot;DnF1ZXJ5VGhlbkZldGNoBQAAAAAAADpAFjRvbnNUWVZaVGpHdklqOV9zcFd6MncAAAAAAAA6QRY0b25zVFlWWlRqR3ZJajlfc3BXejJ3AAAAAAAAOkIWNG9uc1RZVlpUakd2SWo5X3NwV3oydwAAAAAAADpDFjRvbnNUWVZaVGpHdklqOV9zcFd6MncAAAAAAAA6RBY0b25zVFlWWlRqR3ZJajlfc3BXejJ3&quot;,
  &quot;took&quot;: 1,
  &quot;timed_out&quot;: false,
  &quot;_shards&quot;: {
    &quot;total&quot;: 5,
    &quot;successful&quot;: 5,
    &quot;failed&quot;: 0
  },
  &quot;hits&quot;: {
    &quot;total&quot;: 3,
    &quot;max_score&quot;: null,
    &quot;hits&quot;: [
      {
        &quot;_index&quot;: &quot;my_index&quot;,
        &quot;_type&quot;: &quot;my_type&quot;,
        &quot;_id&quot;: &quot;1&quot;,
        &quot;_score&quot;: null,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;2019-01-02&quot;
        },
        &quot;sort&quot;: [
          0
        ]
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（9）采用bulk api将scoll查出来的一批数据，批量写入新索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_bulk
{ &quot;index&quot;:  { &quot;_index&quot;: &quot;my_index_new&quot;, &quot;_id&quot;: &quot;1&quot; }}
{ &quot;title&quot;:    &quot;2019-09-10&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（10）反复循环8~9，查询一批又一批的数据出来，采取bulk api将每一批数据批量写入新索引</p><p>（11）将prod_index alias切换到my_index_new上去，java应用会直接通过index别名使用新的索引中的数据，java应用程序不需要停机，零提交，高可用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_aliases
{
    &quot;actions&quot;: [
        { &quot;remove&quot;: { &quot;index&quot;: &quot;my_index&quot;, &quot;alias&quot;: &quot;prod_index&quot; }},
        { &quot;add&quot;:    { &quot;index&quot;: &quot;my_index_new&quot;, &quot;alias&quot;: &quot;prod_index&quot; }}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（12）直接通过prod_index别名来查询，是否ok</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /prod_index/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-5-2-生产实践-基于alias对client透明切换index" tabindex="-1"><a class="header-anchor" href="#_11-5-2-生产实践-基于alias对client透明切换index" aria-hidden="true">#</a> 11.5.2 生产实践：基于alias对client透明切换index</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index_v1/_alias/my_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>client对my_index进行操作</p><p>reindex操作，完成之后，切换v1到v2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_aliases
{
    &quot;actions&quot;: [
        { &quot;remove&quot;: { &quot;index&quot;: &quot;my_index_v1&quot;, &quot;alias&quot;: &quot;my_index&quot; }},
        { &quot;add&quot;:    { &quot;index&quot;: &quot;my_index_v2&quot;, &quot;alias&quot;: &quot;my_index&quot; }}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-中文分词器-ik分词器" tabindex="-1"><a class="header-anchor" href="#_12-中文分词器-ik分词器" aria-hidden="true">#</a> 12． 中文分词器 IK分词器</h1><h2 id="_12-1-ik分词器安装使用" tabindex="-1"><a class="header-anchor" href="#_12-1-ik分词器安装使用" aria-hidden="true">#</a> 12.1． Ik分词器安装使用</h2><h3 id="_12-1-1-中文分词器" tabindex="-1"><a class="header-anchor" href="#_12-1-1-中文分词器" aria-hidden="true">#</a> 12.1.1 中文分词器</h3><p>standard 分词器，仅适用于英文。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;中华人民共和国人民大会堂&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们想要的效果是什么：中华人民共和国，人民大会堂</p><p>IK分词器就是目前最流行的es中文分词器</p><h3 id="_12-1-2-安装" tabindex="-1"><a class="header-anchor" href="#_12-1-2-安装" aria-hidden="true">#</a> 12.1.2 安装</h3>`,254),jn={href:"https://github.com/medcl/elasticsearch-analysis-ik",target:"_blank",rel:"noopener noreferrer"},Mn={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},Bn=i(`<p>根据es版本下载相应版本包。</p><p>解压到 es/plugins/ik中。</p><p>重启es</p><h3 id="_12-1-3-ik分词器基础知识" tabindex="-1"><a class="header-anchor" href="#_12-1-3-ik分词器基础知识" aria-hidden="true">#</a> 12.1.3 ik分词器基础知识</h3><p>ik_max_word: 会将文本做最细粒度的拆分，比如会将“中华人民共和国人民大会堂”拆分为“中华人民共和国，中华人民，中华，华人，人民共和国，人民大会堂，人民大会，大会堂”，会穷尽各种可能的组合；</p><p>ik_smart: 会做最粗粒度的拆分，比如会将“中华人民共和国人民大会堂”拆分为“中华人民共和国，人民大会堂”。</p><h3 id="_12-1-4-ik分词器的使用" tabindex="-1"><a class="header-anchor" href="#_12-1-4-ik分词器的使用" aria-hidden="true">#</a> 12.1.4 ik分词器的使用</h3><p>存储时，使用ik_max_word，搜索时，使用ik_smart</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /my_index 
{
  &quot;mappings&quot;: {
      &quot;properties&quot;: {
        &quot;text&quot;: {
          &quot;type&quot;: &quot;text&quot;,
          &quot;analyzer&quot;: &quot;ik_max_word&quot;,
          &quot;search_analyzer&quot;: &quot;ik_smart&quot;
        }
      }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /my_index/_search?q=中华人民共和国人民大会堂
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-2-ik配置文件" tabindex="-1"><a class="header-anchor" href="#_12-2-ik配置文件" aria-hidden="true">#</a> 12.2. ik配置文件</h2><h3 id="_12-2-1-ik配置文件" tabindex="-1"><a class="header-anchor" href="#_12-2-1-ik配置文件" aria-hidden="true">#</a> 12.2.1 ik配置文件</h3><p>ik配置文件地址：es/plugins/ik/config目录</p><p>IKAnalyzer.cfg.xml：用来配置自定义词库</p><p>main.dic：ik原生内置的中文词库，总共有27万多条，只要是这些单词，都会被分在一起</p><p>preposition.dic: 介词</p><p>quantifier.dic：放了一些单位相关的词，量词</p><p>suffix.dic：放了一些后缀</p><p>surname.dic：中国的姓氏</p><p>stopword.dic：英文停用词</p><p>ik原生最重要的两个配置文件</p><p>main.dic：包含了原生的中文词语，会按照这个里面的词语去分词</p><p>stopword.dic：包含了英文的停用词</p><p>停用词，stopword</p><p>a the and at but</p><p>一般，像停用词，会在分词的时候，直接被干掉，不会建立在倒排索引中</p><h3 id="_12-2-1-自定义词库" tabindex="-1"><a class="header-anchor" href="#_12-2-1-自定义词库" aria-hidden="true">#</a> 12.2.1 自定义词库</h3><p>（1）自己建立词库：每年都会涌现一些特殊的流行词，网红，蓝瘦香菇，喊麦，鬼畜，一般不会在ik的原生词典里</p><p>自己补充自己的最新的词语，到ik的词库里面</p><p>IKAnalyzer.cfg.xml：ext_dict，创建mydict.dic。</p><p>补充自己的词语，然后需要重启es，才能生效</p><p>（2）自己建立停用词库：比如了，的，啥，么，我们可能并不想去建立索引，让人家搜索</p><p>custom/ext_stopword.dic，已经有了常用的中文停用词，可以补充自己的停用词，然后重启es</p><h2 id="_12-3-使用mysql热更新-词库" tabindex="-1"><a class="header-anchor" href="#_12-3-使用mysql热更新-词库" aria-hidden="true">#</a> 12.3． 使用mysql热更新 词库</h2><h3 id="_12-3-1热更新" tabindex="-1"><a class="header-anchor" href="#_12-3-1热更新" aria-hidden="true">#</a> 12.3.1热更新</h3><p>每次都是在es的扩展词典中，手动添加新词语，很坑</p><p>（1）每次添加完，都要重启es才能生效，非常麻烦</p><p>（2）es是分布式的，可能有数百个节点，你不能每次都一个一个节点上面去修改</p><p>es不停机，直接我们在外部某个地方添加新的词语，es中立即热加载到这些新词语</p><p>热更新的方案</p><p>（1）基于ik分词器原生支持的热更新方案，部署一个web服务器，提供一个http接口，通过modified和tag两个http响应头，来提供词语的热更新</p><p>（2）修改ik分词器源码，然后手动支持从mysql中每隔一定时间，自动加载新的词库</p><p>用第二种方案，第一种，ik git社区官方都不建议采用，觉得不太稳定</p><h3 id="_12-3-2步骤" tabindex="-1"><a class="header-anchor" href="#_12-3-2步骤" aria-hidden="true">#</a> 12.3.2步骤</h3><p>1、下载源码</p>`,46),In={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},Pn=i(`<p>ik分词器，是个标准的java maven工程，直接导入eclipse就可以看到源码</p><p>2、修改源</p><p>org.wltea.analyzer.dic.Dictionary类，160行Dictionary单例类的初始化方法，在这里需要创建一个我们自定义的线程，并且启动它</p><p>org.wltea.analyzer.dic.HotDictReloadThread类：就是死循环，不断调用Dictionary.getSingleton().reLoadMainDict()，去重新加载词典</p><p>Dictionary类，399行：this.loadMySQLExtDict(); 加载mymsql字典。</p><p>Dictionary类，609行：this.loadMySQLStopwordDict();加载mysql停用词</p><p>config下jdbc-reload.properties。mysql配置文件</p><p>3、mvn package打包代码</p><p>target\\releases\\elasticsearch-analysis-ik-7.3.0.zip</p><p>4、解压缩ik压缩包</p><p>将mysql驱动jar，放入ik的目录下</p><p>5、修改jdbc相关配置</p><p>6、重启es</p><p>观察日志，日志中就会显示我们打印的那些东西，比如加载了什么配置，加载了什么词语，什么停用词</p><p>7、在mysql中添加词库与停用词</p><p>8、分词实验，验证热更新生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_analyze
{
  &quot;analyzer&quot;: &quot;ik_smart&quot;,
  &quot;text&quot;: &quot;传智播客&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-java-api-实现索引管理" tabindex="-1"><a class="header-anchor" href="#_13-java-api-实现索引管理" aria-hidden="true">#</a> 13． java api 实现索引管理</h1><p>代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.itheima.es;

import org.elasticsearch.action.ActionListener;
import org.elasticsearch.action.admin.indices.alias.Alias;
import org.elasticsearch.action.admin.indices.close.CloseIndexRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.action.admin.indices.open.OpenIndexRequest;
import org.elasticsearch.action.admin.indices.open.OpenIndexResponse;
import org.elasticsearch.action.support.ActiveShardCount;
import org.elasticsearch.action.support.master.AcknowledgedResponse;
import org.elasticsearch.client.IndicesClient;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.client.indices.CreateIndexRequest;
import org.elasticsearch.client.indices.CreateIndexResponse;
import org.elasticsearch.client.indices.GetIndexRequest;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.common.xcontent.XContentType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;

/**

- @author Administrator

- @version 1.0
  **/
  @SpringBootTest
  @RunWith(SpringRunner.class)
  public class TestIndex {

  @Autowired
  RestHighLevelClient client;

//    @Autowired
//    RestClient restClient;

​\`\`\`
//创建索引
@Test
public void testCreateIndex() throws IOException {
    //创建索引对象
    CreateIndexRequest createIndexRequest = new CreateIndexRequest(&quot;itheima_book&quot;);
    //设置参数
    createIndexRequest.settings(Settings.builder().put(&quot;number_of_shards&quot;, &quot;1&quot;).put(&quot;number_of_replicas&quot;, &quot;0&quot;));
    //指定映射1
    createIndexRequest.mapping(&quot; {\\n&quot; +
            &quot; \\t\\&quot;properties\\&quot;: {\\n&quot; +
            &quot;            \\&quot;name\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;keyword\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;           \\&quot;description\\&quot;: {\\n&quot; +
            &quot;              \\&quot;type\\&quot;: \\&quot;text\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;            \\&quot;price\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;long\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;           \\&quot;pic\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;text\\&quot;,\\n&quot; +
            &quot;             \\&quot;index\\&quot;:false\\n&quot; +
            &quot;           }\\n&quot; +
            &quot; \\t}\\n&quot; +
            &quot;}&quot;, XContentType.JSON);

    //指定映射2
​\`\`\`

//        Map&lt;String, Object&gt; message = new HashMap&lt;&gt;();
//        message.put(&quot;type&quot;, &quot;text&quot;);
//        Map&lt;String, Object&gt; properties = new HashMap&lt;&gt;();
//        properties.put(&quot;message&quot;, message);
//        Map&lt;String, Object&gt; mapping = new HashMap&lt;&gt;();
//        mapping.put(&quot;properties&quot;, properties);
//        createIndexRequest.mapping(mapping);

​\`\`\`
    //指定映射3
​\`\`\`

//        XContentBuilder builder = XContentFactory.jsonBuilder();
//        builder.startObject();
//        {
//            builder.startObject(&quot;properties&quot;);
//            {
//                builder.startObject(&quot;message&quot;);
//                {
//                    builder.field(&quot;type&quot;, &quot;text&quot;);
//                }
//                builder.endObject();
//            }
//            builder.endObject();
//        }
//        builder.endObject();
//        createIndexRequest.mapping(builder);

​\`\`\`
    //设置别名
    createIndexRequest.alias(new Alias(&quot;itheima_index_new&quot;));

    // 额外参数
    //设置超时时间
    createIndexRequest.setTimeout(TimeValue.timeValueMinutes(2));
    //设置主节点超时时间
    createIndexRequest.setMasterTimeout(TimeValue.timeValueMinutes(1));
    //在创建索引API返回响应之前等待的活动分片副本的数量，以int形式表示
    createIndexRequest.waitForActiveShards(ActiveShardCount.from(2));
    createIndexRequest.waitForActiveShards(ActiveShardCount.DEFAULT);

    //操作索引的客户端
    IndicesClient indices = client.indices();
    //执行创建索引库
    CreateIndexResponse createIndexResponse = indices.create(createIndexRequest, RequestOptions.DEFAULT);

    //得到响应（全部）
    boolean acknowledged = createIndexResponse.isAcknowledged();
    //得到响应 指示是否在超时前为索引中的每个分片启动了所需数量的碎片副本
    boolean shardsAcknowledged = createIndexResponse.isShardsAcknowledged();

    System.out.println(&quot;!!!!!!!!!!!!!!!!!!!!!!!!!!!&quot; + acknowledged);
    System.out.println(shardsAcknowledged);

}

//异步新增索引
@Test
public void testCreateIndexAsync() throws IOException {
    //创建索引对象
    CreateIndexRequest createIndexRequest = new CreateIndexRequest(&quot;itheima_book2&quot;);
    //设置参数
    createIndexRequest.settings(Settings.builder().put(&quot;number_of_shards&quot;, &quot;1&quot;).put(&quot;number_of_replicas&quot;, &quot;0&quot;));
    //指定映射1
    createIndexRequest.mapping(&quot; {\\n&quot; +
            &quot; \\t\\&quot;properties\\&quot;: {\\n&quot; +
            &quot;            \\&quot;name\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;keyword\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;           \\&quot;description\\&quot;: {\\n&quot; +
            &quot;              \\&quot;type\\&quot;: \\&quot;text\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;            \\&quot;price\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;long\\&quot;\\n&quot; +
            &quot;           },\\n&quot; +
            &quot;           \\&quot;pic\\&quot;:{\\n&quot; +
            &quot;             \\&quot;type\\&quot;:\\&quot;text\\&quot;,\\n&quot; +
            &quot;             \\&quot;index\\&quot;:false\\n&quot; +
            &quot;           }\\n&quot; +
            &quot; \\t}\\n&quot; +
            &quot;}&quot;, XContentType.JSON);

    //监听方法
    ActionListener&lt;CreateIndexResponse&gt; listener =
            new ActionListener&lt;CreateIndexResponse&gt;() {

                @Override
                public void onResponse(CreateIndexResponse createIndexResponse) {
                    System.out.println(&quot;!!!!!!!!创建索引成功&quot;);
                    System.out.println(createIndexResponse.toString());
                }

                @Override
                public void onFailure(Exception e) {
                    System.out.println(&quot;!!!!!!!!创建索引失败&quot;);
                    e.printStackTrace();
                }
            };

    //操作索引的客户端
    IndicesClient indices = client.indices();
    //执行创建索引库
    indices.createAsync(createIndexRequest, RequestOptions.DEFAULT, listener);

    try {
        Thread.sleep(5000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
​\`\`\`

​\`\`\`
}
​\`\`\`

​\`\`\`
//删除索引库
@Test
public void testDeleteIndex() throws IOException {
    //删除索引对象
    DeleteIndexRequest deleteIndexRequest = new DeleteIndexRequest(&quot;itheima_book2&quot;);
    //操作索引的客户端
    IndicesClient indices = client.indices();
    //执行删除索引
    AcknowledgedResponse delete = indices.delete(deleteIndexRequest, RequestOptions.DEFAULT);
    //得到响应
    boolean acknowledged = delete.isAcknowledged();
    System.out.println(acknowledged);

}

//异步删除索引库
@Test
public void testDeleteIndexAsync() throws IOException {
    //删除索引对象
    DeleteIndexRequest deleteIndexRequest = new DeleteIndexRequest(&quot;itheima_book2&quot;);
    //操作索引的客户端
    IndicesClient indices = client.indices();

    //监听方法
    ActionListener&lt;AcknowledgedResponse&gt; listener =
            new ActionListener&lt;AcknowledgedResponse&gt;() {
                @Override
                public void onResponse(AcknowledgedResponse deleteIndexResponse) {
                    System.out.println(&quot;!!!!!!!!删除索引成功&quot;);
                    System.out.println(deleteIndexResponse.toString());
                }

                @Override
                public void onFailure(Exception e) {
                    System.out.println(&quot;!!!!!!!!删除索引失败&quot;);
                    e.printStackTrace();
                }
            };
    //执行删除索引
    indices.deleteAsync(deleteIndexRequest, RequestOptions.DEFAULT, listener);

    try {
        Thread.sleep(5000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }

}

// Indices Exists API
@Test
public void testExistIndex() throws IOException {
    GetIndexRequest request = new GetIndexRequest(&quot;itheima_book&quot;);
    request.local(false);//从主节点返回本地信息或检索状态
    request.humanReadable(true);//以适合人类的格式返回结果
    request.includeDefaults(false);//是否返回每个索引的所有默认设置

    boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);
    System.out.println(exists);
}
​\`\`\`

​\`\`\`
// Indices Open API
@Test
public void testOpenIndex() throws IOException {
    OpenIndexRequest request = new OpenIndexRequest(&quot;itheima_book&quot;);

    OpenIndexResponse openIndexResponse = client.indices().open(request, RequestOptions.DEFAULT);
    boolean acknowledged = openIndexResponse.isAcknowledged();
    System.out.println(&quot;!!!!!!!!!&quot;+acknowledged);
}

// Indices Close API
@Test
public void testCloseIndex() throws IOException {
    CloseIndexRequest request = new CloseIndexRequest(&quot;index&quot;);
    AcknowledgedResponse closeIndexResponse = client.indices().close(request, RequestOptions.DEFAULT);
    boolean acknowledged = closeIndexResponse.isAcknowledged();
    System.out.println(&quot;!!!!!!!!!&quot;+acknowledged);

}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-search搜索入门" tabindex="-1"><a class="header-anchor" href="#_14-search搜索入门" aria-hidden="true">#</a> 14． search搜索入门</h1><h2 id="_14-1-搜索语法入门" tabindex="-1"><a class="header-anchor" href="#_14-1-搜索语法入门" aria-hidden="true">#</a> 14.1． 搜索语法入门</h2><h3 id="_14-1-1query-string-search" tabindex="-1"><a class="header-anchor" href="#_14-1-1query-string-search" aria-hidden="true">#</a> 14.1.1query string search</h3><p>无条件搜索所有</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 969,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 3,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 1.0,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;1&quot;,
        &quot;_score&quot; : 1.0,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;Bootstrap开发&quot;,
          &quot;description&quot; : &quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;,
          &quot;studymodel&quot; : &quot;201002&quot;,
          &quot;price&quot; : 38.6,
          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;bootstrap&quot;,
            &quot;dev&quot;
          ]
        }
      },
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : 1.0,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;java编程思想&quot;,
          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 68.6,
          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;java&quot;,
            &quot;dev&quot;
          ]
        }
      },
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;3&quot;,
        &quot;_score&quot; : 1.0,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;spring开发基础&quot;,
          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 88.6,
          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;spring&quot;,
            &quot;java&quot;
          ]
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释</p><p>took：耗费了几毫秒</p><p>timed_out：是否超时，这里是没有</p><p>_shards：到几个分片搜索，成功几个，跳过几个，失败几个。</p><p>hits.total：查询结果的数量，3个document</p><p>hits.max_score：score的含义，就是document对于一个search的相关度的匹配分数，越相关，就越匹配，分数也高</p><p>hits.hits：包含了匹配搜索的document的所有详细数据</p><h3 id="_14-1-2传参" tabindex="-1"><a class="header-anchor" href="#_14-1-2传参" aria-hidden="true">#</a> 14.1.2传参</h3><p>与http请求传参类似</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search?q=name:java&amp;sort=price:desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类比sql: select * from book where name like ’ %java%’ order by price desc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 2,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : null,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;java编程思想&quot;,
          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 68.6,
          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;java&quot;,
            &quot;dev&quot;
          ]
        },
        &quot;sort&quot; : [
          68.6
        ]
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-1-3图解timeout" tabindex="-1"><a class="header-anchor" href="#_14-1-3图解timeout" aria-hidden="true">#</a> 14.1.3图解timeout</h3><p>GET /book/_search?timeout=10ms</p><p>全局设置：配置文件中设置 search.default_search_timeout：100ms。默认不超时。</p><h2 id="_14-2-multi-index-多索引搜索" tabindex="-1"><a class="header-anchor" href="#_14-2-multi-index-多索引搜索" aria-hidden="true">#</a> 14.2．multi-index 多索引搜索</h2><h3 id="_14-2-1multi-index搜索模式" tabindex="-1"><a class="header-anchor" href="#_14-2-1multi-index搜索模式" aria-hidden="true">#</a> 14.2.1multi-index搜索模式</h3><p>告诉你如何一次性搜索多个index和多个type下的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/_search：所有索引下的所有数据都搜索出来
/index1/_search：指定一个index，搜索其下所有的数据
/index1,index2/_search：同时搜索两个index下的数据
/index*/_search：按照通配符去匹配多个索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：生产环境log索引可以按照日期分开。</p><p>log_to_es_20190910</p><p>log_to_es_20190911</p><p>log_to_es_20180910</p><h3 id="_14-2-2初步图解一下简单的搜索原理" tabindex="-1"><a class="header-anchor" href="#_14-2-2初步图解一下简单的搜索原理" aria-hidden="true">#</a> 14.2.2初步图解一下简单的搜索原理</h3><p>搜索原理初步图解</p><h2 id="_14-3-分页搜索" tabindex="-1"><a class="header-anchor" href="#_14-3-分页搜索" aria-hidden="true">#</a> 14.3． 分页搜索</h2><h3 id="_14-3-1分页搜索的语法" tabindex="-1"><a class="header-anchor" href="#_14-3-1分页搜索的语法" aria-hidden="true">#</a> 14.3.1分页搜索的语法</h3><p>sql: select * from book limit 1,5</p><p>size，from</p><p>GET /book/_search?size=10</p><p>GET /book/_search?size=10&amp;from=0</p><p>GET /book/_search?size=10&amp;from=20</p><p>GET /book_search?from=0&amp;size=3</p><h3 id="_14-3-2deep-paging" tabindex="-1"><a class="header-anchor" href="#_14-3-2deep-paging" aria-hidden="true">#</a> 14.3.2deep paging</h3><h4 id="什么是deep-paging" tabindex="-1"><a class="header-anchor" href="#什么是deep-paging" aria-hidden="true">#</a> 什么是deep paging</h4><p>根据相关度评分倒排序，所以分页过深，协调节点会将大量数据聚合分析。</p><h4 id="deep-paging-性能问题" tabindex="-1"><a class="header-anchor" href="#deep-paging-性能问题" aria-hidden="true">#</a> deep paging 性能问题</h4><p>1消耗网络带宽，因为所搜过深的话，各 shard 要把数据传递给 coordinate node，这个过程是有大量数据传递的，消耗网络。</p><p>2消耗内存，各 shard 要把数据传送给 coordinate node，这个传递回来的数据，是被 coordinate node 保存在内存中的，这样会大量消耗内存。</p><p>3消耗cup，coordinate node 要把传回来的数据进行排序，这个排序过程很消耗cpu。<br> 所以：鉴于deep paging的性能问题，所有应尽量减少使用。</p><h2 id="_14-4-query-string基础语法" tabindex="-1"><a class="header-anchor" href="#_14-4-query-string基础语法" aria-hidden="true">#</a> 14.4． query string基础语法</h2><h3 id="_14-4-1query-string基础语法" tabindex="-1"><a class="header-anchor" href="#_14-4-1query-string基础语法" aria-hidden="true">#</a> 14.4.1query string基础语法</h3><p>GET /book/_search?q=name:java</p><p>GET /book/_search?q=+name:java</p><p>GET /book/_search?q=-name:java</p><p>一个是掌握q=field:search content的语法，还有一个是掌握+和-的含义</p><h3 id="_14-4-2、-all-metadata的原理和作用" tabindex="-1"><a class="header-anchor" href="#_14-4-2、-all-metadata的原理和作用" aria-hidden="true">#</a> 14.4.2、_all metadata的原理和作用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search?q=java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接可以搜索所有的field，任意一个field包含指定的关键字就可以搜索出来。我们在进行中搜索的时候，难道是对document中的每一个field都进行一次搜索吗？不是的。</p><p>es中_all元数据。建立索引的时候，插入一条docunment，es会将所有的field值经行全量分词，把这些分词，放到_all field中。在搜索的时候，没有指定field，就在_all搜索。</p><p>举例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    name:jack
    email:123@qq.com
    address:beijing
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_all : <a href="mailto:jack,123@qq.com">jack,123@qq.com</a>,beijing</p><h2 id="_14-5-query-dsl入门" tabindex="-1"><a class="header-anchor" href="#_14-5-query-dsl入门" aria-hidden="true">#</a> 14.5． query DSL入门</h2><h3 id="_14-5-1-dsl" tabindex="-1"><a class="header-anchor" href="#_14-5-1-dsl" aria-hidden="true">#</a> 14.5.1 DSL</h3><p>query string 后边的参数原来越多，搜索条件越来越复杂，不能满足需求。</p><p>GET /book/_search?q=name:java&amp;size=10&amp;from=0&amp;sort=price:desc</p><p>DSL:Domain Specified Language，特定领域的语言</p><p>es特有的搜索语言，可在请求体中携带搜索条件，功能强大。</p><p>查询全部 GET /book/_search</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: { &quot;match_all&quot;: {} }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>排序 GET /book/_search?sort=price:desc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search 
{
    &quot;query&quot; : {
        &quot;match&quot; : {
            &quot;name&quot; : &quot; java&quot;
        }
    },
    &quot;sort&quot;: [
        { &quot;price&quot;: &quot;desc&quot; }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分页查询 GET /book/_search?size=10&amp;from=0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET  /book/_search 
{
  &quot;query&quot;: { &quot;match_all&quot;: {} },
  &quot;from&quot;: 0,
  &quot;size&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定返回字段 GET /book/ _search? _source=name,studymodel</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search 
{
  &quot;query&quot;: { &quot;match_all&quot;: {} },
  &quot;_source&quot;: [&quot;name&quot;, &quot;studymodel&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过组合以上各种类型查询，实现复杂查询。</p><h3 id="_14-5-2-query-dsl语法" tabindex="-1"><a class="header-anchor" href="#_14-5-2-query-dsl语法" aria-hidden="true">#</a> 14.5.2． Query DSL语法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    QUERY_NAME: {
        ARGUMENT: VALUE,
        ARGUMENT: VALUE,...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    QUERY_NAME: {
        FIELD_NAME: {
            ARGUMENT: VALUE,
            ARGUMENT: VALUE,...
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_search 
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;test_field&quot;: &quot;test&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-5-3-组合多个搜索条件" tabindex="-1"><a class="header-anchor" href="#_14-5-3-组合多个搜索条件" aria-hidden="true">#</a> 14.5.3 组合多个搜索条件</h3><p>搜索需求：title必须包含elasticsearch，content可以包含elasticsearch也可以不包含，author_id必须不为111</p><p>sql where and or !=</p><p>初始数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /website/_doc/1
{
          &quot;title&quot;: &quot;my hadoop article&quot;,
          &quot;content&quot;: &quot;hadoop is very bad&quot;,
          &quot;author_id&quot;: 111
}

POST /website/_doc/2
{
          &quot;title&quot;: &quot;my elasticsearch  article&quot;,
          &quot;content&quot;: &quot;es is very bad&quot;,
          &quot;author_id&quot;: 112
}
POST /website/_doc/3
{
          &quot;title&quot;: &quot;my elasticsearch article&quot;,
          &quot;content&quot;: &quot;es is very goods&quot;,
          &quot;author_id&quot;: 111
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /website/_doc/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;title&quot;: &quot;elasticsearch&quot;
          }
        }
      ],
      &quot;should&quot;: [
        {
          &quot;match&quot;: {
            &quot;content&quot;: &quot;elasticsearch&quot;
          }
        }
      ],
      &quot;must_not&quot;: [
        {
          &quot;match&quot;: {
            &quot;author_id&quot;: 111
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 488,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 1,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 0.47000363,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;website&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : 0.47000363,
        &quot;_source&quot; : {
          &quot;title&quot; : &quot;my elasticsearch  article&quot;,
          &quot;content&quot; : &quot;es is very bad&quot;,
          &quot;author_id&quot; : 112
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更复杂的搜索需求：</p><p>select * from test_index where name=&#39;tom&#39; or (hired =true and (personality =&#39;good&#39; and rude != true ))</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /test_index/_search
{
    &quot;query&quot;: {
            &quot;bool&quot;: {
                &quot;must&quot;: { &quot;match&quot;:{ &quot;name&quot;: &quot;tom&quot; }},
                &quot;should&quot;: [
                    { &quot;match&quot;:{ &quot;hired&quot;: true }},
                    { &quot;bool&quot;: {
                        &quot;must&quot;:{ &quot;match&quot;: { &quot;personality&quot;: &quot;good&quot; }},
                        &quot;must_not&quot;: { &quot;match&quot;: { &quot;rude&quot;: true }}
                    }}
                ],
                &quot;minimum_should_match&quot;: 1
            }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-6-full-text-search-全文检索" tabindex="-1"><a class="header-anchor" href="#_14-6-full-text-search-全文检索" aria-hidden="true">#</a> 14.6． full-text search 全文检索</h2><h3 id="_14-6-1-全文检索" tabindex="-1"><a class="header-anchor" href="#_14-6-1-全文检索" aria-hidden="true">#</a> 14.6.1 全文检索</h3><p>重新创建book索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 0
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;:{
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;: &quot;ik_max_word&quot;,
        &quot;search_analyzer&quot;: &quot;ik_smart&quot;
      },
      &quot;description&quot;:{
        &quot;type&quot;: &quot;text&quot;,
        &quot;analyzer&quot;: &quot;ik_max_word&quot;,
        &quot;search_analyzer&quot;: &quot;ik_smart&quot;
      },
      &quot;studymodel&quot;:{
        &quot;type&quot;: &quot;keyword&quot;
      },
      &quot;price&quot;:{
        &quot;type&quot;: &quot;double&quot;
      },
      &quot;timestamp&quot;: {
         &quot;type&quot;: &quot;date&quot;,
         &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis&quot;
      },
      &quot;pic&quot;:{
        &quot;type&quot;:&quot;text&quot;,
        &quot;index&quot;:false
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/_doc/1
{
&quot;name&quot;: &quot;Bootstrap开发&quot;,
&quot;description&quot;: &quot;Bootstrap是由Twitter推出的一个前台页面开发css框架，是一个非常流行的开发框架，此框架集成了多种页面效果。此开发框架包含了大量的CSS、JS程序代码，可以帮助开发者（尤其是不擅长css页面开发的程序人员）轻松的实现一个css，不受浏览器限制的精美界面css效果。&quot;,
&quot;studymodel&quot;: &quot;201002&quot;,
&quot;price&quot;:38.6,
&quot;timestamp&quot;:&quot;2019-08-25 19:11:35&quot;,
&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
&quot;tags&quot;: [ &quot;bootstrap&quot;, &quot;dev&quot;]
}

PUT /book/_doc/2
{
&quot;name&quot;: &quot;java编程思想&quot;,
&quot;description&quot;: &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,
&quot;studymodel&quot;: &quot;201001&quot;,
&quot;price&quot;:68.6,
&quot;timestamp&quot;:&quot;2019-08-25 19:11:35&quot;,
&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
&quot;tags&quot;: [ &quot;java&quot;, &quot;dev&quot;]
}

PUT /book/_doc/3
{
&quot;name&quot;: &quot;spring开发基础&quot;,
&quot;description&quot;: &quot;spring 在java领域非常流行，java程序员都在用。&quot;,
&quot;studymodel&quot;: &quot;201001&quot;,
&quot;price&quot;:88.6,
&quot;timestamp&quot;:&quot;2019-08-24 19:11:35&quot;,
&quot;pic&quot;:&quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
&quot;tags&quot;: [ &quot;spring&quot;, &quot;java&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET  /book/_search 
{
    &quot;query&quot; : {
        &quot;match&quot; : {
            &quot;description&quot; : &quot;java程序员&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-6-2-score初探" tabindex="-1"><a class="header-anchor" href="#_14-6-2-score初探" aria-hidden="true">#</a> 14.6.2 _score初探</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 1,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 2,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 2.137549,
    &quot;hits&quot; : [
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;3&quot;,
        &quot;_score&quot; : 2.137549,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;spring开发基础&quot;,
          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 88.6,
          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;spring&quot;,
            &quot;java&quot;
          ]
        }
      },
      {
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : 0.57961315,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;java编程思想&quot;,
          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 68.6,
          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;java&quot;,
            &quot;dev&quot;
          ]
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果分析</p><p>1、建立索引时, description字段 term倒排索引</p><p>java 2,3</p><p>程序员 3</p><p>2、搜索时，直接找description中含有java的文档 2,3，并且3号文档含有两个java字段，一个程序员，所以得分高，排在前面。2号文档含有一个java，排在后面。</p><h2 id="_14-7-dsl-语法练习" tabindex="-1"><a class="header-anchor" href="#_14-7-dsl-语法练习" aria-hidden="true">#</a> 14.7． DSL 语法练习</h2><h3 id="_14-7-1-match-all" tabindex="-1"><a class="header-anchor" href="#_14-7-1-match-all" aria-hidden="true">#</a> 14.7.1 match_all</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: {
        &quot;match_all&quot;: {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-2-match" tabindex="-1"><a class="header-anchor" href="#_14-7-2-match" aria-hidden="true">#</a> 14.7.2 match</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
	&quot;query&quot;: { 
		&quot;match&quot;: { 
			&quot;description&quot;: &quot;java程序员&quot;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-3-multi-match" tabindex="-1"><a class="header-anchor" href="#_14-7-3-multi-match" aria-hidden="true">#</a> 14.7.3 multi_match</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: {
    &quot;multi_match&quot;: {
      &quot;query&quot;: &quot;java程序员&quot;,
      &quot;fields&quot;: [&quot;name&quot;, &quot;description&quot;]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-4、range-query-范围查询" tabindex="-1"><a class="header-anchor" href="#_14-7-4、range-query-范围查询" aria-hidden="true">#</a> 14.7.4、range query 范围查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;price&quot;: {
        &quot;gte&quot;: 80,
		&quot;lte&quot;: 90
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-5、term-query" tabindex="-1"><a class="header-anchor" href="#_14-7-5、term-query" aria-hidden="true">#</a> 14.7.5、term query</h3><p>字段为keyword时，存储和搜索都不分词</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-6、terms-query" tabindex="-1"><a class="header-anchor" href="#_14-7-6、terms-query" aria-hidden="true">#</a> 14.7.6、terms query</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: { &quot;terms&quot;: { &quot;tag&quot;: [ &quot;search&quot;, &quot;full_text&quot;, &quot;nosql&quot; ] }}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-7、exist-query-查询有某些字段值的文档" tabindex="-1"><a class="header-anchor" href="#_14-7-7、exist-query-查询有某些字段值的文档" aria-hidden="true">#</a> 14.7.7、exist query 查询有某些字段值的文档</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_search
{
    &quot;query&quot;: {
        &quot;exists&quot;: {
            &quot;field&quot;: &quot;join_date&quot;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-8、fuzzy-query" tabindex="-1"><a class="header-anchor" href="#_14-7-8、fuzzy-query" aria-hidden="true">#</a> 14.7. 8、Fuzzy query</h3><p>返回包含与搜索词类似的词的文档，该词由Levenshtein编辑距离度量。</p><p>包括以下几种情况：</p><ul><li><p>更改角色（box→fox）</p></li><li><p>删除字符（aple→apple）</p></li><li><p>插入字符（sick→sic）</p></li><li><p>调换两个相邻字符（ACT→CAT）</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: {
        &quot;fuzzy&quot;: {
            &quot;description&quot;: {
                &quot;value&quot;: &quot;jave&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-9、ids" tabindex="-1"><a class="header-anchor" href="#_14-7-9、ids" aria-hidden="true">#</a> 14.7.9、IDs</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: {
        &quot;ids&quot; : {
            &quot;values&quot; : [&quot;1&quot;, &quot;4&quot;, &quot;100&quot;]
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-10、prefix-前缀查询" tabindex="-1"><a class="header-anchor" href="#_14-7-10、prefix-前缀查询" aria-hidden="true">#</a> 14.7.10、prefix 前缀查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: {
        &quot;prefix&quot;: {
            &quot;description&quot;: {
                &quot;value&quot;: &quot;spring&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-7-11、regexp-query-正则查询" tabindex="-1"><a class="header-anchor" href="#_14-7-11、regexp-query-正则查询" aria-hidden="true">#</a> 14.7.11、regexp query 正则查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;query&quot;: {
        &quot;regexp&quot;: {
            &quot;description&quot;: {
                &quot;value&quot;: &quot;j.*a&quot;,
                &quot;flags&quot; : &quot;ALL&quot;,
                &quot;max_determinized_states&quot;: 10000,
                &quot;rewrite&quot;: &quot;constant_score&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-8-filter" tabindex="-1"><a class="header-anchor" href="#_14-8-filter" aria-hidden="true">#</a> 14.8． Filter</h2><h3 id="_14-8-1-filter与query示例" tabindex="-1"><a class="header-anchor" href="#_14-8-1-filter与query示例" aria-hidden="true">#</a> 14.8.1 filter与query示例</h3><p>需求：用户查询description中有&quot;java程序员&quot;，并且价格大于80小于90的数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;description&quot;: &quot;java程序员&quot;
          }
        },
        {
          &quot;range&quot;: {
            &quot;price&quot;: {
              &quot;gte&quot;: 80,
		      &quot;lte&quot;: 90
            }
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用filter:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;description&quot;: &quot;java程序员&quot;
          }
        }
      ],
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;price&quot;: {
            &quot;gte&quot;: 80,
		     &quot;lte&quot;: 90
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-8-2-filter与query对比" tabindex="-1"><a class="header-anchor" href="#_14-8-2-filter与query对比" aria-hidden="true">#</a> 14.8.2 filter与query对比</h3><p>filter，仅仅只是按照搜索条件过滤出需要的数据而已，不计算任何相关度分数，对相关度没有任何影响。</p><p>query，会去计算每个document相对于搜索条件的相关度，并按照相关度进行排序。</p><p>应用场景：</p><p>一般来说，如果你是在进行搜索，需要将最匹配搜索条件的数据先返回，那么用query 如果你只是要根据一些条件筛选出一部分数据，不关注其排序，那么用filter</p><h3 id="_14-8-3-filter与query性能" tabindex="-1"><a class="header-anchor" href="#_14-8-3-filter与query性能" aria-hidden="true">#</a> 14.8.3 filter与query性能</h3><p>filter，不需要计算相关度分数，不需要按照相关度分数进行排序，同时还有内置的自动cache最常使用filter的数据</p><p>query，相反，要计算相关度分数，按照分数进行排序，而且无法cache结果</p><h2 id="_14-9-定位错误语法" tabindex="-1"><a class="header-anchor" href="#_14-9-定位错误语法" aria-hidden="true">#</a> 14.9． 定位错误语法</h2><p>验证错误语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_validate/query?explain
{
  &quot;query&quot;: {
    &quot;mach&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;valid&quot; : false,
  &quot;error&quot; : &quot;org.elasticsearch.common.ParsingException: no [query] registered for [mach]&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_validate/query?explain
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;failed&quot; : 0
  },
  &quot;valid&quot; : true,
  &quot;explanations&quot; : [
    {
      &quot;index&quot; : &quot;book&quot;,
      &quot;valid&quot; : true,
      &quot;explanation&quot; : &quot;description:java description:程序员&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般用在那种特别复杂庞大的搜索下，比如你一下子写了上百行的搜索，这个时候可以先用validate api去验证一下，搜索是否合法。</p><p>合法以后，explain就像mysql的执行计划，可以看到搜索的目标等信息。</p><h2 id="_14-10-定制排序规则" tabindex="-1"><a class="header-anchor" href="#_14-10-定制排序规则" aria-hidden="true">#</a> 14.10． 定制排序规则</h2><h3 id="_14-10-1-默认排序规则" tabindex="-1"><a class="header-anchor" href="#_14-10-1-默认排序规则" aria-hidden="true">#</a> 14.10.1 默认排序规则</h3><p>默认情况下，是按照_score降序排序的</p><p>然而，某些情况下，可能没有有用的_score，比如说filter</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET book/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;description&quot;: &quot;java程序员&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以是constant_score</p><h3 id="_14-10-2-定制排序规则" tabindex="-1"><a class="header-anchor" href="#_14-10-2-定制排序规则" aria-hidden="true">#</a> 14.10.2 定制排序规则</h3><p>相当于sql中order by ?sort=sprice:desc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search 
{
  &quot;query&quot;: {
    &quot;constant_score&quot;: {
      &quot;filter&quot; : {
            &quot;term&quot; : {
                &quot;studymodel&quot; : &quot;201001&quot;
            }
        }
    }
  },
  &quot;sort&quot;: [
    {
      &quot;price&quot;: {
        &quot;order&quot;: &quot;asc&quot;
      }
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-11-text字段排序问题" tabindex="-1"><a class="header-anchor" href="#_14-11-text字段排序问题" aria-hidden="true">#</a> 14.11． Text字段排序问题</h2><p>如果对一个text field进行排序，结果往往不准确，因为分词后是多个单词，再排序就不是我们想要的结果了。</p><p>通常解决方案是，将一个text field建立两次索引，一个分词，用来进行搜索；一个不分词，用来进行排序。</p><p>fielddate:true</p><pre><code>PUT /website 
{
  &quot;mappings&quot;: {
  &quot;properties&quot;: {
    &quot;title&quot;: {
      &quot;type&quot;: &quot;text&quot;,
      &quot;fields&quot;: {
        &quot;keyword&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        }        
      }      
    },
    &quot;content&quot;: {
      &quot;type&quot;: &quot;text&quot;
    },
    &quot;post_date&quot;: {
      &quot;type&quot;: &quot;date&quot;
    },
    &quot;author_id&quot;: {
      &quot;type&quot;: &quot;long&quot;
    }
  }
 }
}
</code></pre><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /website/_doc/1
{
  &quot;title&quot;: &quot;first article&quot;,
  &quot;content&quot;: &quot;this is my second article&quot;,
  &quot;post_date&quot;: &quot;2019-01-01&quot;,
  &quot;author_id&quot;: 110
}

PUT /website/_doc/2
{
    &quot;title&quot;: &quot;second article&quot;,
    &quot;content&quot;: &quot;this is my second article&quot;,
     &quot;post_date&quot;: &quot;2019-01-01&quot;,
    &quot;author_id&quot;: 110
}

PUT /website/_doc/3
{
     &quot;title&quot;: &quot;third article&quot;,
     &quot;content&quot;: &quot;this is my third article&quot;,
     &quot;post_date&quot;: &quot;2019-01-02&quot;,
     &quot;author_id&quot;: 110
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /website/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;sort&quot;: [
    {
      &quot;title.keyword&quot;: {
        &quot;order&quot;: &quot;desc&quot;
      }
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-12-scroll分批查询" tabindex="-1"><a class="header-anchor" href="#_14-12-scroll分批查询" aria-hidden="true">#</a> 14.12． Scroll分批查询</h3><p>场景：下载某一个索引中1亿条数据，到文件或是数据库。</p><p>不能一下全查出来，系统内存溢出。所以使用scoll滚动搜索技术，一批一批查询。</p><p>scoll搜索会在第一次搜索的时候，保存一个当时的视图快照，之后只会基于该旧的视图快照提供数据搜索，如果这个期间数据变更，是不会让用户看到的</p><p>每次发送scroll请求，我们还需要指定一个scoll参数，指定一个时间窗口，每次搜索请求只要在这个时间窗口内能完成就可以了。</p><p>搜索</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search?scroll=1m
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;size&quot;: 3
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_scroll_id&quot; : &quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAMOkWTURBNDUtcjZTVUdKMFp5cXloVElOQQ==&quot;,
  &quot;took&quot; : 3,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 3,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 1.0,
    &quot;hits&quot; : [
     
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获得的结果会有一个scoll_id，下一次再发送scoll请求的时候，必须带上这个scoll_id</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /_search/scroll
{
    &quot;scroll&quot;: &quot;1m&quot;, 
    &quot;scroll_id&quot; : &quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAAMOkWTURBNDUtcjZTVUdKMFp5cXloVElOQQ==&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与分页区别：</p><p>分页给用户看的 deep paging</p><p>scroll是用户系统内部操作，如下载批量数据，数据转移。零停机改变索引映射。</p><h1 id="_15-java-api实现搜索" tabindex="-1"><a class="header-anchor" href="#_15-java-api实现搜索" aria-hidden="true">#</a> 15． java api实现搜索</h1><h1 id="_16-评分机制详解" tabindex="-1"><a class="header-anchor" href="#_16-评分机制详解" aria-hidden="true">#</a> 16． 评分机制详解</h1><h2 id="_16-1-评分机制-tf-idf" tabindex="-1"><a class="header-anchor" href="#_16-1-评分机制-tf-idf" aria-hidden="true">#</a> 16.1． 评分机制 TF\\IDF</h2><h3 id="_16-1-1-算法介绍" tabindex="-1"><a class="header-anchor" href="#_16-1-1-算法介绍" aria-hidden="true">#</a> 16.1.1 算法介绍</h3><p>relevance score算法，简单来说，就是计算出，一个索引中的文本，与搜索文本，他们之间的关联匹配程度。</p><p>Elasticsearch使用的是 term frequency/inverse document frequency算法，简称为TF/IDF算法。TF词频(Term Frequency)，IDF逆向文件频率(Inverse Document Frequency)</p><p><strong>Term frequency</strong>：搜索文本中的各个词条在field文本中出现了多少次，出现次数越多，就越相关。</p><figure><img src="`+O+'" alt="1571494142950" tabindex="0" loading="lazy"><figcaption>1571494142950</figcaption></figure><p>举例：搜索请求：hello world</p><p>doc1 : hello you and me,and world is very good.</p><p>doc2 : hello,how are you</p><p><strong>Inverse document frequency</strong>：搜索文本中的各个词条在整个索引的所有文档中出现了多少次，出现的次数越多，就越不相关.</p><figure><img src="'+D+'" alt="1571494159465" tabindex="0" loading="lazy"><figcaption>1571494159465</figcaption></figure><figure><img src="'+U+`" alt="1571494176760" tabindex="0" loading="lazy"><figcaption>1571494176760</figcaption></figure><p>举例：搜索请求：hello world</p><p>doc1 : hello ,today is very good</p><p>doc2 : hi world ,how are you</p><p>整个index中1亿条数据。hello的document 1000个，有world的document 有100个。</p><p>doc2 更相关</p><p><strong>Field-length norm</strong>：field长度，field越长，相关度越弱</p><p>举例：搜索请求：hello world</p><p><code>doc1 : {&quot;title&quot;:&quot;hello article&quot;,&quot;content &quot;:&quot;balabalabal 1万个&quot;}</code></p><p><code>doc2 : {&quot;title&quot;:&quot;my article&quot;,&quot;content &quot;:&quot;balabalabal 1万个,world&quot;}</code></p><h3 id="_16-1-2-score是如何被计算出来的" tabindex="-1"><a class="header-anchor" href="#_16-1-2-score是如何被计算出来的" aria-hidden="true">#</a> 16.1.2 _score是如何被计算出来的</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search?explain=true
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 5,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 2,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : 2.137549,
    &quot;hits&quot; : [
      {
        &quot;_shard&quot; : &quot;[book][0]&quot;,
        &quot;_node&quot; : &quot;MDA45-r6SUGJ0ZyqyhTINA&quot;,
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;3&quot;,
        &quot;_score&quot; : 2.137549,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;spring开发基础&quot;,
          &quot;description&quot; : &quot;spring 在java领域非常流行，java程序员都在用。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 88.6,
          &quot;timestamp&quot; : &quot;2019-08-24 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;spring&quot;,
            &quot;java&quot;
          ]
        },
        &quot;_explanation&quot; : {
          &quot;value&quot; : 2.137549,
          &quot;description&quot; : &quot;sum of:&quot;,
          &quot;details&quot; : [
            {
              &quot;value&quot; : 0.7936629,
              &quot;description&quot; : &quot;weight(description:java in 0) [PerFieldSimilarity], result of:&quot;,
              &quot;details&quot; : [
                {
                  &quot;value&quot; : 0.7936629,
                  &quot;description&quot; : &quot;score(freq=2.0), product of:&quot;,
                  &quot;details&quot; : [
                    {
                      &quot;value&quot; : 2.2,
                      &quot;description&quot; : &quot;boost&quot;,
                      &quot;details&quot; : [ ]
                    },
                    {
                      &quot;value&quot; : 0.47000363,
                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 2,
                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 3,
                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    },
                    {
                      &quot;value&quot; : 0.7675597,
                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 2.0,
                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 1.2,
                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 0.75,
                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 12.0,
                          &quot;description&quot; : &quot;dl, length of field&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 35.333332,
                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              &quot;value&quot; : 1.3438859,
              &quot;description&quot; : &quot;weight(description:程序员 in 0) [PerFieldSimilarity], result of:&quot;,
              &quot;details&quot; : [
                {
                  &quot;value&quot; : 1.3438859,
                  &quot;description&quot; : &quot;score(freq=1.0), product of:&quot;,
                  &quot;details&quot; : [
                    {
                      &quot;value&quot; : 2.2,
                      &quot;description&quot; : &quot;boost&quot;,
                      &quot;details&quot; : [ ]
                    },
                    {
                      &quot;value&quot; : 0.98082924,
                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 1,
                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 3,
                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    },
                    {
                      &quot;value&quot; : 0.6227967,
                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 1.0,
                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 1.2,
                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 0.75,
                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 12.0,
                          &quot;description&quot; : &quot;dl, length of field&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 35.333332,
                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        &quot;_shard&quot; : &quot;[book][0]&quot;,
        &quot;_node&quot; : &quot;MDA45-r6SUGJ0ZyqyhTINA&quot;,
        &quot;_index&quot; : &quot;book&quot;,
        &quot;_type&quot; : &quot;_doc&quot;,
        &quot;_id&quot; : &quot;2&quot;,
        &quot;_score&quot; : 0.57961315,
        &quot;_source&quot; : {
          &quot;name&quot; : &quot;java编程思想&quot;,
          &quot;description&quot; : &quot;java语言是世界第一编程语言，在软件开发领域使用人数最多。&quot;,
          &quot;studymodel&quot; : &quot;201001&quot;,
          &quot;price&quot; : 68.6,
          &quot;timestamp&quot; : &quot;2019-08-25 19:11:35&quot;,
          &quot;pic&quot; : &quot;group1/M00/00/00/wKhlQFs6RCeAY0pHAAJx5ZjNDEM428.jpg&quot;,
          &quot;tags&quot; : [
            &quot;java&quot;,
            &quot;dev&quot;
          ]
        },
        &quot;_explanation&quot; : {
          &quot;value&quot; : 0.57961315,
          &quot;description&quot; : &quot;sum of:&quot;,
          &quot;details&quot; : [
            {
              &quot;value&quot; : 0.57961315,
              &quot;description&quot; : &quot;weight(description:java in 0) [PerFieldSimilarity], result of:&quot;,
              &quot;details&quot; : [
                {
                  &quot;value&quot; : 0.57961315,
                  &quot;description&quot; : &quot;score(freq=1.0), product of:&quot;,
                  &quot;details&quot; : [
                    {
                      &quot;value&quot; : 2.2,
                      &quot;description&quot; : &quot;boost&quot;,
                      &quot;details&quot; : [ ]
                    },
                    {
                      &quot;value&quot; : 0.47000363,
                      &quot;description&quot; : &quot;idf, computed as log(1 + (N - n + 0.5) / (n + 0.5)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 2,
                          &quot;description&quot; : &quot;n, number of documents containing term&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 3,
                          &quot;description&quot; : &quot;N, total number of documents with field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    },
                    {
                      &quot;value&quot; : 0.56055,
                      &quot;description&quot; : &quot;tf, computed as freq / (freq + k1 * (1 - b + b * dl / avgdl)) from:&quot;,
                      &quot;details&quot; : [
                        {
                          &quot;value&quot; : 1.0,
                          &quot;description&quot; : &quot;freq, occurrences of term within document&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 1.2,
                          &quot;description&quot; : &quot;k1, term saturation parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 0.75,
                          &quot;description&quot; : &quot;b, length normalization parameter&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 19.0,
                          &quot;description&quot; : &quot;dl, length of field&quot;,
                          &quot;details&quot; : [ ]
                        },
                        {
                          &quot;value&quot; : 35.333332,
                          &quot;description&quot; : &quot;avgdl, average length of field&quot;,
                          &quot;details&quot; : [ ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-1-3-分析一个document是如何被匹配上的" tabindex="-1"><a class="header-anchor" href="#_16-1-3-分析一个document是如何被匹配上的" aria-hidden="true">#</a> 16.1.3 分析一个document是如何被匹配上的</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_explain/3
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-2-doc-value" tabindex="-1"><a class="header-anchor" href="#_16-2-doc-value" aria-hidden="true">#</a> 16.2． Doc value</h2><p>搜索的时候，要依靠倒排索引；排序的时候，需要依靠正排索引，看到每个document的每个field，然后进行排序，所谓的正排索引，其实就是doc values</p><p>在建立索引的时候，一方面会建立倒排索引，以供搜索用；一方面会建立正排索引，也就是doc values，以供排序，聚合，过滤等操作使用</p><p>doc values是被保存在磁盘上的，此时如果内存足够，os会自动将其缓存在内存中，性能还是会很高；如果内存不足够，os会将其写入磁盘上</p><p><strong>倒排索引</strong></p><p>doc1: hello world you and me</p><p>doc2: hi, world, how are you</p><table><thead><tr><th>term</th><th>doc1</th><th>doc2</th></tr></thead><tbody><tr><td>hello</td><td>*</td><td></td></tr><tr><td>world</td><td>*</td><td>*</td></tr><tr><td>you</td><td>*</td><td>*</td></tr><tr><td>and</td><td>*</td><td></td></tr><tr><td>me</td><td>*</td><td></td></tr><tr><td>hi</td><td></td><td>*</td></tr><tr><td>how</td><td></td><td>*</td></tr><tr><td>are</td><td></td><td>*</td></tr></tbody></table><p>搜索时：</p><p><code>hello you --&gt; hello, you</code></p><p><code>hello --&gt; doc1</code></p><p><code>you --&gt; doc1,doc2</code></p><p><code>doc1: hello world you and me</code></p><p><code>doc2: hi, world, how are you</code></p><p>sort by 出现问题</p><p><strong>正排索引</strong></p><p><code>doc1: { &quot;name&quot;: &quot;jack&quot;, &quot;age&quot;: 27 }</code></p><p><code>doc2: { &quot;name&quot;: &quot;tom&quot;, &quot;age&quot;: 30 }</code></p><table><thead><tr><th>document</th><th>name</th><th>age</th></tr></thead><tbody><tr><td>doc1</td><td>jack</td><td>27</td></tr><tr><td>doc2</td><td>tom</td><td>30</td></tr></tbody></table><h2 id="_16-3-query-phase" tabindex="-1"><a class="header-anchor" href="#_16-3-query-phase" aria-hidden="true">#</a> 16.3． query phase</h2><h3 id="_1、query-phase" tabindex="-1"><a class="header-anchor" href="#_1、query-phase" aria-hidden="true">#</a> 1、query phase</h3><p>（1）搜索请求发送到某一个coordinate node，构构建一个priority queue，长度以paging操作from和size为准，默认为10</p><p>（2）coordinate node将请求转发到所有shard，每个shard本地搜索，并构建一个本地的priority queue</p><p>（3）各个shard将自己的priority queue返回给coordinate node，并构建一个全局的priority queue</p><h3 id="_2、replica-shard如何提升搜索吞吐量" tabindex="-1"><a class="header-anchor" href="#_2、replica-shard如何提升搜索吞吐量" aria-hidden="true">#</a> 2、replica shard如何提升搜索吞吐量</h3><p>一次请求要打到所有shard的一个replica/primary上去，如果每个shard都有多个replica，那么同时并发过来的搜索请求可以同时打到其他的replica上去</p><h2 id="_16-4-fetch-phase" tabindex="-1"><a class="header-anchor" href="#_16-4-fetch-phase" aria-hidden="true">#</a> 16.4． fetch phase</h2><h3 id="_1、fetch-phbase工作流程" tabindex="-1"><a class="header-anchor" href="#_1、fetch-phbase工作流程" aria-hidden="true">#</a> 1、fetch phbase工作流程</h3><p>（1）coordinate node构建完priority queue之后，就发送mget请求去所有shard上获取对应的document</p><p>（2）各个shard将document返回给coordinate node</p><p>（3）coordinate node将合并后的document结果返回给client客户端</p><h3 id="_2、一般搜索-如果不加from和size-就默认搜索前10条-按照-score排序" tabindex="-1"><a class="header-anchor" href="#_2、一般搜索-如果不加from和size-就默认搜索前10条-按照-score排序" aria-hidden="true">#</a> 2、一般搜索，如果不加from和size，就默认搜索前10条，按照_score排序</h3><h2 id="_16-5-搜索参数小总结" tabindex="-1"><a class="header-anchor" href="#_16-5-搜索参数小总结" aria-hidden="true">#</a> 16.5． 搜索参数小总结</h2><h3 id="_1、preference" tabindex="-1"><a class="header-anchor" href="#_1、preference" aria-hidden="true">#</a> 1、preference</h3><p>决定了哪些shard会被用来执行搜索操作</p><p>_primary, _primary_first, _local, _only_node:xyz, _prefer_node:xyz, _shards:2,3</p><p>bouncing results问题，两个document排序，field值相同；不同的shard上，可能排序不同；每次请求轮询打到不同的replica shard上；每次页面上看到的搜索结果的排序都不一样。这就是bouncing result，也就是跳跃的结果。</p><p>搜索的时候，是轮询将搜索请求发送到每一个replica shard（primary shard），但是在不同的shard上，可能document的排序不同</p><p>解决方案就是将preference设置为一个字符串，比如说user_id，让每个user每次搜索的时候，都使用同一个replica shard去执行，就不会看到bouncing results了</p><h3 id="_2、timeout" tabindex="-1"><a class="header-anchor" href="#_2、timeout" aria-hidden="true">#</a> 2、timeout</h3><p>已经讲解过原理了，主要就是限定在一定时间内，将部分获取到的数据直接返回，避免查询耗时过长</p><h3 id="_3、routing" tabindex="-1"><a class="header-anchor" href="#_3、routing" aria-hidden="true">#</a> 3、routing</h3><p>document文档路由，_id路由，routing=user_id，这样的话可以让同一个user对应的数据到一个shard上去</p><h3 id="_4、search-type" tabindex="-1"><a class="header-anchor" href="#_4、search-type" aria-hidden="true">#</a> 4、search_type</h3><p>default：query_then_fetch</p><p>dfs_query_then_fetch，可以提升revelance sort精准度</p><h1 id="_17-聚合入门" tabindex="-1"><a class="header-anchor" href="#_17-聚合入门" aria-hidden="true">#</a> 17． 聚合入门</h1><h2 id="_17-1聚合示例" tabindex="-1"><a class="header-anchor" href="#_17-1聚合示例" aria-hidden="true">#</a> 17.1聚合示例</h2><h3 id="_17-1-1需求-计算每个studymodel下的商品数量" tabindex="-1"><a class="header-anchor" href="#_17-1-1需求-计算每个studymodel下的商品数量" aria-hidden="true">#</a> 17.1.1需求：计算每个studymodel下的商品数量</h3><p>sql语句： select studymodel，count(*) from book group by studymodel</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;size&quot;: 0, 
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }, 
  &quot;aggs&quot;: {
    &quot;group_by_model&quot;: {
      &quot;terms&quot;: { &quot;field&quot;: &quot;studymodel&quot; }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-1-2-需求-计算每个tags下的商品数量" tabindex="-1"><a class="header-anchor" href="#_17-1-2-需求-计算每个tags下的商品数量" aria-hidden="true">#</a> 17.1.2 需求：计算每个tags下的商品数量</h3><p>设置字段&quot;fielddata&quot;: true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /book/_mapping/
{
  &quot;properties&quot;: {
    &quot;tags&quot;: {
      &quot;type&quot;: &quot;text&quot;,
      &quot;fielddata&quot;: true
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;size&quot;: 0, 
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }, 
  &quot;aggs&quot;: {
    &quot;group_by_tags&quot;: {
      &quot;terms&quot;: { &quot;field&quot;: &quot;tags&quot; }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-1-3-需求-加上搜索条件-计算每个tags下的商品数量" tabindex="-1"><a class="header-anchor" href="#_17-1-3-需求-加上搜索条件-计算每个tags下的商品数量" aria-hidden="true">#</a> 17.1.3 需求：加上搜索条件，计算每个tags下的商品数量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;size&quot;: 0, 
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;description&quot;: &quot;java程序员&quot;
    }
  }, 
  &quot;aggs&quot;: {
    &quot;group_by_tags&quot;: {
      &quot;terms&quot;: { &quot;field&quot;: &quot;tags&quot; }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-1-4-需求-先分组-再算每组的平均值-计算每个tag下的商品的平均价格" tabindex="-1"><a class="header-anchor" href="#_17-1-4-需求-先分组-再算每组的平均值-计算每个tag下的商品的平均价格" aria-hidden="true">#</a> 17.1.4 需求：先分组，再算每组的平均值，计算每个tag下的商品的平均价格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;size&quot;: 0,
    &quot;aggs&quot; : {
        &quot;group_by_tags&quot; : {
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;tags&quot; 
            },
            &quot;aggs&quot; : {
                &quot;avg_price&quot; : {
                    &quot;avg&quot; : { &quot;field&quot; : &quot;price&quot; }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-1-5-需求-计算每个tag下的商品的平均价格-并且按照平均价格降序排序" tabindex="-1"><a class="header-anchor" href="#_17-1-5-需求-计算每个tag下的商品的平均价格-并且按照平均价格降序排序" aria-hidden="true">#</a> 17.1.5 需求：计算每个tag下的商品的平均价格，并且按照平均价格降序排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
    &quot;size&quot;: 0,
    &quot;aggs&quot; : {
        &quot;group_by_tags&quot; : {
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;tags&quot;,
              &quot;order&quot;: {
                &quot;avg_price&quot;: &quot;desc&quot;
              }
            },
            &quot;aggs&quot; : {
                &quot;avg_price&quot; : {
                    &quot;avg&quot; : { &quot;field&quot; : &quot;price&quot; }
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-1-6-需求-按照指定的价格范围区间进行分组-然后在每组内再按照tag进行分组-最后再计算每组的平均价格" tabindex="-1"><a class="header-anchor" href="#_17-1-6-需求-按照指定的价格范围区间进行分组-然后在每组内再按照tag进行分组-最后再计算每组的平均价格" aria-hidden="true">#</a> 17.1.6 需求：按照指定的价格范围区间进行分组，然后在每组内再按照tag进行分组，最后再计算每组的平均价格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /book/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_price&quot;: {
      &quot;range&quot;: {
        &quot;field&quot;: &quot;price&quot;,
        &quot;ranges&quot;: [
          {
            &quot;from&quot;: 0,
            &quot;to&quot;: 40
          },
          {
            &quot;from&quot;: 40,
            &quot;to&quot;: 60
          },
          {
            &quot;from&quot;: 60,
            &quot;to&quot;: 80
          }
        ]
      },
      &quot;aggs&quot;: {
        &quot;group_by_tags&quot;: {
          &quot;terms&quot;: {
            &quot;field&quot;: &quot;tags&quot;
          },
          &quot;aggs&quot;: {
            &quot;average_price&quot;: {
              &quot;avg&quot;: {
                &quot;field&quot;: &quot;price&quot;
              }
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-2两个核心概念-bucket和metric" tabindex="-1"><a class="header-anchor" href="#_17-2两个核心概念-bucket和metric" aria-hidden="true">#</a> 17.2两个核心概念：bucket和metric</h2><h3 id="_17-2-1-bucket-一个数据分组" tabindex="-1"><a class="header-anchor" href="#_17-2-1-bucket-一个数据分组" aria-hidden="true">#</a> 17.2.1 bucket：一个数据分组</h3><p>city name<br> 北京 张三<br> 北京 李四<br> 天津 王五<br> 天津 赵六</p><p>天津 王麻子</p><p>划分出来两个bucket，一个是北京bucket，一个是天津bucket<br> 北京bucket：包含了2个人，张三，李四<br> 上海bucket：包含了3个人，王五，赵六，王麻子</p><h3 id="_17-2-2metric-对一个数据分组执行的统计" tabindex="-1"><a class="header-anchor" href="#_17-2-2metric-对一个数据分组执行的统计" aria-hidden="true">#</a> 17.2.2metric：对一个数据分组执行的统计</h3><p>metric，就是对一个bucket执行的某种聚合分析的操作，比如说求平均值，求最大值，求最小值</p><p>select count(*)<br> from book<br> group studymodel</p><p>bucket：group by studymodel --&gt; 那些studymodel相同的数据，就会被划分到一个bucket中<br> metric：count(*)，对每个user_id bucket中所有的数据，计算一个数量。还有avg()，sum()，max()，min()</p><h2 id="_17-3-电视案例" tabindex="-1"><a class="header-anchor" href="#_17-3-电视案例" aria-hidden="true">#</a> 17.3 电视案例</h2><p>创建索引及映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /tvs
PUT /tvs/_search
{			
			&quot;properties&quot;: {
				&quot;price&quot;: {
					&quot;type&quot;: &quot;long&quot;
				},
				&quot;color&quot;: {
					&quot;type&quot;: &quot;keyword&quot;
				},
				&quot;brand&quot;: {
					&quot;type&quot;: &quot;keyword&quot;
				},
				&quot;sold_date&quot;: {
					&quot;type&quot;: &quot;date&quot;
				}
			}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /tvs/_bulk
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-10-28&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 3000, &quot;color&quot; : &quot;绿色&quot;, &quot;brand&quot; : &quot;小米&quot;, &quot;sold_date&quot; : &quot;2019-05-18&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1500, &quot;color&quot; : &quot;蓝色&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2019-07-02&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1200, &quot;color&quot; : &quot;绿色&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2019-08-19&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;长虹&quot;, &quot;sold_date&quot; : &quot;2019-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 8000, &quot;color&quot; : &quot;红色&quot;, &quot;brand&quot; : &quot;三星&quot;, &quot;sold_date&quot; : &quot;2020-01-01&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2500, &quot;color&quot; : &quot;蓝色&quot;, &quot;brand&quot; : &quot;小米&quot;, &quot;sold_date&quot; : &quot;2020-02-12&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求1-统计哪种颜色的电视销量最高" tabindex="-1"><a class="header-anchor" href="#需求1-统计哪种颜色的电视销量最高" aria-hidden="true">#</a> 需求1 统计哪种颜色的电视销量最高</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search
{
    &quot;size&quot; : 0,
    &quot;aggs&quot; : { 
        &quot;popular_colors&quot; : { 
            &quot;terms&quot; : { 
              &quot;field&quot; : &quot;color&quot;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询条件解析</p><p>size：只获取聚合结果，而不要执行聚合的原始数据<br> aggs：固定语法，要对一份数据执行分组聚合操作<br> popular_colors：就是对每个aggs，都要起一个名字，<br> terms：根据字段的值进行分组<br> field：根据指定的字段的值进行分组</p><p>返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 18,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 8,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  },
  &quot;aggregations&quot; : {
    &quot;popular_colors&quot; : {
      &quot;doc_count_error_upper_bound&quot; : 0,
      &quot;sum_other_doc_count&quot; : 0,
      &quot;buckets&quot; : [
        {
          &quot;key&quot; : &quot;红色&quot;,
          &quot;doc_count&quot; : 4
        },
        {
          &quot;key&quot; : &quot;绿色&quot;,
          &quot;doc_count&quot; : 2
        },
        {
          &quot;key&quot; : &quot;蓝色&quot;,
          &quot;doc_count&quot; : 2
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果解析</p><p>hits.hits：我们指定了size是0，所以hits.hits就是空的<br> aggregations：聚合结果<br> popular_color：我们指定的某个聚合的名称<br> buckets：根据我们指定的field划分出的buckets<br> key：每个bucket对应的那个值<br> doc_count：这个bucket分组内，有多少个数据<br> 数量，其实就是这种颜色的销量</p><p>每种颜色对应的bucket中的数据的默认的排序规则：按照doc_count降序排序</p><h3 id="需求2-统计每种颜色电视平均价格" tabindex="-1"><a class="header-anchor" href="#需求2-统计每种颜色电视平均价格" aria-hidden="true">#</a> 需求2 统计每种颜色电视平均价格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;: {
      &quot;colors&quot;: {
         &quot;terms&quot;: {
            &quot;field&quot;: &quot;color&quot;
         },
         &quot;aggs&quot;: { 
            &quot;avg_price&quot;: { 
               &quot;avg&quot;: {
                  &quot;field&quot;: &quot;price&quot; 
               }
            }
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在一个aggs执行的bucket操作（terms），平级的json结构下，再加一个aggs，这个第二个aggs内部，同样取个名字，执行一个metric操作，avg，对之前的每个bucket中的数据的指定的field，price field，求一个平均值</p><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot; : 4,
  &quot;timed_out&quot; : false,
  &quot;_shards&quot; : {
    &quot;total&quot; : 1,
    &quot;successful&quot; : 1,
    &quot;skipped&quot; : 0,
    &quot;failed&quot; : 0
  },
  &quot;hits&quot; : {
    &quot;total&quot; : {
      &quot;value&quot; : 8,
      &quot;relation&quot; : &quot;eq&quot;
    },
    &quot;max_score&quot; : null,
    &quot;hits&quot; : [ ]
  },
  &quot;aggregations&quot; : {
    &quot;colors&quot; : {
      &quot;doc_count_error_upper_bound&quot; : 0,
      &quot;sum_other_doc_count&quot; : 0,
      &quot;buckets&quot; : [
        {
          &quot;key&quot; : &quot;红色&quot;,
          &quot;doc_count&quot; : 4,
          &quot;avg_price&quot; : {
            &quot;value&quot; : 3250.0
          }
        },
        {
          &quot;key&quot; : &quot;绿色&quot;,
          &quot;doc_count&quot; : 2,
          &quot;avg_price&quot; : {
            &quot;value&quot; : 2100.0
          }
        },
        {
          &quot;key&quot; : &quot;蓝色&quot;,
          &quot;doc_count&quot; : 2,
          &quot;avg_price&quot; : {
            &quot;value&quot; : 2000.0
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>buckets，除了key和doc_count<br> avg_price：我们自己取的metric aggs的名字<br> value：我们的metric计算的结果，每个bucket中的数据的price字段求平均值后的结果</p><p>相当于sql: select avg(price) from tvs group by color</p><h3 id="需求3-继续下钻分析" tabindex="-1"><a class="header-anchor" href="#需求3-继续下钻分析" aria-hidden="true">#</a> 需求3 继续下钻分析</h3><p>每个颜色下，平均价格及每个颜色下，每个品牌的平均价格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_color&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;color&quot;
      },
      &quot;aggs&quot;: {
        &quot;color_avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        },
        &quot;group_by_brand&quot;: {
          &quot;terms&quot;: {
            &quot;field&quot;: &quot;brand&quot;
          },
          &quot;aggs&quot;: {
            &quot;brand_avg_price&quot;: {
              &quot;avg&quot;: {
                &quot;field&quot;: &quot;price&quot;
              }
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求4-更多的metric" tabindex="-1"><a class="header-anchor" href="#需求4-更多的metric" aria-hidden="true">#</a> 需求4：更多的metric</h3><p>count：bucket，terms，自动就会有一个doc_count，就相当于是count<br> avg：avg aggs，求平均值<br> max：求一个bucket内，指定field值最大的那个数据<br> min：求一个bucket内，指定field值最小的那个数据<br> sum：求一个bucket内，指定field值的总和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;: {
      &quot;colors&quot;: {
         &quot;terms&quot;: {
            &quot;field&quot;: &quot;color&quot;
         },
         &quot;aggs&quot;: {
            &quot;avg_price&quot;: { &quot;avg&quot;: { &quot;field&quot;: &quot;price&quot; } },
            &quot;min_price&quot; : { &quot;min&quot;: { &quot;field&quot;: &quot;price&quot;} }, 
            &quot;max_price&quot; : { &quot;max&quot;: { &quot;field&quot;: &quot;price&quot;} },
            &quot;sum_price&quot; : { &quot;sum&quot;: { &quot;field&quot;: &quot;price&quot; } } 
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求5-划分范围-histogram" tabindex="-1"><a class="header-anchor" href="#需求5-划分范围-histogram" aria-hidden="true">#</a> 需求5：划分范围 histogram</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;:{
      &quot;price&quot;:{
         &quot;histogram&quot;:{ 
            &quot;field&quot;: &quot;price&quot;,
            &quot;interval&quot;: 2000
         },
         &quot;aggs&quot;:{
            &quot;income&quot;: {
               &quot;sum&quot;: { 
                 &quot;field&quot; : &quot;price&quot;
               }
             }
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>histogram：类似于terms，也是进行bucket分组操作，接收一个field，按照这个field的值的各个范围区间，进行bucket分组操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;histogram&quot;:{ 
  &quot;field&quot;: &quot;price&quot;,
  &quot;interval&quot;: 2000
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>interval：2000，划分范围，0<sub>2000，2000</sub>4000，4000<sub>6000，6000</sub>8000，8000~10000，buckets</p><p>bucket有了之后，一样的，去对每个bucket执行avg，count，sum，max，min，等各种metric操作，聚合分析</p><h3 id="需求6-按照日期分组聚合" tabindex="-1"><a class="header-anchor" href="#需求6-按照日期分组聚合" aria-hidden="true">#</a> 需求6：按照日期分组聚合</h3><p>date_histogram，按照我们指定的某个date类型的日期field，以及日期interval，按照一定的日期间隔，去划分bucket</p><p>min_doc_count：即使某个日期interval，2017-01-01~2017-01-31中，一条数据都没有，那么这个区间也是要返回的，不然默认是会过滤掉这个区间的<br> extended_bounds，min，max：划分bucket的时候，会限定在这个起始日期，和截止日期内</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search
{
   &quot;size&quot; : 0,
   &quot;aggs&quot;: {
      &quot;sales&quot;: {
         &quot;date_histogram&quot;: {
            &quot;field&quot;: &quot;sold_date&quot;,
            &quot;interval&quot;: &quot;month&quot;, 
            &quot;format&quot;: &quot;yyyy-MM-dd&quot;,
            &quot;min_doc_count&quot; : 0, 
            &quot;extended_bounds&quot; : { 
                &quot;min&quot; : &quot;2019-01-01&quot;,
                &quot;max&quot; : &quot;2020-12-31&quot;
            }
         }
      }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求7-统计每季度每个品牌的销售额" tabindex="-1"><a class="header-anchor" href="#需求7-统计每季度每个品牌的销售额" aria-hidden="true">#</a> 需求7 统计每季度每个品牌的销售额</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_sold_date&quot;: {
      &quot;date_histogram&quot;: {
        &quot;field&quot;: &quot;sold_date&quot;,
        &quot;interval&quot;: &quot;quarter&quot;,
        &quot;format&quot;: &quot;yyyy-MM-dd&quot;,
        &quot;min_doc_count&quot;: 0,
        &quot;extended_bounds&quot;: {
          &quot;min&quot;: &quot;2019-01-01&quot;,
          &quot;max&quot;: &quot;2020-12-31&quot;
        }
      },
      &quot;aggs&quot;: {
        &quot;group_by_brand&quot;: {
          &quot;terms&quot;: {
            &quot;field&quot;: &quot;brand&quot;
          },
          &quot;aggs&quot;: {
            &quot;sum_price&quot;: {
              &quot;sum&quot;: {
                &quot;field&quot;: &quot;price&quot;
              }
            }
          }
        },
        &quot;total_sum_price&quot;: {
          &quot;sum&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求8-搜索与聚合结合-查询某个品牌按颜色销量" tabindex="-1"><a class="header-anchor" href="#需求8-搜索与聚合结合-查询某个品牌按颜色销量" aria-hidden="true">#</a> 需求8 ：搜索与聚合结合，查询某个品牌按颜色销量</h3><p>搜索与聚合可以结合起来。</p><p>sql select count(*)</p><p>from tvs</p><p>where brand like &quot;%小米%&quot;</p><p>group by color</p><p>es aggregation，scope，任何的聚合，都必须在搜索出来的结果数据中之行，搜索结果，就是聚合分析操作的scope</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;brand&quot;: {
        &quot;value&quot;: &quot;小米&quot;
      }
    }
  },
  &quot;aggs&quot;: {
    &quot;group_by_color&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;color&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求9-global-bucket-单个品牌与所有品牌销量对比" tabindex="-1"><a class="header-anchor" href="#需求9-global-bucket-单个品牌与所有品牌销量对比" aria-hidden="true">#</a> 需求9 global bucket：单个品牌与所有品牌销量对比</h3><p>aggregation，scope，一个聚合操作，必须在query的搜索结果范围内执行</p><p>出来两个结果，一个结果，是基于query搜索结果来聚合的; 一个结果，是对所有数据执行聚合的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0, 
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;brand&quot;: {
        &quot;value&quot;: &quot;小米&quot;
      }
    }
  },
  &quot;aggs&quot;: {
    &quot;single_brand_avg_price&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;price&quot;
      }
    },
    &quot;all&quot;: {
      &quot;global&quot;: {},
      &quot;aggs&quot;: {
        &quot;all_brand_avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求10-过滤-聚合-统计价格大于1200的电视平均价格" tabindex="-1"><a class="header-anchor" href="#需求10-过滤-聚合-统计价格大于1200的电视平均价格" aria-hidden="true">#</a> 需求10：过滤+聚合：统计价格大于1200的电视平均价格</h3><p>搜索+聚合</p><p>过滤+聚合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;query&quot;: {
    &quot;constant_score&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;price&quot;: {
            &quot;gte&quot;: 1200
          }
        }
      }
    }
  },
  &quot;aggs&quot;: {
    &quot;avg_price&quot;: {
      &quot;avg&quot;: {
        &quot;field&quot;: &quot;price&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求11-bucket-filter-统计品牌最近一个月的平均价格" tabindex="-1"><a class="header-anchor" href="#需求11-bucket-filter-统计品牌最近一个月的平均价格" aria-hidden="true">#</a> 需求11 bucket filter：统计品牌最近一个月的平均价格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;brand&quot;: {
        &quot;value&quot;: &quot;小米&quot;
      }
    }
  },
  &quot;aggs&quot;: {
    &quot;recent_150d&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;sold_date&quot;: {
            &quot;gte&quot;: &quot;now-150d&quot;
          }
        }
      },
      &quot;aggs&quot;: {
        &quot;recent_150d_avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    },
    &quot;recent_140d&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;sold_date&quot;: {
            &quot;gte&quot;: &quot;now-140d&quot;
          }
        }
      },
      &quot;aggs&quot;: {
        &quot;recent_140d_avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    },
    &quot;recent_130d&quot;: {
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;sold_date&quot;: {
            &quot;gte&quot;: &quot;now-130d&quot;
          }
        }
      },
      &quot;aggs&quot;: {
        &quot;recent_130d_avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>aggs.filter，针对的是聚合去做的</p><p>如果放query里面的filter，是全局的，会对所有的数据都有影响</p><p>但是，如果，比如说，你要统计，长虹电视，最近1个月的平均值; 最近3个月的平均值; 最近6个月的平均值</p><p>bucket filter：对不同的bucket下的aggs，进行filter</p><h3 id="需求12-排序-按每种颜色的平均销售额降序排序" tabindex="-1"><a class="header-anchor" href="#需求12-排序-按每种颜色的平均销售额降序排序" aria-hidden="true">#</a> 需求12 排序：按每种颜色的平均销售额降序排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search 
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_color&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;color&quot;,
        &quot;order&quot;: {
          &quot;avg_price&quot;: &quot;asc&quot;
        }
      },
      &quot;aggs&quot;: {
        &quot;avg_price&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;price&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于sql子表数据字段可以立刻使用。</p><h3 id="需求13-排序-按每种颜色的每种品牌平均销售额降序排序" tabindex="-1"><a class="header-anchor" href="#需求13-排序-按每种颜色的每种品牌平均销售额降序排序" aria-hidden="true">#</a> 需求13 排序：按每种颜色的每种品牌平均销售额降序排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /tvs/_search  
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_color&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;color&quot;
      },
      &quot;aggs&quot;: {
        &quot;group_by_brand&quot;: {
          &quot;terms&quot;: {
            &quot;field&quot;: &quot;brand&quot;,
            &quot;order&quot;: {
              &quot;avg_price&quot;: &quot;desc&quot;
            }
          },
          &quot;aggs&quot;: {
            &quot;avg_price&quot;: {
              &quot;avg&quot;: {
                &quot;field&quot;: &quot;price&quot;
              }
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_18-java-api实现聚合" tabindex="-1"><a class="header-anchor" href="#_18-java-api实现聚合" aria-hidden="true">#</a> 18． java api实现聚合</h1><p>简单聚合，多种聚合，详见代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>action<span class="token punctuation">.</span>search<span class="token punctuation">.</span></span><span class="token class-name">SearchResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RequestOptions</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestHighLevelClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">QueryBuilders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">Aggregation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">AggregationBuilders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span></span><span class="token class-name">Aggregations</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>histogram<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>terms<span class="token punctuation">.</span></span><span class="token class-name">Terms</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>bucket<span class="token punctuation">.</span>terms<span class="token punctuation">.</span></span><span class="token class-name">TermsAggregationBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>builder<span class="token punctuation">.</span></span><span class="token class-name">SearchSourceBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * creste by itheima.itcast
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAggs</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

    <span class="token comment">//需求一：按照颜色分组，计算每个颜色卖出的个数</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// GET /tvs/_search</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;size&quot;: 0,</span>
        <span class="token comment">//     &quot;query&quot;: {&quot;match_all&quot;: {}},</span>
        <span class="token comment">//     &quot;aggs&quot;: {</span>
        <span class="token comment">//       &quot;group_by_color&quot;: {</span>
        <span class="token comment">//         &quot;terms&quot;: {</span>
        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>

        <span class="token comment">//1 构建请求</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体</span>
        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体放入请求头</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 执行</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 获取结果</span>
      <span class="token comment">//   &quot;aggregations&quot; : {</span>
      <span class="token comment">//       &quot;group_by_color&quot; : {</span>
      <span class="token comment">//           &quot;doc_count_error_upper_bound&quot; : 0,</span>
      <span class="token comment">//           &quot;sum_other_doc_count&quot; : 0,</span>
      <span class="token comment">//            &quot;buckets&quot; : [</span>
      <span class="token comment">//           {</span>
      <span class="token comment">//               &quot;key&quot; : &quot;红色&quot;,</span>
      <span class="token comment">//               &quot;doc_count&quot; : 4</span>
      <span class="token comment">//           },</span>
      <span class="token comment">//           {</span>
      <span class="token comment">//               &quot;key&quot; : &quot;绿色&quot;,</span>
      <span class="token comment">//                   &quot;doc_count&quot; : 2</span>
      <span class="token comment">//           },</span>
      <span class="token comment">//           {</span>
      <span class="token comment">//               &quot;key&quot; : &quot;蓝色&quot;,</span>
      <span class="token comment">//                   &quot;doc_count&quot; : 2</span>
      <span class="token comment">//           }</span>
      <span class="token comment">// ]</span>
      <span class="token comment">//       }</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// #需求二：按照颜色分组，计算每个颜色卖出的个数，每个颜色卖出的平均价格</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndAvg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// GET /tvs/_search</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;size&quot;: 0,</span>
        <span class="token comment">//      &quot;query&quot;: {&quot;match_all&quot;: {}},</span>
        <span class="token comment">//     &quot;aggs&quot;: {</span>
        <span class="token comment">//     &quot;group_by_color&quot;: {</span>
        <span class="token comment">//         &quot;terms&quot;: {</span>
        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         &quot;aggs&quot;: {</span>
        <span class="token comment">//             &quot;avg_price&quot;: {</span>
        <span class="token comment">//                 &quot;avg&quot;: {</span>
        <span class="token comment">//                     &quot;field&quot;: &quot;price&quot;</span>
        <span class="token comment">//                 }</span>
        <span class="token comment">//             }</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>

        <span class="token comment">//1 构建请求</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体</span>
        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//terms聚合下填充一个子聚合</span>
        <span class="token class-name">AvgAggregationBuilder</span> avgAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>avgAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体放入请求头</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 执行</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 获取结果</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;key&quot; : &quot;红色&quot;,</span>
        <span class="token comment">//      &quot;doc_count&quot; : 4,</span>
        <span class="token comment">//      &quot;avg_price&quot; : {</span>
        <span class="token comment">//        &quot;value&quot; : 3250.0</span>
        <span class="token comment">//       }</span>
        <span class="token comment">// }</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Avg</span> avg_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> value <span class="token operator">=</span> avg_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// #需求三：按照颜色分组，计算每个颜色卖出的个数，以及每个颜色卖出的平均值、最大值、最小值、总和。</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// GET /tvs/_search</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;size&quot; : 0,</span>
        <span class="token comment">//     &quot;aggs&quot;: {</span>
        <span class="token comment">//      &quot;group_by_color&quot;: {</span>
        <span class="token comment">//         &quot;terms&quot;: {</span>
        <span class="token comment">//             &quot;field&quot;: &quot;color&quot;</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         &quot;aggs&quot;: {</span>
        <span class="token comment">//             &quot;avg_price&quot;: { &quot;avg&quot;: { &quot;field&quot;: &quot;price&quot; } },</span>
        <span class="token comment">//             &quot;min_price&quot; : { &quot;min&quot;: { &quot;field&quot;: &quot;price&quot;} },</span>
        <span class="token comment">//             &quot;max_price&quot; : { &quot;max&quot;: { &quot;field&quot;: &quot;price&quot;} },</span>
        <span class="token comment">//             &quot;sum_price&quot; : { &quot;sum&quot;: { &quot;field&quot;: &quot;price&quot; } }</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>

        <span class="token comment">//1 构建请求</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体</span>
        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">TermsAggregationBuilder</span> termsAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//termsAggregationBuilder里放入多个子聚合</span>
        <span class="token class-name">AvgAggregationBuilder</span> avgAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MinAggregationBuilder</span> minAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string">&quot;min_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MaxAggregationBuilder</span> maxAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string">&quot;max_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;sum_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>avgAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>minAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>maxAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        termsAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>


        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>termsAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体放入请求头</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 执行</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 获取结果</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;key&quot; : &quot;红色&quot;,</span>
        <span class="token comment">//     &quot;doc_count&quot; : 4,</span>
        <span class="token comment">//     &quot;max_price&quot; : {</span>
        <span class="token comment">//          &quot;value&quot; : 8000.0</span>
        <span class="token comment">//     },</span>
        <span class="token comment">//     &quot;min_price&quot; : {</span>
        <span class="token comment">//          &quot;value&quot; : 1000.0</span>
        <span class="token comment">// },</span>
        <span class="token comment">//     &quot;avg_price&quot; : {</span>
        <span class="token comment">//         &quot;value&quot; : 3250.0</span>
        <span class="token comment">// },</span>
        <span class="token comment">//     &quot;sum_price&quot; : {</span>
        <span class="token comment">//         &quot;value&quot; : 13000.0</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Terms</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;group_by_color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;key:&quot;</span><span class="token operator">+</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Max</span> max_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;max_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> maxPriceValue <span class="token operator">=</span> max_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;maxPriceValue:&quot;</span><span class="token operator">+</span>maxPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Min</span> min_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;min_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> minPriceValue <span class="token operator">=</span> min_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;minPriceValue:&quot;</span><span class="token operator">+</span>minPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Avg</span> avg_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;avg_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> avgPriceValue <span class="token operator">=</span> avg_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;avgPriceValue:&quot;</span><span class="token operator">+</span>avgPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Sum</span> sum_price <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;sum_price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> sumPriceValue <span class="token operator">=</span> sum_price<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sumPriceValue:&quot;</span><span class="token operator">+</span>sumPriceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// #需求四：按照售价每2000价格划分范围，算出每个区间的销售总额 histogram</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndHistogram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// GET /tvs/_search</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;size&quot; : 0,</span>
        <span class="token comment">//     &quot;aggs&quot;:{</span>
        <span class="token comment">//      &quot;by_histogram&quot;:{</span>
        <span class="token comment">//         &quot;histogram&quot;:{</span>
        <span class="token comment">//             &quot;field&quot;: &quot;price&quot;,</span>
        <span class="token comment">//             &quot;interval&quot;: 2000</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         &quot;aggs&quot;:{</span>
        <span class="token comment">//             &quot;income&quot;: {</span>
        <span class="token comment">//                 &quot;sum&quot;: {</span>
        <span class="token comment">//                     &quot;field&quot; : &quot;price&quot;</span>
        <span class="token comment">//                 }</span>
        <span class="token comment">//             }</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>

        <span class="token comment">//1 构建请求</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体</span>
        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">HistogramAggregationBuilder</span> histogramAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">histogram</span><span class="token punctuation">(</span><span class="token string">&quot;by_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        histogramAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>histogramAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体放入请求头</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 执行</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 获取结果</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;key&quot; : 0.0,</span>
        <span class="token comment">//     &quot;doc_count&quot; : 3,</span>
        <span class="token comment">//      income&quot; : {</span>
        <span class="token comment">//          &quot;value&quot; : 3700.0</span>
        <span class="token comment">//       }</span>
        <span class="token comment">// }</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Histogram</span> group_by_color <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;by_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> group_by_color<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;keyAsString:&quot;</span><span class="token operator">+</span>keyAsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Sum</span> income <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> value <span class="token operator">=</span> income<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// #需求五：计算每个季度的销售总额</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testAggsAndDateHistogram</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// GET /tvs/_search</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;size&quot; : 0,</span>
        <span class="token comment">//     &quot;aggs&quot;: {</span>
        <span class="token comment">//     &quot;sales&quot;: {</span>
        <span class="token comment">//         &quot;date_histogram&quot;: {</span>
        <span class="token comment">//                      &quot;field&quot;: &quot;sold_date&quot;,</span>
        <span class="token comment">//                     &quot;interval&quot;: &quot;quarter&quot;,</span>
        <span class="token comment">//                     &quot;format&quot;: &quot;yyyy-MM-dd&quot;,</span>
        <span class="token comment">//                     &quot;min_doc_count&quot; : 0,</span>
        <span class="token comment">//                     &quot;extended_bounds&quot; : {</span>
        <span class="token comment">//                         &quot;min&quot; : &quot;2019-01-01&quot;,</span>
        <span class="token comment">//                         &quot;max&quot; : &quot;2020-12-31&quot;</span>
        <span class="token comment">//             }</span>
        <span class="token comment">//         },</span>
        <span class="token comment">//         &quot;aggs&quot;: {</span>
        <span class="token comment">//             &quot;income&quot;: {</span>
        <span class="token comment">//                 &quot;sum&quot;: {</span>
        <span class="token comment">//                     &quot;field&quot;: &quot;price&quot;</span>
        <span class="token comment">//                 }</span>
        <span class="token comment">//             }</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
        <span class="token comment">// }</span>

        <span class="token comment">//1 构建请求</span>
        <span class="token class-name">SearchRequest</span> searchRequest<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tvs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//请求体</span>
        <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchAllQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DateHistogramAggregationBuilder</span> dateHistogramAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">dateHistogram</span><span class="token punctuation">(</span><span class="token string">&quot;date_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sold_date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calendarInterval</span><span class="token punctuation">(</span><span class="token class-name">DateHistogramInterval</span><span class="token punctuation">.</span><span class="token constant">QUARTER</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">minDocCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">extendedBounds</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExtendedBounds</span><span class="token punctuation">(</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2020-12-31&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SumAggregationBuilder</span> sumAggregationBuilder <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dateHistogramAggregationBuilder<span class="token punctuation">.</span><span class="token function">subAggregation</span><span class="token punctuation">(</span>sumAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        searchSourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>dateHistogramAggregationBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//请求体放入请求头</span>
        searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 执行</span>
        <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 获取结果</span>
        <span class="token comment">// {</span>
        <span class="token comment">//     &quot;key_as_string&quot; : &quot;2019-01-01&quot;,</span>
        <span class="token comment">//      &quot;key&quot; : 1546300800000,</span>
        <span class="token comment">//      &quot;doc_count&quot; : 0,</span>
        <span class="token comment">//      &quot;income&quot; : {</span>
        <span class="token comment">//         &quot;value&quot; : 0.0</span>
        <span class="token comment">//      }</span>
        <span class="token comment">// }</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ParsedDateHistogram</span> date_histogram <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;date_histogram&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">&gt;</span></span> buckets <span class="token operator">=</span> date_histogram<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Histogram<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;keyAsString:&quot;</span><span class="token operator">+</span>keyAsString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">long</span> docCount <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;docCount:&quot;</span><span class="token operator">+</span>docCount<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Aggregations</span> aggregations1 <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Sum</span> income <span class="token operator">=</span> aggregations1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;income&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">double</span> value <span class="token operator">=</span> income<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;value:&quot;</span><span class="token operator">+</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;====================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_19-es7-sql新特性" tabindex="-1"><a class="header-anchor" href="#_19-es7-sql新特性" aria-hidden="true">#</a> 19． es7 sql新特性</h1><h2 id="_19-1-快速入门" tabindex="-1"><a class="header-anchor" href="#_19-1-快速入门" aria-hidden="true">#</a> 19.1 快速入门</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_sql?format=txt
{
    &quot;query&quot;: &quot;SELECT * FROM tvs &quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-2启动方式" tabindex="-1"><a class="header-anchor" href="#_19-2启动方式" aria-hidden="true">#</a> 19.2启动方式</h2><p>1http 请求</p><p>2客户端：elasticsearch-sql-cli.bat</p><p>3代码</p><h2 id="_19-3显示方式" tabindex="-1"><a class="header-anchor" href="#_19-3显示方式" aria-hidden="true">#</a> 19.3显示方式</h2><figure><img src="`+C+`" alt="1573212830146" tabindex="0" loading="lazy"><figcaption>1573212830146</figcaption></figure><h2 id="_19-4-sql-翻译" tabindex="-1"><a class="header-anchor" href="#_19-4-sql-翻译" aria-hidden="true">#</a> 19.4 sql 翻译</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_sql/translate
{
    &quot;query&quot;: &quot;SELECT * FROM tvs &quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;size&quot; : 1000,
  &quot;_source&quot; : false,
  &quot;stored_fields&quot; : &quot;_none_&quot;,
  &quot;docvalue_fields&quot; : [
    {
      &quot;field&quot; : &quot;brand&quot;
    },
    {
      &quot;field&quot; : &quot;color&quot;
    },
    {
      &quot;field&quot; : &quot;price&quot;
    },
    {
      &quot;field&quot; : &quot;sold_date&quot;,
      &quot;format&quot; : &quot;epoch_millis&quot;
    }
  ],
  &quot;sort&quot; : [
    {
      &quot;_doc&quot; : {
        &quot;order&quot; : &quot;asc&quot;
      }
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-5-与其他dsl结合" tabindex="-1"><a class="header-anchor" href="#_19-5-与其他dsl结合" aria-hidden="true">#</a> 19.5 与其他DSL结合</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_sql?format=txt
{
    &quot;query&quot;: &quot;SELECT * FROM tvs&quot;,
    &quot;filter&quot;: {
        &quot;range&quot;: {
            &quot;price&quot;: {
                &quot;gte&quot; : 1200,
                &quot;lte&quot; : 2000
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-6-java-代码实现sql功能" tabindex="-1"><a class="header-anchor" href="#_19-6-java-代码实现sql功能" aria-hidden="true">#</a> 19.6 java 代码实现sql功能</h2><p>1前提 es拥有白金版功能</p><p>kibana中管理-》许可管理 开启白金版试用</p><p>2导入依赖</p><pre><code>    &lt;dependency&gt;
        &lt;groupId&gt;org.elasticsearch.plugin&lt;/groupId&gt;
        &lt;artifactId&gt;x-pack-sql-jdbc&lt;/artifactId&gt;
        &lt;version&gt;7.3.0&lt;/version&gt;
    &lt;/dependency&gt;
    
    &lt;repositories&gt;
        &lt;repository&gt;
            &lt;id&gt;elastic.co&lt;/id&gt;
            &lt;url&gt;https://artifacts.elastic.co/maven&lt;/url&gt;
        &lt;/repository&gt;
    &lt;/repositories&gt;
</code></pre><p>3代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void main(String[] args) {
        try  {
            Connection connection = DriverManager.getConnection(&quot;jdbc:es://http://localhost:9200&quot;);
            Statement statement = connection.createStatement();
            ResultSet results = statement.executeQuery(
                    &quot;select * from tvs&quot;);
            while(results.next()){
                System.out.println(results.getString(1));
                System.out.println(results.getString(2));
                System.out.println(results.getString(3));
                System.out.println(results.getString(4));
                System.out.println(&quot;============================&quot;);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大型企业可以购买白金版，增加Machine Learning、高级安全性x-pack。</p><h1 id="_20-logstash学习" tabindex="-1"><a class="header-anchor" href="#_20-logstash学习" aria-hidden="true">#</a> 20． Logstash学习</h1><h2 id="_20-1logstash基本语法组成" tabindex="-1"><a class="header-anchor" href="#_20-1logstash基本语法组成" aria-hidden="true">#</a> 20.1Logstash基本语法组成</h2><figure><img src="`+z+'" alt="1573291947262" tabindex="0" loading="lazy"><figcaption>1573291947262</figcaption></figure><h3 id="_1什么是logstash" tabindex="-1"><a class="header-anchor" href="#_1什么是logstash" aria-hidden="true">#</a> 1什么是Logstash</h3>',407),On={href:"https://www.elastic.co/cn/downloads/logstash",target:"_blank",rel:"noopener noreferrer"},Dn=i(`<p>logstash之所以功能强大和流行，还与其丰富的过滤器插件是分不开的，过滤器提供的并不单单是过滤的功能，还可以对进入过滤器的原始数据进行复杂的逻辑处理，甚至添加独特的事件到后续流程中。<br> Logstash配置文件有如下三部分组成，其中input、output部分是必须配置，filter部分是可选配置，而filter就是过滤器插件，可以在这部分实现各种日志过滤功能。</p><h3 id="_2配置文件" tabindex="-1"><a class="header-anchor" href="#_2配置文件" aria-hidden="true">#</a> 2配置文件：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input {
    #输入插件
}
filter {
    #过滤匹配插件
}
output {
    #输出插件
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3启动操作" tabindex="-1"><a class="header-anchor" href="#_3启动操作" aria-hidden="true">#</a> 3启动操作：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logstash.bat -e &#39;input{stdin{}} output{stdout{}}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了好维护，将配置写入文件，启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logstash.bat -f ../config/test1.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_20-2-logstash输入插件-input" tabindex="-1"><a class="header-anchor" href="#_20-2-logstash输入插件-input" aria-hidden="true">#</a> 20.2 Logstash输入插件（input）</h2>`,8),Un={href:"https://www.elastic.co/guide/en/logstash/current/input-plugins.html",target:"_blank",rel:"noopener noreferrer"},Cn=i(`<h3 id="_1、标准输入-stdin" tabindex="-1"><a class="header-anchor" href="#_1、标准输入-stdin" aria-hidden="true">#</a> 1、标准输入(Stdin)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input{
    stdin{
       
    }
}
output {
    stdout{
        codec=&gt;rubydebug    
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、读取文件-file" tabindex="-1"><a class="header-anchor" href="#_2、读取文件-file" aria-hidden="true">#</a> 2、读取文件(File)</h3><p>logstash使用一个名为filewatch的ruby gem库来监听文件变化,并通过一个叫.sincedb的数据库文件来记录被监听的日志文件的读取进度（时间戳），这个sincedb数据文件的默认路径在 &lt;path.data&gt;/plugins/inputs/file下面，文件名类似于.sincedb_123456，而&lt;path.data&gt;表示logstash插件存储目录，默认是LOGSTASH_HOME/data。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input {
    file {
        path =&gt; [&quot;/var/*/*&quot;]
        start_position =&gt; &quot;beginning&quot;
    }
}
output {
    stdout{
        codec=&gt;rubydebug    
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，logstash会从文件的结束位置开始读取数据，也就是说logstash进程会以类似tail -f命令的形式逐行获取数据。</p><h3 id="_3、读取tcp网络数据" tabindex="-1"><a class="header-anchor" href="#_3、读取tcp网络数据" aria-hidden="true">#</a> 3、读取TCP网络数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input {
  tcp {
    port =&gt; &quot;1234&quot;
  }
}

filter {
  grok {
    match =&gt; { &quot;message&quot; =&gt; &quot;%{SYSLOGLINE}&quot; }
  }
}

output {
    stdout{
        codec=&gt;rubydebug
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-3-logstash过滤器插件-filter" tabindex="-1"><a class="header-anchor" href="#_20-3-logstash过滤器插件-filter" aria-hidden="true">#</a> 20.3 Logstash过滤器插件(Filter)</h2>`,9),zn={href:"https://www.elastic.co/guide/en/logstash/current/filter-plugins.html",target:"_blank",rel:"noopener noreferrer"},Ln=i(`<h3 id="_20-13-1grok-正则捕获" tabindex="-1"><a class="header-anchor" href="#_20-13-1grok-正则捕获" aria-hidden="true">#</a> 20.13.1Grok 正则捕获</h3><p>grok是一个十分强大的logstash filter插件，他可以通过正则解析任意文本，将非结构化日志数据弄成结构化和方便查询的结构。他是目前logstash 中解析非结构化日志数据最好的方式。</p><p>Grok 的语法规则是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{语法: 语义}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如输入的内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>172.16.213.132 [07/Feb/2019:16:24:19 +0800] &quot;GET / HTTP/1.1&quot; 403 5039
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>%{IP:clientip}</code>匹配模式将获得的结果为：clientip: 172.16.213.132<br><code>%{HTTPDATE:timestamp}</code>匹配模式将获得的结果为：timestamp: 07/Feb/2018:16:24:19 +0800<br> 而<code>%{QS:referrer}</code>匹配模式将获得的结果为：referrer: &quot;GET / HTTP/1.1&quot;</p><p>下面是一个组合匹配模式，它可以获取上面输入的所有内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上面这个组合匹配模式，我们将输入的内容分成了五个部分，即五个字段，将输入内容分割为不同的数据字段，这对于日后解析和查询日志数据非常有用，这正是使用grok的目的。</p><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input{
    stdin{}
}
filter{
    grok{
        match =&gt; [&quot;message&quot;,&quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot;]
    }
}
output{
    stdout{
        codec =&gt; &quot;rubydebug&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>172.16.213.132 [07/Feb/2019:16:24:19 +0800] &quot;GET / HTTP/1.1&quot; 403 5039
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_20-13-2时间处理-date" tabindex="-1"><a class="header-anchor" href="#_20-13-2时间处理-date" aria-hidden="true">#</a> 20.13.2时间处理(Date)</h3><p>date插件是对于排序事件和回填旧数据尤其重要，它可以用来转换日志记录中的时间字段，变成LogStash::Timestamp对象，然后转存到@timestamp字段里，这在之前已经做过简单的介绍。<br> 下面是date插件的一个配置示例（这里仅仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    grok {
        match =&gt; [&quot;message&quot;, &quot;%{HTTPDATE:timestamp}&quot;]
    }
    date {
        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-13-3、数据修改-mutate" tabindex="-1"><a class="header-anchor" href="#_20-13-3、数据修改-mutate" aria-hidden="true">#</a> 20.13.3、数据修改(Mutate)</h3><h4 id="_1-正则表达式替换匹配字段" tabindex="-1"><a class="header-anchor" href="#_1-正则表达式替换匹配字段" aria-hidden="true">#</a> （1）正则表达式替换匹配字段</h4><p>gsub可以通过正则表达式替换字段中匹配到的值，只对字符串字段有效，下面是一个关于mutate插件中gsub的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    mutate {
        gsub =&gt; [&quot;filed_name_1&quot;, &quot;/&quot; , &quot;_&quot;]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例表示将filed_name_1字段中所有&quot;/&quot;字符替换为&quot;_&quot;。</p><h4 id="_2-分隔符分割字符串为数组" tabindex="-1"><a class="header-anchor" href="#_2-分隔符分割字符串为数组" aria-hidden="true">#</a> （2）分隔符分割字符串为数组</h4><p>split可以通过指定的分隔符分割字段中的字符串为数组，下面是一个关于mutate插件中split的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    mutate {
        split =&gt; [&quot;filed_name_2&quot;, &quot;|&quot;]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例表示将filed_name_2字段以&quot;|&quot;为区间分隔为数组。</p><h4 id="_3-重命名字段" tabindex="-1"><a class="header-anchor" href="#_3-重命名字段" aria-hidden="true">#</a> （3）重命名字段</h4><p>rename可以实现重命名某个字段的功能，下面是一个关于mutate插件中rename的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    mutate {
        rename =&gt; { &quot;old_field&quot; =&gt; &quot;new_field&quot; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例表示将字段old_field重命名为new_field。</p><h4 id="_4-删除字段" tabindex="-1"><a class="header-anchor" href="#_4-删除字段" aria-hidden="true">#</a> （4）删除字段</h4><p>remove_field可以实现删除某个字段的功能，下面是一个关于mutate插件中remove_field的示例（仅列出filter部分）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    mutate {
        remove_field  =&gt;  [&quot;timestamp&quot;]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例表示将字段timestamp删除。</p><h4 id="_5-geoip-地址查询归类" tabindex="-1"><a class="header-anchor" href="#_5-geoip-地址查询归类" aria-hidden="true">#</a> （5）GeoIP 地址查询归类</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {
    geoip {
        source =&gt; &quot;ip_field&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="综合例子" tabindex="-1"><a class="header-anchor" href="#综合例子" aria-hidden="true">#</a> 综合例子：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input {
    stdin {}
}
filter {
    grok {
        match =&gt; { &quot;message&quot; =&gt; &quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot; }
        remove_field =&gt; [ &quot;message&quot; ]
   }
date {
        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]
    }
mutate {
          convert =&gt; [ &quot;response&quot;,&quot;float&quot; ]
           rename =&gt; { &quot;response&quot; =&gt; &quot;response_new&quot; }   
           gsub =&gt; [&quot;referrer&quot;,&quot;\\&quot;&quot;,&quot;&quot;]          
           split =&gt; [&quot;clientip&quot;, &quot;.&quot;]
        }
}
output {
    stdout {
        codec =&gt; &quot;rubydebug&quot;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-4-logstash输出插件-output" tabindex="-1"><a class="header-anchor" href="#_20-4-logstash输出插件-output" aria-hidden="true">#</a> 20.4 Logstash输出插件（output）</h2>`,39),Gn={href:"https://www.elastic.co/guide/en/logstash/current/output-plugins.html",target:"_blank",rel:"noopener noreferrer"},Hn=i(`<p>output是Logstash的最后阶段，一个事件可以经过多个输出，而一旦所有输出处理完成，整个事件就执行完成。 一些常用的输出包括：</p><ul><li>file： 表示将日志数据写入磁盘上的文件。</li><li>elasticsearch：表示将日志数据发送给Elasticsearch。Elasticsearch可以高效方便和易于查询的保存数据。</li></ul><p>1、输出到标准输出(stdout)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output {
    stdout {
        codec =&gt; rubydebug
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、保存为文件（file）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output {
    file {
        path =&gt; &quot;/data/log/%{+yyyy-MM-dd}/%{host}_%{+HH}.log&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、输出到elasticsearch</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>output {
    elasticsearch {
        host =&gt; [&quot;192.168.1.1:9200&quot;,&quot;172.16.213.77:9200&quot;]
        index =&gt; &quot;logstash-%{+YYYY.MM.dd}&quot;       
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>host：是一个数组类型的值，后面跟的值是elasticsearch节点的地址与端口，默认端口是9200。可添加多个地址。</li><li>index：写入elasticsearch的索引的名称，这里可以使用变量。Logstash提供了%{+YYYY.MM.dd}这种写法。在语法解析的时候，看到以+ 号开头的，就会自动认为后面是时间格式，尝试用时间格式来解析后续字符串。这种以天为单位分割的写法，可以很容易的删除老的数据或者搜索指定时间范围内的数据。此外，注意索引名中不能有大写字母。</li><li>manage_template:用来设置是否开启logstash自动管理模板功能，如果设置为false将关闭自动管理模板功能。如果我们自定义了模板，那么应该设置为false。</li><li>template_name:这个配置项用来设置在Elasticsearch中模板的名称。</li></ul><h2 id="_20-5-综合案例" tabindex="-1"><a class="header-anchor" href="#_20-5-综合案例" aria-hidden="true">#</a> 20.5 综合案例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input {
    file {
        path =&gt; [&quot;D:/ES/logstash-7.3.0/nginx.log&quot;]        
        start_position =&gt; &quot;beginning&quot;
    }
}

filter {
    grok {
        match =&gt; { &quot;message&quot; =&gt; &quot;%{IP:clientip}\\ \\[%{HTTPDATE:timestamp}\\]\\ %{QS:referrer}\\ %{NUMBER:response}\\ %{NUMBER:bytes}&quot; }
        remove_field =&gt; [ &quot;message&quot; ]
   }
	date {
        match =&gt; [&quot;timestamp&quot;, &quot;dd/MMM/yyyy:HH:mm:ss Z&quot;]
    }
	mutate {
           rename =&gt; { &quot;response&quot; =&gt; &quot;response_new&quot; }
           convert =&gt; [ &quot;response&quot;,&quot;float&quot; ]
           gsub =&gt; [&quot;referrer&quot;,&quot;\\&quot;&quot;,&quot;&quot;]
           remove_field =&gt; [&quot;timestamp&quot;]
           split =&gt; [&quot;clientip&quot;, &quot;.&quot;]
        }
}

output {
    stdout {
        codec =&gt; &quot;rubydebug&quot;
    }

elasticsearch {
    host =&gt; [&quot;localhost:9200&quot;]
    index =&gt; &quot;logstash-%{+YYYY.MM.dd}&quot;       
}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_21-kibana学习" tabindex="-1"><a class="header-anchor" href="#_21-kibana学习" aria-hidden="true">#</a> 21． kibana学习</h1><h2 id="_21-1基本查询" tabindex="-1"><a class="header-anchor" href="#_21-1基本查询" aria-hidden="true">#</a> 21.1基本查询</h2><p>1是什么：elk中数据展现工具。</p>`,14),Nn={href:"https://www.elastic.co/cn/downloads/kibana",target:"_blank",rel:"noopener noreferrer"},Fn=i(`<p>3使用：建立索引模式，index partten</p><p>discover 中使用DSL搜索。</p><h2 id="_21-2-可视化" tabindex="-1"><a class="header-anchor" href="#_21-2-可视化" aria-hidden="true">#</a> 21.2 可视化</h2><p>绘制图形</p><h2 id="_21-3-仪表盘" tabindex="-1"><a class="header-anchor" href="#_21-3-仪表盘" aria-hidden="true">#</a> 21.3 仪表盘</h2><p>将各种可视化图形放入，形成大屏幕。</p><h2 id="_21-4-使用模板数据指导绘图" tabindex="-1"><a class="header-anchor" href="#_21-4-使用模板数据指导绘图" aria-hidden="true">#</a> 21.4 使用模板数据指导绘图</h2><p>点击主页的添加模板数据，可以看到很多模板数据以及绘图。</p><h2 id="_21-5-其他功能" tabindex="-1"><a class="header-anchor" href="#_21-5-其他功能" aria-hidden="true">#</a> 21.5 其他功能</h2><p>监控，日志，APM等功能非常丰富。</p><h1 id="_22-集群部署" tabindex="-1"><a class="header-anchor" href="#_22-集群部署" aria-hidden="true">#</a> 22． 集群部署</h1><p>见部署图</p><h3 id="结点的三个角色" tabindex="-1"><a class="header-anchor" href="#结点的三个角色" aria-hidden="true">#</a> 结点的三个角色</h3><p>主结点：master节点主要用于集群的管理及索引 比如新增结点、分片分配、索引的新增和删除等。 数据结点：data 节点上保存了数据分片，它负责索引和搜索操作。 客户端结点：client 节点仅作为请求客户端存在，client的作用也作为负载均衡器，client 节点不存数据，只是将请求均衡转发到其它结点。</p><p>通过下边两项参数来配置结点的功能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node.master: #是否允许为主结点
node.data: #允许存储数据作为数据结点
node.ingest: #是否允许成为协调节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四种组合方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>master=true，data=true：即是主结点又是数据结点
master=false，data=true：仅是数据结点
master=true，data=false：仅是主结点，不存储数据
master=false，data=false：即不是主结点也不是数据结点，此时可设置ingest为true表示它是一个客户端。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_23-项目实战" tabindex="-1"><a class="header-anchor" href="#_23-项目实战" aria-hidden="true">#</a> 23． 项目实战</h1><h2 id="_23-1项目一-elk用于日志分析" tabindex="-1"><a class="header-anchor" href="#_23-1项目一-elk用于日志分析" aria-hidden="true">#</a> 23.1项目一：ELK用于日志分析</h2><p>需求：集中收集分布式服务的日志</p><p>1逻辑模块程序随时输出日志</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>es</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>runner<span class="token punctuation">.</span></span><span class="token class-name">RunWith</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit4<span class="token punctuation">.</span></span><span class="token class-name">SpringRunner</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * creste by itheima.itcast
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span><span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">TestLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Random</span> random <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> userid<span class="token operator">=</span>random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;userId:{},send:{}&quot;</span><span class="token punctuation">,</span>userid<span class="token punctuation">,</span><span class="token string">&quot;hello world.I am &quot;</span><span class="token operator">+</span>userid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2logstash收集日志到es</p><p><strong>grok 内置类型</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>USERNAME [a-zA-Z0-9._-]+
USER %{USERNAME}
INT (?:[+-]?(?:[0-9]+))
BASE10NUM (?&lt;![0-9.+-])(?&gt;[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)))
NUMBER (?:%{BASE10NUM})
BASE16NUM (?&lt;![0-9A-Fa-f])(?:[+-]?(?:0x)?(?:[0-9A-Fa-f]+))
BASE16FLOAT \\b(?&lt;![0-9A-Fa-f.])(?:[+-]?(?:0x)?(?:(?:[0-9A-Fa-f]+(?:\\.[0-9A-Fa-f]*)?)|(?:\\.[0-9A-Fa-f]+)))\\b

POSINT \\b(?:[1-9][0-9]*)\\b
NONNEGINT \\b(?:[0-9]+)\\b
WORD \\b\\w+\\b
NOTSPACE \\S+
SPACE \\s*
DATA .*?
GREEDYDATA .*
QUOTEDSTRING (?&gt;(?&lt;!\\\\)(?&gt;&quot;(?&gt;\\\\.|[^\\\\&quot;]+)+&quot;|&quot;&quot;|(?&gt;&#39;(?&gt;\\\\.|[^\\\\&#39;]+)+&#39;)|&#39;&#39;|(?&gt;\`(?&gt;\\\\.|[^\\\\\`]+)+\`)|\`\`))
UUID [A-Fa-f0-9]{8}-(?:[A-Fa-f0-9]{4}-){3}[A-Fa-f0-9]{12}

# Networking
MAC (?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC})
CISCOMAC (?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4})
WINDOWSMAC (?:(?:[A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2})
COMMONMAC (?:(?:[A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2})
IPV6 ((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?
IPV4 (?&lt;![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])
IP (?:%{IPV6}|%{IPV4})
HOSTNAME \\b(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(\\.?|\\b)
HOST %{HOSTNAME}
IPORHOST (?:%{HOSTNAME}|%{IP})
HOSTPORT %{IPORHOST}:%{POSINT}

# paths
PATH (?:%{UNIXPATH}|%{WINPATH})
UNIXPATH (?&gt;/(?&gt;[\\w_%!$@:.,-]+|\\\\.)*)+
TTY (?:/dev/(pts|tty([pq])?)(\\w+)?/?(?:[0-9]+))
WINPATH (?&gt;[A-Za-z]+:|\\\\)(?:\\\\[^\\\\?*]*)+
URIPROTO [A-Za-z]+(\\+[A-Za-z+]+)?
URIHOST %{IPORHOST}(?::%{POSINT:port})?
# uripath comes loosely from RFC1738, but mostly from what Firefox
# doesn&#39;t turn into %XX
URIPATH (?:/[A-Za-z0-9$.+!*&#39;(){},~:;=@#%_\\-]*)+
#URIPARAM \\?(?:[A-Za-z0-9]+(?:=(?:[^&amp;]*))?(?:&amp;(?:[A-Za-z0-9]+(?:=(?:[^&amp;]*))?)?)*)?
URIPARAM \\?[A-Za-z0-9$.+!*&#39;|(){},~@#%&amp;/=:;_?\\-\\[\\]]*
URIPATHPARAM %{URIPATH}(?:%{URIPARAM})?
URI %{URIPROTO}://(?:%{USER}(?::[^@]*)?@)?(?:%{URIHOST})?(?:%{URIPATHPARAM})?

# Months: January, Feb, 3, 03, 12, December
MONTH \\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\b
MONTHNUM (?:0?[1-9]|1[0-2])
MONTHNUM2 (?:0[1-9]|1[0-2])
MONTHDAY (?:(?:0[1-9])|(?:[12][0-9])|(?:3[01])|[1-9])

# Days: Monday, Tue, Thu, etc...
DAY (?:Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)

# Years?
YEAR (?&gt;\\d\\d){1,2}
HOUR (?:2[0123]|[01]?[0-9])
MINUTE (?:[0-5][0-9])
# &#39;60&#39; is a leap second in most time standards and thus is valid.
SECOND (?:(?:[0-5]?[0-9]|60)(?:[:.,][0-9]+)?)
TIME (?!&lt;[0-9])%{HOUR}:%{MINUTE}(?::%{SECOND})(?![0-9])
# datestamp is YYYY/MM/DD-HH:MM:SS.UUUU (or something like it)
DATE_US %{MONTHNUM}[/-]%{MONTHDAY}[/-]%{YEAR}
DATE_EU %{MONTHDAY}[./-]%{MONTHNUM}[./-]%{YEAR}
ISO8601_TIMEZONE (?:Z|[+-]%{HOUR}(?::?%{MINUTE}))
ISO8601_SECOND (?:%{SECOND}|60)
TIMESTAMP_ISO8601 %{YEAR}-%{MONTHNUM}-%{MONTHDAY}[T ]%{HOUR}:?%{MINUTE}(?::?%{SECOND})?%{ISO8601_TIMEZONE}?
DATE %{DATE_US}|%{DATE_EU}
DATESTAMP %{DATE}[- ]%{TIME}
TZ (?:[PMCE][SD]T|UTC)
DATESTAMP_RFC822 %{DAY} %{MONTH} %{MONTHDAY} %{YEAR} %{TIME} %{TZ}
DATESTAMP_RFC2822 %{DAY}, %{MONTHDAY} %{MONTH} %{YEAR} %{TIME} %{ISO8601_TIMEZONE}
DATESTAMP_OTHER %{DAY} %{MONTH} %{MONTHDAY} %{TIME} %{TZ} %{YEAR}
DATESTAMP_EVENTLOG %{YEAR}%{MONTHNUM2}%{MONTHDAY}%{HOUR}%{MINUTE}%{SECOND}

# Syslog Dates: Month Day HH:MM:SS
SYSLOGTIMESTAMP %{MONTH} +%{MONTHDAY} %{TIME}
PROG (?:[\\w._/%-]+)
SYSLOGPROG %{PROG:program}(?:\\[%{POSINT:pid}\\])?
SYSLOGHOST %{IPORHOST}
SYSLOGFACILITY &lt;%{NONNEGINT:facility}.%{NONNEGINT:priority}&gt;
HTTPDATE %{MONTHDAY}/%{MONTH}/%{YEAR}:%{TIME} %{INT}

# Shortcuts
QS %{QUOTEDSTRING}

# Log formats
SYSLOGBASE %{SYSLOGTIMESTAMP:timestamp} (?:%{SYSLOGFACILITY} )?%{SYSLOGHOST:logsource} %{SYSLOGPROG}:
COMMONAPACHELOG %{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] &quot;(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})&quot; %{NUMBER:response} (?:%{NUMBER:bytes}|-)
COMBINEDAPACHELOG %{COMMONAPACHELOG} %{QS:referrer} %{QS:agent}

# Log Levels
LOGLEVEL ([Aa]lert|ALERT|[Tt]race|TRACE|[Dd]ebug|DEBUG|[Nn]otice|NOTICE|[Ii]nfo|INFO|[Ww]arn?(?:ing)?|WARN?(?:ING)?|[Ee]rr?(?:or)?|ERR?(?:OR)?|[Cc]rit?(?:ical)?|CRIT?(?:ICAL)?|[Ff]atal|FATAL|[Ss]evere|SEVERE|EMERG(?:ENCY)?|[Ee]merg(?:ency)?)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写logstash配置文件。</p><p>3kibana展现数据</p><h2 id="_23-2项目二-学成在线站内搜索模块" tabindex="-1"><a class="header-anchor" href="#_23-2项目二-学成在线站内搜索模块" aria-hidden="true">#</a> 23.2项目二：学成在线站内搜索模块</h2><h3 id="_1mysql导入course-pub表" tabindex="-1"><a class="header-anchor" href="#_1mysql导入course-pub表" aria-hidden="true">#</a> 1mysql导入course_pub表</h3><h3 id="_2创建索引xc-course" tabindex="-1"><a class="header-anchor" href="#_2创建索引xc-course" aria-hidden="true">#</a> 2创建索引xc_course</h3><h3 id="_3创建映射" tabindex="-1"><a class="header-anchor" href="#_3创建映射" aria-hidden="true">#</a> 3创建映射</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PUT /xc_course
{
  &quot;settings&quot;: {
    &quot;number_of_shards&quot;: 1,
    &quot;number_of_replicas&quot;: 0
  },
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;description&quot; : {
                &quot;analyzer&quot; : &quot;ik_max_word&quot;,
                &quot;search_analyzer&quot;: &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;grade&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;id&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;mt&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;name&quot; : {
                &quot;analyzer&quot; : &quot;ik_max_word&quot;,
           &quot;search_analyzer&quot;: &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;users&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;charge&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;valid&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;pic&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;qq&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;price&quot; : {
               &quot;type&quot; : &quot;float&quot;
            },
            &quot;price_old&quot; : {
               &quot;type&quot; : &quot;float&quot;
            },
            &quot;st&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;status&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;studymodel&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;teachmode&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;teachplan&quot; : {
                &quot;analyzer&quot; : &quot;ik_max_word&quot;,
           &quot;search_analyzer&quot;: &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
           &quot;expires&quot; : {
               &quot;type&quot; : &quot;date&quot;,
            &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;
            },
            &quot;pub_time&quot; : {
               &quot;type&quot; : &quot;date&quot;,
             &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;
            },
            &quot;start_time&quot; : {
               &quot;type&quot; : &quot;date&quot;,
           &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;
            },
          &quot;end_time&quot; : {
                 &quot;type&quot; : &quot;date&quot;,
           &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;
            }
    }
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4logstash创建模板文件" tabindex="-1"><a class="header-anchor" href="#_4logstash创建模板文件" aria-hidden="true">#</a> 4logstash创建模板文件</h3><p>Logstash的工作是从MySQL中读取数据，向ES中创建索引，这里需要提前创建mapping的模板文件以便logstash使用。</p><p>在logstach的config目录创建xc_course_template.json，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
   &quot;mappings&quot; : {
      &quot;doc&quot; : {
         &quot;properties&quot; : {
            &quot;charge&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;description&quot; : {
               &quot;analyzer&quot; : &quot;ik_max_word&quot;,
               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;end_time&quot; : {
               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,
               &quot;type&quot; : &quot;date&quot;
            },
            &quot;expires&quot; : {
               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,
               &quot;type&quot; : &quot;date&quot;
            },
            &quot;grade&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;id&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;mt&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;name&quot; : {
               &quot;analyzer&quot; : &quot;ik_max_word&quot;,
               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;pic&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;price&quot; : {
               &quot;type&quot; : &quot;float&quot;
            },
            &quot;price_old&quot; : {
               &quot;type&quot; : &quot;float&quot;
            },
            &quot;pub_time&quot; : {
               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,
               &quot;type&quot; : &quot;date&quot;
            },
            &quot;qq&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;st&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;start_time&quot; : {
               &quot;format&quot; : &quot;yyyy-MM-dd HH:mm:ss&quot;,
               &quot;type&quot; : &quot;date&quot;
            },
            &quot;status&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;studymodel&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;teachmode&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            },
            &quot;teachplan&quot; : {
               &quot;analyzer&quot; : &quot;ik_max_word&quot;,
               &quot;search_analyzer&quot; : &quot;ik_smart&quot;,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;users&quot; : {
               &quot;index&quot; : false,
               &quot;type&quot; : &quot;text&quot;
            },
            &quot;valid&quot; : {
               &quot;type&quot; : &quot;keyword&quot;
            }
         }
      }
   },
   &quot;template&quot; : &quot;xc_course&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5logstash配置mysql-conf" tabindex="-1"><a class="header-anchor" href="#_5logstash配置mysql-conf" aria-hidden="true">#</a> 5logstash配置mysql.conf</h3><p>1、ES采用UTC时区问题</p><p>ES采用UTC 时区，比北京时间早8小时，所以ES读取数据时让最后更新时间加8小时</p><p><code>where timestamp &gt; date_add(:sql_last_value,INTERVAL 8 HOUR)</code></p><p>2、logstash每个执行完成会在/config/logstash_metadata记录执行时间下次以此时间为基准进行增量同步数据到索引库。</p><h3 id="_6启动" tabindex="-1"><a class="header-anchor" href="#_6启动" aria-hidden="true">#</a> 6启动</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\logstash.bat -f ..\\config\\mysql.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7后端代码</p><p>7.1Controller</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/search/course&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EsCourseController</span>  <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">EsCourseService</span> esCourseService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;/list/{page}/{size}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">QueryResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CoursePub</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token class-name">CourseSearchParam</span> courseSearchParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> esCourseService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span>size<span class="token punctuation">,</span>courseSearchParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Service
public class EsCourseService {
    @Value(&quot;\${heima.course.source_field}&quot;)
    private String source_field;

    @Autowired
    RestHighLevelClient restHighLevelClient;

    //课程搜索
    public QueryResponseResult&lt;CoursePub&gt; list(int page, int size, CourseSearchParam courseSearchParam) {
        if (courseSearchParam == null) {
            courseSearchParam = new CourseSearchParam();
        }
        //1创建搜索请求对象
        SearchRequest searchRequest = new SearchRequest(&quot;xc_course&quot;);

        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        //过虑源字段
        String[] source_field_array = source_field.split(&quot;,&quot;);
        searchSourceBuilder.fetchSource(source_field_array, new String[]{});
        //创建布尔查询对象
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        //搜索条件
        //根据关键字搜索
        if (StringUtils.isNotEmpty(courseSearchParam.getKeyword())) {
            MultiMatchQueryBuilder multiMatchQueryBuilder = QueryBuilders.multiMatchQuery(courseSearchParam.getKeyword(), &quot;name&quot;, &quot;description&quot;, &quot;teachplan&quot;)
                    .minimumShouldMatch(&quot;70%&quot;)
                    .field(&quot;name&quot;, 10);
            boolQueryBuilder.must(multiMatchQueryBuilder);
        }
        if (StringUtils.isNotEmpty(courseSearchParam.getMt())) {
            //根据一级分类
            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;mt&quot;, courseSearchParam.getMt()));
        }
        if (StringUtils.isNotEmpty(courseSearchParam.getSt())) {
            //根据二级分类
            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;st&quot;, courseSearchParam.getSt()));
        }
        if (StringUtils.isNotEmpty(courseSearchParam.getGrade())) {
            //根据难度等级
            boolQueryBuilder.filter(QueryBuilders.termQuery(&quot;grade&quot;, courseSearchParam.getGrade()));
        }

        //设置boolQueryBuilder到searchSourceBuilder
        searchSourceBuilder.query(boolQueryBuilder);
        //设置分页参数
        if (page &lt;= 0) {
            page = 1;
        }
        if (size &lt;= 0) {
            size = 12;
        }
        //起始记录下标
        int from = (page - 1) * size;
        searchSourceBuilder.from(from);
        searchSourceBuilder.size(size);

        //设置高亮
        HighlightBuilder highlightBuilder = new HighlightBuilder();
        highlightBuilder.preTags(&quot;&lt;font class=&#39;eslight&#39;&gt;&quot;);
        highlightBuilder.postTags(&quot;&lt;/font&gt;&quot;);
        //设置高亮字段
//        &lt;font class=&#39;eslight&#39;&gt;node&lt;/font&gt;学习
        highlightBuilder.fields().add(new HighlightBuilder.Field(&quot;name&quot;));
        searchSourceBuilder.highlighter(highlightBuilder);

        searchRequest.source(searchSourceBuilder);

        QueryResult&lt;CoursePub&gt; queryResult = new QueryResult();
        List&lt;CoursePub&gt; list = new ArrayList&lt;CoursePub&gt;();
        try {
            //2执行搜索
            SearchResponse searchResponse = restHighLevelClient.search(searchRequest, RequestOptions.DEFAULT);
            //3获取响应结果
            SearchHits hits = searchResponse.getHits();
            long totalHits=hits.getTotalHits().value;
            //匹配的总记录数
//            long totalHits = hits.totalHits;
            queryResult.setTotal(totalHits);
            SearchHit[] searchHits = hits.getHits();
            for (SearchHit hit : searchHits) {
                CoursePub coursePub = new CoursePub();
                //源文档
                Map&lt;String, Object&gt; sourceAsMap = hit.getSourceAsMap();
                //取出id
                String id = (String) sourceAsMap.get(&quot;id&quot;);
                coursePub.setId(id);
                //取出name
                String name = (String) sourceAsMap.get(&quot;name&quot;);
                //取出高亮字段name
                Map&lt;String, HighlightField&gt; highlightFields = hit.getHighlightFields();
                if (highlightFields != null) {
                    HighlightField highlightFieldName = highlightFields.get(&quot;name&quot;);
                    if (highlightFieldName != null) {
                        Text[] fragments = highlightFieldName.fragments();
                        StringBuffer stringBuffer = new StringBuffer();
                        for (Text text : fragments) {
                            stringBuffer.append(text);
                        }
                        name = stringBuffer.toString();
                    }
                }
                coursePub.setName(name);
                //图片
                String pic = (String) sourceAsMap.get(&quot;pic&quot;);
                coursePub.setPic(pic);
                //价格
                Double price = null;
                try {
                    if (sourceAsMap.get(&quot;price&quot;) != null) {
                        price = (Double) sourceAsMap.get(&quot;price&quot;);
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }
                coursePub.setPrice(price);
                //旧价格
                Double price_old = null;
                try {
                    if (sourceAsMap.get(&quot;price_old&quot;) != null) {
                        price_old = (Double) sourceAsMap.get(&quot;price_old&quot;);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                coursePub.setPrice_old(price_old);
                //将coursePub对象放入list
                list.add(coursePub);
            }


        } catch (IOException e) {
            e.printStackTrace();
        }

        queryResult.setList(list);
        QueryResponseResult&lt;CoursePub&gt; queryResponseResult = new QueryResponseResult&lt;CoursePub&gt;(CommonCode.SUCCESS, queryResult);

        return queryResponseResult;
    }


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49);function Qn(Yn,Vn){const e=l("ExternalLinkIcon");return o(),u("div",null,[G,n("p",null,[s("ELK是一个免费开源的日志分析架构技术栈总称，官网"),n("a",H,[s("https://www.elastic.co/cn。包含三大基础组件，分别是Elasticsearch、Logstash、Kibana。但实际上ELK不仅仅适用于日志分析，它还可以支持其它任何数据搜索、分析和收集的场景，日志分析和收集只是更具有代表性。并非唯一性。下面是ELK架构："),a(e)])]),N,n("p",null,[s("倒排索引源于实际应用中需要根据属性的值来查找记录。这种索引表中的每一项都包括一个属性值和具有该属性值的各记录的地址。由于不是由记录来确定属性值，而是由属性值来确定记录的位置，因而称为倒排索引(inverted index)。带有倒排索引的文件我们称为倒排"),n("a",F,[s("索引文件"),a(e)]),s("，简称"),n("a",Q,[s("倒排文件"),a(e)]),s("(inverted file)。")]),Y,n("p",null,[s("官网："),n("a",V,[s("https://www.elastic.co/cn/products/elasticsearch"),a(e)])]),K,n("p",null,[s("Elasticsearch：基于lucene，封装了许多lucene底层功能，提供简单易用的restful api接口和许多语言的客户端，如java的高级客户端（"),n("a",Z,[s("Java High Level REST Client"),a(e)]),s("）和底层客户端（"),n("a",J,[s("Java Low Level REST Client"),a(e)]),s("）")]),W,n("p",null,[n("a",X,[s("https://www.elastic.co/cn/downloads/elasticsearch"),a(e)])]),$,n("h3",nn,[sn,s(" 5、检查ES是否启动成功：浏览器访问"),n("a",en,[s("http://localhost:9200/?Pretty"),a(e)])]),an,n("h3",tn,[ln,s(" 6、浏览器访问 "),n("a",on,[s("http://localhost:9200/_cluster/health"),a(e)]),s(" 查询集群状态")]),un,n("p",null,[s("4、浏览器访问 "),n("a",dn,[s("http://localhost:5601"),a(e)]),s(" 进入Dev Tools界面。像plsql一样支持代码提示。")]),cn,n("p",null,[s("get "),n("a",rn,[s("http://localhost:9200/"),a(e)])]),pn,n("p",null,[s("测试一下get方式查询集群状态"),n("a",vn,[s("http://localhost:9200/_cluster/health"),a(e)])]),mn,qn,n("p",null,[s("head插件是ES的一个可视化管理插件，用来监视ES的状态，并通过head客户端和ES服务进行交互，比如创建映射、创建索引等，head的项目地址在"),n("a",bn,[s("https://github.com/mobz/elasticsearch-head"),a(e)]),s(" 。")]),kn,n("p",null,[s("浏览器打开 "),n("a",gn,[s("http://localhost:9100/"),a(e)])]),hn,n("p",null,[s("本教程使用kibana的dev tool，因为地址栏省略了"),n("a",_n,[s("http://localhost:9200"),a(e)]),s("。")]),xn,n("p",null,[s("官方文档："),n("a",yn,[s("https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting-using.html"),a(e)])]),fn,n("p",null,[s("java api 文档 "),n("a",wn,[s("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.3/java-rest-overview.html"),a(e)])]),En,n("p",null,[n("a",An,[s("https://www.elastic.co/guide/en/elasticsearch/reference/7.4/analysis-analyzers.html"),a(e)])]),Tn,n("p",null,[s("详见："),n("a",Sn,[s("https://www.elastic.co/guide/en/elasticsearch/reference/7.3/mapping-types.html"),a(e)])]),Rn,n("p",null,[s("官网："),n("a",jn,[s("https://github.com/medcl/elasticsearch-analysis-ik"),a(e)])]),n("p",null,[s("下载地址："),n("a",Mn,[s("https://github.com/medcl/elasticsearch-analysis-ik/releases"),a(e)])]),Bn,n("p",null,[n("a",In,[s("https://github.com/medcl/elasticsearch-analysis-ik/releases"),a(e)])]),Pn,n("p",null,[s("logstash是一个数据抽取工具，将数据从一个地方转移到另一个地方。如hadoop生态圈的sqoop等。下载地址："),n("a",On,[s("https://www.elastic.co/cn/downloads/logstash"),a(e)])]),Dn,n("p",null,[n("a",Un,[s("https://www.elastic.co/guide/en/logstash/current/input-plugins.html"),a(e)])]),Cn,n("p",null,[n("a",zn,[s("https://www.elastic.co/guide/en/logstash/current/filter-plugins.html"),a(e)])]),Ln,n("p",null,[n("a",Gn,[s("https://www.elastic.co/guide/en/logstash/current/output-plugins.html"),a(e)])]),Hn,n("p",null,[s("2下载："),n("a",Nn,[s("https://www.elastic.co/cn/downloads/kibana"),a(e)])]),Fn])}const Jn=t(L,[["render",Qn],["__file","笔记.html.vue"]]);export{Jn as default};
