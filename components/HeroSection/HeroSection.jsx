import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

/** Smart Contract Import */
import {NFTMarketplaceContext} from "../../Context/NFTMarketPlaceContext";

const HeroSection = () => {
  const {titleData} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Assemble, and Sell NFTs</h1>
          <p>
            Discover some amazing NFTs and also create your collections and sell them.
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
