import * as core from "@actions/core";

const main = async (): Promise<void> => {
  core.info(`Start build process`);

  core.startGroup(`Initialize local repository`);
  //core.debug(`Remote: ${url}`);
  //core.debug(`Branch: ${branch}`);
  //await util.init(url, branch);
  core.endGroup();
};

main().catch((e) => {
  core.setFailed(e.message);
});
