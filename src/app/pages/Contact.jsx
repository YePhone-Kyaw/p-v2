'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState(null);


   const handleSetName = (e) => setName(e.target.value);
   const handleSetEmail = (e) => setEmail(e.target.value);
   const handleSetMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message) {
      setStatus({type: 'error', message: 'Please fill in all fields.'});
      return;
    }

    setStatus({type: 'success', message: "Thank you for reaching out! I will get back to you soon."})
    setEmail('');
    setName('');
    setMessage('');
  }
  return (
    <section id='contact'>
      <div className='flex flex-col items-center justify-center '>
      <h3 className='flex flex-col items-center justify-center font-bold text-5xl text-teal-300'>Get in touch!</h3>
      <p className='mt-5 text-lg' style={{color: '#7593af'}}>Whether you have a question, want to collaborate, want to hire, or just want to say hello, feel free to drop a message!</p>
      <form>
        <div>
          <label>Name</label>
          <input
           type='text'
           id='name'
           name='name'
           value={name}
           onChange={handleSetName}
           className="w-full  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition cursor-pointer"
           placeholder='Your full name'
           />
        </div>
      </form>
      </div>
   
      </section>
  )
}

export default Contact