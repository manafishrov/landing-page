import { createRoot } from 'react-dom/client';

import '@/styles/app.css';

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(<div></div>);
}
