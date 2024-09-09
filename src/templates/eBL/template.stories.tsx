// Adjust the import path if needed based on your project structure
import { EBLTemplate } from "./template"; // Ensure this path is correct
import { eBLTemplateDocumentData } from "./sample";
import { FunctionComponent } from "react";
import React from "react";

export default {
  title: "eBL Template",
  component: EBLTemplate,
  parameters: {
    componentSubtitle: "Electronic Bill of Lading Template",
  },
};

export const eBLTemplateStory: FunctionComponent = () => {
  return <EBLTemplate document={eBLTemplateDocumentData} handleObfuscation={() => {}} />;
};
