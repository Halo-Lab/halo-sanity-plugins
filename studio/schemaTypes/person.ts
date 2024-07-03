import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full name",
      type: "string",
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "qrCode",
      type: "qrCode",
      options: {
        size: 400,
        dependOn: "fullName",
      },
    }),
  ],
});
