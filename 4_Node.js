Node.js
主要用于服务器端的Javascript运行环境

Node.js 为了充分发挥服务器的处理能力，在运行环境级别上增加了对于多线程的支持

因为js是单线程语言，回调函数并不是立刻被执行的，而是会被送入任务队列，在线程空闲、并且队列前方没有其他任务的情况下，才会被执行
用户在向服务器提交请求时，如果处理比较费时，传统的服务器端框架会导致处理线程被阻塞
而js的特性使得异步任务在执行的时候让出线程的控制权，在处理完成后再进行正确的回调，从而能够获得比较好的高并发处理能力



Express.js
Express.js或简称Express，是针对Node.js的web应用框架
