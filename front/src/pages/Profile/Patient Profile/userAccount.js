import React from "react";

function UserAccount({ user }) {
  return (
    <div>
      UserAccount
      <p>{user.role}</p>
    </div>
  );
}

export default UserAccount;
