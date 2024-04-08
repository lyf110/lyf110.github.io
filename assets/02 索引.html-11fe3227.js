const e=JSON.parse('{"key":"v-7c19a69a","path":"/database/mysql/heima2022/plus/02%20%E7%B4%A2%E5%BC%95.html","title":"二、MySQL索引","lang":"zh-CN","frontmatter":{"title":"二、MySQL索引","date":"2023-04-02T10:38:46.000Z","order":2,"category":["数据库","MySQL存储索引","MySQL"],"tag":["数据库","MySQL存储索引","MySQL"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"2. 索引 2.1 索引概述 2.1.1 介绍 索引（index）是帮助MySQL高效获取数据的数据结构(有序)。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据， 这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。 一提到数据结构，大家都会有所担心，担心自己不能理解，跟不上节奏。不过在这里大家完全不用担心，我们后面在讲解时，会详细介绍。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/database/mysql/heima2022/plus/02%20%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"二、MySQL索引"}],["meta",{"property":"og:description","content":"2. 索引 2.1 索引概述 2.1.1 介绍 索引（index）是帮助MySQL高效获取数据的数据结构(有序)。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据， 这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。 一提到数据结构，大家都会有所担心，担心自己不能理解，跟不上节奏。不过在这里大家完全不用担心，我们后面在讲解时，会详细介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二、MySQL索引"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL存储索引"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二、MySQL索引\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"2.1 索引概述","slug":"_2-1-索引概述","link":"#_2-1-索引概述","children":[{"level":3,"title":"2.1.1 介绍","slug":"_2-1-1-介绍","link":"#_2-1-1-介绍","children":[]},{"level":3,"title":"2.1.2 演示","slug":"_2-1-2-演示","link":"#_2-1-2-演示","children":[]},{"level":3,"title":"2.1.3 特点","slug":"_2-1-3-特点","link":"#_2-1-3-特点","children":[]}]},{"level":2,"title":"2.2 索引结构","slug":"_2-2-索引结构","link":"#_2-2-索引结构","children":[{"level":3,"title":"2.2.1 概述","slug":"_2-2-1-概述","link":"#_2-2-1-概述","children":[]},{"level":3,"title":"2.2.2 二叉树","slug":"_2-2-2-二叉树","link":"#_2-2-2-二叉树","children":[]},{"level":3,"title":"2.2.3 B-Tree","slug":"_2-2-3-b-tree","link":"#_2-2-3-b-tree","children":[]},{"level":3,"title":"2.2.4 B+Tree","slug":"_2-2-4-b-tree","link":"#_2-2-4-b-tree","children":[]},{"level":3,"title":"2.2.5 Hash","slug":"_2-2-5-hash","link":"#_2-2-5-hash","children":[]}]},{"level":2,"title":"2.3 索引分类","slug":"_2-3-索引分类","link":"#_2-3-索引分类","children":[{"level":3,"title":"2.3.1 索引分类","slug":"_2-3-1-索引分类","link":"#_2-3-1-索引分类","children":[]},{"level":3,"title":"2.3.2 聚集索引&二级索引","slug":"_2-3-2-聚集索引-二级索引","link":"#_2-3-2-聚集索引-二级索引","children":[]}]},{"level":2,"title":"2.4 索引语法","slug":"_2-4-索引语法","link":"#_2-4-索引语法","children":[{"level":3,"title":"2.4.1 基本语法介绍","slug":"_2-4-1-基本语法介绍","link":"#_2-4-1-基本语法介绍","children":[]},{"level":3,"title":"2.4.2 案例演示:","slug":"_2-4-2-案例演示","link":"#_2-4-2-案例演示","children":[]}]},{"level":2,"title":"2.5 SQL性能分析","slug":"_2-5-sql性能分析","link":"#_2-5-sql性能分析","children":[{"level":3,"title":"2.5.1 SQL执行频率","slug":"_2-5-1-sql执行频率","link":"#_2-5-1-sql执行频率","children":[]},{"level":3,"title":"2.5.2 慢查询日志","slug":"_2-5-2-慢查询日志","link":"#_2-5-2-慢查询日志","children":[]},{"level":3,"title":"2.5.3 测试：","slug":"_2-5-3-测试","link":"#_2-5-3-测试","children":[]},{"level":3,"title":"2.5.4 profile详情","slug":"_2-5-4-profile详情","link":"#_2-5-4-profile详情","children":[]},{"level":3,"title":"2.5.4 explain","slug":"_2-5-4-explain","link":"#_2-5-4-explain","children":[]}]},{"level":2,"title":"2.6 索引使用","slug":"_2-6-索引使用","link":"#_2-6-索引使用","children":[{"level":3,"title":"2.6.1 验证索引效率","slug":"_2-6-1-验证索引效率","link":"#_2-6-1-验证索引效率","children":[]},{"level":3,"title":"2.6.2 最左前缀法则","slug":"_2-6-2-最左前缀法则","link":"#_2-6-2-最左前缀法则","children":[]},{"level":3,"title":"2.6.3 范围查询","slug":"_2-6-3-范围查询","link":"#_2-6-3-范围查询","children":[]},{"level":3,"title":"2.6.4 索引失效情况","slug":"_2-6-4-索引失效情况","link":"#_2-6-4-索引失效情况","children":[]},{"level":3,"title":"2.6.5 SQL提示","slug":"_2-6-5-sql提示","link":"#_2-6-5-sql提示","children":[]},{"level":3,"title":"2.6.6 覆盖索引","slug":"_2-6-6-覆盖索引","link":"#_2-6-6-覆盖索引","children":[]},{"level":3,"title":"2.6.7 前缀索引","slug":"_2-6-7-前缀索引","link":"#_2-6-7-前缀索引","children":[]},{"level":3,"title":"2.6.8 单列索引与联合索引","slug":"_2-6-8-单列索引与联合索引","link":"#_2-6-8-单列索引与联合索引","children":[]},{"level":3,"title":"2.6.9 总结","slug":"_2-6-9-总结","link":"#_2-6-9-总结","children":[]}]},{"level":2,"title":"2.7 索引设计原则","slug":"_2-7-索引设计原则","link":"#_2-7-索引设计原则","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":35.04,"words":10511},"filePathRelative":"database/mysql/heima2022/plus/02 索引.md","localizedDate":"2023年4月2日","excerpt":"<h1> 2. 索引</h1>\\n<h2> 2.1 索引概述</h2>\\n<h3> 2.1.1 介绍</h3>\\n<p>索引（index）是<strong>帮助MySQL高效获取数据的数据结构</strong>(有序)。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据， 这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>一提到数据结构，大家都会有所担心，担心自己不能理解，跟不上节奏。不过在这里大家完全不用担心，我们后面在讲解时，会详细介绍。</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
