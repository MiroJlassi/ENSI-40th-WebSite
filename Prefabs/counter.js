
function calculateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date("2024-04-24 00:00:00");
  
    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
  
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
  
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (totalSeconds<0){
        //show 00 00 00 00
    }
  }
  
  // Initial call to display countdown immediately
  calculateCountdown();
  
  // Update the countdown every second
  setInterval(calculateCountdown, 1000);


  function openLinkInNewTabCristal() {
    var url = "http://www.latice.rnu.tn/gtrs/cristal.htm?fbclid=IwAR2kbz4kjWpolAZvOggOSJew8bomkW_1Zt4YE-mEhII3QWHLcHYT-2a_WbE";
    var win = window.open(url, '_blank');
    win.focus();
}
function openLinkInNewTabRiadi() {
    var url = "http://www.riadi.rnu.tn/";
    var win = window.open(url, '_blank');
    win.focus();
}
  



