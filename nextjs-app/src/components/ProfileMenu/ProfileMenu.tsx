import { useState } from "react";
import { useRouter } from "next/router";
import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  Badge,
} from "@mui/material";
import {
  AccountCircle as ProfileIcon,
  Favorite as ImpactIcon,
  Settings as SettingsIcon,
  Receipt as ReceiptIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  EmojiEvents as BadgeIcon,
} from "@mui/icons-material";

interface ProfileMenuProps {
  userName?: string;
  userAvatar?: string;
  currentStreak?: number;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  userName = "John Donor",
  userAvatar,
  currentStreak = 8,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    router.push(path);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Badge
          badgeContent={currentStreak}
          color="error"
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "0.65rem",
              height: 18,
              minWidth: 18,
            },
          }}
        >
          <Avatar
            alt={userName}
            src={userAvatar}
            sx={{
              width: 36,
              height: 36,
              bgcolor: "primary.main",
              fontSize: "0.9rem",
            }}
          >
            {!userAvatar && getInitials(userName)}
          </Avatar>
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: 280,
            mt: 1.5,
            borderRadius: 2,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {/* Profile Header */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {userName}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <BadgeIcon sx={{ fontSize: 16, color: "warning.main" }} />
            <Typography variant="caption" color="text.secondary">
              {currentStreak} month streak
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Menu Items */}
        <MenuItem onClick={() => handleMenuItemClick("/profile")}>
          <ListItemIcon>
            <ProfileIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick("/your-impact")}>
          <ListItemIcon>
            <ImpactIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>
            <Typography color="error" fontWeight="bold">
              Your Impact
            </Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick("/donations")}>
          <ListItemIcon>
            <ReceiptIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Donation History</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick("/notifications")}>
          <ListItemIcon>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => handleMenuItemClick("/settings")}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
