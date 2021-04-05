import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Box,
  Hidden,
  IconButton,
  Input,
  Paper,
  Typography,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";

import { openSidebar } from "../../../actions/chatActions";

function contactSelector(state, participantIds) {
  const { contacts } = state.chat;
  const { user } = state.account;

  // In most apps one thread can have more than two participants
  // We could display all participants, but for now we only select one
  const contactId = participantIds.filter(
    (participantId) => participantId !== user.id
  )[0];

  return contacts.byId[contactId];
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: 64,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  onlineIndicator: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

function Toolbar({ className, thread, ...rest }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const contact = useSelector((state) =>
    contactSelector(state, thread.participantIds)
  );

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Hidden mdUp>
        <IconButton className={classes.menuButton} onClick={handleOpenSidebar}>
          <SvgIcon fontSize="small">
            <SearchIcon />
          </SvgIcon>
        </IconButton>
      </Hidden>
      {contact && (
        <Box display="flex" alignItems="center">
          <Avatar src={contact.avatar} />
          <Box ml={1}>
            <Typography variant="h6" color="textPrimary">
              {contact.name}
            </Typography>
            <Box display="flex" alignItems="center">
              {contact.isActive ? (
                <>
                  <Typography color="textSecondary" variant="caption">
                    Active now
                  </Typography>
                </>
              ) : (
                <Typography color="textSecondary" variant="caption">
                  Active {moment(contact.lastActivity).fromNow()}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
      <Box flexGrow={1} />
      <Hidden smDown>
        <Paper
          component={Box}
          display="flex"
          alignItems="center"
          variant="outlined"
          py={0.5}
          px={1}
        >
          <SvgIcon fontSize="small" color="action">
            <SearchIcon />
          </SvgIcon>
          <Input
            className={classes.searchInput}
            disableUnderline
            placeholder="Search message"
          />
        </Paper>
      </Hidden>
    </div>
  );
}

Toolbar.propTypes = {
  className: PropTypes.string,
  thread: PropTypes.object.isRequired,
};

export default Toolbar;
