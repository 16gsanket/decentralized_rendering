import React, { FunctionComponent } from "react";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
// type declaration is missinf to @emotion/core
// import { css } from "@emotion/core";
import { CocTemplateCertificate } from "./sample";

// const containerStyle = css`
//   background-color: #324353;
//   color: #ffffff;
//   padding: 15px;
//   margin: auto;
//   width: 80%;
//   text-align: center;
// `;

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div  className={className} id="custom-template">
      <h1>{document.name}</h1>
      <div>awarded to</div>
      <h2>{document.recipient.name}</h2>
    </div>
  );
};