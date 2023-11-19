import type { Metadata } from "next"
import ThemeRegistry from "./ThemeRegistry"

export const metadata: Metadata = {
  title: "Jugenklub Buttlar",
  description: "Website des Jugenklubs Buttlars",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
