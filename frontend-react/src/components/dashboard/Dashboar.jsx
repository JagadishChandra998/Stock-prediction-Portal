import axios from "axios";
import React, { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            
            try {
                const response = await axiosInstance.get('/protected-view/');
            }
            catch (error) {
                console.error('Error fetching data', error)
            }
        }
        fetchProtectedData();
    }, [])


    return (
        <>
            <div className="container">
                <h1 className="text-light">Dashboard</h1>
            </div>
        </>
    );
}
export default Dashboard;