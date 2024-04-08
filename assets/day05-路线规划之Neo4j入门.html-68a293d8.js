const e=JSON.parse('{"key":"v-156f43bc","path":"/project/slwl/notes/day05-%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92%E4%B9%8BNeo4j%E5%85%A5%E9%97%A8.html","title":"day05-路线规划之Neo4j入门","lang":"zh-CN","frontmatter":{"title":"day05-路线规划之Neo4j入门","date":"2023-07-15T15:58:23.000Z","order":5,"category":["项目","神领物流","Neo4j"],"tag":["项目","神领物流","Neo4j"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"课程安排 路线规划需求分析 路线规划实现方案分析 Neo4j的快速入门 学习Cypher入门 学习Spring Data Neo4j 1、背景说明 在实现运费微服务中，介于你出色的表现，现在项目三组承接了一个新的开发任务，需要开发运输路线微服务，这将是一个全新微服务，开发经理决定让你来负责这个微服务的开发。 2、需求分析 首先想个问题，用户小王在神领物流用户端下了个订单，是从上海发往北京的包裹，神领物流接收这个单子后，是如何进行运输的呢？是直接开一辆车去送吗？还是需要中转？需要中转多少次呢？怎么样的中转成本是最低的？","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/project/slwl/notes/day05-%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92%E4%B9%8BNeo4j%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"day05-路线规划之Neo4j入门"}],["meta",{"property":"og:description","content":"课程安排 路线规划需求分析 路线规划实现方案分析 Neo4j的快速入门 学习Cypher入门 学习Spring Data Neo4j 1、背景说明 在实现运费微服务中，介于你出色的表现，现在项目三组承接了一个新的开发任务，需要开发运输路线微服务，这将是一个全新微服务，开发经理决定让你来负责这个微服务的开发。 2、需求分析 首先想个问题，用户小王在神领物流用户端下了个订单，是从上海发往北京的包裹，神领物流接收这个单子后，是如何进行运输的呢？是直接开一辆车去送吗？还是需要中转？需要中转多少次呢？怎么样的中转成本是最低的？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"day05-路线规划之Neo4j入门"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"项目"}],["meta",{"property":"article:tag","content":"神领物流"}],["meta",{"property":"article:tag","content":"Neo4j"}],["meta",{"property":"article:published_time","content":"2023-07-15T15:58:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day05-路线规划之Neo4j入门\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-07-15T15:58:23.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"2.1、路线分析","slug":"_2-1、路线分析","link":"#_2-1、路线分析","children":[]},{"level":2,"title":"2.2、问题分析","slug":"_2-2、问题分析","link":"#_2-2、问题分析","children":[]},{"level":2,"title":"2.3、问题解决","slug":"_2-3、问题解决","link":"#_2-3、问题解决","children":[]},{"level":2,"title":"3.1、什么是Neo4j？","slug":"_3-1、什么是neo4j","link":"#_3-1、什么是neo4j","children":[]},{"level":2,"title":"3.2、版本说明","slug":"_3-2、版本说明","link":"#_3-2、版本说明","children":[]},{"level":2,"title":"3.3、部署安装","slug":"_3-3、部署安装","link":"#_3-3、部署安装","children":[]},{"level":2,"title":"3.4、Neo4j web 工具介绍","slug":"_3-4、neo4j-web-工具介绍","link":"#_3-4、neo4j-web-工具介绍","children":[]},{"level":2,"title":"3.5、体验Neo4j","slug":"_3-5、体验neo4j","link":"#_3-5、体验neo4j","children":[{"level":3,"title":"3.5.1、加载数据","slug":"_3-5-1、加载数据","link":"#_3-5-1、加载数据","children":[]},{"level":3,"title":"3.5.2、查询数据","slug":"_3-5-2、查询数据","link":"#_3-5-2、查询数据","children":[]}]},{"level":2,"title":"3.6、数据结构","slug":"_3-6、数据结构","link":"#_3-6、数据结构","children":[]},{"level":2,"title":"4.1、创建数据","slug":"_4-1、创建数据","link":"#_4-1、创建数据","children":[]},{"level":2,"title":"4.2、查询数据","slug":"_4-2、查询数据","link":"#_4-2、查询数据","children":[{"level":3,"title":"4.2.1、构造数据","slug":"_4-2-1、构造数据","link":"#_4-2-1、构造数据","children":[]},{"level":3,"title":"4.2.2、基本查询","slug":"_4-2-2、基本查询","link":"#_4-2-2、基本查询","children":[]},{"level":3,"title":"4.2.3、关系深度查询","slug":"_4-2-3、关系深度查询","link":"#_4-2-3、关系深度查询","children":[]},{"level":3,"title":"4.2.4、分页查询","slug":"_4-2-4、分页查询","link":"#_4-2-4、分页查询","children":[]}]},{"level":2,"title":"4.3、更新数据","slug":"_4-3、更新数据","link":"#_4-3、更新数据","children":[]},{"level":2,"title":"4.4、删除数据","slug":"_4-4、删除数据","link":"#_4-4、删除数据","children":[]},{"level":2,"title":"4.5、索引","slug":"_4-5、索引","link":"#_4-5、索引","children":[]},{"level":2,"title":"5.1、创建工程","slug":"_5-1、创建工程","link":"#_5-1、创建工程","children":[]},{"level":2,"title":"5.2、编写配置文件","slug":"_5-2、编写配置文件","link":"#_5-2、编写配置文件","children":[]},{"level":2,"title":"5.3、基础代码","slug":"_5-3、基础代码","link":"#_5-3、基础代码","children":[{"level":3,"title":"5.3.1、SDNApplication","slug":"_5-3-1、sdnapplication","link":"#_5-3-1、sdnapplication","children":[]},{"level":3,"title":"5.3.2、Entity","slug":"_5-3-2、entity","link":"#_5-3-2、entity","children":[]},{"level":3,"title":"5.3.3、DTO","slug":"_5-3-3、dto","link":"#_5-3-3、dto","children":[]}]},{"level":2,"title":"5.4、Repository","slug":"_5-4、repository","link":"#_5-4、repository","children":[{"level":3,"title":"5.4.1、AgencyRepository","slug":"_5-4-1、agencyrepository","link":"#_5-4-1、agencyrepository","children":[]},{"level":3,"title":"5.4.2、JPA自定义方法规则","slug":"_5-4-2、jpa自定义方法规则","link":"#_5-4-2、jpa自定义方法规则","children":[]},{"level":3,"title":"5.4.3、OLTRepository","slug":"_5-4-3、oltrepository","link":"#_5-4-3、oltrepository","children":[]},{"level":3,"title":"5.4.4、OrganRepository","slug":"_5-4-4、organrepository","link":"#_5-4-4、organrepository","children":[]},{"level":3,"title":"5.4.5、TLTRepository","slug":"_5-4-5、tltrepository","link":"#_5-4-5、tltrepository","children":[]}]},{"level":2,"title":"5.5、复杂查询","slug":"_5-5、复杂查询","link":"#_5-5、复杂查询","children":[{"level":3,"title":"5.5.1、定义Repository","slug":"_5-5-1、定义repository","link":"#_5-5-1、定义repository","children":[]},{"level":3,"title":"5.5.2、编写实现","slug":"_5-5-2、编写实现","link":"#_5-5-2、编写实现","children":[]},{"level":3,"title":"5.5.3、测试","slug":"_5-5-3、测试","link":"#_5-5-3、测试","children":[]}]},{"level":2,"title":"6.1、练习1","slug":"_6-1、练习1","link":"#_6-1、练习1","children":[]},{"level":2,"title":"6.2、练习2","slug":"_6-2、练习2","link":"#_6-2、练习2","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":27.72,"words":8315},"filePathRelative":"project/slwl/notes/day05-路线规划之Neo4j入门.md","localizedDate":"2023年7月15日","excerpt":"<h1> 课程安排</h1>\\n<ul>\\n<li>路线规划需求分析</li>\\n<li>路线规划实现方案分析</li>\\n<li>Neo4j的快速入门</li>\\n<li>学习Cypher入门</li>\\n<li>学习Spring Data Neo4j</li>\\n</ul>\\n<h1> 1、背景说明</h1>\\n<p>在实现运费微服务中，介于你出色的表现，现在项目三组承接了一个新的开发任务，需要开发运输路线微服务，这将是一个全新微服务，开发经理决定让你来负责这个微服务的开发。<br>\\n</p>\\n<h1> 2、需求分析</h1>\\n<p>首先想个问题，用户小王在神领物流用户端下了个订单，是从上海发往北京的包裹，神领物流接收这个单子后，是如何进行运输的呢？是直接开一辆车去送吗？还是需要中转？需要中转多少次呢？怎么样的中转成本是最低的？<br>\\n</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
