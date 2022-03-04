import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import SearchContainer from "../container/SearchContainer/SearchContainer";
import DocViewerContainer from "../container/DocViewerContainer/DocViewerContainer";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={"Fallback Method"}>
        <div>
          <Router>
            <Routes>
              <React.Fragment>
                <Route path="/" element={<SearchContainer />} />
                <Route path="/doc" element={<DocViewerContainer />} />
              </React.Fragment>
            </Routes>
          </Router>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default AppRouter;
