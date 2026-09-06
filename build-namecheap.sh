#!/bin/bash

# 🚀 Build Script para Namecheap - Periodent
# Este script construye el proyecto completo para producción

set -e  # Exit on error

echo "🚀 Starting Periodent Build for Namecheap..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ====================================
# 1. Limpiar builds anteriores
# ====================================
echo -e "${BLUE}📁 Step 1/6: Cleaning previous builds...${NC}"
rm -rf dist/ dist.zip api.zip
mkdir -p dist

# ====================================
# 2. Build Nuxt (Frontend)
# ====================================
echo -e "${BLUE}🏗️  Step 2/6: Building Nuxt frontend...${NC}"

# Verificar que node_modules exista
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
fi

# Build para producción
echo -e "${BLUE}Building Nuxt...${NC}"
npm run build

# Verificar que el build fue exitoso
if [ ! -d ".output/public" ]; then
    echo "❌ Error: Nuxt build failed. .output/public not found."
    exit 1
fi

echo -e "${GREEN}✅ Nuxt build completed${NC}"
cd ..

# ====================================
# 3. Copiar archivos del frontend
# ====================================
echo -e "${BLUE}📦 Step 3/6: Copying frontend files...${NC}"

# Copiar todo el contenido de .output/public a dist/
cp -r nuxt-site/.output/public/* dist/

echo -e "${GREEN}✅ Frontend files copied to dist/${NC}"

# ====================================
# 4. Preparar API
# ====================================
echo -e "${BLUE}🔧 Step 4/6: Preparing API files...${NC}"

# Crear carpeta api en dist
mkdir -p dist/api

# Copiar archivos PHP de la API
cp -r api/config dist/api/
cp -r api/controllers dist/api/
cp -r api/models dist/api/
cp -r api/services dist/api/
cp -r api/utils dist/api/
cp api/index.php dist/api/
cp api/.htaccess dist/api/

echo -e "${GREEN}✅ API files copied${NC}"

# ====================================
# 5. Copiar archivos de configuración
# ====================================
echo -e "${BLUE}⚙️  Step 5/6: Copying configuration files...${NC}"

# .htaccess para la raíz (si existe)
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess dist/
fi

# robots.txt
if [ -f "public/robots.txt" ]; then
    cp public/robots.txt dist/
fi

# Crear .env.example para la API
cat > dist/api/.env.example << 'EOL'
# Database Configuration
DB_HOST=localhost
DB_NAME=periodent_db
DB_USER=periodent_user
DB_PASS=your_password_here
DB_CHARSET=utf8mb4

# API Configuration
API_URL=https://periodent.com.ve/api
SITE_URL=https://periodent.com.ve

# JWT Secret (cambiar en producción)
JWT_SECRET=change_this_secret_key_in_production

# Debug Mode (false en producción)
DEBUG=false
EOL

echo -e "${GREEN}✅ Configuration files copied${NC}"

# ====================================
# 6. Crear archivos ZIP
# ====================================
echo -e "${BLUE}📦 Step 6/6: Creating deployment packages...${NC}"

# Comprimir todo dist/ para subir completo
cd dist
zip -r ../dist.zip . -x "*.DS_Store" "*.git*"
cd ..

# Comprimir solo la carpeta api/ para actualizar API
cd dist/api
zip -r ../../api.zip . -x "*.DS_Store"
cd ../..

echo -e "${GREEN}✅ Deployment packages created${NC}"

# ====================================
# Resumen
# ====================================
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ BUILD COMPLETED SUCCESSFULLY!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📦 Generated files:"
echo "  • dist/           - Full website (frontend + API)"
echo "  • dist.zip        - Full package (upload to Namecheap)"
echo "  • api.zip         - API only (for API updates)"
echo ""
echo "📊 Directory sizes:"
du -sh dist/ 2>/dev/null || echo "  dist/: N/A"
du -sh dist.zip 2>/dev/null || echo "  dist.zip: N/A"
du -sh api.zip 2>/dev/null || echo "  api.zip: N/A"
echo ""
echo "📝 Next steps:"
echo "  1. Upload dist.zip to Namecheap cPanel"
echo "  2. Extract in public_html/"
echo "  3. Configure .env file in public_html/api/"
echo "  4. Create database and import schema"
echo "  5. Test: https://periodent.com.ve"
echo ""
echo "📚 See DEPLOY_NAMECHEAP.md for detailed instructions"
echo ""
