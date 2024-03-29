import { Box, Container } from "@mui/material";
import { MainNav } from "../../ui/components/MainNav";

export const MainLayout = ({children}) => {
  return (
    <>
      <Box
        minHeight={'100vh'}
        display={'grid'}
        gridTemplateRows={'auto 1fr auto'}
      >
        <MainNav/>
        <Container maxWidth={'lg'} component={'main'}>
          {children}
        </Container>
        <Box component="footer">
          <Container maxWidth={'lg'} component={'main'}>
            Footer
          </Container>
        </Box>
      </Box>
    </>
  )
}
