import QRCode from "react-qr-code";
import {
  JSX,
  useRef,
  RefObject,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from "react";

import { Show } from "./Show";
import { Offscreen } from "./Offscreen";
import { QRCodeOptions } from "../schemaTypes/qrCodeType";

const Context = createContext<() => string | undefined>((): undefined => {});

interface QRCodeConverterProps extends PropsWithChildren {
  value: string;
  options: QRCodeOptions;
}

export function QRCodeConverter({
  value,
  options,
  children,
}: QRCodeConverterProps): JSX.Element {
  const qrCodeRef = useRef<QRCode & SVGSVGElement>();

  const resolver = useCallback(() => {
    return qrCodeRef.current?.outerHTML;
  }, []);

  return (
    <Context.Provider value={resolver}>
      <Show when={value}>
        <Offscreen>
          <QRCode
            ref={qrCodeRef as RefObject<QRCode & SVGSVGElement>}
            value={value}
            size={options.size ?? 500}
            bgColor={options.bgColor}
            fgColor={options.fgColor}
            level={options.level}
          />
        </Offscreen>
      </Show>
      {children}
    </Context.Provider>
  );
}

export function useQRCodeSVGMarkupResolver(): () => string | undefined {
  return useContext(Context);
}
