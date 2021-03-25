import React from 'react';
import Footer from '../Footer.jsx';
import '../../App.css';

function Recommend() {
    return (
    <div class = "text-center">
    <form class="form-signin" action="/" method="post">
      <h1 class="h4 mb-3 font-weight-normal">Recommend Course</h1>
      <input type="text" class="form-control top" placeholder="Course Name" name="course-name" required />
      <input type="text" class="form-control middle" placeholder="Course Link" name="course-link" required />
      <input type="text" class="form-control middle" placeholder="Course Tags" name="course-tags" required />
      <input type="text" class="form-control middle" placeholder="Price" name="price" required />
      <input type="text" class="form-control middle" placeholder="Course Languages" name="course-lang" required />
      <input type="text" class="form-control bottom" placeholder="Course Description"name="course-desc" required />
      <button class="btn btn-lg btn-dark btn-block" type="submit">Add this course!</button>
      <p class="mt-5 mb-3 text-muted">&copy; Fred</p>
    </form>
    <Footer />
    </div>
    )
}


// Course Name
// Course Link
// Course Description
// Course Category
// Course Tags
// Couse Duration
// Course Price
// Course Language
// Course Thumbnail ?? 
// Course Author*
// Course Prereq*
// Course Rating*
// Course Last Updated **
// 


// ** ->  for backend
// 


export default Recommend;