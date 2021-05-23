import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

function ProfileDetails({ userTwo, className, ...rest }) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const [user, setUser] = useState();

  useEffect(() => {
    if (account.user.idToken != null) {
      const getUserData = async () => {
        const response = await axios.get(`/user/detailed`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        });
        console.log(response);
        setUser(response.data);
      };
      getUserData(user);
      console.log(user);
    }
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          {/* <Avatar
            className={classes.avatar}
            src={"/static/avatar-default.jpg"}
          /> */}
          <Typography
            className={classes.name}
            gutterBottom
            variant="h3"
            color="textPrimary"
          >
            {user == null ? "" : user.firstName + " " + user.lastName}
            <br />
            <br />
            {user == null ? "" : user.loginEmail}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

ProfileDetails.propTypes = {
  className: PropTypes.string,
};

export default ProfileDetails;
