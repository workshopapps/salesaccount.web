import React from 'react';
import * as Sentry from "@sentry/react";
import LandingPage from './pages/LandingPage';

const App = () => <LandingPage />;

// export default App;

export default Sentry.withProfiler(App);
