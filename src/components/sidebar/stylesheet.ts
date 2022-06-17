import { makeStyles } from '@material-ui/core';
import SidebarBackground from '../../assets/images/background-img-sidebar.png'

export default makeStyles((theme) => ({
  mainSidebarContaioner: {
    backgroundImage: `url(${SidebarBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    background: 'rgba(255, 253, 253, 0.18)',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  link: {
    textDecoration: 'unset',
    '& .label': {
      color: '#c3d4e6',
      fontWeight: 400,
    },
    '& .label.active': {
      color: '#ffffff',
      fontWeight: 500,
      paddingTop: '10px'
    },
    '& .label.count': {
      paddingTop: '10px'
    },
  },
  sidebarSVGContainer: {
    position: 'relative'
  },
  sidebarSVGWrapper: {
    position: 'absolute'
  },
  linkWrapper: {
    // marginTop: '4rem'
  },
  linkMainContainer: {
    // width: '9rem'
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'unset',
    borderRadius: '8px',
    marginTop: '0.5rem',
    paddingRight: '3rem',
    '&:hover': {
      backgroundColor: '#0202026b',
      backdropFilter: "blur(50px)"
    }
  },
  mainTreeHeading: {
    width: "85%", 
    color: '#dddddd', 
    textAlign: 'initial',
    fontSize: '16px'
  },
  treeParent: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
    padding: '0 10px !important',
    color: '#fff',
    '& .MuiTreeItem-label': {
      fontSize: '1rem', 
      fontWeight: 400,
      lineHeight: 1.8,
      textTransform: 'unset'
    },
    '& .MuiTreeItem-iconContainer svg': {
      fontSize: '30px'
    }
  },
  treeItemChild: {
    padding: '5px 0 !important'
  }
}));
