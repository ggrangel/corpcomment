import { ChangeEvent, useState, type ReactElement } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { useFeedbackItemsStore } from "../stores/feedbackItemStore";

export default function FeedbackForm(): ReactElement {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  const [text, setText] = useState("");
  const [showIndicator, setShowIndicator] = useState<0 | 1 | 2>(0);

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text.includes("#")) {
      setShowIndicator(2);
      setTimeout(() => setShowIndicator(0), 3000);
      return;
    }

    setShowIndicator(1);
    setTimeout(() => setShowIndicator(0), 3000);
    addItemToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showIndicator == 1 ? "form--valid" : showIndicator == 2 ? "form--invalid" : ""} $}`}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blank"
        spellCheck={false}
      />
      {/**
       * That's how we add a placeholder for a textarea
       */}
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
