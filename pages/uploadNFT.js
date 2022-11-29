import React, {useState, useEffect, useContext} from "react";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

/** Import from contract */
import {NFTMarketplaceContext} from "../Context/NFTMarketPlaceContexts";

const uploadNFT = () => {
  const {uploadToIPFS, createNFT} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Audio, or 3D Model</h2>
          <p>
            Supported file types: JPG, PNG, GIF, SVG, MP3, WAV,
            GLB, GLTF. Max file size: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT}/>
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
