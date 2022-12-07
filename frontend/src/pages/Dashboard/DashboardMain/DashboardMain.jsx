import React from 'react';
import { useAuth } from '../../../Store/Context';
import Upload from './UploadFile/Upload';
import UploadReady from './UploadReady/UploadReady';

function DashboardMain() {
	const { fileDropped } = useAuth();

	return <div>{fileDropped.length < 1 ? <Upload /> : <UploadReady />}</div>;
}

export default DashboardMain;
