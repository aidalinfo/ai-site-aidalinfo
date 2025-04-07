import { CodeTabs } from "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.91_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.91_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.91_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
