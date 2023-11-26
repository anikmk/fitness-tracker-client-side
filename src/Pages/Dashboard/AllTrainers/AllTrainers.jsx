import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllTrainers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainer');
            return res.data;
        }
    })
    return (
        <div>
            all trainers : {trainers.length}
        </div>
    );
};

export default AllTrainers;