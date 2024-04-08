const e=JSON.parse('{"key":"v-af6dce44","path":"/project/slwl/notes/day04-%E8%BF%90%E8%B4%B9%E5%BE%AE%E6%9C%8D%E5%8A%A1.html","title":"day04-运费微服务","lang":"zh-CN","frontmatter":{"title":"day04-运费微服务","date":"2023-07-15T15:58:23.000Z","order":4,"category":["项目","神领物流"],"tag":["项目","神领物流"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"课程安排 了解运费的业务需求 了解运费模板表的设计 实现运费计算的业务逻辑 完成部署服务以及功能测试 1、背景说明 现在出现了新的情况，开发二组一名负责运费微服务的同事小张离职了，开发二组目前人手不足，需要借调去接手这个任务，你需要知道的是，运费计算微服务是核心的微服务，不能出现计算错误，毕竟是钱挂钩的。 对了，小张离职前已经将该微服务的基本框架搭建完成了，你只需要实现核心的业务逻辑就可以了，这对你来说可能是个好消息……","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/project/slwl/notes/day04-%E8%BF%90%E8%B4%B9%E5%BE%AE%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"day04-运费微服务"}],["meta",{"property":"og:description","content":"课程安排 了解运费的业务需求 了解运费模板表的设计 实现运费计算的业务逻辑 完成部署服务以及功能测试 1、背景说明 现在出现了新的情况，开发二组一名负责运费微服务的同事小张离职了，开发二组目前人手不足，需要借调去接手这个任务，你需要知道的是，运费计算微服务是核心的微服务，不能出现计算错误，毕竟是钱挂钩的。 对了，小张离职前已经将该微服务的基本框架搭建完成了，你只需要实现核心的业务逻辑就可以了，这对你来说可能是个好消息……"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"day04-运费微服务"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"项目"}],["meta",{"property":"article:tag","content":"神领物流"}],["meta",{"property":"article:published_time","content":"2023-07-15T15:58:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day04-运费微服务\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-07-15T15:58:23.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"2.1、模板列表","slug":"_2-1、模板列表","link":"#_2-1、模板列表","children":[]},{"level":2,"title":"2.2、计费规则","slug":"_2-2、计费规则","link":"#_2-2、计费规则","children":[]},{"level":2,"title":"2.3、新增模板","slug":"_2-3、新增模板","link":"#_2-3、新增模板","children":[{"level":3,"title":"2.3.1、全国范围","slug":"_2-3-1、全国范围","link":"#_2-3-1、全国范围","children":[]},{"level":3,"title":"2.3.2、经济区互寄","slug":"_2-3-2、经济区互寄","link":"#_2-3-2、经济区互寄","children":[]}]},{"level":2,"title":"5.1、查询模板列表","slug":"_5-1、查询模板列表","link":"#_5-1、查询模板列表","children":[]},{"level":2,"title":"5.2、新增或更新","slug":"_5-2、新增或更新","link":"#_5-2、新增或更新","children":[{"level":3,"title":"5.2.1、整体流程","slug":"_5-2-1、整体流程","link":"#_5-2-1、整体流程","children":[]},{"level":3,"title":"5.2.2、代码实现","slug":"_5-2-2、代码实现","link":"#_5-2-2、代码实现","children":[]},{"level":3,"title":"5.2.3、测试","slug":"_5-2-3、测试","link":"#_5-2-3、测试","children":[]}]},{"level":2,"title":"5.3、运费计算","slug":"_5-3、运费计算","link":"#_5-3、运费计算","children":[{"level":3,"title":"5.3.1、整体流程","slug":"_5-3-1、整体流程","link":"#_5-3-1、整体流程","children":[]},{"level":3,"title":"5.3.2、查找模板","slug":"_5-3-2、查找模板","link":"#_5-3-2、查找模板","children":[]},{"level":3,"title":"5.3.3、计算运费","slug":"_5-3-3、计算运费","link":"#_5-3-3、计算运费","children":[]},{"level":3,"title":"5.3.4、测试","slug":"_5-3-4、测试","link":"#_5-3-4、测试","children":[]},{"level":3,"title":"5.3.5、异常","slug":"_5-3-5、异常","link":"#_5-3-5、异常","children":[]},{"level":3,"title":"5.3.6、测试举例","slug":"_5-3-6、测试举例","link":"#_5-3-6、测试举例","children":[]}]},{"level":2,"title":"5.4、部署","slug":"_5-4、部署","link":"#_5-4、部署","children":[]},{"level":2,"title":"5.5、用户端测试","slug":"_5-5、用户端测试","link":"#_5-5、用户端测试","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":18.22,"words":5466},"filePathRelative":"project/slwl/notes/day04-运费微服务.md","localizedDate":"2023年7月15日","excerpt":"<h1> 课程安排</h1>\\n<ul>\\n<li>了解运费的业务需求</li>\\n<li>了解运费模板表的设计</li>\\n<li>实现运费计算的业务逻辑</li>\\n<li>完成部署服务以及功能测试</li>\\n</ul>\\n<h1> 1、背景说明</h1>\\n<p>现在出现了新的情况，开发二组一名负责运费微服务的同事小张离职了，开发二组目前人手不足，需要借调去接手这个任务，你需要知道的是，运费计算微服务是核心的微服务，不能出现计算错误，毕竟是钱挂钩的。<br>\\n对了，小张离职前已经将该微服务的基本框架搭建完成了，你只需要实现核心的业务逻辑就可以了，这对你来说可能是个好消息……</p>\\n<figure><figcaption></figcaption></figure>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
