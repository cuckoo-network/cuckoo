export const TopNav = () => {
  return (
    <nav aria-label="Main" className="navbar navbar--fixed-top">
      <div className="navbar__inner">
        <div className="navbar__items">
          <button
            aria-label="Toggle navigation bar"
            aria-expanded="false"
            className="navbar__toggle clean-btn"
            type="button"
          >
            <svg width={30} height={30} viewBox="0 0 30 30" aria-hidden="true">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={2}
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>
          <a className="navbar__brand" href="/">
            <div className="navbar__logo">
              <img
                src="https://cuckoo.network/img/favicon.png"
                alt="Cuckoo Network Logo"
                className="themedComponent_mlkZ themedComponent--dark_xIcU"
              />
            </div>
            <b className="navbar__title text--truncate">Cuckoo</b>
          </a>
          <a className="navbar__item navbar__link" href="/docs/cuckoo-network">
            Docs
          </a>
          <a className="navbar__item navbar__link" href="/about-us">
            About
          </a>
          <a className="navbar__item navbar__link" href="/blog">
            Blog
          </a>
        </div>
        <div className="navbar__items navbar__items--right">
          <a
            href="https://scan.cuckoo.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__item navbar__link"
          >
            Testnet Pre Alpha
            <svg
              width="13.5"
              height="13.5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="iconExternalLink_nPIU"
            >
              <path
                fill="currentColor"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              />
            </svg>
          </a>
          <a
            href="https://testnet-scan.cuckoo.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__item navbar__link"
          >
            Testnet Sepolia
            <svg
              width="13.5"
              height="13.5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="iconExternalLink_nPIU"
            >
              <path
                fill="currentColor"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              />
            </svg>
          </a>
          <a
            href="https://cuckoo.network/staking"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__item navbar__link"
          >
            Staking
            <svg
              width="13.5"
              height="13.5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="iconExternalLink_nPIU"
            >
              <path
                fill="currentColor"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
              />
            </svg>
          </a>
          <div className="navbarSearchContainer_Bca1" />
        </div>
      </div>
      <div role="presentation" className="navbar-sidebar__backdrop" />
    </nav>
  );
};
