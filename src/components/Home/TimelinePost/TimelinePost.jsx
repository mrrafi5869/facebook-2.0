import { faComment, faEllipsis, faShare, faThumbsUp, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const TimelinePost = () => {
    const {user} = useContext(AuthContext);
    const [timelinePost, setTimelinePost] = useState([]);
    const handleLike = () => {

    }
    return (
        <div className='mx-auto my-12 bg-zinc-800 rounded-lg'>
            <div className='flex justify-between px-5 py-3'>
                <div className='flex'>
                    <img src={user?.uid && user?.photoURL} className="mr-3 h-10 w-10 rounded-full" alt="" />
                    <p className='font-semibold'>{user?.uid && user?.displayName}</p>
                </div>
                <div className='flex'>
                    <FontAwesomeIcon icon={faEllipsis} className="mr-5"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </div>
            </div>
            <p className='mx-5'>Caption</p>
            <img src={user?.uid && user?.photoURL} className="w-[700px]" alt="" />
            <hr className='border border-gray-400 mt-10' />
            <div className='flex justify-between mb-2 p-5'>
                <div className='text-xl' onClick={handleLike}>
                    <FontAwesomeIcon icon={faThumbsUp} className="mr-2"></FontAwesomeIcon>Like
                </div>
                <div className='text-xl'>
                    <FontAwesomeIcon icon={faComment} className="mr-2"></FontAwesomeIcon>Comment
                </div>
                <div className='text-xl'>
                    <FontAwesomeIcon icon={faShare} className="mr-2"></FontAwesomeIcon>Share
                </div>
                
            </div>
        </div>
    );
};

export default TimelinePost;