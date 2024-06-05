import { type ReactElement } from "react";

export default function HashtagList(): ReactElement {
  return (
    <ul className="hashtags">
      <li>
        <button>#Nike</button>
      </li>
      <li>
        <button>#McDonald's</button>
      </li>
    </ul>
  );
}
