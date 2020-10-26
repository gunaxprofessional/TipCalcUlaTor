function cal() {

    var BillAmount = document.getElementById("totBill").value;
    var Service = document.getElementById("service").value
    var NoOfPeople = document.getElementById("numpeo").value;



    if (BillAmount == "") {
        alert("Please Enter Bill Amount");
        return false;
    }
    var total = (BillAmount * Service) / NoOfPeople;
    //round to two decimal places
    total = Math.round((total * 100) / 100);
    var totalAmount = parseInt(total) * parseInt(NoOfPeople) + parseInt(BillAmount);

    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    document.getElementById("tip").innerHTML = total + "Rs " + "For Each Member";

    document.getElementById("TA").innerHTML = totalAmount + "Rs";

}