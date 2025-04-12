
# Google App Clone Using Capacitor JS and React JS

A simple and responsive clone of the Google Search App built using Capacitor and React. This project replicates the core UI and basic functionality of the Google search interface.


## Features
Google-like search homepage UI

Responsive layout for mobile and desktop

Search functionality using Google Search redirect

Clean and minimal design

Voice Search (including News, Videos, Images)

Text Search (including News, Videos, Images)

Photo Capture and Cropping
## Tech Stack
React.js

Capacitor JS

Ionic

Material UI

CSS
## Installation
```
git clone https://github.com/lkm14001/Google-Lens-Clone-Mobile-APP.git 

cd Google-Lens-Clone-Mobile-APP

npm Install

ionic cap run android --livereload --external

ionic cap run ios --livereload --external

```

To sync newly updated packages

`ionic cap sync`

To Open project in android studio

`ionic cap open android`
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_RAPID_API_KEY`

`VITE_IMAGE_SEARCH`

`VITE_NEWS_SEARCH`

`VITE_TEXT_SEARCH`

`VITE_VIDEO_SEARCH`


## File Structure
```
┣ 📂android
┣ 📂assets
┣ 📂cypress
┣ 📂dist
┣ 📂icons
┣ 📂ios
┣ 📂public
┣ 📂src
┃ ┣ 📂components
┃ ┃ ┣ 📂GoogleFunction
┃ ┃ ┃ ┣ 📜GoogleFunction.css
┃ ┃ ┃ ┗ 📜GoogleFunction.tsx
┃ ┃ ┣ 📂NewsCard
┃ ┃ ┃ ┣ 📜NewsCard.css
┃ ┃ ┃ ┗ 📜NewsCard.tsx
┃ ┃ ┣ 📂Searchbar
┃ ┃ ┃ ┣ 📜Searchbar.css
┃ ┃ ┃ ┗ 📜Searchbar.tsx
┃ ┃ ┗ 📂Tabbar
┃ ┃   ┣ 📜Tab.css
┃ ┃   ┗ 📜Tab.tsx
┃ ┣ 📂pages
┃ ┃ ┣ 📂GoogleLens
┃ ┃ ┃ ┣ 📜GoogleLens.css
┃ ┃ ┃ ┗ 📜GoogleLens.tsx
┃ ┃ ┣ 📂GoogleListening
┃ ┃ ┃ ┣ 📜GoogleListening.css
┃ ┃ ┃ ┗ 📜GoogleListening.tsx
┃ ┃ ┣ 📂Home
┃ ┃ ┃ ┣ 📜Home.css
┃ ┃ ┃ ┗ 📜Home.tsx
┃ ┃ ┣ 📂PhotoCrop
┃ ┃ ┃ ┣ 📜PhotoCrop.css
┃ ┃ ┃ ┗ 📜PhotoCrop.tsx
┃ ┃ ┣ 📂SearchModal
┃ ┃ ┃ ┣ 📜SearchModal.css
┃ ┃ ┃ ┗ 📜SearchModal.tsx
┃ ┃ ┗ 📂SearchPage
┃ ┃   ┣ 📜SearchPage.css
┃ ┃   ┗ 📜SearchPage.tsx
┃ ┣ 📂theme
┃ ┃ ┗ 📜variables.css
┃ ┣ 📂util
┃ ┃ ┣ 📂hooks
┃ ┃ ┃ ┗ 📜useNativeCamera.tsx
┃ ┃ ┗ 📜constants.ts
┃ ┣ 📜App.test.tsx
┃ ┣ 📜App.tsx
┃ ┣ 📜main.tsx
┃ ┣ 📜setupTests.ts
┃ ┗ 📜vite-env.d.ts
┣ 📜.browserslistrc
┣ 📜.env
┣ 📜.gitignore
┣ 📜capacitor.config.ts
┣ 📜cypress.config.ts
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜ionic.config.json
┣ 📜package.json
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┗ 📜vite.config.ts
```

## Features that will be implemented in future
Will Add A Camera Preview for the Google Lens app (will use a Custom Camera Preview instead of Native Camera View)

Will implement Reverse Image Search

