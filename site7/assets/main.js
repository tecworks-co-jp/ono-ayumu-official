/* 小野歩 OFFICIAL SITE 案7 */
(function () {
  "use strict";

  /* モバイルメニュー（ハンバーガー） */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector("#mobile-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setMenu(menu.hidden);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* FAQ アコーディオン（同時に開くのは1つ） */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var answer = item.querySelector(".faq-a");
    var icon = item.querySelector(".faq-icon");
    btn.addEventListener("click", function () {
      var willOpen = answer.hidden;
      faqItems.forEach(function (other) {
        other.querySelector(".faq-a").hidden = true;
        other.querySelector(".faq-icon").textContent = "+";
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        answer.hidden = false;
        icon.textContent = "−";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* 問い合わせフォーム（プロトタイプ用ダミー送信） */
  var form = document.querySelector("#contact-form");
  var done = document.querySelector("#form-done");
  if (form && done) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.hidden = true;
      done.hidden = false;
    });
  }
})();
