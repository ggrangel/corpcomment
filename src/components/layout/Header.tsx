import { type ReactElement } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";
import FeedbackForm from "../feedback/FeedbackForm";

export default function Header(): ReactElement {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}
