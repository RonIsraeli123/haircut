import React from 'react';
import Typewriter from 'typewriter-effect';

import { TYPEING } from '../../config/homePage/typeWriter';

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
