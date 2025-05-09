// === utility.js ===
// Utility Functions for Cookie Handling
function setCookie(name, value, days = 1) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 86400000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(cname) === 0) return c.substring(cname.length);
    }
    return "";
}

function removeCookie(name) {
    setCookie(name, "", -1);
}

// === Secure Request Utility ===
function carbonRequest(url, method = "GET") {
    const request = {
        url,
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: null,
        requestType(type) {
            this.method = type.toUpperCase();
            return this;
        },
        setBody(data) {
            this.body = JSON.stringify(data);
            return this;
        },
        setHeader(key, value) {
            this.headers[key] = value;
            return this;
        },
        response(callback) {
            const config = {
                method: this.method,
                headers: this.headers
            };
            if (this.method !== "GET" && this.body) {
                config.body = this.body;
            }
            fetch(this.url, config)
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                    return res.json();
                })
                .then(callback)
                .catch(err => {
                    console.error("Request Error:", err);
                    callback(null);
                });
        }
    };
    return request;
}

// === Export as a single utility object (optional global use) ===
window.CarbonUtils = {
    setCookie,
    getCookie,
    removeCookie,
    carbonRequest
};
