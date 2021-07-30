import "./App.scss";
import logo from "./assets/img/poo.svg";
import { UserMenu } from "./components";
import { Home, UserProfile, Login, Register } from "./pages";
import { Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}>
            <img width={58} height={53} src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to={"/"}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M53.5166 23.9223C53.5154 23.9211 53.5141 23.9198 53.5128 23.9186L31.0772 1.48376C30.1209 0.527039 28.8494 0 27.497 0C26.1446 0 24.8732 0.526619 23.9164 1.48335L1.49253 23.9068C1.48498 23.9144 1.47743 23.9223 1.46987 23.9299C-0.493932 25.905 -0.490575 29.1096 1.47953 31.0798C2.3796 31.9802 3.56838 32.5018 4.8394 32.5564C4.89101 32.5614 4.94304 32.5639 4.99549 32.5639H5.8897V49.0746C5.8897 52.3417 8.54797 55 11.8159 55H20.5935C21.4831 55 22.2048 54.2787 22.2048 53.3887V40.4443C22.2048 38.9534 23.4175 37.7407 24.9084 37.7407H30.0856C31.5765 37.7407 32.7892 38.9534 32.7892 40.4443V53.3887C32.7892 54.2787 33.5105 55 34.4006 55H43.1781C46.4461 55 49.1043 52.3417 49.1043 49.0746V32.5639H49.9335C51.2855 32.5639 52.5569 32.0373 53.5141 31.0806C55.4863 29.1071 55.4871 25.8971 53.5166 23.9223Z"
                      fill="#E5E5E5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="55" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>

              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6855 6.13831C11.15 6.13831 6.64653 10.9132 6.64653 16.7823C6.64653 22.6514 11.15 27.4263 16.6855 27.4263C22.2211 27.4263 26.7246 22.6514 26.7246 16.7823C26.7246 10.9132 22.2212 6.13831 16.6855 6.13831Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M39.5095 7.66144C39.4869 7.66144 39.4639 7.66155 39.4412 7.66165C37.1181 7.68088 34.9482 8.66175 33.3313 10.4238C31.7427 12.1547 30.879 14.4381 30.8988 16.8534C30.9188 19.2687 31.8202 21.5376 33.437 23.2421C35.0666 24.9599 37.2252 25.9033 39.5225 25.9033C39.5456 25.9033 39.5687 25.9032 39.5919 25.9031C41.915 25.8838 44.085 24.9029 45.7019 23.1409C47.2904 21.41 48.1542 19.1266 48.1343 16.7112C48.093 11.706 44.2306 7.66144 39.5095 7.66144Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M39.933 27.6459H39.0994C35.2172 27.6459 31.6744 29.1219 28.9996 31.541C29.6688 32.0545 30.3059 32.6141 30.9096 33.2178C32.6906 34.9989 34.0893 37.0743 35.0668 39.386C35.9477 41.4678 36.4504 43.6614 36.5675 45.9205H55V42.7118C55 34.4049 48.241 27.6459 39.933 27.6459Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M33.3384 45.9205C33.0344 41.0231 30.5519 36.7155 26.8469 33.9548C24.1517 31.946 20.8087 30.7568 17.1875 30.7568H16.1842C7.24561 30.7569 0 38.0024 0 46.941V48.8617H33.3706V46.941C33.3706 46.5983 33.3599 46.2578 33.3384 45.9205Z"
                  fill="#E5E5E5"
                />
              </svg>
            </li>
            <li>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M27.5 1.375C12.3365 1.375 -1.00158e-05 12.4777 -1.00158e-05 26.125C-1.00158e-05 30.8953 1.50882 35.5163 4.37066 39.512C3.82891 45.5042 2.37691 49.9528 0.268573 52.0602C-0.0100933 52.3389 -0.07976 52.7652 0.09624 53.1172C0.252073 53.4316 0.572907 53.625 0.916657 53.625C0.958823 53.625 1.00099 53.6223 1.04407 53.6158C1.41532 53.5636 10.0393 52.3224 16.2772 48.7218C19.8192 50.1508 23.5922 50.875 27.5 50.875C42.6635 50.875 55 39.7723 55 26.125C55 12.4777 42.6635 1.375 27.5 1.375ZM14.6667 29.7917C12.6445 29.7917 11 28.1472 11 26.125C11 24.1028 12.6445 22.4583 14.6667 22.4583C16.6888 22.4583 18.3333 24.1028 18.3333 26.125C18.3333 28.1472 16.6888 29.7917 14.6667 29.7917ZM27.5 29.7917C25.4778 29.7917 23.8333 28.1472 23.8333 26.125C23.8333 24.1028 25.4778 22.4583 27.5 22.4583C29.5222 22.4583 31.1667 24.1028 31.1667 26.125C31.1667 28.1472 29.5222 29.7917 27.5 29.7917ZM40.3333 29.7917C38.3112 29.7917 36.6667 28.1472 36.6667 26.125C36.6667 24.1028 38.3112 22.4583 40.3333 22.4583C42.3555 22.4583 44 24.1028 44 26.125C44 28.1472 42.3555 29.7917 40.3333 29.7917Z"
                    fill="#E5E5E5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="55" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8127 21.7012C28.7205 21.7012 29.5856 21.891 30.3722 22.2323C30.4311 20.9489 30.8735 19.7621 31.5831 18.7797C31.0835 18.6752 30.5681 18.6197 30.0404 18.6197H25.0405C24.5139 18.6197 23.9985 18.6747 23.5028 18.778C24.259 19.8272 24.7109 21.1078 24.7182 22.4945C25.6372 21.9892 26.6916 21.7012 27.8127 21.7012Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M27.5393 18.2177C30.7937 18.2177 33.4318 15.5795 33.4318 12.3252C33.4318 9.0708 30.7937 6.43262 27.5393 6.43262C24.2849 6.43262 21.6468 9.0708 21.6468 12.3252C21.6468 15.5795 24.2849 18.2177 27.5393 18.2177Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M36.7941 28.2725C39.7932 28.2725 42.2229 25.8416 42.2229 22.8437C42.2229 19.8446 39.7932 17.4149 36.7941 17.4149C33.8231 17.4149 31.4141 19.8014 31.3692 22.7617C33.081 23.8351 34.2813 25.6507 34.5002 27.7582C35.1975 28.085 35.9728 28.2725 36.7941 28.2725Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M18.2856 17.4143C15.286 17.4143 12.8562 19.8446 12.8562 22.8431C12.8562 25.8416 15.286 28.2714 18.2856 28.2714C19.3478 28.2714 20.3353 27.9609 21.1729 27.4338C21.4396 25.6984 22.3698 24.181 23.6987 23.148C23.7043 23.0463 23.7139 22.9459 23.7139 22.8431C23.7139 19.8446 21.283 17.4143 18.2856 17.4143Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M40.3203 17.2987C42.032 18.3721 43.2323 20.1877 43.4507 22.2958C44.1474 22.6219 44.9233 22.81 45.7446 22.81C48.7437 22.81 51.1735 20.3797 51.1735 17.3812C51.1735 14.3827 48.7437 11.9524 45.7446 11.9524C42.7742 11.9518 40.3652 14.3389 40.3203 17.2987Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M27.8127 33.8776C30.8113 33.8776 33.2421 31.4468 33.2421 28.4482C33.2421 25.4497 30.8113 23.0189 27.8127 23.0189C24.8141 23.0189 22.3833 25.4497 22.3833 28.4482C22.3833 31.4468 24.8141 33.8776 27.8127 33.8776Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M39.0981 28.6425H34.526C34.4761 30.4715 33.6957 32.1187 32.4606 33.3027C35.8672 34.3166 38.3604 37.4762 38.3604 41.2084V42.9443C42.8742 42.7776 45.4757 41.4998 45.6469 41.4122L46.0096 41.2281H46.0472V35.5938C46.0484 31.7605 42.9303 28.6425 39.0981 28.6425Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M48.0481 23.18H43.4771C43.4277 25.0091 42.6468 26.6562 41.4122 27.8402C44.8189 28.8541 47.3115 32.0132 47.3115 35.7454V37.4813C51.8247 37.3151 54.4268 36.0374 54.598 35.9492L54.9607 35.7656H54.9994V30.1313C54.9994 26.2986 51.8814 23.18 48.0481 23.18Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M23.1614 33.3022C21.9325 32.1238 21.1544 30.4856 21.0971 28.6683C20.9282 28.6559 20.7603 28.6419 20.5874 28.6419H15.9822C12.1489 28.6419 9.03024 31.7605 9.03024 35.5938V41.2287L9.04428 41.3157L9.43221 41.4381C12.3667 42.3549 14.9862 42.7759 17.2605 42.9095V41.2079C17.2616 37.4762 19.7537 34.3166 23.1614 33.3022Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M30.1156 34.2476H25.5087C21.6754 34.2476 18.5568 37.3673 18.5568 41.1989V46.8338L18.5714 46.9219L18.9587 47.0432C22.6169 48.1856 25.795 48.5674 28.41 48.5674C33.5194 48.5674 36.4803 47.1105 36.6633 47.0179L37.026 46.8338H37.0641V41.1989C37.0658 37.3662 33.9478 34.2476 30.1156 34.2476Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M9.25536 22.9829C10.0767 22.9829 10.852 22.7949 11.5493 22.4687C11.7682 20.3606 12.968 18.5445 14.6797 17.471C14.6348 14.5119 12.2258 12.1248 9.25536 12.1248C6.25576 12.1248 3.82599 14.5551 3.82599 17.5541C3.82599 20.5526 6.25576 22.9829 9.25536 22.9829Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M13.5872 28.0137C12.3532 26.8297 11.5723 25.182 11.5229 23.3523H6.95135C3.11806 23.3529 0 26.4715 0 30.3042V35.9391H0.0387371L0.401407 36.1227C0.573197 36.2091 3.1742 37.4886 7.68792 37.6542V35.9183C7.68792 32.1866 10.18 29.027 13.5872 28.0137Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M15.6049 16.8776C16.2561 16.6137 17.2498 16.2898 18.1986 16.2898C19.3029 16.2898 20.383 16.5739 21.3464 17.1145C21.5608 16.904 21.7573 16.6749 21.9359 16.4296C21.0208 15.2276 20.5211 13.7545 20.5211 12.2392C20.5211 11.2186 20.7491 10.2058 21.1836 9.28568C20.1944 8.39192 18.9323 7.90405 17.5911 7.90405C15.1501 7.90405 13.0252 9.55628 12.4032 11.8833C14.2266 12.9444 15.4146 14.7993 15.6049 16.8776Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M33.1888 16.1225C33.3774 16.4223 33.598 16.7047 33.8484 16.9674C34.7399 16.5228 35.7201 16.2892 36.7071 16.2892C37.6778 16.2892 38.608 16.5374 39.2177 16.7451C39.4086 14.4922 40.7711 12.5037 42.8107 11.4959C42.0629 9.35977 40.0385 7.90179 37.7463 7.90179C36.2641 7.90179 34.8606 8.51036 33.8473 9.58153C34.2032 10.4304 34.3834 11.3225 34.3834 12.237C34.3829 13.6377 33.9708 14.9727 33.1888 16.1225Z"
                  fill="#E5E5E5"
                />
              </svg>
            </li>
          </ul>
        </div>
        <UserMenu />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;