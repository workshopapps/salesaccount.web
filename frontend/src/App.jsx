import React from 'react';
import * as Sentry from "@sentry/react";
import LandingPage from './pages/LandingPage';

const App = () => <LandingPage />;

// export default App;

// create a function that will trigger the error
function triggerError() {
    throw new Error('This is a test error');
}

triggerError();

export default Sentry.withProfiler(App);
