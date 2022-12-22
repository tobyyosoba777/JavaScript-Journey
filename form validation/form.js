function validateform(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name==null || name==""){
        alert("name can't be blank");
        return false;
    }else if(password.length<6){
        alert("password must be at least 6 characters long");
        return false;
    }
}
