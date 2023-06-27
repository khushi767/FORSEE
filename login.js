function validate()
{
    var username=document.getElementById("username").ariaValueMax;
    var password=document.getElementById("password").ariaValueMax;
    if(username=="admin"&&password=="user")
    {
        alert("login succesfully");
        return false;
    }
    else{
        alert("login failed");
    }
}