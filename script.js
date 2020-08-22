$(document).ready(function () {
    // list my variables needed
    var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    var todaysDate = moment().format('MMMM Do YYYY');
    var localTime = moment().format('H');


    console.log(localTime)
    // applying date to html
    $("#currentDay").append(todaysDate)



    //for loop 
    for (var i = 0; i < workHours.length; i++) {
        // comparing time of day to decide on color changes
        if (workHours[i] / 12 > 1) {

            console.log(workHours[i]);
            timeDay = "PM";
            console.log(workHours[i] * 10);
            hour = workHours[i] - 12;
        } else {
            var hour = workHours[i];
            if (workHours[i] == 12) {
                timeDay = "PM"
            } else {
                timeDay = "AM"
            };
        };



        // creating elements in html
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var planEl = $("<textarea>");
        var saveButton = $("<button>");
        var iconEl = $("<i>");


        // setting atts. and changing css
        newEl.attr("data-hour", workHours[i]);
        newEl.attr("class", "row")
        planEl.attr("class", "description col 10");
        planEl.attr("id", "text" + [i]);
        timeEl.attr("class", "hour col-1");
        saveButton.attr("class", "saveBtn col-1");
        saveButton.attr("id", [i]);
        iconEl.attr("class", "far fa-save");


        // attaching elements to each other
        $(".container").append(newEl)

        newEl.append(timeEl)
        newEl.append(planEl)
        newEl.append(saveButton)
        saveButton.append(iconEl)

        $("#text" + [i]).append(
            localStorage.getItem("newInfo" + [i])
        );

        timeEl.text(hour + timeDay);

        // changes color depeing on the hours.
        if (workHours[i] == localTime) {
            planEl.attr("class", "description col 10 present")
        } else if (workHours[i] < localTime) {
            planEl.attr("class", "description col 10 past")
        } else {
            planEl.attr("class", "description col 10 future")
        }
    }
    $(".saveBtn").on("click", function () {
        var textKey = "newInfo" + this.id;
        var textEl = "#text" + this.id;
        console.log(this.id)
        // setting local storage
        console.log(textKey)
        console.log(textEl)
        localStorage.setItem(textKey, $(textEl).val());
    })

})