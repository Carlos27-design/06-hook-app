import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { MultipleCustomHook } from './03-example/MultipleCustomHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';
// import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MultipleCustomHook />
  // </React.StrictMode>
);
