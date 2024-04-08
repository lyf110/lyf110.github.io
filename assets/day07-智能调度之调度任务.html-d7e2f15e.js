const e=JSON.parse('{"key":"v-6cba859e","path":"/project/slwl/notes/day07-%E6%99%BA%E8%83%BD%E8%B0%83%E5%BA%A6%E4%B9%8B%E8%B0%83%E5%BA%A6%E4%BB%BB%E5%8A%A1.html","title":"day07-智能调度之调度任务","lang":"zh-CN","frontmatter":{"title":"day07-智能调度之调度任务","date":"2023-07-15T15:58:23.000Z","order":7,"category":["项目","神领物流","智能"],"tag":["项目","神领物流","智能"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"课程安排 什么是智能调度 实现订单转运单 美团Leaf使用入门 完善运单服务 合并运单 1、背景说明 通过前面的学习，已经掌握了路线规划的核心实现，有了路线规划之后就可以对运单进行调度了，这将是物流项目最为核心的内容，一个好的调度系统可以高效的管理着运单、运输任务、司机作业单、快递员取派件任务等，接下来你将参与智能调度的开发中，其中一部分业务功能已经实现，但核心的业务逻辑是需要你来实现的。 这部分内容的难度是比较大的，加油~","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/project/slwl/notes/day07-%E6%99%BA%E8%83%BD%E8%B0%83%E5%BA%A6%E4%B9%8B%E8%B0%83%E5%BA%A6%E4%BB%BB%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"day07-智能调度之调度任务"}],["meta",{"property":"og:description","content":"课程安排 什么是智能调度 实现订单转运单 美团Leaf使用入门 完善运单服务 合并运单 1、背景说明 通过前面的学习，已经掌握了路线规划的核心实现，有了路线规划之后就可以对运单进行调度了，这将是物流项目最为核心的内容，一个好的调度系统可以高效的管理着运单、运输任务、司机作业单、快递员取派件任务等，接下来你将参与智能调度的开发中，其中一部分业务功能已经实现，但核心的业务逻辑是需要你来实现的。 这部分内容的难度是比较大的，加油~"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"day07-智能调度之调度任务"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"项目"}],["meta",{"property":"article:tag","content":"神领物流"}],["meta",{"property":"article:tag","content":"智能"}],["meta",{"property":"article:published_time","content":"2023-07-15T15:58:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day07-智能调度之调度任务\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-07-15T15:58:23.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"2.1、为什么需要调度？","slug":"_2-1、为什么需要调度","link":"#_2-1、为什么需要调度","children":[]},{"level":2,"title":"2.2、整体核心业务流程","slug":"_2-2、整体核心业务流程","link":"#_2-2、整体核心业务流程","children":[]},{"level":2,"title":"3.1、业务流程","slug":"_3-1、业务流程","link":"#_3-1、业务流程","children":[]},{"level":2,"title":"3.2、运单表结构","slug":"_3-2、运单表结构","link":"#_3-2、运单表结构","children":[]},{"level":2,"title":"3.3、揽收成功的消息","slug":"_3-3、揽收成功的消息","link":"#_3-3、揽收成功的消息","children":[{"level":3,"title":"3.3.1、发送消息","slug":"_3-3-1、发送消息","link":"#_3-3-1、发送消息","children":[]},{"level":3,"title":"3.3.2、消费消息","slug":"_3-3-2、消费消息","link":"#_3-3-2、消费消息","children":[]}]},{"level":2,"title":"3.4、生成运单号","slug":"_3-4、生成运单号","link":"#_3-4、生成运单号","children":[{"level":3,"title":"3.4.1、号段模式","slug":"_3-4-1、号段模式","link":"#_3-4-1、号段模式","children":[]},{"level":3,"title":"3.4.2、部署服务","slug":"_3-4-2、部署服务","link":"#_3-4-2、部署服务","children":[]},{"level":3,"title":"3.4.3、封装服务","slug":"_3-4-3、封装服务","link":"#_3-4-3、封装服务","children":[]}]},{"level":2,"title":"3.5、编码实现","slug":"_3-5、编码实现","link":"#_3-5、编码实现","children":[]},{"level":2,"title":"3.6、测试","slug":"_3-6、测试","link":"#_3-6、测试","children":[]},{"level":2,"title":"4.1、获取运单分页数据","slug":"_4-1、获取运单分页数据","link":"#_4-1、获取运单分页数据","children":[]},{"level":2,"title":"4.2、订单id获取运单信息","slug":"_4-2、订单id获取运单信息","link":"#_4-2、订单id获取运单信息","children":[]},{"level":2,"title":"4.3、运单ids获取运单列表","slug":"_4-3、运单ids获取运单列表","link":"#_4-3、运单ids获取运单列表","children":[]},{"level":2,"title":"4.4、根据运单号搜索运单","slug":"_4-4、根据运单号搜索运单","link":"#_4-4、根据运单号搜索运单","children":[]},{"level":2,"title":"4.5、统计状态的数量","slug":"_4-5、统计状态的数量","link":"#_4-5、统计状态的数量","children":[]},{"level":2,"title":"4.6、更新状态","slug":"_4-6、更新状态","link":"#_4-6、更新状态","children":[]},{"level":2,"title":"5.1、实现分析","slug":"_5-1、实现分析","link":"#_5-1、实现分析","children":[]},{"level":2,"title":"5.2、代码实现","slug":"_5-2、代码实现","link":"#_5-2、代码实现","children":[{"level":3,"title":"5.2.1、准备环境","slug":"_5-2-1、准备环境","link":"#_5-2-1、准备环境","children":[]},{"level":3,"title":"5.2.2、编码实现","slug":"_5-2-2、编码实现","link":"#_5-2-2、编码实现","children":[]}]},{"level":2,"title":"5.3、测试","slug":"_5-3、测试","link":"#_5-3、测试","children":[]},{"level":2,"title":"6.1、练习一：编写代码","slug":"_6-1、练习一-编写代码","link":"#_6-1、练习一-编写代码","children":[]},{"level":2,"title":"6.2、练习二：阅读代码","slug":"_6-2、练习二-阅读代码","link":"#_6-2、练习二-阅读代码","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":24.51,"words":7352},"filePathRelative":"project/slwl/notes/day07-智能调度之调度任务.md","localizedDate":"2023年7月15日","excerpt":"<h1> 课程安排</h1>\\n<ul>\\n<li>什么是智能调度</li>\\n<li>实现订单转运单</li>\\n<li>美团Leaf使用入门</li>\\n<li>完善运单服务</li>\\n<li>合并运单</li>\\n</ul>\\n<h1> 1、背景说明</h1>\\n<p>通过前面的学习，已经掌握了路线规划的核心实现，有了路线规划之后就可以对运单进行调度了，这将是物流项目最为核心的内容，一个好的调度系统可以高效的管理着运单、运输任务、司机作业单、快递员取派件任务等，接下来你将参与智能调度的开发中，其中一部分业务功能已经实现，但核心的业务逻辑是需要你来实现的。<br>\\n这部分内容的难度是比较大的，加油~<br>\\n</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
