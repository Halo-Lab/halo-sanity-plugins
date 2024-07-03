import { defineType, ImageDefinition, ImageOptions } from "sanity";

import QRCodeGenerator from "../components/QRCodeGenerator";

declare module "sanity" {
  export interface IntrinsicDefinitions {
    qrCode: QRCodeDefinition;
  }
}

/**
 * @public
 */
export interface QRCodeOptions extends ImageOptions {
  dependOn?: string | string[];
  /**
   * @default 500
   */
  size?: number;
  /**
   * @default "#FFFFFF"
   */
  bgColor?: string;
  /**
   * @default "#000000"
   */
  fgColor?: string;
  /**
   * @default "L"
   */
  level?: "L" | "M" | "H" | "Q";
}

/**
 * @public
 */
export interface QRCodeDefinition
  extends Omit<ImageDefinition, "type" | "options"> {
  type: "qrCode";
  options?: QRCodeOptions;
}

export const qrCodeType = defineType({
  name: "qrCode",
  type: "image",
  title: "QR Code Generator",
  components: { input: QRCodeGenerator },
});
