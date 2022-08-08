const cookie = document.getElementById('cookie');

let clicker__counter = document.getElementById('clicker__counter');

function smallSize() {
   cookie.width = 150;
}

cookie.onclick = function() {
   cookie.width = 150;
   clicker__counter++;
   cookie.onclick = function() {
      cookie.width = 200;
      clicker__counter++;
   };
}