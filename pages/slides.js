import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import { LinearScale } from "@material-ui/icons";

export default function Slides() {
  const [page, setPage] = useState(0);
  const [slides, setSlides] = useState([]);
  const useStyles = makeStyles({
    boton: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      height: 30,
      width: 25,
      transform: "scale(4)",
      margin: "0 10%",
    },
    title: {
      color: "white",
      size: "larger",
      textAlign: "center",
    },
    slider: {
      width: "10%",
    },
    descripcion: {
      color: "white",
    },
    root: {
      width: 300,
      height: 100,
    },
    media: {
      paddingTop: "56.25%", // 16:9
      transform: "scale(0.6)",
    },
  });
  const classes = useStyles();

  const prev = () => {
    if (page != 0) {
      setPage((page) => page - 1);
    }
  };

  const next = () => {
    if (page != slides.length - 1) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    axios.get("/api/hello").then((slides) => {
      setSlides(slides.data);
    });
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  /*MENU */
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /*SPEED DIAL */
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosed = () => {
    setOpen(false);
  };

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
    { icon: <FavoriteIcon />, name: "Like" },
  ];
  return (
    <>
      <h1 className={classes.title}>MATERIAL UI</h1>
      <div id="slides">
        <button onClick={prev}>
          <NavigateBeforeIcon
            color="primary"
            className={classes.boton}
            fontSize="large"
          ></NavigateBeforeIcon>
        </button>
        {slides.length && <img src={slides[page]}></img>}
        <button onClick={next}>
          <NavigateNextIcon
            color="primary"
            className={classes.boton}
            fontSize="large"
          ></NavigateNextIcon>
        </button>
      </div>
      {/*COMPONENTES*/}
      {page == 7 ? (
        <div className="components">
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text primary button group"
          >
            <Button>Esto</Button>
            <Button>es</Button>
            <Button>MATERIAL-UI</Button>
          </ButtonGroup>
          <form>
            <FormControl>
              <FormLabel>Pop quiz: Material-UI is...</FormLabel>
              <RadioGroup aria-label="quiz" name="quiz">
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="The best!"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label="The worst."
                />
              </RadioGroup>
              <FormHelperText></FormHelperText>
              <Button type="submit" variant="outlined" color="primary">
                Check Answer
              </Button>
            </FormControl>
          </form>
          <VolumeDown />
          <Slider className={classes.slider} />
          <VolumeUp />
        </div>
      ) : null}
      {page == 8 ? (
        <div className="components">
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      ) : null}
      {page == 9 ? (
        <div className="components">
          <Card>
            <CardHeader title="Material UI" subheader="November 8, 202020" />
            <CardMedia
              className={classes.media}
              image="https://process.filestackapi.com/cache=expiry:max/resize=width:700/5yjLJYBrQ6EHpN9dK0ak"
              title="Paella dish"
            />
            <CardContent>
              <h2>
                Material-UI is an open-source project that features React
                components that implement Google’s Material Design.
              </h2>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ) : null}
      {page == 10 ? (
        <div className="components">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography className={classes.descripcion} component="legend">
              RATING
            </Typography>
            <Rating name="simple-controlled" />
          </Box>
          <div className={classes.root}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
          </div>
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            onClose={handleClosed}
            onOpen={handleOpen}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={handleClosed}
              />
            ))}
          </SpeedDial>
        </div>
      ) : null}
    </>
  );
}
