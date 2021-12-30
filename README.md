# Publish to GitHub Pages :rocket:

[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/faablecloud/action-deploy-gh-pages?color=brightgreen&include_prereleases)](https://github.com/faablecloud/actions-publish-gh-pages/releases)
[![GitHub](https://img.shields.io/github/license/faablecloud/action-deploy-gh-pages?color=blue)](LICENSE)

Deploy your static site to [GitHub Pages](https://pages.github.com/).

## Add the action to your repo

- Create a `yaml` file in your repo: `.github/workflow/deploy-gh-pages.yaml`
- Place this content inside

```yaml
name: Publish to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Check out
        uses: actions/checkout@v2

      - name: Install dependencies
        run: yarn install

      - name: Build your repo
        run: yarn run build

      - name: Deploy to GitHub Pages
        uses: faablecloud/action-deploy-gh-pages@v1
        with:
          dir: dist
          branch: gh-pages
          token: ${{ secrets.GITHUB_TOKEN }}
```
