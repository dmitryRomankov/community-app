import * as React from 'react';

export const changeCommaColor = (str: string) => {
  const result = str.split(',').map((item, id) => [item, <span key={id} className='comma'>,</span>]);
  result[result.length - 1].pop();
  return result;
};
