import { useState } from "react";
import { CompanyDropdown } from "./CompanyDropdown";
import { PostedDateDropdown } from "./PostedDateDropdown";

type FilterProps = {
  companies: string[];
  onFilterCompaniesByName: (companyName: string[]) => void;
  onFilterCompaniesPostedDate: (selectedDate: boolean) => void;
};

export function Filter({
  companies,
  onFilterCompaniesByName,
  onFilterCompaniesPostedDate,
}: FilterProps) {
  const [isCompanyListOpen, setIsCompanyListOpen] = useState(false);
  const [isDatePostedOpen, setIsDatePostedOpen] = useState(false);
  const [isSelectedDate, setIsSelectedDate] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  function handleOpenCompanyFilter() {
    setIsDatePostedOpen(false);
    setIsCompanyListOpen(!isCompanyListOpen);
  }

  function handleOpenDateFilter() {
    setIsCompanyListOpen(false);
    setIsDatePostedOpen(!isDatePostedOpen);
  }

  function handleCompanyFilter() {
    if (isSelectedDate && selectedCompanies.length) {
      onFilterCompaniesByName(selectedCompanies);
      onFilterCompaniesPostedDate(true);
    } else if (selectedCompanies.length) {
      onFilterCompaniesByName(selectedCompanies);
    } else if (isSelectedDate) {
      onFilterCompaniesPostedDate(true);
    } else {
      onFilterCompaniesPostedDate(false);
      onFilterCompaniesByName([]);
    }
  }

  function addCompanyNameToFilter(company: string) {
    const selected = [...selectedCompanies];

    if (selected.includes(company)) {
      const index = selected.indexOf(company);
      selected.splice(index, 1);
    } else {
      selected.push(company);
    }

    setSelectedCompanies(selected);
  }

  return (
    <div className="flex flex-row space-x-2 justify-center mt-5 px-5">
      <div className="select-none relative">
        <div
          onClick={() => handleOpenCompanyFilter()}
          className="w-max rounded border border-gray-300 p-1 hover:bg-[#f7f8f9] hover:cursor-pointer"
        >
          <span>Companies</span>
        </div>
        {isCompanyListOpen && (
          <CompanyDropdown
            companies={companies}
            selectedCompanies={selectedCompanies}
            addCompanyNameToFilter={addCompanyNameToFilter}
            onOpenCompanyFilter={handleOpenCompanyFilter}
            onCompanyFilter={handleCompanyFilter}
          />
        )}
      </div>
      <div className="select-none relative">
        <div
          onClick={() => handleOpenDateFilter()}
          className="w-max rounded border border-gray-300 p-1 hover:bg-[#f7f8f9] hover:cursor-pointer"
        >
          <span>Date Posted</span>
        </div>
        {isDatePostedOpen && (
          <PostedDateDropdown
            isSelectedDate={isSelectedDate}
            onSelectedDate={setIsSelectedDate}
            onOpenDateFilter={handleOpenDateFilter}
            onCompanyFilter={handleCompanyFilter}
          />
        )}
      </div>
    </div>
  );
}
