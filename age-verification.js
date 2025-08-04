document.addEventListener('DOMContentLoaded', function () {
  // ✅ Config
  const backgroundImage = 'https://cdn.shopify.com/s/files/1/your-image.jpg'; // Replace with your Shopify file URL
  const languages = {
    en: {
      title: "Are you old enough?",
      text: "You must be of legal drinking age to enter this site.",
      yes: "Yes, cheers!",
      no: "No, take me out"
    },
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

  // Detect language
  const lang = document.documentElement.lang?.substring(0, 2) || 'en';
  const copy = languages[lang] || languages['en'];

  // ✅ Skip if already verified
  if (localStorage.getItem('ageVerified') === 'true') return;

  // ✅ Create modal HTML
  const modal = document.createElement('div');
  modal.id = 'age-verification-modal';
  modal.innerHTML = `
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

  // ✅ Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .age-overlay {
      position: fixed;
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
    .age-btn {
      padding: 12px 28px;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
      border-radius: 4px;
    }
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
  `;
  document.head.appendChild(style);

  // ✅ Button actions
  document.getElementById('age-yes').addEventListener('click', () => {
    localStorage.setItem('ageVerified', 'true');
    modal.remove();
  });

  document.getElementById('age-no').addEventListener('click', () => {
    window.location.href = "https://disney.com"; // Redirect underage visitors
  });
});
