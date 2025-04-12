
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

# src

* [components/](.\src\components)
  * [GoogleFunction/](.\src\components\GoogleFunction)
    * [GoogleFunction.css](.\src\components\GoogleFunction\GoogleFunction.css)
    * [GoogleFunction.tsx](.\src\components\GoogleFunction\GoogleFunction.tsx)
  * [NewsCard/](.\src\components\NewsCard)
    * [NewsCard.css](.\src\components\NewsCard\NewsCard.css)
    * [NewsCard.tsx](.\src\components\NewsCard\NewsCard.tsx)
  * [Searchbar/](.\src\components\Searchbar)
    * [Searchbar.css](.\src\components\Searchbar\Searchbar.css)
    * [Searchbar.tsx](.\src\components\Searchbar\Searchbar.tsx)
  * [Tabbar/](.\src\components\Tabbar)
    * [Tab.css](.\src\components\Tabbar\Tab.css)
    * [Tab.tsx](.\src\components\Tabbar\Tab.tsx)
* [pages/](.\src\pages)
  * [GoogleLens/](.\src\pages\GoogleLens)
    * [GoogleLens.css](.\src\pages\GoogleLens\GoogleLens.css)
    * [GoogleLens.tsx](.\src\pages\GoogleLens\GoogleLens.tsx)
  * [GoogleListening/](.\src\pages\GoogleListening)
    * [GoogleListening.css](.\src\pages\GoogleListening\GoogleListening.css)
    * [GoogleListening.tsx](.\src\pages\GoogleListening\GoogleListening.tsx)
  * [Home/](.\src\pages\Home)
    * [Home.css](.\src\pages\Home\Home.css)
    * [Home.tsx](.\src\pages\Home\Home.tsx)
  * [PhotoCrop/](.\src\pages\PhotoCrop)
    * [PhotoCrop.css](.\src\pages\PhotoCrop\PhotoCrop.css)
    * [PhotoCrop.tsx](.\src\pages\PhotoCrop\PhotoCrop.tsx)
  * [SearchModal/](.\src\pages\SearchModal)
    * [SearchModal.css](.\src\pages\SearchModal\SearchModal.css)
    * [SearchModal.tsx](.\src\pages\SearchModal\SearchModal.tsx)
  * [SearchPage/](.\src\pages\SearchPage)
    * [SearchPage.css](.\src\pages\SearchPage\SearchPage.css)
    * [SearchPage.tsx](.\src\pages\SearchPage\SearchPage.tsx)
* [theme/](.\src\theme)
  * [variables.css](.\src\theme\variables.css)
* [util/](.\src\util)
  * [hooks/](.\src\util\hooks)
    * [useNativeCamera.tsx](.\src\util\hooks\useNativeCamera.tsx)
  * [constants.ts](.\src\util\constants.ts)
* [App.test.tsx](.\src\App.test.tsx)
* [App.tsx](.\src\App.tsx)
* [main.tsx](.\src\main.tsx)
* [setupTests.ts](.\src\setupTests.ts)
* [vite-env.d.ts](.\src\vite-env.d.ts)

## Features that will be implemented in future
Will Add A Camera Preview for the Google Lens app (will use a Custom Camera Preview instead of Native Camera View)

Will implement Reverse Image Search

