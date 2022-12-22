function getDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    alert("today's date is: " + day + "/" + month + "/" + year);
}
getDate();