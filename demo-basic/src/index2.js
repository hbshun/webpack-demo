import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './components/Loading';

document.writeln('麻雀团队 Sparrow Team');
function RC() {
  return (
    <div>
      <h1>Index222222222</h1>
      <Loading />
    </div>
  );
}
ReactDOM.render(
  <RC />,
  document.getElementById('react-root2'),
);
