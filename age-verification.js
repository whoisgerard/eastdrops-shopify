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
document.addEventListener('DOMContentLoaded', function () {
  // ✅ Config
  const backgroundImage = 'https://admin.shopify.com/store/eastdrops/content/files/40417041645835?link_source=search&selectedView=all'; // Replace with your Shopify file URL
  const languages = {
    en: {
      title: "Are you old enough?",
      text: "You must be of legal drinking age to enter this site.",
      yes: "Yes, cheers!",
      no: "No, take me out"
    },
    defaultLang: "en"
    es: {
      title: "¿Tienes edad suficiente?",
      text: "Debes tener la edad legal para beber en tu país.",
      yes: "Sí, vamos a brindar!",
      no: "No, sácame de aquí"
    },
    ca: {
      title: "Tens l'edat legal?",
      text: "Has de tenir l'edat legal per beure al teu país.",
      yes: "Sí, fem un brindis!",
      no: "No, treu-me d'aquí"
    }
  };

  // ✅ Detect language
  const userLang = navigator.language.slice(0, 2);
  const lang = config.languages[userLang] ? userLang : config.defaultLang;
  const text = config.languages[lang];
  // Detect language
  const lang = document.documentElement.lang?.substring(0, 2) || 'en';
  const copy = languages[lang] || languages['en'];

  // ✅ Check if already verified
  if (localStorage.getItem("ageVerified") === "true") return;
  // ✅ Skip if already verified
  if (localStorage.getItem('ageVerified') === 'true') return;

  // ✅ Create modal HTML
  const modal = document.createElement("div");
  modal.id = "age-verification-modal";
  const modal = document.createElement('div');
  modal.id = 'age-verification-modal';
  modal.innerHTML = `
    <div class="age-modal-content">
      <h2>${text.title}</h2>
      <p>${text.message}</p>
      <div class="age-buttons">
        <button id="age-yes">${text.yes}</button>
        <button id="age-no">${text.no}</button>
    <div class="age-overlay">
      <div class="age-box">
        <h2>${copy.title}</h2>
        <p>${copy.text}</p>
        <div class="age-buttons">
          <button id="age-yes" class="age-btn">${copy.yes}</button>
          <button id="age-no" class="age-btn age-btn-alt">${copy.no}</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // ✅ CSS styles injected
  const style = document.createElement("style");
  // ✅ Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #age-verification-modal {
    .age-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      display: flex; justify-content: center; align-items: center;
      background: rgba(0,0,0,0.8);
      top: 0; left: 0; right: 0; bottom: 0;
      background: #000 url('${backgroundImage}') center/cover no-repeat;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: inherit;
      text-align: center;
      padding: 20px;
      animation: fadeIn 0.5s ease-in-out;
    }
    .age-box {
      background: rgba(0, 0, 0, 0.6);
      padding: 40px 30px;
      border-radius: 8px;
      max-width: 500px;
      width: 90%;
    }
    .age-box h2 {
      font-size: 2rem;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .age-box p {
      font-size: 1.1rem;
      margin-bottom: 25px;
      opacity: 0.85;
    }
    .age-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    .age-modal-content {
      background: #fff; padding: 30px; border-radius: 12px;
      max-width: 400px; text-align: center; font-family: sans-serif;
    .age-btn {
      padding: 12px 28px;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      border-radius: 4px;
    }
    .age-modal-content h2 { margin-bottom: 10px; font-size: 1.5rem; }
    .age-buttons { margin-top: 20px; display: flex; gap: 10px; justify-content: center; }
    .age-buttons button {
      padding: 10px 20px; font-size: 16px; cursor: pointer;
      border: none; border-radius: 6px;
    .age-btn {
      background: #fff;
      color: #000;
    }
    .age-btn:hover {
      background: #f2f2f2;
    }
    .age-btn-alt {
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
    }
    .age-btn-alt:hover {
      background: #fff;
      color: #000;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    #age-yes { background: #4CAF50; color: white; }
    #age-no { background: #f44336; color: white; }
  `;
  document.head.appendChild(style);

  // ✅ Event listeners
  document.getElementById("age-yes").addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
  // ✅ Button actions
  document.getElementById('age-yes').addEventListener('click', () => {
    localStorage.setItem('ageVerified', 'true');
    modal.remove();
  });

  document.getElementById("age-no").addEventListener("click", () => {
    window.location.href = text.redirect;
  document.getElementById('age-no').addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/eastdrops"; // Redirect underage visitors
  });
})();
});
