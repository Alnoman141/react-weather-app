import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"
import { WeatherProvider, FavoriteProvider } from "./providers"

function App() {
  return (
    <>
      <WeatherProvider>
        <FavoriteProvider>
          <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoriteProvider>
      </WeatherProvider>
    </>
  )
}

export default App
