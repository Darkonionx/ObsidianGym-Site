// Zeigt Deutsch fuer deutschsprachige Browser, sonst Englisch. Umschalten per Link.
(function(){
  var q=new URLSearchParams(location.search).get('lang');
  var lang=q||((navigator.language||'en').toLowerCase().indexOf('de')===0?'de':'en');
  function show(l){
    document.documentElement.lang=l;
    document.querySelectorAll('section[lang]').forEach(function(s){s.classList.toggle('hidden',s.getAttribute('lang')!==l)});
    document.querySelectorAll('.lang a').forEach(function(a){a.classList.toggle('active',a.dataset.l===l)});
  }
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.lang a').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();show(a.dataset.l)})});
    show(lang);
  });
})();
