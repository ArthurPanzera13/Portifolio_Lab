import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import PublicIcon from '@mui/icons-material/Public';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TbClock } from 'react-icons/tb';
import { Check } from '@mui/icons-material';

import type { CardType, ProjectType } from '../Types/cardType';
import { ProjectModal } from './ProjectModal';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
// Helper para ícone do tipo
const getTypeIcon = (type: ProjectType) => {
  switch (type) {
    case 'Sites': case "Websites": return <PublicIcon />;
    case 'Landing Pages': return <WebAssetIcon />;
    case 'Aplicativos': case "Apps": return <AppsIcon />;
    case 'E-Commerce': return <ShoppingCartIcon />;
    default: return <HelpOutlineIcon />;
  }
};
// Sugestão: usar um dicionário (map) em vez de switch para ícones.
// Benefício: reduz verbosidade, facilita manutenção e evita cases repetidos.

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Em Andamento': case "In Progress": return <TbClock />;
    case 'Finalizado': case "Finished": return <Check />;
    default: return <HelpOutlineIcon />;
  }
};
// Sugestão: tipar `status` como união ('Em Andamento' | 'Finalizado' | ...), não `string` genérico.
// Benefício: o TypeScript passa a validar valores e evita estados inválidos.

const getColor = (status: string) => {
  switch (status) {
    case 'Em Andamento': case "In Progress": return '#fb8c00';
    case 'Finalizado': case "Finished": return '#4db6ac';
    default: return 'default';
  }
}
// Sugestão: mover cores para theme (palette) ou tokens (ex.: theme.palette.warning.main).
// Benefício: melhora consistência visual, suporte a dark mode e personalização.


interface ProjectCardProps {
  project: CardType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const maxLanguages = 3;
  const showLanguages = project.languages.slice(0, maxLanguages);
  const moreCount = project.languages.length - maxLanguages;

  // Sugestão: não usar `t()` para valores usados em lógica (ícone/cor). Use `project.type`/`project.status` “brutos” e traduza só na UI.
  // Benefício: evita bugs de mapeamento quando a tradução altera o texto e quebra o switch/dicionário.

  // Sugestão: memoizar `showLanguages` e `moreCount` com useMemo se a lista for grande ou houver renders frequentes.
  // Benefício: evita recomputação e melhora performance em grids com muitas cards.

  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          bgcolor: 'grey.900',
          color: 'common.white',
          borderRadius: 2,
          display: 'flex', flexDirection: 'column',
        }}
      >
        <CardMedia
          sx={{
            height: 180,
            borderTopLeftRadius: 8, borderTopRightRadius: 8,
            objectFit: 'cover',
            backgroundColor: 'rgba(30, 30, 30, .8)'
          }}
          image={project.image || "https://via.placeholder.com/400x180/303030/FFFFFF?text=No+Image"}
          title={t(project.title)}
        />
        {/* Sugestão: usar `component="img"` + `alt={t(project.title)}` em vez de `image/title` para acessibilidade real da imagem. */}
        {/* Benefício: leitores de tela anunciam o conteúdo; `CardMedia` com `image` não injeta `alt`. */}
        {/* Ex.: <CardMedia component="img" image={...} alt={t(project.title)} /> */}
        {/* Sugestão: adicionar `loading="lazy"` quando `component="img"`. */}
        {/* Benefício: melhora desempenho em listas longas. */}

        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Chip
            icon={getTypeIcon(t(project.type))}
            // Sugestão: label traduzido, valor lógico bruto.
            // Benefício: separa UI (legenda) da lógica (ícone/tipos).
            label={t(project.type)}
            size="small"
            sx={{
              mb: 2, bgcolor: 'primary.main',
              color: 'white', fontWeight: 'bold',
              '.MuiChip-icon': { color: 'white' }
            }}
          />
          <Chip
            icon={getStatusIcon(t(project.status))}
            label={t(project.status)}
            size="small"
            sx={{
              mb: 2, bgcolor: getColor(t(project.status)),
              color: 'white', fontWeight: 'bold',
              '.MuiChip-icon': { color: 'white' }
            }}
          />
          </Box>
          {/* Sugestão: adicionar `aria-labelledby` ligando o título ao Card para navegação assistiva. */}
          {/* Benefício: melhora compreensão estrutural para leitores de tela. */}
          <Typography gutterBottom variant="h5" fontWeight="bold">
            {t(project.title)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#93A3AF',
              mb: 2,
              display: '-webkit-box',
              lineHeight: "1.5rem",
              maxHeight: "3.75rem",
              overflow: "hidden",
            }}
          >
            {t(project.description)}
          </Typography>
          {/* Sugestão: incluir `WebkitLineClamp: 2` e `WebkitBoxOrient: 'vertical'` para truncamento sólido em 2 linhas. */}
          {/* Benefício: mantém altura consistente e evita cortes incompletos do texto. */}

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {showLanguages.map((lang, i) => (
              <Chip
                key={i}
                // Sugestão: evitar `index` como key; use o valor (`lang`) quando possível.
                // Benefício: reordenações/edições não causam renders inesperados.
                label={lang}
                size="small"
                sx={{ bgcolor: 'grey.700', color: 'white', fontWeight: 500 }}
              />
            ))}
            {moreCount > 0 && (
              <Chip
                label={`+${moreCount}`}
                size="small"
                sx={{ bgcolor: 'grey.700', color: 'white', fontWeight: 500 }}
              />
            )}
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            size="medium"
            onClick={handleOpen}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'grey.700',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: 'grey.800' }
            }}
          >
           {t("projects.btnTexto")}
          </Button>
          {/* Sugestão: adicionar `aria-haspopup="dialog"` e `aria-controls` apontando para o modal. */}
          {/* Benefício: comunica semântica de abertura de diálogo para tecnologias assistivas. */}
        </CardActions>
      </Card>

      <ProjectModal open={open} handleClose={handleClose} project={project} />
      {/* Sugestão: focar o primeiro elemento interativo ao abrir e retornar o foco ao botão ao fechar. */}
      {/* Benefício: fluxo de foco previsível e acessível. */}
    </>
  );
};

// Sugestão: garantir que CardType tenha id/string única para `id` usado em aria-labelledby.
// Benefício: evita colisões de IDs e melhora testabilidade (seletores estáveis).

// Sugestão: extrair `ProjectBadges` (chips de tipo/status) e `LanguageChips` em componentes menores.
// Benefício: reduz complexidade do Card, facilita testes unitários e reuso.

// Sugestão: criar um util `statusToColor(type, theme)` mapeando para `theme.palette` e remover hex codes.
// Benefício: centraliza regras de cor e facilita temas/branding.

// Sugestão: internacionalizar strings de tipos/status no schema (ex.: project.typeKey = 'type.site') e usar `t(typeKey)`.
// Benefício: evita hardcodes multilíngues e melhora manutenção das traduções.