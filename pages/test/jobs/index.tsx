import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Filter } from "../../../components/Filter";
import { Header } from "../../../components/Header";
import { JobsList } from "../../../components/JobsList";
import { JobsQuery } from "../../../utils/jobs";

type HomeProps = {
  jobs: JobsQuery[];
};

export default function Home({ jobs }: HomeProps) {
  const [filteredCompanies, setfilteredCompanies] = useState<JobsQuery[]>([
    ...jobs,
  ]);
  const [companiesName, setCompaniesName] = useState<string[]>([]);

  useEffect(() => {
    const jobsListCopy = [...jobs];
    const firstTenJobs = jobsListCopy.slice(0, 10);
    const names = firstTenJobs.map((job) => job.companyName);
    setCompaniesName(names);
    setfilteredCompanies(firstTenJobs);
  }, []);

  function handleFilteredCompaniesByName(companyName: string[]) {
    if (companyName.length) {
      setfilteredCompanies(
        jobs.filter((job) => companyName.includes(job.companyName))
      );
    } else {
      const jobsListCopy = [...jobs];
      const firstTenJobs = jobsListCopy.slice(0, 10);
      setfilteredCompanies(firstTenJobs);
    }
  }

  return (
    <div>
      <Head>
        <title>Zippia Jobs</title>
        <link
          rel="icon"
          href="https://static.zippia.com/ui-router/images/favicon.ico"
        />
      </Head>
      <Header />
      <Filter
        companies={companiesName}
        onFilteredCompaniesByName={handleFilteredCompaniesByName}
      />
      <JobsList jobs={filteredCompanies} />
    </div>
  );
}

export async function getServerSideProps() {
  const url = "https://www.zippia.com/api/jobs/";
  const bodyParams = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  };
  const {
    data: { jobs },
  } = await axios.post<{ jobs: JobsQuery[] }>(url, bodyParams);

  return {
    props: {
      jobs,
    },
  };
}
