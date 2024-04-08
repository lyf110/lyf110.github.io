const e=JSON.parse('{"key":"v-4dde7124","path":"/framework/spring/spring49/03_Spring%E9%AB%98%E7%BA%A749%E8%AE%B2-WEB.html","title":"三、Spring高级49讲-WEB相关","lang":"zh-CN","frontmatter":{"title":"三、Spring高级49讲-WEB相关","date":"2023-04-03T15:51:46.000Z","order":3,"category":["ssm","Spring","Spring高级","源码剖析"],"tag":["ssm","Spring","Spring高级","源码剖析"],"author":{"name":"liu yang fang","link":"https://github.com/lyf110"},"description":"20 RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter 俩是一对，分别用来 处理 @RequestMapping 映射 调用控制器方法、并处理方法参数与方法返回值 20.1 演示1 - DispatcherServlet 初始化 20.1.1 代码参考 1、DispatcherServlet 是在第一次被访问时执行初始化 验证","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/framework/spring/spring49/03_Spring%E9%AB%98%E7%BA%A749%E8%AE%B2-WEB.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"三、Spring高级49讲-WEB相关"}],["meta",{"property":"og:description","content":"20 RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter 俩是一对，分别用来 处理 @RequestMapping 映射 调用控制器方法、并处理方法参数与方法返回值 20.1 演示1 - DispatcherServlet 初始化 20.1.1 代码参考 1、DispatcherServlet 是在第一次被访问时执行初始化 验证"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/lyf110/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"三、Spring高级49讲-WEB相关"}],["meta",{"property":"article:author","content":"liu yang fang"}],["meta",{"property":"article:tag","content":"ssm"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"Spring高级"}],["meta",{"property":"article:tag","content":"源码剖析"}],["meta",{"property":"article:published_time","content":"2023-04-03T15:51:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、Spring高级49讲-WEB相关\\",\\"image\\":[\\"https://github.com/lyf110/\\"],\\"datePublished\\":\\"2023-04-03T15:51:46.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liu yang fang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"20.1 演示1 - DispatcherServlet 初始化","slug":"_20-1-演示1-dispatcherservlet-初始化","link":"#_20-1-演示1-dispatcherservlet-初始化","children":[{"level":3,"title":"20.1.1 代码参考","slug":"_20-1-1-代码参考","link":"#_20-1-1-代码参考","children":[]},{"level":3,"title":"20.1.2 收获💡","slug":"_20-1-2-收获💡","link":"#_20-1-2-收获💡","children":[]}]},{"level":2,"title":"20.2 演示2 - 自定义参数与返回值处理器","slug":"_20-2-演示2-自定义参数与返回值处理器","link":"#_20-2-演示2-自定义参数与返回值处理器","children":[{"level":3,"title":"20.2.1 代码参考","slug":"_20-2-1-代码参考","link":"#_20-2-1-代码参考","children":[]},{"level":3,"title":"20.2.2 收获💡","slug":"_20-2-2-收获💡","link":"#_20-2-2-收获💡","children":[]}]},{"level":2,"title":"21.1 演示 - 常见参数解析器","slug":"_21-1-演示-常见参数解析器","link":"#_21-1-演示-常见参数解析器","children":[{"level":3,"title":"21.1.1 Spring中常见的参数解析器","slug":"_21-1-1-spring中常见的参数解析器","link":"#_21-1-1-spring中常见的参数解析器","children":[]},{"level":3,"title":"21.1.2 代码参考","slug":"_21-1-2-代码参考","link":"#_21-1-2-代码参考","children":[]},{"level":3,"title":"21.1.3 收获💡","slug":"_21-1-3-收获💡","link":"#_21-1-3-收获💡","children":[]}]},{"level":2,"title":"22.1 演示 - 两种方法获取参数名","slug":"_22-1-演示-两种方法获取参数名","link":"#_22-1-演示-两种方法获取参数名","children":[{"level":3,"title":"22.1.1 代码参考","slug":"_22-1-1-代码参考","link":"#_22-1-1-代码参考","children":[]},{"level":3,"title":"22.1.2 收获💡","slug":"_22-1-2-收获💡","link":"#_22-1-2-收获💡","children":[]}]},{"level":2,"title":"23.1 底层第一套转换接口与实现（Spring实现）","slug":"_23-1-底层第一套转换接口与实现-spring实现","link":"#_23-1-底层第一套转换接口与实现-spring实现","children":[]},{"level":2,"title":"23.2 底层第二套转换接口（JDK实现）","slug":"_23-2-底层第二套转换接口-jdk实现","link":"#_23-2-底层第二套转换接口-jdk实现","children":[]},{"level":2,"title":"23.3 高层接口与实现","slug":"_23-3-高层接口与实现","link":"#_23-3-高层接口与实现","children":[]},{"level":2,"title":"23.4 演示1 - 类型转换与数据绑定","slug":"_23-4-演示1-类型转换与数据绑定","link":"#_23-4-演示1-类型转换与数据绑定","children":[{"level":3,"title":"23.4.1 代码参考","slug":"_23-4-1-代码参考","link":"#_23-4-1-代码参考","children":[]},{"level":3,"title":"23.4.2 收获💡","slug":"_23-4-2-收获💡","link":"#_23-4-2-收获💡","children":[]}]},{"level":2,"title":"23.5 演示2 - 数据绑定工厂","slug":"_23-5-演示2-数据绑定工厂","link":"#_23-5-演示2-数据绑定工厂","children":[{"level":3,"title":"23.5.1 代码参考","slug":"_23-5-1-代码参考","link":"#_23-5-1-代码参考","children":[]},{"level":3,"title":"23.5.2 收获💡","slug":"_23-5-2-收获💡","link":"#_23-5-2-收获💡","children":[]}]},{"level":2,"title":"23.6 演示3 - 获取泛型参数","slug":"_23-6-演示3-获取泛型参数","link":"#_23-6-演示3-获取泛型参数","children":[{"level":3,"title":"23.6.1 代码参考","slug":"_23-6-1-代码参考","link":"#_23-6-1-代码参考","children":[]},{"level":3,"title":"23.6.2 收获💡","slug":"_23-6-2-收获💡","link":"#_23-6-2-收获💡","children":[]}]},{"level":2,"title":"24.1 演示 - 准备 @InitBinder","slug":"_24-1-演示-准备-initbinder","link":"#_24-1-演示-准备-initbinder","children":[]},{"level":2,"title":"24.2 代码测试","slug":"_24-2-代码测试","link":"#_24-2-代码测试","children":[{"level":3,"title":"24.2.1 WebConfig","slug":"_24-2-1-webconfig","link":"#_24-2-1-webconfig","children":[]},{"level":3,"title":"24.2.2 测试代码","slug":"_24-2-2-测试代码","link":"#_24-2-2-测试代码","children":[]},{"level":3,"title":"24.2.3 测试结果","slug":"_24-2-3-测试结果","link":"#_24-2-3-测试结果","children":[]}]},{"level":2,"title":"24.3 收获💡","slug":"_24-3-收获💡","link":"#_24-3-收获💡","children":[]},{"level":2,"title":"25.1 图1","slug":"_25-1-图1","link":"#_25-1-图1","children":[]},{"level":2,"title":"25.2 图2","slug":"_25-2-图2","link":"#_25-2-图2","children":[]},{"level":2,"title":"25.3 图3","slug":"_25-3-图3","link":"#_25-3-图3","children":[]},{"level":2,"title":"26.1 演示 - 准备 @ModelAttribute","slug":"_26-1-演示-准备-modelattribute","link":"#_26-1-演示-准备-modelattribute","children":[{"level":3,"title":"26.1.1 代码参考","slug":"_26-1-1-代码参考","link":"#_26-1-1-代码参考","children":[]}]},{"level":2,"title":"26.2 收获💡","slug":"_26-2-收获💡","link":"#_26-2-收获💡","children":[]},{"level":2,"title":"27.1 演示 - 常见返回值处理器","slug":"_27-1-演示-常见返回值处理器","link":"#_27-1-演示-常见返回值处理器","children":[{"level":3,"title":"27.1.1 代码参考","slug":"_27-1-1-代码参考","link":"#_27-1-1-代码参考","children":[]},{"level":3,"title":"27.1.2 收获💡","slug":"_27-1-2-收获💡","link":"#_27-1-2-收获💡","children":[]}]},{"level":2,"title":"28.1 演示 - MessageConverter 的作用","slug":"_28-1-演示-messageconverter-的作用","link":"#_28-1-演示-messageconverter-的作用","children":[{"level":3,"title":"28.1.1 代码参考","slug":"_28-1-1-代码参考","link":"#_28-1-1-代码参考","children":[]},{"level":3,"title":"28.1.2 收获💡","slug":"_28-1-2-收获💡","link":"#_28-1-2-收获💡","children":[]}]},{"level":2,"title":"29.1 演示 - ResponseBodyAdvice 增强","slug":"_29-1-演示-responsebodyadvice-增强","link":"#_29-1-演示-responsebodyadvice-增强","children":[{"level":3,"title":"29.1.1 代码参考","slug":"_29-1-1-代码参考","link":"#_29-1-1-代码参考","children":[]},{"level":3,"title":"29.1.2 收获💡","slug":"_29-1-2-收获💡","link":"#_29-1-2-收获💡","children":[]}]},{"level":2,"title":"30.1 演示 - ExceptionHandlerExceptionResolver","slug":"_30-1-演示-exceptionhandlerexceptionresolver","link":"#_30-1-演示-exceptionhandlerexceptionresolver","children":[{"level":3,"title":"30.1.1 代码参考","slug":"_30-1-1-代码参考","link":"#_30-1-1-代码参考","children":[]},{"level":3,"title":"30.1.2 收获💡","slug":"_30-1-2-收获💡","link":"#_30-1-2-收获💡","children":[]}]},{"level":2,"title":"31.1 演示 - 准备 @ExceptionHandler","slug":"_31-1-演示-准备-exceptionhandler","link":"#_31-1-演示-准备-exceptionhandler","children":[{"level":3,"title":"31.1.1 代码参考","slug":"_31-1-1-代码参考","link":"#_31-1-1-代码参考","children":[]},{"level":3,"title":"31.1.2 收获💡","slug":"_31-1-2-收获💡","link":"#_31-1-2-收获💡","children":[]}]},{"level":2,"title":"32.1 错误现象演示-原始的Tomcat处理异常","slug":"_32-1-错误现象演示-原始的tomcat处理异常","link":"#_32-1-错误现象演示-原始的tomcat处理异常","children":[{"level":3,"title":"32.1.1 代码","slug":"_32-1-1-代码","link":"#_32-1-1-代码","children":[]}]},{"level":2,"title":"32.2 演示1 - 错误页处理","slug":"_32-2-演示1-错误页处理","link":"#_32-2-演示1-错误页处理","children":[{"level":3,"title":"32.1.1 关键代码","slug":"_32-1-1-关键代码","link":"#_32-1-1-关键代码","children":[]},{"level":3,"title":"32.1.2 测试结果","slug":"_32-1-2-测试结果","link":"#_32-1-2-测试结果","children":[]},{"level":3,"title":"32.1.3 解决上述问题","slug":"_32-1-3-解决上述问题","link":"#_32-1-3-解决上述问题","children":[]},{"level":3,"title":"32.1.4 收获💡","slug":"_32-1-4-收获💡","link":"#_32-1-4-收获💡","children":[]}]},{"level":2,"title":"32.2 演示2 - BasicErrorController","slug":"_32-2-演示2-basicerrorcontroller","link":"#_32-2-演示2-basicerrorcontroller","children":[{"level":3,"title":"32.2.1 关键代码","slug":"_32-2-1-关键代码","link":"#_32-2-1-关键代码","children":[]},{"level":3,"title":"32.2.2 完整代码","slug":"_32-2-2-完整代码","link":"#_32-2-2-完整代码","children":[]},{"level":3,"title":"32.2.3 收获💡","slug":"_32-2-3-收获💡","link":"#_32-2-3-收获💡","children":[]}]},{"level":2,"title":"33.1 测试BeanNameUrlHandlerMapping 和SimpleControllerHandlerAdapter","slug":"_33-1-测试beannameurlhandlermapping-和simplecontrollerhandleradapter","link":"#_33-1-测试beannameurlhandlermapping-和simplecontrollerhandleradapter","children":[{"level":3,"title":"33.1.1 WebConfig","slug":"_33-1-1-webconfig","link":"#_33-1-1-webconfig","children":[]},{"level":3,"title":"33.1.2 测试代码","slug":"_33-1-2-测试代码","link":"#_33-1-2-测试代码","children":[]}]},{"level":2,"title":"33.2 演示 - 本组映射器和适配器","slug":"_33-2-演示-本组映射器和适配器","link":"#_33-2-演示-本组映射器和适配器","children":[{"level":3,"title":"33.2.1 关键代码","slug":"_33-2-1-关键代码","link":"#_33-2-1-关键代码","children":[]}]},{"level":2,"title":"33.3 自定义实现此组Mapping和Adapter","slug":"_33-3-自定义实现此组mapping和adapter","link":"#_33-3-自定义实现此组mapping和adapter","children":[{"level":3,"title":"33.3.1 MyBeanNameUrlHandlerMapping","slug":"_33-3-1-mybeannameurlhandlermapping","link":"#_33-3-1-mybeannameurlhandlermapping","children":[]},{"level":3,"title":"33.3.2 MySimpleHandlerMappingAdapter","slug":"_33-3-2-mysimplehandlermappingadapter","link":"#_33-3-2-mysimplehandlermappingadapter","children":[]},{"level":3,"title":"33.3.3 WebConfig2","slug":"_33-3-3-webconfig2","link":"#_33-3-3-webconfig2","children":[]},{"level":3,"title":"33.3.4 测试代码","slug":"_33-3-4-测试代码","link":"#_33-3-4-测试代码","children":[]}]},{"level":2,"title":"33.4 收获💡","slug":"_33-4-收获💡","link":"#_33-4-收获💡","children":[]},{"level":2,"title":"34.1 演示 - 本组映射器和适配器","slug":"_34-1-演示-本组映射器和适配器","link":"#_34-1-演示-本组映射器和适配器","children":[{"level":3,"title":"34.1.1 完整代码","slug":"_34-1-1-完整代码","link":"#_34-1-1-完整代码","children":[]},{"level":3,"title":"34.1.2 关键代码","slug":"_34-1-2-关键代码","link":"#_34-1-2-关键代码","children":[]}]},{"level":2,"title":"34.2 收获💡","slug":"_34-2-收获💡","link":"#_34-2-收获💡","children":[]},{"level":2,"title":"35.1 演示1 - 本组映射器和适配器","slug":"_35-1-演示1-本组映射器和适配器","link":"#_35-1-演示1-本组映射器和适配器","children":[{"level":3,"title":"35.1.1 代码参考","slug":"_35-1-1-代码参考","link":"#_35-1-1-代码参考","children":[]},{"level":3,"title":"35.1.2 关键代码","slug":"_35-1-2-关键代码","link":"#_35-1-2-关键代码","children":[]},{"level":3,"title":"35.1.3 收获💡","slug":"_35-1-3-收获💡","link":"#_35-1-3-收获💡","children":[]}]},{"level":2,"title":"35.2 演示2 - 静态资源解析优化","slug":"_35-2-演示2-静态资源解析优化","link":"#_35-2-演示2-静态资源解析优化","children":[{"level":3,"title":"35.2.1 关键代码","slug":"_35-2-1-关键代码","link":"#_35-2-1-关键代码","children":[]},{"level":3,"title":"35.2.2 收获💡","slug":"_35-2-2-收获💡","link":"#_35-2-2-收获💡","children":[]}]},{"level":2,"title":"35.3 演示3 - 欢迎页","slug":"_35-3-演示3-欢迎页","link":"#_35-3-演示3-欢迎页","children":[{"level":3,"title":"35.3.1 关键代码","slug":"_35-3-1-关键代码","link":"#_35-3-1-关键代码","children":[]},{"level":3,"title":"35.3.2 收获💡","slug":"_35-3-2-收获💡","link":"#_35-3-2-收获💡","children":[]}]},{"level":2,"title":"35.4 映射器与适配器小结","slug":"_35-4-映射器与适配器小结","link":"#_35-4-映射器与适配器小结","children":[]},{"level":2,"title":"36.1 MVC 流程图解描述","slug":"_36-1-mvc-流程图解描述","link":"#_36-1-mvc-流程图解描述","children":[]},{"level":2,"title":"36.2 MVC 流程详细描述","slug":"_36-2-mvc-流程详细描述","link":"#_36-2-mvc-流程详细描述","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":81.22,"words":24365},"filePathRelative":"framework/spring/spring49/03_Spring高级49讲-WEB.md","localizedDate":"2023年4月3日","excerpt":"<h1> 20 RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter</h1>\\n<p>RequestMappingHandlerMapping 与 RequestMappingHandlerAdapter 俩是一对，分别用来</p>\\n<ul>\\n<li>处理 @RequestMapping 映射</li>\\n<li>调用控制器方法、并处理方法参数与方法返回值</li>\\n</ul>\\n<h2> 20.1 演示1 - DispatcherServlet 初始化</h2>\\n<h3> 20.1.1 代码参考</h3>\\n<h4> 1、DispatcherServlet 是在第一次被访问时执行初始化 验证</h4>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
