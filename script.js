function validation() {
            var name = document.getElementById("Username").value;
            var mail = document.getElementById("Email").value;
            var pass = document.getElementById("Password").value;
            var cpass = document.getElementById("ConPassword").value;
            var ph = document.getElementById("Phone").value;

            var digits = 0, chars = 0, special = 0;
            for (var i = 0; i < pass.length; i++) {
                var ch = pass.charAt(i);
                if ((ch >= '0') && (ch <= '9'))
                    digits += 1;
                else if (((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z')))
                    chars += 1;
                else
                    special += 1;
            }            
            
            var e = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            var p = /^\d{10}$/;

            if (name.length == 0) {
                alert("Wrong Name format");
            }
            else if (!mail.match(e)) {
                alert("Wrong Email format");
            }            
            else if ((pass.length < 6) || (digits == 0) || (chars == 0) || (special == 0)) {
                alert("Password must contain atleast 6 characters with 1 digit and 1 special symbol");
            }
            else if (cpass != pass) {
                alert("Password and Confirm Password are not same");
            }
            else if (!ph.match(p)) {
                alert("Wrong Phone format");
            }
            else{
                alert("Account Successfully Created!!")
            }
}