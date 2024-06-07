import { type ReactElement } from "react";

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props): ReactElement {
  return <div>{message}</div>;
}
