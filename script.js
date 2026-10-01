// Troque pelo seu número com DDI e DDD, só dígitos (ex.: 5527999999999)
var WHATSAPP = "5527999999999";

document.querySelectorAll("a[data-wa]").forEach(function (a) {
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("ano").textContent = new Date().getFullYear();
