import React from "react";
import Apploading from "expo-app-loading";

import Routes from "./src/routes";
import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold
} from "@expo-google-fonts/jost"


export default function App(){
  const [ fontsloaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsloaded)
    return <Apploading/>

    return(
      <Routes />
    )
}







