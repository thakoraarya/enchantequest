import { Account, Client, ID } from 'appwrite';

interface UserDetails {
    email: string,
    password: string,
    username: string
}

export class Auth {
    client = new Client()
    account;
    // endpoint:string = process.env.REACT_APP_APPWRITE_ENDPOINT;
    // projectid:string = process.env.REACT_APP_APPWRITE_PROJECT;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('655e0bdd11e79ff324ed');
        this.account = new Account(this.client)
    }

    async createAccount(details: UserDetails) {
        try {
            const userAcc = await this.account.create(ID.unique(), details.email, details.password, details.username)
            if (userAcc) {
                return this.login(details)
            }
            console.log(userAcc);

        } catch (e) {
            console.log('createAccount', e)
        }
    }


    createOauthAccount() {
        try {
            const userAcc = this.account.createOAuth2Session('google', 'http://localhost:3000/profile', 'http://localhost:3000/login')
            console.log(userAcc);
            return userAcc

        } catch (e) {
            console.log('createOauthAccount', e)
        }
    }

    async login(details: UserDetails) {
        try {

            return await this.account.createEmailSession(details.email, details.password)


        } catch (e) {
            console.log("login", e)
        }
    }

    async getCurrentUser() {

        try {
            const user = await this.account.get()
            if (user)
                return user;
        } catch (e) {
            console.log("getCurrentUser", e)
        }
        return null;
    }

    async logout() {

        try {
            return await this.account.deleteSessions()
        } catch (e) {
            console.log("logout", e)
        }

    }
}
const authService = new Auth()


export default authService