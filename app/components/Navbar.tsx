// 'use client';
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const router = useRouter();

//   return (
//     <div className="flex items-center space-x-4">
//       <button
//         className="bg-yellow-200 px-4 py-2 rounded shadow"
//         onClick={() => router.push("/about")}
//       >
//         About
//       </button>
//       <button
//         className="bg-blue-200 px-4 py-2 rounded shadow"
//         onClick={() => router.push("/contact")}
//       >
//         Contact
//       </button>
//       <button
//         className="bg-green-200 px-4 py-2 rounded shadow"
//         onClick={() => router.push("/projects")}
//       >
//         Projects
//       </button>
//       <button
//         className="bg-red-200 px-4 py-2 rounded shadow"
//         onClick={() => router.push("/navbar")}
//       >
//         Navbar
//       </button>
//     </div>
//   );
// }
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

