import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import("basic/App"));
// const RemoteComponent = React.lazy(() => import("basic/MyComponent"));

export default function () {
  return <>
    <h2>Second Home Page</h2>
    <hr />
    <em>加载app：React.lazy(() => import("basic/App"))</em>
    <Suspense fallback={"loading app..."}>
      <RemoteApp />
    </Suspense>
    <hr />
     {/*<q>加载组件：React.lazy(() => import("basic/MyComponent"))</q>
    <Suspense fallback={"loading component..."}>
      <RemoteComponent />
    </Suspense> */}

  </>;
}
