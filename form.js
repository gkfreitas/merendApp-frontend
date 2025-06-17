const form = document.querySelector("form");
const modal = document.getElementById("customModal");
const closeBtn = document.querySelector(".custom-close-button");
const modalBody = document.getElementById("customModalBody");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const tipo = document.getElementById("tipo").value;
    const message = document.getElementById("mensagem").value.trim();

    modalBody.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Tipo de empresa:</strong> ${tipo}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
      <p>Sua mensagem foi enviada com sucesso!</p>
    `;

    modal.style.display = "block";
    form.reset();
    form.classList.remove("was-validated");
  }

  form.classList.add("was-validated");
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
