import { FavoriteContext } from '../context';
import { useLocalStorage } from '../hooks';

const FavoriteProvider = ({ children }) => {
    const [favourites, setfavourites] = useLocalStorage("favourites", []);

    const addToFavourite = (latitude, longitude, location) => {
        const newFavorite = { latitude, longitude, location };
        setfavourites([...favourites, newFavorite]);
    };

    const removeFromFavourite = (location) => {
        const updatedfavourites = favourites.filter(fav => fav.location !== location);
        setfavourites(updatedfavourites);
    };

    return (
        <FavoriteContext.Provider value={{ favourites, addToFavourite, removeFromFavourite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export { FavoriteProvider };