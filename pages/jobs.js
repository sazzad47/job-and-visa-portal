import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NearbyErrorIcon from "@mui/icons-material/NearbyError";
import Filter from "../components/Filter";
import Breadcrumb from "../components/Breadcrumb";
import { getData } from "../utils/fetchData";
import { useRouter } from "next/router";
import JobItem from "../components/jobs/JobItem";
import filterSearch from "../utils/filterSearch";
import Head from "next/head";

const Jobs = ({ props }) => {
  const [data, setData] = useState(props.data);
  const [page, setPage] = useState(1);
  const router = useRouter();
  
  
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleLoadmore = () => {
    setPage(page + 1);
    filterSearch({ router, page: page + 1 });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Jobs</title>
      </Head>
      <Breadcrumb title="Jobs" />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Filter />

        {data.length === 0 ? (
          <Grid className="d-flex flex-column align-items-center justify-content-center">
            <Card
              sx={{ p: 4 }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <NearbyErrorIcon color="primary" />
              <Typography>No result found!</Typography>
            </Card>
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {data.map((item) => (
              <JobItem key={item._id} item={item} />
            ))}
          </Grid>
        )}

        {props.result < page * 6 ? (
          ""
        ) : (
          <Button
            variant="outlined"
            className="d-block mx-auto my-4"
            onClick={handleLoadmore}
          >
            Load more
          </Button>
        )}
      </Container>
    </React.Fragment>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const country = query.country || "all";
  const sort = query.sort || "";
  const search = query.search || "all";
  const res = await getData(
    `jobs/getAll?limit=${
      page * 6
    }&country=${country}&sort=${sort}&title=${search}`
  );

  return {
    props: {
      props: {
        data: res.data,
        result: res.result,
      },
    },
  };
}

export default Jobs;
