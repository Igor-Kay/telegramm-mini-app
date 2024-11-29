import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import ProfileIcon from "../public/assets/profileIcon.svg";

const GameCard = ({ name, price, description, photos, exchangeRate }) => {
  const cleanPrice = price.replace("€", "").replace(",", ".");
  const numericPrice = parseFloat(cleanPrice);

  const priceInRubles = (numericPrice * exchangeRate).toFixed(2);

  return (
    <div className="gameCardBox bg-white  shadow mb-4">
      <img src={photos} alt={name} className="w-full h-fit object-cover " />
      <div className="p-4">
        <h3 className=" gameName font-medium text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-blue-500 font-bold">
              {priceInRubles} руб.
            </span>
          </div>
        </div>
        {/* <div className="text-sm text-gray-500 mb-3">{description}</div> */}
        <button className="shopCardBox w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          В корзину
        </button>
      </div>
    </div>
  );
};

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg ${
      active ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
    } font-medium text-sm`}
  >
    {children}
  </button>
);

const PlayStationStore = () => {
  const [activeTab, setActiveTab] = useState("games");
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/data");
        const data = await response.json();
        if (data && data.games) {
          setGames(data.games);
          setGenres(data.genres);
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/EUR"
        );
        setExchangeRate(response.data.rates.RUB);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setError("Ошибка при получении курса валют");
      }
    };

    fetchData();
    fetchExchangeRate();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-bold">Игры для PlayStation за 50%</div>
        <div className="profileIcon">
          <img src={ProfileIcon} alt="" />
        </div>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Я ищу..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 rounded-lg bg-white border border-gray-200"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      <div className="flex gap-2 mb-6">
        <TabButton
          active={activeTab === "games"}
          onClick={() => setActiveTab("games")}
        >
          ИГРЫ ЗА 50%
        </TabButton>
        <TabButton
          active={activeTab === "psplus"}
          onClick={() => setActiveTab("psplus")}
        >
          PS PLUS ЗА 50%
        </TabButton>
        <TabButton
          active={activeTab === "account"}
          onClick={() => setActiveTab("account")}
        >
          ЛИЧНЫЙ АКК
        </TabButton>
      </div>

      {loading && (
        <div className="text-center py-4 text-gray-500">Загрузка игр...</div>
      )}

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {!loading && filteredGames.length > 0
          ? filteredGames.map((game) => (
              <GameCard
                key={game.game_id}
                {...game}
                exchangeRate={exchangeRate}
              />
            ))
          : !loading && (
              <div className="col-span-2 text-center text-gray-500">
                Игры не найдены
              </div>
            )}
      </div>
    </div>
  );
};

export default PlayStationStore;