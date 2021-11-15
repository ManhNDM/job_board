import React, { FC } from "react";
import loading from "../../assets/image/Hourglass.gif";
import styleLoading from './style.module.scss';
export const Loading: FC = () => {
  return (
    <div className={styleLoading.bgLoading}>
      <img src={loading} alt="loading" />
    </div>
  );
};
