- A component that returns another component

Main Goal:
- improve existing components w/o modifying code
- allows us to add extra functionality to an existing component.

- usually starts with lowercase


## Examples
- logs props
```jsx
export const checkProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
// we can now use checkprops HOC in App.jsx or anywhere else like
const UserInfoWrapper = checkProps(UserInfo);
<UserInfoWrapper name="jojo" >
```

- A HOC that adds user props.

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    });

    return <Component {...props} user={user} />;
  };
};

//can be used as
const UserInfoWithUser = includeUser(UserInfo, "2");
...
return <UserInfoWithUser />

```
