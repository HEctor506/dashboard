import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData() : OpenMeteoResponse | undefined {

    const URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,temperature_2m_max&hourly=temperature_2m,relative_humidity_2m&current=relative_humidity_2m,temperature_2m';

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json() as OpenMeteoResponse;
                setData(json);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return data;

}