import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="seachForm">
                <input type="text" placeholder='find a user' />
            </div>
            <div className="userChat">
                <img src="https://images.freeimages.com/images/previews/8a5/shooting-the-sunset-1381775.jpg" alt="" />
                
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
            
        </div>
    );
};

export default Search;