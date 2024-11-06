document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // IP tekshirish uchun backend'ga so'rov yuborish (bunga mos backend kod kerak)
    fetch('https://example.com/check-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ip: 'user_ip_address' // Bu yerni to'g'rilang, foydalanuvchi IP adresini backend orqali olish
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.allowed) {
        alert('Ro\'yxatdan o\'tdingiz');
        // Formani yuborish yoki boshqa harakatlarni amalga oshirish
      } else {
        alert('Siz bir marta ro\'yxatdan o\'tgansiz');
      }
    })
    .catch(error => console.error('Error:', error));
  });


  //////

  // Elementlarni tanlash
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];

// Modalni ochish
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Modalni yopish
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Modal tashqarisini bosganda yopish
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
