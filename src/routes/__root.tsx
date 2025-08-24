import LandingPage from '@/routes';

import { Toaster } from '@/components/ui/Toaster';

export default function Root() {
  return (
    <>
      <LandingPage />
      <Toaster />
    </>
  );
}
