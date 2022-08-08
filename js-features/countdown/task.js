let result = setInterval(() => {
   const timer = document.getElementById('timer');
   timer.textContent -= 1;
   if (timer.textContent === "0") {
      clearInterval(result);
      alert("Вы победили в конкурсе!");
   }
}, 1000);
