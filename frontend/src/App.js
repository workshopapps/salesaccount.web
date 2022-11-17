import React from "react";
import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer'
import Faq from "react-faq-component";
import Button from './components/Button'
const data = {
  title: "Frequently asked questions",
  rows: [
    {
      title: "Is there a free trial available?",
      content: `Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized
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
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

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
      {/**FAQ */}
      <div className="bg-[#F9FAFB] py-[150px]">
        <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
        <div>
          <div className="bg-[#F2F4F7]">
            <p>Still have questions?</p>
            <p>
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <Button title='Get in touch'/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
