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
    dcid: string = process.env.REACT_APP_APPWRITE_DB as string;
    clnid: string = process.env.REACT_APP_APPWRITE_COLLECTION as string;
    endpoint: string = process.env.REACT_APP_APPWRITE_ENDPOINT as string;
    project: string = process.env.REACT_APP_APPWRITE_PROJECT as string;

    constructor() {
        this.client
            .setEndpoint(this.endpoint)
            .setProject(this.project);
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
                await this.database.listDocuments(this.dcid, this.clnid)
            }
        } catch (e) {
            console.log("getPost", e)
        }
    }
    // fetch selected story of a user
    async getStory(stroyId: string) {
        try {
            const reqStory: any = await this.database.getDocument(this.dcid, this.clnid, stroyId)
            return reqStory as string;

        } catch (e) {
            console.log("getPost", e)
        }
    }

}
const storyService = new Story()


export default storyService