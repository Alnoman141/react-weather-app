import heartIcon from '../../assets/heart.svg'
import redHeartIcon from '../../assets/heart-red.svg'
import { useContext, useState, useEffect } from 'react';
import { FavoriteContext, WeatherContext } from '../../context';

export default function AddToFavourite() {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addToFavourite, removeFromFavourite } = useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const existingFavourite = favourites.find(fav => fav.location === location);
    if (existingFavourite) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [])

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);

    const existingFavourite = favourites.find(fav => fav.location === location);
    if (existingFavourite) {
      removeFromFavourite(location);
    } else {
      addToFavourite(latitude, longitude, location);
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleFavouriteClick}>
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  )
}
