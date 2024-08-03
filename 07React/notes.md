## Configuring tailwand css :

- ### 1. Run npm install -D tailwindcss postcss autoprefixer
- ### 2. Run npx tailwindcss init -p
- ### 3. Edit tailwand.config.js file add `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],`
- ### 4. Add this code to index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## props :

### props are nothing but the properties that we send as a parameter to the component to make the component reusable

```jsx
//eg:passing props
<App name="Melwin" imageName="MyImage1" />

//using props:
function App({ name, imageName }) {
}
```
