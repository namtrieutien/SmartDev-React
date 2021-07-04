import React from "react";
import CardPost from '../Post/CardPost'

let defaultPosts = [
  {
    image: "assets/images/product_01.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
  {
    image: "assets/images/product_02.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
  {
    image: "assets/images/product_03.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
  {
    image: "assets/images/product_04.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
  {
    image: "assets/images/product_05.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
  {
    image: "assets/images/product_06.jpg",
    title: "Tittle goes here",
    text: "Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.",
    price: "$18.25",
  },
];

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
