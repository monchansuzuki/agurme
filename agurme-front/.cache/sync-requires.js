
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/tamonsuzuki/Documents/agurme/agurme-front/src/pages/404.js")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/tamonsuzuki/Documents/agurme/agurme-front/src/pages/index.tsx")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/tamonsuzuki/Documents/agurme/agurme-front/src/pages/page-2.tsx")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/tamonsuzuki/Documents/agurme/agurme-front/src/pages/using-typescript.tsx"))
}

