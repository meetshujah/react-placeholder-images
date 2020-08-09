import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Docs = () => {
  const [url, setUrl] = useState(window.location.host);
  const [examples, setExamples] = useState([
    "/150",
    "/350x150",
    "/111/blue",
    "222/blue/red",
    "/555?text=hello+subroto",
  ]);
  return (
    <div className="docs">
      {examples.map((exampleItem, index) => (
        <div className="box animate__animated animate__slideInUp">
          <div className="box-header">
            <span>Simple Example</span>
            <CopyToClipboard
              text={`https://${url}
            ${exampleItem}`}
            >
              <span className="material-icons">content_copy</span>
            </CopyToClipboard>
          </div>
          <div className="box-body">
            https://{url}
            {exampleItem}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Docs;
