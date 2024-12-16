function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

function App() {
    const [name, setName] = useLocalStorage('name', 'John');

    return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
