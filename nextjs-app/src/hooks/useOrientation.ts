import { useEffect, useState } from "react";

function getOrientation() {
  if (globalThis.window === undefined) return false;
  return globalThis.window.innerHeight > globalThis.window.innerWidth;
}

function useOrientation() {
  const [isPortrait, setIsPortrait] = useState(getOrientation());

  useEffect(() => {
    function handleResize() {
      setIsPortrait(getOrientation());
    }

    if (globalThis.window !== undefined) {
      globalThis.window.addEventListener("resize", handleResize);
      return () =>
        globalThis.window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isPortrait;
}

export default useOrientation;
