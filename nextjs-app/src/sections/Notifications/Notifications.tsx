import { CustomContentProps, SnackbarProvider } from "notistack";
import { ReactNode, Ref, forwardRef } from "react";

import { notifications } from "@/config";

import Notifier from "./Notifier";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// here how you can define your own notification component

const CustomNotification = forwardRef(function CustomNotification(
  { message }: CustomContentProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Alert ref={ref} severity="info">
      <AlertTitle>Notification demo (random IT jokes :))</AlertTitle>
      {message}
    </Alert>
  );
});

type NotificationsProps = {
  children: ReactNode;
};

function Notifications({ children }: NotificationsProps) {
  return (
    <SnackbarProvider
      maxSnack={notifications.maxSnack}
      Components={{
        customNotification: CustomNotification,
      }}
    >
      <Notifier />
      {children}
    </SnackbarProvider>
  );
}

export default Notifications;
