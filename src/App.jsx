import Header from "./components/header/Header"
import WeatherBoard from "./components/weather/WeatherBoard"

function App() {
  return (
    <>
      <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
        {/* <div className="@container"> */}
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        {/* </div> */}
      </div>
    </>
  )
}

export default App
