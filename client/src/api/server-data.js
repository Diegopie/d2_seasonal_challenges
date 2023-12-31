import { toast } from "react-toastify";
import { allLocalData } from "./parseServerData";

const postNewUser = async (username) => {
    try {
        // * Request new user
        const newUserResponse = await fetch('/api/basic-user/newUpdated', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
            }),
            method: 'POST'
        });
        // * Verify Data
        const { message } = await newUserResponse.json();

        if (!message.success) {
            // console.log("Could not create user!");
            toast.error(`Could not create your account 😲, ${message.note}. Refresh and try again`)
            return false;
        }
        // toast.success(`Hi ${message.data.username}`)
        // console.log(message);
        localStorage.setItem('username', message.data.username);
        localStorage.setItem('unauth', false)
        document.location.href = '/weekly';
        return true;
        
    } catch (err) {
        console.log(err);
    }
} 

const getServerData = async (username, ) => {
    try {
        // * Request user Data
        const getServerDataResponse = await fetch('/api/basic-user/data', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
            }),
            method: 'POST'
        });
        // * Verify Data
        const {message} = await getServerDataResponse.json();

        // console.log(message);

        if (!message.success) {
            toast.error(`Could not get your data 😲, ${message.message}. Refresh and try again`)
            return false;
        }
        return message;
        
    } catch (err) {
        console.log(err);
    }
}

const updateServerData = async () => {
    const username = localStorage.getItem('username')
    try {
        const allData = allLocalData()
        // * Update Data
        const updateDataResponse = await fetch('/api/basic-user/update', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                seasonalChallenges: allData
            }),
            method: 'POST'
        });
        // * Verify Data
        const { message } = await updateDataResponse.json();
        // console.log(message);

        if (!message.success) {
            console.log("Could not update data!");
            return false;
        }

        return allData;
        
        
    } catch (err) {
        console.log(err);
    }
} 

export  { postNewUser, getServerData, updateServerData };
