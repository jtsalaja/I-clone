import React, { useState } from 'react';
import "./Timeline.css"
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user:"mathisfun",
      postImage:"https://images.unsplash.com/photo-1610814426508-bc6dcda34c14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJvcmF8ZW58MHx8MHx8fDA%3D",
      likes: 12550,
      timestamp: "12h",
    }, 
    {
      user:"dcsisfun",
      postImage:"https://images.unsplash.com/photo-1605558162119-2de4d9ff8130?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
      likes: 1389,
      timestamp: "23h",
    }, 
    {
      user:"helloworld",
      postImage:"https://images.unsplash.com/photo-1614683574679-beee9c2ab699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
      likes: 11345,
      timestamp: "2d",
    }, 
    {
      user:"summer",
      postImage:"https://images.unsplash.com/photo-1582132887861-5bec067fa929?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbGluaGF8ZW58MHx8MHx8fDA%3D",
      likes: 453,
      timestamp: "3d",
    }, 
  ]);

  return (
    <div className='timeline'>
        <div className='timeline__left'>
          <div className='timeline__posts'>
            {posts.map(post =>(
              <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
            ))}
          </div>
        </div>
        <div className='timeline__right'>
            <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline