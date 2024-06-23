document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Ваше повідомлення було надіслано!");
    // Можна додати функцію для відправки даних на сервер
  });
