function printError(elementID, messageHint) {
    document.getElementById(elementID).innerHTML = messageHint;
}
function validate() {
    /*Variable from the forms*/
    var firstName = document.register.firstName.value;
    var lastName = document.register.lastName.value;
    var userMail = document.register.userMail.value;
    var collegeName = document.register.collegeName.value;
    var studentUsn = document.register.studentUsn.value;
    var studentMarks = document.register.studentMarks.value;
    var userPassword = document.register.userPassword.value;
    /*Error Variables for Element ID*/
    var firstNameError = true;
    var lastNameError = true;
    var userMailError = true;
    var collegeNameError = true;
    var studentUsnError = true;
    var studentMarksError = true;
    var userPasswordError = true;

    if(firstName==""){
        printError("firstNameError","Please Enter your First Name");
    }else{
        var regularExpression=/^[a-zA-Z\s]+$/;
        if(regularExpression.test(firstName)===false){
            printError("firstNameError","Duh-oh Your Name is not valid");
        }else{
            printError("firstNameError","");
            firstNameError=false;
        }
    }

    if(lastName==""){
        printError("lastNameError","Please Enter your Last Name");
    }else{
        var regularExpression=/^[a-zA-Z\s]+$/;
        if(regularExpression.test(lastName)===false){
            printError("lastNameError","Duh-oh Your Name is not valid");
        }else{
            printError("lastNameError","");
            lastNameError=false;
        }
    }

    if(userMail ==""){
        printError("userMailError", "Email ID Can't be Blank, Please Enter Your Email ID");
      }else{
        var regularExpression=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(regularExpression.test(userMail)===false){
          printError("userMailError", "Please Enter a Valid Email ID");
        }else{
          printError("userMailError", "");
          userMailError=false;
        }
      }

    if(collegeName==""){
        printError("collegeNameError","Please Enter your College Name");
    }else{
        var regularExpression=/^[a-zA-Z\s]+$/;
        if(regularExpression.test(collegeName)===false){
            printError("collegeNameError","Duh-oh Your College Name seems to be Fake");
        }else{
            printError("collegeNameError","");
            collegeNameError=false;
        }
    }

    if (studentUsn == "") {
        printError("studentUsnError","please enter your usn");
    } else {
        var regularExpression = /^(?=.[0-9])[a-zA-Z0-9]+$/;
        if (regularExpression.test(studentUsn) === false) {
            printError("studentUsnError","please enter alphanumeric");
        }else{
            printError("studentUsnError","");
            studentUsnError = false;
        }
    }
    if (studentMarks == "") {
        printError("studentMarksError", "enter your marks");
    } else {
        var regularExpression = /^[0-9\s]+$/;
        if (regularExpression.test(studentMarks) === false) {
            printError("studentMarksError", "it should not contain % symbol");
        } else {
            printError("studentMarksError", "");
            studentMarksError = false;
        }
    }
    if (userPassword == "") {
        printError("userPasswordError", "enter your password");
    } else {
        var regularExpression = /^[0-9A-Za-z@#$%&*\s]+$/;
        if (regularExpression.test(userPassword) === false) {
            printError("userPasswordError", "password should contain atleast 1spcl char and mixture of cap and small letter");
        } else {
            printError("userPasswordError", "");
            userPasswordError = false;
        }
    }
    if ((firstNameError||lastNameError||userMailError||collegeNameError||studentUsnError || studentMarksError || userPasswordError) == true) {
        return false;
    } else {
        
        alert("Your First Name is: "+ firstName + ", Your last Name is: " +lastName + ", Your College Name is: "+collegeName+", Your Email ID is: "+ userMail +", Your Student USN is: "+ studentUsn +", Your Marks are: "+ studentMarks);
    }
}