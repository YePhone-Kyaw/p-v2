"use client";
import React, { useState } from "react";
import { email } from "../constants";

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
        <h3 className="flex flex-col items-center justify-center font-bold text-5xl text-teal-300">
          Get in touch!
        </h3>
        <p className="mt-5 text-lg" style={{ color: "#7593af" }}>
          Whether you have a question, want to collaborate, or just want to say
          hello, feel free to drop a message!
        </p>
        <a className="inline-block px-8 py-4 border border-teal-400" href={`mailto: ${email}`}>Drop me a line!</a>
        {/* <form className="flex flex-col gap-10"> */}
          {/* <div className="flex items-center justify-between gap-10 w-[600px] mt-20"> */}
            {/* <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleSetName}
              className="w-full bg-gray-300/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition cursor-pointer focus:cursor-text"
              placeholder="Your full name"
              required
            />

            <input
              type="email"
              id="email"
              rows='5'
              value={email}
              onChange={handleSetEmail}
              className="w-full bg-gray-300/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition cursor-pointer focus:cursor-text"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={handleSetMessage}
              className="w-full bg-gray-300/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition cursor-pointer focus:cursor-text"
              placeholder="Your Message"
              required
            />
          </div> */}
          {/* <div className="relative group max-w-[150px]"> */}
  {/* Teal border fill on hover */}
  {/* <div className="

  "></div>
  
  <button
    type="submit"
    className="
    inline-block 
    px-8 py-4 
    border border-teal-400 
    rounded-lg 
    font-mono text-sm 
    text-teal-400 
    hover:bg-teal-400/10 
    hover:text-teal-300 
    transition-all 
    duration-300
  "
    style={{ color: '#7593af' }}
  >
    Send Message
  </button>
</div> */}

        {/* </form> */}
      </div>
    </section>
  );
};

export default Contact;
