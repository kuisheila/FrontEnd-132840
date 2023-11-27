// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
