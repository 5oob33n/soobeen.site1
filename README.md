
# Soobeen Woo Portfolio

Interactive ASCII-art styled portfolio for Digital Media Artist Soobeen Woo.
Built with React, TypeScript, Tailwind CSS, and Vite.

## 📁 폴더 구조 만들기 (Folder Structure)

이미지와 비디오 파일을 관리하기 위해 `public` 폴더 내부에 아래와 같이 구조를 만들어야 합니다.

### 1. 한 번에 만들기 (터미널 명령어)
터미널(Terminal) 또는 Git Bash에서 아래 명령어를 복사해 실행하면 모든 폴더가 자동으로 생성됩니다.

```bash
mkdir -p public/images/autopsy public/images/resonair public/images/afropolik public/images/antio public/images/echoia public/images/object-metamorphosis public/images/debris-tracer public/images/jujube public/images/seed-capsule public/images/vom-blick public/images/oensa-ant public/images/ceramics
```

### 2. 수동으로 만들기
프로젝트 루트(최상위)에서 아래 구조대로 폴더를 생성하세요:
- **public/**
  - **images/**
    - `autopsy/`
    - `resonair/`
    - `afropolik/`
    - `antio/`
    - `echoia/`
    - `object-metamorphosis/`
    - `debris-tracer/`
    - `jujube/`
    - `seed-capsule/`
    - `vom-blick/`
    - `oensa-ant/`
    - `ceramics/`

---

## 🖼️ 이미지/영상 교체 방법 (How to update assets)

1. 위에서 만든 각 폴더에 실제 작품 사진이나 영상을 넣습니다.
   - 지원 형식: `.jpg`, `.png`, `.webp`, `.gif`, `.mp4` 등
2. `constants.ts` 파일을 엽니다.
3. 해당 프로젝트를 찾아 `imageUrl`, `videoUrl` 등을 변경합니다.
   - **주의**: 경로는 `/public`을 빼고 `/images/...` 로 시작해야 합니다.

**예시 (`constants.ts`):**
```typescript
{
  id: 'p1',
  title: 'Autopsy of Sensing',
  // ... 기존 코드 ...
  
  // JPG 파일일 때
  // imageUrl: '/images/autopsy/main_photo.jpg', 
  
  // PNG 파일일 때 (파일 이름과 확장자를 정확히 적어주세요)
  imageUrl: '/images/autopsy/main_photo.png',
  
  // 비메오(Vimeo) 영상 넣기 (추천!)
  // 주소창의 'https://vimeo.com/숫자' 가 아니라 'https://player.vimeo.com/video/숫자' 형식을 사용하세요.
  videoUrl: 'https://player.vimeo.com/video/123456789',
}
```

---

## 🚀 실행 방법 (How to Run)

1. 패키지 설치:
   ```bash
   npm install
   ```
2. 개발 서버 실행 (내 컴퓨터에서 미리보기):
   ```bash
   npm run dev
   ```
3. 배포용 빌드:
   ```bash
   npm run build
   ```