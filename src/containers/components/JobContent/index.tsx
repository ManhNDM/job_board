import React, { FC, Fragment, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "../../hooks/useTypeSelector";
import Job from "../../models/jobModel";
import { jobActions } from "../../store";
import  JobItem  from "../JobItem";
import Pagination from "../Pagination";
import { useQuery } from "../SearchHeader";
import { ParamTypes } from "./interface";

import "./style.scss";
const JobContent: FC = () => {
  const { total, jobs, totalPage, page, perPage } =
    useSelector((state) => state.jobs) || [];
  const dispatch = useDispatch();
  const param = useParams();

  const { pageSearch } = useParams();
  const query = useQuery();

  const title = query.get("title");

  const pageNumber = Number(param?.pageNumber);
  console.log(pageNumber + " pages NUmber");
  
  useEffect(() => {
    if (pageNumber) {
      dispatch(jobActions.getJobsPageCount(Number(pageNumber), perPage));
    }
  }, [pageNumber]);

  return (
    <Fragment>
      <div className="job__content">
        <h1 className="job__content__title">
          {total} việc làm IT tại Việt Nam
        </h1>
        {jobs?.length === 0 ? (
          <h1>Không tìm thấy việt làm nào !</h1>
        ) : (
          jobs?.map((job: Job) => <JobItem key={job.id} job={job} />)
        )}
        {/* Pagination */}
        <div className="py-2 mb-5">
          {totalPage > 1 && (
            <Pagination
              url={
                pageSearch ? `/search/` : `/page/`  
              }
              pageCount={totalPage}
              currentPage={page}
              keySearch={pageSearch ? `?title=${title}` : ""}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default memo(JobContent);