# Deployment Guide for Haromain Umrah Services

This project is built with **Next.js** and is optimized for deployment on **Vercel**, the creators of Next.js.

## Prerequisites

- **Node.js**: Version 18.17 or later.
- **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup).

## Option 1: Deploy via Vercel CLI (Recommended for Manual Deploy)

The quickest way to deploy from your local terminal.

1.  **Install Vercel CLI**:

    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**:

    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command in the project root:

    ```bash
    vercel
    ```

    - Follow the prompts (defaults are usually fine).
    - Accept the project settings.
    - It will create a preview deployment.

4.  **Deploy to Production**:
    Once satisfied with the preview, deploy to production:
    ```bash
    vercel --prod
    ```

## Option 2: Deploy via Git Integration (Recommended for CI/CD)

The standard way to maintain a production site.

1.  **Push your code** to a Git provider (GitHub, GitLab, or Bitbucket).
2.  **Import Project** in Vercel:
    - Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Import the repository you just pushed.
3.  **Configure**:
    - Vercel automatically detects Next.js.
    - Leave the "Build Command" and "Output Directory" as default.
4.  **Deploy**:
    - Click **Deploy**.
    - Vercel will build your site and assign a production URL.

## Configuration Notes

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Install Command**: `npm install`

## Troubleshooting

- **Build Failures**: If the build fails on Vercel but works locally, check that all dependencies are listed in `package.json` and not just installed globally.
- **Linting Errors**: By default, Next.js builds fail if there are ESLint errors. Run `npm run lint` locally to fix them before deploying.
