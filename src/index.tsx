import { render } from "react-dom";
import { AppRouter } from './AppRouter';
import './index.css';
render(<AppRouter />, document.getElementById("root"));

// import { createRoot } from 'react-dom/client';
// import './index.css'
// import { App } from './App';

// const container = document.getElementById('root') as HTMLElement;
// const root = createRoot(container);
// root.render(<App />);
