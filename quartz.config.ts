import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

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
          light: "#FFFFFF",    // Page background: white for a clean, bright look
          lightgray: "#D3D3D3", // Borders: light gray for subtle separation
          gray: "#A9A9A9",      // Graph links and heavier borders: medium gray
          darkgray: "#333333",  // Body text: dark gray for readability
          dark: "#000000",      // Header text and icons: black for high contrast
          secondary: "#FFD700", // Links and current graph node: gold for a regal touch
          tertiary: "#FFD700",  // Hover states and visited graph nodes: gold for consistency
          highlight: "rgba(255, 215, 0, 0.1)", // Internal link background, highlighted text: soft gold
          textHighlight: "#FFD70033", // Markdown highlighted text background: light gold tint
        },
        darkMode: {
          light: "#1A1A1A",     // Page background: dark gray for contrast
          lightgray: "#333333", // Borders: darker gray to fit dark mode
          gray: "#666666",      // Graph links and heavier borders: light gray for visibility
          darkgray: "#E0E0E0",  // Body text: light gray for readability in dark mode
          dark: "#FFD700",      // Header text and icons: gold for elegance
          secondary: "#FFD700", // Links and current graph node: gold for consistent regal theme
          tertiary: "#FFD700",  // Hover states and visited graph nodes: bright gold for interaction
          highlight: "rgba(255, 215, 0, 0.1)", // Internal link background, highlighted text: soft gold highlight
          textHighlight: "#FFD70088", // Markdown highlighted text background: gold with more opacity
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
