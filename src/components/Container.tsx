import { type ReactElement } from "react";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

export default function Container(): ReactElement {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
