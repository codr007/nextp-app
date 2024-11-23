// import Card from "./components/card/Card";
// import Navbar from "./components/Navbar"; 

// export default function Home() {
//   return (
//     <div>
      
//       <h1>Home Page</h1>
//      <Card className="p-6 bg-green-200" name="Bilal"rollNumber={101}age={19}day="Tuesday"/><br/>
//      <Card name="Subhan"rollNumber={102}age={18}day="Monday"/><br/>
//      <Card name="Malik"rollNumber={103}age={20}day="Friday"/><br/>
//       <Navbar />
//     </div>
//   );
// }
// import Navbar from './components/Navbar';
// import React from 'react';
// import Card from './components/card/Card';

// // Define the interface for the student data
// interface StudentData {
//   name: string;
//   age: number;
//   rollNumber: string;
//   day: string;
// }

// const Home = () => {
//   const students: StudentData[] = [
//     { name: 'Alice Smith', age: 15, rollNumber: '001', day: 'Monday' },
//     { name: 'Bob Johnson', age: 16, rollNumber: '002', day: 'Tuesday' },
//     { name: 'Charlie Brown', age: 15, rollNumber: '003', day: 'Friday' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
//         <Navbar/>
//       <h1 className="text-3xl font-bold my-8">Student ID Cards</h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {students.map((student, index) => (
//           <Card
//             key={index}
//             name={student.name}
//             age={student.age}
//             rollNumber={student.rollNumber}
//             day={student.day}
//           />
//         ))}
      
//       </div>
//     </div>
//   );
// }

// export default Home;
// Portfolio Practice
import Image from "next/image";
import Hero from "./components/Hero";
export default function HomePage() {
  return (<div>
      
      <Hero />
    </div>
  );
}

