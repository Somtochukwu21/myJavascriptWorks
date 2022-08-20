// THE FIRST ASSIGNMENT TIME CONVERTANT
function convertBetweenTime(time, from, to) {
  time = Number(time);
  if (isNaN(time)) {
    console.error("Please enter a correct input");
  }

  let secondsValue = 0;

  if (from === "ms") {
    secondsValue = time / 1000;
  }

  if (from === "s") {
    secondsValue = time;
  }

  if (from === "m") {
    secondsValue = time * 60;
  }

  if (from === "hr") {
    secondsValue = time * 3600;
  }

  let toValue = 0;

  if (to === "ms") {
    toValue = secondsValue * 1000;
  }

  if (to === "s") {
    toValue = secondsValue;
  }

  if (to === "m") {
    toValue = secondsValue / 60;
  }

  if (to === "hr") {
    toValue = secondsValue / 3600;
  }

  return `${time} in ${from} is ${toValue} in ${to}`;
}

// console.log(convertBetweenTime(1, 'm', 's'));

// THE SECOND ASSIGNMENT SETTING OF ALARM

function setAlarm(time) {
  if (isNaN(time)) {
    console.error("Error at line 58");
  }

  const theHour = new Date().getHours();
  const theMinutes = new Date().getMinutes();
  if (theMinutes == time) {
    console.log(`Wake up it's ${theHour}:${theMinutes}`);
    clearInterval(createInterval);
  }
}

const createInterval = setInterval(() => {
  setAlarm(32);
}, 1000);

// THE THIRD ONE LOOP THROUGH NESTED ARRAYS

let myArry = [
  "Chevrolet",
  "Mercedez",
  "RangeRover",
  ["Camaro", "GLK", ["Black", "White"]],
];
const flattenedArray = myArry.flat();
for (const arr of flattenedArray) {
  let gottenArry = [];
  gottenArry += arr;
  // console.log(gottenArry);
}

// THE FOURTH ASSSIGNMENT CREATING A TODO LIST THAT UPDATES BY IT'S TITLE

const items = [];

function addToDo(item) {
  // THIS CODE HERE MAKES SURE THAT ITEM PARAMETER IS AN OBJECT OR NOT EMPTY
  if (typeof item !== "object" || !item) {
    console.log("Sorry, but this format doesn't match our schema");
    return false;
  } else if (
    // THIS ONE IS TO CHECK FOR THE PROPERTIES OF THE ITEM PARAMETER TO KNOW IF IT HAS THE PROPERTIES HERE
    !item.hasOwnProperty("Title") ||
    !item.hasOwnProperty("Done") ||
    !item.hasOwnProperty("Time")
  ) {
    console.log("Something seems to be missing");
    return false;
  }

  // THIS ONE THROWS AN ERROR IF ACCCEPTED SCHEMA ARE NOT SEEN IN WHAT THE USER ENTERED
  const acceptedItems = ["Title", "Done", "Time"];

  for (const props in item) {
    if (!acceptedItems.includes(props)) {
      console.log(`${props} not accepted`);
      return false;
    }
  }

  // THIS MAKES SURE THAT NONE OF THE STUDENTS HAS THE SAME NAME BUT IF THEY DO IT WILL THROW AN ERROR
  for (const oldItem of items) {
    if (oldItem.Title === item.Title) {
      console.log(`Item with the title ${item.Title} already exists`);
      return false;
    }
  }

  items.push(item);
}

function getToDo(title) {
  // THIS MAKES SURE THAT THE TITLE IS NOT EMPTY
  if (!title) {
    console.log("Title cannot be empty");
    return false;
  }

  // THIS ITERATES THROUHG THE ITEM AND MAKE SURE THAT THE TITLE PARAMETER IS THE SAME AS THE TITLE OF THE OBJECT
  const findTitle = items.find((element) => element.Title.toLowerCase() === title.toLowerCase());

  if (findTitle) {
    for (const theTitle in findTitle) {
      console.log(`${theTitle}:${findTitle[theTitle]}`);
    }
  } else {
    console.log(`Item with the name ${title} not found`);
    return false;
  }

}

function updateToDo(theTitle, myObj) {
  // THIS MAKES SURE THAT THE TITLE IS NOT EMPTY

  if (!theTitle || !myObj) {
    console.log("Title cannot be empty");
    return false;
  }


  // THIS ITERATES THROUHG THE ITEM AND MAKE SURE THAT THE TITLE PARAMETER IS THE SAME AS THE TITLE OF THE OBJECT
  
  const gettingTitle = items.find((found) => found.Title.toLowerCase() === theTitle.toLowerCase());
  
  // THE IF STATEMENT ONLY WORKS WHEN THE PARAMETER MATCHES THE TITLE
  if (gettingTitle) {
  
    for (const solution of items) {
      for (const key in solution) {
        if (key === myObj) {
                if (myObj === "Done") {
            solution[key]=false;
          }
        }
      }
    }
  } else {
    console.log(`Item with the name ${theTitle} not found`);
    return false;
  }

}

function deleteToDo(deletedTitle) {
  if (!deletedTitle) {
    console.log('Title can not be empty');
    return false;
  }
//   const deletedTitleItem=items.find((theDeletedTitle)=>theDeletedTitle.Title===deletedTitle)
//  console.log(deletedTitleItem);


for (const deletedItems of items) {
  for (const key in deletedItems) {
    if (deletedItems.hasOwnProperty.call(deletedItems, key)) {
      const element = deletedItems[key];
  
      if (deletedTitle===element) {
delete deletedItems[key];
    }
    }
  }
 }

}




addToDo({
  Title: "Sweep",
  Time: "2hrs ago",
  Done: true,
});

getToDo("sweep");

updateToDo("Sweep", "Done");


deleteToDo('2hrs ago');

// console.log(items);



