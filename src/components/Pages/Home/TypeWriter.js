import React from 'react';
import Typewriter from 'typewriter-effect';

import { TYPEING } from '../../../config/Pages/homePage/typeWriter';

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: TYPEING,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
