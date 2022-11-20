import React from "react";
import image1 from "../../../../Assets/Img/upload account statement 1 1.png";
import image2 from "../../../../Assets/Img/UPLOADED ACCOUNT STATEMENT 1.png";
import image3 from "../../../../Assets/Img/UPLOADS READY 1.png";

function Section22() {
  return (
    <div className="flex flex-col gap-10 text-center md:text-left">
      {/* How to use Accountpal */}
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">How to use Accountpal</h1>
        <p>
          AccountPal is a web application that compares third-party and
          independent financial statements and records with internal financial
          records and ledgers. It does this accurately with artificial
          intelligence from Open AI and machine learning models like GPT-3
          paving the way for even smoother future matchings and collaboration of
          accounts from vendors. Accountpal makes the day-to-day balancing of
          accounts and sales easier, faster, and very reliable for Small and
          Medium Enterprises.
        </p>
      </div>
      {/* step 1 */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-center md:text-left   text-[#194185] text-base">
          Step one
        </p>
        <p className="text-sm">
          From your Dashboard upload your bank statement by clicking on the
          “Browse Files” button and choosing the CSV(comma-separated-document)
          file format of your bank statement.
        </p>
        <img
          className="w-[70%] h-400 md:w-[40%] lg:w-[30%] mx-auto my-[1.5em] object-contain"
          src={image1}
          alt=""
        />
      </div>
      {/* step 2 */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-center md:text-left text-[#194185] text-base">
          Step Two
        </p>
        <p className="text-sm">
          From your Dashboard upload your Sales Records from Enterprise resource
          planning (ERP).
        </p>
        <img
          className="w-[70%] h-400 md:w-[40%] lg:w-[30%] mx-auto my-[1.5em] object-contain"
          src={image2}
          alt=""
        />
      </div>
      {/* step 3 */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-center md:text-left text-[#194185] text-base">
          Step Three
        </p>
        <p className="text-sm">
          After the reconciliation process is complete, click Download Button to
          Download your report in PDF or Spreadsheet format.
        </p>
        <img
          className="w-[70%] h-400 md:w-[40%] lg:w-[30%] mx-auto my-[1.5em] object-contain"
          src={image3}
          alt=""
        />
      </div>
      {/* step 4 */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-center md:text-left text-[#194185] text-base">
          Step Four
        </p>
        <p className="text-sm">
          After the reconciliation process is complete, click Download Button to
          Download your report in PDF or Spreadsheet format.
        </p>
      </div>
    </div>
  );
}

export default Section22;
