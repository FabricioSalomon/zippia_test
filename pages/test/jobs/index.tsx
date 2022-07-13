import axios from "axios";
import Head from "next/head";
import { Header } from "../../../components/Header";
import { JobsList } from "../../../components/JobsList";
import { JobsQuery } from "../../../utils/jobs";

type HomeProps = {
  jobs: JobsQuery[];
};

export default function Home(props: HomeProps) {
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
      <JobsList jobs={props.jobs} />
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
