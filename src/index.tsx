import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar 
    item1='Teste'
    item2 = {5}
/>

<Footer 
titulo1='Bebidas'
item1='Pepsi'
item2='Guaraná'
item3='Fanta'
titulo2='Redes Sociais'
item4='Facebook'
item5='WhatsApp'
/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
