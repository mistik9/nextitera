"use client"
import React from 'react';
import Image from 'next/image';
import hostImageLoader from './ImageLoader';

import Link from 'next/link';

function Logo() {

  return (
    <Link href="/">
      <Image loader={hostImageLoader} src="https://newitera.ru/images/logo.png" width={150} height={65} alt="Иконка" priority/>
    </Link>
  );
}

export { Logo };
