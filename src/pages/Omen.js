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
  document.title = 'Agent Showcase - Omen';
  document.body.style.backgroundImage = `url(${backgroundImage})`;

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
        setVideoTitle("VOIE DES OMBRES");
        setVideoDescription(
          "ÉQUIPEZ-vous d'une compétence de marche des ombres accompagnée d'un indicateur de portée. TIREZ pour commencer une courte canalisation avant de vous téléporter vers l'endroit marqué."
        );
        break;
      case 1:
        setVideoTitle("PARANOÏA");
        setVideoDescription(
          "Tirez INSTANTANÉMENT un projectile d'ombre vers l'avant, ce qui réduit brièvement la portée de la vision de tous les joueurs touchés. Ce projectile peut traverser les murs."
        );
        break;
      case 2:
        setVideoTitle("VOILE SOMBRE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un orbe d'ombre et entrez dans un monde déphasé afin d'y lancer des orbes. APPUYEZ sur la touche de la compétence pour lancer l'orbe à l'endroit marqué, ce qui crée une sphère d'ombre durable qui bloque la vision."
        );
        break;
      case 3:
        setVideoTitle("DEPUIS LES OMBRES");
        setVideoDescription(
          "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour commencer à vous téléporter vers l'endroit sélectionné. Pendant la téléportation, vous apparaissez sous forme d'ombre. Les ennemis peuvent détruire cette ombre pour annuler votre téléportation."
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
    <div className="flexbox">
      <div className="items-end text-white textContainer">
        <h2 className="text-2xl mb-1 title txtUpper">Agent No. 03</h2>
        <h1 className="text-9xl font-medium uppercase -ml-1 txtTitle">Omen</h1>
        <p className="text-base mb-6 txtDescription">
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
              loop
              src={abilities[playingAbilityIndex].video}
              onEnded={handleVideoEnded}
            ></video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Omen;