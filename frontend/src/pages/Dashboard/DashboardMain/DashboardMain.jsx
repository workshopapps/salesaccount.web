import React from 'react';
import { useAuth } from '../../../Store/Context';
import Upload from './UploadFile/Upload';
import UploadReady from './UploadReady/UploadReady';

function UploadMain() {
	const { files } = useAuth;
	console.log(files);
	return (
		<div>{!files ? <Upload /> : <UploadReady fileName={files[0]?.name} />}</div>
	);
}

export default UploadMain;
