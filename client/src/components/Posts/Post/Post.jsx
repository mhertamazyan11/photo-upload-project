import React from "react";
import { Card, CardActions, CardMedia, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../actions/posts";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
