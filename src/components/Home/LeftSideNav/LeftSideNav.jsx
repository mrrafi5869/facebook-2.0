import { faBookmark, faChevronDown, faClock, faStore, faUserFriends, faUserGroup, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { FaLayerGroup, FaUserFriends } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-6'>
            <div className='flex items-center mb-6'>
                <img src={user?.uid && user.photoURL} alt="" className='w-9 h-9 rounded-full mr-2' />
                <h2 className='text-white font-semibold'>{user?.uid && user.displayName}</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faUserFriends} className="mr-4 text-2xl"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Friends</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faUsersLine} className="mr-4 text-2xl"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Group</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faBookmark} className="mr-4 text-2xl"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Saved</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faClock} className="mr-4 text-2xl"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Most Recent</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faStore} className="mr-4 text-2xl"></FontAwesomeIcon>
                <h2 className='text-white font-semibold'>Market Place</h2>
            </div>
            <div className='flex items-center mb-6'>
                <FontAwesomeIcon icon={faChevronDown} className="mr-4 text-2xl"></FontAwesomeIcon>
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