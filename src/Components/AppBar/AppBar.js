import React, { lazy, Suspense } from "react";

const Navigation = lazy(() => import("../Navigation/Navigation"));

const AppBar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="AppBar">
        <Navigation />
      </header>
    </Suspense>
  );
};

export default AppBar;
