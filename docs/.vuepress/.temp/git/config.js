import { GitContributors } from "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.91_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_caf18bd14f3497e5a75d3d3dfce7956a/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.91_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.2_caf18bd14f3497e5a75d3d3dfce7956a/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
