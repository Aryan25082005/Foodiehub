import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/restaurants", label: "Restaurants" },
  { to: "/orders", label: "Orders" },
];

function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trap focus inside drawer when open; return focus on close
  useEffect(() => {
    if (!menuOpen) {
      hamburgerRef.current?.focus();
      return;
    }
    const firstFocusable = drawerRef.current?.querySelector(
      "a, button, [tabindex]:not([tabindex='-1'])"
    );
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    await logout();
    closeMenu();
    navigate("/login");
  };

  return (
    <>
      <nav
        className={`nb-nav${scrolled ? " nb-nav--scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nb-inner">

          {/* ── Logo ── */}
          <Link to="/" className="nb-logo" onClick={closeMenu} aria-label="FoodieHub home">
            <span className="nb-logo-icon" aria-hidden="true">🍔</span>
            <span className="nb-logo-text">
              Foodie<span className="nb-logo-accent">Hub</span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="nb-links" role="menubar" aria-label="Site navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                role="menuitem"
                className={({ isActive }) =>
                  `nb-link${isActive ? " nb-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Right-side actions ── */}
          <div className="nb-actions">

            {/* Cart icon with live badge */}
            <Link
              to="/cart"
              className="nb-cart"
              aria-label={
                totalItems > 0
                  ? `Cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}`
                  : "Cart"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="nb-cart-badge" aria-hidden="true">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Auth block — desktop only */}
            {user ? (
              <div className="nb-profile-wrap">
                <Link to="/profile" className="nb-avatar" aria-label="Your profile">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="nb-avatar-img"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="nb-avatar-initials" aria-hidden="true">
                      {(user.displayName || user.email || "U")
                        .charAt(0)
                        .toUpperCase()}
                    </span>
                  )}
                </Link>
                <button
                  className="nb-signout-btn"
                  onClick={handleLogout}
                  aria-label="Sign out"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="nb-auth-btns">
                <Link to="/login" className="nb-btn nb-btn--ghost">
                  Login
                </Link>
                <Link to="/register" className="nb-btn nb-btn--primary">
                  Register
                </Link>
              </div>
            )}

            {/* Hamburger toggle (mobile only) */}
            <button
              ref={hamburgerRef}
              className={`nb-hamburger${menuOpen ? " nb-hamburger--open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="nb-drawer"
              aria-haspopup="true"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`nb-overlay${menuOpen ? " nb-overlay--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div
        id="nb-drawer"
        ref={drawerRef}
        className={`nb-drawer${menuOpen ? " nb-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!menuOpen}
      >
        <div className="nb-drawer-inner">

          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nb-drawer-link${isActive ? " nb-drawer-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

          <Link to="/cart" className="nb-drawer-link" onClick={closeMenu}>
            Cart
            {totalItems > 0 && (
              <span className="nb-drawer-badge" aria-label={`${totalItems} items`}>
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="nb-drawer-link" onClick={closeMenu}>
                Profile
              </Link>
              <button className="nb-drawer-signout" onClick={handleLogout}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nb-drawer-link" onClick={closeMenu}>
                Login
              </Link>
              <Link
                to="/register"
                className="nb-drawer-link nb-drawer-link--register"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Navbar;