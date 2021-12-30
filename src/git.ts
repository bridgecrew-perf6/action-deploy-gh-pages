import * as io from "@actions/io";
import { exec } from "@actions/exec";
import * as core from "@actions/core";
import * as github from "@actions/github";
import * as path from "path";

const cwd = path.join(
  process.env.HOME as string,
  "/actions_publish_gh_pages_temporary_directory"
);

const git = async (cmd: string): Promise<number> => {
  return await exec(`git ${cmd}`, [], { cwd });
};

export const initialize = async (): Promise<void> => {
  const directory = core.getInput("dir") || "dist";
  const token = core.getInput("token");
  const url = `https://${token}@github.com/${github.context.repo.owner}/${github.context.repo.repo}.git`;
  const branch = "gh-pages";
  core.info(`repo ${url}`);

  await io.mkdirP(cwd);

  await git("init");
  await git(`remote add origin "${url}"`);
  await git(`fetch --prune`);
  try {
    await git(`checkout -b ${branch} origin/${branch}`);
  } catch (error) {
    await git(`checkout --orphan ${branch}`);
  }

  io.cp(`${directory}/.`, `${cwd}/.`, { recursive: true });

  await git(`add --all`);
  await git(`config user.name "faable.com"`);
  await git(`config user.email "noreply@faable.com"`);
  await git(`commit -m "build-gh-pages-faablecloud"`);
  await git(`config push.default current`);
  await git(`push origin`);
};
