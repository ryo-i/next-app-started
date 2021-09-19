import React, { useEffect }  from 'react';
import { hello } from '../modules/hello/hello';
import { inner } from '../data/data.json';


// Component
function Inner() {
  useEffect(() => {
    hello();
  });

  return (
    <>
      {
        inner.length >= 1
          ? inner.map((inner, index) =>
            <section key={ index }>
              <h2>{ inner.title }</h2>
              <p dangerouslySetInnerHTML={{ __html: inner.text }}></p>
            </section>
          )
          : <section>
            <h2>内容が無いよう</h2>
            <p>へんじがない、ただのしかばねのようだ。</p>
          </section>
      }
    </>
  );
}

export default Inner;
