import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
                
    <Card style={{marginBottom:'20px'}}>
        <div className="postImageWrapper">
<img src={"https://raw.githubusercontent.com/Rizwan17/reactjs-blog/master/src/blogPostImages/memories-from.jpg"}/>
        </div>

    <div style={{textAlign:'center'}}>
<span>Featured</span>
<h2>Fitness Mantra to live life</h2>
    <span>Posted by peter on juky</span>
    <p>aaasd dasdasferwhltrpoyw qweqtiw q weqwoeawrgesd aliwe we we rwer .we rwe faea .f we w.f awefwr.gesrgawr  dasdasferwhltrpoyw qweqtiw q weqwoeawrgesd aliwe we we rwer .we rwe faea .f we w.f awefwr.gesrgawr .wae </p>

    <button>Read More</button>
    </div>

    </Card>
        </div>
   )

 }

export default RecentPosts