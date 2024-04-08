const e=JSON.parse('{"key":"v-f7bd565e","path":"/middleware/nacos/04.Nacos%20%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html","title":"四、Nacos 配置中心源码解读","lang":"zh-CN","frontmatter":{"title":"四、Nacos 配置中心源码解读","date":"2023-03-28T14:54:18.000Z","order":4,"category":["中间件","Nacos","阿里","微服务","服务注册","服务管理","配置中心"],"tag":["中间件","Nacos","阿里","微服务","服务注册","服务管理","配置中心"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"一. Nacos Config实现原理解析 首先，Nacos Config针对配置的管理提供了4种操作）： 获取配置，从Nacos Config Server中读取配置。 监听配置：订阅感兴趣的配置，当配置发生变化的时候可以收到一个事件。 发布配置：将配置保存到Nacos Config Server中。 删除配置：删除配置中心的指定配置。 而从原理层面来看，可以归类为两种类型：配置的CRUD和配置的动态监听。 1.1 配置的CRUD操作","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/middleware/nacos/04.Nacos%20%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"四、Nacos 配置中心源码解读"}],["meta",{"property":"og:description","content":"一. Nacos Config实现原理解析 首先，Nacos Config针对配置的管理提供了4种操作）： 获取配置，从Nacos Config Server中读取配置。 监听配置：订阅感兴趣的配置，当配置发生变化的时候可以收到一个事件。 发布配置：将配置保存到Nacos Config Server中。 删除配置：删除配置中心的指定配置。 而从原理层面来看，可以归类为两种类型：配置的CRUD和配置的动态监听。 1.1 配置的CRUD操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"四、Nacos 配置中心源码解读"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"阿里"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"服务注册"}],["meta",{"property":"article:tag","content":"服务管理"}],["meta",{"property":"article:tag","content":"配置中心"}],["meta",{"property":"article:published_time","content":"2023-03-28T14:54:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"四、Nacos 配置中心源码解读\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-03-28T14:54:18.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1.1 配置的CRUD操作","slug":"_1-1-配置的crud操作","link":"#_1-1-配置的crud操作","children":[]},{"level":2,"title":"1.2 配置的动态监听","slug":"_1-2-配置的动态监听","link":"#_1-2-配置的动态监听","children":[]},{"level":2,"title":"2.1 Config实现配置的加载","slug":"_2-1-config实现配置的加载","link":"#_2-1-config实现配置的加载","children":[{"level":3,"title":"2.1.1 环境的准备","slug":"_2-1-1-环境的准备","link":"#_2-1-1-环境的准备","children":[]},{"level":3,"title":"2.1.2 环境的加载","slug":"_2-1-2-环境的加载","link":"#_2-1-2-环境的加载","children":[]},{"level":3,"title":"2.1.3 案例1：通过Debug来理解Config的配置加载","slug":"_2-1-3-案例1-通过debug来理解config的配置加载","link":"#_2-1-3-案例1-通过debug来理解config的配置加载","children":[]},{"level":3,"title":"2.1.4 小总结1☆","slug":"_2-1-4-小总结1☆","link":"#_2-1-4-小总结1☆","children":[]}]},{"level":2,"title":"2.2 Config配置加载核心代码分析","slug":"_2-2-config配置加载核心代码分析","link":"#_2-2-config配置加载核心代码分析","children":[{"level":3,"title":"2.2.1 事件订阅机制的实现","slug":"_2-2-1-事件订阅机制的实现","link":"#_2-2-1-事件订阅机制的实现","children":[]},{"level":3,"title":"2.2.2 NacosConfigService","slug":"_2-2-2-nacosconfigservice","link":"#_2-2-2-nacosconfigservice","children":[]},{"level":3,"title":"2.2.3 ClientWorker","slug":"_2-2-3-clientworker","link":"#_2-2-3-clientworker","children":[]},{"level":3,"title":"2.2.4 LongPollingRunnable","slug":"_2-2-4-longpollingrunnable","link":"#_2-2-4-longpollingrunnable","children":[]},{"level":3,"title":"2.2.5 服务端长连接处理机制","slug":"_2-2-5-服务端长连接处理机制","link":"#_2-2-5-服务端长连接处理机制","children":[]},{"level":3,"title":"2.2.6 ClientLongPolling","slug":"_2-2-6-clientlongpolling","link":"#_2-2-6-clientlongpolling","children":[]},{"level":3,"title":"2.2.7 小总结2☆☆","slug":"_2-2-7-小总结2☆☆","link":"#_2-2-7-小总结2☆☆","children":[]}]},{"level":2,"title":"3.1 客户端部分流程图","slug":"_3-1-客户端部分流程图","link":"#_3-1-客户端部分流程图","children":[]},{"level":2,"title":"3.2 服务端部分流程图","slug":"_3-2-服务端部分流程图","link":"#_3-2-服务端部分流程图","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":29.91,"words":8972},"filePathRelative":"middleware/nacos/04.Nacos 配置中心源码解读.md","localizedDate":"2023年3月28日","excerpt":"<h1> 一. Nacos Config实现原理解析</h1>\\n<p>首先，Nacos Config针对配置的管理提供了4种操作）：</p>\\n<ul>\\n<li>获取配置，从Nacos Config Server中读取配置。</li>\\n<li>监听配置：订阅感兴趣的配置，当配置发生变化的时候可以收到一个事件。</li>\\n<li>发布配置：将配置保存到Nacos Config Server中。</li>\\n<li>删除配置：删除配置中心的指定配置。</li>\\n</ul>\\n<p>而从原理层面来看，可以归类为两种类型：配置的CRUD和配置的动态监听。</p>\\n<h2> 1.1 配置的CRUD操作</h2>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
