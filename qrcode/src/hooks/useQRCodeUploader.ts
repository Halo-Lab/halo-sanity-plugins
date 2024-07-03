import { useToast } from "@sanity/ui";
import { useState, useRef } from "react";
import { useClient, useFormValue } from "sanity";

import { useQRCodeSVGMarkupResolver } from "../components/QRCodeConverter";

export enum Status {
  Idle,
  Uploading,
  Uploaded,
  Failed,
}

export interface Uploader {
  (fieldName: string, fileNameSuffix: string): void;
}

export function useQRCodeUploader(): [Status, Uploader] {
  const timer = useRef<number>();
  const toast = useToast();
  const client = useClient({ apiVersion: "2021-06-07" });
  const documentId = useFormValue(["_id"]) as string;
  const getSVGMarkup = useQRCodeSVGMarkupResolver();
  const [status, setStatus] = useState(Status.Idle);

  const uploader = async (
    fieldName: string,
    fileNameSuffix: string,
  ): Promise<void> => {
    const svgMarkup = getSVGMarkup();

    if (!svgMarkup || status === Status.Uploading) return;

    setStatus(Status.Uploading);

    try {
      const imageAsset = await client.assets.upload(
        "image",
        new Blob([svgMarkup], { type: "image/svg+xml" }),
        {
          filename: `qr-code-to-${fileNameSuffix}`,
        },
      );

      await client
        .patch(documentId)
        .set({
          [fieldName]: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        })
        .commit();

      setStatus(Status.Uploaded);

      toast.push({
        status: "success",
        title: "QR code successfully added to your assets",
      });
    } catch {
      setStatus(Status.Failed);

      toast.push({
        status: "error",
        title: "Oooops, something went wrong",
      });
    }
  };

  const debouncedUploader: Uploader = (fieldName, fileNameSuffix) => {
    clearTimeout(timer.current);

    // Dependence can change rapidly. We do not want to spawn many saves in a short time.
    timer.current = self.setTimeout(uploader, 200, fieldName, fileNameSuffix);
  };

  return [status, debouncedUploader];
}
