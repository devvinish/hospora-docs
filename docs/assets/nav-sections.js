// The sections of every page under that page in the left menu, always shown (the list comes from
// assets/sections.json, written by hooks.py when the site is built).
(function () {
  var base = new URL('..', document.currentScript.src);
  var sections = fetch(new URL('assets/sections.json', base)).then(function (r) { return r.json(); });

  function list(items, pageHref) {
    var nav = document.createElement('nav');
    nav.className = 'md-nav guide-sections';
    var ul = document.createElement('ul');
    ul.className = 'md-nav__list';
    items.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'md-nav__item';
      var a = document.createElement('a');
      a.className = 'md-nav__link';
      a.href = pageHref + item.url;
      a.textContent = item.title;
      li.appendChild(a);
      if (item.children) {
        li.appendChild(list(item.children, pageHref));
      }
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    return nav;
  }

  function fill(map) {
    document.querySelectorAll('.md-nav--primary a.md-nav__link[href]').forEach(function (a) {
      // not the sections of this menu, nor the theme's own (hidden) list of the open page
      if (a.closest('.guide-sections') || a.closest('.md-nav--secondary')) {
        return;
      }
      var li = a.closest('li');
      if (!li || li.querySelector(':scope > .guide-sections')) {
        return;
      }
      var url = new URL(a.href);
      var key = url.pathname.substring(base.pathname.length);
      var items = map[key];
      if (items && items.length) {
        // right under its own entry: the first page of a chapter carries the chapter's title
        var after = a.closest('.md-nav__container') || a;
        if (after.parentElement === li) {
          after.insertAdjacentElement('afterend', list(items, url.pathname));
        } else {
          li.appendChild(list(items, url.pathname));
        }
      }
    });
  }

  function run() {
    sections.then(fill);
  }
  if (window.document$ && window.document$.subscribe) {
    window.document$.subscribe(run);       // every page, also with instant loading
  } else {
    document.addEventListener('DOMContentLoaded', run);
  }
})();
