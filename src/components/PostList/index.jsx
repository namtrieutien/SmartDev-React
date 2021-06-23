import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  
};

let defaultPosts = [
   {
    id: 1,
    image: 'assets/images/product_01.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
   {
    id: 2,
    image: 'assets/images/product_02.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
   {
    id: 3,
    image: 'assets/images/product_03.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    id: 4,
    image: 'assets/images/product_04.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    id: 5,
    image: 'assets/images/product_05.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  },
  {
    id: 6,
    image: 'assets/images/product_06.jpg',
    title: 'Tittle goes here',
    text: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    price: '$18.25'
  }
]

function Posts(props) {

  const posts = props.posts;
  //console.log("typeof ",  posts[1]);
  return (
    <>
      {posts.map((post) => 
        <div key={post.id} className="col-lg-4 col-md-4">
          <div className="product-item">
              <a href="/"><img src={post.image} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Title: {post.title}</h4></a>
                <h6>Price: {post.price}</h6>
                <p>Description: {post.description}</p>
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
  const posts = props.posts;
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export default PostList;