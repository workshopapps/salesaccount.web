import React from 'react'

import AcctStatement from '../components/UploadReady/AcctStatement'
import ReconcileButton from '../components/UploadReady/ReconcileButton'
import SalesStatement from '../components/UploadReady/SalesStatement'

function UploadReady() {
  return (
    <div>
        <AcctStatement />
        <SalesStatement />

        <ReconcileButton />
        
    </div>
  )
}

export default UploadReady