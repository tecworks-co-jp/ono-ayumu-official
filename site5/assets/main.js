/* 小野歩 OFFICIAL SITE 案5 */
(function () {
  "use strict";

  /* PAGE TOP ボタン（ヒーローを過ぎたら表示） */
  var pagetop = document.querySelector(".pagetop");
  var hero = document.querySelector("#hero");
  if (pagetop && hero) {
    var onScroll = function () {
      pagetop.classList.toggle("is-show", window.scrollY > hero.offsetHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* お問い合わせ：ボタンを押すとフォームを開く（JS無効時はフォームを常時表示） */
  var openBtn = document.querySelector("#contact-open");
  var form = document.querySelector("#contact-form");
  if (openBtn && form) {
    form.hidden = true;
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      form.hidden = false;
      openBtn.parentNode.hidden = true;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      var first = form.querySelector("input");
      if (first) { setTimeout(function () { first.focus({ preventScroll: true }); }, 400); }
    });
  }

  /* 問い合わせフォーム（プロトタイプ用ダミー送信） */
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = document.querySelector("#form-done");
      if (done) { done.hidden = false; }
      form.reset();
    });
  }
})();
