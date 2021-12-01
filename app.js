const clock_tick = () =>{
    let date = new Date();

    const hour = document.getElementById('clock__hour');
    const minutes = document.getElementById('clock__minutes');
    const seconds = document.getElementById('clock__seconds')   

    // Setting degrees by making the hours,minutes and seconds to degree's
    const hh = date.getHours() * 30 // 360 deg turn for a getHours = 12hr. So 12 * 30 = 360 which can be taken and added deg 
    const mm = date.getMinutes() * 6 // 360 deg turn for a getMinutes = 60min. So 60 * 6 = 360 
    const ss = date.getSeconds() * 6 // 360 deg turn for a getSeconds = 60sec. So 60 * 6 = 360

    hour.style.transform = `rotateZ(${hh}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`


}
setInterval(clock_tick, 1000) // after every 1000millisecond which is == 1 second ,it will check what is in the clock variable

const clock_show = () =>{
    let date = new Date();

    const hour = document.getElementById('text__hour');
    const minute = document.getElementById('text__minute');
    const ampm = document.getElementById('text__ampm')

    const dayt = document.querySelector('.date__day')
    const mon = document.querySelector('.date__month')
    const yr = document.querySelector('.date__year')

    // Setting degrees by making the hours,minutes and seconds to degree's
    let hh = date.getHours()  
    let mm = date.getMinutes()
    let mornEven; 

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    //Converting 24hr to 12hr by deleting 12and assigning the pm
    if(hh >= 12){
        hh = hh - 12;
        mornEven = "PM"  
    }else{
        mornEven = "AM";
    }
    // Zero before any number below the hourly time of 10 
    if(hh < 10){
        hour.innerHTML = `0${hh}:`;
    }else{
        hour.innerHTML = `${hh}:`;
    }
    // Zero before any number below the minutes time of 10 
    if(mm < 10){
        minute.innerHTML = `0${mm}`
    }else{
        minute.innerHTML = `${mm}`
    }

    ampm.innerHTML = mornEven
    let moonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    dayt.innerHTML = `${day }`;
    mon.innerHTML = `  ${ moonths[month] }`
    yr.innerHTML = `${ year}`;
    
}

setInterval(clock_show, 1000)
