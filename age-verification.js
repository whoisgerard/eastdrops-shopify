document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ Age Verification Script Loaded');

  // Create Modal dynamically (so you don't depend on Shopify theme)
  const modal = document.createElement('div');
  modal.id = 'age-verification-modal';
  modal.className = 'age-modal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="age-modal-content">
      <h2>Are you of legal drinking age?</h2>
      <p>You must be of legal drinking age in your country to enter this site.</p>
      <div class="age-buttons">
        <button id="age-yes" class="age-btn yes-btn">Yes</button>
        <button id="age-no" class="age-btn no-btn">No</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Inject CSS dynamically for the modal
  const style = document.createElement('style');
  style.textContent = `
    .age-modal {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .age-modal-content {
      background: #fff;
      color: #000;
      padding: 40px;
      max-width: 500px;
      text-align: center;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }
    .age-modal-content h2 { font-size: 1.8rem; margin-bottom: 15px; }
    .age-modal-content p { font-size: 1rem; margin-bottom: 20px; }
    .age-buttons { display: flex; justify-content: space-around; }
    .age-btn {
      padding: 12px 30px;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
    .yes-btn { background: #000; color: #fff; }
    .no-btn { background: #e0e0e0; color: #000; }
    .yes-btn:hover { background: #333; }
    .no-btn:hover { background: #ccc; }
  `;
  document.head.appendChild(style);

  const ageYesButton = modal.querySelector('#age-yes');
  const ageNoButton = modal.querySelector('#age-no');

  // Show modal if not verified
  if (localStorage.getItem('ageVerified') !== 'true') {
    modal.style.display = 'flex';
  }

  // Yes click
  ageYesButton.addEventListener('click', function () {
    localStorage.setItem('ageVerified', 'true');
    modal.style.display = 'none';
  });

  // No click
  ageNoButton.addEventListener('click', function () {
    window.location.href = 'https://disney.com';
  });
});
