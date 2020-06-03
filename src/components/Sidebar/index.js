import React,{useState,useEffect}  from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import {NavLink} from 'react-router-dom'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts)
    },posts);
    
    
    
    return(
        <div className="sidebarContainer">
        <Card style={{marginBottom:'20px',padding:'20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
        <span>About Us</span>
        <div className="profileimageContainer">
        <img src="data:image/jpeg;base64,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"/>
        </div>
        <div className="cardBody">
        <p className="personalBio">My name is PEter rai and I love wating food. i am a software developer </p>
        </div>
        </div>
        </Card>
        
        <Card style={{marginBottom:'20px',padding:'20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
        <span>Social Network</span>
        </div>
        </Card>
        
        <Card style={{marginBottom:'20px',padding:'20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
        <span>Recent Post</span>
        </div>
        
        <div className="recentPosts">
        {
            posts.map(post =>{
                return(
                    <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                    </div>
                    
                    </NavLink>
                    
                    );
                })
            }
            
            </div>
            </Card>
            
            
            </div>
            
            )
            
        }
        
        export default Sidebar