const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document
  .querySelector(".sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const username = document.querySelector(
      '.sign-in-form input[type="text"]'
    ).value;
    const password = document.querySelector(
      '.sign-in-form input[type="password"]'
    ).value;

    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, preencha todos os campos.",
        customClass: {
          confirmButton: "custom-swal-button",
        },
      });
    } else {
      // Simulação de login bem-sucedido
      Swal.fire({
        icon: "success",
        title: "Login bem-sucedido!",
        text: "redirecionando..",
        timer: 2000,
        showConfirmButton: false,
        willClose: () => {
          window.location.href = "../dashboard/dashboard.php";
        },
      });
    }
  });

document
  .querySelector(".sign-up-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const username = document.querySelector(
      '.sign-up-form input[type="text"]'
    ).value;
    const email = document.querySelector(
      '.sign-up-form input[type="email"]'
    ).value;
    const password = document.querySelector(
      '.sign-up-form input[type="password"]'
    ).value;

    if (!username || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, preencha todos os campos.",
        customClass: {
          confirmButton: "custom-swal-button",
        },
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Registro bem-sucedido!",
        text: "Você pode agora fazer login.",
        timer: 2000,
        showConfirmButton: false,
        willClose: () => {
          container.classList.remove("sign-up-mode");
        },
      });
    }
  });
