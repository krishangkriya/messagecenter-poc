import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import SendIcon from '@material-ui/icons/Send';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import QuestionAnswerSharpIcon from '@material-ui/icons/QuestionAnswerSharp';
import InsertLinkSharpIcon from '@material-ui/icons/InsertLinkSharp';
import { Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, green } from '@material-ui/core/colors';
import SettingsInputSvideoTwoToneIcon from '@material-ui/icons/SettingsInputSvideoTwoTone';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: '#00674b',
        backgroundColor: deepOrange[500],
        fontSize: '60px' ,
    marginLeft: '20px',
    marginBottom: '20px',
    },
    rounded: {
        color: '#fff',
        fontSize: '60px' ,
        marginLeft: '20px',
        marginBottom: '20px',
        backgroundColor: green[500],
    },
}));

function Sidebar() {
    const classes = useStyles();

    return (
    <div className="sidebar">
       <ListItem>
        <SettingsInputSvideoTwoToneIcon className="sidebar__twitterIcon" />
       <Typography className="sidebar__titleIcon" >TraderLink</Typography>

       </ListItem>


      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={MailOutlineIcon} text="Private Inbox" />
{/*
      <SidebarOption Icon={SendIcon} text="Sent" />
*/}
      <SidebarOption Icon={QuestionAnswerSharpIcon} text="Leads" />
      <SidebarOption Icon={AddShoppingCartSharpIcon} text="Orders" />
      <SidebarOption Icon={SearchIcon} text="Explore Promotions" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Contacts" />
{/*
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
*/}
      {/*<SidebarOption Icon={PermIdentityIcon} text="Profile" />*/}
      {/*<SidebarOption Icon={MoreHorizIcon} text="More" />*/}

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
       Contact Suppliers
      </Button>
    </div>
  );
}

export default Sidebar;
