#!/bin/bash
set -e
echo "🚀 Building from nuxt-site (Adapted for Namecheap)..."

# 1. Clean previous builds
echo "📁 Cleaning..."
rm -rf dist/ dist.zip api.zip
# Don't mkdir yet, wait until after build in case build recreates a symlink

# 2. Build Nuxt
echo "🏗️  Building Nuxt..."
# Ensure dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the build
npm run build

# Check success
if [ ! -d ".output/public" ]; then
    echo "❌ Build failed: .output/public not found"
    exit 1
fi

# 3. Setup Dist
echo "📦 Preparing dist folder..."
# Nuxt sometimes creates a dist symlink. Remove it if it exists.
rm -rf dist
mkdir -p dist

# 4. Copy Frontend
echo "📦 Copying frontend files..."
cp -r .output/public/* dist/

# 5. Copy API
echo "🔧 Copying API from ../api..."
mkdir -p dist/api

# Copy folders using ../api path
if [ -d "../api" ]; then
    cp -r ../api/config dist/api/ 2>/dev/null || true
    cp -r ../api/controllers dist/api/ 2>/dev/null || true
    cp -r ../api/models dist/api/ 2>/dev/null || true
    cp -r ../api/services dist/api/ 2>/dev/null || true
    cp -r ../api/utils dist/api/ 2>/dev/null || true
    cp ../api/index.php dist/api/ 2>/dev/null || true
    
    if [ -f "../api/.htaccess" ]; then
        cp ../api/.htaccess dist/api/
    fi
else
    echo "⚠️  Warning: ../api not found. API files will be missing."
fi

# 6. Config Files
echo "⚙️  Copying extra config..."
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess dist/
fi

# 7. Create API .env example
cat > dist/api/.env.example << 'EOL'
DB_HOST=localhost
DB_NAME=periodent_db
DB_USER=periodent_user
DB_PASS=your_password_here
DB_CHARSET=utf8mb4
API_URL=https://periodent.com.ve/api
SITE_URL=https://periodent.com.ve
JWT_SECRET=change_this_secret_key_in_production
DEBUG=false
EOL

# 8. Zip
echo "📦 Zipping distribution packages..."
if command -v zip >/dev/null 2>&1; then
    cd dist
    zip -r ../dist.zip . -x "*.DS_Store" "*.git*" >/dev/null
    cd ..
    echo "✅ Success! 'dist.zip' created."
else
    echo "⚠️  'zip' command not found. Please zip the 'dist' folder manually."
fi
