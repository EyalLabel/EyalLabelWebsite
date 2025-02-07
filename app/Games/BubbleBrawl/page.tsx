'use client'
import { title } from "@/components/primitives";
import { Unity,useUnityContext } from "react-unity-webgl";
import {Button} from "@heroui/button";
import React, { useState, useEffect } from "react";

export default function BubbleBrawlPage() {
  const { unityProvider , loadingProgression, isLoaded,requestFullscreen } = useUnityContext({
    loaderUrl: "/EyalLabelWebsite/BubbleBrawl/Build/Builds.loader.js",
    dataUrl: "/EyalLabelWebsite/BubbleBrawl/Build/Builds.data",
    frameworkUrl: "/EyalLabelWebsite/BubbleBrawl/Build/Builds.framework.js",
    codeUrl: "/EyalLabelWebsite/BubbleBrawl/Build/Builds.wasm",
  });
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    typeof window !== "undefined" ? window.devicePixelRatio : 1
  );
  useEffect(
    function () {
      if (typeof window === "undefined") return undefined;
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );
  function handleClick() {
    requestFullscreen(true);
  }
  return (
    <div className="flex flex-col items-center w-full h-full">
    {!isLoaded && (
      <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
    )}
    <Unity
      unityProvider={unityProvider}
      style={{ visibility: isLoaded ? "visible" : "hidden", width: 960, height: 540}}
      devicePixelRatio={devicePixelRatio}
    />
    <br />
    <Button onPress={handleClick} color="primary" variant="ghost">Enter Fullscreen</Button>
  </div>

  ) ;
}
