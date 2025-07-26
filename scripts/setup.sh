#!/usr/bin/env bash
set -euo pipefail

# scripts/setup.sh: Environment setup for the isitai project in a universal Ubuntu 24.04 container
# This script installs and configures all project-level dependencies and settings.

echo "Installing project dependencies..."
npm ci

echo "Disabling Next.js telemetry..."
npx next telemetry disable

echo "Setup complete."

if false; then
  #  
  #
fi
