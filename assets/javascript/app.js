

const students = [];

function addStudent(student) {
    // THIS CODE THROWS AN ERROR IF THE VALUE ENTERED BY THE USER IS NOT OF OBJEC TYPE
    if (typeof student !== 'object' || !student) {
        throw "Please enter a  valid schema";
    }

    // THIS STATEMENT IS TO CHECK IF STUDENT DOES NOT HAVE ANY OF THE GIVEN THEN IT SHOULD THROW AN ERROR IF TRULY IT DOESN'T
    if (
        !student.hasOwnProperty('age') ||
        !student.hasOwnProperty('gender') ||
        !student.hasOwnProperty('class') ||
        !student.hasOwnProperty('name')
    ) {
        throw 'Sorry you failed to match our criteria';
    }


    // THIS ONE THROWS AN ERROR IF ACCCEPTED SCHEMA ARE NOT SEEN IN WHAT THE USER ENTERED
    const acceptedSchema = ['age', "gender", "class", "name"]
    for (const props in student) {
        if (!acceptedSchema.includes(props)) {
            throw `${props} not accepted`
        }
    }

    // THIS MAKES SURE THAT NONE OF THE STUDENTS HAS THE SAME NAME BUT IF THEY DO IT WILL THROW AN ERROR
    for (let oldStudent of students) {
        if (oldStudent.name === student.name) {
            throw `Student with the name ${student.name} already exists`
        }
    }
    students.push(student)
}

function getStudent(name) {
    if (!name) {
        throw "Name cannot be empty";
    }
    const student = students.find(
        (oldStudent) => oldStudent.name.toLowerCase() === name.toLowerCase()
    );
    if (!student) {
        throw `Student with the name ${name} not found`
    }
}

addStudent(
    {
        age: 21,
        gender: 'male',
        class: 'SS3',
        name: 'Dave',
    }
);


addStudent(
    {
        age: 21,
        gender: 'male',
        class: 'SS3',
        name: 'ifo3uwan',
    }
);


getStudent('Dave')
