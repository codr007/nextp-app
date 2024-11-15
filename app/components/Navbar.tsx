'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      {/* <button onClick={() => router.push("/")}>Home</button><br/> */}
      <button className="bg-yellow-200" onClick={() => router.push("/about")}>About</button><br/>
      <button onClick={() => router.push("/contact")}>Contact</button><br/>
      <button onClick={() => router.push("/footer")}>Footer</button><br/>
      <button onClick={() => router.push("/navbar")}>Navbar</button><br/>
    </nav>
  );
}
