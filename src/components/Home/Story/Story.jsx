import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Story = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='grid grid-cols-3 lg:grid-cols-5 mt-4 gap-2'>
            <div className='rounded-lg bg-gray-600 relative'>
                <img src={user?.uid && user.photoURL} className="h-40 rounded-t-lg" alt="" />
                <FontAwesomeIcon icon={faPlus} className="bg-blue-500 text-white p-2 rounded-full border-4 absolute border-black bottom-6 left-10"></FontAwesomeIcon>
                <p className='mt-4 mb-1 font-semibold text-center'>Create Story</p>
            </div>
        </div>
    );
};

export default Story;