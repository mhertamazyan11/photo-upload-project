import React from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { Button, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [postData, setPostData] = React.useState({
    selectedFile: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setPostData({
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            className={classes.inputPicture}
            onDone={({ base64 }) => {
              return setPostData({ selectedFile: base64 });
            }}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={!postData.selectedFile ? true : false}
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
