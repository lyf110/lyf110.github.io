const e=JSON.parse('{"key":"v-074bf7ba","path":"/database/mysql/heima2022/op/5%20%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB.html","title":"五、MySQL读写分离","lang":"zh-CN","frontmatter":{"title":"五、MySQL读写分离","date":"2023-04-03T21:29:40.000Z","order":5,"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"category":["MySQL","MyCat","MySQL读写分离"],"tag":["MySQL","MyCat","MySQL读写分离"],"description":"5. 读写分离 4.1 介绍 读写分离,简单地说是把对数据库的读和写操作分开,以对应不同的数据库服务器。主数据库提供写操作，从数据库提供读操作，这样能有效地减轻单台数据库的压力。 通过MyCat即可轻易实现上述功能，不仅可以支持MySQL，也可以支持Oracle和SQL Server。 4.2 一主一从 4.2.1 原理 MySQL的主从复制，是基于二进制日志（binlog）实现的。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/database/mysql/heima2022/op/5%20%E8%AF%BB%E5%86%99%E5%88%86%E7%A6%BB.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"五、MySQL读写分离"}],["meta",{"property":"og:description","content":"5. 读写分离 4.1 介绍 读写分离,简单地说是把对数据库的读和写操作分开,以对应不同的数据库服务器。主数据库提供写操作，从数据库提供读操作，这样能有效地减轻单台数据库的压力。 通过MyCat即可轻易实现上述功能，不仅可以支持MySQL，也可以支持Oracle和SQL Server。 4.2 一主一从 4.2.1 原理 MySQL的主从复制，是基于二进制日志（binlog）实现的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"五、MySQL读写分离"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"MyCat"}],["meta",{"property":"article:tag","content":"MySQL读写分离"}],["meta",{"property":"article:published_time","content":"2023-04-03T21:29:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"五、MySQL读写分离\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-03T21:29:40.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"4.1 介绍","slug":"_4-1-介绍","link":"#_4-1-介绍","children":[]},{"level":2,"title":"4.2 一主一从","slug":"_4-2-一主一从","link":"#_4-2-一主一从","children":[{"level":3,"title":"4.2.1 原理","slug":"_4-2-1-原理","link":"#_4-2-1-原理","children":[]},{"level":3,"title":"4.2.2 准备","slug":"_4-2-2-准备","link":"#_4-2-2-准备","children":[]}]},{"level":2,"title":"4.3 一主一从读写分离","slug":"_4-3-一主一从读写分离","link":"#_4-3-一主一从读写分离","children":[{"level":3,"title":"4.3.1 schema.xml配置","slug":"_4-3-1-schema-xml配置","link":"#_4-3-1-schema-xml配置","children":[]},{"level":3,"title":"4.3.2 server.xml配置","slug":"_4-3-2-server-xml配置","link":"#_4-3-2-server-xml配置","children":[]},{"level":3,"title":"4.3.3 测试","slug":"_4-3-3-测试","link":"#_4-3-3-测试","children":[]}]},{"level":2,"title":"4.4 双主双从","slug":"_4-4-双主双从","link":"#_4-4-双主双从","children":[{"level":3,"title":"4.4.1 介绍","slug":"_4-4-1-介绍","link":"#_4-4-1-介绍","children":[]},{"level":3,"title":"4.4.2 准备","slug":"_4-4-2-准备","link":"#_4-4-2-准备","children":[]},{"level":3,"title":"4.4.3 搭建","slug":"_4-4-3-搭建","link":"#_4-4-3-搭建","children":[]},{"level":3,"title":"4.4.4 测试","slug":"_4-4-4-测试","link":"#_4-4-4-测试","children":[]}]},{"level":2,"title":"4.5 双主双从读写分离","slug":"_4-5-双主双从读写分离","link":"#_4-5-双主双从读写分离","children":[{"level":3,"title":"4.5.1 配置","slug":"_4-5-1-配置","link":"#_4-5-1-配置","children":[]},{"level":3,"title":"4.5.2 测试","slug":"_4-5-2-测试","link":"#_4-5-2-测试","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.08,"words":2424},"filePathRelative":"database/mysql/heima2022/op/5 读写分离.md","localizedDate":"2023年4月4日","excerpt":"<h1> 5. 读写分离</h1>\\n<h2> 4.1 介绍</h2>\\n<p>读写分离,简单地说是把对数据库的读和写操作分开,以对应不同的数据库服务器。主数据库提供写操作，从数据库提供读操作，这样能有效地减轻单台数据库的压力。</p>\\n<p>通过MyCat即可轻易实现上述功能，不仅可以支持MySQL，也可以支持Oracle和SQL Server。</p>\\n<figure><figcaption></figcaption></figure>\\n<h2> 4.2 一主一从</h2>\\n<h3> 4.2.1 原理</h3>\\n<p>MySQL的主从复制，是基于二进制日志（binlog）实现的。</p>\\n<figure><figcaption></figcaption></figure>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
