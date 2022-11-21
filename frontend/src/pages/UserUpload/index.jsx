import React from 'react';
import DashBoardHeader from '../../components/DashBoardHeader';
import DashBoardSideBar from '../../components/DashBoardSideBar';
import Userupload from '../UploadData';

const UserUpload = () => (<div>
    <DashBoardHeader/>

    <div className='dashboard-container'>
        <DashBoardSideBar/>
        <main>
            <Userupload/>
        </main>
    </div>
    
    </div>
);

export default UserUpload;
