import React from 'react';
import { useAuth } from '../../../Store/Context';
import Upload from './UploadFile/Upload';
import UploadReady from './UploadReady/UploadReady';
import ScrollToTop from '../../../components/ScrollToTop';

function DashboardMain() {
	const { localFile } = useAuth();

	return (
		<div>
			<ScrollToTop />
			{localFile.length < 1 ? <Upload /> : <UploadReady />}
		</div>
	);
}

export default DashboardMain;
