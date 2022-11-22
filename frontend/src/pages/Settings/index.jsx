import React from 'react'
import DashBoardHeader from '../../components/DashBoardHeader';
import DashBoardSideBar from '../../components/DashBoardSideBar';

const  Settings=()=> (
    <>
    <DashBoardHeader />
    <div className='dashboard-main-cont'>
    <DashBoardSideBar/>
    <main>
        settings code here
    </main>
    </div>
    </>
);

export default Settings