import React from 'react';
import { useAuth } from '../../../Store/Context';
import Upload from './UploadFile/Upload';
import UploadReady from './UploadReady/UploadReady';

function UploadMain() {
	const { files, fileState } = useAuth();

	return <div>{!files ? <Upload /> : <UploadReady />}</div>;
}

export default UploadMain;
