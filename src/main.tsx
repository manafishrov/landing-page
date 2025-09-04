import { PostHogProvider } from 'posthog-js/react';
import { createRoot } from 'react-dom/client';

import Root from '@/routes/__root';

import '@/styles/app.css';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string,
  disable_cookie: true,
  persistence: 'memory' as const,
};

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string}
      options={options}
    >
      <Root />
    </PostHogProvider>,
  );
}
