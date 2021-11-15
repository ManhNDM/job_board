import React, { ChangeEventHandler, FC, memo, useEffect, useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { jobActions } from "../../store";
import { useSelector } from "../../hooks/useTypeSelector";
import { BsSearch, BsXLg, BsGeoAlt } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function nonAccentVietnamese(str: string) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

export  function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
 const SearchHeader: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, jobs } = useSelector((state) => state.jobs);
  const [key, setKey] = useState("");
  const { pageSearch } = useParams();
  const query = useQuery();

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKey(e.currentTarget.value);
  };

  const hadnleSubmitSearch = () => {
    if (key) {
      let keySearch = nonAccentVietnamese(key);
      navigate(`/search/1?title=${keySearch}`); 
      setKey("");
    }
  };

  let title = query.get("title");
  console.log(title);
  
  useEffect(() => {
    if (title) {
      dispatch(jobActions.getJobsSearching(title, pageSearch || "1"));
    }
    return () => {};
  }, [pageSearch,title]);

  return (
    <div className="search-header ">
      <div className="search-header__content row">
        <div className="col-12">
          <h1>{total} Việc Làm IT Cho Developer Chất</h1>
          <div className="search-header__content__from row ">
            <div className="search-header__content__from__keyword  col-7">
              <BsSearch />
              <input
                type="text"
                placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty..."
                value={key}
                onChange={handleSearch}
              />
              <BsXLg
                onClick={() => {
                  setKey("");
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="search-header__content__from__city col-2">
              <div className="" style={{ width: "100%", height: "100%" }}>
                <BsGeoAlt />
                <select>
                  <option>Địa Điểm</option>
                  <option>HCM</option>
                  <option>Đà Nẳng</option>
                </select>
              </div>
            </div>
            <div className="search-header__content__from__submit col-2">
              <button onClick={hadnleSubmitSearch}>Tìm Kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(SearchHeader)