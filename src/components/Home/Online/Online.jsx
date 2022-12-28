import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Online = () => {
    const {user} = useContext(AuthContext);
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    }, [])
    return (
        <div className='flex items-center'>
            <p className='border border-white bg-green-500 mr-2 p-2 text-black rounded-full font-semibold'>Active</p>
            <div className='flex items-center'>
                {
                    users && users.map((userId, index) => <img key={index} src={userId.photo} className="w-10 h-10 rounded-full mr-3" alt="" />)
                }
            </div>
        </div>
    );
};

export default Online;