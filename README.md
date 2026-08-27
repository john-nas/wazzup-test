# Wazzup Falafel prototype

A mobile-first React, TypeScript and Vite prototype for Wazzup Falafel.

## Local development

In this Windows PowerShell environment, use `npm.cmd` because the local execution policy blocks the `npm.ps1` wrapper.

```powershell
npm.cmd ci
npm.cmd run dev
```

## GitHub Pages demonstration

The deployment workflow runs when changes reach `main`, and can also be started manually from the repository's **Actions** tab.

During GitHub Actions builds, `vite.config.ts` derives the repository name from `GITHUB_REPOSITORY` and sets Vite's base path to `/<repository-name>/`. Local development continues to use `/`. `HashRouter` keeps internal routes compatible with static GitHub Pages hosting.

### Connect the private repository

Git for Windows is installed at `C:\Program Files\Git\cmd\git.exe`, but that directory is not currently included on `PATH`. The local repository has been prepared on `main`. After creating an empty private repository on GitHub, either add Git to `PATH` or use its full path to connect and push:

```powershell
& 'C:\Program Files\Git\cmd\git.exe' remote add origin https://github.com/<account>/<repository>.git
& 'C:\Program Files\Git\cmd\git.exe' push -u origin main
```

If the repository already has commits, connect and reconcile it before pushing rather than force-pushing over it.

### Enable Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy prototype to GitHub Pages** from **Actions**.
5. Open the deployment URL shown in the completed workflow. For a normal project site it will resemble `https://<account>.github.io/<repository>/`.

The workflow is intentionally tied to `main`. Change the branch under `on.push.branches` in `.github/workflows/deploy-pages.yml` if the demonstration branch has another name.

### Private repository note

GitHub Pages from private repositories requires an eligible paid GitHub plan. A private repository does not automatically make its Pages website private; restricted Pages access is an Enterprise Cloud organisation feature.
