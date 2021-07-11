import React from "react";
import CardPost from '../Post/CardPost'
import CardPostLoading from '../Post/CardPostLoading'


function Posts(props) {
  const posts = props.posts;
  const load = props.load;
  return (
    <>
      {posts.map((item) => (
         !load?(<CardPost
         key={item.id} 
         post = {item} />):(<CardPostLoading />)
      ))}
    </>
  );
}

// all des gra dev

function PostList(props) {
  const posts = props.posts;
  const load = props.load;
  return (
    <>
      <Posts load={load} posts={posts}/>
    </>
  );
}

export default PostList;
