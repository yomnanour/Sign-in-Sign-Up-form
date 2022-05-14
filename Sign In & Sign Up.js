var check = false;

function AddEmail(x) {
    console.log(x);
    window.sessionStorage.setItem("email",x);
}

function CheckEmail(y) {
    var email = window.sessionStorage.getItem("email");
    if (email == y) {
        check = true ;
    } 
}

function Check() {
    if (check) {
        open.window("#");
    }
    else {
        alert("We couldn't find an account that matches what you entered, Please Sign Up First!")
    }
}