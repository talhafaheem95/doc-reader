import React, { FC } from "react";

interface ILoader {
  loading: boolean;
}
const Loader: FC<ILoader> = ({ loading }) => {
  return (
    <React.Fragment>
      {loading && (
        <div className="loaderWrapper">
          <div className="loader"></div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Loader;
