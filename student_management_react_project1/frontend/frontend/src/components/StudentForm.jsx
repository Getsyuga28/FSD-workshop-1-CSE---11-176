// function StudentForm() {
//     return (
//         <div>
//             <h2>Add Student</h2>

//             <form>
//                 <input
//                     type="number"
//                     placeholder="Student ID"
//                 />

//                 <input
//                     type="text"
//                     placeholder="Name"
//                 />

//                 <input
//                     type="email"
//                     placeholder="Email"
//                 />

//                 <select>
//                     <option value="">Select Branch</option>
//                     <option value="CSE">CSE</option>
//                     <option value="CS">CS</option>
//                     <option value="IT">IT</option>
//                     <option value="ECE">ECE</option>
//                 </select>

//                 <input
//                     type="number"
//                     placeholder="Semester"
//                     min="1"
//                     max="8"
//                 />

//                 <input
//                     type="text"
//                     placeholder="Mobile Number"
//                 />

//                 <button type="submit">
//                     Add Student
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default StudentForm;
// import { useState } from "react";

// function StudentForm({ onStudentAdded }) {

//     const [formData, setFormData] = useState({
//         id: "",
//         name: "",
//         email: "",
//         branch: "",
//         semester: "",
//         mobile: ""
//     });

//     const [message, setMessage] = useState("");

    
//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

   
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/students",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(formData)
//                 }
//             );

//             const data = await response.json();

//             if (!response.ok) {
//                 setMessage(data.message);
//                 return;
//             }

//             setMessage("Student added successfully!");

            
//             if (onStudentAdded) {
//                 onStudentAdded();
//             }

          
//             setFormData({
//                 id: "",
//                 name: "",
//                 email: "",
//                 branch: "",
//                 semester: "",
//                 mobile: ""
//             });

//         } catch (error) {
//             setMessage("Unable to connect to server");
//         }
//     };

//     return (
//         <div className="form-container">

//             <h2>Add Student</h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="number"
//                     name="id"
//                     placeholder="Student ID"
//                     value={formData.id}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <select
//                     name="branch"
//                     value={formData.branch}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select Branch</option>
//                     <option value="CSE">CSE</option>
//                     <option value="CS">CS</option>
//                     <option value="IT">IT</option>
//                     <option value="ECE">ECE</option>
//                 </select>

//                 <input
//                     type="number"
//                     name="semester"
//                     placeholder="Semester"
//                     min="1"
//                     max="8"
//                     value={formData.semester}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">
//                     Add Student
//                 </button>

//             </form>

//             {message && (
//                 <p>{message}</p>
//             )}

//         </div>
//     );
// }

// export default StudentForm;

// import { useEffect, useState } from "react";

// function StudentForm({ onStudentAdded, editingStudent, onUpdateComplete }) {

//     const [formData, setFormData] = useState({
//         id: "",
//         name: "",
//         email: "",
//         branch: "",
//         semester: "",
//         mobile: ""
//     });

//     const [message, setMessage] = useState("");

//     // Load student data when Edit is clicked
//     useEffect(() => {

//         if (editingStudent) {

//             setFormData({
//                 id: editingStudent.id,
//                 name: editingStudent.name,
//                 email: editingStudent.email,
//                 branch: editingStudent.branch,
//                 semester: editingStudent.semester,
//                 mobile: editingStudent.mobile
//             });

//             setMessage("");
//         }

//     }, [editingStudent]);


//     // Handle input changes
//     const handleChange = (e) => {

//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };


//     // Handle form submission
//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         try {

//             let response;

//             // UPDATE
//             if (editingStudent) {

//                 response = await fetch(
//                     `http://localhost:3000/api/students/${editingStudent.id}`,
//                     {
//                         method: "PUT",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify({
//                             name: formData.name,
//                             email: formData.email,
//                             branch: formData.branch,
//                             semester: formData.semester,
//                             mobile: formData.mobile
//                         })
//                     }
//                 );

//             }

//             // ADD
//             else {

//                 response = await fetch(
//                     "http://localhost:3000/api/students",
//                     {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify(formData)
//                     }
//                 );

