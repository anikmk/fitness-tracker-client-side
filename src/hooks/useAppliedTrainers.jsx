import { useEffect, useState } from "react";


const useAppliedTrainers = () => {
    const [appliedTrainers, setAppliedTrainers] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/trainers/pending")
        .then((res) => res.json())
        .then((data) => setAppliedTrainers(data));
    }, []);
    return [appliedTrainers];
};

export default useAppliedTrainers;