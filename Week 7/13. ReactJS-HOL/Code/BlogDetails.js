import React from 'react';

export default function BlogDetails(props) {
  return (
    <div>
      {props.blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
