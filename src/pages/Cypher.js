import React, { useState } from "react";

import backgroundImage from "../assets/images/1920x1080-background-cypher.png";

import imgAbility1 from "../assets/images/abilities/cypher/spell-1.png";
import imgAbility2 from "../assets/images/abilities/cypher/spell-2.png";
import imgAbility3 from "../assets/images/abilities/cypher/spell-3.png";
import imgAbility4 from "../assets/images/abilities/cypher/spell-4.png";

import vidAbility1 from "../assets/videos/abilities/cypher/spell-1.mp4";
import vidAbility2 from "../assets/videos/abilities/cypher/spell-2.mp4";
import vidAbility3 from "../assets/videos/abilities/cypher/spell-3.mp4";
import vidAbility4 from "../assets/videos/abilities/cypher/spell-4.mp4";

import videoSource from "../assets/videos/valorant-jugement.mp4";
import thumbVid from "../assets/images/thumbVid.png";

const Cypher = () => {
  document.title = 'Agent Showcase - Cypher';
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
        setVideoTitle("FIL DE DÉTENTE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un fil de détente. TIREZ pour placer un fil de détente dissimulé et destructible, créant une ligne qui va du point de placement au mur opposé. Les joueurs ennemis qui franchissent le fil de détente seront attachés, révélés et désorientés après un court instant s'ils ne détruisent pas le dispositif dans les temps."
        );
        break;
      case 1:
        setVideoTitle("CYBERCAGE");
        setVideoDescription(
          "Lancez INSTANTANÉMENT la cybercage devant Cypher. ACTIVEZ pour créer une zone qui bloque la vision et qui ralentit les ennemis qui la traversent."
        );
        break;
      case 2:
        setVideoTitle("CAMÉRA ESPIONNE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'une caméra espionne. TIREZ pour placer la caméra espionne à l'endroit ciblé. RÉUTILISEZ cette compétence pour prendre le contrôle de la caméra. Quand vous contrôlez la caméra, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché. La balise peut être ramassée pour être REDÉPLOYÉE."
        );
        break;
      case 3:
        setVideoTitle("VOL NEURAL");
        setVideoDescription(
          "Utilisez cette compétence INSTANTANÉMENT sur un cadavre ennemi pour révéler la position de tous les joueurs ennemis en vie."
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
        <h2 className="text-2xl mb-1 txtUpper">Agent No. 05</h2>
        <h1 className="text-9xl font-medium uppercase -ml-1 txtTitle">
          Cypher
        </h1>
        <p className="text-base mb-6 txtDescription">
          Informateur originaire du Maroc, Cypher est un véritable réseau de
          surveillance à lui tout seul. Il révèle tous les secrets. Il détecte
          toutes les manœuvres. Rien n'échappe à Cypher.
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
  );
};

export default Cypher;