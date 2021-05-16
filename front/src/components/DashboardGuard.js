import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function DashboardGuard({ children }) {
  const account = useSelector((state) => state.account);

  console.log({ account });

  if (!account.user) return <Redirect to="/" />;

  if (account.user.role == "user") return <Redirect to="/" />;

  return children;
}

DashboardGuard.propTypes = {
  children: PropTypes.any,
};

export default DashboardGuard;
