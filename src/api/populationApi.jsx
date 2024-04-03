import React from "react";
import axios from "axios";

export const getPopulationData = async () => {
    try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        return response.data;
    } catch (error) {
        // Handle errors here, such as network errors or API errors
        console.error("Error fetching population data:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}