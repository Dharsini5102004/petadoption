function sendotp(){
    const email=document.getElementById("ename");
    Email.send({
        SecureToken : "c9679822-2361-4e6a-ae07-ee4498417fdb ",
        To : "dharsiniashokraja@gmail.com",
        From : email.value,
        Subject : "pet shop",
        Body : "And this is the body"
    }).then(
      message => {
        if(message === "OK")
        {
            console.log("success");
            alert("email send successfully");
        }
            
        else
        {
            alert("invalid email");
            console.log("error");
        }
      }
    );
}