import type { DefaultTheme } from "vitepress";

const githubLink = "https://github.com/Trapezohe";
const mainSiteLink = "https://ghast.trapezohe.ai";

export function createNav(locale: "cn" | "en"): DefaultTheme.NavItem[] {
  if (locale === "en") {
    return [
      { text: "Docs", link: "/en/" },
      { text: "Get Started", link: "/en/start-here/what-is-ghast-ai" },
      { text: "Security", link: "/en/security/overview" },
      { text: "GitHub", link: githubLink },
      { text: "Website", link: mainSiteLink },
    ];
  }

  return [
    { text: "文档首页", link: "/cn/" },
    { text: "开始使用", link: "/cn/start-here/what-is-ghast-ai" },
    { text: "安全", link: "/cn/security/overview" },
    { text: "GitHub", link: githubLink },
    { text: "主站", link: mainSiteLink },
  ];
}
