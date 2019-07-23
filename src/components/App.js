import React from "react";
import Messages from "./Messages";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Messages name="messages" unread={0} />
      <Messages name="invites" unread={5} />
      <Messages name="network" unread={999} />
    </div>
  );
}
