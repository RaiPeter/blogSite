import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
/**
* @author
* @function Navbar

**/

const Navbar
= (props) => {
 
    const [search, setSearch] = useState(false)



    const submitSearch = (e) =>{
        e.preventDefault();
        alert('Searchs');
    }

    const openSearch = ()=>{
        setSearch(true)
    }
    
    const searchClass = search ? 'searchInput active':'searchInput'
    return(
        <div className="navbar">
        <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact us</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="search"/>
            <img onClick={openSearch} className="searchicon" src={require('../../assets/icons/search.png')} />
            </form>
        </div>
        </div>
        )
        
    }
    
    export default Navbar
    