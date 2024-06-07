import { type ReactElement } from "react";
import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";

export default function Container(): ReactElement {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
