"use client";
import React, { useState } from "react";
import { email } from "../constants";
import { firaCode } from "@/fonts/fonts";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState(null);

  const handleSetName = (e) => setName(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setStatus({
      type: "success",
      message: "Thank you for reaching out! I will get back to you soon.",
    });
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <section
      id="contact"
      className="flex flex-col h-screen w-full items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="flex flex-col items-center justify-center ">
        <h3 className={`${firaCode.className} flex flex-col items-center justify-center font-bold md:text-3xl text-2xl text-teal-300`}>
          Get in touch!
        </h3>
        <p className={`mt-5 text-md md:text-lg text-center`} style={{ color: "#7593af" }}>
          Whether you have a question, want to collaborate, or just want to say
          hello, feel free to drop a message!
        </p>
        <a className="inline-block px-8 py-4 mt-10 border border-teal-400 rounded-lg hover:bg-teal-400/10
        hover:text-teal-300 
        transition-all 
        duration-300 " href={`mailto:${email}`}>Drop me a line!</a>
       
      </div>
    </section>
  );
};

export default Contact;
