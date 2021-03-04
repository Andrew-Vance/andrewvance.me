import React, { useState } from 'react';

const ContactMe = (props) => {


  const submit = (e) => {

  };

  return (
    <div className='contactCard'>
      <div  className='contactForm'>
      <form onSubmit={submit}>
      <input type='text' size='35' placeholder='NAME' required/><br></br><br></br>
      <input type='email' pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" size='35' placeholder='EMAIL' required/><br></br><br></br>
      <textarea rows='8' cols='30' placeholder='MESSAGE' required></textarea><br></br><br></br><br></br>
      <input type='submit' className='submit' value='Submit' />
      </form>
      </div>
    </div>
  );
};

export default ContactMe;