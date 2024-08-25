import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <section className="content">
      <h1>Project Overview</h1>
      <p>This project showcases a web application built with React.</p>
      <img src="path-to-image.jpg" alt="Project" />
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </section>
  );
};

export default Content;
