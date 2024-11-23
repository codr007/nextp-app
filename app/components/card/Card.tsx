// interface Sprops{
//     name:string,
//     age:number,
//     rollNumber:number,
//     day:string
// }
// const Card = (props:Sprops)=>{
//     return(
//         <div>
//             <h1>Name:{props.name}</h1>
//             <h1>Age:{props.age}</h1>
//             <h1>RollNo:{props.rollNumber}</h1>
//             <h1>Day:{props.day}</h1>
//         </div>
//     )
// }
// export default Card 
import React from 'react';

// Define the interface for the student data
interface StudentProps {
  name: string;
  age: number;
  rollNumber: string;
  day: string;
}

// Define the StudentCard component directly using props type
const StudentCard = ({ name, age, rollNumber, day}: StudentProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-sm text-center border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Roll No: {rollNumber}</p>
      <p className="text-gray-600">Class: {day}</p>
    </div>
  );
}

export default StudentCard;
