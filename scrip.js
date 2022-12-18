function onCalculateHandler() {
    let result = document.getElementById("billamt").value ? Number(document.getElementById("billamt").value) : null;
    if (!result) {
        alert("Please Enter Bill Amount");
        return;
    }
    let per = document.getElementById("serviceQual").value;
    let noOfPeople = document.getElementById("peopleamt").value ? Number(document.getElementById("peopleamt").value) : 1;
    let finalAmount = ((result / noOfPeople) * per).toFixed(2);
    let h1 = document.getElementById("h1");



    if (noOfPeople > 1) {
        h1.innerHTML = `TIP AMOUNT ${finalAmount} Each`;
    }
    else {
        h1.innerHTML = `TIP AMOUNT ${finalAmount}`;
    }
}