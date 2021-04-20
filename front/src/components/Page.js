import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import TopBar from "../layouts/MainLayout/TopBar";
import BottomBar from "../layouts/MainLayout/BottomBar";

import PropTypes from "prop-types";

const Page = forwardRef(({ title, children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <TopBar />

      {children}
      <BottomBar />
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
