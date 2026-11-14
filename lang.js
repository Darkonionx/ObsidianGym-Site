// Sprache VOR dem ersten Zeichnen festlegen (kein Flackern):
// ?lang=de|en hat Vorrang, sonst Browsersprache (de -> Deutsch, alles andere -> Englisch).
(function () {
  var root = document.documentElement;
  var q = new URLSearchParams(location.search).get('lang');
  var lang = (q === 'de' || q === 'en') ? q
    : ((navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en');
  root.setAttribute('data-lang', lang);
  root.lang = lang;
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.lang a[data-l]');
    if (!a) return;
    e.preventDefault();
    var l = a.getAttribute('data-l');
    root.setAttribute('data-lang', l);
    root.lang = l;
    var u = new URL(location.href); u.searchParams.set('lang', l);
    history.replaceState(null, '', u);
  });
})();
