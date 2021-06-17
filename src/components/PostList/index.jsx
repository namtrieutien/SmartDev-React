import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  
};

let defaultPosts = [
   {
    image: 'assets/images/product_01.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
   {
    image: 'assets/images/product_02.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
   {
    image: 'assets/images/product_03.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    image: 'assets/images/product_04.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    image: 'assets/images/product_05.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    image: 'assets/images/product_06.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  }
]

function Posts(props) {

  const posts = defaultPosts;
  console.log("typeof ",  posts[1]);
  return (
    <>
      {posts.map((post) => 
        <div key={post.id} className="col-lg-4 col-md-4">
          <div className="product-item">
              <a href="/"><img src={post.image} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>{post.title}</h4></a>
                <h6>{post.price}</h6>
                <p>{post.text}</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (12)</span>
              </div>
            </div>
        </div>
    )}
    </>
  );
}

// all des gra dev

function PostList(props) {
  const { posts } = props;
  return (
    <>
      <Posts />
      <ul className="">
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;