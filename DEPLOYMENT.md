# Deployment Guide

## Vercel Deployment

This project uses Vercel to deploy the `twenty-website` package, which is a Next.js application.

### Setup

The deployment is configured with the following files:

1. **`project.json`** - Root project configuration that defines the build task
2. **`packages/twenty-website/project.json`** - Website-specific project configuration  
3. **`vercel.json`** - Vercel deployment configuration

### Build Process

When deployed to Vercel, the build process:

1. Runs `yarn install --frozen-lockfile` to install dependencies
2. Executes `npx nx build` which runs the `twenty:build` task
3. The build task delegates to `twenty-website:build`
4. The website build runs `npx next build` in the `packages/twenty-website` directory
5. Output is generated in `packages/twenty-website/.next`

### Troubleshooting

#### Canvas Build Errors

If you encounter canvas build errors during deployment, this is typically due to system dependencies required for server-side image processing. The `CANVAS_PREBUILT=false` environment variable is set to avoid prebuilt binary issues.

#### Dependency Conflicts

The build process may show warnings about peer dependency conflicts. These are generally non-blocking warnings and the build should continue.

#### Missing Build Task

If you see "Cannot find configuration for task twenty:build", ensure:

1. The root `project.json` file exists and defines the build task
2. The `packages/twenty-website/project.json` file exists
3. The Nx workspace is properly configured

#### Functions Configuration Error

If you see "The pattern 'packages/twenty-website/src/app/api/**' defined in `functions` doesn't match any Serverless Functions", this means Vercel is using an old version of `vercel.json`. Ensure the latest version is deployed.

### Local Testing

To test the build locally:

```bash
# Install dependencies
yarn install

# Run the build
npx nx build

# Or build specific packages
npx nx run twenty-website:build
```

### Environment Variables

The deployment uses the following environment variables:

- `SKIP_ENV_VALIDATION=true` - Skips environment validation during build
- `CANVAS_PREBUILT=false` - Prevents canvas from using prebuilt binaries

Add any additional environment variables in the Vercel dashboard or in `vercel.json`. 