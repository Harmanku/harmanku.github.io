var t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;t>e?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-50px",t=e};const r=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&o.target.classList.add("puff-in-center")})});document.querySelectorAll(".onScroll").forEach(e=>{r.observe(e)});
