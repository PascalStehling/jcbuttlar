import { Link, Paper, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Paper sx={{ width: "100%", position: "fixed", bottom: 0 }} square>
      <Typography color="white" justifyContent="center" display="flex" textAlign="center">
        <Link href="https://maps.app.goo.gl/29rdZUetV1N3eqDT7" underline="hover" color="white">
          Frankfuter Straße 15, 36419 Buttlar
        </Link>
      </Typography>
    </Paper>
  )
}
