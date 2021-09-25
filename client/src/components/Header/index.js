import React from "react";

function Header({ children }) {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Bander</h1>
      <p class="lead">The premiere service for finding other musicians.</p>
      <hr class="my-4"></hr>
      <p></p>
    </div>
    // <div
    //   style={{
    //     height: 560,
    //     clear: "both",
    //     paddingTop: 120,
    //     textAlign: "center",
    //   }}
    // >
    //   {children}
    // </div>
  );
}

export default Header;
