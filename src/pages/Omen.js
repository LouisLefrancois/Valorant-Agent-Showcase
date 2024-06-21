import React, { useState } from "react";

import backgroundImage from "../assets/images/1920x1080-background-omen.png";

import imgAbility1 from "../assets/images/abilities/omen/spell-1.png";
import imgAbility2 from "../assets/images/abilities/omen/spell-2.png";
import imgAbility3 from "../assets/images/abilities/omen/spell-3.png";
import imgAbility4 from "../assets/images/abilities/omen/spell-4.png";

import vidAbility1 from "../assets/videos/abilities/omen/spell-1.mp4";
import vidAbility2 from "../assets/videos/abilities/omen/spell-2.mp4";
import vidAbility3 from "../assets/videos/abilities/omen/spell-3.mp4";
import vidAbility4 from "../assets/videos/abilities/omen/spell-4.mp4";

import videoSource from "../assets/videos/valorant-jugement.mp4";
import thumbVid from "../assets/images/thumbVid.png";

const Omen = () => {
  const [playingAbilityIndex, setPlayingAbilityIndex] = useState(null);
  const [initialVideoPlayed, setInitialVideoPlayed] = useState(false);

  const abilities = [
    { img: imgAbility1, video: vidAbility1 },
    { img: imgAbility2, video: vidAbility2 },
    { img: imgAbility3, video: vidAbility3 },
    { img: imgAbility4, video: vidAbility4 },
  ];

  const handleAbilityClick = (index) => {
    setPlayingAbilityIndex(index);
    setInitialVideoPlayed(true); // Indique que la vidéo principale a été jouée au moins une fois
  };

  const handleVideoEnded = () => {
    setPlayingAbilityIndex(null);
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute items-end left-0 bottom-0 text-white textContainer"
        style={{ width: "700px" }}
      >
        <div className="pl-32 pb-24">
          <h2 className="text-2xl mb-1">Agent No. 03</h2>
          <h1 className="text-9xl font-medium uppercase -ml-1">Omen</h1>
          <p className="text-base mb-6">
            Véritable fantôme d'un souvenir, Omen chasse dans les ténèbres. Il
            aveugle les ennemis, se téléporte d'un bout à l'autre du champ de
            bataille et laisse la peur se répandre parmi ses adversaires qui se
            demandent qui sera sa prochaine victime.
          </p>
          <div className="flex">
            {abilities.map((ability, index) => (
              <img
                key={index}
                src={ability.img}
                className={`w-10 h-10 mr-7 opacity-70 hover:opacity-100 cursor-pointer ${
                  playingAbilityIndex === index ? "opacity-100" : ""
                }`}
                onClick={() => handleAbilityClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 pr-32 pb-24 text-white descriptionContainer"
        style={{ width: "700px" }}
      >
        <h1 className="text-3xl mb-3">
          JUGEMENT // Cinématique de l'Épisode 8 – VALORANT
        </h1>
        <p className="text-base mb-6">
          La cinématique "Jugement" de l'épisode 8 de Valorant met en scène une
          confrontation intense entre Omen, Iso, Cypher, et Sova contre le chef
          d'une organisation qui semble être un syndicat d'assassins. Ce groupe
          pourrait être lié au passé d'Iso avant qu'il ne rejoigne le protocole
          VALORANT..
        </p>
        <div
          className="video-container"
          style={{
            width: "auto",
            height: "321px",
            backgroundColor: "black",
            overflow: "hidden",
          }}
        >
          {!playingAbilityIndex && !initialVideoPlayed && (
            <video
              style={{ width: "auto", height: "321px" }}
              controls
              poster={thumbVid}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {playingAbilityIndex !== null && (
            <video
              style={{ width: "auto", height: "321px" }}
              autoPlay
              loop
              src={abilities[playingAbilityIndex].video}
              onEnded={handleVideoEnded}
            >
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Omen;
