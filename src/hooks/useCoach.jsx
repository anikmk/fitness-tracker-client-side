
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCoach = () => {
    const {user,loader} = useContext(AuthContext);
    const [isCoach, setIsCoach] = useState(null);
    const [isCoachLoading, setIsCoachLoading] = useState(true);
    const [isCoachError, setCoachError] = useState(null);

    useEffect(() => {
        const checkCoachStatus = async () => {
            if (!loader && user?.email) {
                try {
                    // Replace 'YOUR_API_URL' with your actual API endpoint
                    const response = await fetch(`http://localhost:5000/users/${user.email}`);
             
                    if (response.ok) {
                        const data = await response.json();
                        console.log('is admin response', data);
                        setIsCoach(data.isCoach);
                    } else {
                        console.error('Failed to fetch admin status');
                        setCoachError('Failed to fetch admin status');
                    }
                } catch (error) {
                    console.error('Error fetching admin status:', error);
                    setCoachError('Error fetching admin status');
                } finally {
                    setIsCoachLoading(false);
                }
            }
        };

        checkCoachStatus();
    }, [loader, user]);

    return [isCoach, isCoachLoading, isCoachError];
};

export default useCoach;