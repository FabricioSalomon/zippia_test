import { JobsQuery } from "../utils/jobs";
import moment from "moment";


type JobsListProps = {
  jobs: JobsQuery[];
};

export function JobsList({ jobs }: JobsListProps) {
  return (
    <>
      {jobs.map((job, index) => {
        return (
          <div>
            <br />
            <h3 key={index}>{job.jobTitle}</h3>
            <h4 key={index}>{job.companyName}</h4>
            <h5 key={index}>{moment(job.postingDate).format('YYYY-MMM-DD')}</h5>
            <p key={index}>{job.jobDescription}</p>
          </div>
        );
      })}
    </>
  );
}
