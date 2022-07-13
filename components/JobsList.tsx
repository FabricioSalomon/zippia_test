import moment from "moment";
import { useEffect, useState } from "react";
import { JobsQuery } from "../utils/jobs";

type JobsListProps = {
  jobs: JobsQuery[];
};

export function JobsList({ jobs }: JobsListProps) {
  const [jobsList, setJobsList] = useState<JobsQuery[]>([]);

  useEffect(() => {
    const jobsListCopy = [...jobs];
    const firstTen = jobsListCopy.slice(0, 10);
    setJobsList(firstTen);
  }, [jobs]);

  return (
    <>
      {jobsList.map((job, index) => {
        return (
          <div>
            <br />
            <h3 key={index}>{job.jobTitle}</h3>
            <h4 key={index}>{job.companyName}</h4>
            <h5 key={index}>{moment(job.postingDate).format("YYYY-MMM-DD")}</h5>
            <div dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
          </div>
        );
      })}
    </>
  );
}
