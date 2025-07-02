---
layout: page
title: Concurrent Proxy Server
description: Web proxy that forwards multiple requests in parallel
img: ProxyConcept.png
importance: 3
category: work
related_publications: false
---

Developed a web proxy that forwards requests between a browser and server using sockets, with two implementations: a multithread and a multi-process implementation for each new connection request. Created logging features for the proxy, with synchronization primitives and thread safety to prevent corruption. Implemented HTTPS tunneling to allow for CONNECT requests to relay data without interpreting encrypted data, and ensured proper termination when a connection closes or the tunnel is idle.

Project Link: [https://github.com/jeremywhui/Concurrent-Proxy-Server](https://github.com/jeremywhui/Concurrent-Proxy-Server)
