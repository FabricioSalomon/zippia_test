import { Dispatch, SetStateAction } from "react";

type PostedDateDropdownProps = {
  isSelectedDate: boolean;
  onCompanyFilter: () => void;
  onOpenDateFilter: () => void;
  onSelectedDate: Dispatch<SetStateAction<boolean>>;
};

export function PostedDateDropdown({
  isSelectedDate,
  onCompanyFilter,
  onSelectedDate,
  onOpenDateFilter,
}: PostedDateDropdownProps) {
  return (
    <div className="absolute hover:none hover:cursor-pointer pt-3 h-24 w-44 bg-white p-2 border-2 rounded overflow-y-auto">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="cursor-pointer accent-[#007bff]"
          checked={isSelectedDate}
          onChange={() => onSelectedDate(!isSelectedDate)}
        />
        <span className="ml-2">Past week</span>
      </label>
      <div className="space-x-4 mt-3">
        <button
          className="bg-slate-200 py-1 px-2 rounded"
          onClick={() => onOpenDateFilter()}
        >
          <span>Cancel</span>
        </button>
        <button
          className="bg-[#007bff] py-1 px-2 rounded"
          onClick={() => {
            onCompanyFilter();
            onOpenDateFilter();
          }}
        >
          <span className="text-neutral-100 font-semibold">Apply</span>
        </button>
      </div>
    </div>
  );
}
