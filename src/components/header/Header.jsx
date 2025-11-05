import Favourite from "./Favourite";
import FavouriteLocations from "./FavouriteLocations";
import Logo from "./Logo";
import Search from "./Search";
import { useState } from "react";

export default function Header() {
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleFavourites = () => {
    setShowFavourites(!showFavourites);
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={toggleFavourites} />
          {showFavourites && <FavouriteLocations />}
        </div>
      </nav>
    </header>
  )
}
