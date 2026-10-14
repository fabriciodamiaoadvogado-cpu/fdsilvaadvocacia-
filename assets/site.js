// Número do WhatsApp do escritório (troque aqui e vale para o site inteiro)
var ZAP = "5521992770564";

document.querySelectorAll("[data-zap]").forEach(function (el) {
  var url = "https://wa.me/" + ZAP + "?text=" + encodeURIComponent(el.getAttribute("data-zap"));
  if (el.tagName === "A") {
    el.href = url;
    el.target = "_blank";
    el.rel = "noopener";
  }
});

var b = document.getElementById("abreMenu");
var m = document.getElementById("menu");
if (b && m) {
  b.addEventListener("click", function () { m.classList.toggle("aberto"); });
  m.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { m.classList.remove("aberto"); });
  });
}

var ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
