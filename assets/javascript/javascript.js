// THE FIFTH ASSIGNMENT

// the schema validation
function SchemaValidation() {
  this.successMessage = null;
  this.errorMessage = null;

  // the rules of the validation
  const rules = {
    alphabet: /^[A-Za-z]+$/,
    number: /^[0-9]+$/,
    alphanumeric: /^[A-Za-z0-9\s]+$/,
    char: /^[@.$A-Za-z0-9]+$/,
  };

  // the validate method
  this.validate = function (
    data,
    rule,
    message = "Sorry your data failed the validation"
  ) {
    const validatorRule = rules[rule];

    // check if the rule is found
    if (!validatorRule) {
      this.errorMessage = "Please check the rule you passed";
      return false;
    }

    // tests data to know if it matches with the rules
    if (!validatorRule.test(data)) {
      this.errorMessage = message;
      return false;
    }

    this.successMessage = "Data is valid";
    this.errorMessage = null;
    return true;
  };
}

SchemaValidation.validateData = (data, keys) => {
  /**@description Validates the presence of the keys */
  // loops through the keys
  for (const prop of keys) {
    // passes theproperty of keys to a variable
    const currentProp = data[prop];

    // checks if there's no match between the keys and data entered
    if (!currentProp) {
      console.log(`${prop.toUpperCase()} is not found`);
      return false;
    }
  }
  return true;
};

const validator = new SchemaValidation(); //Instanciation

const hall = [];

// just to make sure that hall with the same id doesn't exist twice
const isExistingHall = (id) => {
  const exist = hall.find((inventory) => {
    return inventory.id == id;
  });

  return exist;
};

function CinemaHall() {
  this.addData = (data = {}) => {
    // check if all data is valid
    const keys = ["id", "title", "price", "seats"];

    if (!SchemaValidation.validateData(data, keys)) {
      return false;
    }

    const ExistingHall = isExistingHall(data.id);
    if (ExistingHall) {
      console.log(`Inventory with ID = ${data.id} already exists`);
      return false;
    }
    hall.push(data);
  };
}

const halls = new CinemaHall();
halls.addData({
  id: 1,
  title: "Joker",
  seats: 33,
  price: 1,
});

halls.addData({
  id: 2,
  title: "The Boyz",
  seats: 33,
  price: 1,
});

// console.log(hall);

const viewers = [];

function ViewersData(purchases) {
  this.viewersData = [];
  ((_purchases) => {
    const validator = new SchemaValidation(); //Instanciation
    // check if all data is valid
    const keys = ["hall_id", "seats", "price"];

    if (!SchemaValidation.validateData(_purchases, keys)) {
      return false;
    }
    if (!validator.validate(_purchases.price, "char")) {
      throw validator.errorMessage;
      return false;
    }
    this.viewersData.push(_purchases);
    viewers.push(_purchases);
  })(purchases);
}

function AddViewersData() {
  this.add = (data = {}) => {
    const ExistingHall = isExistingHall(data.hall_id);
    if (!ExistingHall) {
      console.log(`Sorry the hall with ID ${data.hall_id} does not exist`);
      return false;
    }

    ExistingHall.seats -= data.seats;
    ExistingHall.price += data.price;

    if (ExistingHall.seats < 0) {
      ExistingHall.seats = null;
      ExistingHall.price = null;

      console.log(`Sorry there are no seats left in hall ${data.hall_id}`);
      return false;
    }

    const CinemaViewersData = new ViewersData(data);
    console.log(CinemaViewersData.viewersData);
  };
}

const viewersData = new AddViewersData();

viewersData.add({
  hall_id: 1,
  seats: 26,
  price: 26,
});

viewersData.add({
  hall_id: 2,
  seats: 2,
  price: 2,
});

viewersData.add({
  hall_id: 2,
  seats: 24,
  price: 24,
});

console.log(viewers);
console.table(hall);
