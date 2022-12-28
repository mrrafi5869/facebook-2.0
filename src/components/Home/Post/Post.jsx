import { faFaceSmile, faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Post = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-5 bg-zinc-800 p-3 rounded-lg'>
            <div className='flex items-center mb-3'>
                <img src={user?.uid && user.photoURL} className="w-10 h-10 rounded-full mr-3" alt="" />
                <input type="text" placeholder={`What's On your mind ${user?.uid && user.displayName}?`} className="input w-full bg-gray-700 rounded-full h-10" />
            </div>
            <hr className='border border-gray-500' />
            <div className='flex justify-around my-4'>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faVideo} className="mr-2 text-2xl"></FontAwesomeIcon>
                    <p className='font-semibold'>Live Video</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faImage} className="mr-2 text-2xl"></FontAwesomeIcon>
                    <p className='font-semibold'>Photo/Video</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faFaceSmile} className="mr-2 text-2xl"></FontAwesomeIcon>
                    <p className='font-semibold'>Feeling/activity</p>
                </div>
            </div>
        </div>
    );
};

export default Post;