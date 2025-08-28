import type { ServiceItem } from "../Types/ServiceType"
import { Language, RocketLaunch, ShoppingCart, Link as LinkIcon, Build, Extension } from "@mui/icons-material"
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const services: ServiceItem[] = [

  {
    icon: SettingsSuggestIcon,
    title: "servicos.fluig.titulo",
    description: "servicos.fluig.descricao",
  },
  {
    icon: AccountTreeIcon,
    title: "servicos.bpmn.titulo",
    description: "servicos.bpmn.descricao",
  },
  {
    icon: Language,
    title: "servicos.sites.titulo",
    description: "servicos.sites.descricao",
  },
  {
    icon: RocketLaunch,
    title: "servicos.landing.titulo",
    description: "servicos.landing.descricao",
  },
  {
    icon: ShoppingCart,
    title: "servicos.ecommerce.titulo",
    description: "servicos.ecommerce.descricao",
  },
  {
    icon: LinkIcon,
    title: "servicos.linkBio.titulo",
    description: "servicos.linkBio.descricao",
  },
  {
    icon: Build,
    title: "servicos.manutencao.titulo",
    description: "servicos.manutencao.descricao",
  },
  {
    icon: Extension,
    title: "servicos.personalizado.titulo",
    description: "servicos.personalizado.descricao",
  },
  
]