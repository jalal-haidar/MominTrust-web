import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

type Props = {
  path?: string;
  animationData?: unknown;
  style?: unknown;
};

const CDN_FALLBACK =
  "https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json";

const HeroLottie = ({ path, animationData, style }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const baseOptions = {
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
    } as const;

    let mounted = true;

    const loadFromData = (data: unknown) => {
      if (!mounted) return;
      try {
        animRef.current?.destroy();
      } catch {
        /* ignore */
      }
      // animationData is provided at runtime and expected by lottie, perform a runtime cast
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line -- lottie expects `any` shaped animation data
      animRef.current = lottie.loadAnimation({
        ...baseOptions,
        animationData: data,
      });
    };

    const load = async () => {
      if (animationData) {
        loadFromData(animationData);
        return;
      }

      if (path) {
        try {
          const resp = await fetch(path, { cache: "no-cache" });
          if (resp.ok) {
            const json = (await resp.json()) as unknown;
            loadFromData(json);
            return;
          }
          throw new Error("local fetch failed");
        } catch {
          // Local fetch/parse failed — try CDN fallback JSON
          try {
            const resp2 = await fetch(CDN_FALLBACK, { cache: "no-cache" });
            if (resp2.ok) {
              const json2 = (await resp2.json()) as unknown;
              loadFromData(json2);
              return;
            }
          } catch {
            // final fallback: let lottie try to load by path
            try {
              animRef.current?.destroy();
            } catch {
              /* ignore */
            }
            animRef.current = lottie.loadAnimation({ ...baseOptions, path });
            return;
          }
        }
      }
    };

    load();

    return () => {
      mounted = false;
      try {
        animRef.current?.destroy();
      } catch {
        /* ignore */
      }
      animRef.current = null;
    };
  }, [path, animationData]);

  return (
    <div
      ref={ref}
      style={style as React.CSSProperties | undefined}
      aria-hidden="true"
    />
  );
};

export default HeroLottie;
