import React from "react";

function AccountReportDetail() {
  return (
    <div className="report_main  ">
      <div className="report-name text-sm font-md flex items-center my-[1em]">
        <p>Segun Shegs</p>
      </div>
      <div className="report-details flex justify-between items-center text-[0.8em] px-[0.5em]">
        <p className="report-detail w-[30%]">
          Ordered 5 boxes of swiss carpets
        </p>
        <p className="report-detail w-[20%]">15,000</p>
        <p className="report-detail w-[20%]">15,000</p>
      </div>
      <div className="report-details flex justify-between items-center text-[0.8em] px-[0.5em]">
        <p className="report-detail w-[30%]">
          Ordered 5 boxes of swiss carpets
        </p>
        <p className="report-detail w-[20%]">15,000</p>
        <p className="report-detail w-[20%]">15,000</p>
      </div>
    </div>
  );
}

export default AccountReportDetail;
