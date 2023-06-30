"use client";
import React from "react";
import HoverAndOtherStates from "@/app/core-concepts/HoverAndOtherStates";
import Responsive from "@/app/core-concepts/Responsive";
import DarkMode from "@/app/core-concepts/DarkMode";
import ReusingStyles from "@/app/core-concepts/ReusingStyles";
import FlexAndGrid from "./flex-grid/FlexAndGrid";
import Spacing from "./spacing/Spacing";
import Sizing from "./sizing/Sizing";
import Typography from "./typography/Typography";
import Backgrounds from "./backgrounds/Backgrounds";
import Plugins from "./customization/Plugins";
import Layout from "./layout/Layout";
import Borders from "./borders/Borders";
import { ThemeProvider } from "next-themes";
const Page = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="ml-8 mr-4 mt-8">
        <HoverAndOtherStates />
        <Responsive />
        <DarkMode />
        <ReusingStyles />
        <Plugins />
        <Layout />
        <FlexAndGrid />
        <Spacing />
        <Sizing />
        <Typography />
        <Backgrounds />
        <Borders />
      </div>
    </ThemeProvider>
  );
};

export default Page;
