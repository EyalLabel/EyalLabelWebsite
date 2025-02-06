'use client'
import { title } from "@/components/primitives";
import { Unity,useUnityContext } from "react-unity-webgl";
import {Button} from "@heroui/button";
import React, { useState, useEffect } from "react";

export default function GamePage() {
  const { unityProvider , loadingProgression, isLoaded,requestFullscreen } = useUnityContext({
    loaderUrl: "/UUWeb/Build/UUWeb.loader.js",
    dataUrl: "/UUWeb/Build/UUWeb.data",
    frameworkUrl: "/UUWeb/Build/UUWeb.framework.js",
    codeUrl: "/UUWeb/Build/UUWeb.wasm",
  });
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );
  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
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
