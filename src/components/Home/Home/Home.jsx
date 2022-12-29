import React from 'react';
import Online from '../Online/Online';
import Post from '../Post/Post';
import Status from '../Post/Status';
import Story from '../Story/Story';
import TimelinePost from '../TimelinePost/TimelinePost';

const Home = () => {
    return (
        <div>
            <Story></Story>
            <Post></Post>
            <Online></Online>
            <TimelinePost></TimelinePost>
            <Status></Status>
        </div>
    );
};

export default Home;