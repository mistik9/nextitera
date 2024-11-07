'use client';
import React from 'react';
import { About } from '@/components/About';
import { Feedback } from '@/components/Feedback';
import { MyApps } from '@/components/MyApps';
import { motion } from 'framer-motion';
import '../styles/Main.css';

function Main({}) {
  return (
    <main>
      <About />
      <MyApps />
      <Feedback />
    </main>
  );
}

export default Main;
