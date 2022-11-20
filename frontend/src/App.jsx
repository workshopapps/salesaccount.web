import React from 'react';
import LandingPage from './pages/LandingPage';
import Careers from './pages/CareersPage';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/careers" element={<Careers />} />
			</Routes>
		</div>
	);
};

export default App;
