import Link from "next/link";
import Sales from "@/components/Catalog/Sales";
import Flashlights from "@/components/Catalog/Flashlights";

import Flashlights2 from "@/components/Catalog/Flashlights2";

import Articles from "@/components/Catalog/Articles";

import News from "@/components/Catalog/News";

import MainCatalog from "@/components/Catalog/MainCatalog";

import PreFooter from "@/components/PreFooter";

import Tops from "@/components/Catalog/Tops";

import NavigationMenu from "@/components/NavigationMenu";

export default function Home() {
  return (
    <div>
      <NavigationMenu />

      <MainCatalog />
      <Tops />
      
      <News />
      <Sales />
      <Sales />

      <News />
      <Sales />
      <Sales />

      <Articles />
      <Flashlights2 />
      <Flashlights />
      <PreFooter />
    </div>
  );
}