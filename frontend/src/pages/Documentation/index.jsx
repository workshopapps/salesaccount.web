import React from 'react';
import DocumentationNavBar from '../../components/Documentation components/navBar';

const Documentation = () =>(<div className=" bg-white text-gray-800">
        <DocumentationNavBar/>
        <header className="header bg-[#194185] text-[#F9FAFB] shadow py-4 px-4">
        <div className="header-content h-40 flex items-center justify-center flex-row">
          <h1  className='text-3xl text-center'>A step by step guide on how <br /> to use Accountpal</h1>
            
        </div>
      </header>
      <div className='flex flex-row min-h-screen'>

        <aside
      className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#EAECF0]"
    >
     

      <div className="sidebar-content px-4 py-6">
        <h1>General usage</h1>
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Projects</span>
          </li>
          <li className="my-px">
            <a
              href="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3">Manager</span>
            </a>
          </li>
               <li className="my-px">
            <a
              href="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3">Manager</span>
            </a>
          </li>
         
        </ul>
      </div>
    </aside>
    <main className="main flex flex-col flex-grow -ml-14 md:ml-0 transition-all duration-150 ease-in">
  
      <div className="main-content flex flex-col flex-grow p-4">

        <div
          className="flex flex-col flex-grow   rounded mt-4"
        > 
        <section className="mb-11">
            <h1  className="text-2xl mb-4" >Introduction</h1>
            <p>One of the hardest things in accounting is to match account statements to sales. 
                ACCOUNT-PAL is a service that uses an AI model and GPT-3 to automatically make the accountant’s job easy and avoid errors. </p>
        </section>
        <section className="mb-11">
            <h1  className="text-2xl mb-4">Why Accountpal?</h1>
            <p> A web application that makes the day-today balancing of accounts and sales easier, faster and very much reliable is needed in all industries.
                 That is what makes Accountpal a go-to software fo all your account balancing.</p>
            
            <p>Accountpal uses AI Model and GPT-3, 
                a very large language model that has proved to be successful in Automated 
                customer service  knowledge management and natural 
                language processing.</p>

            <p>At Accountpal, our main target is to make account balancing easier for companies (expecially SME’s and SMBs). 
                Thats one way we can use technology to make meaninful impac accross the globe.</p>
        
        </section>
        <section className="mb-11">
            <h1  className="text-2xl mb-4"> How to use Accountpal</h1>
            <h2 className='text-[#194185] mb-2'>1. Upload Files</h2>
            <p>One of the hardest things in accounting is to match account statements to sales. ACCOUNT-PAL is a service that uses an AI model and GPT-3 to automatically make the accountant’s job easy and avoid errors. </p>
            

            <h2 className='text-[#194185] mb-2'>2. Match Data</h2>
            <h2 className='text-[#194185] mb-2'>3. Match Data Result</h2>
            
        </section>
        </div>
      </div>
    </main>
      </div>
    
  </div>);

export default Documentation;
