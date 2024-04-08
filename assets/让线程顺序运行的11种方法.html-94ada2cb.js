const e=JSON.parse('{"key":"v-4463f474","path":"/interview/javabase/juc/%E8%AE%A9%E7%BA%BF%E7%A8%8B%E9%A1%BA%E5%BA%8F%E8%BF%90%E8%A1%8C%E7%9A%8411%E7%A7%8D%E6%96%B9%E6%B3%95.html","title":"一、让线程顺序运行的11种方法","lang":"zh-CN","frontmatter":{"title":"一、让线程顺序运行的11种方法","date":"2023-04-11T09:31:49.000Z","order":1,"category":["juc","thread","多线程","面试题"],"tag":["juc","thread","多线程","面试题"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"一、让线程顺序运行的11种方法 1 方法说明 使用线程的join方法 使用主线程的join方法 使用线程的wait方法 使用线程的线程池方法 使用线程的Condition（条件变量）方法 使用CountDownLatch（倒计数）的方法 使用线程的CyclicBarrier（回环栅栏）方法 使用线程的Semaphore（信号量）方法 使用LockSupport的park与unpark方法 使用阻塞队列的put与take方法 使用CAS思想来完成多线程的顺序执行","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/interview/javabase/juc/%E8%AE%A9%E7%BA%BF%E7%A8%8B%E9%A1%BA%E5%BA%8F%E8%BF%90%E8%A1%8C%E7%9A%8411%E7%A7%8D%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、让线程顺序运行的11种方法"}],["meta",{"property":"og:description","content":"一、让线程顺序运行的11种方法 1 方法说明 使用线程的join方法 使用主线程的join方法 使用线程的wait方法 使用线程的线程池方法 使用线程的Condition（条件变量）方法 使用CountDownLatch（倒计数）的方法 使用线程的CyclicBarrier（回环栅栏）方法 使用线程的Semaphore（信号量）方法 使用LockSupport的park与unpark方法 使用阻塞队列的put与take方法 使用CAS思想来完成多线程的顺序执行"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-18T08:00:26.000Z"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"juc"}],["meta",{"property":"article:tag","content":"thread"}],["meta",{"property":"article:tag","content":"多线程"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:published_time","content":"2023-04-11T09:31:49.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-18T08:00:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、让线程顺序运行的11种方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-11T09:31:49.000Z\\",\\"dateModified\\":\\"2023-04-18T08:00:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":2,"title":"1 方法说明","slug":"_1-方法说明","link":"#_1-方法说明","children":[]},{"level":2,"title":"2 实现","slug":"_2-实现","link":"#_2-实现","children":[{"level":3,"title":"2.1 使用线程的join方法","slug":"_2-1-使用线程的join方法","link":"#_2-1-使用线程的join方法","children":[]},{"level":3,"title":"2.2 使用主线程的join方法","slug":"_2-2-使用主线程的join方法","link":"#_2-2-使用主线程的join方法","children":[]},{"level":3,"title":"2.3 使用线程的wait方法","slug":"_2-3-使用线程的wait方法","link":"#_2-3-使用线程的wait方法","children":[]},{"level":3,"title":"2.4 使用线程的线程池方法","slug":"_2-4-使用线程的线程池方法","link":"#_2-4-使用线程的线程池方法","children":[]},{"level":3,"title":"2.5 使用线程的Condition(条件变量)方法","slug":"_2-5-使用线程的condition-条件变量-方法","link":"#_2-5-使用线程的condition-条件变量-方法","children":[]},{"level":3,"title":"2.6 使用线程的CountDownLatch（倒计数）方法","slug":"_2-6-使用线程的countdownlatch-倒计数-方法","link":"#_2-6-使用线程的countdownlatch-倒计数-方法","children":[]},{"level":3,"title":"2.7 使用线程的CyclicBarrier（回环栅栏）方法","slug":"_2-7-使用线程的cyclicbarrier-回环栅栏-方法","link":"#_2-7-使用线程的cyclicbarrier-回环栅栏-方法","children":[]},{"level":3,"title":"2.8 使用Sephmore(信号量)实现线程按顺序运行","slug":"_2-8-使用sephmore-信号量-实现线程按顺序运行","link":"#_2-8-使用sephmore-信号量-实现线程按顺序运行","children":[]},{"level":3,"title":"2.9 使用LockSupport的park与unpark方法","slug":"_2-9-使用locksupport的park与unpark方法","link":"#_2-9-使用locksupport的park与unpark方法","children":[]},{"level":3,"title":"2.10 使用阻塞队列的put与take方法","slug":"_2-10-使用阻塞队列的put与take方法","link":"#_2-10-使用阻塞队列的put与take方法","children":[]},{"level":3,"title":"2.11 使用CAS思想来实现线程的顺序运行（AtomicReference<Thread>）","slug":"_2-11-使用cas思想来实现线程的顺序运行-atomicreference-thread","link":"#_2-11-使用cas思想来实现线程的顺序运行-atomicreference-thread","children":[]}]},{"level":2,"title":"3 参考文章","slug":"_3-参考文章","link":"#_3-参考文章","children":[]}],"git":{"createdTime":1681804826000,"updatedTime":1681804826000,"contributors":[{"name":"lyf110","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":13.88,"words":4164},"filePathRelative":"interview/javabase/juc/让线程顺序运行的11种方法.md","localizedDate":"2023年4月11日","excerpt":"<h1> 一、让线程顺序运行的11种方法</h1>\\n<h2> 1 方法说明</h2>\\n<ol>\\n<li>使用线程的join方法</li>\\n<li>使用主线程的join方法</li>\\n<li>使用线程的wait方法</li>\\n<li>使用线程的线程池方法</li>\\n<li>使用线程的Condition（条件变量）方法</li>\\n<li>使用CountDownLatch（倒计数）的方法</li>\\n<li>使用线程的CyclicBarrier（回环栅栏）方法</li>\\n<li>使用线程的Semaphore（信号量）方法</li>\\n<li>使用LockSupport的park与unpark方法</li>\\n<li>使用阻塞队列的put与take方法</li>\\n<li>使用CAS思想来完成多线程的顺序执行</li>\\n</ol>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
