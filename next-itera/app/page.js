import React from 'react';
import { About } from '@/components/About';
import { Feedback } from '@/components/Feedback';
import { MyApps } from '@/components/MyApps';

function Main() {
  return (
    <div>
      <main className="main">
         <About />
        <MyApps />
        <Feedback />
      </main>
    </div>
  );
}

export default Main ;
