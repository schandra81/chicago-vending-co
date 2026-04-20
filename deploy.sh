#!/bin/bash
# ============================================================
# Chicago Vending Co. — Vercel Deployment Script
# Run this on your local machine to deploy in ~2 minutes
# ============================================================

set -e

VERCEL_TOKEN="vcp_4LpyNP92HlaZMseWxlHxypy3urmQlQjhFmakRZwQiiZ7aMH0cr4JTYZm"
PROJECT_NAME="chicago-vending-co"

echo ""
echo "🚀 Chicago Vending Co. — Deploying to Vercel"
echo "=============================================="
echo ""

# ── Step 1: Check Node.js ──────────────────────────────────
echo "→ Checking Node.js..."
if ! command -v node &> /dev/null; then
  echo "✗ Node.js not found. Install from https://nodejs.org (v18+)"
  exit 1
fi
NODE_VER=$(node -v)
echo "  ✓ Node.js $NODE_VER"

# ── Step 2: Check/Install Vercel CLI ──────────────────────
echo "→ Checking Vercel CLI..."
if ! command -v vercel &> /dev/null; then
  echo "  Installing Vercel CLI..."
  npm install -g vercel
fi
echo "  ✓ Vercel CLI ready"

# ── Step 3: Install dependencies ──────────────────────────
echo "→ Installing project dependencies..."
npm install
echo "  ✓ Dependencies installed"

# ── Step 4: Build the Astro project ───────────────────────
echo "→ Building Astro project..."
npm run build
echo "  ✓ Build complete (output in /dist)"

# ── Step 5: Deploy to Vercel ──────────────────────────────
echo "→ Deploying to Vercel..."
echo ""

DEPLOY_OUTPUT=$(vercel deploy \
  --token "$VERCEL_TOKEN" \
  --name "$PROJECT_NAME" \
  --yes \
  --prod \
  2>&1)

echo "$DEPLOY_OUTPUT"

# Extract URL from output
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.vercel\.app' | tail -1)

if [ -n "$DEPLOY_URL" ]; then
  echo ""
  echo "=============================================="
  echo "✅ DEPLOYED SUCCESSFULLY!"
  echo "=============================================="
  echo ""
  echo "  🌐 Live URL:  $DEPLOY_URL"
  echo "  📊 Dashboard: https://vercel.com/dashboard"
  echo ""
  echo "Next steps:"
  echo "  1. Visit $DEPLOY_URL to verify everything works"
  echo "  2. Add custom domain in Vercel Dashboard → Domains"
  echo "  3. Submit sitemap: $DEPLOY_URL/sitemap.xml to Google Search Console"
  echo "  4. Run PageSpeed test: https://pagespeed.web.dev/?url=$DEPLOY_URL"
  echo ""
else
  echo ""
  echo "Deployment completed. Check the Vercel dashboard for your URL."
  echo "Dashboard: https://vercel.com/dashboard"
fi
