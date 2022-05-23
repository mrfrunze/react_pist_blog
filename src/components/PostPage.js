import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const PostPage = ({ posts, handleDelete }) => {
   const {id} = useParams();
   const post = posts.find( post => (post.id).toString() === id);
   return (
      <main className='PostPage'>
         <article className='post'>
            {post &&
               <>
                  <h2>{post.title}</h2>
                  <p className='postData'>{post.datetime}</p>
                  <p className='postBody'>{post.body}</p>
                  <Link to={`/edit/${post.id}`}>
                     <button className='editButton'>Edit post</button>
                  </Link>
                  <button className='deleteButton' onClick={ () => handleDelete(post.id) }>
                     Delete post
                  </button>
               </>
            }
            {!post &&
               <>
                  <h2>Post not found</h2>
                  <p>
                     Well, that's dissapointing
                  </p>
                  <p>
                     <Link to="/">Visit Our Home Page</Link>
                  </p>
               </>
            }
         </article>
      </main>
   )
}

export default PostPage;
