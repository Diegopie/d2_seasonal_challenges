import { toast } from "react-toastify";

const postNewUser = async (username, seasonalChallenges) => {
    try {
        // * Request new user
        const newUserResponse = await fetch('/api/basic-user/new', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                seasonalChallenges: seasonalChallenges
            }),
            method: 'POST'
        });
        // * Verify Data
        const data = await newUserResponse.json();
        console.log(data);

        if (!data.success) {
            console.log("Could not create user!");
            toast.error(`Could not create your account 😲, ${data.message.message}`)
            return false;
        }
        toast.success(`Hi ${data.message.username}`)
        return data.message;
        
    } catch (err) {
        console.log(err);
    }
} 

export default postNewUser;