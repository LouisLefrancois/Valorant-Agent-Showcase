import React, { useState } from "react";

import backgroundImage from "../assets/images/1920x1080-background-iso.png";

import imgAbility1 from "../assets/images/abilities/iso/spell-1.png";
import imgAbility2 from "../assets/images/abilities/iso/spell-2.png";
import imgAbility3 from "../assets/images/abilities/iso/spell-3.png";
import imgAbility4 from "../assets/images/abilities/iso/spell-4.png";

import vidAbility1 from "../assets/videos/abilities/iso/spell-1.mp4";
import vidAbility2 from "../assets/videos/abilities/iso/spell-2.mp4";
import vidAbility3 from "../assets/videos/abilities/iso/spell-3.mp4";
import vidAbility4 from "../assets/videos/abilities/iso/spell-4.mp4";

import videoSource from "../assets/videos/valorant-jugement.mp4";
import thumbVid from "../assets/images/thumbVid.png";

const Iso = () => {
  document.title = "Agent Showcase - Iso";

  const [playingAbilityIndex, setPlayingAbilityIndex] = useState(null);
  const [initialVideoPlayed, setInitialVideoPlayed] = useState(false);
  const [videoTitle, setVideoTitle] = useState(
    "JUGEMENT // Cinématique de l'Épisode 8 – VALORANT"
  );
  const [videoDescription, setVideoDescription] = useState(
    "La cinématique Jugement de l'épisode 8 de Valorant met en scène une confrontation intense entre Omen, Iso, Cypher, et Sova contre le chef d'une organisation qui semble être un syndicat d'assassins. Ce groupe pourrait être lié au passé d'Iso avant qu'il ne rejoigne le protocole VALORANT.."
  );

  const abilities = [
    { img: imgAbility1, video: vidAbility1 },
    { img: imgAbility2, video: vidAbility2 },
    { img: imgAbility3, video: vidAbility3 },
    { img: imgAbility4, video: vidAbility4 },
  ];

  const handleAbilityClick = (index) => {
    setPlayingAbilityIndex(index);
    setInitialVideoPlayed(true);

    switch (index) {
      case 0:
        setVideoTitle("CONTINGENCE");
        setVideoDescription(
          "PRÉPAREZ une concentration d'énergie prismatique. Utilisez le TIR PRINCIPAL pour projeter un mur d'énergie indestructible qui bloque les balles."
        );
        break;
      case 1:
        setVideoTitle("SAPE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un carreau moléculaire. Tirez pour le lancer vers l'avant, ce qui rend brièvement FRAGILES tous les joueurs touchés. Le carreau peut traverser les objets solides, murs y compris."
        );
        break;
      case 2:
        setVideoTitle("TIR COUPLÉ");
        setVideoDescription(
          "LANCEZ un décompte de concentration. À la fin, vous entrez dans un état fluide pendant lequel les ennemis abattus que vous avez tués ou blessés génèrent un orbe d'énergie. Tirer sur cet orbe vous confère un bouclier absorbant une salve de dégâts de n'importe quelle source."
        );
        break;
      case 3:
        setVideoTitle("DUEL À HUIS CLOS");
        setVideoDescription(
          "ÉQUIPEZ-vous d'une arène inter-dimensionnelle. Utilisez le TIR PRINCIPAL pour produire une colonne d'énergie sur le terrain, attirant le premier ennemi touché avec vous dans l'arène. Vous vous y affrontez dans un duel à mort."
        );
        break;
      default:
        setVideoTitle("JUGEMENT // Cinématique de l'Épisode 8 – VALORANT");
        setVideoDescription(
          "La cinématique Jugement de l'épisode 8 de Valorant met en scène une confrontation intense entre Omen, Iso, Cypher, et Sova contre le chef d'une organisation qui semble être un syndicat d'assassins. Ce groupe pourrait être lié au passé d'Iso avant qu'il ne rejoigne le protocole VALORANT.."
        );
    }
  };

  const handleVideoEnded = () => {
    setPlayingAbilityIndex(null);
  };

  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="flexbox">
        <div className="items-end text-white textContainer">
          <h2 className="text-2xl mb-1 txtUpper">Agent No. 24</h2>
          <h1 className="text-9xl font-medium uppercase -ml-1 txtTitle">Iso</h1>
          <p className="text-base mb-6 txtDescription">
            Venu de Chine et spécialiste de missions délicates, Iso se fond dans
            le flux de Radianite pour démanteler les réseaux ennemis. Capable de
            restructurer l'énergie ambiante en protection anti-balles, il ne
            dévie pas de la route vers son prochain duel à mort.
          </p>
          <div className="flex">
            {abilities.map((ability, index) => (
              <img
                key={index}
                src={ability.img}
                className={`w-10 h-10 mr-7 hover:opacity-100 cursor-pointer abilityIcons ${
                  playingAbilityIndex === index ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => handleAbilityClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-white descriptionContainer">
          <h1 className="text-3xl mb-3 videoTitle">{videoTitle}</h1>
          <p className="text-base mb-6 videoDescription">{videoDescription}</p>
          <div className="video-container">
            {!playingAbilityIndex && !initialVideoPlayed && (
              <video controls poster={thumbVid}>
                <source src={videoSource} type="video/mp4" />
              </video>
            )}
            {playingAbilityIndex !== null && (
              <video
                autoPlay
                playsInline
                loop
                src={abilities[playingAbilityIndex].video}
                onEnded={handleVideoEnded}
              ></video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iso;
