
      let day1 = document.getElementById("days")
      let hours1 = document.getElementById("hours")
      let minutes1= document.getElementById("minutes")
      let seconds1 = document.getElementById("seconds")

     let newYear = new Date("Jan 1, 2022");

     function countdown() {
     
     let newYearcount = new Date(newYear);
     let currentDate = new Date();
     
      let time = (newYearcount - currentDate) / 1000;
    
     let days  = Math.floor(time / 3600  / 24 );
     let hours = Math.floor(time / 3600) % 24;
     let minutes = Math.floor(time / 60) % 60;
     let seconds= Math.floor(time ) % 60;
      
        console.log(days)
    
     day1.innerHTML = days;
     hours1.innerHTML = hours;
     minutes1.innerHTML = minutes;
     seconds1.innerHTML = seconds;

    
     
     }
     countdown();
     
      setInterval (countdown, 1000);