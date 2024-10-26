import { Client } from 'react-native-appwrite';
export const config = {
    endpoint: 'https://cloud.appwrite.io.v1',
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