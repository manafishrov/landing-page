function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <svg
        width={64}
        height={64}
        viewBox='0 0 1024 1024'
        aria-label='Manafish Logo'
        role='img'
      >
        <path
          transform='matrix(.77743 0 0 .77743 512 433.99)'
          d='m1.3764e-5 513.68-444.86-256.84-1e-5 -513.68 444.86-256.84 444.86 256.84 1e-5 513.68z'
          fill='none'
          stroke='#000'
          strokeWidth='77.177'
        />
        <path
          transform='translate(-.0001874 -74.664)'
          d='m512 946.67-376.44-652.01 752.87-2e-5z'
          fill='#fff'
          stroke='#333'
          strokeWidth='60'
        />
        <path
          transform='matrix(1.6941 0 0 .56923 -355.37 147.88)'
          d='m512 512-252.88-438 505.76-3.17e-4z'
        />
        <path
          transform='matrix(.5 0 0 1 256 145.75)'
          d='m512 727.33-249.42-432.01 249.42 119.93 249.42-119.93z'
          strokeWidth='60'
        />
        <path
          transform='translate(1.5483e-5 -296.67)'
          d='m512 1264.2 62.355-99.572 209.65-117.41 73.846 117.41-345.85 156.02-345.85-156.02 73.846-117.41 209.64 117.41z'
          strokeWidth='60'
        />
      </svg>
      <span className='font-branding text-7xl font-medium'>MANAFISH</span>
    </div>
  );
}

export { Logo };
