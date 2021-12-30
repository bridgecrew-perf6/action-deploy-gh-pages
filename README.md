# action-deploy-gh-pages

Deploy your static site to github pages

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

      - name: Build your repo
        run: yarn run build

      - name: Deploy to GitHub Pages
        uses: faablecloud/actions-deploy-gh-pages@main
        with:
          dir: dist
          branch: gh-pages
```
