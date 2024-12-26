import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as a,b as t,d as n,e as s,a as l}from"./app-DxOkGf6w.js";const r={},c={id:"tcp的头部结构",tabindex:"-1"},h={class:"header-anchor",href:"#tcp的头部结构"},d=l('<figure><img src="https://pic.imgdb.cn/item/63e5c4ca4757feff33a85537.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p><strong>源端口</strong>：16位，标识报文的返回地址。</p></li><li><p><strong>目的端口</strong>：16位，指明接收方计算机上的应用程序接口。</p></li><li><p><strong>序列号</strong>：32位，在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就<strong>累加</strong>一次该<strong>数据字节数</strong>的大小。用来解决网络包乱序问题。</p></li><li><p><strong>确认号</strong>：32位，指下一次<strong>期望</strong>收到的数据的序列号，发送端收到这个确认应答以后可以认为在这个序号以前的数据都已经被正常接收。用来解决丢包的问题。</p></li><li><p><strong>数据偏移／首部长度</strong>：4位，TCP首部可能含有可选项内容，所以TCP报头的长度是不确定的，报头不包含任何任选字段则长度为20字节，4位首部长度字段所能表示最大长度为60字节。首部长度也叫数据偏移，因为首部长度实际上指示了数据区在报文段中的起始偏移值。</p></li><li><p><strong>保留</strong>：6位，为将来定义新的用途保留，现在一般置0。</p></li><li><p><strong>校验和</strong>：16位，由发送端填充，接收端对TCP报文段执行CRC算法以检验TCP报文段在传输过程中是否损坏，这个校验不仅包括TCP头部，也包括数据部分。<strong>这是TCP实现可靠传输的一个重要保障</strong>。</p></li><li><p><strong>窗口</strong>：16位，是TCP流量控制的一个手段。通过窗口告诉对方本端的TCP接收缓冲区还能容纳多少字节的数据，这样对方可以控制发送数据的速度，从而达到流量控制。窗口大小为16bit字段，因而窗口大小最大为65535。</p></li><li><p><strong>紧急指针</strong>：16位，只有当 URG 标志置 1 时紧急指针才有效。紧急指针是一个正的偏移量，和顺序号字段中的值相加表示紧急数据最后一个字节的序号。使用紧急指针是发送端向另一端发送紧急数据的一种方式。</p></li><li><p><strong>选项和填充</strong>：TCP头部的最后一个选项字段是可变长的可选信息。这部分最多包含40字节，因为TCP头部最长是60字节。 最常见的可选字段是最长报文大小MSS，每个连接方通常都在通信的第一个报文段中指明这个选项，它表示本端所能接受的最大报文段的长度。</p></li><li><p><strong>数据部分</strong>：TCP 报文段中的数据部分是可选的。在连接建立或者终止时，双方交换的报文段仅有 TCP 首部；如果一方没有数据要发送，也会使用没有任何数据的首部来确认收到的数据；在处理超时的许多情况中，也会发送不带任何数据的报文段。</p></li></ul><p>还包括控制位：</p><ul><li><p><strong>URG</strong>：紧急指针标志，为1时表示紧急指针有效，<strong>该报文应该优先传送</strong>，为0则忽略紧急指针。</p></li><li><p><strong>ACK</strong>：确认序号标志，为1时表示确认号有效，为0表示报文中不含确认信息。携带ACK标识的TCP报文段被称为<strong>确认报文段</strong>。</p></li><li><p><strong>RST</strong>：重置连接标志，<strong>用于重置由于主机崩溃或其他原因而出现错误的连接，或者用于拒绝非法的报文段和拒绝连接请求</strong>。称携带RST标志的TCP报文段为复位报文段。</p></li><li><p><strong>SYN</strong>：表示请求建立一个连接。称携带SYN标志的TCP报文段为同步报文段。</p></li><li><p><strong>FIN</strong>：finish标志，用于释放连接，为1时表示发送方已经没有数据发送了，即关闭本方数据流。称携带FIN标志的TCP报文段为结束报文段。</p></li><li><p><strong>PSH</strong>：push标志，为1表示是带有push标志的数据，指示接收方在接收到该报文段以后，应优先将这个报文段交给应用程序，而不是在缓冲区排队。</p></li></ul>',4),_={id:"tcp如何保证可靠传输",tabindex:"-1"},g={class:"header-anchor",href:"#tcp如何保证可靠传输"},T=l('<h4 id="校验和" tabindex="-1"><a class="header-anchor" href="#校验和"><span>校验和</span></a></h4><p>TCP是端到端的传输，由发送方计算校验和，接收方进行验证，目的是为了验证TCP首部和数据在发送过程中没有任何改动，一旦发现校验和有差错，直接丢弃TCP段并重新发送。</p><h4 id="序列号-确认应答" tabindex="-1"><a class="header-anchor" href="#序列号-确认应答"><span>序列号/确认应答</span></a></h4><p>TCP传输时发送方对每一个发送的消息都会编号，也就是序列号seq。接收方在每次接收到消息后回复确认应答号ACK，不仅告诉接收到哪些数据，还包括下一次消息从哪里发送。只要发送方没有接收到确认应答号ACK，都会重新发送数据。</p><h4 id="超时重传" tabindex="-1"><a class="header-anchor" href="#超时重传"><span>超时重传</span></a></h4><p>发送方发送完数据后会等待一定的时间，如果在这个时间内没有接收到ACK，就会重传数据。如果是发送方发生了丢包，那么接收方在接收到数据后会回复ACK，如果是接收方回复的ACK丢失了导致的重传，那么根据校验和和序列号知道该数据已经接收，丢弃该数据并发送ACK。</p><h4 id="连接管理" tabindex="-1"><a class="header-anchor" href="#连接管理"><span>连接管理</span></a></h4><p>三次握手和四次挥手得以实现。</p><h4 id="流量控制-滑动窗口控制" tabindex="-1"><a class="header-anchor" href="#流量控制-滑动窗口控制"><span>流量控制（滑动窗口控制）</span></a></h4><p>发送方发送数据的快慢取决于接收方接收能力。TCP的报文信息中有一个16位字段来标识滑动窗口，窗口大小就是接收方剩余缓冲区大小，在回复ACK时，接收方将自己剩余缓冲区大小填入。发送方根据窗口大小来调整自己的发送速度，如果缓冲区大小为0，那么发送方会停止发送数据。并且发送方定期会发送探测报文，来获取缓冲区大小。</p><h4 id="快速重传" tabindex="-1"><a class="header-anchor" href="#快速重传"><span>快速重传</span></a></h4><p>当接收端收到比期望号大的seq时候，就会发送冗余ACK，在超时重传之前如果收到三个相同的冗余ACK，那么就知道哪段报文发生了丢包，重传该段报文即可，避免了超时重传。</p><h4 id="拥塞控制" tabindex="-1"><a class="header-anchor" href="#拥塞控制"><span>拥塞控制</span></a></h4><p>网络可能刚开始很拥塞，如果在网络传输过程中开始就发送大量数据的话，会发生丢包和超时重传，所以需要慢启动算法、拥塞避免算法、快速重传和快速恢复。</p><p>慢启动算法</p><p>一开始不发送大量数据，而是应该先发一小部分探测数据，然后由小到大逐渐增大发送窗口。通常在刚刚开始发送报文段时，先把拥塞窗口 cwnd 设置为1，每次接收到报文之后将窗口大小翻倍。如果指数增长到避免拥塞算法的门限ssthresh，则改用避免拥塞算法。</p><ul><li>初始化设置 cwnd = 1，并开始传输数据</li><li>收到回馈的 ACK，会将 cwnd 加 1</li><li>当发送端一个 RTT 后且未发现有丢包重传，就会将 cwnd = cwnd * 2</li><li>当 cwnd &gt;= ssthresh 或发生丢包重传时慢启动结束，进入拥塞避免状态</li></ul><h4 id="避免拥塞算法" tabindex="-1"><a class="header-anchor" href="#避免拥塞算法"><span>避免拥塞算法</span></a></h4><p>每当收到一个 ACK 时，cwnd 增加 1/cwnd，变为线性增长。一但发现丢包和超时重传，就进入拥塞处理状态。</p><h5 id="拥塞发生" tabindex="-1"><a class="header-anchor" href="#拥塞发生"><span>拥塞发生</span></a></h5><p>当网络出现拥塞，也就是会发生数据包重传，重传机制主要有两种：超时重传和快速重传。</p><p>ssthresh 和 cwnd 的值会发生变化</p><ul><li>ssthresh 设为 cwnd/2</li><li>cwnd 重置为 1</li></ul><p>发送三次前一个包的 ACK，于是发送端就会快速地重传，不必等待超时再重传。TCP 认为这种情况不严重，因为大部分没丢，只丢了一小部分，则 ssthresh 和 cwnd 变化如下：</p><ul><li>cwnd = cwnd/2 ，也就是设置为原来的一半</li><li>ssthresh = cwnd</li><li>进入快速恢复算法</li></ul><h5 id="快速恢复" tabindex="-1"><a class="header-anchor" href="#快速恢复"><span>快速恢复</span></a></h5><ul><li>拥塞窗口 cwnd = ssthresh + 3 （ 3 的意思是确认有 3 个数据包被收到了）</li><li>重传丢失的数据包</li><li>如果再收到重复的 ACK，那么 cwnd 增加 1</li><li>如果收到新数据的 ACK 后，把 cwnd 设置为第一步中的 ssthresh 的值，原因是该 ACK 确认了新的数据，说明从 duplicated ACK 时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，也即再次进入拥塞避免状态</li></ul>',27),C={id:"tcp的三次握手",tabindex:"-1"},u={class:"header-anchor",href:"#tcp的三次握手"},P=l('<img src="https://pic.imgdb.cn/item/63e199104757feff33703bd8.jpg" alt="图片" style="zoom:70%;"><p><strong>第一次握手</strong></p><p>客户端请求建立连接，将首部的SYN标识位置为1，初始化序列号seq=x，发送给服务器，并进入<strong>SYN_SENT</strong>状态，等待服务器确认。</p><p><strong>第二次握手</strong></p><p>服务器接收到SYN后，将首部的SYN和ACK标识位置为1，回复确认ack的值为客户端发送的序列号x+1，同时自己也要初始化一个seq=y，ACK和SYN一起发送客户端，进入<strong>SYN_RECV</strong>状态。</p><p><strong>第三次握手</strong></p><p>客户端收到服务器的SYN和ACK包后，向服务器发送确认包ack，值为服务器的序列号y+1，并且自己的seq为x+1，此包发送完毕，客户端和服务器进入<strong>ESTABLISHED</strong>（TCP连接成功）状态。</p>',7),I={id:"tcp为什么要三次握手",tabindex:"-1"},A={class:"header-anchor",href:"#tcp为什么要三次握手"},S=t("p",null,"只有三次握手才能证明服务端和客户端的收发能力都是正常的。",-1),f=t("p",null,"第一次握手：客户端发数据服务端接收，服务端可以知道客户端发消息的能力是正常的，自己接收消息的能力是正常的。",-1),m=t("p",null,"第二次握手：服务端发消息客户端收，客户端可以知道自己发送接收消息的能力和服务端发送接收消息的能力是正常的。",-1),x=t("p",null,"第三次握手：客户端再发送消息服务端接收，服务端可以知道自己发送消息的能力是正常的，客户端接收消息的能力是正常的。",-1),N=t("p",null,"由此经过三次握手之后双方就可以都知道自己的发送和接收消息的能力是正常的。",-1),K={id:"tcp的三次握手丢了",tabindex:"-1"},b={class:"header-anchor",href:"#tcp的三次握手丢了"},k=l('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>在TCP通信连接的过程中，ACK报文发生了丢包是不会重传的，ACK 丢失是由对方重传对应的报文。</p></div><p><strong>第一次丢失</strong>：客户端发送的SYN报文会收不到服务端的响应，从而会触发超时重传，重传的SYN报文序列号和之前相同，重传最大重传次数由内核参数控制，一般是5。如果超过最大次数客户端仍没有收到回复就会断开连接。</p><p><strong>第二次丢失</strong>：服务端在收到客户端的报文之后会回复SYN+ACK报文，如果第二次握手丢失了客户端会认为自己丢包了，触发超时重传，重新发送SYN报文，服务端因为收不到确认的ACK自身也会重传。</p><p><strong>第三次丢失</strong>：客户端收到服务端的 SYN-ACK 报文后会给服务端回一个 ACK 报文，此时客户端状态进入到 <strong>ESTABLISH</strong> 状态。如果发生了丢包，服务端收不到ACK会触发超时重传机制，重传 SYN-ACK 报文，直到收到确认ACK或者达到最大重传次数。</p>',4),w={id:"tcp为什么不是两次握手",tabindex:"-1"},v={class:"header-anchor",href:"#tcp为什么不是两次握手"},M=t("h4",{id:"避免历史连接",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#避免历史连接"},[t("span",null,"避免历史连接")])],-1),y=t("p",null,"首要原因是为了防止旧的重复连接初始化造成混乱。",-1),E=t("p",null,"如果使用的是两次握手建立连接，可能客户端发送的第一个请求连接并且没有丢失，只是因为在网络中滞留的时间太长了，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。之前滞留的那一次请求连接，因为网络通畅了，到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。",-1),L=t("p",null,"如果采用的是三次握手，就算是那一次失效的报文传送过来了，服务端接受到了那条失效报文并且回复了确认报文，但是客户端不会再次发出确认。由于服务器收不到确认，就知道客户端并没有请求连接。",-1),W=t("h4",{id:"同步双方初始序列号",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#同步双方初始序列号"},[t("span",null,"同步双方初始序列号")])],-1),F=t("p",null,"为了实现可靠数据传输，TCP协议的通信双方，都必须维护一个序列号，以标识发送出去的数据包中，哪些是已经被对方收到的。 三次握手的过程即是通信双方相互告知序列号起始值，并确认对方已经收到了序列号起始值的必经步骤。如果只是两次握手，至多只有连接发起方的起始序列号能被确认，另一方选择的序列号则得不到确认。",-1),Y={id:"tcp的四次挥手",tabindex:"-1"},D={class:"header-anchor",href:"#tcp的四次挥手"},U=l('<figure><img src="https://pic.imgdb.cn/item/63e19a374757feff33718597.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>第一次挥手</strong></p><p>客户端发送释放报文，并停止发送数据，将首部的FIN标识位置为1，序列号seq=u发送给服务器，值等于前面已经传送过来的数据的最后一个字节的序号加1，此时客户端进入<strong>FIN_WAIT_1</strong>状态。即便FIN报文不携带数据，也要消耗一个序列号。</p><p><strong>第二次挥手</strong></p><p>服务器在收到释放报文后，发送确认报文，ACK标识位置为1，ack值为客户端发送的序列号u+1，并带上自己的序列号v，然后服务器进入<strong>CLOSE_WAIT关闭等待</strong>状态。这时服务器TCP通知高级应用进程，客户端向服务器的连接释放了，进入半关闭状态，但是服务器如果向客户端发送数据，客户端仍然可以接收，这个状态要持续一段时间，也就是<strong>CLOSE_WAIT关闭等待</strong>持续的时间。</p><p>客户端收到服务器的确认请求后，进入<strong>FIN_WAIT_2</strong>状态，等待服务器发送释放报文。</p><p><strong>第三次挥手</strong></p><p>服务器数据处理完毕后，向客户端发送释放连接报文，FIN标识位置为1，ack的值为客户端的序列号u+1，由于在半关闭状态，服务器很可能又发送一些数据，假定此时序列号为w，服务器进入<strong>LAST_ACK</strong>状态，等待客户端确认。</p><p><strong>第四次挥手</strong></p><p>客户端在收到服务器的释放连接报文后，会发送确认报文，ACK标识位置为1，ack值为服务器发送的序列号w+1，</p><p>自己的序列号是u+1，然后客户端就进入<strong>TIME_WAIT</strong>状态。此时TCP连接还没有释放，必须经过两个MSL时间（一个MSL指的是报文段最长寿命），当客户端撤销TCB，才进入<strong>CLOSED</strong>状态。</p><p>服务器只要收到客户端发送的确认请求，立即进入<strong>CLOSED</strong>状态。同时会撤销TCB，TCP连接至此结束。</p>',12),H={id:"tcp为什么要四次挥手",tabindex:"-1"},R={class:"header-anchor",href:"#tcp为什么要四次挥手"},B=t("p",null,"关闭连接时，客户端向服务端发送 FIN时，仅仅表示客户端不再发送数据了但是还能接收数据。",-1),O=t("p",null,"服务端收到客户端的FIN报文时，先回一个 ACK 应答报文，而服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送 FIN 报文给客户端来表示同意现在关闭连接。",-1),z={id:"在fin-wait-2状态下-是如何处理收到的乱序到-fin-报文-然后tcp连接又是什么时候才进入到time-wait状态",tabindex:"-1"},j={class:"header-anchor",href:"#在fin-wait-2状态下-是如何处理收到的乱序到-fin-报文-然后tcp连接又是什么时候才进入到time-wait状态"},q=t("p",null,"在FIN_WAIT_2状态时，如果收到乱序的FIN报文会加入到乱序队列，并不会进入到TIME_WAIT状态。等再次收到前面被网络延迟的数据包时，会判断乱序队列有没有数据，检测乱序队列中是否有可用的数据，如果能在乱序队列中找到与当前报文的序列号保持的顺序的报文，就会看该报文是否有FIN标志，如果发现有FIN标志，才会进入TIME_WAIT状态。",-1),V={id:"tcp的四次挥手丢了",tabindex:"-1"},G={class:"header-anchor",href:"#tcp的四次挥手丢了"},Z=t("p",null,[t("strong",null,"第一次丢失"),n("：客户端发送的报文FIN报文收不到服务端的ACK响应，会触发超时重传，重传 FIN 报文，重发次数由内核参数控制。")],-1),J=t("p",null,[t("strong",null,"第二次丢失"),n("：服务端回复的ACK报文发生丢失，客户端会触发超时重传，重传 FIN 报文，直到收到服务端的ACK或者达到最大的重传次数。超过最大重传次数还没收到ACK会等待一段时间，再断开连接。")],-1),Q=t("p",null,[t("strong",null,"第三次丢失"),n("：服务端收到客户端的 FIN 报文后内核会自动回复 ACK，同时连接处于 CLOSE_WAIT 状态。服务端处于 CLOSE_WAIT 状态时，调用了 close 函数，内核会发出 FIN 报文，同时连接进入 LAST_ACK 状态，等待客户端返回 ACK 来确认连接关闭。收不到ACK的话会重发FIN报文直到最大次数为止。")],-1),X=t("p",null,[t("strong",null,"第四次丢失"),n("：最后一次的ACK发生了丢失，服务端没有收到 ACK 报文前是处于 LAST_ACK 状态。超时之后服务端会重传FIN报文，客户端此时是在 TIME_WAIT 状态，开启时长为 2MSL 的定时器，如果途中再次收到第三次挥手（FIN 报文）后，会重置定时器，当等待 2MSL 时长后，客户端会断开连接。")],-1),$={id:"tcp的延迟应答和累计应答",tabindex:"-1"},tt={class:"header-anchor",href:"#tcp的延迟应答和累计应答"},nt=t("p",null,[t("strong",null,"延迟应答"),n("：TCP在接收到对端的报文后并不会立即发送ACK，而是等待一段时间发送ACK，以便将ACK和要发送的数据一块发送。延迟时间不能无限延长，否则对方端会认为丢包超时而造成超时重传。Linux采用动态调节算法来确定等待的时间。")],-1),et=t("p",null,[t("strong",null,"累计应答"),n("：为了保证顺序性，每一个包都有一个"),t("strong",null,"ID"),n("（序号），在建立连接的时候，双方会商定起始的ID是多少，然后按照ID一个个发送。为了保证不丢包，对应发送的包都要进行应答，但不是一个个应答，而是会"),t("strong",null,"应答某个之前的ID"),n("，该模式称为"),t("strong",null,"累计应答。")],-1),st={id:"tcp会有三次挥手出现吗",tabindex:"-1"},lt={class:"header-anchor",href:"#tcp会有三次挥手出现吗"},it=t("p",null,[n("当被动关闭方在TCP挥手过程中，"),t("strong",null,"没有数据要发送"),n("并且开启了"),t("strong",null,"延迟应答"),n("，第二和第三次挥手就会合并传输，这样就出现了三次挥手。")],-1),ot={id:"tcp的msl",tabindex:"-1"},pt={class:"header-anchor",href:"#tcp的msl"},at=t("p",null,[n("MSL是任何报文在网络中被丢弃前的最长存活时间，这个时间是有限的，因为TCP是以IP数据报的形式在网络中传输，IP有限制其生存的时间TTL，"),t("strong",null,"RFC793指出MSL为2分钟，现实中常用30秒或1分钟。")],-1),rt={id:"已经建立了连接-客户端突然出现故障了会怎样",tabindex:"-1"},ct={class:"header-anchor",href:"#已经建立了连接-客户端突然出现故障了会怎样"},ht=t("p",null,"TCP存在保活计时器，如果客户端故障，服务器不会一直等待。通常计时器设置为两小时，在每次收到客户端发来的报文都会重置计时器，超时之后客户端就会发送探测报文，每隔75S发送一次，如果连续10个探测报文都没有收到回复，服务器会认为客户端发生故障，中断此次连接。",-1),dt={id:"什么时候用长连接-短连接",tabindex:"-1"},_t={class:"header-anchor",href:"#什么时候用长连接-短连接"},gt=t("p",null,[n("长连接多用于操作频繁，点对点的通讯，而且连接数不能太多情况。每个TCP连接都需要三步握手，这需要时间，如果每个操作都是先连接，再操作的话那么处理速度会降低很多，所以每个操作完后都不断开，下次处理时直接发送数据包就可以，不用建立TCP连接。"),t("strong",null,"例如：数据库的连接用长连接"),n("。")],-1),Tt=t("p",null,[t("strong",null,"WEB网站的HTTP服务一般都用短链接"),n("，因为长连接对于服务端来说会耗费一定的资源，而WEB网站成千上万客户端的连接用短连接会更省一些资源，如果用长连接，而且同时有成千上万的用户，如果每个用户都占用一个连接的话，所以并发量大，用短链接可以快速释放资源。")],-1),Ct={id:"tcp的半连接队列和全连接队列",tabindex:"-1"},ut={class:"header-anchor",href:"#tcp的半连接队列和全连接队列"},Pt=t("p",null,[t("strong",null,"半连接队列"),n("：也称 SYN 队列，服务端收到客户端发起的 SYN 请求后，"),t("strong",null,"内核会把该连接存储到半连接队列"),n("，并向客户端发SYN+ACK，")],-1),It=t("p",null,[t("strong",null,"全连接队列"),n("：也称 accept 队列，服务端收到第三次握手的 ACK 后，"),t("strong",null,"内核会把连接从半连接队列移除，然后创建新的完全的连接，并将其添加到全连接队列，等待进程调用 accept 函数时把连接取出来。")],-1),At={id:"什么是syn攻击-如何避免",tabindex:"-1"},St={class:"header-anchor",href:"#什么是syn攻击-如何避免"},ft=l('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h4><p>SYN攻击是指利用合理的服务请求来占用过多的服务资源，从而使合法用户无法得到服务的响应。如果向某个服务器端口发送大量的SYN报文，接收到客户端发来的SYN报文之后，服务端就需要为每个请求分配一个进程控制块TCB，并返回一个SYN-ACK报文，并立即转为SYN_RECV半开连接状态，收不到对端ACK回复的服务端还会重传SYN-ACK报文, 系统会为此耗尽资源。</p><h4 id="避免方法" tabindex="-1"><a class="header-anchor" href="#避免方法"><span>避免方法</span></a></h4><p><strong>Cache</strong>：系统在收到一个SYN报文时，在一个专用HASH表中保存这种半连接信息，直到收到正确的回应ACK报文再分配TCB。这个开销远小于TCB的开销。</p><p><strong>Cookie</strong>：利用算法，通过对方的IP、端口、己方IP、端口的固定信息，以及对方无法知道而己方比较固定的一些信息，如MSS(最大报文段大小)、时间等，在收到对方的ACK报文后，重新计算一遍，看其是否与对方回应报文中的（Sequence Number-1）相同，从而决定是否分配TCB资源。</p><p><strong>Proxy防火墙</strong>：设立中间层防火墙，防火墙在确认了连接的有效性后，才向内部的服务器发起SYN请求，所有的无效连接均无法到达内部的服务器。而防火墙采用的验证连接有效性的方法则可以是Cookie或Cathe等其他技术。</p><p><strong>减少SYN+ACK重传次数</strong>：减少 SYN-ACK 的重传次数，以加快处于 SYN_RECV 状态的 TCP 连接断开。</p><p><strong>无效连接监视释放</strong>：不停监视系统的半开连接和不活动连接，当达到一定阈值时拆除这些连接，从而释放系统资源。这种方法对于所有的连接一视同仁，正常连接请求也会被这种方式误释放掉。</p><p><strong>增大半连接队列</strong>：修改TCP的内核参数，增大全连接队列大小。</p><p><strong>调大netdev_max_backlog</strong>：当网卡接收数据包的速度大于内核处理的速度时，会有一个队列保存这些数据包，可以调大队列大小。</p>',10),mt={id:"time-wait作用-过多如何解决",tabindex:"-1"},xt={class:"header-anchor",href:"#time-wait作用-过多如何解决"},Nt=l('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>TCP常用的三个状态是：<strong>ESTABLISHED</strong>表示正在通信，<strong>TIME_WAIT</strong>表示主动关闭，<strong>CLOSE_WAIT</strong>表示被动关闭。</p></div><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h4><p><strong>实现全双工的可靠释放连接</strong></p><p>假设发起主动关闭的一方最后发送的ACK在网络中丢失，由于TCP的重传机制，被动关闭的一方会重新发送FIN报文，在FIN在被主动关闭方接收之前，主动关闭方都需要维护这条连接状态，包括对应的IP地址和端口号。如果发送方不维护TIME_WAIT状态，那么当FIN到达主动关闭方的时候，主动关闭放会发送RST包来响应，被动关闭方就会认为有错误发生。</p><p><strong>为使旧的数据包在网络因过期而消失</strong></p><p>如果不存在TIME_WAIT状态，当前的一个TCP四元组因为某些原因关闭之后，假设有一个新的相同的四元组建立了TCP连接，因为TCP连接是由四元组唯一标识的，所以没法区分新旧连接。旧的已经关闭的TCP连接发送的数据到达接受方之后，会被当作正常数据而向上传输，从而导致数据错乱。有了TIME_WAIT状态之后，可以使旧TCP产生的数据包全部在网路中消亡。</p><h4 id="危害" tabindex="-1"><a class="header-anchor" href="#危害"><span>危害</span></a></h4><ul><li>占用系统资源，比如文件描述符、内存资源、CPU 资源、线程资源等</li><li>占用端口资源，端口资源也是有限的，一般可以开启的端口为 32768～61000，也可以通过 net.ipv4.ip_local_port_range参数指定范围</li></ul><h4 id="避免方法-1" tabindex="-1"><a class="header-anchor" href="#避免方法-1"><span>避免方法</span></a></h4><ul><li><p>修改短连接为长连接</p></li><li><p>扩大可使用端口号的范围</p></li><li><p>客户端机器打开tcp_tw_reuse和tcp_timestamps选项</p></li></ul><p>tcp_tw_reuse调用 connect() 函数时，内核会随机找一个 time_wait 状态超过 1 秒的连接给新的连接复。复用连接之后需要更新timestamps参数，当旧的TCP数据包到达时，根据时间戳判断是旧连接的数据可以舍弃。</p><ul><li>客户端机器打开tcp_tw_recycle和tcp_timestamps选项</li></ul><p>当开启之后内核会快速回收TIME_WAIT状态的连接，时间是一个RTO，远小于两个MSL。在启用该配置，当连接进入TIME_WAIT状态后，内核里会记录包括该连接对应五元组的一些统计数据，包括从该对方IP所接收到的最近的一次数据包时间。当有新的数据包到达，只要时间晚于内核记录的这个时间，数据包都会被统统的丢掉。</p><ul><li>缩小net.ipv4.tcp_max_tw_buckets</li></ul><p>当系统中处于 TIME_WAIT 的连接一旦超过这个值时，系统就会将后面的 TIME_WAIT 连接状态重置。</p><ul><li>程序中使用 SO_LINGER</li></ul><p>那么调用close后，会立该发送一个RST标志给对端，该 TCP 连接将跳过四次挥手，也就跳过了TIME_WAIT状态，直接关闭。</p><h3 id="time-wait状态为什么需要经过2msl" tabindex="-1"><a class="header-anchor" href="#time-wait状态为什么需要经过2msl"><span>TIME_WAIT状态为什么需要经过2MSL？</span></a></h3><p>因为客户端最后一个发送的ACK有可能丢失。假如服务器没有收到客户端发送的最后一个ACK，就会重新发送FIN报文，为了确保服务器收到了FIN报文，客户端在TIME_WAIT状态需要经过2MSL，在这个期间客户端收到重发的FIN报文就会重新发送ACK并且重设计时器。MSL指一个片段在网络中最大的存活时间，2MSL就是一个发送和一个回复所需的最大时间。第一个MSL是保证最后一次挥手客户端响应服务端的ACK到达了服务端。第二个MSL是保证服务端没有重发新的报文给客户端，没有超时重传。</p><p>如果客户端直接关闭，然后向服务器建立新连接，如果新连接和老连接的端口是一样的。假设老连接还有一些数据，因为网络或者其他原因，一直滞留没有发送成功，新连接建立后，就直接发送到新连接里面去了，造成数据的紊乱，因此，需要等到2MSL，让滞留在网络中的报文失效，再去建立新的连接。</p><p><code>2MSL</code> 的时间是从<strong>客户端接收到 FIN 后发送 ACK 开始计时的</strong>。如果在 TIME-WAIT 时间内，因为客户端的 ACK 没有传输到服务端，客户端又接收到了服务端重发的 FIN 报文，那么 <strong>2MSL 时间将重新计时</strong></p>',21),Kt={id:"close-wait状态过多如何解决",tabindex:"-1"},bt={class:"header-anchor",href:"#close-wait状态过多如何解决"},kt=t("p",null,"如果一直保持在CLOSE_WAIT状态，原因是在对方关闭连接之后服务器程序自己没有进一步发出ACK信号。",-1),wt=t("p",null,"CLOSE_WAIT的解决办法是：",-1),vt=t("ul",null,[t("li",null,"查代码。因为问题出在服务器程序。")],-1),Mt={id:"tcp和udp的区别",tabindex:"-1"},yt={class:"header-anchor",href:"#tcp和udp的区别"},Et=t("ul",null,[t("li",null,"TCP是面向连接的。在通信之前需要三次握手建立连接，通信之后断开连接时需要四次挥手；UDP不需要进行连接建立。"),t("li",null,"TCP是可靠传输服务。通过TCP传输数据可以保证数据无差错、不丢失、不重复；UDP尽最大努力交付，不保证可靠交付。"),t("li",null,"每个TCP对应的是点对点的连接；UDP支持一对一、一对多、多对一、多对多等多种方式的通讯。"),t("li",null,"UDP对系统资源要求较少，通讯效率高，实时性好，应用于高速传输并且对实时性有要求的通信；TCP适合需要可靠连接，比如付费、加密数据等等方向都需要依靠TCP。"),t("li",null,"TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字段时是 20 个字节，如果使用了「选项」字段则会变长的；UDP 首部只有 8 个字节，并且是固定不变的。"),t("li",null,"TCP 是流式传输，没有边界，但保证顺序和可靠。UDP 是一个包一个包的发送，是有边界的，可能会丢包和乱序。"),t("li",null,"TCP 的数据大小如果大于 MSS 大小，则会在传输层进行分片，目标主机收到后，也同样在传输层组装 TCP 数据包，如果中途丢失了一个分片，只需要传输丢失的这个分片。UDP 的数据大小如果大于 MTU 大小，则会在 IP 层进行分片，目标主机收到后，在 IP 层组装完数据，接着再传给传输层。"),t("li",null,"应用场景：TCP用于FTP文件传输，HTTP / HTTPS；UDP用于包总量较少的通信，如 DNS、SNMP 等，视频、音频等多媒体通信，广播通信。")],-1),Lt={id:"粘包和拆包问题的解决办法",tabindex:"-1"},Wt={class:"header-anchor",href:"#粘包和拆包问题的解决办法"},Ft=t("h4",{id:"概念-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#概念-1"},[t("span",null,"概念")])],-1),Yt=t("ul",null,[t("li",null,"TCP的特点之一就是面向字节流的，也就是说传输时候数据像“水流一样”，是没有边界的，因此拆包这个功能本身就不在TCP来完成。"),t("li",null,"所谓的粘包拆包就是TCP流的特性导致的，而且根本不能说是问题，拆包本身就应该在应用层来完成。")],-1),Dt=t("h4",{id:"解决办法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#解决办法"},[t("span",null,"解决办法")])],-1),Ut=t("ul",null,[t("li",null,"遇到这个面试题，作者个人认为是面试官基础不扎实才会问出来，就直接怼它。")],-1),Ht={id:"tcp的keepalive和http的-keepalive-的区别",tabindex:"-1"},Rt={class:"header-anchor",href:"#tcp的keepalive和http的-keepalive-的区别"},Bt=t("ul",null,[t("li",null,[n("HTTP 的 Keep-Alive，是由**应用层（用户态）"),t("strong",null,"实现的，称为 HTTP 长连接；TCP 的 Keepalive，是由"),n("TCP层（内核态）**实现的，称为 TCP 保活机制。")]),t("li",null,[n("HTTP Keep-Alive是指使用同一个 TCP 连接来发送和接收多个 HTTP 请求/应答，好处是避免了连接建立和释放的开销，只要任意一端没有明确提出断开连接，就保持 TCP 连接状态；TCP Keepalive是指建立TCP连接的两端一直没有数据交互达到触发 TCP 保活机制的条件，内核里的 TCP 协议栈就会发送探测报文，如果对端程序正常工作，收到探测报文之后就会回复响应，同时保活时间重置，如果对端主机崩溃没有响应或者网络原因报文不可达，连续几次探测报文之后"),t("strong",null,"TCP 会报告该 TCP 连接已经死亡"),n("。")]),t("li",null,[n("web 服务软件一般都会提供 keepalive_timeout 参数来指定 HTTP 长连接的超时时间。例如设置了 HTTP 长连接的超时时间是 60 秒，web 服务软件就会"),t("strong",null,"启动一个定时器"),n("，如果客户端在完成一个 HTTP 请求后，在 60 秒内都没有再发起新的请求，"),t("strong",null,"定时器的时间一到，就会触发回调函数来释放该连接。")])],-1),Ot={id:"ip层会分片-为什么tcp层还需要mss呢",tabindex:"-1"},zt={class:"header-anchor",href:"#ip层会分片-为什么tcp层还需要mss呢"},jt=t("ul",null,[t("li",null,"MTU：一个网络包的最大长度，以太网中一般为 1500 字节；"),t("li",null,"MSS：除去 IP 和 TCP 头部之后，一个网络包所能容纳的 TCP 数据的最大长度；")],-1),qt=t("p",null,"如果交给IP来进行分片，一个 IP 分片丢失，整个 IP 报文的所有分片都得重传。因为 IP 层本身没有超时重传机制，它由传输层的 TCP 来负责超时和重传。当某一个 IP 分片丢失后，接收方的 IP 层就无法组装成一个完整的 TCP 报文（头部 + 数据），也就无法将数据报文送到 TCP 层，所以接收方不会响应 ACK 给发送方，因为发送方迟迟收不到 ACK 确认报文，所以会触发超时重传，就会重发整个 TCP 报文（头部 + 数据）。",-1);function Vt(Gt,Zt){const e=o("Badge");return p(),a("div",null,[t("h3",c,[t("a",h,[t("span",null,[n("TCP的头部结构？"),s(e,{text:"掌握",type:"tip"})])])]),d,t("h3",_,[t("a",g,[t("span",null,[n("TCP如何保证可靠传输? "),s(e,{type:"danger",text:"重要",vertical:"bottom"})])])]),T,t("h3",C,[t("a",u,[t("span",null,[n("TCP的三次握手？"),s(e,{text:"重要",type:"danger"})])])]),P,t("h3",I,[t("a",A,[t("span",null,[n("TCP为什么要三次握手？"),s(e,{text:"重要",type:"danger"})])])]),S,f,m,x,N,t("h3",K,[t("a",b,[t("span",null,[n("TCP的三次握手丢了？"),s(e,{text:"重要",type:"danger"})])])]),k,t("h3",w,[t("a",v,[t("span",null,[n("TCP为什么不是两次握手？"),s(e,{text:"重要",type:"danger"})])])]),M,y,E,L,W,F,t("h3",Y,[t("a",D,[t("span",null,[n("TCP的四次挥手？"),s(e,{text:"重要",type:"danger"})])])]),U,t("h3",H,[t("a",R,[t("span",null,[n("TCP为什么要四次挥手？"),s(e,{text:"掌握",type:"tip"})])])]),B,O,t("h3",z,[t("a",j,[t("span",null,[n("在FIN_WAIT_2状态下，是如何处理收到的乱序到 FIN 报文，然后TCP连接又是什么时候才进入到TIME_WAIT状态？"),s(e,{text:"了解",type:"info"})])])]),q,t("h3",V,[t("a",G,[t("span",null,[n("TCP的四次挥手丢了？"),s(e,{text:"掌握",type:"tip"})])])]),Z,J,Q,X,t("h3",$,[t("a",tt,[t("span",null,[n("TCP的延迟应答和累计应答？"),s(e,{text:"掌握",type:"tip"})])])]),nt,et,t("h3",st,[t("a",lt,[t("span",null,[n("TCP会有三次挥手出现吗？"),s(e,{text:"了解",type:"info"})])])]),it,t("h3",ot,[t("a",pt,[t("span",null,[n("TCP的MSL？"),s(e,{text:"了解",type:"info"})])])]),at,t("h3",rt,[t("a",ct,[t("span",null,[n("已经建立了连接，客户端突然出现故障了会怎样？"),s(e,{text:"掌握",type:"tip"})])])]),ht,t("h3",dt,[t("a",_t,[t("span",null,[n("什么时候用长连接，短连接？"),s(e,{text:"掌握",type:"tip"})])])]),gt,Tt,t("h3",Ct,[t("a",ut,[t("span",null,[n("TCP的半连接队列和全连接队列？"),s(e,{text:"掌握",type:"tip"})])])]),Pt,It,t("h3",At,[t("a",St,[t("span",null,[n("什么是SYN攻击？如何避免？"),s(e,{text:"重要",type:"danger"})])])]),ft,t("h3",mt,[t("a",xt,[t("span",null,[n("TIME_WAIT作用，过多如何解决？"),s(e,{text:"重要",type:"danger"})])])]),Nt,t("h3",Kt,[t("a",bt,[t("span",null,[n("CLOSE_WAIT状态过多如何解决？"),s(e,{text:"了解",type:"info"})])])]),kt,wt,vt,t("h3",Mt,[t("a",yt,[t("span",null,[n("TCP和UDP的区别？"),s(e,{text:"重要",type:"danger"})])])]),Et,t("h3",Lt,[t("a",Wt,[t("span",null,[n("粘包和拆包问题的解决办法？"),s(e,{text:"掌握",type:"tip"})])])]),Ft,Yt,Dt,Ut,t("h3",Ht,[t("a",Rt,[t("span",null,[n("TCP的keepalive和HTTP的 keepalive 的区别？"),s(e,{text:"掌握",type:"tip"})])])]),Bt,t("h3",Ot,[t("a",zt,[t("span",null,[n("IP层会分片，为什么TCP层还需要MSS呢？"),s(e,{text:"了解",type:"info"})])])]),jt,qt])}const Xt=i(r,[["render",Vt],["__file","tcp.html.vue"]]),$t=JSON.parse('{"path":"/notes/Specialized_knowledge/network/tcp.html","title":"TCP与UDP面试常见题","lang":"zh-CN","frontmatter":{"title":"TCP与UDP面试常见题","date":"2024-04-01T00:00:00.000Z","description":"TCP的头部结构？ 源端口：16位，标识报文的返回地址。 目的端口：16位，指明接收方计算机上的应用程序接口。 序列号：32位，在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就累加一次该数据字节数的大小。用来解决网络包乱序问题。 确认号：32位，指下一次期望收到的数据的序列号，发送端收到这个确认应答以后可...","head":[["meta",{"property":"og:url","content":"http://ek0wraith.top/notes/Specialized_knowledge/network/tcp.html"}],["meta",{"property":"og:site_name","content":"Ek0wraith"}],["meta",{"property":"og:title","content":"TCP与UDP面试常见题"}],["meta",{"property":"og:description","content":"TCP的头部结构？ 源端口：16位，标识报文的返回地址。 目的端口：16位，指明接收方计算机上的应用程序接口。 序列号：32位，在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就累加一次该数据字节数的大小。用来解决网络包乱序问题。 确认号：32位，指下一次期望收到的数据的序列号，发送端收到这个确认应答以后可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.imgdb.cn/item/63e5c4ca4757feff33a85537.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Ek0wraith"}],["meta",{"property":"article:published_time","content":"2024-04-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP与UDP面试常见题\\",\\"image\\":[\\"https://pic.imgdb.cn/item/63e5c4ca4757feff33a85537.jpg\\",\\"https://pic.imgdb.cn/item/63e19a374757feff33718597.jpg\\"],\\"datePublished\\":\\"2024-04-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ek0wraith\\",\\"url\\":\\"http://ek0wraith.top/\\"}]}"]]},"headers":[{"level":3,"title":"TCP的头部结构？","slug":"tcp的头部结构","link":"#tcp的头部结构","children":[]},{"level":3,"title":"TCP如何保证可靠传输?","slug":"tcp如何保证可靠传输","link":"#tcp如何保证可靠传输","children":[]},{"level":3,"title":"TCP的三次握手？","slug":"tcp的三次握手","link":"#tcp的三次握手","children":[]},{"level":3,"title":"TCP为什么要三次握手？","slug":"tcp为什么要三次握手","link":"#tcp为什么要三次握手","children":[]},{"level":3,"title":"TCP的三次握手丢了？","slug":"tcp的三次握手丢了","link":"#tcp的三次握手丢了","children":[]},{"level":3,"title":"TCP为什么不是两次握手？","slug":"tcp为什么不是两次握手","link":"#tcp为什么不是两次握手","children":[]},{"level":3,"title":"TCP的四次挥手？","slug":"tcp的四次挥手","link":"#tcp的四次挥手","children":[]},{"level":3,"title":"TCP为什么要四次挥手？","slug":"tcp为什么要四次挥手","link":"#tcp为什么要四次挥手","children":[]},{"level":3,"title":"在FIN_WAIT_2状态下，是如何处理收到的乱序到 FIN 报文，然后TCP连接又是什么时候才进入到TIME_WAIT状态？","slug":"在fin-wait-2状态下-是如何处理收到的乱序到-fin-报文-然后tcp连接又是什么时候才进入到time-wait状态","link":"#在fin-wait-2状态下-是如何处理收到的乱序到-fin-报文-然后tcp连接又是什么时候才进入到time-wait状态","children":[]},{"level":3,"title":"TCP的四次挥手丢了？","slug":"tcp的四次挥手丢了","link":"#tcp的四次挥手丢了","children":[]},{"level":3,"title":"TCP的延迟应答和累计应答？","slug":"tcp的延迟应答和累计应答","link":"#tcp的延迟应答和累计应答","children":[]},{"level":3,"title":"TCP会有三次挥手出现吗？","slug":"tcp会有三次挥手出现吗","link":"#tcp会有三次挥手出现吗","children":[]},{"level":3,"title":"TCP的MSL？","slug":"tcp的msl","link":"#tcp的msl","children":[]},{"level":3,"title":"已经建立了连接，客户端突然出现故障了会怎样？","slug":"已经建立了连接-客户端突然出现故障了会怎样","link":"#已经建立了连接-客户端突然出现故障了会怎样","children":[]},{"level":3,"title":"什么时候用长连接，短连接？","slug":"什么时候用长连接-短连接","link":"#什么时候用长连接-短连接","children":[]},{"level":3,"title":"TCP的半连接队列和全连接队列？","slug":"tcp的半连接队列和全连接队列","link":"#tcp的半连接队列和全连接队列","children":[]},{"level":3,"title":"什么是SYN攻击？如何避免？","slug":"什么是syn攻击-如何避免","link":"#什么是syn攻击-如何避免","children":[]},{"level":3,"title":"TIME_WAIT作用，过多如何解决？","slug":"time-wait作用-过多如何解决","link":"#time-wait作用-过多如何解决","children":[]},{"level":3,"title":"TIME_WAIT状态为什么需要经过2MSL？","slug":"time-wait状态为什么需要经过2msl","link":"#time-wait状态为什么需要经过2msl","children":[]},{"level":3,"title":"CLOSE_WAIT状态过多如何解决？","slug":"close-wait状态过多如何解决","link":"#close-wait状态过多如何解决","children":[]},{"level":3,"title":"TCP和UDP的区别？","slug":"tcp和udp的区别","link":"#tcp和udp的区别","children":[]},{"level":3,"title":"粘包和拆包问题的解决办法？","slug":"粘包和拆包问题的解决办法","link":"#粘包和拆包问题的解决办法","children":[]},{"level":3,"title":"TCP的keepalive和HTTP的 keepalive 的区别？","slug":"tcp的keepalive和http的-keepalive-的区别","link":"#tcp的keepalive和http的-keepalive-的区别","children":[]},{"level":3,"title":"IP层会分片，为什么TCP层还需要MSS呢？","slug":"ip层会分片-为什么tcp层还需要mss呢","link":"#ip层会分片-为什么tcp层还需要mss呢","children":[]}],"git":{},"readingTime":{"minutes":28.41,"words":8524},"filePathRelative":"notes/Specialized_knowledge/network/tcp.md","localizedDate":"2024年4月1日","excerpt":"<h3>TCP的头部结构？</h3>\\n<figure><img src=\\"https://pic.imgdb.cn/item/63e5c4ca4757feff33a85537.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ul>\\n<li>\\n<p><strong>源端口</strong>：16位，标识报文的返回地址。</p>\\n</li>\\n<li>\\n<p><strong>目的端口</strong>：16位，指明接收方计算机上的应用程序接口。</p>\\n</li>\\n<li>\\n<p><strong>序列号</strong>：32位，在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就<strong>累加</strong>一次该<strong>数据字节数</strong>的大小。用来解决网络包乱序问题。</p>\\n</li>\\n<li>\\n<p><strong>确认号</strong>：32位，指下一次<strong>期望</strong>收到的数据的序列号，发送端收到这个确认应答以后可以认为在这个序号以前的数据都已经被正常接收。用来解决丢包的问题。</p>\\n</li>\\n<li>\\n<p><strong>数据偏移／首部长度</strong>：4位，TCP首部可能含有可选项内容，所以TCP报头的长度是不确定的，报头不包含任何任选字段则长度为20字节，4位首部长度字段所能表示最大长度为60字节。首部长度也叫数据偏移，因为首部长度实际上指示了数据区在报文段中的起始偏移值。</p>\\n</li>\\n<li>\\n<p><strong>保留</strong>：6位，为将来定义新的用途保留，现在一般置0。</p>\\n</li>\\n<li>\\n<p><strong>校验和</strong>：16位，由发送端填充，接收端对TCP报文段执行CRC算法以检验TCP报文段在传输过程中是否损坏，这个校验不仅包括TCP头部，也包括数据部分。<strong>这是TCP实现可靠传输的一个重要保障</strong>。</p>\\n</li>\\n<li>\\n<p><strong>窗口</strong>：16位，是TCP流量控制的一个手段。通过窗口告诉对方本端的TCP接收缓冲区还能容纳多少字节的数据，这样对方可以控制发送数据的速度，从而达到流量控制。窗口大小为16bit字段，因而窗口大小最大为65535。</p>\\n</li>\\n<li>\\n<p><strong>紧急指针</strong>：16位，只有当 URG 标志置 1 时紧急指针才有效。紧急指针是一个正的偏移量，和顺序号字段中的值相加表示紧急数据最后一个字节的序号。使用紧急指针是发送端向另一端发送紧急数据的一种方式。</p>\\n</li>\\n<li>\\n<p><strong>选项和填充</strong>：TCP头部的最后一个选项字段是可变长的可选信息。这部分最多包含40字节，因为TCP头部最长是60字节。\\n最常见的可选字段是最长报文大小MSS，每个连接方通常都在通信的第一个报文段中指明这个选项，它表示本端所能接受的最大报文段的长度。</p>\\n</li>\\n<li>\\n<p><strong>数据部分</strong>：TCP 报文段中的数据部分是可选的。在连接建立或者终止时，双方交换的报文段仅有 TCP 首部；如果一方没有数据要发送，也会使用没有任何数据的首部来确认收到的数据；在处理超时的许多情况中，也会发送不带任何数据的报文段。</p>\\n</li>\\n</ul>","autoDesc":true}');export{Xt as comp,$t as data};