//             }

//             const data = await response.json();

//             if (!response.ok) {

//                 setMessage(data.message);
//                 return;

//             }


//             // Success message
//             if (editingStudent) {

//                 setMessage("Student updated successfully!");

//                 onUpdateComplete();

//             } else {

//                 setMessage("Student added successfully!");

//                 onStudentAdded();

//             }


//             // Clear form
//             setFormData({
//                 id: "",
//                 name: "",
//                 email: "",
//                 branch: "",
//                 semester: "",
//                 mobile: ""
//             });


//         } catch (error) {

//             console.log(error);

//             setMessage("Unable to connect to server");

//         }
//     };


//     return (
//         <div className="form-container">

//             <h2>
//                 {editingStudent ? "Update Student" : "Add Student"}
//             </h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="number"
//                     name="id"
//                     placeholder="Student ID"
//                     value={formData.id}
//                     onChange={handleChange}
//                     disabled={editingStudent}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <select
//                     name="branch"
//                     value={formData.branch}
//                     onChange={handleChange}
//                     required
//                 >

//                     <option value="">
//                         Select Branch
//                     </option>

//                     <option value="CSE">
//                         CSE
//                     </option>

//                     <option value="CS">
//                         CS
//                     </option>

//                     <option value="IT">
//                         IT
//                     </option>

//                     <option value="ECE">
//                         ECE
//                     </option>

//                 </select>

//                 <input
//                     type="number"
//                     name="semester"
//                     placeholder="Semester"
//                     min="1"
//                     max="8"
//                     value={formData.semester}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">

//                     {editingStudent
//                         ? "Update Student"
//                         : "Add Student"}

//                 </button>

//             </form>

//             {message && (
//                 <p>{message}</p>
//             )}

//         </div>
//     );
// }

// export default StudentForm;

import { useEffect, useState } from "react";

function StudentForm({ onStudentAdded, editingStudent, onUpdateComplete }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    branch: "",
    semester: "",
    mobile: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        id: editingStudent.id,
        name: editingStudent.name,
        email: editingStudent.email,
        branch: editingStudent.branch,
        semester: editingStudent.semester,
        mobile: editingStudent.mobile,
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const name = formData.name.trim();
    const email = formData.email.trim();
    const mobile = formData.mobile.trim();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMessage(" Please enter a valid email address.");
      return;
    }

    
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(mobile)) {
      setMessage(" Mobile number must contain exactly 10 digits.");
      return;
    }

    
    if (name.length < 2) {
      setMessage(" Name must contain at least 2 characters.");
      return;
    }

    
    if (formData.semester<1 || formData.semester>8){
        setMessage("Semester must be between 1 and 8.");
        return;
    }

    const studentData = {
      id: Number(formData.id),
      name: name,
      email: email,
      branch: formData.branch,
      semester: Number(formData.semester),
      mobile: mobile,
    };

    try {
      let response;

      if (editingStudent) {
       
        response = await fetch(
          `http://localhost:3000/api/students/${editingStudent.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData),
          }
        );
      } else {
        
        response = await fetch("http://localhost:3000/api/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        setMessage(` ${data.message}`);
        return;
      }

      setMessage(
        editingStudent
          ? " Student updated successfully!"
          : " Student added successfully!"
      );

      setFormData({
        id: "",
        name: "",
        email: "",
        branch: "CSE",
        semester: "",
        mobile: "",
      });

      if (editingStudent) {
        onUpdateComplete();
      } else {
        onStudentAdded();
      }
    } catch (error) {
      setMessage(" Cannot connect to server.");
    }
  };

  return (
    <div className="form-section">
      <h2>{editingStudent ? "Update Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="Student ID"
          value={formData.id}
          onChange={handleChange}
          disabled={editingStudent}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          <option value="CSE">CSE</option>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
        </select>

        <input
          type="number"
          name="semester"
          placeholder="Semester (1-8)"
          min="1"
          max="8"
          value={formData.semester}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="10-digit Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          maxLength="10"
          required
        />

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default StudentForm;