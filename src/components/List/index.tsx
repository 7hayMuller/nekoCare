import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type CustomList = {
  avatar: string;
  title: string;
  description: string;
  secondaryAction?: React.ReactNode;
  subDescription?: string;
};

const CustomList: React.FC<CustomList> = ({
  avatar,
  title,
  description,
  secondaryAction,
  subDescription,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 5,
        border: (theme) => `1px solid ${theme.palette.indico.main}`,
      }}
    >
      <ListItem alignItems="flex-start" secondaryAction={secondaryAction}>
        <ListItemAvatar sx={{ px: 5 }}>
          <Avatar
            alt="Avatar"
            sx={{
              backgroundColor: (theme) => theme.palette.indico.main,
              width: 40,
              height: 40,
            }}
            src={avatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          slotProps={{
            primary: {
              fontWeight: 600,
            },
          }}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                {description}
              </Typography>
              {subDescription}
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export default CustomList;
