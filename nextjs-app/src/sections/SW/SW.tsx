import { useCallback, useEffect, useRef, useState } from "react";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import type { SnackbarKey } from "notistack";

import useNotifications from "@/store/notifications";

// TODO: Adapt for Next.js PWA (next-pwa)
// This component handles service worker updates
function SW() {
  const [, notificationsActions] = useNotifications();
  const notificationKey = useRef<SnackbarKey | null>(null);
  const [offlineReady, setOfflineReady] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (notificationKey.current) {
      notificationsActions.close(notificationKey.current);
    }
  }, [notificationsActions]);

  const updateServiceWorker = useCallback(() => {
    // For Next.js PWA, we'll implement this differently
    if (globalThis.window !== undefined && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
          globalThis.window.location.reload();
        }
      });
    }
  }, []);

  useEffect(() => {
    // Check for service worker updates in Next.js PWA
    if (globalThis.window === undefined || !("serviceWorker" in navigator))
      return;

    const checkForUpdates = () => {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          registration.update();
        }
      });
    };

    // Check for updates every hour
    const interval = setInterval(checkForUpdates, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (offlineReady) {
      notificationsActions.push({
        options: {
          autoHideDuration: 4500,
          content: (
            <Alert severity="success">App is ready to work offline.</Alert>
          ),
        },
      });
    } else if (needRefresh) {
      notificationKey.current = notificationsActions.push({
        message: "New content is available, click on reload button to update.",
        options: {
          variant: "warning",
          persist: true,
          action: (
            <>
              <Button onClick={() => updateServiceWorker()}>Reload</Button>
              <Button onClick={close}>Close</Button>
            </>
          ),
        },
      });
    }
  }, [
    close,
    needRefresh,
    offlineReady,
    notificationsActions,
    updateServiceWorker,
  ]);

  return null;
}

export default SW;
