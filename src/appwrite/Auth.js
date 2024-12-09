import { Client, Account, ID } from "appwrite";
import Conf from "../conf/conf"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(import.meta.env.VITE_APPWRITE_URL)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
        this.account = new Account(this.client)
    }

    async CreateAccount({name,email,password}){
        try {
            const createAccount = await this.account.create(ID.unique(), email, password, name)
            if(createAccount){
                return this.login({email,password})
            }else{
                return createAccount
            }
        } catch (error) {
            console.log("errorrr")
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getAccount(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
        return null
    }
}

const authService = new AuthService();
export default authService
