import React from 'react';

export default function CourseDetails(props) {
  return (
    <div>
      {props.courses.map((course,index) => (
        <div key={index}>
          <h2>{course.cname}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}
