import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestApp from './components/TestApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <TestApp/>
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
