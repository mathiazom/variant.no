import Link from 'next/link';
import white from 'src/summersplash2022/components/header/header.module.css';
import black from 'src/summersplash2022/components/header/headerBlack.module.css';
import { and } from 'src/utils/css';
const Header = (props: { white: boolean }) => {
  if (props.white) {
    return (
      <div className={and(white.main__inner)}>
        <header className={white.header}>
          <h1 className={white.header__logo}>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="28"
                  viewBox="0 0 84 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_559_386)">
                    <path
                      d="M3.2972 7.76387L6.59439 14.64L9.8785 7.76387H13.1888L6.56822 20.85L0 7.76387H3.2972Z"
                      fill="white"
                    />
                    <path
                      d="M24.114 7.76387H27.071V20.0077H24.114V18.7255C22.9016 19.815 21.5975 20.3597 20.2019 20.3597C18.4399 20.3597 16.9832 19.7479 15.8318 18.5244C14.6891 17.2757 14.1178 15.7169 14.1178 13.8481C14.1178 12.0128 14.6891 10.4833 15.8318 9.25978C16.9745 8.03623 18.405 7.42446 20.1234 7.42446C21.6062 7.42446 22.9364 8.01109 24.114 9.18436V7.76387ZM17.1271 13.8481C17.1271 15.0214 17.4542 15.9767 18.1084 16.7142C18.7801 17.4601 19.6262 17.833 20.6467 17.833C21.7371 17.833 22.6181 17.4726 23.2897 16.7519C23.9614 16.0061 24.2972 15.0591 24.2972 13.9109C24.2972 12.7628 23.9614 11.8158 23.2897 11.07C22.6181 10.3409 21.7458 9.97631 20.6729 9.97631C19.6611 9.97631 18.815 10.3451 18.1346 11.0825C17.4629 11.8284 17.1271 12.7502 17.1271 13.8481Z"
                      fill="white"
                    />
                    <path
                      d="M30.7869 7.76387H33.7308V8.85752C34.2717 8.31279 34.7514 7.93986 35.1701 7.73872C35.5975 7.52921 36.1034 7.42446 36.6878 7.42446C37.4642 7.42446 38.2754 7.66749 39.1215 8.15356L37.7738 10.7431C37.2156 10.3576 36.6704 10.1649 36.1383 10.1649C34.5333 10.1649 33.7308 11.3298 33.7308 13.6595V20.0077H30.7869V7.76387Z"
                      fill="white"
                    />
                    <path
                      d="M44.172 7.76387V20.0077H41.228V7.76387H44.172ZM40.7832 2.67273C40.7832 2.17828 40.9707 1.75088 41.3458 1.39052C41.7209 1.03016 42.1701 0.849976 42.6935 0.849976C43.2255 0.849976 43.6791 1.03016 44.0542 1.39052C44.4293 1.7425 44.6168 2.17409 44.6168 2.6853C44.6168 3.19651 44.4293 3.63229 44.0542 3.99265C43.6878 4.35301 43.2386 4.53319 42.7065 4.53319C42.1745 4.53319 41.7209 4.35301 41.3458 3.99265C40.9707 3.63229 40.7832 3.19232 40.7832 2.67273Z"
                      fill="white"
                    />
                    <path
                      d="M57.2953 7.76387H60.2523V20.0077H57.2953V18.7255C56.0829 19.815 54.7788 20.3597 53.3832 20.3597C51.6212 20.3597 50.1645 19.7479 49.0131 18.5244C47.8704 17.2757 47.2991 15.7169 47.2991 13.8481C47.2991 12.0128 47.8704 10.4833 49.0131 9.25978C50.1558 8.03623 51.5863 7.42446 53.3047 7.42446C54.7875 7.42446 56.1178 8.01109 57.2953 9.18436V7.76387ZM50.3084 13.8481C50.3084 15.0214 50.6355 15.9767 51.2897 16.7142C51.9614 17.4601 52.8075 17.833 53.828 17.833C54.9184 17.833 55.7994 17.4726 56.471 16.7519C57.1427 16.0061 57.4785 15.0591 57.4785 13.9109C57.4785 12.7628 57.1427 11.8158 56.471 11.07C55.7994 10.3409 54.9271 9.97631 53.8542 9.97631C52.8424 9.97631 51.9963 10.3451 51.3159 11.0825C50.6442 11.8284 50.3084 12.7502 50.3084 13.8481Z"
                      fill="white"
                    />
                    <path
                      d="M63.9682 7.76387H66.9252V8.89523C67.9545 7.91471 69.1146 7.42446 70.4056 7.42446C71.8885 7.42446 73.0442 7.87281 73.8729 8.76952C74.5882 9.53215 74.9458 10.7766 74.9458 12.503V20.0077H71.9888V13.1693C71.9888 11.9625 71.8143 11.1286 71.4654 10.6677C71.1252 10.1984 70.5059 9.96374 69.6075 9.96374C68.6305 9.96374 67.9371 10.2738 67.5271 10.894C67.1259 11.5057 66.9252 12.5743 66.9252 14.0995V20.0077H63.9682V7.76387Z"
                      fill="white"
                    />
                    <path
                      d="M81.7103 10.4037V20.0077H78.7664V10.4037H77.5103V7.76387H78.7664V3.27612H81.7103V7.76387H84V10.4037H81.7103Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_559_386">
                      <rect
                        width="84"
                        height="20"
                        fill="white"
                        transform="translate(0 0.849976)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </h1>

          <span hidden id="menu-label">
            Hovedmeny
          </span>

          <button
            className={white.burgerButtonContainer}
            aria-labelledby="menu-label"
          ></button>

          <nav className={and(white.header__nav)} aria-labelledby="menu-label">
            <ul className={white.header__nav__ul}>
              <li>
                <Link href="/jobs">
                  <a>Bli en variant</a>
                </Link>
              </li>
              <li>
                <a href="http://handbook.variant.no" rel="noopener">
                  Håndbok
                </a>
              </li>
              <li>
                <a href="http://variant.blog" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <Link href="/ansatte">
                  <a>Alle varianter</a>
                </Link>
              </li>
              <li id="dont_show">
                <a
                  href="https://twitter.com/intent/tweet?screen_name=variant_as"
                  rel="noopener"
                >
                  Si hallo!
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } else {
    return (
      <div className={and(black.main__inner)}>
        <header className={black.header}>
          <h1 className={black.header__logo}>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="28"
                  viewBox="0 0 84 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_559_375)">
                    <path
                      d="M3.2972 7.76387L6.59439 14.64L9.8785 7.76387H13.1888L6.56822 20.85L0 7.76387H3.2972Z"
                      fill="#333333"
                    />
                    <path
                      d="M24.114 7.76387H27.071V20.0077H24.114V18.7255C22.9016 19.815 21.5975 20.3597 20.2019 20.3597C18.4399 20.3597 16.9832 19.7479 15.8318 18.5244C14.6891 17.2757 14.1178 15.7169 14.1178 13.8481C14.1178 12.0128 14.6891 10.4833 15.8318 9.25978C16.9745 8.03623 18.405 7.42446 20.1234 7.42446C21.6062 7.42446 22.9364 8.01109 24.114 9.18436V7.76387ZM17.1271 13.8481C17.1271 15.0214 17.4542 15.9767 18.1084 16.7142C18.7801 17.4601 19.6262 17.833 20.6467 17.833C21.7371 17.833 22.6181 17.4726 23.2897 16.7519C23.9614 16.0061 24.2972 15.0591 24.2972 13.9109C24.2972 12.7628 23.9614 11.8158 23.2897 11.07C22.6181 10.3409 21.7458 9.97631 20.6729 9.97631C19.6611 9.97631 18.815 10.3451 18.1346 11.0825C17.4629 11.8284 17.1271 12.7502 17.1271 13.8481Z"
                      fill="#333333"
                    />
                    <path
                      d="M30.7869 7.76387H33.7308V8.85752C34.2717 8.31279 34.7514 7.93986 35.1701 7.73872C35.5975 7.52921 36.1034 7.42446 36.6878 7.42446C37.4642 7.42446 38.2754 7.66749 39.1215 8.15356L37.7738 10.7431C37.2156 10.3576 36.6704 10.1649 36.1383 10.1649C34.5333 10.1649 33.7308 11.3298 33.7308 13.6595V20.0077H30.7869V7.76387Z"
                      fill="#333333"
                    />
                    <path
                      d="M44.172 7.76387V20.0077H41.228V7.76387H44.172ZM40.7832 2.67273C40.7832 2.17828 40.9707 1.75088 41.3458 1.39052C41.7209 1.03016 42.1701 0.849976 42.6935 0.849976C43.2255 0.849976 43.6791 1.03016 44.0542 1.39052C44.4293 1.7425 44.6168 2.17409 44.6168 2.6853C44.6168 3.19651 44.4293 3.63229 44.0542 3.99265C43.6878 4.35301 43.2386 4.53319 42.7065 4.53319C42.1745 4.53319 41.7209 4.35301 41.3458 3.99265C40.9707 3.63229 40.7832 3.19232 40.7832 2.67273Z"
                      fill="#333333"
                    />
                    <path
                      d="M57.2953 7.76387H60.2523V20.0077H57.2953V18.7255C56.0829 19.815 54.7788 20.3597 53.3832 20.3597C51.6212 20.3597 50.1645 19.7479 49.0131 18.5244C47.8704 17.2757 47.2991 15.7169 47.2991 13.8481C47.2991 12.0128 47.8704 10.4833 49.0131 9.25978C50.1558 8.03623 51.5863 7.42446 53.3047 7.42446C54.7875 7.42446 56.1178 8.01109 57.2953 9.18436V7.76387ZM50.3084 13.8481C50.3084 15.0214 50.6355 15.9767 51.2897 16.7142C51.9614 17.4601 52.8075 17.833 53.828 17.833C54.9184 17.833 55.7994 17.4726 56.471 16.7519C57.1427 16.0061 57.4785 15.0591 57.4785 13.9109C57.4785 12.7628 57.1427 11.8158 56.471 11.07C55.7994 10.3409 54.9271 9.97631 53.8542 9.97631C52.8424 9.97631 51.9963 10.3451 51.3159 11.0825C50.6442 11.8284 50.3084 12.7502 50.3084 13.8481Z"
                      fill="#333333"
                    />
                    <path
                      d="M63.9682 7.76387H66.9252V8.89523C67.9545 7.91471 69.1146 7.42446 70.4056 7.42446C71.8885 7.42446 73.0442 7.87281 73.8729 8.76952C74.5882 9.53215 74.9458 10.7766 74.9458 12.503V20.0077H71.9888V13.1693C71.9888 11.9625 71.8143 11.1286 71.4654 10.6677C71.1252 10.1984 70.5059 9.96374 69.6075 9.96374C68.6305 9.96374 67.9371 10.2738 67.5271 10.894C67.1259 11.5057 66.9252 12.5743 66.9252 14.0995V20.0077H63.9682V7.76387Z"
                      fill="#333333"
                    />
                    <path
                      d="M81.7103 10.4037V20.0077H78.7664V10.4037H77.5103V7.76387H78.7664V3.27612H81.7103V7.76387H84V10.4037H81.7103Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_559_375">
                      <rect
                        width="84"
                        height="20"
                        fill="white"
                        transform="translate(0 0.849976)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </h1>

          <span hidden id="menu-label">
            Hovedmeny
          </span>

          <button
            className={black.burgerButtonContainer}
            aria-labelledby="menu-label"
          ></button>

          <nav className={and(black.header__nav)} aria-labelledby="menu-label">
            <ul className={black.header__nav__ul}>
              <li>
                <Link href="/jobs">
                  <a>Bli en variant</a>
                </Link>
              </li>
              <li>
                <a href="http://handbook.variant.no" rel="noopener">
                  Håndbok
                </a>
              </li>
              <li>
                <a href="http://variant.blog" rel="noopener">
                  Blogg
                </a>
              </li>
              <li>
                <Link href="/ansatte">
                  <a>Alle varianter</a>
                </Link>
              </li>
              <li id="dont_show">
                <a
                  href="https://twitter.com/intent/tweet?screen_name=variant_as"
                  rel="noopener"
                >
                  Si hallo!
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
};

export default Header;
