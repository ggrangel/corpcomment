import { type ReactElement } from "react";
import HashtagItem from "./HashtagItem";
import { useFeedbackItemsStore } from "../stores/feedbackItemStore";

export default function HashtagList(): ReactElement {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
