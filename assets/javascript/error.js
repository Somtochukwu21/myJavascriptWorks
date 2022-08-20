/*const myFunction = () => {
    let message, x;
    message = document.getElementById('message');
    x = document.getElementById('demo').value;
    try {
        x = Number(x);
        if (isNaN(x)) {
            throw "Not a number"
        }
        if (x == "") {
            throw "Empty"
        }

        if (x < 5) {
            throw "Too low"
        }

        if (x > 10) {
            throw "Too high"
        }
        else {
            message.innerHTML = "Verified";
        }
    } catch (error) {
        message.innerHTML = "Input is " + error;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}*/

var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;