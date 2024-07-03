import { Plugin, definePlugin } from "sanity";

import { qrCodeType } from "./schemaTypes/qrCodeType";

export {
  type QRCodeOptions,
  type QRCodeDefinition,
} from "./schemaTypes/qrCodeType";

/**
 * @public
 */
export interface QRCodeGeneratorConfig {
  /* nothing here yet */
}

/**
 * @public
 */
export const QRCodeGenerator = definePlugin<QRCodeGeneratorConfig | void>(
  () => {
    return {
      name: "sanity-plugin-qr-code-generator",
      schema: { types: [qrCodeType] },
    };
  },
);

/**
 * @public
 * @deprecated use the {@link QRCodeGeneratorConfig}.
 *
 * ```ts
 * import { type QRCodeGeneratorConfig } from 'sanity-qr-code-generator';
 * ```
 */
export type QrCodeGeneratorConfig = QRCodeGeneratorConfig;

/**
 * @public
 * @deprecated use the {@link QRCodeGenerator}.
 *
 * ```ts
 * import { QRCodeGenerator } from 'sanity-qr-code-generator';
 * ```
 */
export const QrCodeGenerator: Plugin<QrCodeGeneratorConfig | void> =
  QRCodeGenerator;
