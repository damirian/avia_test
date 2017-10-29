import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import TestApp from './components/TestApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <TestApp/>
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
