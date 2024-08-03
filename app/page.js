"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./header_main";
import Footer from "./footer_main";

export default function Home() {
  const router=useRouter();
  return (
    <div>
      <Header/>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://res.cloudinary.com/dwp0bcwg9/image/upload/v1722695929/demo_d357c0ae57.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">AI Mock Interview</h2>

        <p className="mt-4 text-gray-600">
        Elevate your interview skills with our innovative AI-powered tool. Practice with top questions, receive actionable feedback, and track your progress. Our platform turns preparation into success, giving you the edge needed to make a lasting impression in every interview.
        </p>

        <a
           href="/dashboard"
          // onClick={()=>router.replace('/dashboard')}
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 cursor-pointer"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
  
</section>
      <Footer/>
    </div>
  );
}
