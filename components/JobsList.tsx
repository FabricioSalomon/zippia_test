import { JobsQuery } from "../utils/jobs";
import { JobCard } from "./JobCard";

type JobsListProps = {
  jobs: JobsQuery[];
};

export function JobsList({ jobs }: JobsListProps) {

  return (
    <>
      {jobs.map((job, index) => {
        return (
          <div key={index} className="mx-5">
            <JobCard job={job} />
          </div>
        );
      })}
    </>
  );
}
