const url = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

const API_Routes = {
    "baseURL": url,
    "congress": {
        "states": "/congress/states",
        "members": "/congress/members",
        "member": "/congress/member"
    },
    "user": {
        "login": "/user/login",
        "singup": "/user/signup",
        "delete": "/user/delete",
        "getSubs": "/user/subs",
        "addSub": "/user/subs/add",
        "removeSub": "/user/subs/remove"
    }
}

export default API_Routes;