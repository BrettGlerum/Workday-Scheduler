var currentDayEl = document.querySelector("#currentDay");
var hourEl = document.querySelector(".time-block .hour").innerText;
console.log(hourEl);

var currentDate = moment().format("MMM Do YYYY");
var currentTime = moment().format("hh:mm:ss A");
var timeZone = moment().format("hA");

console.log(moment().hour());
console.log(currentDate)
console.log(currentTime)
console.log(timeZone)

var setDay = function() {
    var setDate = (currentDayEl.innerText = currentDate);
    return setDate;
};

var convertTime = function (value) {};

setDay();