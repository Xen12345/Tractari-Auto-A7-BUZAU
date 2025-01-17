// Script pentru trimiterea formularului (exemplu de procesare a datelor)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Aici poți trimite datele la un server sau poți pur și simplu să arăți un mesaj de succes
  alert(`Mulțumim, ${name}! Mesajul dvs. a fost trimis cu succes.`);

  // Resetarea formularului
  document.getElementById('contact-form').reset();
});
