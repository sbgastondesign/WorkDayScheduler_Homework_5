var timeDisplay = $('#currentDay');
var saveEvent = $('.saveBtn')
var usertextInput = $('#textinputEvent').value;
var placeholder = ''
var formColor = $('#hour')

usertextInput.text = "entry";
console.log('entry added')

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
}


//changes the background color depending on time (variables of past, present and future.)
function formColor() {
    if (moment
   
}

var pastPresent = {
    math thing? the time range?
}



localStorage.setItem("event", usertextInput)
console.log('usertextInput')


saveEvent.on("click", function (event) {
    event.preventDefault(); //prevents page from erasing data

    if ('entry' == true) {
        localStorage.setItem(usertextInput)
        console.log("event saved")
        alert("Event Saved")
    } else {
        ('placeholder' = "")
        return;
    }
})
    }

setInterval(displayTime, 1000);