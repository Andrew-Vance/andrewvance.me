import React, { useState } from 'react';
const axios = require('axios');

const ContactMe = (props) => {

  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [message, updateMessage] = useState('');
  const [sent, updateSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    updateSent(false);
    axios.post('/email', {name, email, message})
      .then(() => {
        updateSent(true);
        updateName('');
        updateEmail('');
        updateMessage('');
      })
      .catch(err => {
        console.log(err);
        window.alert('issue sending message, please try again later');
      })

  };

  return (
    <div className='contactCard'>
      <div  className='contactForm'>
      <form onSubmit={submit}>
      <input type='text' size='35' placeholder='NAME' value={name} required onChange={(e) => {updateName(e.target.value)}}/><br></br><br></br>
      <input type='email' pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" size='35' placeholder='EMAIL' value={email} required onChange={(e) => {updateEmail(e.target.value)}}/><br></br><br></br>
      <textarea rows='8' cols='30' placeholder='MESSAGE' required value={message} onChange={(e) => {updateMessage(e.target.value)}}></textarea><br></br><br></br><br></br>
      <input type='submit' className={sent ? 'submit subsent' : 'submit'} value={sent ? 'Sent' : 'Submit'} />
      </form>
      </div>
    </div>
  );
};

export default ContactMe;