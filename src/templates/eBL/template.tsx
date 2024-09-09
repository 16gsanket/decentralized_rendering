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

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="text-center border-b border-gray-300 p-4">
            <h1 className="text-lg font-bold">BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT</h1>
            <p className="text-sm text-right">B/L No 123</p>
        </div>
        <div className="grid grid-cols-2 border-t border-gray-300">
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Shipper</h2>
                <p>Demo Shipper<br />One North<br />Singapore</p>
            </div>
            <div className="p-4">
                <h2 className="font-bold">Booking No</h2>
                <p>123</p>
                <h2 className="font-bold mt-4">Export references</h2>
                <p>(blank)</p>
                <h2 className="font-bold mt-4">Onward inland routing</h2>
                <p>Not part of Carriage (for account and risk of Merchant)</p>
            </div>
        </div>
        <div className="grid grid-cols-2 border-t border-gray-300">
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Consignee</h2>
                <p>TO THE ORDER OF<br />Demo Consignee</p>
            </div>
            <div className="p-4">
                <h2 className="font-bold">Notify Party</h2>
                <p>Demo Notify</p>
            </div>
        </div>
        <div className="grid grid-cols-4 border-t border-gray-300">
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Vessel</h2>
                <p>1</p>
            </div>
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Voyage No</h2>
                <p>100</p>
            </div>
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Place of Receipt</h2>
                <p>Beijing</p>
            </div>
            <div className="p-4">
                <h2 className="font-bold">Place of Delivery</h2>
                <p>Singapore</p>
            </div>
        </div>
        <div className="grid grid-cols-2 border-t border-gray-300">
            <div className="p-4 border-r border-gray-300">
                <h2 className="font-bold">Port of Loading</h2>
                <p>Singapore Port</p>
            </div>
            <div className="p-4">
                <h2 className="font-bold">Port of Discharge</h2>
                <p>China Port</p>
            </div>
        </div>
    </div>
        


    </div>
  );
};

// eBLTemplate
