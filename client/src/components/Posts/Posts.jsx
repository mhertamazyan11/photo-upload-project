import React from "react";
import Post from "./Post/Post";
import {} from "@material-ui/core";
import { Grid, Dialog } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [pictureSrc, setPictureSrc] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const onOpenModal = (isOpen, src) => {
    setOpenModal(isOpen);
    isOpen ? setPictureSrc(src) : setPictureSrc("");
  };

  return !posts.length ? (
    <p className={classes.warning}> The DataBase is empty!</p>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Dialog
        open={openModal}
        onClose={() => onOpenModal(false, null)}
        className={classes.dialog}
        fullWidth={true}
      >
        <img src={pictureSrc} alt={pictureSrc} />
      </Dialog>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post
            post={post}
            setCurrentId={setCurrentId}
            openModal={onOpenModal}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
