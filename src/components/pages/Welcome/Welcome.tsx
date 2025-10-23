import Meta from "@/components/Meta";
import { FullSizeCenteredFlexBox } from "@/components/styled";
import useOrientation from "@/hooks/useOrientation";

import { Image } from "./styled";

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? "40%" : "30%";
  const height = isPortrait ? "30%" : "40%";

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? "column" : "row"}>
        <Image alt="react-router" src="/logos/rr.svg" />
        <Image alt="vite" src="/logos/vite.svg" />
        <Image alt="typescript" src="/logos/ts.svg" />
        <Image alt="react" src="/logos/react_ed.svg" sx={{ width, height }} />
        <Image alt="mui" src="/logos/mui.svg" />
        <Image alt="recoil" src="/logos/recoil.svg" />
        <Image alt="pwa" src="/logos/pwa.svg" />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
