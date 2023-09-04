import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "辛宝Otto",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "咿呀 能跑就行",
  // Meta property used as the default description meta property
  description:
    "《咿呀 能跑就行》是辛宝Otto 的个人 Solo 播客和博客，内容围绕生活、职场、前端学习展开",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "zh-CN",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "zh-CN",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "zh-CN",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about/",
  },
  {
    title: "Blog",
    path: "/posts/",
  },
  {
    title: "Podcast",
    path: "/podcasts/",
  },
];
