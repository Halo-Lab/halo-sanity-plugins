import { GenerateIcon } from "@sanity/icons";
import { Tooltip, Container, Text, Button } from "@sanity/ui";
import { JSX, Dispatch, SetStateAction, PropsWithChildren } from "react";

import { QRCodeGeneratorView } from "./QRCodeGeneratorView";
import { Status, useQRCodeUploader } from "../hooks/useQRCodeUploader";

interface ManualQRCodeGeneratorProps extends PropsWithChildren {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  fieldName: string;
}

export function ManualQRCodeGenerator({
  value,
  setValue,
  children,
  fieldName,
}: ManualQRCodeGeneratorProps): JSX.Element {
  const [uploadingStatus, startUploading] = useQRCodeUploader();

  return (
    <QRCodeGeneratorView
      value={value}
      setValue={setValue}
      control={
        <Tooltip
          content={
            <Container width={0} padding={2}>
              <Text>
                The uploading is still in progress. Please wait until it
                finishes and then you can regenerate the QR code again.
              </Text>
            </Container>
          }
          disabled={uploadingStatus !== Status.Uploading}
          fallbackPlacements={["bottom", "left", "right"]}
          placement="top"
          portal
        >
          <Button
            icon={GenerateIcon}
            loading={uploadingStatus === Status.Uploading}
            text="Generate QR"
            fontSize={2}
            padding={3}
            onClick={() => {
              // Uploader already has a guard against running upload,
              // so we can call it without any check.
              startUploading(fieldName, value);
            }}
            style={{ cursor: "pointer" }}
            tone="primary"
          />
        </Tooltip>
      }
    >
      {children}
    </QRCodeGeneratorView>
  );
}
