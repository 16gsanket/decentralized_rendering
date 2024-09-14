import React, { FunctionComponent } from "react";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { eBLTemplateDocument } from "./sample";

const EBLTemplate: FunctionComponent<TemplateProps<eBLTemplateDocument> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div  className={className} id="custom-template">
      <h1>{document?.shipper}</h1>
      <div>awarded to</div>
      
<table className="min-w-full border border-black table-fixed">
        {/* Header Row */}
        <thead>
          <tr className="text-center">
            <th
              colSpan={3}
              className="border border-black bg-gray-200 px-4 py-2 text-left"
            >
              BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT
            </th>
            <th className="border border-black bg-gray-200 px-4 py-2">SCAC</th>
            <th className="border border-black bg-gray-200 px-4 py-2">B/L No</th>
            <td className="border border-black px-4 py-2">123</td>
          </tr>
        </thead>
        <tbody>
          {/* Shipper & Booking Info */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">Shipper</th>
            <td colSpan={2} className="border border-black px-4 py-2">
              Demo Shipper
              <br />
              One North
              <br />
              Singapore
            </td>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Booking No
            </th>
            <td colSpan={2} className="border border-black px-4 py-2">
              123
            </td>
          </tr>
          {/* Export References */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Export References
            </th>
            <td colSpan={5} className="border border-black px-4 py-2">
              Onward inland routing (Not part of Carriage as defined in clause 1.
              For account and risk of Merchant)
            </td>
          </tr>
          {/* Consignee */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">Consignee</th>
            <td colSpan={5} className="border border-black px-4 py-2">
              TO THE ORDER OF Demo Consignee
            </td>
          </tr>
          {/* Notify Party */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Notify Party
            </th>
            <td colSpan={5} className="border border-black px-4 py-2">Demo Notify</td>
          </tr>
          {/* Vessel, Voyage No., Port Info */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">Vessel</th>
            <td className="border border-black px-4 py-2">1</td>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Voyage No.
            </th>
            <td className="border border-black px-4 py-2">100</td>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Port of Loading
            </th>
            <td className="border border-black px-4 py-2">Singapore Port</td>
          </tr>
          {/* Place of Receipt, Port of Discharge, Place of Delivery */}
          <tr>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Place of Receipt
            </th>
            <td className="border border-black px-4 py-2">Beijing</td>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Port of Discharge
            </th>
            <td className="border border-black px-4 py-2">China Port</td>
            <th className="border border-black bg-gray-200 px-4 py-2">
              Place of Delivery
            </th>
            <td className="border border-black px-4 py-2">Singapore</td>
          </tr>
        </tbody>
      </table>
        
<h3>Particulars Furnished by Shipper</h3>

    <table className="min-w-full border border-black table-fixed mb-4">
    <thead>
    <tr>
      <th className="border border-black bg-gray-200 px-4 py-2" style={{ width: "50dvw"  ,  height: "100px"}}>
        Kind of Packages: Description of Goods, Marks, and Numbers
        Container No./Serial No.
        Above particulars as declared by Shipper, but without responsibility of
        or representation by Carrier (see clause 14)
      </th>
      <th className="border border-black bg-gray-200 px-4 py-2" style={{ width: "25dvw"  , verticalAlign: "top"}}>Weight</th>
      <th className="border border-black bg-gray-200 px-4 py-2" style={{ width: "25dvw"  , verticalAlign: "top"}}>
        Measurement
      </th>
    </tr>
  </thead>
       
    </table>

    <table className="table-auto w-full border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2" style={{ width: "15dvw" , height: "14dvh" , verticalAlign: "top"}}>Freight & Charges</th>
            <th className="border border-black p-2" style={{ width: "10dvw" , height: "14dvh" , verticalAlign: "top"}}>Rule</th>
            <th className="border border-black p-2" style={{ width: "10dvw" , height: "14dvh" , verticalAlign: "top"}}>Unit</th>
            <th className="border border-black p-2" style={{ width: "10dvw" , height: "14dvh" , verticalAlign: "top"}}>Currency</th>
            <th className="border border-black p-2" style={{ width: "10dvw" , height: "14dvh" , verticalAlign: "top"}}>Prepaid</th>
            <th className="border border-black p-2" style={{ width: "10dvw" , height: "14dvh" , verticalAlign: "top"}}>Collect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-4">
              <div>Carrier's Receipt (see clause 1 and 14). Total number of containers or packages received by Carrier.</div>
              <div className="font-bold mt-2">1 container</div>
            </td>
            <td className="border border-black p-2" style={{verticalAlign: "top"}}>Place of Issue of B/L</td>
            
            
          </tr>
          <tr>
            <td className="border border-black p-4">
              <div>Number & Sequence of Original B(s)/L</div>
              <div className="font-bold mt-2">THREE/3</div>
            </td>
            <td className="border border-black p-4" style={{verticalAlign: "top"}}>
              <div>Date of Issue of B/L</div>
            </td>
          </tr>
          <tr>
            <td className="border border-black p-4">
              <div>Declared Value (see clause 7.3)</div>
            </td>
            <td className="border border-black p-4">
              <div>Shipped on Board Date</div>
              <div className="mt-2 text-sm">
                (Local Time)
              </div>
            </td>
            {/* <td className="border border-b-black p-4 " >
              Shipped on Board Date
            </td> */}
          </tr>
 
        </tbody>
      </table>

    </div>
  );
};

export default EBLTemplate;

// eBLTemplate
