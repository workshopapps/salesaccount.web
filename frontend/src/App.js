import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Faq from "react-faq-component";
import Button from "./components/Button";
import getInTouch from "./assets/Get_in_touch.png";
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import user_image from "./assets/what_our_users_are_saying.png";
const data = {
  title: "Frequently asked questions ",
  rows: [
    {
      title: "Is there a free trial available?",
      content: `Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
30-minute onboarding call to get you up and running as soon as possible.`,
    },
    {
      title: "Can I change my plan later?",
      content: ``,
    },
    {
      title: "What is your cancellation Policy?",
      content: ``,
    },
    {
      title: "Can another info be added to an invoice?",
      content: ``,
    },
    {
      title: "How does billing work?",
      content: ``,
    },
    {
      title: "How do I change my account email?",
      content: ``,
    },
  ],
};

const styles = {
  bgColor: "#F9FAFB",
  titleTextColor: "#101828",
  titleTextSize: "36px",
  rowTitleColor: "#101828",
  rowTitleTextSize: "18px",
  rowContentColor: "#667085",
  rowContentTextSize: "16px",
  arrowColor: "#1570EF",
  transitionDuration: "1s",
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: <BsPlusCircle />,
  collapseIcon: <CiCircleMinus />,
};

const importantFeaturesData = [
  {
    number: "1",
    content:
      "Authenticate and balance account and sales statement automatically",
  },
  {
    number: "2",
    content:
      "Authenticate and balance account and sales statement automatically",
  },
  {
    number: "3",
    content:
      "Compare independent financial records to internal financial records and ledger",
  },
];

const whatAccountPalDoesData = [
  {
    title: "Spot Errors",
    content:
      "Now you can seamlessly compile account statement and sales effectively",
  },
  {
    title: "Balances your account statement in minutes",
    content:
      "Automate Your bookkeeping easier with Account Pal to focus on what matters most, Your business",
  },
  {
    title: "Track expenditure better",
    content:
      "Never worry about income vs expenditure sheets. Account Pal there for you",
  },
  { title: "Stuck with a business idea?", content: "Our Open AI model combined with your business data can forecast future cost and predict if a new product will be profitable" },
];

function App() {
  return (
    <>
      <NavigationBar />
      <div className="bg-[#F5F5F5] w-full px-[178px] items-center leading-[100px] top-[193px]">
        <h1 className="text-[#000000] text-[72px] font-semibold text-center">
          An easy <span className="text-[#1570EF]">Sales and Accounting</span>
          system made for you
        </h1>
        <p className="text-[#101828] font-normal text-[20px] text-center leading-[35px]">
          Run your business effectively with a simplified solution to reconcile
          your accounts & sales on a day - to - day basis
        </p>
      </div>
      <div className="bg-black h-[30px]"></div>
      {/**Cutting edge feature */}
      <div className="bg-[#F5F5F5]">
        <h2>Cutting-edge features for advanced analytics</h2>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          match sales. Trusted by over 4,000 startups.
        </p>
      </div>
      {/**What account pal does for you */}
      <div className="bg-[#F9FAFB]">
        <h1 className="text-[#101828] font-semibold text-center text-[36px] pt-[30px]">
          What Account Pal Does for You
        </h1>
        <p className="text-[#667085] font-normal text-center text-[20px] py-[12px]">
          Important Features
        </p>
        <div className="flex  items-center gap-[100px] px-[78px]">
          {whatAccountPalDoesData.map((item) => (
            <div className="w-[250px] ">
              <h2 className="font-semibold text-[#101828] text-[15px] text-center">
                {item.title}
              </h2>
              <p className="text-[#667085] font-normal text-[13px]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/**Important features */}
      <div className="bg-[#F2F4F7]">
        <h1 className="text-[#101828] font-semibold text-center text-[36px] pt-[56px]">
          Important Features
        </h1>
        <div className="flex flex-row gap-[120px] px-[128px] pt-[93px] pb-[82px]">
          {importantFeaturesData.map((item) => (
            <div className="flex flex-col items-center ">
              <h3 className="text-[#101828] font-bold text-[80px]">
                {item.number}
              </h3>
              <p className="text-[#101828] font-semibold text-center text-[13px] ">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/**What our users are saying */}
      <div className="bg-[#F9FAFB] px-[220px] py-[100px] flex flex-col items-center">
        <h1 className="text-[#000000] font-semibold text-[36px] text-center pb-[32px]">
          What our users are saying
        </h1>
        <div className="w-[450px] h-[150px] rounded-2xl border border-[#98A2B3] flex flex-col items-center gap-[5px]">
          <span className="text-[#667085] text-[10px] font-medium px-[10px] pt-[20px]">
            As an account that struggles to balance account statement
            accurately, account Pal has made life better for me. Now I can sum
            all transaction easily, spot duplicate transactions reconcile
            transactions easily
          </span>
          <p className="font-semibold text-[12px] text-[#101828] tracking-tighter">
            Uche Donald
          </p>
          <span className="font-normal text-[12px] text-[#667085]">-Zuri</span>
        </div>
        <img
          src={user_image}
          alt="What our users are saying"
          className="object-contain pt-[140px]"
        />
      </div>
      {/**Start free trial */}
      <div className="bg-[#F2F4F7]">
        <div className="py-[70px] px-[336px] flex flex-col items-center">
          <h2 className="text-[#000000] font-semibold text-center text-[36px]">
            Start your free trials
          </h2>
          <p className="pb-[60px] text-[#667085] text-[15px]">
            Join over 4,000+ startups already growing with Account Pal.
          </p>
          <div className="flex gap-[64px]">
            <Button title="Learn More" primary />
            <Button title="Get in touch" />
          </div>
        </div>
      </div>
      {/**FAQ */}
      <div className="bg-[#F9FAFB] py-[150px]">
        <div className="px-[336px]">
          <Faq data={data} styles={styles} config={config} />
        </div>
        {/**Still has question */}
        <div className="px-[282px] mt-[120px]">
          <div className="bg-[#F2F4F7] rounded-3xl px-[217px] py-[26px] flex flex-col items-center">
            <img
              src={getInTouch}
              alt="Get in touch"
              className="max-w-[130px] h-[63px] object-contain"
            />
            <p className="text-[#101828] text-[13px] font-medium">
              Still have questions?
            </p>
            <p className="font-normal text-[#667085] text-[13px] pb-[24px]">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <Button title="Get in touch" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
