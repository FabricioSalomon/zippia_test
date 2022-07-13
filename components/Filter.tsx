import { useState } from "react";

type FilterProps = {
  companies: string[];
  onFilteredCompaniesByName: (companyName: string[]) => void;
};

export function Filter({ companies, onFilteredCompaniesByName }: FilterProps) {
  const [isCompanyListOpen, setIsCompanyListOpen] = useState(false);
  const [isDatePostedOpen, setIsDatePostedOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  function handleOpenCompanyFilter() {
    setIsDatePostedOpen(false);
    setIsCompanyListOpen(!isCompanyListOpen);
  }

  function handleOpenDateFilter() {
    setIsCompanyListOpen(false);
    setIsDatePostedOpen(!isDatePostedOpen);
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
    <div className="flex flex-row space-x-2 justify-end mt-5 px-5">
      <div className="select-none relative">
        <div
          onClick={() => handleOpenCompanyFilter()}
          className="w-max rounded border border-gray-300 p-1 hover:bg-slate-400 hover:cursor-pointer"
        >
          <span>Companies</span>
        </div>
        {isCompanyListOpen && (
          <div className="absolute -left-20 hover:none hover:cursor-pointer h-64 bg-white p-2 border-2 rounded overflow-y-auto">
            <div className="w-52 space-y-2">
              {companies.map((company, index) => {
                return (
                  <div key={index} className="flex flex-row">
                    <label className="cursor-pointer">
                      <input
                        onChange={() => addCompanyNameToFilter(company)}
                        type="checkbox"
                        checked={selectedCompanies.includes(company)}
                      />
                      <span className="ml-2">{company}</span>
                    </label>
                  </div>
                );
              })}
              <div className="space-x-4">
                <button onClick={() => handleOpenCompanyFilter()}>
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onFilteredCompaniesByName(selectedCompanies);
                    handleOpenCompanyFilter();
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => handleOpenDateFilter()}
        className="w-max rounded border border-gray-300 p-1 hover:bg-slate-400 hover:cursor-pointer select-none relative"
      >
        <span>Date Posted</span>
      </div>
      {isDatePostedOpen && <div></div>}
    </div>
  );
}
