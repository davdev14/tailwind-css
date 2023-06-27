"use client";
import React from "react";
import HoverAndOtherStates from "@/core-concepts/HoverAndOtherStates";
import Responsive from "@/core-concepts/Responsive";
import DarkMode from "@/core-concepts/DarkMode";
import ReusingStyles from "@/core-concepts/ReusingStyles";
import Plugins from "./customization/Plugins";
import Layout from "./layout/Layout";
import { ThemeProvider } from "next-themes";
const Page = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="ml-8 mt-8">
        <HoverAndOtherStates />
        <Responsive />
        <DarkMode />
        <ReusingStyles />
        <Plugins />
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default Page;
