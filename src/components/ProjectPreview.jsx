import React from "react";

// Components
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Button, 
  useMediaQuery 
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const ProjectPreview = React.forwardRef(
  (
    {
      title,
      toggleModal,
      banner,
      bannerAlt,
      stack,
      children,
    }, 
    ref
  ) => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery("(max-width: 1100px)");

    return (
      <Card className={isSmallScreen ? classes.responsiveProject : classes.project} ref={ref}>
        <img 
          className={classes.media}
          src={banner}
          alt={bannerAlt}
        />
        <div className={classes.contents}>
          <CardContent>
            <Typography className="title" variant="h5">
              {title}
            </Typography>
            {children}
          </CardContent>
          {
            stack.map((tech, index) =>
              <Chip
                key={index}
                className={classes.tech}
                label={tech}
              />
            )
          }
          <Button 
            className={classes.learnMore}
            size="small"
            variant="contained"
            color="primary"
            onClick={toggleModal}
          >
            Learn More
          </Button>
        </div>
      </Card>
    );
  }
);

const useStyles = makeStyles(() => ({
  project: {
    width: "45%",
    margin: 10,
    border: "1px solid #9fa2b4",
    "&:hover": {
      boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
  },
  responsiveProject: {
    width: "100%",
    margin: 10,
    border: "1px solid #9fa2b4",
    "&:hover": {
      boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
  },
  media: {
    height: "auto",
    width: "100%",
  },
  contents: {
    padding: 10,
  },
  tech: {
    margin: 4,
  },
  learnMore: {
    float: "right",
    margin: 6,
  },
}));

export default ProjectPreview;