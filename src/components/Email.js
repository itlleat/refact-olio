import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Project.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  './Email.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Email({ isDarkMode }) {
  const containerClassName = `project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `project-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 
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
    <div className={containerClassName}>
      <Box
        className={containerClassName}
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
                {isSubmitted ? (
          <Typography variant="h6" align="center">
            Submission successful!
          </Typography>
        ) : (
        <form ref={form} onSubmit={sendEmail}>
          <TextField type='text' className={textClassName} fullWidth label="Name" id="name" />
          <TextField type='email' className={textClassName} fullWidth label="Email" id="email" />
          <TextField type='text' className={textClassName} fullWidth label="Message" id="message" />

        
<EmailOutlinedIcon className='email-logo' />
<input type="submit" value="submit" />
        
        </form>
           )}
      </Box>
    </div>
  );
};
