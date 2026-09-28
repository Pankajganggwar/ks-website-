(function(){
  var d=document,b=d.body,PHONE='919650346244';
  var bar=d.createElement('div');bar.className='scroll-prog';b.appendChild(bar);
  var fab=d.createElement('div');fab.className='fab-wrap';
  fab.innerHTML='<a class="fab fab-wa" href="https://wa.me/'+PHONE+'?text=Hi%20KS%20Workforce%20Solutions%2C%20I%27d%20like%20to%20know%20more." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg><span>WhatsApp</span></a>'+
   '<a class="fab fab-call" href="tel:+'+PHONE+'" aria-label="Call us"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg><span>Call</span></a>'+
   '<button class="fab fab-top" aria-label="Back to top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>';
  b.appendChild(fab);
  var top=fab.querySelector('.fab-top');top.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
  function onScroll(){var h=d.documentElement,max=h.scrollHeight-h.clientHeight,y=h.scrollTop||b.scrollTop;
    bar.style.transform='scaleX('+(max>0?y/max:0)+')';top.classList.toggle('show',y>600);
    var n=d.querySelector('.nav');if(n)n.classList.toggle('nav-scrolled',y>10);}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  // auto-reveal cards on every page (only if IntersectionObserver available)
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    var els=d.querySelectorAll('.div-card,.ind-card,.why-item,.proc-step,.naps-card,.pillar,.sec-hd');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
    els.forEach(function(el,i){if(el.classList.contains('reveal'))return;el.classList.add('auto-reveal');el.style.transitionDelay=((i%4)*70)+'ms';io.observe(el);});
  }
})();
