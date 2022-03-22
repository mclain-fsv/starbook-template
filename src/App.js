import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="AppBanner">
        <span className="TextLogo">Starbook</span>
      </header>
      <main className="UseGutters">
        <h1>Home</h1>
        <section>
          <h2>To do:</h2>
            <ol>
              <li>Make a GET request to this endpoint: <code>https://swapi.dev/api/people/1/</code></li>
              <li>Create a card component with the JSON data returned from the endpoint. The card should display:</li>
              <ul>
                <li>Name</li>
                <li>Birthday</li>
                <li>Homeworld</li>
              </ul>
              <li>Create three clickable entities which will toggle a new card on the page that displays additional information about the person:</li>
              <ul>
                <li>Films</li>
                  <ul>
                    <li>Film #</li>
                    <li>Title</li>
                    <li>Director</li>
                    <li>Release Date</li>
                  </ul>
                <li>Starships</li>
                  <ul>
                    <li>Name</li>
                    <li>Starship Class</li>
                  </ul>
                <li>Vehicles</li>
                  <ul>
                    <li>Name</li>
                    <li>Manufacturer</li>
                  </ul>
              </ul>
            </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
