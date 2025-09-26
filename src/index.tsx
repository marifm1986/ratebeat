// import { render } from "react-dom";
// import { AppRouter } from './AppRouter';
// import './index.css';
// render(<AppRouter />, document.getElementById("root"));
import { inject } from '@vercel/analytics';


import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './AppRouter'
inject()
const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<AppRouter />)


// import { createRoot } from 'react-dom/client';
// import './index.css'
// import { App } from './App';

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(<App />);
