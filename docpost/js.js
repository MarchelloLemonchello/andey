var calendarDate = document.querySelectorAll(".calendar__item");
var timeResult = document.getElementById("time");
var timeText = document.getElementById("time_text");
document.getElementById('form').addEventListener("submit" , checkForm);

for (var i = 0; i < calendarDate.length; i++) {
    let el = document.getElementById('form');
    calendarDate[i].addEventListener("click", function () {
        timeText.innerHTML = 'Время записи: ' + this.innerHTML
        document.getElementById('time').value=this.innerHTML;
    }, false);
}

function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById('form');
    let name = el.name.value
    let birthday = el.birthday.value
    let doctor = el.doctor.value
    let data = el.data.value
    let time = el.time.value
    let arr = [name , birthday , doctor , data , time]
    let json = JSON.stringify(arr);

    console.log(arr)
    console.log(json)
}
