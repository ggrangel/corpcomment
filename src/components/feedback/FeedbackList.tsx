import { ReactElement } from "react";
import FeedbackItem from "./FeedbackItem";
import { FeedbackItemType } from "../../lib/types";
import ErrorMessage from "../ErrorMessage";
import Spinner from "../Spinner";
import { useFeedbackItemsStore } from "../stores/feedbackItemStore";

export default function FeedbackList(): ReactElement {
  const { feedbackItems } = useFeedbackItemsStore((state) => ({
    feedbackItems: state.getFilteredFeedbackItems(),
  }));
  const { errorMessage } = useFeedbackItemsStore((state) => ({
    errorMessage: state.errorMessage,
  }));
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((item: FeedbackItemType) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </ol>
  );
}
