import { TriangleUpIcon } from "@radix-ui/react-icons";
import { useState, type ReactElement } from "react";
import { FeedbackItemType } from "../../lib/types";

type FeedbackItemProps = {
  item: FeedbackItemType;
};

export default function FeedbackItem({
  item,
}: FeedbackItemProps): ReactElement {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setCount] = useState(item.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    // Prevents the event from bubbling up the DOM tree,
    // preventing any parent event handlers from being notified of the event
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={(e) => handleUpvote(e)}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{item.badgeLetter}</p>
      </div>
      <div>
        <p>{item.company}</p>
        <p>{item.text}</p>
      </div>
      <p>{item.daysAgo === 0 ? "NEW" : `${item.daysAgo}d`}</p>
    </li>
  );
}
