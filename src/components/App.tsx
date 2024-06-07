import { useEffect } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { useFeedbackItemsStore } from "./stores/feedbackItemStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems,
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
