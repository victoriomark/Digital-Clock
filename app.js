
let hours = document.getElementById("hour")
let Men = document.getElementById("minutes")
let second = document.getElementById("second")
let ampm = document.querySelector(".pm")
let am = document.getElementById("pm")
let clock = () => {
    let date = new Date();
    let hour = date.getHours()
 
    hour = hour % 12 || 12
  hours.innerHTML = hour
    let minutes = date.getMinutes()
    let seconds = date.getSeconds() 
    Men.innerHTML = minutes;
    //check if am or pm
 let AM_PM = hour < 12 ?  "AM":  "PM";
 ampm.innerHTML = AM_PM
    let SecInterval = setInterval(() =>{
        seconds++
        second.innerHTML = seconds
        if(seconds === 60){
            seconds = "0"+0
            minutes++;
            Men.innerHTML = minutes;
         }
         if(minutes === 60){
            minutes =  0
            hour++;
            hours.innerHTML = hour;
         }
   
    },1000)
}

clock()


