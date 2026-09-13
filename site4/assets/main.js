/* 小野歩 ウェブサイト 案4 */
(function () {
  "use strict";

  /* フッターの年号 */
  var yr = document.querySelector("[data-year]");
  if (yr) { yr.textContent = new Date().getFullYear(); }

  /* 問い合わせフォーム（プロトタイプ用ダミー送信） */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = document.querySelector("#form-done");
      if (done) { done.hidden = false; }
      form.reset();
    });
  }
})();
