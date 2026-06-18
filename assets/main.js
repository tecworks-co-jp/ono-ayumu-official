/* 小野歩 オフィシャルサイト（案） 共通スクリプト */
(function () {
  "use strict";

  /* --- モバイルナビ開閉 --- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links && nav) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- ヘッダーの影（スクロール） --- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- スクロールで要素をフェードイン --- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- 現在地ナビハイライト（1ページ構成のスクロール連動） --- */
  var spyTargets = [];
  Array.prototype.forEach.call(document.querySelectorAll('.nav-links a[href^="#"]'), function (a) {
    var id = a.getAttribute("href");
    if (id.length < 2) { return; }
    var el = document.querySelector(id);
    if (el) { spyTargets.push({ link: a, el: el }); }
  });
  if (spyTargets.length) {
    var spy = function () {
      var current = spyTargets[0];
      spyTargets.forEach(function (t) {
        if (t.el.getBoundingClientRect().top <= 120) { current = t; }
      });
      spyTargets.forEach(function (t) { t.link.classList.remove("is-active"); });
      current.link.classList.add("is-active");
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
  }

  /* --- フッターの年号 --- */
  var yr = document.querySelector("[data-year]");
  if (yr) { yr.textContent = new Date().getFullYear(); }

  /* --- 問い合わせフォーム（プロトタイプ用ダミー送信） --- */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = document.querySelector("#form-done");
      if (done) { done.hidden = false; done.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
    });
  }
})();
