import React from 'react';
import ContentLoader from 'react-content-loader'

export const CardPostLoading = (props) => {
  return (
    <div>   
        <ContentLoader
          width={225}
          height={400}
          viewBox="0 0 225 400"
          backgroundColor="#e1e1f1"
          foregroundColor="#c7c7f3"
        >
          <rect x="43" y="304" rx="4" ry="4" width="135" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="60" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="194" height="217" />
        </ContentLoader>
    </div>
  )
}
export const PostListLoading = ({size}) => {
  const posts =Array.from(Array(size).keys());
  return (
    <>
      {posts.map((item) => 
         <CardPostLoading />
      )}
    </>
  );
}
