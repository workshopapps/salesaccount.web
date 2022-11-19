import { ErrorBoard } from './components/ErrorBoard';
import { SideNav } from './components/SideNav';
import { Topnav } from './components/Topnav';

function App() {
  return (
    <div>
      <Topnav />
      <div className='flex'>
        <SideNav />
        <ErrorBoard />
      </div>
    </div>
  );
}

export default App;
