import DashboardIcon from '../assets/dashboard.png';
import FilePlus from '../assets/addFile.png';
import Time from '../assets/history.png';
import Setting from '../assets/settings.png';
import Privacy from '../assets/shield.png';
import Help from '../assets/helpQuestion.png';

export const SideNav = () => {
  return (
    <aside className='w-1/4 bg-blue-500 h-screen hidden md:block relative bottom-0'>
      <div className=' absolute mt-9 ml-5 md:ml-24'>
        <button className='bg-white-500 flex gap-2 text-blue-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={DashboardIcon} alt='Dashboard' />
          </span>
          Dashboard
        </button>
        <button className=' flex gap-2 text-white-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={FilePlus} alt='add file icon' />
          </span>
          Import Data
        </button>
        <button className=' flex gap-2 text-white-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={Time} alt='Time icon' />
          </span>
          History
        </button>
        <button className=' flex gap-2 text-white-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={Setting} alt='Setting icon' />
          </span>
          Setting
        </button>
      </div>

      <div className=' ml-5 md:ml-24 absolute bottom-0'>
        <button className=' flex gap-2 text-white-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={Privacy} alt='Pricacy icon' />
          </span>
          Privacy
        </button>
        <button className=' flex gap-2 text-white-500 items-center rounded-lg px-2.5 py-4 mb-4'>
          <span>
            <img src={Help} alt='Ask questions icon' />
          </span>
          Help
        </button>
      </div>
    </aside>
  );
};
