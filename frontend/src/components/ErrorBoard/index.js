export const ErrorBoard = () => {
  return (
    <section className='my-6 mx-auto w-4/5 md:w-1/2 '>
      <div>
        <ul className='flex justify-evenly '>
          <li className='text-grey-600'>Dashboard</li>
          <span className='text-grey-600'>&#62;</span>
          <li className='text-grey-600'>Upload</li>
          <span className='text-grey-600'>&#62;</span>
          <li className='text-grey-600'>Match</li>
          <span className='text-grey-600'>&#62;</span>
          <li>Results</li>
        </ul>
        <p data-test-id="error" className='text-grey-700 mt-4 text-center text-2xl'>
          Oh no! An error occurred while processing that request. Please try
          again.
        </p>
      </div>

      <div className='w-11 h-10 bg-blue-500 mt-36 mx-auto'></div>
      <div className='mx-auto text-center'>
        <button className='bg-blue-500 mt-32 rounded-lg text-white-500 w-52 h-14'>
          See more details
        </button>
      </div>
    </section>
  );
};
