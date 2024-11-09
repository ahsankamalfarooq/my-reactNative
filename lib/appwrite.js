import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    // endpoint: 'https://cloud.appwrite.io',
    platform: 'teamkhr.jsm.aora',
    projectId: "671be62d001910416c8f",
    databaseId : "671be958002b3a8551bd",
    userCollectionId : "671be9d30037f38a8754",
    VideoCollectionId : "671bede1001f6d3632b3",
    storageId : "671d2faa00003095aebd"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;
// console.log(client)
const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)

// Register User

export const createUser = async ( email, password, username ) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(), 
            {
                accountId : newAccount.$id,
                email,
                username,
                avatars: avatarUrl
            }
        )
        return newUser;

    } catch (error) {
        console.log(error)
        throw new Error(error);
        
    }
};

export async function signIn(email, password, username) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error)
    }
}



