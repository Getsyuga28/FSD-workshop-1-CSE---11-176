// import { useEffect, useState } from "react";

// function StudentList({ refresh }) {

//     const [students, setStudents] = useState([]);

   
//     const fetchStudents = async () => {
//         try {
//             const response = await fetch(
//                 "http://localhost:3000/api/students"
//             );

//             const data = await response.json();

//             setStudents(data);

//         } catch (error) {
//             console.log("Error fetching students:", error);
//         }
//     };

    
//     useEffect(() => {
//         fetchStudents();
//     }, [refresh]);

   
//     const handleDelete = async (id) => {

//         const confirmDelete = window.confirm(
//             "Are you sure you want to delete this student?"
//         );

//         if (!confirmDelete) {
//             return;
//         }

//         try {
//             const response = await fetch(
//                 `http://localhost:3000/api/students/${id}`,
//                 {
//                     method: "DELETE"
//                 }
//             );

//             const data = await response.json();

//             alert(data.message);

           
//             fetchStudents();

//         } catch (error) {
//             console.log("Error deleting student:", error);
//         }
//     };

//     return (
//         <div className="student-list">

//             <h2>All Students</h2>

//             {students.length === 0 ? (
//                 <p>No students available</p>
//             ) : (

//                 <table>

//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Branch</th>
//                             <th>Semester</th>
//                             <th>Mobile</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>

//                     <tbody>

//                         {students.map((student) => (

//                             <tr key={student.id}>

//                                 <td>{student.id}</td>

//                                 <td>{student.name}</td>

//                                 <td>{student.email}</td>

//                                 <td>{student.branch}</td>

//                                 <td>{student.semester}</td>

//                                 <td>{student.mobile}</td>

//                                 <td>

//                                     <button
//                                         onClick={() =>
//                                             alert("Edit feature coming next")
//                                         }
//                                     >
//                                         Edit
//                                     </button>

//                                     <button
//                                         onClick={() =>
//                                             handleDelete(student.id)
//                                         }
//                                     >
//                                         Delete
//                                     </button>

//                                 </td>

//                             </tr>

//                         ))}

//                     </tbody>

//                 </table>

//             )}

//         </div>
//     );
// }

// export default StudentList;

// import { useEffect, useState } from "react";

// function StudentList({ refresh, onEdit }) {

//     const [students, setStudents] = useState([]);

//     const fetchStudents = async () => {

//         try {

//             const response = await fetch(
//                 "http://localhost:3000/api/students"
//             );

//             const data = await response.json();

//             setStudents(data);

//         } catch (error) {

//             console.log("Error fetching students:", error);

//         }
//     };


//     useEffect(() => {

//         fetchStudents();

//     }, [refresh]);


//     const handleDelete = async (id) => {

//         const confirmDelete = window.confirm(
//             "Are you sure you want to delete this student?"
//         );

//         if (!confirmDelete) {
//             return;
//         }

//         try {

//             const response = await fetch(
//                 `http://localhost:3000/api/students/${id}`,
//                 {
//                     method: "DELETE"
//                 }
//             );

//             const data = await response.json();

//             alert(data.message);

//             fetchStudents();

//         } catch (error) {

//             console.log("Error deleting student:", error);

//         }
//     };


//     return (

//         <div className="student-list">

//             <h2>All Students</h2>

//             {students.length === 0 ? (

//                 <p>No students available</p>

//             ) : (

//                 <table>

//                     <thead>

//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Branch</th>
//                             <th>Semester</th>
//                             <th>Mobile</th>
//                             <th>Actions</th>
//                         </tr>

//                     </thead>

//                     <tbody>

//                         {students.map((student) => (

//                             <tr key={student.id}>

//                                 <td>{student.id}</td>

//                                 <td>{student.name}</td>

//                                 <td>{student.email}</td>

//                                 <td>{student.branch}</td>

//                                 <td>{student.semester}</td>

//                                 <td>{student.mobile}</td>

//                                 <td>

//                                     <button
//                                         onClick={() => onEdit(student)}
//                                     >
//                                         Edit
//                                     </button>

//                                     <button
//                                         onClick={() =>
//                                             handleDelete(student.id)
//                                         }
//                                     >
//                                         Delete
//                                     </button>

//                                 </td>

//                             </tr>

//                         ))}

//                     </tbody>

//                 </table>

//             )}

//         </div>

//     );
// }

// export default StudentList;

import { useEffect, useState } from "react";

function StudentList({ refresh, onEdit, search }) {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {

        try {

            const response = await fetch(
                "http://localhost:3000/api/students"
            );

            const data = await response.json();

            setStudents(data);

        } catch (error) {

            console.log("Error fetching students:", error);

        }
    };


    useEffect(() => {

        fetchStudents();

    }, [refresh]);


    // Search students
    const filteredStudents = students.filter((student) => {

        const searchValue = search.toLowerCase();

        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.id.toString().includes(searchValue)
        );

    });


    // Delete student
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:3000/api/students/${id}`,
                {
                    method: "DELETE"
                }
            );

            const data = await response.json();

            alert(data.message);

            fetchStudents();

        } catch (error) {

            console.log("Error deleting student:", error);

        }
    };


    return (

        <div className="student-list">

            <h2>All Students</h2>

            {filteredStudents.length === 0 ? (

                <p>No student found</p>

            ) : (

                <table>

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Branch</th>
                            <th>Semester</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredStudents.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>{student.name}</td>

                                <td>{student.email}</td>

                                <td>{student.branch}</td>

                                <td>{student.semester}</td>

                                <td>{student.mobile}</td>

                                <td>

                                    <button
                                        onClick={() =>
                                            onEdit(student)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(student.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );
}

export default StudentList;