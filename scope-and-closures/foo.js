'use strict'

import hello from 'app';

var hungry = 'hippo';

function awesome() {
  console.log(
    hello(hungry).toUpperCase());
}

export awesome;
