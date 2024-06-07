export type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type FeedbackListProps = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
};
