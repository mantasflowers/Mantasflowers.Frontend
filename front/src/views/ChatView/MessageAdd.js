import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Input,
  Paper,
  SvgIcon,
  Tooltip,
  makeStyles,
} from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Send as SendIcon } from "react-feather";
import { addMessage, addMessageVanish } from "../../actions/chatActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2),
  },
  divider: {
    width: 1,
    height: 24,
  },
  fileInput: {
    display: "none",
  },
}));

function MessageAdd({ className, disabled, thread, onAdd, ...rest }) {
  const classes = useStyles();
  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const fileInputRef = useRef(null);
  const [body, setBody] = useState("");
  const [vanish, setVanish] = useState(false);
  const attachments = [];

  const handleChange = (event) => {
    event.persist();
    setBody(event.target.value);
  };

  const handleSend = async () => {
    try {
      if (!body || !thread) {
        return;
      }

      if (vanish) {
        await dispatch(
          addMessageVanish({
            userId: user.id,
            threadKey: thread.key,
            body,
            attachments,
          })
        );
        setBody("");
        onAdd();
      } else {
        await dispatch(
          addMessage({
            userId: user.id,
            threadKey: thread.key,
            body,
            attachments,
          })
        );
        setBody("");
        onAdd();
      }
    } catch (error) {
      enqueueSnackbar("Ooops!", {
        variant: "error",
      });
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      handleSend();
    }
  };

  const handleVanish = () => {
    setVanish(!vanish);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar src={"/static/default-avatar.png"} />
      <Paper variant="outlined" component={Box} flexGrow={1} ml={2} p={1}>
        <Input
          className={classes.input}
          disableUnderline
          fullWidth
          value={body}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="Leave a message"
        />
      </Paper>
      <Tooltip title="Send">
        <span>
          <IconButton
            color="secondary"
            disabled={!body || disabled}
            onClick={handleSend}
          >
            <SvgIcon fontSize="small">
              <SendIcon />
            </SvgIcon>
          </IconButton>
        </span>
      </Tooltip>
      <Divider className={classes.divider} />

      <Tooltip title="Make messages vanish">
        <span>
          <IconButton edge="end" onClick={handleVanish} disabled={disabled}>
            {vanish ? <VisibilityOffIcon /> : <VisibilityOutlinedIcon />}
          </IconButton>
        </span>
      </Tooltip>
      <input className={classes.fileInput} ref={fileInputRef} type="file" />
    </div>
  );
}

MessageAdd.propTypes = {
  className: PropTypes.string,
  thread: PropTypes.object,
  disabled: PropTypes.bool,
  onAdd: PropTypes.func,
};

MessageAdd.defaultProps = {
  className: "",
  disabled: false,
  onAdd: () => {},
};

export default MessageAdd;
