import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAppliedTrainers = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    // const [appliedTrainers, setAppliedTrainers] = useState([]);
    // useEffect(() => {
    //   fetch("http://localhost:5000/trainers/pending")
    //     .then((res) => res.json())
    //     .then((data) => setAppliedTrainers(data));
    // }, []);
    // return [appliedTrainers];
   
    
    const {refetch, data: applied = [] } = useQuery({
        queryKey:['panding',user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get('/trainers/pending');
            return res.data
        }
    })
    return [applied,refetch]
};

export default useAppliedTrainers;