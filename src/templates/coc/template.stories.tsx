// import { Meta, Preview, Props, Description, Story } from "@storybook/addon-docs";
import { CocTemplate } from "./template";
import { cocTemplateCertificate } from "./sample";
import { FunctionComponent } from "react";
import React from 'react';


export default {
  title: "Sample Template",
  component: CocTemplate,
  parameters: {
    componentSubtitle: "Sample Template",
  },
};

export const SampleTemplate: FunctionComponent = () => {
  return <CocTemplate document={cocTemplateCertificate} handleObfuscation={() => {}} />;
};