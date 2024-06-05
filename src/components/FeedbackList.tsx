import { TriangleUpIcon } from "@radix-ui/react-icons";
import { ReactElement } from "react";

export default function FeedbackList(): ReactElement {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>N</p>
        </div>
        <div>
          <p>Nike</p>
          <p>Lorem ipsum dolor sit amet consectetur elit.</p>
        </div>
      </li>
    </ol>
  );
}
