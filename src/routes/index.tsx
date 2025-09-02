import { ApplicationForm } from '@/components/ApplicationForm';
import { Logo } from '@/components/Logo';

export default function LandingPage() {
  return (
    <div className='my-8 flex h-full w-full flex-col items-center gap-8 sm:my-16'>
      <Logo />
      <section className='w-full max-w-3xl p-8'>
        <h1 className='mb-8 text-3xl font-extrabold sm:text-4xl'>
          MAKE YOUR OWN 3D-PRINTED UNDERWATER DRONE
        </h1>
        <p className='mb-4 text-blue-900'>
          Apply at the{' '}
          <a
            href='#application-form'
            className='font-semibold text-blue-800 underline'
          >
            bottom of this page
          </a>{' '}
          to become a beta tester!
        </p>
        <p className='mb-4'>
          If you found this page, you are most likely interested in making your
          own underwater drone. Well, you found us at the{' '}
          <strong>perfect time</strong>, because right now we are looking for
          beta testers for our Manafish kit, a kit containing:
        </p>
        <ul className='mb-6 ml-6 list-disc'>
          <li>
            <em>All</em> components needed to build your own 3D-printed
            underwater drone (40 different parts including motors, electronics,
            acrylic pipe etc.)
          </li>
          <li>50m tether that plugs into your PC with USB-C.</li>
          <li>
            Manafish assembly guide with video tutorials and lego-style
            instructions.
          </li>
          <li>
            Manafish software, that will be pre-uploaded to the
            microcontrollers, so absolutely no coding required!
          </li>
        </ul>
        <p>
          The <em>only</em> things you need are:
        </p>
        <ul className='mb-6 ml-6 list-disc'>
          <li>Access to a 3D-printer.</li>
          <li>Access to soldering equipment.</li>
        </ul>
        <p className='mb-4'>
          Manafish was designed with the intention of being sold as a kit from
          <em>day one</em>. That means you will be able to assemble your
          underwater drone in only a few days with a minimal amount of boring
          and time-consuming steps along the way. Even if you’ve never built
          electronics before, you’ll succeed.
        </p>
        <p className='mb-4'>
          The design has already been made by 6 alpha-testers to ensure that it
          works consistently. If you for any reason get stuck while assembling
          your drone, we <strong>guarantee</strong> that we will personally sit
          on a video call with you and provide assistance until you know how to
          proceed.
        </p>
        <p className='mb-4'>
          All of our beta testers will get the kit for a special early bird
          price of <span className='font-semibold'>$980</span>, which is{' '}
          <strong>far cheaper</strong> than what it will be priced at the
          official launch (launch price will be{' '}
          <span className='font-semibold'>$1,400+</span>). If you apply at the
          bottom of this page we will contact you with more information once the
          kits are ready.
        </p>
        <p className='mb-4'>
          Applications are non-binding. If you don't want to become a
          beta-tester when the application is accepted, you just say so, and we
          take you off the list :). The applications will be evaluated in
          chronological order, so by applying now you maximize your chances of
          becoming a beta-tester.
        </p>
      </section>
      <section
        id='application-form'
        className='w-full max-w-3xl px-8 pt-8 pb-32'
      >
        <h2 className='mb-8 scroll-m-20 text-2xl font-bold sm:text-3xl'>
          APPLICATION FORM
        </h2>
        <ApplicationForm />
      </section>
    </div>
  );
}
