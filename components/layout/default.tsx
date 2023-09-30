import Image from 'next/image';
import React from 'react';

const DefaultLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main className="flex max-w-screen-md mx-auto min-h-screen flex-col p-20 gap-4 mobile:p-4 mobile:mt-8 tablet:p-6 tablet:mt-6">
      {/* Logo */}
      <div className="flex items-center justify-center mb-2">
        <Image
          width={100}
          height={100}
          alt="logo"
          src="/logo.jpeg"
          className="rounded-full"
        />
      </div>
      <p className="text-xl  text-center">Bible Leadership Education</p>
      {children}
    </main>
  );
};
export default DefaultLayout;
