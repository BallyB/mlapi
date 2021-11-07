import { writable} from "svelte/store";

export const auth = {
    user: undefined,
    userType: undefined,
    userId: undefined,
    token: undefined
};

const { subscribe, set, update } = writable(auth);

const setAuth = newValue => update(auth => {
    return { ...auth, ...newValue };
});

const reset = () => {
    set(auth);
};

export default {
    subscribe,
    setAuth,
    reset,
}