import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat Box</span>
            <div className='user'>
                <img src="https://images.freeimages.com/images/previews/8a5/shooting-the-sunset-1381775.jpg" alt="" />
                <span>Jhon</span>
                <button>Logout</button>
            </div>
            
        </div>
    );
};

export default Navbar;