import { useEffect, useRef } from "react";

const NavbarSignup3 = ({ onClose, onSwitchToLogin }) => {
  const signupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (signupRef.current && !signupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="nav6__login show-login">
      <form className="nav6__login-form" ref={signupRef}>
        <h2 className="nav6__login-title">Inscription</h2>

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
              placeholder="Créez un mot de passe"
              id="password"
              className="nav6__login-input"
            />
          </div>
        </div>

        <div>
          <p className="nav6__login-signup">
            Vous avez déjà un compte ?{" "}
            <button type="button" onClick={onSwitchToLogin}>
              Connexion
            </button>
          </p>
          <button
            type="submit"
            className="nav6__login-button nav6__signup-button">
            Créer un compte
          </button>
        </div>
      </form>
      <i className="ri-close-line nav6__login-close" onClick={onClose}></i>
    </div>
  );
};

export default NavbarSignup3;
