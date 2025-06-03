import React from "react";

function UpdateInfo({ user, modalContent }) {
  return (
    <div>
      UpdateInfo
      <pre>{JSON.stringify(modalContent, null, 2)}</pre>
    </div>
  );
}

export default UpdateInfo;
