Node.js

Node.js 不是一种语言，是使用JavaScript进行服务器端应用程序开发的运行环境
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，
一个让 JavaScript 运行在服务端的开发平台，它让JavaScript成为与PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。

Node.js 可提供实现用JavaScript编写的程序所需的一切
Node.js使JavaScript可以独立运行在机器上，从而扩大了JavaScript的范围
类似于Python语言，可以做各种事情
Node.js 可以用于桌面应用程序开发（Windows，Linux和Mac），移动应用程序开发（混合和跨平台应用程序），甚至构建基于控制台的应用程序

Node.js 提供了一种现代的开发方式，使用和客户端开发一样的语法同时支持 HTML5 变革式的特征，比如网络套接字和服务端发送事件。


    Node.js 可以生成动态页面内容

    Node.js 可以在服务器上创建，打开，读取，写入，删除和关闭文件

    Node.js 可以收集表单数据

    Node.js 可以添加，删除，修改数据库中的数据
    
    Node.js 为了充分发挥服务器的处理能力，在运行环境级别上增加了对于多线程的支持

因为js是单线程语言，回调函数并不是立刻被执行的，而是会被送入任务队列，在线程空闲、并且队列前方没有其他任务的情况下，才会被执行
用户在向服务器提交请求时，如果处理比较费时，传统的服务器端框架会导致处理线程被阻塞
而js的特性使得异步任务在执行的时候让出线程的控制权，在处理完成后再进行正确的回调，从而能够获得比较好的高并发处理能力


与PHP比较：
PHP 是一种语言，而Node.js 是一种框架
两者都是开放源码，都是致力于web开发，并且都可用于相似的项目
PHP 和 Node.js 都可以管理任何复杂的Web应用程序，但是它们是用不同的体系结构和概念构建的

如果想要良好的数据库集成，那么PHP是理想选择
如果要设计交互式用户界面，则应该使用Node.js

PHP：
-- 适用于WAMP，MAMP和LAMP等软件堆栈
-- 适用于Drupal，WordPress，Joomla等内容管理系统
-- 适用于SQL，MySQL，Oracle等服务器
-- 由安装在web服务器（Apache、Ngix）上的组件运行的
-- PHP代码可以和HTML混合到一块

Node.js：
-- 单页动态Web应用程序（SPA）
-- 与软件堆栈（如MEAN堆栈）一起使用
-- 使用服务器端技术，例如Express.js, Node.js, MongoDB等
-- 与Angular.js, jQuery, React.js 等前端技术一起使用
-- Node.js 内置了处理网络请求和响应的函数库，所以不需要单独的服务器（Apache、Ngix）或者其他依赖


与Node.js 中的编程相比，PHP中的编程要容易得多。
PHP 中的编程风格更简单，不需要任何编译器或转换器，也没有托管限制，并且在PHP中使用SQL进行整个设置非常简单
当遇到诸如正常数据提取要求之类的小用例时，PHP可以快速启动并在短时间内使应用程序运行

而Node.js 非常复杂
在Node.js 中部署框架和应用程序并不容易，并且需要精心准备好服务器基础架构
PHP可与MySQL数据库完美配合，同时为PostgreSQL和MariaDB等多种数据库形式提供类似的支持
Node.js 包含用于访问SQL的各种库。此外，它使用JSON附加到NoSQL数据库
也可以在JSON的帮助下配置PHP，但是最好使用Node，因为对于服务器和浏览器来说只有一个代码

PHP几乎可以在任何要运行Node的服务器上运行
要运行Node，需要一台具有ssh访问权限的虚拟机

Node.js 依赖关系较少，用几行代码就可以设置一个 Web 服务器。
但运行 PHP 应用程序，就需要外部服务器软件。
用 Node.js 的开发人员只需要 NPM（节点包管理器）就可以下载 Node 模块，这些模块可以轻松地集成到应用程序中，提供额外的功能

性能方面：
PHP 很勤快，有很多项目跟选项可以使它跑得更快
但 Node.js 性能通常更好一些
性能很大程度上决定于开发团队的经验以及是否上心， 但是 Node.js 还是有如下几条优势的：

  -- 更少的依赖： 所有对 PHP 应用的请求都必须经过一个 WEB 服务器的路由，来启动 PHP 的解释器运行 PHP 代码
                 Node.js 不需要这些依赖， 而且你基本一定会使用一个带服务器的框架，像 Express，他很轻量，很好的扮演你应用的一部分

  -- 更小更快的解释器： Node.js 的解释器比 PHP 的更小更灵活。 
                      他并不受旧版语言遗留兼容问题的拖累，而且 Google 在 V8 引擎性能改善上出了大力

  -- 应用永久在线： PHP 遵循标准客户端-服务端模型。 每个页面请求都会初始化应用; 读取配置参数、连接数据库、读取信息、渲染 HTML
                   Node.js 应用持久运行，只需要启动一次。例如可以创建一个单独数据连接对象，然后所求请求一起复用。
                   公认的，PHP 也有一些途径来实现，比如使用 Memcached ，但是这已经不是语言的标准特性了。
                   
  -- 事件驱动，无阻塞 I/O： PHP 跟其他多数服务端语言采用阻塞执行的模型。 
                          当你执行一个命令，比如从数据库取数据，那么必须等这个指令执行完成后，才会执行下面的内容。 
                          Node.js 通常不会等。 取而代之的是， 你需要提供一个回调函数，这个函数当指令执行完后会被调用一次


Node.js 与 AngularJS 的联合是开发单页应用程序的完美方案 
  -- Single Page Application: Web 应用程序在初始客户端请求时加载，之后根据客户端请求刷新的网页的特定部分

Node.js 和 PHP是相辅相成的，因为这两种技术都有各自的优点和缺点。
Node.js 有前途，并且肯定会占据PHP市场的一部分，但是不能完全取代 PHP
















