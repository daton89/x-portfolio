import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  container: {
    padding: `${theme.spacing.unit * 6}px`,
    // [theme.breakpoints.up("md")]: {
    //   paddingRight: 0
    // }
  }
});

const FeaturedPost = props => {
  const { classes, title, description } = props;
  return (
    <Paper className={classes.paper}>
      {/* <Grid container>
        <Grid item md={6}> */}
          <div className={classes.container}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
          </div>
        {/* </Grid>
      </Grid> */}
    </Paper>
  );
};

FeaturedPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default withStyles(styles)(FeaturedPost);
