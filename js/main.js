// start of validationData function 

function validateData(){
    var username= document.getElementById("username").value;
    var mail= document.getElementById("mail").value;
    var password= document.getElementById("password").value;
    var confirm= document.getElementById("confirm").value;

    var result=document.getElementById("result");

    result.setAttribute("class","alert alert-danger text-center p-2 rawan");



    if (username=="" && mail=="" && password==""&& confirm==""){
        result.innerHTML="Enter Data In Form";

        return false;
    }else if(username.length<5 || username.length>15){
        result.innerHTML="Enter in Username 5-15 Charcter";

        return false;
    }else if (mail.indexOf("@",3) ==-1 || mail.indexOf("gmail.com")==-1){
        result.innerHTML="Enter Valid Email";

        return false;
    }else if(password==""){
        result.innerHTML="Enter password";

        return false;
    }else if(password.length<8){
        result.innerHTML="week password";

        return false;
    }else if(confirm==""){
        result.innerHTML="Retype your password";

        return false;
    }else if(password != confirm){
        result.innerHTML="Enter the same password please";

        return false;
    }
}
    








// end of validationData function 