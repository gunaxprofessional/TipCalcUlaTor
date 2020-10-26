function ageCalculate() {

    var birthDate = document.getElementById('birth_date').value;
    //Getting DateOfBrith of User   
    // alert(birthDate);  

    var MyBirthDayDate = birthDate.toString();
    var MyBirthYear = parseInt(MyBirthDayDate.substring(0, 4));
    var MyBirthMonth = parseInt(MyBirthDayDate.substring(5, 7));
    var MyBirthDate = parseInt(MyBirthDayDate.substring(8, 10));

    //alert(MyBirthDayDate);  
    // alert (MyBirthYear);
    // alert (MyBirthMonth);
    // alert (MyBirthDate);

    var TodayDate = new Date();

    // alert (TodayDate);  

    var birthday = new Date(MyBirthYear, MyBirthMonth - 1, MyBirthDate);

    //   alert(birthday);
    // alert(TodayDate.valueOf() + " " + birthday.valueOf());
    var differenceInMilisecond = TodayDate.valueOf() - birthday.valueOf();
    //alert(differenceInMilisecond);


    // 31536000000 is equal to 1 year || 12 months || 365
    var AgeInYear = Math.floor(differenceInMilisecond / 31536000000);

    // alert(AgeInYear);

    //86400000 is equal to 1000 days

    var AgeInDay = (Math.floor((differenceInMilisecond % 31536000000) / 86400000)) - 5;

    //alert(AgeInDay);


    if ((TodayDate.getMonth() == birthday.getMonth()) && (TodayDate.getDate() == birthday.getDate())) {
        alert("Happy B'day!!!");
    }


    var AgeInMonth = Math.floor(AgeInDay / 30);

    // alert(AgeInMonth);

    AgeInDay = AgeInDay % 30;

    //  alert(AgeInDay);


    var TotalNoOfMonth = (AgeInMonth + (AgeInYear * 12));
    var TotalNoOfDays = (TotalNoOfMonth * 30) + AgeInDay;

    //alert(TotalNoOfMonth);
    // alert(TotalNoOfDays);

    if (isNaN(AgeInYear) || isNaN(AgeInMonth) || isNaN(AgeInDay)) {
        document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
    } else {
        document.getElementById("age").innerHTML = AgeInYear + " Years " + AgeInMonth + " Months " + AgeInDay + " Days" +
            "<br/> or <br/> " +
            TotalNoOfMonth + " Months " + AgeInDay + " Days" +
            "<br/> or <br/>" +
            TotalNoOfDays + " Days" +
            "<br/> or <br/>" +
            TotalNoOfDays * 24 + " Hours" +
            "<br/> or <br/>" +
            TotalNoOfDays * 24 * 3600 + " Seconds" +
            "<br/> or <br/>" +
            TotalNoOfDays * 24 * 3600 * 1000 + " Miliseconds";
    }

    var NextBirthDayMonth = MyBirthMonth;

    //  if ()
    //    alert(NextBirthDayMonth);
}