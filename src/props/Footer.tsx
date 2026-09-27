```jsx
import React from "react";

const ExternalArrow = () => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.88001 3.19279L13.6512 3.73254C13.944 3.76567 14.2081 4.02987 14.2413 4.32265L14.781 9.09381C14.8141 9.38659 14.6037 9.59709 14.3109 9.56396C14.0181 9.53084 13.7539 9.26664 13.7208 8.97386L13.3258 5.48255L3.48999 15.3184L2.65546 14.4838L12.4913 4.64802L8.99995 4.25305C8.70717 4.21992 8.44297 3.95573 8.40985 3.66295C8.37673 3.37016 8.58723 3.15967 8.88001 3.19279Z"
      className="fill-black dark:fill-white"
    />
  </svg>
);

const Footer = () => {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kent-harvin-ang-433a89b2/",
    },
    {
      name: "GitHub",
      url: "https://github.com/harvin1438-max/kent-harvin-portfolio",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/harvin143/",
    },
  ];

  return (
    <footer className="w-full bg-transparent px-6 py-10 font-Inter overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Copyright */}
        <div className="text-center md:text-left">
          <span className="text-sm text-black dark:text-white">
            ☻ Made by Kent Harvin Ang
          </span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-5">

          {links.map((link, index) => (
            <React.Fragment key={link.name}>

              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-sm uppercase tracking-wide text-black transition-all duration-300 hover:opacity-60 dark:text-white"
              >
                {link.name}
                <ExternalArrow />
              </a>

              {index < links.length - 1 && (
                <span className="text-black dark:text-white">|</span>
              )}

            </React.Fragment>
          ))}

          {/* Back To Top */}
          <button
            onClick={ToTop}
            aria-label="Back to top"
            className="ml-2 transition-transform duration-300 hover:-translate-y-1"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.8528"
                cy="12"
                r="11.5"
                className="stroke-black dark:stroke-white"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.15891 9.47757L12.6157 6.39201C12.8279 6.20266 13.1718 6.20266 13.3839 6.39201L16.8407 9.47757C17.0528 9.66691 17.0528 9.9739 16.8407 10.1632C16.6286 10.3526 16.2847 10.3526 16.0725 10.1632L13.543 7.90538L13.543 17.25L12.4566 17.25L12.4566 7.90538L9.92709 10.1632C9.71497 10.3526 9.37104 10.3526 9.15891 10.1632C8.94678 9.9739 8.94678 9.66691 9.15891 9.47757Z"
                className="fill-black dark:fill-white"
              />
            </svg>
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
```
