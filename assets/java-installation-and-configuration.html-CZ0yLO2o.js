import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as r,b as e,d as a,e as t,a as i}from"./app-DxOkGf6w.js";const c="/assets/java-install-DttylgW8.png",d={},p=i('<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><h3 id="版本说明" tabindex="-1"><a class="header-anchor" href="#版本说明"><span>版本说明</span></a></h3><p>下载 Java 之前先简单了解下 Java 的版本</p><ul><li>JavaSE（Java Platform, Standard Edition）Java 标准版</li><li>JavaME（Java Platform, Micro Edition）Java 微型版</li><li>JavaEE（Java Platform, Enterprise Edition）Java 企业版</li></ul><p>Java 是面向对象的编程语言，一般来说 Java 这个单词其实指的是 Java 开发工具，也就是 JDK(Java Development Kit)。所以我们常常讨论到安装 Java8 \\ JDK8 \\ JDK1.8 \\ J2SE 8 \\ J2SE 1.8 \\ Java SE 1.8 \\ Java SE 8，其实这几个东西说的都是同一个概念，只是在 Java 的发展历程中不同阶段的不同叫法而已</p><h3 id="版本选择" tabindex="-1"><a class="header-anchor" href="#版本选择"><span>版本选择</span></a></h3>',6),h=e("code",null,"LTS（Long Term Support）",-1),v={href:"https://www.oracle.com/java/technologies/java-se-support-roadmap.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.java.com/zh-CN/",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"下载Java",-1),m=e("em",null,"您是要寻找 JDK 下载的软件开发人员吗?",-1),E=e("code",null,"Java SE 开发工具包",-1),_={href:"https://www.oracle.com/java/technologies/downloads/archive/",target:"_blank",rel:"noopener noreferrer"},g=e("mark",null,"使用 JDK 8u211 及以上版本进行商业性质（盈利目的）的应用或工具的开发要收费",-1),b=i('<blockquote><p>下载需要准备一个 Oracle 的账号，没有的话自己注册一下，超简单</p></blockquote><div class="hint-container tip"><p class="hint-container-title">为什么不下载最新的版本 JDK 8u202?</p><p>从 2014 年 10 月发布 Java SE 7 Update 71(Java SE 7u71)开始，Oracle 在发布 Oracle JDK 关键补丁更新(CPUs：Critical Patch Updates)的同时一般会发布相应的补丁集更新(PSUs：Patch Set Updates)。其中 Oracle JDK 关键补丁更新(CPUs)包含安全漏洞修复和重要漏洞修复，Oracle 强烈建议所有 Oracle JDK 用户及时升级到最新的 CPU 版本，Oracle JDK 关键补丁更新(CPUs)版本号采用奇数编号。Oracle JDK 补丁集更新(PSUs)包含相应 CPUs 中的所有修复以及其他非重要修复，仅当受到 Oracle JDK 关键补丁更新(CPUs)版本之外的其他漏洞的影响时才应当使用相应的补丁集更新 (PSUs)，Oracle JDK 补丁集更新(PSUs)版本号采用偶数编号。因此，一般情况下我们只要下载奇数编号的最新版本更新就行了</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>双击可执行文件（就是上一步下载的文件），如果 C 盘容量超大，那么一直点击下一步就好了；如果 C 盘容量不那么富裕，那么在下面这一步的时候选择更改，另选一个路径</p><figure><img src="'+c+`" alt="java-install" tabindex="0" loading="lazy"><figcaption>java-install</figcaption></figure><p>在 JDK 安装完成后，安装程序会自动弹窗继续安装 JRE [^first]，此时可以选择取消安装，也可以选择安装，跟 JDK 一样的安装流程即可</p><p>[^first]: 就我实机测试的结果是 JDK 11 之后的版本都没有弹框了，只需要一次安装即可（JDK 10 我下不下来不清楚还会不会）</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="java-home" tabindex="-1"><a class="header-anchor" href="#java-home"><span>JAVA_HOME</span></a></h3><p>JAVA_HOME 指向的是 Java 的安装路径，该路径下包含 bin、lib 等目录</p><h4 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式"><span>配置方式</span></a></h4><p>在系统环境变量下新建一个变量，变量名为<code>JAVA_HOME</code>，变量值为本机安装 Java 的路径，如<code>D:\\Program Files\\Java\\jdk1.8.0_201</code></p><div class="hint-container note"><p class="hint-container-title">注</p><p>一般来说这个环境变量在不与其他环境变量名称冲突的前提下随便叫什么都行，不一定要用 JAVA_HOME（甚至都可以不配置），但是为了方便识别以及后续升级版本，还是配置一下比较好。如果手动升级版本，只需要卸载旧版本，安装新版本，然后把 JAVA_HOME 的值指向新的安装路径即可</p></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>PATH</span></a></h3><p>PATH 在 Windows 的环境变量里面本来就有，只需要在其中添加 Java 相关的路径即可</p><h4 id="配置方式-1" tabindex="-1"><a class="header-anchor" href="#配置方式-1"><span>配置方式</span></a></h4><ol><li>如果之前配置了 JAVA_HOME 环境变量，那么编辑 PATH，在其末尾添加<code>;%JAVA_HOME%\\bin</code>（如果在最开始加的，那就把开头的<code>;</code>移到末尾即可[^second]）</li><li>如果没有配置 JAVA_HOME 环境变量，那么编辑 PATH，在其末尾添加<code>;D:\\Program Files\\Java\\jdk1.8.0_201\\bin</code>（如果在最开始加的，那就把开头的<code>;</code>移到末尾即可[^second]）</li></ol><p>[^second]: 这里说明的是 Win 7 环境的配置方式，其他版本的 Windows 大同小异</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你在安装 JDK 时选择了继续安装 JRE，那么可以加上<code>%JAVA_HOME%\\jre\\bin</code>或者<code>D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\bin</code>(如果是 Java11 以后的版本，这里就不需要再配置）</p><p>如果你没有安装 JRE 或者因为高版本没有生成 JRE 时，可以尝试以下步骤</p><ul><li>以管理员权限打开 CMD，输入<code>echo %JAVA_HOME%</code>（配置了 JAVA_HOME 的前提下），输入回显的前两位（如果是<code>C:\\xxx</code>那就不用输入），然后再输入<code>cd %JAVA_HOME%</code></li><li>输入以下命令行，生成即可</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>bin<span class="token punctuation">\\</span>jlink.exe --module-path jmods --add-modules java.desktop <span class="token parameter variable">--output</span> jre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="classpath" tabindex="-1"><a class="header-anchor" href="#classpath"><span><s>CLASSPATH</s></span></a></h3><p>CLASSPATH 直译过来是类路径，是 Java 环境配置中要设置的一个环境变量，其实就是 *.class 文件的路径，表示 JVM 从哪里去寻找要运行的 class 文件</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果是 Java5 以后的版本，这个环境变量可以不用配置了，因为在 Java5 中，Sun 公司改进了 JDK 设计，JRE 会自动搜索当前路径下的 jar 包，并自动加载 dt.jar 和 tools.jar</p></div><h4 id="配置方式-2" tabindex="-1"><a class="header-anchor" href="#配置方式-2"><span>配置方式</span></a></h4><p>在系统环境变量下新建一个变量，变量名为<code>CLASSPATH</code>，变量值为<code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar</code></p><p>其中被<code>;</code>分成了 3 个部分</p><ul><li>第一部分是指当前目录，也就是告诉 JVM 在当前目录寻找 class 文件</li><li>第二部分是 dt.jar ，是运行环境类库，主要是 Swing 的包（通过解压工具一看就知道了），如果过开发没有 Swing 的包，可以不用添加</li><li>第三部分是 tool.jar，顾名思义是工具类库，但是它跟我们用到的基础类库没有关系。它是 bin 下各个 exe 执行文件的实现</li></ul><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2><p>使用 Windows 命令行工具，输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没出意外的话应该能看到如下回显</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> version <span class="token string">&quot;1.8.0_201&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_201-b09<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.201</span>-b09, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出了意外的话</p><ul><li>要么是配错了某个环境变量</li><li>要么是本机安装了多个 Java 版本，且这里的回显并不是配置的 Java 版本，这说明回显上的版本配置的 PATH 的优先级（先后顺序）是高于手动配置的，那么去 PATH 里面找一下在配置的 JAVA_HOME 之前有没有类似<code>xxx\\Common Files\\Oracle\\Java\\javapath</code>这样的配置，有的话删掉再保存就可以了</li></ul><p>至此，完成</p>`,34);function f(A,k){const n=l("ExternalLinkIcon");return o(),r("div",null,[p,e("p",null,[a("这个其实不用考虑，首选标准版；再一个需要注意的就是"),h,a("版本，也就是长期支持版本。就 Oracle 顶级支持而言，非 LTS 版本被视为最新 LTS 版本的一组累积实施增强功能。新功能版本发布后，任何以前的非 LTS 版本都将被视为被取代，"),e("a",v,[a("查看 Oracle Java SE 支持路线图"),t(n)]),a("，这里选择 JDK 8")]),e("p",null,[a("首先打开 "),e("a",J,[a("Oracle 的官网"),t(n)]),a("，这里不要点中间"),u,a("那个，这里下的应该是 JRE（Java Runtime Environment），看到页面下面的"),m,a("，在这一行的最后有"),E,a("，点击这个去下载页面，然后根据平台选择对应的安装包下载即可")]),e("p",null,[a("可以在"),e("a",_,[a("此处"),t(n)]),a("找到 Java 的历史版本，需要注意的是，Oracle 在 JDK 8u211 级以上版本修改了开源协议，"),g,a("，这里可选择下载 JDK 8u201")]),b])}const j=s(d,[["render",f],["__file","java-installation-and-configuration.html.vue"]]),x=JSON.parse('{"path":"/help/java-installation-and-configuration.html","title":"Java的安装与配置","lang":"zh-CN","frontmatter":{"title":"Java的安装与配置","description":"下载 版本说明 下载 Java 之前先简单了解下 Java 的版本 JavaSE（Java Platform, Standard Edition）Java 标准版 JavaME（Java Platform, Micro Edition）Java 微型版 JavaEE（Java Platform, Enterprise Edition）Java 企业版 ...","head":[["meta",{"property":"og:url","content":"http://ek0wraith.top/help/java-installation-and-configuration.html"}],["meta",{"property":"og:site_name","content":"Ek0wraith"}],["meta",{"property":"og:title","content":"Java的安装与配置"}],["meta",{"property":"og:description","content":"下载 版本说明 下载 Java 之前先简单了解下 Java 的版本 JavaSE（Java Platform, Standard Edition）Java 标准版 JavaME（Java Platform, Micro Edition）Java 微型版 JavaEE（Java Platform, Enterprise Edition）Java 企业版 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Ek0wraith"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java的安装与配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ek0wraith\\",\\"url\\":\\"http://ek0wraith.top/\\"}]}"]]},"headers":[{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[{"level":3,"title":"版本说明","slug":"版本说明","link":"#版本说明","children":[]},{"level":3,"title":"版本选择","slug":"版本选择","link":"#版本选择","children":[]}]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"JAVA_HOME","slug":"java-home","link":"#java-home","children":[]},{"level":3,"title":"PATH","slug":"path","link":"#path","children":[]},{"level":3,"title":"CLASSPATH","slug":"classpath","link":"#classpath","children":[]}]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]}],"git":{},"readingTime":{"minutes":6.12,"words":1837},"filePathRelative":"help/java-installation-and-configuration.md","excerpt":"<h2>下载</h2>\\n<h3>版本说明</h3>\\n<p>下载 Java 之前先简单了解下 Java 的版本</p>\\n<ul>\\n<li>JavaSE（Java Platform, Standard Edition）Java 标准版</li>\\n<li>JavaME（Java Platform, Micro Edition）Java 微型版</li>\\n<li>JavaEE（Java Platform, Enterprise Edition）Java 企业版</li>\\n</ul>\\n<p>Java 是面向对象的编程语言，一般来说 Java 这个单词其实指的是 Java 开发工具，也就是 JDK(Java Development Kit)。所以我们常常讨论到安装 Java8 \\\\ JDK8 \\\\ JDK1.8 \\\\ J2SE 8 \\\\ J2SE 1.8 \\\\ Java SE 1.8 \\\\ Java SE 8，其实这几个东西说的都是同一个概念，只是在 Java 的发展历程中不同阶段的不同叫法而已</p>","autoDesc":true}');export{j as comp,x as data};
