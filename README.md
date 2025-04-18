# 🔀 Random Picker (Test Repo.)

> 이번엔 누가 할래? 쓸모 있는 랜덤 피커

<br/>

## 👩🏻‍💻 프로젝트

- 진행기간: 2024.02.12 ~ 2024.02.20
- 배포링크: [🔀 Random Picker](https://random-picker-new.vercel.app/)
- 회고기록: [랜덤 추첨기 프로젝트 배움 기록](https://devella.oopy.io/0a26f347-3c6c-4bb6-adab-34cfa1283e9c)
- 이슈관리: [Github Projects](https://github.com/users/ella-yschoi/projects/3)
- 레퍼런스: [random-presenter-picker](https://github.com/hustle-dev/random-presenter-picker)

<br/>

## 🖼️ 완성 화면

### 라이트 모드

<p align="left" width="100%"><video width="800" alt="random-picker-lightmode" src="https://github.com/ella-yschoi/random-picker/assets/123397411/bd04d203-5aea-4db9-a680-9cb010fe42e4" controls></video>

### 다크 모드

<p align="left" width="100%"><video width="800" alt="random-picker-darkmode" src="https://github.com/ella-yschoi/random-picker/assets/123397411/61e00cc4-e8d2-4f17-9080-dfea694b5d16" controls></video>

<br/>

## 🛠️ 기술 스택

- 개발 언어: `TypeScript` `React`
- 스타일: `emotion`
- 빌드: `vite`
- 배포: `vercel`

<br/>

## 🎨 화면별 요구사항

> [Figma Wireframe](https://www.figma.com/file/d7yiW5qlRtl0UhT50FHk1p/Random-Picker?type=design&node-id=0%3A1&mode=design&t=PeWor6U9vNubo9wC-1)

### `MainPage.tsx` 메인 화면

- [x] 타이틀은 `랜덤 피커`로 한다.
- [x] 다크/라이트 모드를 사용할 수 있으며, 새로고침이나 페이지 이동을 하더라도 모드가 유지된다.
- [x] 타이틀 하단에 타이틀 이미지가 뜨며, 다크/라이트 모드에 따라 다른 이미지가 뜬다.
- [x] `참여자 설정` 버튼을 누르면 → 참여자 설정 화면으로 이동한다.
- [x] `당첨자 뽑기` 버튼을 눌렀을 때, 등록된 참여자가 있다면 → 당첨자 뽑기 화면으로 이동한다.
- [x] `당첨자 뽑기` 버튼을 눌렀을 때, 등록된 참여자가 없다면 → `참여자를 먼저 입력해 주세요. \n참여자 설정 화면으로 이동합니다.` 알럿이 뜨며 참여자 설정 화면으로 이동한다.

### `SettingPage.tsx` 참여자 설정 화면

- [x] 타이틀은 `랜덤 피커`로 한다.
- [x] 다크/라이트 모드를 사용할 수 있으며, 새로고침이나 페이지 이동을 하더라도 모드가 유지된다.
- [x] 설명 문구는 `참여자를 입력해 주세요 (6자 이하)` 로 한다.
- [x] input에 아무것도 입력하지 않고 `입력` 버튼을 누르면 → `이름을 입력해 주세요.` 알럿이 뜬다.
- [x] input에 6자를 초과해 입력하여 `입력` 버튼을 누르면 → `참여자 이름은 6자 이하로 입력해 주세요.` 알럿이 뜬다.
- [x] input에 아무것도 입력하지 않고 `완료` 버튼을 누르면 → `1명 이상의 참여자 이름을 입력해 주세요.` 알럿이 뜬다.
- [x] 이름 input에 이름을 입력하면 → 참여자 리스트에 입력한 이름이 보여진다.
- [x] 참여자는 최대 10명까지 입력할 수 있으며, 10명을 초과하면 `참여자는 10명까지만 입력할 수 있어요.` 알럿이 뜬다.
- [x] `초기화` 버튼을 누르면 → 모든 참여자 이름이 삭제된다.
- [x] 참여자 이름을 모두 입력한 후 `완료` 버튼을 누르면 → `참여자 리스트업이 완료되었습니다.` 알럿이 뜨며 → 메인 화면으로 이동한다.
- [x] 다른 화면을 거쳐 다시 들어오더라도 등록된 리스트를 확인할 수 있다.

### `ConfirmPage.tsx` 참여자 확인 화면

- [x] 타이틀은 `랜덤 피커`로 한다.
- [x] 다크/라이트 모드를 사용할 수 있으며, 새로고침이나 페이지 이동을 하더라도 모드가 유지된다.
- [x] 설명 문구는 `참여자를 확인해 주세요.` 로 한다.
- [x] 등록된 참여자 리스트를 한번 더 확인할 수 있도록 리스트가 뜬다.
- [x] 리스트 하단의 `확인` 버튼을 누르면 → 로딩 화면으로 이동한다.

### `LoadingPage.tsx` 로딩 화면

- [x] 타이틀은 `랜덤 피커`로 한다.
- [x] 다크/라이트 모드를 사용할 수 있으며, 새로고침이나 페이지 이동을 하더라도 모드가 유지된다.
- [x] 설명 문구는 `당첨자 뽑는 중.. 잠시만 기다려주세요 🙏🏻` 로 한다.
- [x] 로딩 중일 때는 → 프로세스가 진행 중이라는 gif가 4초동안 보여진다.
- [x] 4초 이후 → 당첨자 확인 화면으로 이동한다.

### `WinnerPage.tsx` 당첨자 확인 화면

- [x] 타이틀은 `랜덤 피커`로 한다.
- [x] 다크/라이트 모드를 사용할 수 있으며, 새로고침이나 페이지 이동을 하더라도 모드가 유지된다.
- [x] 로딩 화면이 끝나면 → 랜덤으로 뽑힌 1명의 당첨자 이름과 함께 축하 gif가 뜬다.
- [x] 당첨자 확인 화면 하단의 `홈으로` 버튼을 누르면 → 메인 화면으로 이동한다.
- [x] 당첨자 확인 화면 하단의 `다시하기` 버튼을 누르면 → 랜덤 픽 프로세스 4초 동안 로딩 화면이 뜬다.
- [x] 랜덤 픽 프로세스는 무한 반복할 수 있다.
