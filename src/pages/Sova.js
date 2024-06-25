import React, { useState } from "react";

import backgroundImage from "../assets/images/1920x1080-background-sova.png";

import imgAbility1 from "../assets/images/abilities/sova/spell-1.png";
import imgAbility2 from "../assets/images/abilities/sova/spell-2.png";
import imgAbility3 from "../assets/images/abilities/sova/spell-3.png";
import imgAbility4 from "../assets/images/abilities/sova/spell-4.png";

import vidAbility1 from "../assets/videos/abilities/sova/spell-1.mp4";
import vidAbility2 from "../assets/videos/abilities/sova/spell-2.mp4";
import vidAbility3 from "../assets/videos/abilities/sova/spell-3.mp4";
import vidAbility4 from "../assets/videos/abilities/sova/spell-4.mp4";

import videoSource from "../assets/videos/valorant-jugement.mp4";
import thumbVid from "../assets/images/thumbVid.png";

const Sova = () => {
  document.title = 'Agent Showcase - Sova';
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
        setVideoTitle("DRONE RAPACE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un drone rapace. TIREZ pour déployer et prendre le contrôle du drone. Quand vous contrôlez le drone, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché. Les ennemis peuvent détruire le drone rapace."
        );
        break;
      case 1:
        setVideoTitle("ÉLECTROFLÈCHE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un arc et d'une flèche électrique. TIREZ pour décocher la flèche, qui explose à l'impact et blesse les joueurs proches. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche."
        );
        break;
      case 2:
        setVideoTitle("FLÈCHE DE RECONNAISSANCE");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un arc et d'une flèche de reconnaissance. TIREZ pour décocher la flèche, qui s'active à l'impact et révèle la position des ennemis proches se trouvant dans sa ligne de vue. Les ennemis peuvent détruire cette flèche. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche."
        );
        break;
      case 3:
        setVideoTitle("FUREUR DU CHASSEUR");
        setVideoDescription(
          "ÉQUIPEZ-vous d'un arc et de trois projectiles d'énergie à longue portée capables de traverser les murs. TIREZ pour décocher un projectile d'énergie en ligne droite, qui inflige des dégâts et révèle la position des ennemis touchés. Cette compétence peut être RÉUTILISÉE jusqu'à deux fois de plus tant que la compétence est active."
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
        <h2 className="text-2xl mb-1 txtUpper">Agent No. 06</h2>
        <h1 className="text-9xl font-medium uppercase -ml-1 txtTitle">Sova</h1>
        <p className="text-base mb-6 txtDescription">
          Né dans l'hiver éternel de la toundra russe, Sova traque, trouve et
          élimine ses ennemis avec une efficacité et une précision redoutables.
          Ses incroyables talents d'éclaireur et son arc personnalisé lui
          garantissent que sa cible ne fuira jamais très longtemps.
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

export default Sova;