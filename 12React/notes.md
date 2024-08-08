## React - Router

- ## npm i react-router-dom

- ## creating routes :

```jsx
// creating diffrent routes :
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:userid" element={<User />}></Route>
    </>
  )
);
```

- ## Specifying where to render the routes :

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* specifying where to render */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
```

- ## Creating dynamic routes and using it in the components:

```jsx
// Eg : /user/:id where :id is a dynamic varibale that can have any value
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div>User:{userid}</div>;
}

export default User;
```

- ## Link and NavLink :
  - ### Normal 'a' tag refreshes the when clicked but we dont want that so react provides Link and NavLink which are similar but they dont refresh the entire page . Link and NavLink are similar but NavLink provides us props using which we can do modifications based on the url

```jsx
//eg:
<NavLink
  to="/about"
  className={({ isActive }) => `${isActive ? "text-red-300" : "text-black"}`}
>
  About
</NavLink>
```

- ## Outlets :
  - ### Outlets allows us to create an structure with some components are changing continuosly

  ```jsx
  //eg: 
  <Nav>
  <Outlet>
  <Footer>
  //In the eg the nav and footer are fixed the outlet keeps on changing
  ```