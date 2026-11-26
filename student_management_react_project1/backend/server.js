// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());


// let students = [
//     {
//         id: 101,
//         name: "Rahul Sharma",
//         email: "rahul@gmail.com",
//         branch: "CSE",
//         semester: 3,
//         mobile: "9876543210"
//     }
// ];


// app.get("/", (req, res) => {
//     res.send("Student Management System Backend is running");
// });


// app.get("/api/students", (req, res) => {
//     res.json(students);
// });


// app.get("/api/students/:id", (req, res) => {
//     const id = Number(req.params.id);

//     const student = students.find((student) => student.id === id);

//     if (!student) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     res.json(student);
// });


// app.post("/api/students", (req, res) => {

//     const { id, name, email, branch, semester, mobile } = req.body;

    
//     if (!id || !name || !email || !branch || !semester || !mobile) {
//         return res.status(400).json({
//             message: "All fields are required"
//         });
//     }

 
//     const existingStudent = students.find(
//         (student) => student.id === Number(id)
//     );

//     if (existingStudent) {
//         return res.status(400).json({
//             message: "Student ID already exists"
//         });
//     }

//     const newStudent = {
//         id: Number(id),
//         name,
//         email,
//         branch,
//         semester: Number(semester),
//         mobile: String(mobile)
//     };

//     students.push(newStudent);

//     res.status(201).json({
//         message: "Student added successfully",
//         student: newStudent
//     });
// });


// app.put("/api/students/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const studentIndex = students.findIndex(
//         (student) => student.id === id
//     );

//     if (studentIndex === -1) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     const { name, email, branch, semester, mobile } = req.body;

//     if (!name || !email || !branch || !semester || !mobile) {
//         return res.status(400).json({
//             message: "All fields are required"
//         });
//     }

//     students[studentIndex] = {
//         id,
//         name,
//         email,
//         branch,
//         semester: Number(semester),
//         mobile: String(mobile)
//     };

//     res.json({
//         message: "Student updated successfully",
//         student: students[studentIndex]
//     });
// });


// app.delete("/api/students/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const studentIndex = students.findIndex(
//         (student) => student.id === id
//     );

//     if (studentIndex === -1) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     const deletedStudent = students.splice(studentIndex, 1);

//     res.json({
//         message: "Student deleted successfully",
//         student: deletedStudent[0]
//     });
// });


// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());




let students = [
    {
        id: 101,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        branch: "CSE",
        semester: 3,
        mobile: "9876543210"
    }
];

function validateStudent(data) {
    const { id, name, email, branch, semester, mobile } = data;

    
    if (
        id === undefined ||
        id === null ||
        name === undefined ||
        email === undefined ||
        branch === undefined ||
        semester === undefined ||
        mobile === undefined
    ) {
        return "All fields are required.";
    }

    
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return "Student ID must be a positive number.";
    }

    
    if (String(name).trim().length < 2) {
        return "Name must contain at least 2 characters.";
    }

    
    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(String(email).trim())) {
        return "Invalid email address.";
    }

   
    const validBranches = ["CSE", "CS", "IT", "ECE"];

    if (!validBranches.includes(branch)) {
        return "Invalid branch.";
    }

    
    const semesterNumber = Number(semester);

    if (
        !Number.isInteger(semesterNumber) ||
        semesterNumber < 1 ||
        semesterNumber > 8
    ) {
        return "Semester must be between 1 and 8.";
    }

    
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(String(mobile).trim())) {
        return "Mobile number must contain exactly 10 digits.";
    }

    return null;
}




app.get("/", (req, res) => {

    res.send(
        "Student Management System Backend is running"
    );

});




app.get("/api/students", (req, res) => {

    res.json(students);

});



app.get("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        (student) => student.id === id
    );


    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }


    res.json(student);

});




app.post("/api/students", (req, res) => {

    const {
        id,
        name,
        email,
        branch,
        semester,
        mobile
    } = req.body;


    const validationError =
        validateStudent(req.body);


    if (validationError) {

        return res.status(400).json({
            message: validationError
        });

    }


    const existingStudent = students.find(
        (student) =>
            student.id === Number(id)
    );


    if (existingStudent) {

        return res.status(400).json({
            message: "Student ID already exists"
        });

    }


    const newStudent = {

        id: Number(id),

        name: name.trim(),

        email: email.trim(),

        branch,

        semester: Number(semester),

        mobile: String(mobile)

    };


    students.push(newStudent);


    res.status(201).json({

        message: "Student added successfully",

        student: newStudent

    });

});



app.put("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);


    const studentIndex =
        students.findIndex(
            (student) =>
                student.id === id
        );


    if (studentIndex === -1) {

        return res.status(404).json({

            message: "Student not found"

        });

    }


    const validationError =
        validateStudent({
            ...req.body,
            id: id
        });


    if (validationError) {

        return res.status(400).json({

            message: validationError

        });

    }


    const updatedStudent = {

        id: id,

        name: req.body.name.trim(),

        email: req.body.email.trim(),

        branch: req.body.branch,

        semester: Number(req.body.semester),

        mobile: String(req.body.mobile)

    };


    students[studentIndex] =
        updatedStudent;


    res.json({

        message: "Student updated successfully",

        student: updatedStudent

    });

});




app.delete("/api/students/:id", (req, res) => {

    const id = Number(req.params.id);


    const studentIndex =
        students.findIndex(
            (student) =>
                student.id === id
        );


    if (studentIndex === -1) {

        return res.status(404).json({

            message: "Student not found"

        });

    }


    const deletedStudent =
        students.splice(studentIndex, 1);


    res.json({

        message: "Student deleted successfully",

        student: deletedStudent[0]

    });

});




const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});