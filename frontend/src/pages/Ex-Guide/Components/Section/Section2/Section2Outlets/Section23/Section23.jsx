import React from "react";

function Section23() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Key Features</h1>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-base my-[0.5em] ">
            Key Values AccountPal offers.
          </h1>
          <ul className="list-disc px-[1.5em] space-y-[1em]">
            <li>
              <p>
                <span className="font-medium">Automatic Matching System: </span>
                &nbsp;Account Pal uses an Artificial Intelligence bot to request
                detailed account statements from your bank at the close of
                business and automatically performs a 3-way match of the
                documents from the different departments.
              </p>
            </li>
            <li>
              <p>
                <span className="font-medium">Easy Data Entry</span>
                &nbsp;Account Pal offers an easy and automatic invoice data
                entry for the suppliers and the client. Creating a close
                touchless invoice process.
              </p>
            </li>
            <li>
              <p>
                <span className="font-medium">Easy Integration into ERPs:</span>
                &nbsp;Easy Integration with the company’s Enterprise resource
                planning (ERP) systems like Sage Intacct, Microsoft Dynamics,
                SAP, and Oracle.
              </p>
            </li>
            <li>
              <p>
                <span className="font-medium"> Vendor Habits Prediction:</span>
                &nbsp;Account Pal Artificial Intelligence bot helps ensure
                accuracy and learn vendor tendencies by mapping past
                transactions with new ones and highlighting discrepancies..
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Section23;
