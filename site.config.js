const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyunjun",
    image: "/avatar.svg ", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "fullstack developer",
    bio: "node, spring, react 등 풀스택 개발자입니다.",
    email: "hyunjunhwang1994@gmail.com",
    linkedin: "",
    github: "hyunjunhwang1994",
    instagram: "",
  },
  projects: [
    {
      name: `dorundorun`,
      href: "https://dorundorun.hyunjun.kr",
    },
  ],
  // blog setting (required)
  blog: {
    title: "blog.hyunjun.kr",
    description: "기술 블로그입니다.",
  },

  // CONFIG configration (required)
  link: "https://blog.hyunjun.kr",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
