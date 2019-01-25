import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    margin: "32px 0"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const Projects = props => {
  const { classes, collection } = props;
  const handleClick = (link) => () => {
    window.open(link, 'new')
  }
  return (
    <Fragment>
      <Typography
        variant="h5"
        align="center"
        className={classes.title}
        gutterBottom
      >
        Projects
      </Typography>
      <Grid container spacing={40}>
        {collection.map(({name, description, image, link}, index) => (
          <Grid key={index} item sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={image} 
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography>
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={handleClick(link)}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

Projects.propTypes = {
  classes: PropTypes.object,
  collection: PropTypes.array
};

export default withStyles(styles)(Projects);
