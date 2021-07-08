import React from "react";
import CardPost from '../Post/CardPost'

function Posts(props) {
  const posts = props.posts;
  return (
    <>
      {posts.map((item) => (
         <CardPost
         key={item.id} 
         post = {item} />
      ))}
    </>
  );
}

// all des gra dev

function PostList(props) {
  const posts = props.posts;
  const postList = Array.from(posts);
  return (
    <>
    { 
      postList.length > 0 && <Posts posts={posts}/>
    }
    </>
  );
}

export default PostList;
