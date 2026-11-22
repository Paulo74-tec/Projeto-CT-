document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("suggestionForm");

    if (!form) return;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
    const rgpd = document.getElementById("rgpd");

    const contador = document.getElementById("contador");
    const submitBtn = document.getElementById("submitBtn");

    const website = document.getElementById("website");

    const FORM_ID = "SEU_ID_FORMSPREE";
    const RECAPTCHA_SITE_KEY = "SUA_SITE_KEY";

    /* ============================
       CONTADOR DE CARACTERES
    ============================ */

    if (mensagem && contador) {

        mensagem.addEventListener("input", () => {

            const total = mensagem.value.length;

            contador.textContent =
                `${total} / 1000 caracteres`;

        });

    }

    /* ============================
       FUNÇÕES AUXILIARES
    ============================ */

    function limparErros() {

        document
            .querySelectorAll(".error-message")
            .forEach(el => el.textContent = "");

        document
            .querySelectorAll("input, textarea, select")
            .forEach(el => {

                el.classList.remove("input-error");
                el.classList.remove("input-success");

            });

    }

    function mostrarErro(id, texto) {

        const campo =
            document.getElementById(id);

        const erro =
            document.getElementById(id + "Error");

        if (campo) {
            campo.classList.add("input-error");
        }

        if (erro) {
            erro.textContent = texto;
        }

    }

    function mostrarSucesso(id) {

        const campo =
            document.getElementById(id);

        if (campo) {

            campo.classList.add("input-success");

        }

    }

    function validarEmail(emailTexto) {

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(emailTexto);

    }

    /* ============================
       ENVIO DO FORMULÁRIO
    ============================ */

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        limparErros();

        let valido = true;

        /* Nome */

        if (nome.value.trim().length < 3) {

            mostrarErro(
                "nome",
                "Introduza um nome válido."
            );

            valido = false;

        } else {

            mostrarSucesso("nome");

        }

        /* Email */

        if (!validarEmail(email.value.trim())) {

            mostrarErro(
                "email",
                "Introduza um email válido."
            );

            valido = false;

        } else {

            mostrarSucesso("email");

        }

        /* Assunto */

        if (assunto.value === "") {

            mostrarErro(
                "assunto",
      
