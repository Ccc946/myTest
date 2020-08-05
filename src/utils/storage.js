class Storage {
    constructor(kyeValue) {
        this.key = kyeValue
    }
    get() {
        let value;
        try {
            return (value = window.localStorage.getItem(this.key)) &&
            typeof value !== 'undefined'
            ? JSON.parse(value)
            : undefined;
        } catch (err) {}
        return undefined;
    }
    set(data) {
        window.localStorage.setItem(this.key, JSON.stringify(data));
    }
    del() {
        window.localStorage.removeItem(this.key);
    }
}

export const token = new Storage('token'); //登录token