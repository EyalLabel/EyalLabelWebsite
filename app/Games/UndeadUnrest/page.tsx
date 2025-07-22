"use client";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from "@heroui/button";
import React, { useState, useEffect } from "react";

export default function UndeadUnrestPage() {
  const { unityProvider, loadingProgression, isLoaded, requestFullscreen, unload } =
    useUnityContext({
      loaderUrl: "/UUWeb/Build/UUWeb.loader.js",
      dataUrl: "/UUWeb/Build/UUWeb.data",
      frameworkUrl: "/UUWeb/Build/UUWeb.framework.js",
      codeUrl: "/UUWeb/Build/UUWeb.wasm",
    });
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    typeof window !== "undefined" ? window.devicePixelRatio : 1,
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
        `screen and (resolution: ${devicePixelRatio}dppx)`,
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
    [devicePixelRatio],
  );

  // Cleanup Unity instance and stop audio when component unmounts
  useEffect(() => {
    return () => {
      if (unload) {
        unload();
      }
    };
  }, [unload]);
  function handleClick() {
    requestFullscreen(true);
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-4xl font-bold text-Primary mb-2">UNDEAD UNREST</h1>

      <br />
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        devicePixelRatio={devicePixelRatio}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          width: 960,
          height: 540,
        }}
        unityProvider={unityProvider}
      />
      <br />
      <Button color="primary" variant="ghost" onPress={handleClick}>
        Enter Fullscreen
      </Button>
    </div>
  );
}
