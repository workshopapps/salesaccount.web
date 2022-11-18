import { useState } from "react";

import PageLayout from "../../layout/PageLayout";
import UploadingRecordModal from "../../components/UploadingRecordModal";

export default function UploadSales() {
  const [showUploadingModal, setShowUploadingModal] = useState(false);

  return (
    <PageLayout>
      <UploadingRecordModal
        show={showUploadingModal}
        setShow={setShowUploadingModal}
      />

      <h1 className="text-3xl font-semibold text-[#12B76A] mb-9">
        Uploaded Account Statement Ready
      </h1>

      <div className="flex items-center gap-2 text-[#667085]">
        <p className="cursor-pointer">Dashboard</p>
        <span className="w-2 h-2 border-2 border-t-[#101828] border-r-[#101828] rotate-[45deg] ml-[-5px]"></span>
        <p className="text-[#101828] cursor-pointer">Assessment</p>
      </div>

      <div className="mt-5 w-full flex justify-between">
        <div className="flex items-center">
          <label className="mr-2 text-[#4E4E4E] font-medium">Display</label>
          <select
            name=""
            id=""
            className=" border border-[#939393] rounded py-2 px-3 text-[#4E4E4E]"
          >
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>
        </div>

        <div className="flex items-center">
          <select
            name=""
            id=""
            className=" border border-[#939393] rounded p-2 text-[#4E4E4E]"
          >
            <option value="">Sort By</option>
            <option value="">All</option>
            <option value="">All</option>
            <option value="">All</option>
          </select>

          <span className="material-icons-outlined text-[#667085] mx-4 cursor-pointer">
            grid_view
          </span>

          <span className="material-icons-outlined text-[#667085] text-3xl cursor-pointer">
            menu
          </span>
        </div>
      </div>

      <div className="w-full border bg-[#F9FAFB] border-[#D0D5DD] mt-5 rounded-lg">
        <div className="w-full py-3 px-6 flex justify-between items-center">
          <p className="text-[#101828] text-lg font-semibold">
            Recent Customers
          </p>

          <div className="w-[30%] py-3 px-4 bg-[#EAECF0] rounded flex items-center">
            <span className="material-icons-outlined text-[#98A2B3] text-xl mr-2">
              search
            </span>

            <input
              type="text"
              className="w-full text-[#98A2B3] font-semibold outline-none bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>

        <table className="table-auto w-full">
          <thead className="">
            <tr className="text-sm font-semibold text-[#667085] py-3">
              <th className="py-3 border-b border-[#667085]">Name</th>
              <th className="py-3 border-b border-[#667085]">Description</th>
              <th className="py-3 border-b border-[#667085]">Type</th>
              <th className="py-3 border-b border-[#667085]">Value</th>
              <th className="py-3 border-b border-[#667085]">Date</th>
              <th className="py-3 border-b border-[#667085]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-[#101828]">Frank Lampard</td>
              <td>Apple iPhone 12</td>
              <td>Debit</td>
              <td>5,700</td>
              <td>12/04/2022</td>
              <td>12/04/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
