import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  './Email.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Email({ isDarkMode }) {
  const containerClassName = `email-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `email-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 
  const iconClassName = `email-icon ${isDarkMode ? 'dark-text' : 'light-text'}`;
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send('service_kijfd7x', 'template_p9wa0o9', templateParams, 'OgZ_jLQg67bobHPGb')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (

      <Box
        className={containerClassName}
      >
        <Typography id="contact-title" variant="h3">Contact</Typography>
        {/* <EmailOutlinedIcon className={iconClassName} /> */}
                {isSubmitted ? (
          <Typography variant="h2" align="center">
            Submission successful!
          </Typography>
        ) : (
        <form ref={form} onSubmit={sendEmail}>
          <TextField type='text' className={textClassName} fullWidth label="Name" id="name" />
          <div className='spacer' />
          <TextField type='email' className={textClassName} fullWidth label="Email" id="email" />
          <div className='spacer' />
          <TextField type='text' className={textClassName} fullWidth label="Message" id="message" />

          <Button className='submit-button' type="submit" value="submit" variant="contained" endIcon={<SendIcon />}>
  Send
</Button>

        
        </form>
           )}
      </Box>

  );
};
