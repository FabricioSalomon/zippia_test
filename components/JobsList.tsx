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
          <div
            key={index}
            className="mx-5 lg:flex lg:mx-auto lg:max-w-xl 2xl:max-w-4xl 2xl:leading-7"
          >
            <JobCard job={job} />
          </div>
        );
      })}
    </>
  );
}
