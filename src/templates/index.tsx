import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { templates } from "./coc";
import { templates as EBLTemplate } from "./eBL";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  ebl: EBLTemplate
};