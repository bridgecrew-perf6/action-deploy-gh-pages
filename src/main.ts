import * as core from "@actions/core";
import { initialize } from "./git";

const main = async (): Promise<void> => {
  core.info(`Start build process`);

  core.startGroup(`Initialize local repository`);
  await initialize();
  core.endGroup();
};

main().catch((e) => {
  core.setFailed(e.message);
});
