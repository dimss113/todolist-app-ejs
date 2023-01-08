exports.getDate = function(){

    const options = {
        weekday: 'long',
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    
    const today = new Date();
    const curDay = today.toLocaleDateString("en-us", options);
    
    return curDay;
}

exports.getDay = function (day){
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[Number(day)];
}

// instead using above we can also use object and pass the function in an object parameter