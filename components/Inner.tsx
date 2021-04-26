import React, { useEffect }  from 'react';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';


const innerJson = Data.data.inner;


// Component
function Inner() {
  useEffect(() => {
    hello();
  });

  return (
    <div className="inner">
      {innerJson.map((innerJson, index) =>
        <section key={ index }>
          <h2>{ innerJson.title }</h2>
          <p dangerouslySetInnerHTML={{ __html: innerJson.text }}></p>
        </section>
      )}
    </div>
  );
}

export default Inner;
