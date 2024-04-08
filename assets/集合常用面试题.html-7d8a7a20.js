const e=JSON.parse('{"key":"v-7e2b5c28","path":"/interview/javabase/collection/%E9%9B%86%E5%90%88%E5%B8%B8%E7%94%A8%E9%9D%A2%E8%AF%95%E9%A2%98.html","title":"一、集合常用面试题","lang":"zh-CN","frontmatter":{"title":"一、集合常用面试题","date":"2023-04-18T16:49:49.000Z","order":1,"category":["集合","List","Map","Set","面试题"],"tag":["集合","List","Map","Set","面试题"],"author":{"name":"liuyangfang","link":"https://github.com/lyf110"},"description":"一、集合常用面试题 1、说说 List,Set,Queue,Map 四者的区别？四者底层的数据结构？ List(对付顺序的好帮手): 存储的元素是有序的、可重复的。 Set(注重独一无二的性质): 存储的元素是无序的、不可重复的。 Queue(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。 Map(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，\\"x\\" 代表 key，\\"y\\" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。","head":[["meta",{"property":"og:url","content":"https://github.com/lyf110/interview/javabase/collection/%E9%9B%86%E5%90%88%E5%B8%B8%E7%94%A8%E9%9D%A2%E8%AF%95%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"lyf blog"}],["meta",{"property":"og:title","content":"一、集合常用面试题"}],["meta",{"property":"og:description","content":"一、集合常用面试题 1、说说 List,Set,Queue,Map 四者的区别？四者底层的数据结构？ List(对付顺序的好帮手): 存储的元素是有序的、可重复的。 Set(注重独一无二的性质): 存储的元素是无序的、不可重复的。 Queue(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。 Map(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，\\"x\\" 代表 key，\\"y\\" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-12T01:16:00.000Z"}],["meta",{"property":"article:author","content":"liuyangfang"}],["meta",{"property":"article:tag","content":"集合"}],["meta",{"property":"article:tag","content":"List"}],["meta",{"property":"article:tag","content":"Map"}],["meta",{"property":"article:tag","content":"Set"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:published_time","content":"2023-04-18T16:49:49.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-12T01:16:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、集合常用面试题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-18T16:49:49.000Z\\",\\"dateModified\\":\\"2023-06-12T01:16:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"liuyangfang\\",\\"link\\":\\"https://github.com/lyf110\\"}]}"]]},"headers":[{"level":3,"title":"1、说说 List,Set,Queue,Map 四者的区别？四者底层的数据结构？","slug":"_1、说说-list-set-queue-map-四者的区别-四者底层的数据结构","link":"#_1、说说-list-set-queue-map-四者的区别-四者底层的数据结构","children":[]},{"level":3,"title":"2、有哪些集合是线程不安全的？怎么解决呢？","slug":"_2、有哪些集合是线程不安全的-怎么解决呢","link":"#_2、有哪些集合是线程不安全的-怎么解决呢","children":[]},{"level":3,"title":"3、比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同","slug":"_3、比较-hashset、linkedhashset-和-treeset-三者的异同","link":"#_3、比较-hashset、linkedhashset-和-treeset-三者的异同","children":[]},{"level":3,"title":"4、HashMap 和 Hashtable 的区别？HashMap 和 HashSet 区别？HashMap 和 TreeMap 区别？","slug":"_4、hashmap-和-hashtable-的区别-hashmap-和-hashset-区别-hashmap-和-treemap-区别","link":"#_4、hashmap-和-hashtable-的区别-hashmap-和-hashset-区别-hashmap-和-treemap-区别","children":[]},{"level":3,"title":"5、HashMap 的底层实现","slug":"_5、hashmap-的底层实现","link":"#_5、hashmap-的底层实现","children":[]},{"level":3,"title":"6、HashMap 的长度为什么是2的幂次方","slug":"_6、hashmap-的长度为什么是2的幂次方","link":"#_6、hashmap-的长度为什么是2的幂次方","children":[]},{"level":3,"title":"7、ConcurrentHashMap 和 Hashtable 的区别","slug":"_7、concurrenthashmap-和-hashtable-的区别","link":"#_7、concurrenthashmap-和-hashtable-的区别","children":[]},{"level":3,"title":"8、ConcurrentHashMap 线程安全的具体实现方式/底层具体实现","slug":"_8、concurrenthashmap-线程安全的具体实现方式-底层具体实现","link":"#_8、concurrenthashmap-线程安全的具体实现方式-底层具体实现","children":[]}],"git":{"createdTime":1686532560000,"updatedTime":1686532560000,"contributors":[{"name":"liuyangfang","email":"1102970594@qq.com","commits":1}]},"readingTime":{"minutes":3.51,"words":1052},"filePathRelative":"interview/javabase/collection/集合常用面试题.md","localizedDate":"2023年4月19日","excerpt":"<h1> 一、集合常用面试题</h1>\\n<h3> 1、说说 List,Set,Queue,Map 四者的区别？四者底层的数据结构？</h3>\\n<p><code>List</code>(对付顺序的好帮手): 存储的元素是有序的、可重复的。</p>\\n<p><code>Set</code>(注重独一无二的性质): 存储的元素是无序的、不可重复的。</p>\\n<p><code>Queue</code>(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。</p>\\n<p><code>Map</code>(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，\\"x\\" 代表 key，\\"y\\" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。</p>","copyright":{"author":"liu yang fang","license":"Apache License 2.0"},"autoDesc":true}');export{e as data};
