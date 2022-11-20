import React from 'react'
import PageLayout from '../components/UploadReady/layout/pageLayout'
import AcctStatement from '../components/UploadReady/AcctStatement'
import ReconcileButton from '../components/UploadReady/ReconcileButton'
import SalesStatement from '../components/UploadReady/SalesStatement'

function UploadReady() {
  return (

		<PageLayout>
			<AcctStatement />
      <SalesStatement />

      <ReconcileButton />

			
		</PageLayout>
	);
}

export default UploadReady