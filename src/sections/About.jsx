import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia
} from "@material-ui/core"
import { Phone, Mail } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
// Assets
import nebraska from "../resources/nebraska.svg";
import suzette from "../resources/references/SuzettePerson.jpg";
import billy from "../resources/references/BillyAllen.jpeg";
import brady from "../resources/references/BradyGarvin.png";
import chris from "../resources/references/ChrisBohn.png";
import christian from "../resources/references/ChristianBerck.png";
import jerry from "../resources/references/JerryHoffman.png";
import kevan from "../resources/references/KevanGray.jpg";
import marc from "../resources/references/MarcJohnson.jpeg";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: '12vw',
    paddingRight: '12vw',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: 'bold',
  },
  whitespace: {
    margin: 60,
  },
  reference: {
    display: 'flex',
    boxShadow: '1px 3px 6px 1px #555',
    width: "28vw",
    minWidth: 400,
    height: "23vh",
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    padding: 15,
    midWidth: 215,
  },
  cover: {
    width: '40%',
    minWidth: 145,
  },
  referenceIcon: {
    marginRight: 10,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <Typography variant="h4" className={classes.title}>Who Am I?</Typography>
        <Typography variant="body1">
          My name is Ryan Le. I am an incoming senior at the University 
          of Nebraska-Lincoln majoring in Software Engineering, with a minor in Mathematics. I moved here from Sioux Falls,
          South Dakota back in August of 2017! Currently, I am working two different software development-based roles
          over the summer as Software Engineer &amp; Product Manager with Hoffman Strategy Group, and also as an IT
          Software Engineer Intern at Nelnet! After losing my initially planned internship to the ongoing pandemic,
          I shifted gears and decided to take advantage of the remote work opportunity by
          signing on for two separate development opportunities. Things are going great so far!
        </Typography>
        <br />
        <Typography variant="body1">
          Thus far, I have been enjoying front-end development the most as it allows me to utilize my creative side while
          also leveraging my client-facing skillsets. Lately, I have been focusing in JavaScript in collaboration with technologies
          such as React, Material UI, Node.js, Express, and Amazon Web Services to create my projects. In the past I've worked
          extensively as well with things like Python, Swift, SwiftUI, and SQL databases. I like to consider myself a jack of all
          trades in terms of software development at this point in my college career, but my real interest moving forward is in
          web development. Given some time for the technologies to mature, I am also open to shifting over to mobile development!
        </Typography>

        <div className={classes.whitespace}/>

        <Typography variant="h4" className={classes.title}>Education</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bolder' }}>University of Nebraska-Lincoln</Typography>
        <Typography variant="body1">
          Bachelor of Science in 
          <span style={{ fontWeight: 'bolder' }}> Software Engineering</span>, 
          Minor in <span style={{ fontWeight: 'bolder' }}>Mathematics</span>
        </Typography>
        <Typography variant="body1">
          <span style={{ fontWeight: 'bolder' }}>Cumulative GPA:</span> 3.567/4.000
        </Typography>
        <br />
        <Typography variant="body1">
          Throughout my college career, I have gained a variety of experiences in different aspects of leadership and software development.
          This last year, I lead the development of a social media marketing application on iOS and gained valuable client-facing engineering
          experience as both the Squad Lead and Product Manager for my senior design team. I reported directly to my corporate sponsors
          at the Buckle on a weekly basis in this position, talking through current progress and pivoting the project as necessary.
        </Typography>
        <br />
        <Typography variant="body1">
          For the upcoming fall semester, I have been elected to the post of Vice President of Communications for the university's 
          Engineering Student Advisory Board, the governing student body for UNL's College of Engineering. Along with that, my good
          friends and I within the software engineering major have been working to get our senior year curriculum changed so that
          we can pursue our idea of founding our SOFTie Startup through UNL's senior design program. And we have just reached our first
          milestone: getting official faculty approval for the improved program pitch! 
        </Typography>
        <br />
        <Typography variant="body1">
          This means that, instead of signing on for another year of working for an industry-sponsored project, the university will be allowing our 
          assembled team of students to pursue our own startup project where we get to be our own primary stakeholders. A project in which we call the shots, 
          define our project vision, incubate our ideas from the ground up, and pursue technologies of interest in a startup environment all with the backing
          of our own tuition dollars, mitigating any and all risk of forming a company from the ground up! If you can't tell, I am incredibly excited for this
          new opportunity.
        </Typography>
        <p align="center">
          <img 
            src={nebraska} 
            alt="Go Big Red!"
            height={150}
            width="auto"
          />
        </p>

        <div className={classes.whitespace}/>

        <Typography variant="h4" className={classes.title}>More About Me</Typography>
        <Typography variant="body1">
          I am an incredibly motivated and detail-oriented software engineer that is able to easily insert myself
          into any team dynamic. I thrive in collaborative environments and strive to always give every project my all,
          while also continuing to learn new things every day. I know when to ask questions, how to find the resources I need
          when tackling new technologies, and I put no task beneath me. I can be a valuable addition to any team thanks to my 
          diverse experience in gathering requirements, juggling a variety of development tasks, testing, and planning. I have also
          greatly strengthened my ability to manage my time, having proved myself this summer by working two software engineering positions
          concurrently while helping to set the foundation for our new SOFTie Startup program. 
        </Typography>
        <br />
        <Typography variant="body1">
          But as busy as my life can be with school, work, and extracurriculars, I can still find time to set aside to do things I love including...
          <ul>
            <li>Going for long jogs around Lincoln, NE to rest my mind 🏃‍♂️</li>
            <li>Practicing (amateur) photograpy of people and places 📸</li>
            <li>Traveling within the country to brand new places with my amazing group of friends ⛰️</li>
            <li>Spending quality time with friends and family 👨‍👩‍👧‍👦</li>
            <li>Learning how to improve my skills as a software engineer 💻</li>
            <li>Playing video games 🎮</li>
          </ul>
          I consider myself very much a people person; I love meeting new people and am always willing to put myself out there 
          into social situations where I can talk to new people.
        </Typography>

        <div className={classes.whitespace}/>

        <Typography variant="h4" className={classes.title}>Don't Believe Me? Ask Any of my References!</Typography>
        <Grid container style={{ justifyContent: "space-around" }}>

          <Card className={classes.reference}>
              <div className={classes.details}>
                <Typography variant="h6">Dr. Chris Bohn, PhD</Typography>
                <Typography variant="subtitle2">Assistant Professor of Practice</Typography>
                <Typography variant="subtitle2">University of Nebraska-Lincoln</Typography>
                <br/>
                <a href="mailto:bohn@unl.edu">
                  <Grid container>
                    <Mail className={classes.referenceIcon}/>
                    <Typography variant="subtitle2">bohn@unl.edu</Typography>
                  </Grid>
                </a>
              </div>
              <CardMedia
                className={classes.cover}
                image={chris}
                title="Dr. Christopher Bohn, PhD"
              />
            </Card>

          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Dr. Brady Garvin, PhD</Typography>
              <Typography variant="subtitle2">Assistant Professor of Practice</Typography>
              <Typography variant="subtitle2">University of Nebraska-Lincoln</Typography>
              <br/>
              <a href="mailto:bgarvin@cse.unl.edu">
                <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">bgarvin@cse.unl.edu</Typography>
                </Grid>
              </a>
              <a href="tel:1-402-472-5088">
                <Grid container>
                  <Phone className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">(402) 472-5088</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={brady}
              title="Dr. Brady James Garvin, PhD"
            />
          </Card>
        
          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Dr. Suzette Person, PhD</Typography>
              <Typography variant="subtitle2">Associate Professor of Practice</Typography>
              <Typography variant="subtitle2">University of Nebraska-Lincoln</Typography>
              <br/>
              <a href="mailto:suzette.person@unl.edu">
              <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">suzette.person@unl.edu</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={suzette}
              title="Dr. Suzette Person, PhD"
            />
          </Card>

          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Jerry L. Hoffman</Typography>
              <Typography variant="subtitle2">Founder &amp; Partner</Typography>
              <Typography variant="subtitle2">Hoffman Strategy Group</Typography>
              <br/>
              <a href="mailto:jerry@hoffmanstrategy.com">
                <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">Jerry@HoffmanStrategy.com</Typography>
                </Grid>
              </a>
              <a href="tel:1-402-560-0722">
                <Grid container>
                  <Phone className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">(402) 560-0722</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={jerry}
              title="Jerry L. Hoffman"
            />
          </Card>
    
          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Kevan Gray</Typography>
              <Typography variant="subtitle2">Lead Technical Project Manager</Typography>
              <Typography variant="subtitle2">Buckle</Typography>
              <br/>
              <a href="mailto:kevan.gray@buckle.com">
                <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">kevan.gray@buckle.com</Typography>
                </Grid>
              </a>
              
              <a href="tel:1-308-455-0711">
                <Grid container>
                  <Phone className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">(308) 455-0711</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={kevan}
              title="Kevan Gray"
            />
          </Card>

          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Christian Berck</Typography>
              <Typography variant="subtitle2">Software Engineer</Typography>
              <Typography variant="subtitle2">Microsoft</Typography>
              <br/>
              <a href="mailto:christian@berck.com">
                <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">christian@berck.org</Typography>
                </Grid>
              </a>
              <a href="tel:1-402-270-0986">
                <Grid container>
                  <Phone className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">(402) 270-0986</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={christian}
              title="Christian Berck"
            />
          </Card>

          <Card className={classes.reference}>
            <div className={classes.details}>
              <Typography variant="h6">Marc Johnson</Typography>
              <Typography variant="subtitle2">IT Infrastructure Engineer</Typography>
              <Typography variant="subtitle2">Nelnet</Typography>
              <br/>
              <a href="mailto:Marc.Johnson@nelnet.net">
                <Grid container>
                  <Mail className={classes.referenceIcon}/>
                  <Typography variant="subtitle2">Marc.Johnson@nelnet.net</Typography>
                </Grid>
              </a>
            </div>
            <CardMedia
              className={classes.cover}
              image={marc}
              title="Marc Johnson"
            />
          </Card>

          <Card className={classes.reference}>
          <div className={classes.details}>
            <Typography variant="h6">Billy Allen</Typography>
            <Typography variant="subtitle2">IT Manager</Typography>
            <Typography variant="subtitle2">Nelnet</Typography>
            <br/>
            <a href="mailto:Billy.Allen@nelnet.net">
              <Grid container>
                <Mail className={classes.referenceIcon}/>
                <Typography variant="subtitle2">Billy.Allen@nelnet.net</Typography>
              </Grid>
            </a>
          </div>
          <CardMedia
            className={classes.cover}
            image={billy}
            title="Billy Allen"
          />
        </Card>

        </Grid>
      </section>
    </div>
  );
}
  
export default About;