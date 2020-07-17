import React, { useState } from "react";
import {
  Typography,
  Grid,
  Chip,
  Modal,
  Button,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import hsg from "../resources/experience/hsg.png";
import fileManagerPNG from "../resources/experience/file-manager.png";
import projectHubPNG from "../resources/experience/project-hub.png";
import projectPNG from "../resources/experience/project.png";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  position: {
    color: "#757575",
  },
  dateRange: {
    fontStyle: "italic",
    color: "#757575",
  },
  media: {
    maxWidth: "90%",
    height: "auto",
  },
  tech: {
    margin: 5,
  },
  galleryItem: {
    margin: 5,
    maxWidth: 384,
    maxHeight: 184, 
  },
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "90%",
  },
  exitButton: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  modalImage: {
    width: "100%",
    height: "auto",
  }
}));

const HoffmanStrategy = () => {
  const classes = useStyles();

  const [openFileManager, setOpenFileManager] = useState(false);
  const [openProjectHub, setOpenProjectHub] = useState(false);
  const [openProject, setOpenProject] = useState(false);

  const openFileModal = () => { setOpenFileManager(true) };
  const closeFileModal = () => { setOpenFileManager(false) };
  const openProjectHubModal = () => { setOpenProjectHub(true) };
  const closeProjectHubModal = () => { setOpenProjectHub(false) };
  const openProjectModal = () => { setOpenProject(true) };
  const closeProjectModal = () => { setOpenProject(false) };

  const fileManager = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={closeFileModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={fileManagerPNG} 
        alt="A better look into the Hoffman Analytics File Management System"
      />
    </div>
  );

  const projectHub = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={closeProjectHubModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={projectHubPNG} 
        alt="A better look into the Hoffman Analytics Project Hub"
      />
    </div>
  );

  const project = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={closeProjectModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={projectPNG} 
        alt="A better look into how Hoffman Analytics handles specific projects"
      />
    </div>
  );

  return (
    <div>
      <section className={classes.container}>
        <p align="middle">
          <img 
            className={classes.media}
            src={hsg}
            alt="Hoffman Strategy Group"
          />
        </p>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" className={classes.position}>Software Engineer / Product Manager</Typography>
            <Typography variant="h5" className={classes.dateRange}>November 2019 - Now</Typography>
          </Grid>
          <Grid item>
            <Chip
              className={classes.tech}
              label="React"
            />
            <Chip
              className={classes.tech}
              label="Redux"
            />
            <Chip
              className={classes.tech}
              label="Material UI"
            />
            <Chip
              className={classes.tech}
              label="React Router"
            />
            <Chip
              className={classes.tech}
              label="Node.js"
            />
            <Chip
              className={classes.tech}
              label="Express API"
            />
            <Chip
              className={classes.tech}
              label="Amazon Web Services"
            />
          </Grid>
        </Grid>
        <br/> <br/>
        
        <Typography variant="body1">
          Hoffman Strategy Group is a boutique, national real estate 
          advisory firm. Over their collective firm experience of 85 
          years, they have cultivated the unique and distinct ability 
          to dive deeply into retail, residential and commercial 
          market and feasibility analysis, master planning and 
          development in order to identify those factors that lead 
          to successful real estate projects. 
        </Typography>
        <br/>
        <Typography variant="body1">
          I was initially hired by the Hoffman Strategy Group in November 2019
          to take over their social media presence on LinkedIn, help
          keep their Squarespace website up-to-date, and occasionally
          write web-scraping Python scripts to collect real-estate data in 
          a quick, automated manner. During the 2019-2020 academic year,
          the group sponsored a senior design project at the University
          of Nebraska-Lincoln dubbed <span style={{ fontWeight: "bolder" }}>Hoffman Analytics.</span> Hoffman Analytics
          is an ambitious project aiming to consolidate the groups' daily
          workflows in data warehousing, project management, report generation,
          and business intelligence.
        </Typography>
        <br/>
        <Typography variant="body1">
          When I lost my originally planned internship to the COVID-19
          pandemic, I contacted Jerry Hoffman to see if there was a potential
          opportunity furthering the developments of the Hoffman Analytics
          software system, and immediately pivoted my position within the group
          to become their new Software Engineer &amp; Product Manager. In this new position,
          my partner <a href="https://msich.netlify.app">Matt Sichterman</a> and I
          have been working to redevelop the existing senior design solution into something
          more maintainable, and thus easier to iterate on. We've redefined the vision for
          Hoffman Analytics to become a platform that not only consolidates their
          daily workflows, but also promotes productivity through a variety of new features
          including a task management system, an activity tracker, and much more. It should be noted
          that I worked in this position with Hoffman Strategy Group in parallel with my role
          at Nelnet as an IT Software Engineer Intern, managing my time between the two accordingly.
        </Typography>
        <br/>
        <Typography variant="body1">
          Through a summer of cooperation, Matt and I rebuilt the entire platform
          from the ground up using new technologies such as Node.js, Material UI, and Express while leaning primarily on one another when we
          occasionally faced problems. Working as a software engineer for the Hoffman Strategy Group
          has been a unique experience in itself as Matt and I make up 100% of their engineering department - 
          there are no senior developers, mentors, or external contractors within the company that we were able
          to reach out to for support. It has been an amazing learning experience to take on this project, having just
          recently learning the basics of web development at the time of starting, and I am incredibly grateful to the partners of the
          Hoffman Strategy Group for the opportunity.
        </Typography>
        <br/>
        <Typography variant="body1">
          You may notice in the screenshots below that many aspects of the Hoffman Analytics platform look strikingly similar to
          the contents of my personal website. This is due to the fact that I was developing both of these projects concurrently, using nearly identical
          technology stacks. Both applications are heavily based upon Material UI's React component library. Originally, I initiated development
          on this webpage in order to give myself some practice developing websites prior to my role with Hoffman Strategy Group, but as the summer went on,
          these two projects intertwined greatly and have ended up sharing many different front-end assets.
        </Typography>
        <br/>

        <Typography variant="h5" className={classes.title}>Gallery</Typography>
        <Grid container justify="space-between">
          <img
            src={fileManagerPNG}
            alt="Hoffman Analytics File Manager"
            className={classes.galleryItem}
            onClick={openFileModal}
          />
          <img
            src={projectHubPNG}
            alt="Hoffman Analytics Project Hub - Generalized"
            className={classes.galleryItem}
            onClick={openProjectHubModal}
          />
          <img
            src={projectPNG}
            alt="Hoffman Analytics Project - Generalized"
            className={classes.galleryItem}
            onClick={openProjectModal}
          />
        </Grid>
        <br/>

        <Modal
          open={openFileManager}
          onClose={closeFileModal}
        >
          {fileManager}
        </Modal>

        <Modal
          open={openProjectHub}
          onClose={closeProjectHubModal}
        >
          {projectHub}
        </Modal>

        <Modal
          open={openProject}
          onClose={closeProjectModal}
        >
          {project}
        </Modal>
      </section>
    </div>
  );
};

export default HoffmanStrategy;