import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
// root es la raíz de la aplicación que se monta en el dive#root
const root = createRoot(container);
// renderiza algo en a raíz de la aplicaicón
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
