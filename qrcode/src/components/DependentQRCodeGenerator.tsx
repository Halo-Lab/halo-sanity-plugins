import { useFormValue } from "sanity";
import {
  JSX,
  useRef,
  Dispatch,
  useEffect,
  SetStateAction,
  PropsWithChildren,
} from "react";

import { QRCodeOptions } from "../schemaTypes/qrCodeType";
import { useQRCodeUploader } from "../hooks/useQRCodeUploader";
import { QRCodeGeneratorView } from "./QRCodeGeneratorView";

interface DependentQRCodeGeneratorProps extends PropsWithChildren {
  value: string;
  options: QRCodeOptions;
  setValue: Dispatch<SetStateAction<string>>;
  fieldName: string;
}

export function DependentQRCodeGenerator({
  value,
  options,
  setValue,
  fieldName,
  children,
}: DependentQRCodeGeneratorProps): JSX.Element {
  const firstRun = useRef<boolean>(true);
  const dependency = String(
    useFormValue(([] as string[]).concat(options.dependOn!)),
  );
  const [, startUploading] = useQRCodeUploader();

  useEffect(() => {
    if (dependency) {
      setValue(dependency);

      // When the component is mounted and if dependency is populated,
      // it means the QR code for that value already exists and comes from
      // the Content Lake. We do not want to resave it.
      if (!firstRun.current) {
        startUploading(fieldName, dependency);
      }
    }

    firstRun.current = false;
  }, [dependency]);

  return <QRCodeGeneratorView value={value}>{children}</QRCodeGeneratorView>;
}
