/* NULL PIT 子页共享 JS — 滚动出现(词典#41) + 返回顶部(#30) + 导航 active(#21) */
(function () {
  "use strict";

  // 导航 active: 当前页链接加 aria-current
  try {
    var path = location.pathname.replace(/\/+$/, "");
    document.querySelectorAll(".nav a.nl").forEach(function (a) {
      var href = a.getAttribute("href").replace(/\/+$/, "");
      if (href === path) a.setAttribute("aria-current", "page");
    });
  } catch (e) {}

  // 滚动出现: 淡入 + 上移 16px, 400-600ms, 尊重 reduced-motion (词典#41)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (els.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.08 });
      els.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
        io.observe(el);
      });
    }
  }

  // 返回顶部 (词典#30): 长页右下角淡入
  var btn = document.querySelector(".top-btn");
  if (btn) {
    var onScroll = function () { btn.classList.toggle("show", window.scrollY > 800); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  }
})();
