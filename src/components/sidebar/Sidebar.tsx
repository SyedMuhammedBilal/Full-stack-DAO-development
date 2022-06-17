import TreeView from "@material-ui/lab/TreeView";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ArrowRight } from "@material-ui/icons";
import TreeItem from "@material-ui/lab/TreeItem";
import { burnerData, minterData, settingsData } from "../../static/sidebar.static";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/SVGs/logo/logo.svg'
import { ReactComponent as Widget } from '../../assets/SVGs/widget.svg'

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box width="15.4rem" className={classes.mainSidebarContaioner} position="fixed">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        zIndex={2}
        overflow={"hidden auto"}
        bgcolor='rgb(255 253 253 / 7%)'
        style={{ backdropFilter: 'blur(50px)'}}
        height="100vh"
      >
        <TreeView
          className={classes.treeParent}
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpanded={["First Workspace"]}
          defaultExpandIcon={<ArrowRight />}
        >
          <TreeItem
            className={classes.treeItemChild}
            label={<></>}
            nodeId={""}
          />
          <Box className={classes.logoWrapper}>
            <Logo style={{ width: '4rem' }} />
            <Widget />
          </Box>
          <hr style={{ borderColor: "#626262" }} />
          <Box className={classes.linkWrapper}>
            <Box display="flex">
              <Typography className={classes.mainTreeHeading} variant="button">
                {`Menu`}
              </Typography>
            </Box>
            
            {/* links */}
            <Box className={classes.linkMainContainer}>
              {minterData?.map((items) => {
                const SVGComponent = items?.icon;

                return (
                  <Link style={{ textDecoration: 'none', color: '#fff' }} to={items?.link}>
                    <Box className={classes.linkContainer}>
                      <Box style={{ paddingLeft: '0.5rem' }}>
                        <SVGComponent style={{ width: '2rem' }} />
                      </Box>
                      <Box style={{ paddingLeft: '2rem' }}>
                        <Typography>{items?.name}</Typography>
                      </Box>
                    </Box>
                  </Link>
                )
              })}
            </Box>

            <hr style={{ borderColor: "#626262" }} />
            <Box display="flex">
              <Typography className={classes.mainTreeHeading} variant="button">
                {`Groups`}
              </Typography>
            </Box>

            {/* links */}
            <Box className={classes.linkMainContainer}>
              {burnerData?.map((items) => {
                const SVGComponent = items?.icon;

                return (
                  <Link style={{ textDecoration: 'none', color: '#fff' }} to={items?.link}>
                    <Box className={classes.linkContainer}>
                      <Box style={{ paddingLeft: '0.5rem' }}>
                        <SVGComponent style={{ width: '2rem' }} />
                      </Box>
                      <Box style={{ paddingLeft: '2rem' }}>
                        <Typography>{items?.name}</Typography>
                      </Box>
                    </Box>
                  </Link>
                )
              })}
            </Box>

            <hr style={{ borderColor: "#626262" }} />
            <Box display="flex">
              <Typography className={classes.mainTreeHeading} variant="button">
                {`General`}
              </Typography>
            </Box>

            {/* links */}
            <Box className={classes.linkMainContainer}>
              {settingsData?.map((items) => {
                const SVGComponent = items?.icon;

                return (
                  <Box className={classes.linkContainer}>
                    <Box style={{ paddingLeft: '0.5rem' }}>
                      <SVGComponent style={{ width: '2rem' }} />
                    </Box>
                    <Box style={{ paddingLeft: '2rem' }}>
                      <Typography>{items?.name}</Typography>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </TreeView>
      </Box>
    </Box>
  );
};

export default Sidebar;
