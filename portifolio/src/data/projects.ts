import type { CardType } from "../Types/cardType";
import imagemFilmes from '../assets/catalogoFilmes.png'
import videoFilmes from '../assets/VideoFilmes.mp4'
import imageSecretWord from '../assets/SecretWord.png'
import videoForca from '../assets/Forca.mp4'
import imageNutriSmart from '../assets/NutriSmart.png'
import videoNutro from '../assets/NutroVideo.mp4'

export const projects: CardType[] = [
  {
    id: "1",
    title: "projects.catalogoFilmes.title",
    description: "projects.catalogoFilmes.description",
    languages: ["React", "CSS3", "Styled-Components", "Axios", "React-Router", "React-Youtube" ],
    type: "projects.types.sites",
    status: "projects.status.done",
    image: imagemFilmes,
    highlight: true,
    date: '23/02/2024',
    siteLink: '',
    gitHubLink: 'https://github.com/ArthurPanzera13/CatalogoDeFilmes',
    video: videoFilmes
  },
  {
    id: "2",
    title: "projects.Secret Word.title",
    description: "projects.Secret Word.description",
    languages: ["React", "CSS3", "Styled-Components", "React-Router"],
    type: "projects.types.sites",
    status: "projects.status.done",
    image: imageSecretWord,
    highlight: true,
    date: '08/09/2023',
    gitHubLink: 'https://github.com/ArthurPanzera13/SecretWord',
    video: videoForca
  },
  {
    id: "3",
    title: "projects.NutriSmart.title",
    description: "projects.NutriSmart.description",
    languages: ["HTML5", "CSS3", "JavaScript"],
    type: "projects.types.sites",
    status: "projects.status.done",
    image: imageNutriSmart,
    gitHubLink: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti1-2401100-projeto-alimentacao-saudavel',
    highlight: true,
    date: '07/12/2024',
    video: videoNutro
  }
];