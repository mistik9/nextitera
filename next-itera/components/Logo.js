"use client"
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

function Logo() {

  return (
    <Link href="/">
      <Image src='/images/logo.png' width={150} height={65} alt="Иконка" priority/>
    </Link>
  );
}

export { Logo };
