import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat'
import Chats from '../components/Chats'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar></Sidebar>
                <Chat></Chat>
                <Chats></Chats>
            </div>
            
        </div>
    );
};

export default Home;