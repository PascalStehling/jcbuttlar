import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Box, Card, CardContent, Container, Paper, Stack, Typography } from "@mui/material"

export default function Home() {
  return (
    <main>
      <Header />
      <Box
        sx={{
          backgroundImage: `url("/wappen.png")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          opacity: "75%",
        }}
      >
        <Stack>
          
          <Card sx={{bgcolor: "white", textAlign: "center"}}>
            <CardContent>
              <Typography variant="h5">Öffnungszeiten</Typography>
              <Typography>Immer wenn wir Bock haben</Typography>
            </CardContent>
          </Card>
          <Paper sx={{minHeight: "2vh"}} />
          <Card >
            <CardContent sx={{bgcolor: "white", textAlign: "center"}}>
              <Typography variant="h5">Wichtige Infos</Typography>
              <Typography>Gibt nichts</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
      <Footer />
    </main>
  )
}
