import { v2 } from "@tradetrust-tt/tradetrust-core";

// Interface to define the structure for eBL document
export interface eBLTemplateDocument extends v2.OpenAttestationDocument {
  shipper: string;
  consignee: string;
  vessel: string;
  billOfLadingNumber: string;
  loadingPort: string;
  dischargePort: string;
  weight: string;
}

// Mock data to test the eBL template
export const eBLTemplateDocumentData: eBLTemplateDocument = {
  shipper: "Global Shipping Inc.",
  consignee: "Sea Trade Ltd.",
  vessel: "Ocean Voyager",
  billOfLadingNumber: "BL123456789",
  loadingPort: "Shanghai",
  dischargePort: "Los Angeles",
  weight: "50000 KG",
  issuers: [
    {
      name: "Shipping Authority",
      documentStore: "0x1234567890ABCDEF",
      identityProof: {
        location: "few-blue-ocean.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  $template: {
    name: "eBL",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};
