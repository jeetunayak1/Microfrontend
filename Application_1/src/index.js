
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import singleSpaReact from 'single-spa-react';


if (process.env.isStandalone) {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
}

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App
})

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
