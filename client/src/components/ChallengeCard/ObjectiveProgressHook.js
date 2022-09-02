import { useState } from "react";


const ObjectiveProgressHook = (progress) => {
    // console.log(progress);

    const [objectiveProgress, setObjectiveProgress] = useState(() => {
        return progress;
    }
    );


    return [objectiveProgress, setObjectiveProgress]
}

export default ObjectiveProgressHook;