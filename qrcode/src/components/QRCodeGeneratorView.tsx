import { FormField } from "sanity";
import { Flex, Stack, Container, TextInput } from "@sanity/ui";
import { JSX, Dispatch, SetStateAction, PropsWithChildren } from "react";

interface QRCodeGeneratorViewProps extends PropsWithChildren {
  value: string;
  control?: JSX.Element;
  setValue?: Dispatch<SetStateAction<string>>;
}

export function QRCodeGeneratorView({
  value,
  control,
  setValue,
  children,
}: QRCodeGeneratorViewProps): JSX.Element {
  return (
    <Stack space={5}>
      <Flex gap={3} align="center">
        <Container width={100}>
          <TextInput
            type="text"
            placeholder="Write or paste value to encode"
            radius={2}
            value={value}
            muted={!setValue}
            readOnly={!setValue}
            onChange={({ currentTarget }) => {
              setValue?.(currentTarget.value);
            }}
          />
        </Container>
        {control}
      </Flex>

      <FormField>{children}</FormField>
    </Stack>
  );
}
