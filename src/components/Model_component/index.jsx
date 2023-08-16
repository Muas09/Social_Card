import React from "react";

const NotFoundComponent = () => {
  return (
    <div className="NotFound">
      <img
        className="image"
        src="Assets/No_Results_Found.svg"
        alt="Not found"
      />
      <div>
        <p className="Results">No Results Found</p>
        <p className="No_Content">
          No content matched your criteria. Try searching for something else.
        </p>
      </div>
    </div>
  );
};

export default NotFoundComponent;
