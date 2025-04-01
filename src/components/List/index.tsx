import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";

type CustomList = {
  avatar: string;
  title: string;
  description: string;
  subDescription?: string;
};

const CustomList: React.FC<CustomList> = ({
  avatar,
  title,
  description,
  subDescription,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 25,
        border: "1px solid #C0F2D8",
      }}
    >
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <Grid container direction="row" spacing={1} px={5}>
            <Grid>
              <IconButton edge="end" aria-label="update">
                <EditCalendarIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton edge="end" aria-label="delete">
                <EventBusyIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton edge="end" aria-label="notification">
                <NotificationsIcon />
              </IconButton>
            </Grid>
          </Grid>
        }
      >
        <ListItemAvatar sx={{ px: 5 }}>
          <Avatar alt="Avatar" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          slotProps={{
            primary: {
              fontWeight: 600,
            },
          }}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                {description}
              </Typography>
              {subDescription}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default CustomList;
