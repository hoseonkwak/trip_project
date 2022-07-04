import Logo from "../asset/logo.png";

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <img src={Logo} alt="" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
