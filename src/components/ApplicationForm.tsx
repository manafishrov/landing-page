import { revalidateLogic } from '@tanstack/react-form';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

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
});

function ApplicationForm() {
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
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
      className='relative space-y-8'
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
        <form.SubmitButton>Submit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
}

export { ApplicationForm };
