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

  for (const key in data) {
    if (!keys.includes(key)) {
      throw `${key} does not exist `;
    }
  }
  return true;
};

const validator = new SchemaValidation(); //Instanciation

const hall = [];

// just to make sure that hall with the same id doesn't exist twice
const isExistingHall = (id) => {
  return hall.find((hall) => {
    return hall.id == id;
  });
};

function CinemaHall() {
  this.addData = (data = {}) => {
    // check if all data is valid
    const keys = ["id", "title", "price", "seats"];
    if (!SchemaValidation.validateData(data, keys)) {
      return false;
    }

    const existingHall = isExistingHall(data.id);
    if (existingHall) {
      console.log(`Hall with ID = ${data.id} already exists`);
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
  price: 100,
});

halls.addData({
  id: 2,
  title: "The Boyz",
  seats: 33,
  price: 100,
});

// console.log(hall);

const viewers = [];

function ViewersData(purchases) {
  this.viewersData = [];
  ((_purchases) => {
    const validator = new SchemaValidation(); //Instanciation
    // check if all data is valid
    const keys = ["id", "hall_id", "seats", "amount"];

    if (!SchemaValidation.validateData(_purchases, keys)) {
      return false;
    }
    if (!validator.validate(_purchases.price, "char")) {
      throw validator.errorMessage;
    }
    this.viewersData.push(_purchases);
    viewers.push(_purchases);
  })(purchases);
}

// just to make sure that viewers  with the same id doesn't exist twice
const isViewerExist = (id) => {
  return viewers.find((viewers) => {
    return viewers.id === id;
  });
};
const purchaseRecords = [];

function AddViewersData() {
  this.add = (data = {}) => {
    const viewerId = isViewerExist(data.id);
    if (viewerId) {
      console.log(`Sorry a viewer has registered with the ID of ${data.id}`);
      return false;
    }

    const existingHall = isExistingHall(data.hall_id);
    if (!existingHall) {
      console.log(`Sorry the hall with ID ${data.hall_id} does not exist`);
      return false;
    }

    // make sure that viewer is not under paying or overpaying
    const supposedAmount = data.seats * existingHall.price;
    if (supposedAmount > data.amount) {
      throw `Sorry we cannot process your order right now, you paid less  than required amount`;
    }

    if (supposedAmount < data.amount) {
      throw `Sorry we cannot process your order right now, you paid more than required amount`;
    }

    if (existingHall.seats < 0) {
      console.log(`Sorry there are no seats left in hall ${data.hall_id}`);
      return false;
    }

    if (existingHall.seats < data.seats) {
      console.log(`Sorry, we are only left with ${existingHall.seats} seats`);
      return false;
    }

    existingHall.seats -= data.seats;
    const cinemaViewersData = new ViewersData(data);
    // create purchase record
    const purchaseRecord = {
      id: data.id,
      hall_id: data.hall_id,
      seats: data.seats,
    };

    purchaseRecords.push(purchaseRecord);
    return cinemaViewersData;
  };
}

const viewersData = new AddViewersData();
viewersData.add({
  id: 1,
  hall_id: 1,
  seats: 4,
  amount: 400,
});

viewersData.add({
  id: 2,
  hall_id: 2,
  seats: 2,
  amount: 200,
});

viewersData.add({
  id: 3,
  hall_id: 2,
  seats: 24,
  amount: 2400,
});


console.table(hall);
console.table(viewers);
console.table(purchaseRecords);
