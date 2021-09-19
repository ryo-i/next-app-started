import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { hello } from '../modules/hello/hello';
import { inner } from '../data/data.json';


// Style
const H2 = styled.h2`
  color: red;
`;


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
              <H2>{ inner.title }</H2>
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
