import React, { FC, useEffect } from "react";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import  JobContent  from "../components/JobContent";

import SearchHeader, {useQuery}  from "../components/SearchHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useTypeSelector";
import { jobActions } from "../store";

import "./styles.scss";
import { useParams } from "react-router-dom";

const Home: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, perPage } = useSelector((state) => state.jobs);
  const param = useParams();

  const query = useQuery();
  const title = query.get("title");
  useEffect(() => {
    if (!title) {
      dispatch(jobActions.getJobs(perPage));
    }
  }, [title]);

  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <div id="container">
        <SearchHeader/>
        <JobContent />
      </div>
    </div>
  );
};

export default Home;
