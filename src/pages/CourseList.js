// import React, { useState, useEffect } from 'react';
// import { OrderList } from 'primereact/orderlist';

// export default function CourseList() {
//     const [courses, setCourses] = useState([]);
//     const [programs, setPrograms] = useState([]);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [selectedProgram, setSelectedProgram] = useState(null);

//     useEffect(() => {
//         setCourses(['engineering', 'doctor']);
//         setPrograms(['calculus', 'biology']);
//     }, []);

//     const courseTemplate = (course) => {
//         return (
//             <div onClick={() => setSelectedCourse(course)}>{course}</div>
//         );
//     };

//     const programTemplate = (program) => {
//         return (
//             <div onClick={() => setSelectedProgram(program)}>{program}</div>
//         );
//     };

//     return (
//         <div className="card xl:flex xl:justify-content-center">
//             <div className="flex flex-wrap gap-2">
//                 <div>
//                     <label htmlFor="selectedCourse">Selected Course:</label>
//                     <input type="text" id="selectedCourse" value={selectedCourse || ''} readOnly />
//                 </div>
//                 <div>
//                     <label htmlFor="selectedProgram">Selected Program:</label>
//                     <input type="text" id="selectedProgram" value={selectedProgram || ''} readOnly />
//                 </div>
//             </div>
//             <div className="flex flex-wrap gap-2 mt-4">
//                 <div>
//                     <OrderList value={courses} onChange={(e) => setCourses(e.value)} itemTemplate={courseTemplate} header="Courses" filter filterBy="title"></OrderList>
//                 </div>
//                 <div>
//                     <OrderList value={programs} onChange={(e) => setPrograms(e.value)} itemTemplate={programTemplate} header="Programs" filter filterBy="title"></OrderList>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';

export default function CourseList() {
  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentUserProgram, setCurrentUserProgram] = useState(null);

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        name: "Bachelor's in Computer Science",
        duration: "4 years",
        cost: "RM 20,000 per year",
        location: "Selangor",
      },
      {
        id: 2,
        name: "Master's in Business Administration",
        duration: "2 years",
        cost: "RM 30,000 per year",
        location: "Selangor",
      },
      {
        id: 3,
        name: "Associate's in Graphic Design",
        duration: "2 years",
        cost: "RM 10,000 per year",
        location: "Selangor",
      },
      {
        id: 4,
        name: "Certificate in Web Development",
        duration: "6 months",
        cost: "RM 5,000",
        location: "Selangor",
      },
      {
        id: 5,
        name: "Doctorate in Psychology",
        duration: "5 years",
        cost: "RM 40,000 per year",
        location: "Selangor",
      },
    ];
    setPrograms(dummyData);
  }, []);

  const handleRegister = (programId) => {
    const program = programs.find((p) => p.id === programId);
    setSelectedProgram(program);
    setCurrentUserProgram(program);
    alert(`You have registered for program with id ${programId}`);
  };

  return (
    <div className="card">
      {currentUserProgram ? (
        <div>
          <h2>Current Program:</h2>
          <DataTable value={[currentUserProgram]} tableStyle={{ minWidth: "50rem" }}>
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="duration" header="Duration"></Column>
            <Column field="cost" header="Cost"></Column>
            <Column field="location" header="Location"></Column>
          </DataTable>
        </div>
      ) : (
        <h2>No program registered</h2>
      )}

      <h2>Available Programs:</h2>
      <DataTable value={programs} tableStyle={{ minWidth: "50rem" }}>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="duration" header="Duration"></Column>
      <Column field="cost" header="Cost"></Column>
      <Column field="location" header="Location"></Column>
      <Column header="Register" body={(rowData) => (
        <button onClick={() => handleRegister(rowData.id)} className="p-button-primary p-py-1 p-px-2">
          Register
        </button>
      )}></Column>
      </DataTable>
      <h2>Course registration</h2>
      <Link to="/register-course" className="register-button">
        Register
      </Link>
    </div>
  );
}