import { type ReactElement } from "react";

export default function HashtagItem({
  company,
  onSelectCompany,
}: {
  company: string;
  onSelectCompany: (company: string) => void;
}): ReactElement {
  return (
    <div>
      <li key={company}>
        <button
          onClick={() => {
            onSelectCompany(company);
          }}
        >
          #{company}
        </button>
      </li>
    </div>
  );
}
