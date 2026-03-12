import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { createNav } from "./nav";
import { cnSidebar } from "./sidebar.cn";
import { enSidebar } from "./sidebar.en";

const docsRoot = fileURLToPath(new URL("..", import.meta.url));
const excludedMarkdown = new Set(["SUMMARY.md", "index.md"]);

function collectMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dir)) {
    if (entry === ".vitepress" || entry === "assets" || entry === "public") {
      continue;
    }

    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
      continue;
    }

    if (!entry.endsWith(".md")) {
      continue;
    }

    const relPath = relative(docsRoot, fullPath).split(sep).join("/");
    files.push(relPath);
  }

  return files;
}

const rewrites = Object.fromEntries(
  collectMarkdownFiles(docsRoot)
    .filter((file) => !excludedMarkdown.has(file) && !file.startsWith("en/"))
    .map((file) => [file, file === "README.md" ? "cn/index.md" : `cn/${file}`]),
);

export default defineConfig({
  title: "Ghast AI Docs",
  description: "Official product manual for Ghast AI.",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["SUMMARY.md"],
  rewrites,
  head: [["link", { rel: "icon", href: "/favicon-light.png" }]],
  themeConfig: {
    logo: "/trapezohe-dark.png",
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Trapezohe" }],
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/cn/",
      themeConfig: {
        nav: createNav("cn"),
        sidebar: cnSidebar,
        outline: {
          label: "本页目录",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        returnToTopLabel: "返回顶部",
        darkModeSwitchLabel: "主题",
        sidebarMenuLabel: "菜单",
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: createNav("en"),
        sidebar: enSidebar,
        outline: {
          label: "On this page",
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page",
        },
        returnToTopLabel: "Return to top",
        darkModeSwitchLabel: "Theme",
        sidebarMenuLabel: "Menu",
      },
    },
  },
});
