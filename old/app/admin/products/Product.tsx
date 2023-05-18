"use client";

import { useState } from "react";
import Nav from "./(product)/Nav";

export default function () {
  const [currentTab, setCurrentTab] = useState("details");

  return (
    <div>
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}
