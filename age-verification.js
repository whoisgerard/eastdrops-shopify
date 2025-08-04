(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Prevent duplicate modals if the script loads multiple times
    if (document.getElementById('age-verification-modal')) return;

    // Create the modal container
    const modal = document.createElement('div');
    modal.id = 'age-verification-modal';
    modal.style.display = 'none';
    modal.innerHTML = `
      <div class="age-modal-content">
        <h2>Are you of legal drinking age?</h2>
        <p>You must be of legal drinking age in your country to enter this site.</p>
        <div class="age-buttons">
          <button id="age-yes">Yes</button>
          <button id="age-no">No</button>
        </div>
      </div>
    `;

    // Append to body
    document.body.appendChild(modal);

    // Styles injected dynamically (optional if you prefer CSS file)
    const style = document.createElement('style');
    style.innerHTML = `
      #age-verification-modal {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .age-modal-content {
        background: #fff;
        padding: 30px 20px;
        border-radius: 12px;
        text-align: center;
        max-width: 420px;
        width: 90%;
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
      .age-modal-content h2 {
        font-size: 24px;
        margin-bottom: 12px;
      }
      .age-modal-content p {
        font-size: 14px;
        margin-bottom: 24px;
        color: #555;
      }
      .age-buttons {
        display: flex;
        justify-content: space-around;
        gap: 10px;
      }
      .age-buttons button {
        padding: 12px 20px;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      #age-yes {
        background: #000;
        color: #fff;
      }
      #age-no {
        background: #ccc;
        color: #000;
      }
      .age-buttons button:hover {
        opacity: 0.8;
      }
    `;
    document.head.appendChild(style);

    // Show modal if not verified
    if (localStorage.getItem('ageVerified') !== 'true') {
      modal.style.display = 'flex';
    }

    // Event listeners
    modal.addEventListener('click', function(e) {
      if (e.target.id === 'age-yes') {
        localStorage.setItem('ageVerified', 'true');
        modal.style.display = 'none';
      } else if (e.target.id === 'age-no') {
        window.location.href = 'https://disney.com';
      }
    });
  });
})();
