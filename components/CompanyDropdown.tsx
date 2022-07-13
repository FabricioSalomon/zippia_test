type CompanyDropdownProps = {
  companies: string[];
  selectedCompanies: string[];
  addCompanyNameToFilter: (company: string) => void;
  onOpenCompanyFilter: () => void;
  onCompanyFilter: () => void;
};

export function CompanyDropdown({
  companies,
  selectedCompanies,
  addCompanyNameToFilter,
  onOpenCompanyFilter,
  onCompanyFilter,
}: CompanyDropdownProps) {
  return (
    <div className="absolute hover:none hover:cursor-pointer h-64 bg-white p-2 border-2 rounded overflow-y-auto overflow-x-hidden">
      <div className="w-52 space-y-2">
        {companies.map((company, index) => {
          return (
            <div key={index} className="flex flex-row">
              <label className="cursor-pointer">
                <input
                  onChange={() => addCompanyNameToFilter(company)}
                  type="checkbox"
                  checked={selectedCompanies.includes(company)}
                  className="cursor-pointer accent-[#007bff]"
                />
                <span className="ml-2">{company}</span>
              </label>
            </div>
          );
        })}
        <div className="space-x-4">
          <button
            className="bg-slate-200 py-1 px-2 rounded"
            onClick={() => onOpenCompanyFilter()}
          >
            <span>Cancel</span>
          </button>
          <button
            className="bg-[#007bff] py-1 px-2 rounded"
            onClick={() => {
              onCompanyFilter();
              onOpenCompanyFilter();
            }}
          >
            <span className="text-neutral-100 font-semibold">Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
