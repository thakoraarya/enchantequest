import { Account, Client, Databases, ID } from 'appwrite';

interface StoryDetails {
    userid: string,
    storyname: string,
    storycontent: string,
    storyId: string,
}
export class Story {
    client = new Client()
    account;
    database;
    dcid: string = '655f403b2d6d9367440d';
    clnid: string = '655f404ab6f7b1105cfc';
    // questionclnid: string = '656118f6a61ce384d2e6';
    // endpoint:string = process.env.REACT_APP_APPWRITE_ENDPOINT;
    // projectid:string = process.env.REACT_APP_APPWRITE_PROJECT;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('655e0bdd11e79ff324ed');
        this.account = new Account(this.client)
        this.database = new Databases(this.client);
    }
    // create new story
    async saveNewStory(details: StoryDetails) {
        try {
            const newstory = await this.database.createDocument(this.dcid, this.clnid, ID.unique(),
                {
                    userid: details.userid,
                    storyname: details.storyname,
                    storycontent: details.storycontent
                }

            );
            if (newstory !== null) {
                return newstory;
            }
        } catch (e) {
            console.log("createStory", e)
        }
    }
    // delete story
    async deleteStory(details: StoryDetails) {
        try {
            await this.database.deleteDocument(this.dcid, this.clnid, details.storyId)
            return true;
        } catch (e) {
            console.log("deleteDocument", e)
            return false;
        }
    }
    // fetch all stories of a user
    async getStories(details: StoryDetails) {
        try {
            if (details.userid !== null) {
                await this.database.getDocument(this.dcid, this.clnid, details.userid)
            }
        } catch (e) {
            console.log("getPost", e)
        }
    }
    // fetch selected story of a user
    async getStory(details: StoryDetails) {
        try {
            if (details.userid !== null) {
                await this.database.getDocument(this.dcid, this.clnid, details.storyId)
            }
        } catch (e) {
            console.log("getPost", e)
        }
    }

}
const storyService = new Story()


export default storyService