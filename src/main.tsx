console.log(
  "%c==========================================\n" +
  "              PROJECT INFO\n" +
  "==========================================\n\n" +
  "%c Developed by: %cSujal Thapa\n" +
  "%c Role: %cUnited Hack Web Developer & Tech Lead\n" +
  "%c Hackathon: %cHackUnited V6\n" +
  "%c LinkedIn: %chttps://www.linkedin.com/in/iamsujalthapa/\n\n" +
  "==========================================",
  "color: #FF6849; font-size: 18px; font-weight: bold;",
  "color: #FFFFFF; font-size: 16px;",
  "color: #F6C177; font-size: 16px; font-weight: bold;",
  "color: #FFFFFF; font-size: 16px;",
  "color: #F6C177; font-size: 16px; font-weight: bold;",
  "color: #FFFFFF; font-size: 16px;",
  "color: #F6C177; font-size: 16px; font-weight: bold;",
  "color: #FFFFFF; font-size: 16px; text-decoration: underline;",
  "color: #FF6849; font-size: 18px; font-weight: bold;"
);



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
