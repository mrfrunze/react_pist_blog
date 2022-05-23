import React from 'react';

export const Footer = () => {
   const toDay = new Date();
   return (
      <footer className='Footer'>
         <h1>Footer</h1>
         <p>Copyright &copy; {toDay.getFullYear()}</p>
      </footer>
   )
}

export default Footer;
