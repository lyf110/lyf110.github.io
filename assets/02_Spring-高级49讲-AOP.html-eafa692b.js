const l=JSON.parse('{"key":"v-5a8568b8","path":"/framework/spring/spring49/02_Spring-%E9%AB%98%E7%BA%A749%E8%AE%B2-AOP.html","title":"二、Spring高级49讲-AOP相关","lang":"zh-CN","frontmatter":{"title":"二、Spring高级49讲-AOP相关","date":"2023-04-03T15:51:46.000Z","order":2,"category":["ssm","Spring","Spring高级","源码剖析"],"tag":["ssm","Spring","Spring高级","源码剖析"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"AOP AOP 底层实现方式之一是代理，由代理结合通知和目标，提供增强功能 除此以外，aspectj 提供了两种另外的 AOP 底层实现： 第一种是通过 ajc 编译器在编译 class 类文件时，就把通知的增强功能，织入到目标类的字节码中 第二种是通过 agent 在加载目标类时，修改目标类的字节码，织入增强功能 作为对比，之前学习的代理是运行时生成新的字节码","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/framework/spring/spring49/02_Spring-%E9%AB%98%E7%BA%A749%E8%AE%B2-AOP.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"二、Spring高级49讲-AOP相关"}],["meta",{"property":"og:description","content":"AOP AOP 底层实现方式之一是代理，由代理结合通知和目标，提供增强功能 除此以外，aspectj 提供了两种另外的 AOP 底层实现： 第一种是通过 ajc 编译器在编译 class 类文件时，就把通知的增强功能，织入到目标类的字节码中 第二种是通过 agent 在加载目标类时，修改目标类的字节码，织入增强功能 作为对比，之前学习的代理是运行时生成新的字节码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二、Spring高级49讲-AOP相关"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"ssm"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Spring高级"}],["meta",{"property":"article:tag","content":"源码剖析"}],["meta",{"property":"article:published_time","content":"2023-04-03T15:51:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二、Spring高级49讲-AOP相关\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-03T15:51:46.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"9 AOP 实现之 ajc 编译器","slug":"_9-aop-实现之-ajc-编译器","link":"#_9-aop-实现之-ajc-编译器","children":[{"level":3,"title":"9.1 测试代码","slug":"_9-1-测试代码","link":"#_9-1-测试代码","children":[]},{"level":3,"title":"9.2 收获💡","slug":"_9-2-收获💡","link":"#_9-2-收获💡","children":[]}]},{"level":2,"title":"10 AOP 实现之 agent 类加载","slug":"_10-aop-实现之-agent-类加载","link":"#_10-aop-实现之-agent-类加载","children":[{"level":3,"title":"10.1 测试代码","slug":"_10-1-测试代码","link":"#_10-1-测试代码","children":[]},{"level":3,"title":"10.2 使用arthas来查看运行时java源码","slug":"_10-2-使用arthas来查看运行时java源码","link":"#_10-2-使用arthas来查看运行时java源码","children":[]},{"level":3,"title":"10.3 收获💡","slug":"_10-3-收获💡","link":"#_10-3-收获💡","children":[]}]},{"level":2,"title":"11 AOP 实现之 proxy","slug":"_11-aop-实现之-proxy","link":"#_11-aop-实现之-proxy","children":[{"level":3,"title":"11.1 演示1 - jdk 动态代理","slug":"_11-1-演示1-jdk-动态代理","link":"#_11-1-演示1-jdk-动态代理","children":[]},{"level":3,"title":"11.2 演示2 - cglib 代理","slug":"_11-2-演示2-cglib-代理","link":"#_11-2-演示2-cglib-代理","children":[]}]},{"level":2,"title":"12 jdk 动态代理进阶","slug":"_12-jdk-动态代理进阶","link":"#_12-jdk-动态代理进阶","children":[{"level":3,"title":"12.1 演示1 - 模拟 jdk 动态代理","slug":"_12-1-演示1-模拟-jdk-动态代理","link":"#_12-1-演示1-模拟-jdk-动态代理","children":[]},{"level":3,"title":"12.2 演示2 - 方法反射优化","slug":"_12-2-演示2-方法反射优化","link":"#_12-2-演示2-方法反射优化","children":[]}]},{"level":2,"title":"13 cglib 代理进阶","slug":"_13-cglib-代理进阶","link":"#_13-cglib-代理进阶","children":[{"level":3,"title":"13.1 cglib 测试代码","slug":"_13-1-cglib-测试代码","link":"#_13-1-cglib-测试代码","children":[]},{"level":3,"title":"13.2 演示 - 模拟 cglib 代理","slug":"_13-2-演示-模拟-cglib-代理","link":"#_13-2-演示-模拟-cglib-代理","children":[]}]},{"level":2,"title":"14 cglib 避免反射调用","slug":"_14-cglib-避免反射调用","link":"#_14-cglib-避免反射调用","children":[{"level":3,"title":"14.1 演示 - cglib 如何避免反射","slug":"_14-1-演示-cglib-如何避免反射","link":"#_14-1-演示-cglib-如何避免反射","children":[]}]},{"level":2,"title":"15 jdk 和 cglib 在 Spring 中的统一","slug":"_15-jdk-和-cglib-在-spring-中的统一","link":"#_15-jdk-和-cglib-在-spring-中的统一","children":[{"level":3,"title":"15.1 演示 - 底层切点、通知、切面","slug":"_15-1-演示-底层切点、通知、切面","link":"#_15-1-演示-底层切点、通知、切面","children":[]}]},{"level":2,"title":"16 切点匹配","slug":"_16-切点匹配","link":"#_16-切点匹配","children":[{"level":3,"title":"16.1 演示 - 切点匹配","slug":"_16-1-演示-切点匹配","link":"#_16-1-演示-切点匹配","children":[]}]},{"level":2,"title":"17 从 @Aspect 到 Advisor","slug":"_17-从-aspect-到-advisor","link":"#_17-从-aspect-到-advisor","children":[{"level":3,"title":"17.1 演示1 - 代理创建器","slug":"_17-1-演示1-代理创建器","link":"#_17-1-演示1-代理创建器","children":[]},{"level":3,"title":"17.2 演示2 - 代理创建时机","slug":"_17-2-演示2-代理创建时机","link":"#_17-2-演示2-代理创建时机","children":[]},{"level":3,"title":"17.3 演示3 - @Before 对应的低级通知","slug":"_17-3-演示3-before-对应的低级通知","link":"#_17-3-演示3-before-对应的低级通知","children":[]}]},{"level":2,"title":"18 静态通知调用","slug":"_18-静态通知调用","link":"#_18-静态通知调用","children":[{"level":3,"title":"18.1 演示1 - 通知调用过程","slug":"_18-1-演示1-通知调用过程","link":"#_18-1-演示1-通知调用过程","children":[]},{"level":3,"title":"18.2 演示2 - 模拟 MethodInvocation","slug":"_18-2-演示2-模拟-methodinvocation","link":"#_18-2-演示2-模拟-methodinvocation","children":[]}]},{"level":2,"title":"19 动态通知调用","slug":"_19-动态通知调用","link":"#_19-动态通知调用","children":[{"level":3,"title":"19.1 演示 - 带参数绑定的通知方法调用","slug":"_19-1-演示-带参数绑定的通知方法调用","link":"#_19-1-演示-带参数绑定的通知方法调用","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":55.79,"words":16738},"filePathRelative":"framework/spring/spring49/02_Spring-高级49讲-AOP.md","localizedDate":"2023年4月3日","excerpt":"<h1> AOP</h1>\\n<p>AOP 底层实现方式之一是代理，由代理结合通知和目标，提供增强功能</p>\\n<p>除此以外，aspectj 提供了两种另外的 AOP 底层实现：</p>\\n<ul>\\n<li>\\n<p>第一种是通过 ajc 编译器在<strong>编译</strong> class 类文件时，就把通知的增强功能，织入到目标类的字节码中</p>\\n</li>\\n<li>\\n<p>第二种是通过 agent 在<strong>加载</strong>目标类时，修改目标类的字节码，织入增强功能</p>\\n</li>\\n<li>\\n<p>作为对比，之前学习的代理是<strong>运行</strong>时生成新的字节码</p>\\n</li>\\n</ul>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{l as data};
