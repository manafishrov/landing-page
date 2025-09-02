import LandingPage from '@/routes';

import { ScrollArea } from '@/components/ui/ScrollArea';
import { Toaster } from '@/components/ui/Toaster';

export default function Root() {
  return (
    <ScrollArea className='h-full w-full'>
      <LandingPage />
      <Toaster />
    </ScrollArea>
  );
}
