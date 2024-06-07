import { create } from "zustand";
import { FeedbackItemType } from "../../lib/types";
import { API_URL } from "../../lib/constants";

type Store = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => FeedbackItemType[];
  addItemToList: (text: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  // States
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",

  //  Derived states
  getCompanyList: () => {
    const state = get();

    const companies = new Set(
      state.feedbackItems.map((item: FeedbackItemType) => item.company),
    );

    return Array.from(companies);
  },
  getFilteredFeedbackItems: () => {
    const state = get();

    return state.selectedCompany
      ? state.feedbackItems.filter(
        (item) => item.company === state.selectedCompany,
      )
      : state.feedbackItems;
  },

  // Actions
  addItemToList: async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: FeedbackItemType = {
      id: Date.now(),
      text: text,
      upvoteCount: 0,
      badgeLetter: companyName[0].toUpperCase(),
      company: companyName,
      daysAgo: 0,
    };
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
  selectCompany: (company: string) => {
    set({ selectedCompany: company });
  },
  fetchFeedbackItems: async () => {
    set({ isLoading: true });
    // set(() => ({ isLoading: true }));
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch feedback items");
      }
      const data = await response.json();
      set({
        feedbackItems: data.feedbacks,
        isLoading: false,
        errorMessage: "",
      });
    } catch (error) {
      set({ errorMessage: "Something went wrong", isLoading: false });
    }
  },
}));
