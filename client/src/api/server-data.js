import { toast } from "react-toastify";

const postNewUser = async (username, seasonalChallenges) => {
    console.log(seasonalChallenges);
    try {
        // * Request new user
        const newUserResponse = await fetch('/api/basic-user/new', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                seasonalChallenges20: seasonalChallenges
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
        toast.success(`Hi ${message.data.username}`)
        localStorage.setItem('username', message.data.username);
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

        if (!message.success) {
            toast.error(`Could not get your data 😲, ${message.message}. Refresh and try again`)
            return false;
        }
        return message;
        
    } catch (err) {
        console.log(err);
    }
}

const updateServerData = async (username, seasonalChallenges) => {
    try {
        // * Update Data
        const updateDataResponse = await fetch('/api/basic-user/update', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                target: seasonalChallenges
            }),
            method: 'POST'
        });
        // * Verify Data
        const { message } = await updateDataResponse.json();
        // console.log(data);

        if (!message.success) {
            console.log("Could not update data!");
            return false;
        }
        
        return message.message;
        
    } catch (err) {
        console.log(err);
    }
} 

export  { postNewUser, getServerData, updateServerData };
