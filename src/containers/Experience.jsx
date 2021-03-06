import React from "react";

// Components
import {
  Typography,
  Grid,
  Divider,
  useMediaQuery,
} from "@material-ui/core"
import Position from "../components/Position";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import hsg from "../resources/experience/hsg.png";
import nelnet from "../resources/experience/nelnet.svg";
import raven from "../resources/experience/raven.png";
import unl from "../resources/experience/unl.png";
import relogic from "../resources/experience/re-logic.png";

const Experience = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? "responsive-container" : "container"}>
      <Grid container direction="column">
        <Position
          company="Nelnet"
          title="IT Software Engineer Intern"
          dateRange="June 2020 - Now"
          stack={["React.js", "Material-UI", "Redux", "Amazon Web Services", "Figma", "Swift", "UIKit"]}
          link="nelnet"
          image={nelnet}
          alt="Nelnet"
          website="https://campuscommerce.com/campuskey/"
        >
          <Typography variant="body1" component={"span"}>
            Currently participating in a fully remote internship where I have rotated between two teams and three projects since starting work
            in June. In my current role, I am working as a Software Engineer Intern on Nelnet's <a href="https://campuscommerce.com/campuskey/">Campus Key</a> team,
            redeveloping the front-end for the Cardholder Portal web application, an internal administrative portal for our Campus Key mobile application.
            Some of my duties within the company have and currently include:
            <ul>
              <li>Redevelop the front-end for the Cardholder Portal application using the React.js framework</li>
              <li>Leverage Material-UI for faster and easier web development</li>
              <li>Develop dynamically scalable iOS applications with Swift, UIKit, and the serverless framework</li>
              <li>Design and develop rich, interactive user experiences utilizing the power of UIKit</li>
            </ul>
          </Typography>
        </Position>
        <Divider className={classes.divider}/>
        <Position
          company="Hoffman Strategy Group"
          title="Software Engineer &amp; Product Manager"
          dateRange="November 2019 - September 2020"
          stack={["React.js", "Material-UI", "Redux", "Amazon Web Services", "GraphQL"]}
          link="hoffman-strategy-group"
          image={hsg}
          alt="Hoffman Strategy Group"
          website="https://hoffmanstrategygroup.com/"
        >
          <Typography variant="body1" component={"span"}>
            My partner and I, <a href="https://msich.dev/">Matt Sichterman,</a> inherited a pre-existing
            JavaScript codebase and worked together to redefine the product vision for the Hoffman Analytics platform.
            We lead the redevelopment of an online commercial real estate feasibility analytics and client report generation system.
            This enhanced system allows you to:
            <ul>
              <li>Quickly organize data by project to upload and download files with ease</li>
              <li>Directly integrate with a variety of Amazon Web Services to store files, authenticate users, and create and store project information</li>
              <li>Search, filter, and compare projects to painlessly track down similar markets</li>
              <li>Easily upload and download files to a variety of projects with bulk capabilities</li>
            </ul>
          </Typography>
        </Position>
        <Divider className={classes.divider}/>
        <Position
          company="Raven Industries"
          title="Software Engineer Intern"
          dateRange="May 2019 - August 2019"
          stack={["JavaScript", "Kendo UI", "ASP.NET Core", "SQL"]}
          link="raven-industries"
          image={raven}
          alt="Raven Industries"
          website="https://ravenind.com/"
        >
          <Typography variant="body1" component={"span"}> 
            Developed and maintained an internal report generation tool that streamlined the process of creating
            large, easy-to-read component reports. The system was built entirely new when I joined Raven using out-of-the-box
            web development toolsets like .NET Core and Kendo UI. This system allowed a user to:
            <ul>
              <li>Easily export database information onto a formatted PDF</li>
              <li>Filter through 2,000 database entries quickly and easily based on their entity relationships</li>
              <li>Query all of an eletronic component unit's corresponding data at the touch of a button to be displayed in a sensical, easy-to-read way</li>
            </ul>
          </Typography>
        </Position>
        <Divider className={classes.divider}/>
        <Position
          company="University of Nebraska-Lincoln"
          title="Teaching Assistant"
          dateRange="January 2019 - May 2020"
          stack={["Java", "JavaFX", "GitLab"]}
          link="unl"
          image={unl}
          alt="University of Nebraska-Lincoln - Department of Computer Science &amp; Engineering"
          website="https://cse.unl.edu/home"
        >
          <Typography variant="body1" component={"span"}>
            Aided Dr. Bohn in the planning and execution of his CSCE 361 (Software Engineering) course while also grading student assignments
            and holding weekly office hours. In this position, I also:
            <ul>
              <li>Managed three student software teams as they tackled a semester-long development project</li>
              <li>Authored concise tutorials for the use of the JavaFX Scene Builder in conjunction with IntelliJ IDEA</li>
              <li>Drove several changes to the contents of the midterm exam(s) after peer-review</li>
            </ul>
          </Typography>
        </Position>
        <Divider className={classes.divider}/>
        <Position
          company="Re-Logic Games"
          title="Quality Assurance Game Tester"
          dateRange="January 2011 - June 2015"
          stack={["Jira", "Slack", "XChat", "Dropbox",]}
          link="relogic-games"
          image={relogic}
          alt="Re-Logic Games"
          website="https://re-logic.com/"
        >
          <Typography variant="body1" component={"span"}>
            Evaluated beta versions of the hit indie game Terraria for bugs and gameplay issues prior to shipping out major community updates. Fun facts:
            <ul>
              <li>Terraria has sold <b>30 MILLION</b> copies worldwide</li>
              <ul>
                <li>This easily makes it one of the best selling video games of <b>all time!</b></li>
              </ul>
              <li>Being that I joined the team in early 2011, I was only 12 years old at the time.</li>
              <li>We never expected Terraria to get as big as it did</li>
            </ul>
          </Typography>
        </Position>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  divider: {
    height: 3,
    marginTop: 30,
    marginBottom: 30,
  },
}));
  
export default Experience;