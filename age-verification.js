(function () {
  // ✅ CONFIGURATION
  const config = {
    languages: {
      en: {
        title: "Are you of legal drinking age?",
        message: "You must confirm you are of legal drinking age to enter.",
        yes: "Yes, let me in 🍷",
        no: "No, take me away ❌",
        redirect: "https://disney.com"
      },
      es: {
        title: "¿Tienes la edad legal para beber?",
        message: "Debes confirmar que tienes la edad legal para acceder.",
        yes: "Sí, déjame entrar 🍷",
        no: "No, llévame fuera ❌",
        redirect: "https://disney.com"
      },
      ca: {
        title: "Tens l'edat legal per beure?",
        message: "Has de confirmar que tens l'edat legal per entrar.",
        yes: "Sí, deixa'm entrar 🍷",
        no: "No, treu-me d'aquí ❌",
        redirect: "https://disney.com"
      }
    },
    defaultLang: "en"
  };

  // ✅ Detect language
  const userLang = navigator.language.slice(0, 2);
  const lang = config.languages[userLang] ? userLang : config.defaultLang;
  const text = config.languages[lang];

  // ✅ Check if already verified
  if (localStorage.getItem("ageVerified") === "true") return;

  // ✅ Create modal HTML
  const modal = document.createElement("div");
  modal.id = "age-verification-modal";
  modal.innerHTML = `
    <div class="age-modal-content">
      <h2>${text.title}</h2>
      <p>${text.message}</p>
      <div class="age-buttons">
        <button id="age-yes">${text.yes}</button>
        <button id="age-no">${text.no}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // ✅ CSS styles injected
  const style = document.createElement("style");
  style.textContent = `
    #age-verification-modal {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      background: rgba(0,0,0,0.8);
      z-index: 999999;
    }
    .age-modal-content {
      background: #fff; padding: 30px; border-radius: 12px;
      max-width: 400px; text-align: center; font-family: sans-serif;
    }
    .age-modal-content h2 { margin-bottom: 10px; font-size: 1.5rem; }
    .age-buttons { margin-top: 20px; display: flex; gap: 10px; justify-content: center; }
    .age-buttons button {
      padding: 10px 20px; font-size: 16px; cursor: pointer;
      border: none; border-radius: 6px;
    }
    #age-yes { background: #4CAF50; color: white; }
    #age-no { background: #f44336; color: white; }
  `;
  document.head.appendChild(style);

  // ✅ Event listeners
  document.getElementById("age-yes").addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    modal.remove();
  });

  document.getElementById("age-no").addEventListener("click", () => {
    window.location.href = text.redirect;
  });
})();
