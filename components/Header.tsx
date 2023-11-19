import { Paper, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Paper square sx={{ top: 0, position: "fixed", width: "100%" }}>
      <Typography
        variant="h2"
        color="white"
        justifyContent="center"
        display="flex"
        textAlign="center"
      >
        Jugendklub Buttlar
      </Typography>
    </Paper>
  )
}
