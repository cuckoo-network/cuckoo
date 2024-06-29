import Link from "@docusaurus/Link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-800">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" href="/" aria-label="Cruip">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="32.443%"
                      x2="104.18%"
                      y2="50%"
                      id="flogo-a"
                    >
                      <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                      <stop stopColor="#7587E4" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="18.591%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="flogo-b"
                    >
                      <stop stopColor="#818CF8" offset="0%" />
                      <stop stopColor="#C7D2FE" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                    <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                    <path
                      fillOpacity=".64"
                      fill="url(#flogo-a)"
                      d="M16 13 0 23l16 9 16-9z"
                    />
                    <path
                      fill="url(#flogo-b)"
                      d="M16 0 0 9.25l16 9.25 15.999-9.25z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Products
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Manage
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Analyse
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cube Launch
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Experimentation
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Channel Partners
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Projects
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Session Recording
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Feature Flags
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Heatmaps
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Correlation Analysis
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
              Company
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Medium"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-indigo-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>
          {/* Links */}
          <div className="text-sm text-slate-600">
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Terms
            </a>{" "}
            ·{" "}
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
