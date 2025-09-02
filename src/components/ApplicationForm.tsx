import { revalidateLogic } from '@tanstack/react-form';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useEffect, useState } from 'react';
import { z } from 'zod';

import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { useAppForm } from '@/components/ui/Form';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().refine(isValidPhoneNumber, 'Invalid phone number'),
  instagramHandle: z.string(),
  has3dPrinter: z.boolean(),
  hasSolderingEquipment: z.boolean(),
  whyDoYouWantToBeATester: z.string().min(1, 'This field is required'),
  howDidYouHearAboutUs: z.string().min(1, 'This field is required'),
  acceptRecievingEmail: z.boolean().refine((val) => val === true, {
    message: 'You must accept to receive email',
  }),
  website: z.string().max(0),
  humanCheck: z.string().refine((val) => val.trim().toLowerCase() === 'fish', {
    message: 'Please type the magic word correctly 🐟',
  }),
});

function ApplicationForm() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const form = useAppForm({
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: formSchema,
    },
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      instagramHandle: '',
      has3dPrinter: false,
      hasSolderingEquipment: false,
      whyDoYouWantToBeATester: '',
      howDidYouHearAboutUs: '',
      acceptRecievingEmail: false,
      website: '',
      humanCheck: '',
    },
    onSubmit: async ({ value }) => {
      if (value.website && value.website.trim() !== '') {
        console.warn('Spam detected, ignoring submission');
        return;
      }

      const hiddenForm = document.createElement('form');
      hiddenForm.action = atob(
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZTBDZUpyX3BSQVdzRVdRMnpfUVl5WWhDdU55eTAyNURGSl9zbHRFc0N2WTdxdVN3L2Zvcm1SZXNwb25zZQ==',
      );
      hiddenForm.method = 'POST';
      hiddenForm.target = 'hidden_iframe';

      const mapping: Record<string, string> = {
        name: 'entry.1716106546',
        email: 'entry.684738329',
        phoneNumber: 'entry.1053636934',
        instagramHandle: 'entry.633270557',
        has3dPrinter: 'entry.1233970321',
        hasSolderingEquipment: 'entry.883675804',
        whyDoYouWantToBeATester: 'entry.880152685',
        howDidYouHearAboutUs: 'entry.1144330060',
        acceptRecievingEmail: 'entry.739069437',
      };

      Object.entries(mapping).forEach(([key, entryId]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = entryId;

        if (typeof value[key as keyof typeof value] === 'boolean') {
          input.value = value[key as keyof typeof value] ? 'Yes' : 'No';
        } else {
          input.value = String(value[key as keyof typeof value] ?? '');
        }

        hiddenForm.appendChild(input);
      });

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      document.body.removeChild(hiddenForm);

      setShowDialog(true);
      form.reset();
      setCanSubmit(false);
      setTimeout(() => setCanSubmit(true), 3000);
    },
  });

  return (
    <>
      <iframe name='hidden_iframe' className='hidden' sandbox='allow-forms' />
      <form
        className='relative space-y-8'
        onSubmit={async (e) => {
          e.preventDefault();
          await form.handleSubmit();
        }}
      >
        <form.AppForm>
          <form.AppField name='name'>
            {(field) => (
              <field.TextField
                label='Name'
                placeholder='Your name'
                autoComplete='name'
              />
            )}
          </form.AppField>
          <form.AppField name='email'>
            {(field) => (
              <field.TextField
                label='Email'
                placeholder='you@email.com'
                autoComplete='email'
              />
            )}
          </form.AppField>
          <form.AppField name='phoneNumber'>
            {(field) => (
              <field.PhoneField
                label='Phone Number'
                placeholder='+1234567890'
                autoComplete='tel'
              />
            )}
          </form.AppField>
          <form.AppField name='instagramHandle'>
            {(field) => (
              <field.TextField
                label='Instagram Handle'
                placeholder='@yourhandle'
              />
            )}
          </form.AppField>
          <form.AppField name='has3dPrinter'>
            {(field) => (
              <field.CheckboxField label='Do you have access to a 3D printer?' />
            )}
          </form.AppField>
          <form.AppField name='hasSolderingEquipment'>
            {(field) => (
              <field.CheckboxField label='Do you have access to soldering equipment?' />
            )}
          </form.AppField>
          <form.AppField name='whyDoYouWantToBeATester'>
            {(field) => (
              <field.TextAreaField
                label='Why do you want to be a tester?'
                placeholder='Let us know why you are interested'
              />
            )}
          </form.AppField>
          <form.AppField name='howDidYouHearAboutUs'>
            {(field) => (
              <field.TextAreaField
                label='How did you hear about us?'
                placeholder='Tell us how you discovered Manafish'
              />
            )}
          </form.AppField>
          <form.AppField name='acceptRecievingEmail'>
            {(field) => (
              <field.CheckboxField label='I accept receiving emails about my application' />
            )}
          </form.AppField>
          <form.AppField name='website'>
            {(field) => (
              <field.TextField
                className='hidden'
                tabIndex={-1}
                autoComplete='off'
              />
            )}
          </form.AppField>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-end'>
            <div className='w-full flex-1'>
              <form.AppField name='humanCheck'>
                {(field) => (
                  <field.TextField
                    label="To prove you’re human, type the magic word: 'fish' 🐟"
                    placeholder="Type 'fish'"
                  />
                )}
              </form.AppField>
            </div>
            <div className='w-full sm:w-auto'>
              <form.SubmitButton
                className='mb-2 w-full min-w-32 sm:w-auto'
                disabled={!canSubmit}
              >
                {canSubmit ? 'Submit' : 'Please wait…'}
              </form.SubmitButton>
            </div>
          </div>
        </form.AppForm>
      </form>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Application Submitted!</DialogTitle>
            <DialogDescription>
              Thank you for applying to become a Manafish beta tester. We’ll
              review your application and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { ApplicationForm };
