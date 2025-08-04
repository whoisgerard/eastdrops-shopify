(function () {
  document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
      <div id="age-verification-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);justify-content:center;align-items:center;z-index:9999;">
        <div style="background:#fff;padding:20px;border-radius:10px;text-align:center;width:300px;max-width:90%;">
          <h2>Are you of legal drinking age?</h2>
          <p>You must be of legal drinking age in your country to enter this site.</p>
          <div style="margin-top:15px;">
            <button id="age-yes" style="margin-right:10px;padding:10px 15px;">Yes</button>
            <button id="age-no" style="padding:10px 15px;">No</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const ageModal = document.getElementById('age-verification-modal');
    const ageYesButton = document.getElementById('age-yes');
    const ageNoButton = document.getElementById('age-no');

    if (localStorage.getItem('ageVerified') !== 'true') {
      ageModal.style.display = 'flex';
    }

    ageYesButton.addEventListener('click', function() {
      localStorage.setItem('ageVerified', 'true');
      ageModal.style.display = 'none';
    });

    ageNoButton.addEventListener('click', function() {
      window.location.href = "https://disney.com"; // redirect if underage
    });
  });
})();
