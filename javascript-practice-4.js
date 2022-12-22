var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + "/" + month + "/" + year);

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + "/" + month + "/" + year);

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("Todays date is: " + day + "/" + month + "/" + year)

document.write("<br/>")

var date = new Date();
day = date.getDate();
month = date.getMonth();
year = date.getFullYear();
document.write("today's date is: " + day + '/' + month + '/' + year);

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + "/" + month + "/" + year)

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + '/' + month + "/" + year)

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + "/" + month + "/" + year);

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is: " + day + "/" + month + "/" + year);

document.write("<br/>")

function getDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    document.write("today's date is: " + day + "/" + month + "/" + year);
}
getDate();

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is:" + day + "/" + month + "/" + year);

document.write("<br/>")

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
document.write("today's date is " + day + "/" + month + "/" + year)


window.onload=function(){getTime();}
function getTime(){
    var today=new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML= h + ":" + m + ":" + s;
    setTimeout(function(){getTime()},1000);
}

//set interval("getTime()",1000); another way
function checkTime(i){
    if(i<10){
        i="0" + i;
    }
    return i;
}

document.write("<br/>")

