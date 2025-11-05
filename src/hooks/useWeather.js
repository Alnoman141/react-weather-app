import { useState, useEffect } from 'react';

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: '',
        temperature: null,
        climate: '',
        humidity: null,
        wind: null,
        maxTemp: null,
        minTemp: null,
        cloudPercent: null,
        time: null,
        latitude: null,
        longitude: null,
    });
    
    const [loading, setLoading] = useState({
        state: false,
        message: ''
    });

    const [error, setError] = useState(null);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({ 
                ...loading,
                state: true, 
                message: 'Fetching weather data...'
             });
            const response = await fetch(
                `${import.meta.env.VITE_WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
            );

            if (!response.ok) {
                const errorMsg = `Failed to fetch weather data: ${response.statusText}`;
                throw new Error(errorMsg);
            }

            const data = await response.json();
            setWeatherData({
                ...weatherData,
                location: data?.name,
                temperature: data?.main?.temp,
                climate: data?.weather[0]?.main,
                humidity: data?.main?.humidity,
                wind: data?.wind?.speed,
                maxTemp: data?.main?.temp_max,
                minTemp: data?.main?.temp_min,
                cloudPercent: data?.clouds?.all,
                time: data?.dt,
                latitude: data?.coord?.lat,
                longitude: data?.coord?.lon,
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading({ 
                ...loading,
                state: false, 
                message: ''
             });
        }
    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: 'Finding current location...'
        })
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            },
            (error) => {
                setError(error);
            }
        );
    }, []);

    return {
        weatherData,
        loading,
        error
    };
}

export { useWeather };