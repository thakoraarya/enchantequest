import {Account, Client, Databases, ID} from 'appwrite';

interface UserDetails {
    email: string,
    password: string,
    username?: string
}

interface StoryDetails {
    userid: string,
    storyname: string,
    storycontent: string,
    slug?: string,
}


export class Auth {
    client = new Client()
    account;
    database;
    dcid: string = '655f403b2d6d9367440d';
    clnid: string = '655f404ab6f7b1105cfc';
    // endpoint:string = process.env.REACT_APP_APPWRITE_ENDPOINT;
    // projectid:string = process.env.REACT_APP_APPWRITE_PROJECT;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('655e0bdd11e79ff324ed');
        this.account = new Account(this.client)
        this.database = new Databases(this.client);
    }

    async createStory(details: StoryDetails) {
        try {
            const documentId = ID.unique();
            const slug = details.slug || documentId;

            await this.database.createDocument(this.dcid, this.clnid, slug,
                {
                    userid: details.userid,
                    storyname: details.storyname,
                    storycontent: details.storycontent
                }
            )
        } catch (e) {
            console.log("createStory", e)
        }
    }

    async deleteStory(details: StoryDetails) {
        try {
            if (details.slug != null) {
                await this.database.deleteDocument(this.dcid, this.clnid, details.slug)
            }
            return true;
        } catch (e) {
            console.log("deleteDocument", e)
            return false;
        }
    }

    async getStories(details: StoryDetails) {
        try {
            if (details.slug != null) {
                await this.database.getDocument(this.dcid, this.clnid, details.userid)
            }
        } catch (e) {
            console.log("getPost", e)
        }
    }
}