/* Preenche o site com os dados de content.js — não precisa editar */
(function () {
  const fmt = (v) =>
    v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  /* cotação destaque */
  document.getElementById("preco-destaque").textContent = fmt(CONTENT.precoDestaque);
  document.getElementById("preco-data").textContent = CONTENT.precoAtualizadoEm;

  /* endereço + horário */
  document.getElementById("endereco-l1").textContent = CONTENT.endereco;
  document.getElementById("endereco-l2").textContent =
    CONTENT.bairro + " · CEP " + CONTENT.cep;
  document.getElementById("endereco-ref").textContent = CONTENT.referencia;
  document.getElementById("maps-link").href = CONTENT.mapsUrl;

  document.getElementById("horario-lista").innerHTML = CONTENT.horario
    .map((h) => `<li><span>${h.dias}</span><span>${h.horas}</span></li>`)
    .join("");

  document.getElementById("tel-bonito").textContent = CONTENT.whatsappBonito;

  /* links de WhatsApp */
  const url =
    "https://wa.me/" +
    CONTENT.whatsapp +
    "?text=" +
    encodeURIComponent(CONTENT.whatsappMsg);
  document.querySelectorAll("[data-wpp]").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* ano do rodapé */
  document.getElementById("ano").textContent = new Date().getFullYear();

  /* revelação ao rolar */
  const io = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
