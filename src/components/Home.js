import React from 'react'
import Feed from './Feed';

export const Home = ({posts}) => {
   return (
      <main className='Home'>
         { posts.length ? (
            <Feed posts={posts} />
         ) : (
            <h1 style={{ marginTop:"2rem", textAlign: 'center'}}>
               Hi, Add new Post!
            </h1>
         )}
      </main>
   )
}

export default Home;