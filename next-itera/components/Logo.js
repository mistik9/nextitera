import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} width={150} height={65} alt="Иконка" />
    </Link>
  );
}

export { Logo };
