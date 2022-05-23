import React from 'react';
import { Link } from 'react-router-dom';

export const Missing = () => {
   return (
      <main className='Missing'>
        <h2>Post not found</h2>
         <p>
            Well, that's dissapointing
         </p>
         <p>
            <Link to="/">Visit Our Home Page</Link>
         </p>
      </main>
   )
}

export default Missing;
