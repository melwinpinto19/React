- ## Context API :

  - ### In React if child component wants to access the parents props then the parent would have to send the props to the child when there is deeper nesting this thing becomes very difficult to manage so we use the concept of Context API which solves this issue

- ## Creating Context API :

```jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

- ## Specifying which components have the access :

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

<UserContextProvider>
  <h1>Hello</h1>
  <Login />
  <Profile />
</UserContextProvider>;
```
