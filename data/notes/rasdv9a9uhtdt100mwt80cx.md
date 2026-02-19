
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