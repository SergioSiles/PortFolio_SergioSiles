/* ========================= TEXTO CON OLA RETRO ========================= */
const nameMain = document.getElementById("name-main");
const text = nameMain.textContent.trim();

function buildWaterText(container) {
  container.innerHTML = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.className = "water-text";
    span.style.setProperty("--i", i);
    container.appendChild(span);
  });
}

buildWaterText(nameMain);

/* ========================= EFECTO GLITCH RETRO ALEATORIO ========================= */
function randomGlitch() {
  const allSpans = document.querySelectorAll(".water-text");
  const randomSpan = allSpans[Math.floor(Math.random() * allSpans.length)];

  if (randomSpan) {
    randomSpan.style.textShadow = `
      ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 0, 255, 0.8),
      ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0, 255, 255, 0.8)
    `;

    setTimeout(() => {
      randomSpan.style.textShadow = "";
    }, 100);
  }
}

// Efecto glitch ocasional
setInterval(randomGlitch, 2000);

/* ========================= FORMULARIO DE CONTACTO CON EMAILJS ========================= */

emailjs.init("-pUSD5PRIQ9v4npPj");

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");
function showStatus(message, isError = false) {
  formStatus.textContent = message;
  formStatus.classList.remove("hidden");

  if (isError) {
    formStatus.classList.add("text-red-400");
    formStatus.classList.remove("text-green-400", "text-yellow-400");
  } else if (message.includes("Enviando")) {
    formStatus.classList.add("text-yellow-400");
    formStatus.classList.remove("text-red-400", "text-green-400");
  } else {
    formStatus.classList.add("text-green-400");
    formStatus.classList.remove("text-red-400", "text-yellow-400");
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    showStatus("Enviando...");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    const serviceID = "service_kqrnm8o";
    const templateID = "template_0bg2yjf";

    emailjs.sendForm(serviceID, templateID, this).then(
      function () {
        showStatus("Mensaje enviado correctamente");
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Enviar Mensaje";
          formStatus.classList.add("hidden");
        }, 3000);
      },
      function (error) {
        console.error("Error al enviar:", error);
        showStatus("Error", true);

        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar Mensaje";

        setTimeout(() => {
          formStatus.classList.add("hidden");
        }, 5000);
      },
    );
  });
}
