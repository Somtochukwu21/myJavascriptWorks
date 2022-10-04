// THE FOURTH ASSSIGNMENT CREATING A TODO LIST THAT UPDATES BY IT'S TITLE
let todoList = [
  {
    Title: "First todo",
    Date: "12/12/2024",
    Done: true,
  },
  {
    Title: "Second todo",
    Date: "12/12/2024",
    Done: true,
  },
  {
    Title: "Third todo",
    Date: "12/12/2024",
    Done: false,
  },
  {
    Title: "Fourth todo",
    Date: "12/12/2024",
    Done: false,
  },
];

function addToDO(list) {
  // MAKING SURE THE PARAMETER IS NOT EMPTY OR NOT AN OBJECT
  if (!list || typeof list !== "object") {
    console.log("Title cannot be empty");
    return false;
  }

  // THIS MAKES SURE THAT THE TITLE PARAMETER ENTERED DOES NOT EXIST TWICE
  for (const oldList of todoList) {
    if (oldList.Title === list.Title) {
      console.log(`Todo with title "${list.Title}" already exists`);
      return false;
    }
  }

  if (typeof list.Done !== "boolean") {
    console.log("Boolean value expected");
  }

  // THIS CODE CHECKS IF THE NEW TO DO MATCHES THE SCHEMA
  if (
    !list.hasOwnProperty("Title") ||
    !list.hasOwnProperty("Date") ||
    !list.hasOwnProperty("Done")
  ) {
    console.log("The added list doesn't match the Schema");
  }

  //   THIS PUSHES THE PARAMETER OBJECT TO THE MAIN ARRAY OF OBJECT "toDoList"
  todoList.push(list);

  // AND NOW I RETURN THE PARAMETER
  return list;
}

addToDO({
  Title: "Fifth todo",
  Done: true,
  Date: "12/2/2021",
});

// FUNCTION THAT GETS THE TODO BY TITLE

function getToDo(title) {
  // MAKING SURE THE PARAMETER IS NOT LEFT EMPTY OR NOT AN OBJECT
  if (!title) {
    console.log("Title cannot be empty");
    return false;
  }

  // THIS MAKES SURE THAT THE TITLE PARAMETER ENTERED DOES NOT EXIST TWICE
  for (const oldList of todoList) {
    if (oldList.Title.toLowerCase() === title.toLowerCase()) {
      console.log(oldList);
      return oldList;
    }
  }

  // IF THE TODO WITH THE TITLE SPECIFIED IN THE PARAMETER IS NOT FOUND THEN THE console.LOG WILL LOG OUT THE INFO INIT

  console.log(`${title} not found`);
  return false;
}

// getToDo("Second todo");

// THIS FUNCTION AFTER GETTING THE TODO BY TITLE CAN UPDATE ANY PART OF IT
function updateToDo(title, newToDo) {
  // THIS CHECKS IF THERE'S NO NEW TODO OR THE TYPE IS NOT AN OBJECT. IF THE TYPE IS NOT AN OBJECT IT SHOULD CONSOLE THE MESSAGE THERE
  if (!newToDo || typeof newToDo != "object") {
    console.log("Enter new todo info");
    return false;
  }

  // THIS MAPS THROUGH THE OBJECT
  todoList = todoList.map((oldToDo) => {
    // THIS CHECKS IF THE OLDTODO TITLE MATCHES WITH THE SPECIFIED PARAMETER FUNCTION\
    if (oldToDo.Title.toLowerCase() === title.toLowerCase()) {
      // THIS CHECKS IF THE SPECIFIED OBJECT I.E THE SECOND PARAMETER IS THE TITLE
      if (newToDo.Title) {
        // IF IT IS THE TITLE THAT WAS SPECIFIED THIS CODE NOW ASSIGNS THE NEW TODO TO THE OLDTODO
        oldToDo.Title = newToDo.Title;
        console.log(oldToDo);
        return;
      }

      // THIS CHECKS IF THE SPECIFIED OBJECT I.E THE SECOND PARAMETER IS THE DATE
      if (newToDo.Date) {
        // IF IT IS THE DATE THAT WAS SPECIFIED THIS CODE NOW ASSIGNS THE NEW TODO TO THE OLDTODO
        oldToDo.Date = newToDo.Date;
        console.log(oldToDo);
        return;
      }

      // THIS CHECKS IF THE SPECIFIED OBJECT I.E THE SECOND PARAMETER IS DONE THAT IS EQUAL TO TRUE

      if (newToDo.Done === true) {
        // IF THE STATEMENT IS TRUE THEN THE CODE EXECUTES?
        oldToDo.Done = newToDo.Done;
        console.log(oldToDo);
        return;
      }

      // THIS CHECKS IF THE SPECIFIED OBJECT I.E THE SECOND PARAMETER IS DONE THAT IS EQUAL TO FALSE
      if (newToDo.Done === false) {
        // IF THE STATEMENT IS TRUE THEN THE CODE EXECUTES?
        oldToDo.Done = newToDo.Done;
        console.log(oldToDo);
        return;
      }
    }
    return oldToDo;
  });
}

// updateToDo("second todo", { Done: false });

// FUNCTION THAT DELETES TODO
function deleteToDo(title) {
  // CHECKS IF THE TITLE IS EMPTY
  if (!title) {
    console.log("Title cannot be empty!");
    return false;
  }
  if (title !== todoList.title) {
  }
  // FILTERS THROUGH THE ARRAY
  todoList = todoList.filter((filtrate) => {
    if (filtrate.Title.toLocaleLowerCase() !== title.toLocaleLowerCase()) {
      return true;
    }
  });
}
deleteToDo("first todo");

// console.log('\n');
// console.log(todoList);
