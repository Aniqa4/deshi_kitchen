import React, { useRef } from 'react';
import jsPDF from 'jspdf';

function Blog() {
  const componentRef = useRef(null);

  const generatePDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.html(componentRef.current, {
      callback: () => {
        pdf.save('blog.pdf');
      }
    });
  };
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold text-black'>
        Blog{' '}
        <span className='text-sm border bg-slate-500 rounded'>
          <button onClick={generatePDF}>Download</button>
        </span>
      </h1>
      <div className='text-gray-700 grid grid-cols-2 gap-10 py-10' ref={componentRef}>
        <div className='border rounded p-5'>
          <h1 className='font-semibold pb-5'>The differences between uncontrolled and controlled components.</h1>
          <p> uncontrolled components rely on the DOM to manage form data,
            while controlled components use React's state to manage and control form data. Controlled components provide more control,
            validation capabilities, and easier synchronization with React's state management,
            while uncontrolled components offer more flexibility but less control over the form inputs.
          </p>
        </div>
        <div className=' border rounded p-5'>
          <h1 className=' font-semibold pb-5'>How to validate React props using PropTypes?</h1>
          <div>
            <p>
              To validate React props using PropTypes:
            </p>
            <ol className='ms-10' style={{listStyle:"disc"}}>
              <li>Import the <code>PropTypes</code> module from the <code>prop-types</code> library.</li>
              <li>Define the prop types for your component using the <code>propTypes</code> property, specifying the expected type for each prop.</li>
              <li>PropTypes serve as a way to validate and document the expected props for your component.</li>
              <li>React will display warning messages in the console if the actual props passed to the component don't match the specified types.</li>
              <li>PropTypes are primarily used during development to catch potential prop type issues and provide helpful warnings to component consumers.</li>
              <li>PropTypes are not enforced in production builds and serve as a tool for enhancing the reliability and maintainability of React components.</li>
            </ol>
          </div>
        </div>
        <div className=' border rounded p-5'>
          <h1 className=' font-semibold pb-5'>The difference between nodejs and express js.</h1>
          <p>Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.
            js is a web application framework built on top of Node.js that provides additional features and tools for building web applications.</p>
        </div>
        <div className=' border rounded p-5'>
          <h1 className=' font-semibold pb-5'>What is a custom hook, and why will you create a custom hook?</h1>
          <p>A custom hook in React is a reusable JavaScript function that begins with the prefix "use."
             It allows you to encapsulate and share logic and stateful behavior across multiple components. 
             Custom hooks promote code reuse, modularity, and separation of concerns. 
             They are useful when you have common functionality that needs to be shared between components, such as data fetching, 
             state management, or side effects. 
            Creating custom hooks helps to keep your codebase clean, organized, and easier to maintain.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog;