# Strip-and-share

Code for the bookmarklet to strip tracking URL params.

<a href="javascript:(function()%7Bfunction%20getParameterByName(name)%20%7B%0A%20%20%20%20var%20match%20%3D%20RegExp('%5B%3F%26%5D'%20%2B%20name%20%2B%20'%3D(%5B%5E%26%5D*)').exec(window.location.search)%3B%0A%20%20%20%20return%20match%20%26%26%20match%5B1%5D%3B%0A%7D%0A%0A%0Aif%20(window.location.hostname.split('.').slice(0%2C%202).join('.')%20%3D%3D%20'www.google')%20%7B%0A%20%20window.prompt(%22Copy%22%2C%20%22https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%22%20%2B%20getParameterByName('q'))%3B%0A%7D%7D)()%3B">Strip and share</a>

