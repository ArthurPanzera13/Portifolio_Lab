import type { User } from "../Types/userType";
import profileImg from "../assets/profile.jpeg";
import curriculo from "../assets/curriculo.pdf"

export const userData: User = {
    name: "Arthur Panzera",
    img: profileImg,
    desc: "user.desc",
    emailName: 'arthurpanzera@outlook.com',
    linkedinName: 'arthur-panzera',
    githubName: 'ArthurPanzera13',
    links: {
        github: "https://github.com/ArthurPanzera13",
        linkedin: "https://www.linkedin.com/in/arthur-panzera/",
        email: "arthurpanzera@outlook.com"
    },
    telefone: "+5531995834848",
    curriculo,
    caracteristicas: [
        "user.software",
        "user.frontend",
        "user.fullstack",
        "user.fluig"            
    ]
}