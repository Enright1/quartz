import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌱 enright.life",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Libre Baskerville",
        body: "Crimson Pro",
        code: "Courier Prime",
      },
colors: {
  lightMode: {
    light: "#F8F9FA",       // Crisp white (marble/DC monuments)
    lightgray: "#E9ECEF",   // Soft stone gray (Capitol Building columns)
    gray: "#6C757D",        // Granite gray (DC urban accents)
    darkgray: "#343A40",    // Deep slate (formal documents)
    dark: "#002868",        // DC flag blue (dominant primary color)
    secondary: "#BF0A30",   // Bold red (American flag crimson)
    tertiary: "#FFD700",    // Gold (historical seals/DC flag stars)
    highlight: "rgba(191, 10, 48, 0.1)",   // Subtle red highlight
    textHighlight: "#FFD70033",            // Translucent gold for emphasis
  },
  darkMode: {
    light: "#161618",       // Near-black (night sky over the Mall)
    lightgray: "#2D2D32",   // Moonlit granite (Washington Monument)
    gray: "#4A4A4F",        // Cool urban gray
    darkgray: "#E9ECEF",    // Light stone (reverse contrast)
    dark: "#BF0A30",        // Crimson red (dark mode primary accent)
    secondary: "#7B97AA",   // Weathered bronze (Jefferson Memorial patina)
    tertiary: "#FFD700",    // Gold (consistent accent for DC stars/seals)
    highlight: "rgba(255, 215, 0, 0.1)",    // Gold translucent overlay
    textHighlight: "#BF0A3088",            // Deep red translucent highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
