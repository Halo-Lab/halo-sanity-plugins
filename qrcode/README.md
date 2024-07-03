# Sanity QR Code Generator Plugin (for Sanity Studio v3)

## Installation

To install this plugin, use the following command:

```sh
npm install sanity-qr-code-generator
```

## Usage

To use this plugin, add it as a plugin to your `sanity.config.ts` (or .js) file, as shown in the example below:

```ts
import { defineConfig } from "sanity";
import { QRCodeGenerator } from "sanity-qr-code-generator";

export default defineConfig({
  plugins: [QRCodeGenerator()],
});
```

Then you can use `qrCode` as a custom type in your schemas.

```ts
defineField({
  title: "Generate your QR code",
  name: "qrCode",
  type: "qrCode",
});
```

## Configuration

By default, a rendered field will ask to provide a value which has to be encoded in the QR code. But if you want to
provide that value automatically, define the **dependOn** option. That option accepts a document's field name which value
should be encoded.

```ts
defineField({
  title: "Generate your QR code",
  name: "qrCode",
  type: "qrCode",
  options: {
    dependOn: "slug",
  },
});
```

> You can refer only to fields of the document where QR code field is defined.

If you want to depend on a property of some inner object, provide an array with property names which can lead to the wanted value.

```ts
defineField({
  title: "Generate your QR code",
  name: "qrCode",
  type: "qrCode",
  options: {
    dependOn: ["someObject", "propertyOfSomeObject"],
  },
});
```

Additionally, you can configure the _size_, _background and foreground colours_ of the code image and its _level_.

```ts
defineField({
  title: "Generate your QR code",
  name: "qrCode",
  type: "qrCode",
  options: {
    size: 400, // px. Default is 500
    level: "H", // Default is "L". Allowed values are "L" | "M" | "H" | "Q"
    bgColor: "#e3ea15", // Default is #FFFFFF
    fgColor: "#111111", // Default is #000000
  },
});
```

## Example

1. The plugin requires manually entering a value to encode.

<img width="900" alt="QR generator plugin in use" src="https://raw.githubusercontent.com/Halo-Lab/sanity-qr-code-generator-plugin/main/assets/qrcode-manual-generation.png">

2. The plugin automatically gets a value from the document.

<img width="900" alt="QR generator plugin in use" src="https://raw.githubusercontent.com/Halo-Lab/sanity-qr-code-generator-plugin/main/assets/qrcode-automatic-generation.png">

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
