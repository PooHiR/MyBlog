import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as i,b as a,d as l,e as c,a as p}from"./app-DxOkGf6w.js";const o={},r=p(`<h1 id="linux网络监控" tabindex="-1"><a class="header-anchor" href="#linux网络监控"><span>Linux网络监控</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>linux中网络监控命令主要是netstat 和sar</p><h2 id="_2-监控命令" tabindex="-1"><a class="header-anchor" href="#_2-监控命令"><span>2. 监控命令</span></a></h2><h3 id="_2-1-netstat" tabindex="-1"><a class="header-anchor" href="#_2-1-netstat"><span>2.1 netstat</span></a></h3><h4 id="_2-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-1-简介"><span>2.1.1 简介</span></a></h4><p>netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。</p><h4 id="_2-1-2-常用实例" tabindex="-1"><a class="header-anchor" href="#_2-1-2-常用实例"><span>2.1.2 常用实例：</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-aup</span>      <span class="token comment"># 输出所有UDP连接状况</span>
<span class="token function">netstat</span> <span class="token parameter variable">-atp</span>      <span class="token comment"># 输出所有TCP连接状况</span>
<span class="token function">netstat</span> <span class="token parameter variable">-s</span>        <span class="token comment"># 显示各个协议的网络统计信息</span>
<span class="token function">netstat</span> <span class="token parameter variable">-i</span>        <span class="token comment"># 显示网卡列表</span>
<span class="token function">netstat</span> <span class="token parameter variable">-r</span>        <span class="token comment"># 显示路由表信息</span>
<span class="token function">netstat</span> <span class="token parameter variable">-l</span>        <span class="token comment"># 只显示监听端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lt</span>       <span class="token comment"># 只列出所有监听 tcp 端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lu</span>       <span class="token comment"># 只列出所有监听 udp 端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lx</span>       <span class="token comment"># 只列出所有监听 UNIX 端口</span>
<span class="token function">netstat</span> -p或--programs <span class="token comment"># 显示正在使用Socket的程序识别码和程序名称；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-tldr-中的介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-3-tldr-中的介绍"><span>2.1.3 tldr 中的介绍</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">netstat</span>

  显示与网络相关的信息，如打开的连接、打开的套接字端口等.
  更多信息: https://www.unix.com/man-page/osx/1/netstat.

  - 列出所有端口:
    <span class="token function">netstat</span> <span class="token parameter variable">-a</span>

  - 列出所有被侦听端口:
    <span class="token function">netstat</span> <span class="token parameter variable">-l</span>

  - 列出侦听的 TCP 端口:
    <span class="token function">netstat</span> <span class="token parameter variable">-t</span>

  - 显示监听给定协议监听的 PID 和程序名:
    <span class="token function">netstat</span> <span class="token parameter variable">-p</span> 协议

  - 打印路由表:
    <span class="token function">netstat</span> <span class="token parameter variable">-nr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-4-示例"><span>2.1.4 示例</span></a></h4><h5 id="_2-1-4-1-列出所有端口-包含tcp和udp" tabindex="-1"><a class="header-anchor" href="#_2-1-4-1-列出所有端口-包含tcp和udp"><span>2.1.4.1 <strong>列出所有端口(包含TCP和UDP)</strong></span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>netstat -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145537683.png" alt="image-20220408145537683" tabindex="0" loading="lazy"><figcaption>image-20220408145537683</figcaption></figure><h5 id="_2-1-4-2-列出所有tcp端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-2-列出所有tcp端口"><span>2.1.4.2 <strong>列出所有TCP端口</strong></span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; netstat -at
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145637391.png" alt="image-20220408145637391" tabindex="0" loading="lazy"><figcaption>image-20220408145637391</figcaption></figure><h5 id="_2-1-4-3-列出所有udp端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-3-列出所有udp端口"><span>2.1.4.3 <strong>列出所有UDP端口</strong></span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-au</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145728045.png" alt="image-20220408145728045" tabindex="0" loading="lazy"><figcaption>image-20220408145728045</figcaption></figure><h5 id="_2-1-4-4-找出程序运行的端口" tabindex="-1"><a class="header-anchor" href="#_2-1-4-4-找出程序运行的端口"><span>2.1.4.4 <strong>找出程序运行的端口</strong></span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> netstat -tunlp | grep redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150002077.png" alt="image-20220408150002077" tabindex="0" loading="lazy"><figcaption>image-20220408150002077</figcaption></figure><h5 id="_2-1-4-5-找出运行在指定端口的进程" tabindex="-1"><a class="header-anchor" href="#_2-1-4-5-找出运行在指定端口的进程"><span>2.1.4.5 <strong>找出运行在指定端口的进程</strong></span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150517112.png" alt="image-20220408150517112" tabindex="0" loading="lazy"><figcaption>image-20220408150517112</figcaption></figure><h5 id="_2-1-4-6-通过端口找进程id" tabindex="-1"><a class="header-anchor" href="#_2-1-4-6-通过端口找进程id"><span>2.1.4.6 通过端口找进程ID</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d/ <span class="token parameter variable">-f1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150717292.png" alt="image-20220408150717292" tabindex="0" loading="lazy"><figcaption>image-20220408150717292</figcaption></figure><h3 id="_2-2-sar" tabindex="-1"><a class="header-anchor" href="#_2-2-sar"><span>2.2 sar</span></a></h3><h4 id="_2-2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简介"><span>2.2.1 简介</span></a></h4><p>sar命令 是Linux下系统运行状态统计工具，它将指定的操作系统状态计数器显示到标准输出设备。</p><h4 id="_2-2-2-字段说明" tabindex="-1"><a class="header-anchor" href="#_2-2-2-字段说明"><span>2.2.2 字段说明</span></a></h4><ul><li><code>IFACE</code>：网络设备的名称</li><li><code>rxpck/s</code>：每秒钟接收到的包数目</li><li><code>txpck/s</code>：每秒钟发送出去的包数目</li><li><code>rxkB/s</code>：每秒钟接收到的字节数</li><li><code>txkB/s</code>：每秒钟发送出去的字节数</li></ul><h4 id="_2-2-3-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-3-示例"><span>2.2.3 示例</span></a></h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401145225177.png" alt="image-20220401145225177" tabindex="0" loading="lazy"><figcaption>image-20220401145225177</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h2>`,38),d={href:"https://zhuanlan.zhihu.com/p/398839850",target:"_blank",rel:"noopener noreferrer"};function m(g,u){const n=e("ExternalLinkIcon");return t(),i("div",null,[r,a("p",null,[a("a",d,[l("Linux之netstat命令"),c(n)])])])}const v=s(o,[["render",m],["__file","linux-j-net.html.vue"]]),k=JSON.parse('{"path":"/notes/Specialized_knowledge/linux/linux-j-net.html","title":"Linux网络监控","lang":"zh-CN","frontmatter":{"order":140,"date":"2024-06-07T00:00:00.000Z","description":"Linux网络监控 1. 简介 linux中网络监控命令主要是netstat 和sar 2. 监控命令 2.1 netstat 2.1.1 简介 netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。 2.1.2 常用实例： 2.1.3 tldr 中的介绍 2.1.4 示例 2.1.4.1 ...","head":[["meta",{"property":"og:url","content":"http://ek0wraith.top/notes/Specialized_knowledge/linux/linux-j-net.html"}],["meta",{"property":"og:site_name","content":"Ek0wraith"}],["meta",{"property":"og:title","content":"Linux网络监控"}],["meta",{"property":"og:description","content":"Linux网络监控 1. 简介 linux中网络监控命令主要是netstat 和sar 2. 监控命令 2.1 netstat 2.1.1 简介 netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。 2.1.2 常用实例： 2.1.3 tldr 中的介绍 2.1.4 示例 2.1.4.1 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145537683.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Ek0wraith"}],["meta",{"property":"article:published_time","content":"2024-06-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux网络监控\\",\\"image\\":[\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145537683.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145637391.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145728045.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150002077.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150517112.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150717292.png\\",\\"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401145225177.png\\"],\\"datePublished\\":\\"2024-06-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ek0wraith\\",\\"url\\":\\"http://ek0wraith.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 监控命令","slug":"_2-监控命令","link":"#_2-监控命令","children":[{"level":3,"title":"2.1 netstat","slug":"_2-1-netstat","link":"#_2-1-netstat","children":[]},{"level":3,"title":"2.2 sar","slug":"_2-2-sar","link":"#_2-2-sar","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"notes/Specialized_knowledge/linux/linux-j-net.md","localizedDate":"2024年6月7日","excerpt":"\\n<h2>1. 简介</h2>\\n<p>linux中网络监控命令主要是netstat 和sar</p>\\n<h2>2. 监控命令</h2>\\n<h3>2.1 netstat</h3>\\n<h4>2.1.1 简介</h4>\\n<p>netstat命令一般用于检验本机各端口的网络连接情况，用于显示与IP、TCP、UDP和ICMP协议相关的统计数据。</p>\\n<h4>2.1.2 常用实例：</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-aup</span>      <span class=\\"token comment\\"># 输出所有UDP连接状况</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-atp</span>      <span class=\\"token comment\\"># 输出所有TCP连接状况</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-s</span>        <span class=\\"token comment\\"># 显示各个协议的网络统计信息</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-i</span>        <span class=\\"token comment\\"># 显示网卡列表</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-r</span>        <span class=\\"token comment\\"># 显示路由表信息</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-l</span>        <span class=\\"token comment\\"># 只显示监听端口</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-lt</span>       <span class=\\"token comment\\"># 只列出所有监听 tcp 端口</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-lu</span>       <span class=\\"token comment\\"># 只列出所有监听 udp 端口</span>\\n<span class=\\"token function\\">netstat</span> <span class=\\"token parameter variable\\">-lx</span>       <span class=\\"token comment\\"># 只列出所有监听 UNIX 端口</span>\\n<span class=\\"token function\\">netstat</span> -p或--programs <span class=\\"token comment\\"># 显示正在使用Socket的程序识别码和程序名称；</span>\\n</code></pre></div>","autoDesc":true}');export{v as comp,k as data};