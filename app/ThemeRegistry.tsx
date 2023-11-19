"use client"
import createCache from "@emotion/cache"
import { useServerInsertedHTML } from "next/navigation"
import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { buttlarTheme } from "./theme"
import { useState } from "react"

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({ options, children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ""
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        // biome-ignore lint: "its ok"
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={buttlarTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}