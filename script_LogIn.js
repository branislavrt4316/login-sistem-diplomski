function validationLogIn() {
    const form = document.getElementById("form1");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    })


    function checkInputs() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        // provera emaila
        if (emailValue === '') {
            setErrorForEmail('Email ne može biti prazan!');
            return false;
        }

        if (!isEmail(emailValue)) {
            setErrorForEmail('Email nije validan!');
            return false;
        }

        if ((emailValue !== '') && (isEmail(emailValue))) {   
            setSuccessForEmail();
        }


        // provera lozinke
        if (passwordValue === '') {
            setErrorForPassw('Lozinka ne može biti prazna!');
            return false;
        }

        if (!isPassword(passwordValue)) {
            setErrorForPassw('Lozinka mora da sadrži barem 4 karaktera!');
            return false;
        }

        if ((passwordValue !== '') && (isPassword(passwordValue))) {
            setSuccessForPassw();
        }

        // kada su email i lozinka tacni oboje prikazi poruku

        if (((emailValue !== '') && (isEmail(emailValue))) && ((passwordValue !== '') && (isPassword(passwordValue)))) {
            const successMessage = document.getElementById('error');
            successMessage.classList.remove("error_message"); // brisanje klase diva za gresku na vrhu forme
            successMessage.classList.add("submited_message"); // dodavanje klase diva na vrhu forme za potvrdu zelene boje
            successMessage.innerHTML = "Uspešno ste ulogovani!"; // dodavanje teksta u div na vrhu forme
        }

    }



    /* Provera greske email-a */

    function setErrorForEmail(message) {
        const errorButton = document.getElementById('errorEmail');
        errorButton.style.visibility = 'visible'; //OMOGUCAVANJE error button na desnoj strani inputa
        const successButton = document.getElementById('successEmail');
        successButton.style.visibility = 'hidden'; //ONEMOGUCAVANJE success button na desnoj strani inputa

        const errorBorder = document.getElementById('email');
        errorBorder.classList.add("error"); //OMOGUCAVANJE crvenog okvira za email
        const successBorder = document.getElementById('email');
        successBorder.classList.remove("success"); //ONEMOGUCAVANJE zenelog okvira za email

        const errorMessage = document.getElementById('error');
        errorMessage.classList.add("error_message"); //dodavanje diva za gresku na vrhu forme
        errorMessage.innerHTML = message; // dodavanje teksta u div na vrhu forme
    }

    function setSuccessForEmail() {
        const errorButton = document.getElementById('errorEmail');
        errorButton.style.visibility = 'hidden'; //ONEMOGUCAVANJE error button na desnoj strani inputa
        const successButton = document.getElementById('successEmail');
        successButton.style.visibility = 'visible'; //OMOGUCAVANJE success button na desnoj strani inputa

        const errorBorder = document.getElementById('email');
        errorBorder.classList.remove("error"); //ONEMOGUCAVANJE crvenog okvira za email
        const successBorder = document.getElementById('email');
        successBorder.classList.add("success"); //Omogucavanje zenelog okvira za email

        const successMessage = document.getElementById('error');
        successMessage.classList.remove("error_message"); //brisanje klase diva za gresku na vrhu forme
        $("#error").empty(); //brisanje sadrzaja diva na vrhu forme pomocu jquery-a
    }

    function isEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /* Provera greske lozinke */

    function setErrorForPassw(message) {
        const errorButton = document.getElementById('errorPassword');
        errorButton.style.visibility = 'visible'; //OMOGUCAVANJE error button na desnoj strani inputa
        const successButton = document.getElementById('successPassword');
        successButton.style.visibility = 'hidden'; //ONEMOGUCAVANJE success button na desnoj strani inputa

        const errorBorder = document.getElementById('password');
        errorBorder.classList.add("error"); //OMOGUCAVANJE crvenog okvira za password
        const successBorder = document.getElementById('password');
        successBorder.classList.remove("success"); //ONEMOGUCAVANJE zenelog okvira za password

        const errorMessage = document.getElementById('error');
        errorMessage.classList.add("error_message"); //dodavanje diva za gresku na vrhu forme
        errorMessage.innerHTML = message; // dodavanje teksta u div na vrhu forme

    }

    function setSuccessForPassw() {
        const errorButton = document.getElementById('errorPassword');
        errorButton.style.visibility = 'hidden'; //ONEMOGUCAVANJE error button na desnoj strani inputa
        const successButton = document.getElementById('successPassword');
        successButton.style.visibility = 'visible'; //OMOGUCAVANJE success button na desnoj strani inputa

        const errorBorder = document.getElementById('password');
        errorBorder.classList.remove("error"); //ONEMOGUCAVANJE crvenog okvira za email
        const successBorder = document.getElementById('password');
        successBorder.classList.add("success"); //Omogucavanje zenelog okvira za email

        const successMessage = document.getElementById('error');
        successMessage.classList.remove("error_message"); //brisanje klase diva za gresku na vrhu forme
        $("#error").empty(); //brisanje sadrzaja diva na vrhu forme pomocu jquery-a
    }

    function isPassword(psw) {
        var prom = psw;
        if (prom.length >= 4) {
            return true;
        } else {
            return false;
        }
    }
}


/* Funkcija za birsanje forme 1 i prikaz forme 2 za zaboravljenu lozinku */

function forgotPsw() {
    const form1 = document.getElementById("form1");
    form1.style.display = "none";

    const form2 = document.getElementById("form2");
    form2.style.display = "block";

    const title = document.getElementById("title");
    title.innerHTML = "Resetuj lozinku";

}

/* Funkcija za birsanje forme 2 i prikaz forme 1 za logovanje */

function loginBack() {
    const form2 = document.getElementById("form2");
    form2.style.display = "none";

    const form1 = document.getElementById("form1");
    form1.style.display = "block";

    const title = document.getElementById("title");
    title.innerHTML = "Forma za prijavu";
}

function showPsw(){
    var x = document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
        document.getElementById("eye").style.display = "none";
        document.getElementById("eyeSlash").style.display = "block";
    }else{
        x.type = "password";
        document.getElementById("eyeSlash").style.display = "none";
        document.getElementById("eye").style.display = "block";
    }
}