const e=JSON.parse('{"key":"v-1bbfed80","path":"/database/redis/heima2022/03.Redis%E9%AB%98%E7%BA%A7%E7%AF%87-%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html","title":"三、Redis-高级篇-分布式缓存","lang":"zh-CN","frontmatter":{"title":"三、Redis-高级篇-分布式缓存","date":"2023-04-02T10:38:46.000Z","order":3,"category":["数据库","Redis","分布式缓存","中间件"],"tag":["数据库","Redis","分布式缓存","中间件"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"分布式缓存 -- 基于Redis集群解决单机Redis存在的问题 单机的Redis存在四大问题： image-20210725144240631 0.学习目标 1.Redis持久化 Redis有两种持久化方案： RDB持久化 AOF持久化 1.1.RDB持久化 RDB全称Redis Database Backup file（Redis数据备份文件），也被叫做Redis数据快照。简单来说就是把内存中的所有数据都记录到磁盘中。当Redis实例故障重启后，从磁盘读取快照文件，恢复数据。快照文件称为RDB文件，默认是保存在当前运行目录。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/database/redis/heima2022/03.Redis%E9%AB%98%E7%BA%A7%E7%AF%87-%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"三、Redis-高级篇-分布式缓存"}],["meta",{"property":"og:description","content":"分布式缓存 -- 基于Redis集群解决单机Redis存在的问题 单机的Redis存在四大问题： image-20210725144240631 0.学习目标 1.Redis持久化 Redis有两种持久化方案： RDB持久化 AOF持久化 1.1.RDB持久化 RDB全称Redis Database Backup file（Redis数据备份文件），也被叫做Redis数据快照。简单来说就是把内存中的所有数据都记录到磁盘中。当Redis实例故障重启后，从磁盘读取快照文件，恢复数据。快照文件称为RDB文件，默认是保存在当前运行目录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"三、Redis-高级篇-分布式缓存"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"分布式缓存"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:published_time","content":"2023-04-02T10:38:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、Redis-高级篇-分布式缓存\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-02T10:38:46.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1.1.RDB持久化","slug":"_1-1-rdb持久化","link":"#_1-1-rdb持久化","children":[{"level":3,"title":"1.1.1.执行时机","slug":"_1-1-1-执行时机","link":"#_1-1-1-执行时机","children":[]},{"level":3,"title":"1.1.2.RDB原理","slug":"_1-1-2-rdb原理","link":"#_1-1-2-rdb原理","children":[]},{"level":3,"title":"1.1.3.小结","slug":"_1-1-3-小结","link":"#_1-1-3-小结","children":[]}]},{"level":2,"title":"1.2.AOF持久化","slug":"_1-2-aof持久化","link":"#_1-2-aof持久化","children":[{"level":3,"title":"1.2.1.AOF原理","slug":"_1-2-1-aof原理","link":"#_1-2-1-aof原理","children":[]},{"level":3,"title":"1.2.2.AOF配置","slug":"_1-2-2-aof配置","link":"#_1-2-2-aof配置","children":[]},{"level":3,"title":"1.2.3.AOF文件重写","slug":"_1-2-3-aof文件重写","link":"#_1-2-3-aof文件重写","children":[]}]},{"level":2,"title":"1.3.RDB与AOF对比","slug":"_1-3-rdb与aof对比","link":"#_1-3-rdb与aof对比","children":[]},{"level":2,"title":"2.1.搭建主从架构","slug":"_2-1-搭建主从架构","link":"#_2-1-搭建主从架构","children":[]},{"level":2,"title":"2.2.主从数据同步原理","slug":"_2-2-主从数据同步原理","link":"#_2-2-主从数据同步原理","children":[{"level":3,"title":"2.2.1.全量同步","slug":"_2-2-1-全量同步","link":"#_2-2-1-全量同步","children":[]},{"level":3,"title":"2.2.2.增量同步","slug":"_2-2-2-增量同步","link":"#_2-2-2-增量同步","children":[]},{"level":3,"title":"2.2.3.repl_backlog原理","slug":"_2-2-3-repl-backlog原理","link":"#_2-2-3-repl-backlog原理","children":[]}]},{"level":2,"title":"2.3.主从同步优化","slug":"_2-3-主从同步优化","link":"#_2-3-主从同步优化","children":[]},{"level":2,"title":"2.4.小结","slug":"_2-4-小结","link":"#_2-4-小结","children":[]},{"level":2,"title":"3.1.哨兵原理","slug":"_3-1-哨兵原理","link":"#_3-1-哨兵原理","children":[{"level":3,"title":"3.1.1.集群结构和作用","slug":"_3-1-1-集群结构和作用","link":"#_3-1-1-集群结构和作用","children":[]},{"level":3,"title":"3.1.2.集群监控原理","slug":"_3-1-2-集群监控原理","link":"#_3-1-2-集群监控原理","children":[]},{"level":3,"title":"3.1.3.集群故障恢复原理","slug":"_3-1-3-集群故障恢复原理","link":"#_3-1-3-集群故障恢复原理","children":[]},{"level":3,"title":"3.1.4.小结","slug":"_3-1-4-小结","link":"#_3-1-4-小结","children":[]}]},{"level":2,"title":"3.2.搭建哨兵集群","slug":"_3-2-搭建哨兵集群","link":"#_3-2-搭建哨兵集群","children":[]},{"level":2,"title":"3.3.RedisTemplate","slug":"_3-3-redistemplate","link":"#_3-3-redistemplate","children":[{"level":3,"title":"3.3.1.导入Demo工程","slug":"_3-3-1-导入demo工程","link":"#_3-3-1-导入demo工程","children":[]},{"level":3,"title":"3.3.2.引入依赖","slug":"_3-3-2-引入依赖","link":"#_3-3-2-引入依赖","children":[]},{"level":3,"title":"3.3.3.配置Redis地址","slug":"_3-3-3-配置redis地址","link":"#_3-3-3-配置redis地址","children":[]},{"level":3,"title":"3.3.4.配置读写分离","slug":"_3-3-4-配置读写分离","link":"#_3-3-4-配置读写分离","children":[]}]},{"level":2,"title":"4.1.搭建分片集群","slug":"_4-1-搭建分片集群","link":"#_4-1-搭建分片集群","children":[]},{"level":2,"title":"4.2.散列插槽","slug":"_4-2-散列插槽","link":"#_4-2-散列插槽","children":[{"level":3,"title":"4.2.1.插槽原理","slug":"_4-2-1-插槽原理","link":"#_4-2-1-插槽原理","children":[]},{"level":3,"title":"4.2.1.小结","slug":"_4-2-1-小结","link":"#_4-2-1-小结","children":[]}]},{"level":2,"title":"4.3.集群伸缩","slug":"_4-3-集群伸缩","link":"#_4-3-集群伸缩","children":[{"level":3,"title":"4.3.1.需求分析","slug":"_4-3-1-需求分析","link":"#_4-3-1-需求分析","children":[]},{"level":3,"title":"4.3.2.创建新的redis实例","slug":"_4-3-2-创建新的redis实例","link":"#_4-3-2-创建新的redis实例","children":[]},{"level":3,"title":"4.3.3.添加新节点到redis","slug":"_4-3-3-添加新节点到redis","link":"#_4-3-3-添加新节点到redis","children":[]},{"level":3,"title":"4.3.4.转移插槽","slug":"_4-3-4-转移插槽","link":"#_4-3-4-转移插槽","children":[]}]},{"level":2,"title":"4.4.故障转移","slug":"_4-4-故障转移","link":"#_4-4-故障转移","children":[{"level":3,"title":"4.4.1.自动故障转移","slug":"_4-4-1-自动故障转移","link":"#_4-4-1-自动故障转移","children":[]},{"level":3,"title":"4.4.2.手动故障转移","slug":"_4-4-2-手动故障转移","link":"#_4-4-2-手动故障转移","children":[]}]},{"level":2,"title":"4.5.RedisTemplate访问分片集群","slug":"_4-5-redistemplate访问分片集群","link":"#_4-5-redistemplate访问分片集群","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":17.43,"words":5228},"filePathRelative":"database/redis/heima2022/03.Redis高级篇-分布式缓存.md","localizedDate":"2023年4月2日","excerpt":"<h1> 分布式缓存</h1>\\n<p>-- 基于Redis集群解决单机Redis存在的问题</p>\\n<p>单机的Redis存在四大问题：</p>\\n<figure><figcaption>image-20210725144240631</figcaption></figure>\\n<h1> 0.学习目标</h1>\\n<h1> 1.Redis持久化</h1>\\n<p>Redis有两种持久化方案：</p>\\n<ul>\\n<li>RDB持久化</li>\\n<li>AOF持久化</li>\\n</ul>\\n<h2> 1.1.RDB持久化</h2>\\n<p>RDB全称Redis Database Backup file（Redis数据备份文件），也被叫做Redis数据快照。简单来说就是把内存中的所有数据都记录到磁盘中。当Redis实例故障重启后，从磁盘读取快照文件，恢复数据。快照文件称为RDB文件，默认是保存在当前运行目录。</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
