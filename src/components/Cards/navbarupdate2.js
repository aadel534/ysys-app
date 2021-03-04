import React from 'react';
import {Link} from'react-router-dom';

function Nav() {
  
 

 



    return (
      <div >
       <nav>
<ul className="navbar"> 
<Link to ='/house'>
    <li>Houses</li>
    </Link>
    <Link to ='/characters'>
    <li>Characters</li>
    </Link>
    <Link to='/books'>
    <li>Books</li>
    </Link>
</ul>
       </nav>
      </div>
    );
  }
  
  export default Nav;
  
