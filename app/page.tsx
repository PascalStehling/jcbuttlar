import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Box } from "@mui/material"

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
          opacity: "75%"
        }}
      />
      <Footer />
    </main>
  )
}
