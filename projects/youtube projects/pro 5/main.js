let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');



let time = () =>{
    let current_time = new Date()
    let hr = current_time.getHours();
    let min = current_time.getMinutes();
    let sec = current_time.getSeconds();

    if(hr < 10){
        hr = "0" + hr
    }
    if(min < 10){
        min = "0" + min
    }
    if(sec < 10){
        sec = "0" + sec
    }
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}
let clock = setInterval(time,1000);


// In JavaScript, the getHours() and setHours() methods are part of the Date object,
//  which represents a specific point in time.

// The getHours() method returns the hour of the day (0-23) 
// for the specified date according to local time. For example:

// Copy code
// let date = new Date();
// let hours = date.getHours();

// The setHours() method, on the other hand, 
// sets the hour of the day (0-23) for the specified date according to local time,
//  and returns the number of milliseconds since the Unix epoch.






// The setHours() method takes several arguments, including the hour to set,
//  the minutes, seconds, and milliseconds.

// For example:

// Copy code
// let date = new Date();
// date.setHours(12, 0, 0, 0);
// In the example above, we are setting the hour of date to 12 (noon) and the other time values to 0.
//  The setHours() method returns the number of milliseconds since the Unix 
//  epoch (midnight on January 1, 1970) for the updated date.

// To summarize, getHours() returns the hour of the day for a given date,
//  while setHours() sets the hour of the day for a given date and returns the number of milliseconds since the Unix epoch.