import moment from "moment";
import Image from "next/image";
import { JobsQuery } from "../utils/jobs";

type JobCardProps = {
  job: JobsQuery;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <>
      <div className="py-4 px-5 my-5 border rounded">
        <div>
          <span className="text-lg font-bold">{job.jobTitle}</span>
        </div>
        <div>
          <span className="text-md font-bold text-slate-600">
            {job.companyName}
          </span>
        </div>
        <div>
          <span className="text-sm font-semibold text-slate-500">
            {moment(job.postingDate).fromNow()}
          </span>
        </div>
        <div className="mt-3">
          <span
            className="line-clamp-3 font-light text-slate-500"
            dangerouslySetInnerHTML={{ __html: job.jobDescription }}
          />
        </div>
      </div>
    </>
  );
}
