import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardGrid from "./CardGrid";
import SocialToolbar from "./SocialToolbar";
import Skills from "./Skills";
import VerticalTimeline from "./VerticalTimeline";
import ContanctMe from "./ContactMe";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

const user = {
  nickname: "daton",
  title: "FullStack Web Developer",
  description:
    "I build Web and Mobile applications, using the latest technologies, staying update with the coolest features and frameworks of Javascript",
  about: {
    name: "Tony D'Angelo",
    title: "Web Developer",
    description:
      "I build Web and Mobile applications, using the latest technologies, staying update with the coolest features and frameworks of Javascript"
  }
};

function Blog(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Header nickname={user.nickname} />
        <main>
          <FeaturedPost
            {...user.profile}
            title={user.title}
            description={user.description}
          />

          <AboutMe {...user.about} />

          <Skills {...user.skills} />

          <CardGrid {...user.projects} />

          <VerticalTimeline {...user.carieer} />

          <ContanctMe {...user.contacts} />
        </main>
      </div>

      <Footer />

      <SocialToolbar />
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blog);
