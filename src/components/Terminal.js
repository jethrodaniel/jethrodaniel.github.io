import React, { Link } from 'react';

import './Terminal.css';

import Typing from 'react-typing-animation';

export const Terminal = () => (
  <div>
    <Typing speed={30}>
      <p>$ cat > intro.txt</p>
      <p>
        I'm Mark Delk (aka Jethro).
      </p>
      <span>See:</span>
      <p>
        &nbsp; <a href={'https://github.com/jethrodaniel'}>Github</a>
      </p>
      <p>
        &nbsp; <a href={'http://basedeltazero.com'}>My Band</a>
      </p>
      <p>^C</p>
    </Typing>
  </div>
);