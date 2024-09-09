import React, { FunctionComponent } from "react";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { eBLTemplateDocument } from "./sample";

export const EBLTemplate: FunctionComponent<TemplateProps<eBLTemplateDocument> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div  className={className} id="custom-template">
      <h1>{document?.shipper}</h1>
      <div>awarded to</div>
      {/* <h2>{document.recipient.name}</h2> */}
    </div>
  );
};

// eBLTemplate
