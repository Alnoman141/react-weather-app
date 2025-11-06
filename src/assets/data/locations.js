const locations = [
    {
        "location": "New York",
        "latitude": 40.7128,
        "longitude": -74.0060
    },
    {
        "location": "Los Angeles",
        "latitude": 34.0522,
        "longitude": -118.2437
    },
    {
        "location": "Chicago",
        "latitude": 41.8781,
        "longitude": -87.6298
    },
    {
        "location": "Dhaka",
        "latitude": 23.8103,
        "longitude": 90.4125
    },
    {
        "location": "Kolkata",
        "latitude": 22.5726,
        "longitude": 88.3639
    },
    {
        "location": "Singapore",
        "latitude": 1.3521,
        "longitude": 103.8198
    },
    {
        "location": "Sydney",
        "latitude": -33.8688,
        "longitude": 151.2093
    },
    {
        "location": "Malaysia",
        "latitude": 4.2105,
        "longitude": 101.9758
    },
    {
        "location": "London",
        "latitude": 51.5074,
        "longitude": -0.1278
    },
    {
        "location": "Tokyo",
        "latitude": 35.682839,
        "longitude": 139.759455
    },
    {
        "location": "Toronto",
        "latitude": 43.7,
        "longitude": -79.42
    }
]

function getLocations() {
    return locations;
}

function getLocationNames(name) {
    if (!name) return null;

    const filtered = locations.filter(loc =>loc.location.toLowerCase().includes(name.toLowerCase()));

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            "location": "",
            "latitude": 0,
            "longitude": 0
        };
        return defaultLocation;
    }
}

export { getLocations, getLocationNames };
