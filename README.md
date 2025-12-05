
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
    - ... (각 프로젝트 이름)

---

## 🖼️ 이미지/영상 교체 방법 (How to update assets)

1. 위에서 만든 각 폴더에 실제 작품 사진이나 영상을 넣습니다.
2. `constants.ts` 파일을 엽니다.
3. 해당 프로젝트를 찾아 `imageUrl`, `videoUrl` 등을 변경합니다.
   - **주의**: 경로는 `/public`을 빼고 `/images/...` 로 시작해야 합니다.

---

## 🚀 실행 및 배포 방법 (How to Run & Deploy)

### 1. 내 컴퓨터에서 미리보기 (Local Development)
코드를 수정하고 바로 확인하려면 아래 명령어를 쓰세요.
```bash
npm run dev
```

### 2. 깃허브 페이지 배포하기 (Deploy to GitHub Pages)
웹사이트를 인터넷에 올리려면 아래 명령어를 쓰세요. (자동으로 빌드해서 올립니다.)
```bash
npm run deploy
```
* 잠시 후 `Published` 메시지가 뜨면 성공입니다.
* 깃허브 저장소 설정(Settings) -> Pages 메뉴에서 `gh-pages` 브랜치가 선택되어 있는지 확인하세요.
