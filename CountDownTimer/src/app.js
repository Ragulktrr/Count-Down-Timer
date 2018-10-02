var deadLine = (new Date(2018, 9, 4, 0, 25) - new Date())+2000;
var countObject = {};
countObject.days = Math.floor(deadLine/(1000*60*60*24));
countObject.hours = Math.floor((deadLine/(1000*60*60)%24));
countObject.minutes = Math.floor((deadLine/(1000*60))%60);
countObject.seconds = Math.floor((deadLine/(1000))%60);

function clockTimer() {
  var timeInterval = setInterval(function(){
    deadLine = (new Date(2018, 9, 4, 0, 25) - new Date())+2000;
    countObject = {};
    countObject.days = Math.floor(deadLine/(1000*60*60*24));
    countObject.hours = Math.floor((deadLine/(1000*60*60)%24));
    countObject.minutes = Math.floor((deadLine/(1000*60))%60);
    countObject.seconds = Math.floor((deadLine/(1000))%60);

    if(countObject.days < 1 && countObject.hours < 1 && countObject.minutes < 1 && countObject.seconds < 1){
      clearInterval(timeInterval);
    }else{
      document.getElementById('days').innerText = countObject.days;
      document.getElementById('hours').innerText = countObject.hours;
      document.getElementById('minutes').innerText = countObject.minutes;
      document.getElementById('seconds').innerText = countObject.seconds;

      document.getElementById('days').textContent = countObject.days;
      document.getElementById('hours').textContent = countObject.hours;
      document.getElementById('minutes').textContent = countObject.minutes;
      document.getElementById('seconds').textContent = countObject.seconds;

      document.getElementById('days_back').innerText = Math.floor((deadLine-(1000*60*60*24))/(1000*60*60*24));
      document.getElementById('hours_back').innerText = Math.floor(((deadLine-1000)/(1000*60*60)%24));
      document.getElementById('minutes_back').innerText = Math.floor(((deadLine-1000)/(1000*60))%60);
      document.getElementById('seconds_back').innerText = Math.floor(((deadLine-1000)/(1000))%60);

      document.getElementById('days_back').textContent = Math.floor((deadLine-1000)/(1000*60*60*24));
      document.getElementById('hours_back').textContent = Math.floor(((deadLine-1000)/(1000*60*60)%24));
      document.getElementById('minutes_back').textContent = Math.floor(((deadLine-1000)/(1000*60))%60);
      document.getElementById('seconds_back').textContent = Math.floor(((deadLine-1000)/(1000))%60);

      animateNext(document.getElementById('seconds'));
      if(countObject.seconds == 0){
        animateNext(document.getElementById('minutes'));
      }

      if(countObject.minutes == 0 && countObject.seconds == 0){
        animateNext(document.getElementById('hours'));
      }

      if(countObject.hours == 0 && countObject.minutes == 0 && countObject.seconds == 0){
        animateNext(document.getElementById('days'));
      }
    }

  },1000);

  function animateNext(doc){
    doc.className = 'next';
    setTimeout(function(){
      doc.className = '';
    },700);
  }

}

if(countObject.days == 0 && countObject.hours == 0 && countObject.minutes == 0 && countObject.seconds == 0){
  clearInterval(timeInterval);
}else{
  clockTimer();
}
