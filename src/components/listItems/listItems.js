import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const mainListItems = (
  <div>
    <a href="/Dashboard/id:/"><ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </a>

    <a href="/Dashboard/id:/recipes/">
    <ListItem button>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItem>
    </a>

    <a href="/Dashboard/id:/friends/">
    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Fellow Chefs" />
    </ListItem>
    </a>

    <a href="/Dashboard/id:/inputrecipe">
    <ListItem button>
      <ListItemIcon>
        <PlusOneIcon />
      </ListItemIcon>
      <ListItemText primary="Submit New" />
    </ListItem>
    </a>

    <a href="/Dashboard/id:/inputrecipe">
    <ListItem button>
      <ListItemIcon>
        <SettingsApplicationsIcon />
      </ListItemIcon>
      <ListItemText primary="Account Settings" />
    </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>New Recipes</ListSubheader>
    <a href="/Dashboard/id:/singlerecipe/id:">
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Glass of water" />
    </ListItem>
    </a>
    <a href="/Dashboard/id:/singlerecipe/id:">
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Bowl of Cereal" />
    </ListItem>
    </a>
    <a href="/Dashboard/id:/singlerecipe/id:">
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Toast" />
    </ListItem>
    </a>
  </div>
);