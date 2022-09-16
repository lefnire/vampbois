import { use, StackContext, ViteStaticSite } from "@serverless-stack/resources";

export function Web({ stack }: StackContext) {
  const site = new ViteStaticSite(stack, "site", {
    path: "web",
    buildCommand: "npm run build",
  });

  stack.addOutputs({
    SITE: site.url,
  });
}
