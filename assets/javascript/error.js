/*
  const myFunction = () => {
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
}
*/

var x = 15 * 5;
// debugger;
document.getElementById("demo").innerHTML = x;

// A VALIDATOR
function ValidatorSchema() {
  //SETTING THE ERROR MESSAGE AND SUCCESS MESSAGE TO NULL
  this.errorMessage = null;
  this.successMessage = null;
  //AN OBJECT WITH REGEX VALUES
  const rules = {
    alphabet: /^[A-Za-z]+$/, //ONLY FOR ALPHABETS
    number: /^[0-9]+$/, //ONLY FOR NUMBERS
    alphanumeric: /^[A-Za-z0-9\s]+$/, //FOR BOTH NUMBERS AND ALPHABETS
    char: /^[@.A-Za-z0-9]+$/, //ACCEPTS SPECIAL CHARACTERS LIKE @ AND .
  };

  //A VALIDATE METHOD
  this.validate = function (
    data,
    rule,
    message = "Sorry, your data fails the validation rule"
  ) {
    // THIS GETS THE RULES THAT MATCHES WITH THE PARAMETER RULE
    const validateRule = rules[rule];

    // THIS CHECKS IF THERE'S NO RULE FOUND
    if (!validateRule) {
      this.errorMessage = message;
      return false;
    }

    // THIS TESTS THE DATA AND CHECKS IF IT MATCHES WITH THE RULE IT WAS SET WITH
    if (!validateRule.test(data)) {
      this.errorMessage = message;
      return false;
    }

    this.successMessage = "Data is valid";
    this.errorMessage = message;

    return true;
  };
}

const validator = new ValidatorSchema(); // INSTANCIATING THE FUNCTION AS VALIDATOR

const userName = "LightBringer";
const age = 19;
const address = "No 5 Nifson Avenue";
const email = "Lbringer0@gmail.com";

// THIS IS TO VALIDATE THAT THE TYPE HERE IS ALPHABET
if (
  validator.validate(
    userName,
    "alphabet",
    "Username must contain only alphabets"
  )
) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

// THIS IS TO VALIDATE THAT THE TYPE HERE IS NUMBERS
if (validator.validate(age, "number", "Username must contain only numbers")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

// THIS IS TO VALIDATE THAT THE TYPE HERE IS ALPHANUMERIC
if (validator.validate(address, "alphanumeric")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

// THIS IS TO VALIDATE THAT THE TYPE HERE IS SPECIAL CHARACTERS
if (validator.validate(email, "char")) {
  console.log(validator.successMessage);
} else {
  console.log(validator.errorMessage);
}

const expensesStore = [];
