import Page from "./Page"
import {
  WeatherProvider,
  FavoriteProvider,
  LocationProvider,
} from "./providers"

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Page />
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  )
}

export default App
