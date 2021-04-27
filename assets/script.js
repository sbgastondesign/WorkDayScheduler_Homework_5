var timeDisplayEl = $('#time-display');
var saveEvent = $('.saveBtn')
var usertextInput = $('#text').value;
var placeholder = ''
var workingHours = $(8) //9am - 5pm
var selectedTime = $('#hour')

usertextInput.text = "#row";
console.log('entry added')
function displayTime();

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}



setInterval(displayTime, 1000);

// saveEvent.on("click", function (event) {
//     if ('click' === true)
//         localStorage.setItem("event", usertextInput)
//     console.log('usertextInput')
//     event.preventDefault();
// } else {
//     return();
// }
//prevents page from erasing data




// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     timeDisplay.text(rightNow);
// }
// function displayTime();

// function hours() {
//     var times = (17 - 9); // 8 hours of the work day
//     console.log(17 - 9)
//     for (var i = 0; i < times; i++) {
//         const toPrint = moment(start)
//             .format('hh:mm:ss a');
//         if (displayTime === rightNow)
//             $("p").removeClass("myClass noClass").addClass("present");
//     }

//     console.log(toPrint);
// }


// //changes the background color depending on time (variables of past, present and future.)
// function formColor() {
//     if (moment 'hh:mm:ss a' != displayTime)
// } then {

// }

// }

// var pastPresent = {
//     math thing? the time range?
// }


// if ('entry' == true) {
//     localStorage.setItem(usertextInput)
//     console.log("event saved")
//     alert("Event Saved")
// } else {
//     ('placeholder' = "")
//     return;
// }
