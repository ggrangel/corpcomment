import { useState, type ReactElement } from "react";

export default function FeedbackForm(): ReactElement {
  const [text, setText] = useState("");

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="feedback-textarea"
        placeholder="blank"
        spellCheck={false}
      />
      {/**
       * That's how we add a placeholder for a textarea
       */}
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to hashtag the company
      </label>
      <div>
        <p className="u-italic">150 - text.length</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
