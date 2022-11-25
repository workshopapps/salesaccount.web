import React from 'react';

const Documentation = () =>(<div className=" bg-gray-100 text-gray-800">
        <header className="header bg-[#194185] text-[#F9FAFB] shadow py-4 px-4">
        <div className="header-content h-40 flex items-center justify-center flex-row">
          <h1 className='text-3xl text-center'>A step by step guide on how <br /> to use Accountpal</h1>
            
        </div>
      </header>
      <div className='flex flex-row min-h-screen'>

        <aside
      className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500"
    >
     

      <div className="sidebar-content px-4 py-6">
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
         
        </ul>
      </div>
    </aside>
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
  
      <div className="main-content flex flex-col flex-grow p-4">

        <div
          className="flex flex-col flex-grow   rounded mt-4"
        > 
        <section>
            <h1>Introduction</h1>
            <p>One of the hardest things in accounting is to match account statements to sales. 
                ACCOUNT-PAL is a service that uses an AI model and GPT-3 to automatically make the accountant’s job easy and avoid errors. </p>
        </section>
        <section>
            <h1>Why Accountpal?</h1>
            <p> A web application that makes the day-today balancing of accounts and sales easier, faster and very much reliable is needed in all industries.
                 That is what makes Accountpal a go-to software fo all your account balancing.</p>
            
            <p>Accountpal uses AI Model and GPT-3, 
                a very large language model that has proved to be successful in Automated 
                customer service  knowledge management and natural 
                language processing.</p>

            <p>At Accountpal, our main target is to make account balancing easier for companies (expecially SME’s and SMBs). 
                Thats one way we can use technology to make meaninful impac accross the globe.</p>
        
        </section>
        <section>
            <h1> Introduction</h1>
            <p>One of the hardest things in accounting is to match account statements to sales. ACCOUNT-PAL is a service that uses an AI model and GPT-3 to automatically make the accountant’s job easy and avoid errors. </p>
        </section>
        </div>
      </div>
    </main>
      </div>
    
  </div>);

export default Documentation;
