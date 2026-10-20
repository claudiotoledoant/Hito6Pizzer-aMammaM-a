const Header = () => {
  return (
    <div 
      className="text-white text-center py-5"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>¡Tenemos las mejores pizzas que podrías desear!</p>
      <hr className="w-75 mx-auto" />
    </div>
  );
};

export default Header;