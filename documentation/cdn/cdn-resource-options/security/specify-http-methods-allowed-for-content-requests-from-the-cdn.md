---
title: specify-http-methods-allowed-for-content-requests-from-the-cdn
displayName: Specify HTTP methods
published: true
order: 40
toc:
---
# Specify HTTP methods allowed for content requests from the CDN

You can choose HTTP methods for your CDN content. By default the following methods are allowed: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS. To manage allowed HTTP method navigate to CDN Resources, click Settings of the Resource, open Advanced Settings. Find the Specify HTTP Methods option and select needed ones.

By specifying necessary request methods you block all the others. The most used methods are GET, HEAD and POST, so we suggest you allowing at least them. In case some methods are not allowed to the user, they will get the 405 (Method Not Allowed) response. If the method is not supported by your server, the user gets the 501 (Not Implemented) response.  

<img src="https://support.gcore.com/hc/article_attachments/115011430745/Screenshot-2018-1-3_G-Core_Labs_Resources_Settings_8_.png" alt="" width="70%">