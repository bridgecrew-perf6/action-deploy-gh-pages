import core from "@actions/core";

const main = async () => {
  core.info(`Start build process`);

  core.startGroup(`Initialize local repository`);
  //core.debug(`Remote: ${url}`);
  //core.debug(`Branch: ${branch}`);
  //await util.init(url, branch);
  core.endGroup();
};

main();
