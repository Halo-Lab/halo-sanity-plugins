import { JSX, useState } from "react";
import { ImageValue, ObjectInputProps } from "sanity";

import { Show } from "./Show";
import { QRCodeConverter } from "./QRCodeConverter";
import { ManualQRCodeGenerator } from "./ManualQRCodeGenerator";
import { DependentQRCodeGenerator } from "./DependentQRCodeGenerator";

export default (props: ObjectInputProps<ImageValue>): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <QRCodeConverter value={value} options={props.schemaType.options}>
      <Show
        when={props.schemaType.options.dependOn}
        fallback={
          <ManualQRCodeGenerator
            value={value}
            setValue={setValue}
            fieldName={props.elementProps.id}
          >
            {props.renderDefault(props)}
          </ManualQRCodeGenerator>
        }
      >
        <DependentQRCodeGenerator
          value={value}
          options={props.schemaType.options}
          setValue={setValue}
          fieldName={props.elementProps.id}
        >
          {props.renderDefault(props)}
        </DependentQRCodeGenerator>
      </Show>
    </QRCodeConverter>
  );
};
