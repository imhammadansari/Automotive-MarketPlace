import axios from "axios";
import { useCallback, useState } from "react";
import { createContext } from "react";

export const SearchVehContext = createContext(null);

export const SearchVehProvider = (props) => {
    const [vehicles, setvehicles] = useState([]);
    const [filteredVehicles, setfilteredVehicles] = useState([]);

    const fetchVehDetails = useCallback(async() => {
        try {
            const response = await axios.get('http://localhost:8000/vehicles/viewvehicles');
            if(response.status === 200) {
                setvehicles(response.data);
                setfilteredVehicles(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const getFilteredVehicles = useCallback((searchValue) => {

        if(!searchValue.trim()){
            setfilteredVehicles(vehicles);
            return;
        }

        const searchTerm = searchValue.toLowerCase().trim();
        const filteredVeh = vehicles.filter(vehicle => {
            const searchFields = [
                vehicle.model,
                vehicle.name,
                vehicle.fuelType,
                vehicle.engine,
                vehicle.make
            ].filter(field => field != null).map(field => field.toString().toLowerCase());

            return searchFields.some(field => field.includes(searchTerm))
        }
            
        )
        setfilteredVehicles(filteredVeh);
    }, [vehicles]);

    return (
        <SearchVehContext.Provider value={{vehicles, filteredVehicles, setfilteredVehicles, getFilteredVehicles, fetchVehDetails}}>
            {props.children}
        </SearchVehContext.Provider>
    )
}