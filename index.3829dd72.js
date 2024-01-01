var e=new IntersectionObserver(function(e){e.forEach(function(e){e.target.classList.toggle("show",e.isIntersecting)})}),n=function(n){return document.querySelectorAll(n).forEach(function(n){e.observe(n)})};n(".hidden-left"),n(".hidden");
//# sourceMappingURL=index.3829dd72.js.map
