import { faBookmark, faChevronDown, faClock, faStore, faUserFriends, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import './LeftSideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='bg-gray-800 p-3 h-full'>
            <div className='flex items-center mb-6'>
                <img src={user?.uid && user.photoURL} alt="" className='w-9 h-9 rounded-full mr-2' />
                <h2 className='text-white font-semibold'>{user?.uid && user.displayName}</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faUserFriends} className="mr-4 text-2xl text-blue-500"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Friends</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faUsersLine} className="mr-4 text-2xl text-white"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Group</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faBookmark} className="mr-7 text-2xl faBookmark text-purple-700"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Saved</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faClock} className="mr-4 text-2xl faClock text-slate-200"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Most Recent</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faStore} className="mr-4 text-2xl faStore text-sky-400"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Market Place</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faChevronDown} className="mr-4 text-2xl faChevronDown"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>See More</h2>
            </div>
            <hr></hr>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
            <div>
                <img src="" alt="" />
                <h4></h4>
            </div>
        </div>
    );
};

export default LeftSideNav;