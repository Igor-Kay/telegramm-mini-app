import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import axios from "axios";
import ProfileIcon from "../../assets/profileIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";
import Slider from "../../components/Slider/Slider";
import "./MainPage.scss";
import ShopCardIcon from "../../assets/shop-card.svg";
import Profile from "../../assets/profile.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainPage = ({ cart, setCart }) => {
  const searchBarBoxRef = useRef(null);
  const [activeTab, setActiveTab] = useState("games");
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(null);
  gsap.registerPlugin(ScrollTrigger);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8080/data");
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

  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (item) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some(
        (cartItem) => cartItem.name === item.name
      );
      if (isAlreadyInCart) {
        alert("Этот товар уже добавлен в корзину!");
        return prevCart;
      }
      return [...prevCart, item];
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-bold">Nexy</div>
        <div className="flex gap-4">
          <Link to="/profile">
            <div className="profileBox">
              <img src={ProfileIcon} alt="Профиль" />
            </div>
          </Link>
          {/* <button onClick={() => navigate("/cart")} className="cart-btn">
            Корзина ({cart.length})
          </button> */}
        </div>
      </div>

      <div className="searchBarBox">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Найти игру или подписку"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 rounded-lg bg-white border border-gray-200"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        <Link to="/cart">
          <div className="shop-card">
            <img src={ShopCardIcon} />
          </div>
        </Link>
        <Link to="/profile">
          <div className="shop-card">
            <img src={Profile} />
          </div>
        </Link>
      </div>

      
      <Slider
        games={filteredGames}
        exchangeRate={exchangeRate}
        addToCart={addToCart}
        cart={cart}
        preview={true}
      />

      <Slider
        games={filteredGames}
        exchangeRate={exchangeRate}
        addToCart={addToCart}
        cart={cart}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {!loading && filteredGames.length > 0
          ? filteredGames.map((game) => (
              <GameCard
                key={game.game_id}
                {...game}
                exchangeRate={exchangeRate}
                addToCart={addToCart}
                isInCart={cart.some((cartItem) => cartItem.name === game.name)}
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

export default MainPage;
