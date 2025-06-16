import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavButton.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.12,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const NavButton = () => {
  return (
    <motion.div
      className="side-nav-menu"
      variants={containerVariants}
      initial="hidden"
      animate="show">
      {/* Bottom Navbar */}
      <motion.div className="nav-section" variants={linkVariants}>
        <h2>Barre du Bas</h2>
        <ul>
          <motion.li variants={linkVariants}>
            <Link to="/bottom-navbar-1">1</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/bottom-navbar-2">2</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/bottom-navbar-3">3</Link>
          </motion.li>
        </ul>
      </motion.div>

      {/* Top Navbar */}
      <motion.div className="nav-section" variants={linkVariants}>
        <h2>Barre du Haut</h2>
        <ul>
          <motion.li variants={linkVariants}>
            <Link to="/navbar-menu-1">1</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/navbar-menu-2">2</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/navbar-menu-3">3</Link>
          </motion.li>
        </ul>
      </motion.div>

      {/* Sidebar */}
      <motion.div className="nav-section" variants={linkVariants}>
        <h2>Barre Latérale</h2>
        <ul>
          <motion.li variants={linkVariants}>
            <Link to="/sidebar-menu-1">1</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/sidebar-menu-2">2</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/sidebar-menu-3">3</Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default NavButton;
