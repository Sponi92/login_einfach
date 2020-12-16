let check=prompt("Geben sie ihren Benutzer ein", " ");
if (check === "Admin") {
let password=prompt("Geben sie ihr Passwort ein", " ");
        if (password === "TheMaster"){
        alert("Welcome")
        }
        else if (password===null || password==false){
        alert("Canceled")
        }
        else {
        alert("Wrong Password")
        }
}

else if (check===null || check==false) {
alert("Canceled")
}

else{
alert("I don´t know you")
}
