const e=JSON.parse('{"key":"v-4aca5ac0","path":"/project/zzyl/notes/day08-%E5%85%A5%E9%80%80%E7%AE%A1%E7%90%86-%E5%85%A5%E4%BD%8F-1.html","title":"day08-入退管理-入住-1","lang":"zh-CN","frontmatter":{"title":"day08-入退管理-入住-1","date":"2024-04-07T19:53:01.000Z","order":9,"category":["项目","中州养老"],"tag":["项目","中州养老"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"协同-入住申请 1 目标 在前一天中，我们已经对Activiti7工作流技术有了一定的了解，那么接下来我们会使用工作流技术来完养老项目的核心业务之一：入住申请。 入住申请属于养老项目中的核心业务之一，里面涉及到了很多的实体关联，所以，我们在开发之前必须要搞明白需求，敲定技术解决方案，方才能顺利的完成开发。 今日的目标如下： 能够全面掌握熟悉入住的业务流程 能够独立完成入住相关表结构的创建 能够使用AI工具快速生成实体类、mapper接口以及映射文件 能够分析出入住的相关接口 能够独立完成养老顾问-申请入住的接口开发","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/project/zzyl/notes/day08-%E5%85%A5%E9%80%80%E7%AE%A1%E7%90%86-%E5%85%A5%E4%BD%8F-1.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"day08-入退管理-入住-1"}],["meta",{"property":"og:description","content":"协同-入住申请 1 目标 在前一天中，我们已经对Activiti7工作流技术有了一定的了解，那么接下来我们会使用工作流技术来完养老项目的核心业务之一：入住申请。 入住申请属于养老项目中的核心业务之一，里面涉及到了很多的实体关联，所以，我们在开发之前必须要搞明白需求，敲定技术解决方案，方才能顺利的完成开发。 今日的目标如下： 能够全面掌握熟悉入住的业务流程 能够独立完成入住相关表结构的创建 能够使用AI工具快速生成实体类、mapper接口以及映射文件 能够分析出入住的相关接口 能够独立完成养老顾问-申请入住的接口开发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"day08-入退管理-入住-1"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"项目"}],["meta",{"property":"article:tag","content":"中州养老"}],["meta",{"property":"article:published_time","content":"2024-04-07T19:53:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day08-入退管理-入住-1\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2024-04-07T19:53:01.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1 目标","slug":"_1-目标","link":"#_1-目标","children":[]},{"level":2,"title":"2 入住申请-需求分析","slug":"_2-入住申请-需求分析","link":"#_2-入住申请-需求分析","children":[{"level":3,"title":"2.1 整体业务介绍","slug":"_2-1-整体业务介绍","link":"#_2-1-整体业务介绍","children":[]},{"level":3,"title":"2.2 详细业务分析","slug":"_2-2-详细业务分析","link":"#_2-2-详细业务分析","children":[]}]},{"level":2,"title":"3 入住申请-表结构设计","slug":"_3-入住申请-表结构设计","link":"#_3-入住申请-表结构设计","children":[{"level":3,"title":"3.1 E-R图","slug":"_3-1-e-r图","link":"#_3-1-e-r图","children":[]},{"level":3,"title":"3.2 表结构说明","slug":"_3-2-表结构说明","link":"#_3-2-表结构说明","children":[]},{"level":3,"title":"3.3 操作记录表","slug":"_3-3-操作记录表","link":"#_3-3-操作记录表","children":[]},{"level":3,"title":"3.4 表结构创建","slug":"_3-4-表结构创建","link":"#_3-4-表结构创建","children":[]},{"level":3,"title":"3.5 mapper准备","slug":"_3-5-mapper准备","link":"#_3-5-mapper准备","children":[]}]},{"level":2,"title":"4 入住申请-流程图绘制","slug":"_4-入住申请-流程图绘制","link":"#_4-入住申请-流程图绘制","children":[{"level":3,"title":"4.1 入住流程绘制","slug":"_4-1-入住流程绘制","link":"#_4-1-入住流程绘制","children":[]},{"level":3,"title":"4.2 部署流程","slug":"_4-2-部署流程","link":"#_4-2-部署流程","children":[]}]},{"level":2,"title":"5 入住申请-接口分析","slug":"_5-入住申请-接口分析","link":"#_5-入住申请-接口分析","children":[{"level":3,"title":"5.1 整体接口说明","slug":"_5-1-整体接口说明","link":"#_5-1-整体接口说明","children":[]},{"level":3,"title":"5.2 养老顾问-申请入住","slug":"_5-2-养老顾问-申请入住","link":"#_5-2-养老顾问-申请入住","children":[]}]},{"level":2,"title":"6 养老顾问-申请入住-接口开发","slug":"_6-养老顾问-申请入住-接口开发","link":"#_6-养老顾问-申请入住-接口开发","children":[{"level":3,"title":"6.1 思路分析","slug":"_6-1-思路分析","link":"#_6-1-思路分析","children":[]},{"level":3,"title":"6.2 申请入住-定义接口","slug":"_6-2-申请入住-定义接口","link":"#_6-2-申请入住-定义接口","children":[]},{"level":3,"title":"6.3 申请入住-业务开发","slug":"_6-3-申请入住-业务开发","link":"#_6-3-申请入住-业务开发","children":[]},{"level":3,"title":"6.4 申请入住-控制层","slug":"_6-4-申请入住-控制层","link":"#_6-4-申请入住-控制层","children":[]},{"level":3,"title":"6.5 测试","slug":"_6-5-测试","link":"#_6-5-测试","children":[]},{"level":3,"title":"6.6 保存审核记录","slug":"_6-6-保存审核记录","link":"#_6-6-保存审核记录","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":30.35,"words":9105},"filePathRelative":"project/zzyl/notes/day08-入退管理-入住-1.md","localizedDate":"2024年4月8日","excerpt":"<h1> 协同-入住申请</h1>\\n<h2> 1 目标</h2>\\n<p>在前一天中，我们已经对Activiti7工作流技术有了一定的了解，那么接下来我们会使用工作流技术来完养老项目的核心业务之一：入住申请。</p>\\n<p>入住申请属于养老项目中的核心业务之一，里面涉及到了很多的实体关联，所以，我们在开发之前必须要搞明白需求，敲定技术解决方案，方才能顺利的完成开发。</p>\\n<p>今日的目标如下：</p>\\n<ul>\\n<li>能够全面掌握熟悉入住的业务流程</li>\\n<li>能够独立完成入住相关表结构的创建</li>\\n<li>能够使用AI工具快速生成实体类、mapper接口以及映射文件</li>\\n<li>能够分析出入住的相关接口</li>\\n<li>能够独立完成养老顾问-申请入住的接口开发</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
