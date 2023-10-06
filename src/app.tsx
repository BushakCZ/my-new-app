import { createRoot } from 'react-dom/client';
import AppRoutes from './pages/AppRoutes';

function render() {
    const container = document.getElementById('app');
    const root = createRoot(container); 
    root.render(<AppRoutes/>);
}

render();