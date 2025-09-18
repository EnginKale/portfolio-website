# GitHub Repository ve Deployment Rehberi

Bu rehber, projenizi GitHub'a yüklemek ve çeşitli platformlarda deploy etmek için adım adım talimatlar içerir.

## 📋 İçindekiler
1. [GitHub Repository Oluşturma](#github-repository-oluşturma)
2. [Projeyi GitHub'a Yükleme](#projeyi-githuba-yükleme)
3. [Vercel ile Deployment](#vercel-ile-deployment)
4. [Netlify ile Deployment](#netlify-ile-deployment)
5. [GitHub Pages ile Deployment](#github-pages-ile-deployment)
6. [Önemli Notlar](#önemli-notlar)

## 🚀 GitHub Repository Oluşturma

### 1. GitHub Hesabı Oluşturun
- [GitHub.com](https://github.com) adresine gidin
- "Sign up" butonuna tıklayın
- Gerekli bilgileri doldurun ve hesabınızı oluşturun

### 2. Yeni Repository Oluşturun
1. GitHub ana sayfasında sağ üst köşedeki "+" işaretine tıklayın
2. "New repository" seçeneğini seçin
3. Repository bilgilerini doldurun:
   - **Repository name**: `portfolio-website` (veya istediğiniz isim)
   - **Description**: `Modern portfolio website with React and Tailwind CSS`
   - **Public** seçeneğini işaretleyin (ücretsiz hosting için)
   - **Add a README file** seçeneğini işaretleyin
4. "Create repository" butonuna tıklayın

## 📤 Projeyi GitHub'a Yükleme

### 1. Git Kurulumu (Eğer kurulu değilse)
```bash
# Windows için Git indirin: https://git-scm.com/download/win
# Kurulum sonrası terminal/cmd'de kontrol edin:
git --version
```

### 2. Git Yapılandırması
```bash
git config --global user.name "Adınız Soyadınız"
git config --global user.email "email@example.com"
```

### 3. Proje Klasöründe Git Başlatma
```bash
# Proje klasörüne gidin
cd d:\deneme

# Git repository'sini başlatın
git init

# Tüm dosyaları staging area'ya ekleyin
git add .

# İlk commit'i yapın
git commit -m "Initial commit: Portfolio website with React and Tailwind"

# GitHub repository'sini remote olarak ekleyin
git remote add origin https://github.com/KULLANICI_ADINIZ/portfolio-website.git

# Ana branch'i main olarak ayarlayın
git branch -M main

# Dosyaları GitHub'a yükleyin
git push -u origin main
```

## 🌐 Vercel ile Deployment (Önerilen)

### 1. Vercel Hesabı Oluşturun
- [Vercel.com](https://vercel.com) adresine gidin
- "Sign up" butonuna tıklayın
- GitHub hesabınızla giriş yapın

### 2. Projeyi Deploy Edin
1. Vercel dashboard'unda "New Project" butonuna tıklayın
2. GitHub repository'nizi seçin
3. Build ayarlarını kontrol edin:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. "Deploy" butonuna tıklayın

### 3. Özel Domain (Opsiyonel)
- Vercel dashboard'unda projenizi seçin
- "Settings" > "Domains" bölümüne gidin
- Kendi domain'inizi ekleyin

## 🔗 Netlify ile Deployment

### 1. Netlify Hesabı Oluşturun
- [Netlify.com](https://netlify.com) adresine gidin
- GitHub hesabınızla giriş yapın

### 2. Projeyi Deploy Edin
1. "New site from Git" butonuna tıklayın
2. GitHub'ı seçin ve repository'nizi bulun
3. Build ayarlarını yapın:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. "Deploy site" butonuna tıklayın

## 📄 GitHub Pages ile Deployment

### 1. GitHub Actions Workflow Oluşturun
Proje klasörünüzde `.github/workflows/deploy.yml` dosyası oluşturun:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. Vite Konfigürasyonunu Güncelleyin
`vite.config.js` dosyasını güncelleyin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Repository adınızla değiştirin
})
```

### 3. GitHub Pages'i Etkinleştirin
1. GitHub repository'nizde "Settings" sekmesine gidin
2. Sol menüden "Pages" seçeneğini seçin
3. Source olarak "GitHub Actions" seçin
4. Workflow dosyasını commit edin ve push yapın

## ⚠️ Önemli Notlar

### Güvenlik
- `.env` dosyalarını asla GitHub'a yüklemeyin
- API anahtarlarını ve hassas bilgileri `.gitignore` dosyasına ekleyin
- Production ortamında environment variables kullanın

### .gitignore Dosyası
Proje klasörünüzde `.gitignore` dosyası oluşturun:

```
# Dependencies
node_modules/

# Production build
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

### Package.json Scripts
`package.json` dosyanızda bu scriptlerin olduğundan emin olun:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Domain Yönlendirme
- Vercel ve Netlify otomatik HTTPS sağlar
- Özel domain kullanıyorsanız DNS ayarlarını güncelleyin
- CNAME kaydı oluşturun

### Performans Optimizasyonu
- Görselleri optimize edin (WebP formatı kullanın)
- Lazy loading uygulayın
- Bundle size'ı kontrol edin
- CDN kullanın

## 🔄 Güncelleme Süreci

Projenizde değişiklik yaptığınızda:

```bash
# Değişiklikleri staging area'ya ekleyin
git add .

# Commit mesajı yazın
git commit -m "Update: Açıklama"

# GitHub'a yükleyin
git push origin main
```

Deployment platformları otomatik olarak yeni versiyonu deploy edecektir.

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- GitHub Issues kullanın
- Platform dokümantasyonlarını kontrol edin
- Community forumlarından yardım alın

---

**Not**: Bu rehber temel deployment sürecini kapsar. Daha gelişmiş özellikler için platform dokümantasyonlarını inceleyebilirsiniz.