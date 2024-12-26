import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as i,b as e,d as t,e as o,a as l}from"./app-DxOkGf6w.js";const c={},p={id:"关系的三个范式是什么",tabindex:"-1"},d={class:"header-anchor",href:"#关系的三个范式是什么"},h=e("p",null,[e("strong",null,"第一范式(1NF)"),t("：用来确保每列的原子性，要求每列（或者每个属性值）都是不可再分的最小数据单元（也称为最小的原子单元）。")],-1),u=e("p",null,[e("strong",null,"第二范式(2NF)"),t("：在第一范式的基础上更进一层，要求表中的每列都和主键相关，即要求实体的唯一性。如果一个表满足第一范式，并且除了主键以外的其他列全部都依赖于该主键，那么该表满足第二范式。")],-1),g=e("p",null,[e("strong",null,"第三范式(3NF)"),t("：在第二范式的基础上更进一层，第三范式是确保每列都和主键列直接相关，而不是间接相关，即限制列的冗余性。如果一个关系满足第二范式，并且除了主键以外的其他列都依赖于主键列，列和列之间不存在相互依赖关系，则满足第三范式。")],-1),_={id:"mysql中varchar和char的区别是什么",tabindex:"-1"},m={class:"header-anchor",href:"#mysql中varchar和char的区别是什么"},y=e("ul",null,[e("li",null,"char字段的最大长度为255字符，varchar字段的最大长度为65535个字符。"),e("li",null,"char类型如果存的数据量小于最大长度，剩余的空间会使用空格填充，因此可能会浪费空间，所以char类型适合存储长度固定的数据，这样不会浪费空间，效率还比varchar略高；varchar类型如果存到数据量小于最大长度，剩余的空间会留给别的数据使用，所以varchar类型适合存储长度不固定的数据，这样虽然没有char存储效率高，但至少不会浪费空间。"),e("li",null,"char类型的查找效率高，varchar类型的查找效率较低。")],-1),f={id:"join和left-join的区别",tabindex:"-1"},v={class:"header-anchor",href:"#join和left-join的区别"},L=e("ul",null,[e("li",null,[e("p",null,"join等价于inner join内连接，是返回两个表中都有的符合条件的行。")]),e("li",null,[e("p",null,"left join左连接，是返回左表中所有的行及右表中符合条件的行。")]),e("li",null,[e("p",null,"right join右连接，是返回右表中所有的行及左表中符合条件的行。")])],-1),S={id:"sql怎么实现模糊查询",tabindex:"-1"},Q={class:"header-anchor",href:"#sql怎么实现模糊查询"},x=e("p",null,"索引 B+ 树是按照索引值有序排列存储的，只能根据前缀进行比较。每一次按照模糊匹配的前缀字典序来进行比较。",-1),b={id:"select的执行过程",tabindex:"-1"},k={class:"header-anchor",href:"#select的执行过程"},N=l('<p><strong>连接</strong>：首先客户端和MySQL通过三次握手建立连接，MySQL是基于TCP进行传输的。MySQL服务如果没有启动就会报错。MySQL正常运行的话就去校验用户名和密码，如果认证信息错误也会报错。检验通过之后连接器会获取用户权限并且保存起来，后续的任何操作都会基于开始的读到权限进行判断，即便创建连接之后更改了权限也不会影响已连接的权限。</p><div class="hint-container tip"><p class="hint-container-title">长连接解决</p><p>第一种，<strong>定期断开长连接</strong>。</p><p>第二种，<strong>客户端主动重置连接</strong>。当客户端执行了一个很大的操作后，在代码里调用 mysql_reset_connection 函数来重置连接，达到释放内存的效果。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。</p></div><p><strong>查询缓存</strong>：连接成功后会像MySQL服务中发送SQL语句，MySQL服务收到语句之后会进行解析判断SQL语句的类型。如果是select语句的话就去缓存中查询，看看之前有没有执行过这条select语句。缓存是以k-v形式保存在内存中的，key是SQL语句，value是SQL查询结果。如果缓存中有结果就直接返回给客户端，如果没有命中就继续向下执行。执行完成后的结果会被放入缓存中。</p><div class="hint-container tip"><p class="hint-container-title">缓存缺点</p><p>对于更新比较频繁的表，查询缓存的命中率很低的，只要一个表有更新操作，那么这个表的查询缓存就会被清空。如果刚缓存了一个查询结果很大的数据，还没被使用的时候，刚好这个表有更新操作，查询缓冲就被清空了寞。</p><p>MySQL 8.0 版本直接将查询缓存删掉了，执行一条 SQL 查询语句，不会有查询缓存这个阶段了。</p></div><p><strong>SQL解析</strong>：词法分析和语法分析，词法分析是把SQL语句的字符串识别出关键字，方便后续优化，语法分析根据语法规则判断SQL语句是否满足要求。如果SQL语句不对就会报错，</p><p><strong>执行SQL</strong>：主要是prepare预处理、optimize优化和execute执行阶段。预处理器检查SQL查询的表或者字段是否存在，如果有*就将它扩展为SQL的所有的列。优化器是确定SQL语句的执行方案，比方说有索引会选择走了哪个索引。执行器会与存储引擎交互，如果走索引了就将相应索引条件交给存储引擎，存储引擎通过B+树定位数据，如果数据不存在就像执行器返回错误，然后查询结束，找到了就将记录返回给执行数，执行器读到数据之后判断记录是否满足要求，如果满足要求就将数据返回给客户端，否则跳过该数据。如果是全表扫描优化器和存储引擎交互之后存储引擎会访问第一条表中数据，执行器会判断这条数据是否满足条件，满足就发给客户端，然后执行器查询是一个while循环，继续取下一条记录重复判断，直到读完表中所有记录退出循环。如果使用联合索引的话，会在存储引擎层分别判断每个索引是否满足条件，而不先执行回表，所有索引有一个不成立就跳过，否则就返回给Server层回表，这是一个索引下推的过程。</p>',6),j={id:"update的执行过程",tabindex:"-1"},q={class:"header-anchor",href:"#update的执行过程"},w=l("<p>执行器负责具体执行，会调用存储引擎的接口，通过主键索引树搜索获取一行记录：</p><ul><li>如果记录所在的数据页本来就在 buffer pool 中，就直接返回给执行器更新；</li><li>如果记录不在 buffer pool，将数据页从磁盘读入到 buffer pool，返回记录给执行器。</li></ul><p>执行器得到聚簇索引记录后，会看一下更新前的记录和更新后的记录是否一样：</p><ul><li>如果一样的话就不进行后续更新流程；</li><li>如果不一样的话就把更新前的记录和更新后的记录都当作参数传给 InnoDB 层，让 InnoDB 真正的执行更新记录的操作；</li></ul><p>开启事务，首先要记录相应的 undo log，需要把被更新的列的旧值记下来，也就是要生成一条 undo log，undo log 会写入 Buffer Pool 中的 Undo 页面，不过在内存修改该 Undo 页面后，需要记录对应的 redo log。</p><p>InnoDB 层开始更新记录，会先更新内存（同时标记为脏页），然后将记录写到 redo log 里面，这个时候更新就算完成了。为了减少磁盘I/O，不会立即将脏页写入磁盘，后续由后台线程选择一个合适的时机将脏页写入到磁盘。</p><p>在一条更新语句执行完成后，然后开始记录该语句对应的 binlog，此时记录的 binlog 会被保存到 binlog cache，在事务提交时才会统一将该事务运行过程中的所有 binlog 刷新到硬盘。</p><p>两阶段提交：</p><ul><li><strong>prepare 阶段</strong>：将 redo log 对应的事务状态设置为 prepare，然后将 redo log 刷新到硬盘；</li><li><strong>commit 阶段</strong>：将 binlog 刷新到磁盘，接着调用引擎的提交事务接口，将 redo log 状态设置为 commit（将事务设置为 commit 状态后，刷入到磁盘 redo log 文件）；</li></ul>",9),B={id:"count性能比较",tabindex:"-1"},M={class:"header-anchor",href:"#count性能比较"},F=l('<p>count(*)=count(1)&gt;count(主键)&gt;count(字段)</p><p>MySQL 会将星号参数转化为参数 0 来处理，所以count(*) 和count(1)相等。count(主键)需要判断主键是否为空值；count(字段)会进行全表扫描，效率最差。</p><h3 id="drop、truncate和delete的区别" tabindex="-1"><a class="header-anchor" href="#drop、truncate和delete的区别"><span>drop、truncate和delete的区别？</span></a></h3><p>drop删除整张表和表结构，以及表的索引、约束和触发器；truncate只删除表数据，表的结构、索引、约束等会被保留； delete只删除表的全部或部分数据，表结构、索引、约束等会被保留。</p><p>delete语句为DML(data maintain Language)，执行删除操作的过程是每次从表中删除一行，并且同时将该行的删除操作作为事务记录在日志中保存以便进行进行回滚操作；truncate、drop是DLL(data define language)，删除行是不能恢复的，并且在删除的过程中不会激活与表有关的删除触发器，执行速度快，原数据不放到rollback segment中，不能回滚。</p><p>truncate 和 drop 不支持添加 where 条件，而 delete 支持 where 条件。</p><p>执行速度drop&gt;truncate&gt;delete，delete 是逐行执行的，并且在执行时会把操作日志记录下来，以备日后回滚使用，所以 delete 的执行速度是比较慢的；而 truncate 的操作是先复制一个新的表结构，再把原先的表整体删除，所以它的执行速度居中，而 drop 的执行速度最快。</p><p>truncate 只能对TABLE；delete可以是TABLE和VIEW。</p><div class="hint-container tip"><p class="hint-container-title">使用场景</p><p>如果想删除表，用<strong>drop</strong>；</p><p>如果想保留表而将所有数据删除，和事务无关，用<strong>truncate</strong>即可；</p><p>如果和事务有关，或者想触发<strong>trigger</strong>，用<strong>delete</strong>；</p><p>如果是整理表内部的碎片，可以用<strong>truncate</strong>跟上reuse stroage，再重新导入/插入数据。</p></div>',9),D={id:"mysql会出现死锁吗-怎么检测死锁",tabindex:"-1"},E={class:"header-anchor",href:"#mysql会出现死锁吗-怎么检测死锁"},T=l('<p>如果 update 语句的 where 条件没有用到索引列，那么就会全表扫描，在一行行扫描的过程中，不仅给行记录加上了行锁，还给行记录两边的空隙也加上了间隙锁，相当于锁住整个表，然后直到事务结束才会释放锁。</p><p>行锁会发生死锁，表锁不会。死锁的四个必要条件：<strong>互斥、占有且等待、不可强占用、循环等待</strong>。只要系统发生死锁，这些条件必然成立，但是只要破坏任意一个条件就死锁就不会成立。</p><p>解决办法：</p><ul><li><p><strong>设置事务等待锁的超时时间</strong>。当一个事务的等待时间超过该值后，就对这个事务进行回滚，于是锁就释放了，另一个事务就可以继续执行了。在 InnoDB 中，参数 innodb_lock_wait_timeout 是用来设置超时时间的，默认值时 50 秒。</p><p>当发生超时后，就出现下面这个提示：</p></li><li><p><strong>开启主动死锁检测</strong>。主动死锁检测在发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 innodb_deadlock_detect 设置为 on，表示开启这个逻辑，默认就开启。当检测到死锁后，就会出现提示。</p></li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>',5);function z(I,P){const n=a("Badge");return s(),i("div",null,[e("h3",p,[e("a",d,[e("span",null,[t("关系的三个范式是什么？"),o(n,{text:"重要",type:"danger"})])])]),h,u,g,e("h3",_,[e("a",m,[e("span",null,[t("MySQL中varchar和char的区别是什么？"),o(n,{text:"掌握",type:"tip"})])])]),y,e("h3",f,[e("a",v,[e("span",null,[t("join和left join的区别？"),o(n,{text:"掌握",type:"tip"})])])]),L,e("h3",S,[e("a",Q,[e("span",null,[t("SQL怎么实现模糊查询？"),o(n,{text:"了解",type:"info"})])])]),x,e("h3",b,[e("a",k,[e("span",null,[t("select的执行过程？"),o(n,{text:"掌握",type:"tip"})])])]),N,e("h3",j,[e("a",q,[e("span",null,[t("update的执行过程？"),o(n,{text:"掌握",type:"tip"})])])]),w,e("h3",B,[e("a",M,[e("span",null,[t("count性能比较？"),o(n,{text:"掌握",type:"tip"})])])]),F,e("h3",D,[e("a",E,[e("span",null,[t("MySQL会出现死锁吗，怎么检测死锁？"),o(n,{text:"重要",type:"danger"})])])]),T])}const A=r(c,[["render",z],["__file","summary.html.vue"]]),Z=JSON.parse('{"path":"/notes/Specialized_knowledge/mysql/summary.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","author":"Ek0wraith","date":"2024-04-09T00:00:00.000Z","description":"关系的三个范式是什么？ 第一范式(1NF)：用来确保每列的原子性，要求每列（或者每个属性值）都是不可再分的最小数据单元（也称为最小的原子单元）。 第二范式(2NF)：在第一范式的基础上更进一层，要求表中的每列都和主键相关，即要求实体的唯一性。如果一个表满足第一范式，并且除了主键以外的其他列全部都依赖于该主键，那么该表满足第二范式。 第三范式(3NF)：...","head":[["meta",{"property":"og:url","content":"http://ek0wraith.top/notes/Specialized_knowledge/mysql/summary.html"}],["meta",{"property":"og:site_name","content":"Ek0wraith"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"关系的三个范式是什么？ 第一范式(1NF)：用来确保每列的原子性，要求每列（或者每个属性值）都是不可再分的最小数据单元（也称为最小的原子单元）。 第二范式(2NF)：在第一范式的基础上更进一层，要求表中的每列都和主键相关，即要求实体的唯一性。如果一个表满足第一范式，并且除了主键以外的其他列全部都依赖于该主键，那么该表满足第二范式。 第三范式(3NF)：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Ek0wraith"}],["meta",{"property":"article:published_time","content":"2024-04-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ek0wraith\\"}]}"]]},"headers":[{"level":3,"title":"关系的三个范式是什么？","slug":"关系的三个范式是什么","link":"#关系的三个范式是什么","children":[]},{"level":3,"title":"MySQL中varchar和char的区别是什么？","slug":"mysql中varchar和char的区别是什么","link":"#mysql中varchar和char的区别是什么","children":[]},{"level":3,"title":"join和left join的区别？","slug":"join和left-join的区别","link":"#join和left-join的区别","children":[]},{"level":3,"title":"SQL怎么实现模糊查询？","slug":"sql怎么实现模糊查询","link":"#sql怎么实现模糊查询","children":[]},{"level":3,"title":"select的执行过程？","slug":"select的执行过程","link":"#select的执行过程","children":[]},{"level":3,"title":"update的执行过程？","slug":"update的执行过程","link":"#update的执行过程","children":[]},{"level":3,"title":"count性能比较？","slug":"count性能比较","link":"#count性能比较","children":[]},{"level":3,"title":"drop、truncate和delete的区别？","slug":"drop、truncate和delete的区别","link":"#drop、truncate和delete的区别","children":[]},{"level":3,"title":"MySQL会出现死锁吗，怎么检测死锁？","slug":"mysql会出现死锁吗-怎么检测死锁","link":"#mysql会出现死锁吗-怎么检测死锁","children":[]}],"git":{},"readingTime":{"minutes":9.68,"words":2903},"filePathRelative":"notes/Specialized_knowledge/mysql/summary.md","localizedDate":"2024年4月9日","excerpt":"<h3>关系的三个范式是什么？</h3>\\n<p><strong>第一范式(1NF)</strong>：用来确保每列的原子性，要求每列（或者每个属性值）都是不可再分的最小数据单元（也称为最小的原子单元）。</p>\\n<p><strong>第二范式(2NF)</strong>：在第一范式的基础上更进一层，要求表中的每列都和主键相关，即要求实体的唯一性。如果一个表满足第一范式，并且除了主键以外的其他列全部都依赖于该主键，那么该表满足第二范式。</p>\\n<p><strong>第三范式(3NF)</strong>：在第二范式的基础上更进一层，第三范式是确保每列都和主键列直接相关，而不是间接相关，即限制列的冗余性。如果一个关系满足第二范式，并且除了主键以外的其他列都依赖于主键列，列和列之间不存在相互依赖关系，则满足第三范式。</p>","autoDesc":true}');export{A as comp,Z as data};
