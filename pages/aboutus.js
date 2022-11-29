import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
    const founderArray = [
        {
            name: "Jaynti Kanani",
            position: "Chief Executive",
            images: images.founder1,
        },
        {
            name: "Ryan Watts",
            position: "Chief Executive",
            images: images.founder3,
        },
        {
            name: "Sandeep Nailwal",
            position: "Co-founder",
            images: images.founder2,
        },
    ]

    const factsArray = [
        {
            title: "100 million",
            info: "Projects enabling the transition to decentralized internet",
        },
        {
            title: "37,000+",
            info: "Decentralized Applications have used Polygon to scale their performance",
        },
        {
            title: "135+ million",
            info: "Unique addresses have been deployed to the Polygon network",
        },
    ];
    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>👋 About Us.</h1>
                        <p>
                            Polygon (MATIC) is an Ethereum token that powers the Polygon Network
                            — a protocol and framework for building and connecting Ethereum-compatible blockchain networks.
                            Polygon is what's known as a Layer-2 solution, designed to help scale the Ethereum
                            network and improve its functionality.
                        </p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image src={images.hero2} width={350} height={350} />
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>⛱ Founder</h2>
                    <p>
                        Polygon believes in Web3 for all. Polygon is a decentralised Ethereum
                        scaling platform that enables developers to build scalable user-friendly
                        dApps with low transaction fees without ever sacrificing on security.
                    </p>
                </div>

                <div className={Style.aboutus_box_founder}>
                    <div className={Style.aboutus_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image
                                    src={el.images}
                                    alt={el.name}
                                    width={500}
                                    height={500}
                                    className={Style.aboutus_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutus_box_title}>
                    <h2>🚀 Fast Facts</h2>
                    <p>
                        Polygon has committed $100 million to projects enabling the transition to decentralized
                        internet, otherwise known as Web 3.0.
                    </p>
                </div>

                <div className={Style.aboutus_box_facts}>
                    <div className={Style.aboutus_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Brand />
        </div>
    );
};

export default aboutus;