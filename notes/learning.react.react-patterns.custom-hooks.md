---
id: rasdv9a9uhtdt100mwt80cx
title: Custom Hooks
desc: ''
updated: 1736329765593
created: 1736327541445
---

- hooks that we create by combining the exuting hooks by React.
- we encapsulate common logic into a hook that can be used by other components. Allowing us to share complex behavior among multiple components.
- must begin with `use`

```jsx
export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};
```