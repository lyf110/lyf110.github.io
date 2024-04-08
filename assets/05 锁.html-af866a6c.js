const e=JSON.parse('{"key":"v-a576fb78","path":"/database/mysql/heima2022/plus/05%20%E9%94%81.html","title":"五、MySQL锁","lang":"zh-CN","frontmatter":{"title":"五、MySQL锁","date":"2023-04-02T10:38:46.000Z","order":5,"category":["数据库","MySQL锁","MySQL"],"tag":["数据库","MySQL锁","MySQL"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"5. 锁 5.1 概述 锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除传统的计算资源（CPU、 RAM、I/O）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有 效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个 角度来说，锁对数据库而言显得尤其重要，也更加复杂。 MySQL中的锁，按照锁的粒度分，分为以下三类： 全局锁：锁定数据库中的所有表。 表级锁：每次操作锁住整张表。 行级锁：每次操作锁住对应的行数据。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/database/mysql/heima2022/plus/05%20%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"五、MySQL锁"}],["meta",{"property":"og:description","content":"5. 锁 5.1 概述 锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除传统的计算资源（CPU、 RAM、I/O）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有 效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个 角度来说，锁对数据库而言显得尤其重要，也更加复杂。 MySQL中的锁，按照锁的粒度分，分为以下三类： 全局锁：锁定数据库中的所有表。 表级锁：每次操作锁住整张表。 行级锁：每次操作锁住对应的行数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"五、MySQL锁"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL锁"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"五、MySQL锁\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"5.1 概述","slug":"_5-1-概述","link":"#_5-1-概述","children":[]},{"level":2,"title":"5.2 全局锁","slug":"_5-2-全局锁","link":"#_5-2-全局锁","children":[{"level":3,"title":"5.2.1 介绍","slug":"_5-2-1-介绍","link":"#_5-2-1-介绍","children":[]},{"level":3,"title":"5.2.2 语法","slug":"_5-2-2-语法","link":"#_5-2-2-语法","children":[]},{"level":3,"title":"5.2.3 特点","slug":"_5-2-3-特点","link":"#_5-2-3-特点","children":[]}]},{"level":2,"title":"5.3 表级锁","slug":"_5-3-表级锁","link":"#_5-3-表级锁","children":[{"level":3,"title":"5.3.1 介绍","slug":"_5-3-1-介绍","link":"#_5-3-1-介绍","children":[]},{"level":3,"title":"5.3.2 表锁","slug":"_5-3-2-表锁","link":"#_5-3-2-表锁","children":[]},{"level":3,"title":"5.3.3 元数据锁","slug":"_5-3-3-元数据锁","link":"#_5-3-3-元数据锁","children":[]},{"level":3,"title":"5.3.4 意向锁","slug":"_5-3-4-意向锁","link":"#_5-3-4-意向锁","children":[]}]},{"level":2,"title":"5.4 行级锁","slug":"_5-4-行级锁","link":"#_5-4-行级锁","children":[{"level":3,"title":"5.4.1 介绍","slug":"_5-4-1-介绍","link":"#_5-4-1-介绍","children":[]},{"level":3,"title":"5.4.2 行锁","slug":"_5-4-2-行锁","link":"#_5-4-2-行锁","children":[]},{"level":3,"title":"5.4.3 间隙锁&临键锁","slug":"_5-4-3-间隙锁-临键锁","link":"#_5-4-3-间隙锁-临键锁","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":12.84,"words":3851},"filePathRelative":"database/mysql/heima2022/plus/05 锁.md","localizedDate":"2023年4月2日","excerpt":"<h1> 5. 锁</h1>\\n<h2> 5.1 概述</h2>\\n<p>锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除传统的计算资源（CPU、 RAM、I/O）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有 效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个 角度来说，锁对数据库而言显得尤其重要，也更加复杂。</p>\\n<p>MySQL中的锁，按照锁的粒度分，分为以下三类：</p>\\n<ul>\\n<li>全局锁：锁定数据库中的所有表。</li>\\n<li>表级锁：每次操作锁住整张表。</li>\\n<li>行级锁：每次操作锁住对应的行数据。</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
