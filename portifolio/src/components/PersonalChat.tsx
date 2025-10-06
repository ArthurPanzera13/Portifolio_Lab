import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import { ChatWindow } from "./Chat";

type PersonalChatProps = {
  avatarUrl?: string;   
  avatarAlt?: string;   
  initials?: string;    
  bottom?: number;    
  right?: number;     
};

export const PersonalChat: React.FC<PersonalChatProps> = ({
  avatarUrl = "./../assets/profile.jpeg",
  avatarAlt = "Foto de Perfil",
  initials = "GV",
  bottom = 16,
  right = 16,
}) => {
  const [openChat, setOpenChat] = React.useState(false);
  let badgeValue = 1
  // Sugestão: trocar `badgeValue` para estado (`const [badgeValue, setBadgeValue] = useState(1)`).
  // Benefício: o valor atual é uma variável local; alterar para 0 não dispara re-render e o Badge não atualiza (bug).


  const handleToggleChat = () => {
    badgeValue = 0
    setOpenChat((prev) => !prev);
  };
  // Sugestão: usar useCallback e atualizar o badge via setState (ex.: setBadgeValue(0)).
  // Benefício: evita recriação da função em cada render e corrige o fluxo de atualização do Badge.

  return (
    <>
      <Box sx={{ height: 0 }}>
        <SpeedDial
          ariaLabel="Abrir chat pessoal"
          // Sugestão: internacionalizar a label com i18n (ex.: t('chat.abrir')).
          // Benefício: mantém consistência multilíngue da aplicação.

          sx={{
            position: "fixed",
            bottom,
            right,
            zIndex: (t) => t.zIndex.tooltip + 1,
          }}
          open={false}
          // Sugestão: evitar `open={false}` se o SpeedDial não será expansível; ou trocar SpeedDial por `Fab`/`IconButton`.
          // Benefício: SpeedDial é pensado para ações flutuantes múltiplas; se é apenas um botão, Fab/IconButton simplifica e reduz complexidade.

          FabProps={{
            onClick: handleToggleChat,
            sx: {
              width: 56,
              height: 56,
              p: 0,
              bgcolor: "transparent",
              boxShadow: 3,
              "&:hover": { boxShadow: 6, bgcolor: "transparent" },
            },
          }}
          icon={
            <Badge badgeContent={badgeValue} color="secondary">
              {/* Sugestão: tornar o badge “não lido” acessível com aria-live/aria-label resumindo contagem. */}
              {/* Benefício: leitores de tela serão notificados quando a contagem mudar. */}

            <Avatar
              src={avatarUrl}
              alt={avatarAlt}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid",
                borderColor: "background.paper",
              }}
            >
              {initials}
            </Avatar>
            </Badge>
          }
          onOpen={undefined}
          onClose={undefined}
          // Sugestão: remover props onOpen/onClose indefinidas ou implementar handlers reais se usar o modo expandível.
          // Benefício: API limpa e sem props “mortas”.
        />
      </Box>

      <ChatWindow open={openChat} onClose={() => setOpenChat(false)} />
      {/* Sugestão: considerar focar o ChatWindow ao abrir e retornar foco ao botão ao fechar. */}
      {/* Benefício: melhora acessibilidade com gerenciamento correto de foco. */}
    </>
  );
};