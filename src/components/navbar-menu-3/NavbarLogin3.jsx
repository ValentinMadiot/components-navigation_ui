import { useEffect, useRef } from "react";

const NavbarLogin3 = ({ onClose, onSwitchToSignup }) => {
  const loginRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="nav6__login show-login">
      <form className="nav6__login-form" ref={loginRef}>
        <h2 className="nav6__login-title">Connexion</h2>

        <div className="nav6__login-group">
          <div>
            <label htmlFor="email" className="nav6__login-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Entrez votre email"
              id="email"
              className="nav6__login-input"
            />
          </div>
          <div>
            <label htmlFor="password" className="nav6__login-label">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
              className="nav6__login-input"
            />
          </div>
        </div>

        <div>
          <p className="nav6__login-signup">
            Vous n'avez pas de compte ?{" "}
            <button type="button" onClick={onSwitchToSignup}>
              Inscription
            </button>
          </p>
          <a href="#" className="nav6__login-forgot">
            Mot de passe oublié
          </a>
          <button type="submit" className="nav6__login-button">
            Connexion
          </button>
        </div>
      </form>
      <i className="ri-close-line nav6__login-close" onClick={onClose}></i>
    </div>
  );
};

export default NavbarLogin3;
