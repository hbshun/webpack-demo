import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import("basic/App"));
const RemoteComponent = React.lazy(() => import("basic/MyComponent"));

export default function () {
  return <>
    <h2>Second Home Page</h2>

    <Suspense fallback={"loading app..."}>
      <RemoteApp />
    </Suspense>
    <hr />
    <Suspense fallback={"loading component..."}>
      <RemoteComponent />
    </Suspense>

  </>;
}
