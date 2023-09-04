import type { SiteConfig } from "@/data/types";

const INFO_AUTHOR = "辛宝Otto";
const INFO_TITLE = "咿呀 能跑就行";
const INFO_DESCRIPTION =
  "《咿呀 能跑就行》是辛宝Otto 的个人 Solo 播客和博客，内容围绕生活、职场、前端学习展开";

export const PATH_POSTS = "/posts/";
export const PATH_PODCASTS = "/podcasts/";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: INFO_AUTHOR,
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: INFO_TITLE,
  // Meta property used as the default description meta property
  description: INFO_DESCRIPTION,
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "zh-CN",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "zh-CN",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "zh-CN",
    options: {
      day: "2-digit",
      month: "2-digit",
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
    title: "Podcast",
    path: PATH_PODCASTS,
  },
  {
    title: "Blog",
    path: PATH_POSTS,
  },
  {
    title: "About",
    path: "/about/",
  },
];
