import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Projects from "./Projects";
import SocialToolbar from "./SocialToolbar";
import Skills from "./Skills";
import VerticalTimeline from "./VerticalTimeline";
import ContanctMe from "./ContactMe";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import withRoot from "./withRoot";

import "./index.css";

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
  profile: {
    title: "FullStack Web Developer",
    description:
      "I help building Web and Mobile applications, using the latest technologies, staying update with the coolest features and frameworks of Javascript"
  },
  about: {
    name: "Tony D'Angelo",
    title: "Web Developer",
    description:
      "Hi! My name is Tony D'Angelo. I am a Web Developer based in Munich, and I'm very passionate and dedicated to my work. With 10 years experience as a professional Web Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.",
    image: require("./images/about.jpg")
  },
  skills: {
    description: "I have built many projects with these technologies!",
    collection: [
      {
        name: "Angular",
        level: "advanced"
      },
      {
        name: "React",
        level: "advanced"
      },
      {
        name: "Javascript",
        level: "advanced"
      },
      {
        name: "Node.js",
        level: "advanced"
      },
      {
        name: "MongoDB",
        level: "medium"
      },
      {
        name: "HTML & CSS",
        level: "advanced"
      }
    ]
  },
  projects: {
    description: "These are some of my awesome projects!",
    collection: [
      {
        name: "Packly",
        image: require("./images/packly.png"),
        description: "Web to print platform",
        link: "https://www.pack.ly"
      },
      {
        name: "Safety App",
        image: require("./images/safety-application.png"),
        description: "Web platoform for companies",
        link: "https://www.safetyapp.it"
      },
      {
        name: "High School Platform",
        image: require("./images/high-school-platform.png"),
        description: "Portal for High Schools"
      }
    ]
  },
  carieer: {
    description: "",
    collection: [
      {
        type: "work",
        title: "Freelancer Developer",
        subtitle: "Jointloop",
        location: "Munich, Bavaria, Germany",
        start: "January 2018",
        end: "Now"
      },
      {
        type: "work",
        title: "Senior Full-Stack Web Developer",
        subtitle: "Lead FrontEnd Developer @Packly",
        location: "Campochiaro, Molise, Italy",
        start: "January 2016",
        end: "January 2018"
      },
      {
        type: "work",
        title: "Self Employed Developer",
        subtitle: "Junior Web Developer",
        location: "Campobasso, Molise, Italy",
        start: "April 2012",
        end: "January 2016"
      },
      {
        type: "education",
        title: "Bachelor of Science in Mathematics and Phisics",
        subtitle: "Bachelor Degree in Computer Science",
        location: "University of Molise",
        start: "September 2009",
        end: "April 2012"
      }
    ]
  },
  socials: {
    collection: [
    {
      name: "Facebook",
      link: "https://www.facebook.com/daton89"
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/daton89'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/tony-d-angelo-0b6b72a6/'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/daton89'
    },
    {
      name: 'Github',
      link: 'https://github.com/daton89'
    }
  ]}
};

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Header nickname={user.nickname} />

        <FeaturedPost {...user.profile} />

        <AboutMe {...user.about} />

        <Skills {...user.skills} />

        <Projects {...user.projects} />

        <VerticalTimeline {...user.carieer} />

        <ContanctMe {...user.contacts} />
      </div>

      <Footer />

      <SocialToolbar {...user.socials} />
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
