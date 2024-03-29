import './footer.scss'

export default function Footer () {

    return(

        <footer>
            <div className="container">

                <div className='row row-cols-lg-2 g-2'>

                    <div className='col-lg-4'>
                         <img src='/assets/img/agricgate-farm-logo-3.png' alt="footer-logo" />
                         <p>Trisolace Company Ltd.
                            <br></br>
                            P.O.Box
                            <br></br>
                            Dansoman.
                         </p>
                         <div className='social-media-handles'>

                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <g clip-path="url(#clip0_13_147)">
                                    <path d="M28.2002 0.203491C20.6017 0.203491 19.6462 0.238491 16.6607 0.371491C13.6752 0.511491 11.6417 0.980491 9.8602 1.67349C7.99152 2.37636 6.29892 3.47888 4.9007 4.90399C3.47646 6.30293 2.37407 7.99533 1.6702 9.86349C0.977195 11.6415 0.504695 13.6785 0.368195 16.6535C0.235195 19.646 0.200195 20.598 0.200195 28.207C0.200195 35.809 0.235195 36.761 0.368195 39.7465C0.508195 42.7285 0.977195 44.762 1.6702 46.5435C2.3877 48.3845 3.3432 49.9455 4.9007 51.503C6.4547 53.0605 8.0157 54.0195 9.8567 54.7335C11.6417 55.4265 13.6717 55.899 16.6537 56.0355C19.6427 56.1685 20.5947 56.2035 28.2002 56.2035C35.8057 56.2035 36.7542 56.1685 39.7432 56.0355C42.7217 55.8955 44.7622 55.4265 46.5437 54.7335C48.4112 54.0303 50.1026 52.9278 51.4997 51.503C53.0572 49.9455 54.0127 48.3845 54.7302 46.5435C55.4197 44.762 55.8922 42.7285 56.0322 39.7465C56.1652 36.761 56.2002 35.809 56.2002 28.2035C56.2002 20.598 56.1652 19.646 56.0322 16.657C55.8922 13.6785 55.4197 11.6415 54.7302 9.86349C54.0264 7.99528 52.924 6.30286 51.4997 4.90399C50.1019 3.47836 48.4092 2.37575 46.5402 1.67349C44.7552 0.980491 42.7182 0.507991 39.7397 0.371491C36.7507 0.238491 35.8022 0.203491 28.1932 0.203491H28.2037H28.2002ZM25.6907 5.25049H28.2037C35.6797 5.25049 36.5652 5.27499 39.5157 5.41149C42.2457 5.53399 43.7297 5.99249 44.7167 6.37399C46.0222 6.88149 46.9567 7.49049 47.9367 8.47049C48.9167 9.45049 49.5222 10.3815 50.0297 11.6905C50.4147 12.674 50.8697 14.158 50.9922 16.888C51.1287 19.8385 51.1567 20.724 51.1567 28.1965C51.1567 35.669 51.1287 36.558 50.9922 39.5085C50.8697 42.2385 50.4112 43.719 50.0297 44.706C49.5808 45.9217 48.8643 47.021 47.9332 47.9225C46.9532 48.9025 46.0222 49.508 44.7132 50.0155C43.7332 50.4005 42.2492 50.8555 39.5157 50.9815C36.5652 51.1145 35.6797 51.146 28.2037 51.146C20.7277 51.146 19.8387 51.1145 16.8882 50.9815C14.1582 50.8555 12.6777 50.4005 11.6907 50.0155C10.4744 49.5672 9.37414 48.852 8.4707 47.9225C7.53882 47.0196 6.82123 45.9193 6.3707 44.7025C5.9892 43.719 5.5307 42.235 5.4082 39.505C5.2752 36.5545 5.2472 35.669 5.2472 28.1895C5.2472 20.7135 5.2752 19.8315 5.4082 16.881C5.5342 14.151 5.9892 12.667 6.3742 11.68C6.8817 10.3745 7.49069 9.43999 8.4707 8.45999C9.4507 7.47999 10.3817 6.87449 11.6907 6.36699C12.6777 5.98199 14.1582 5.52699 16.8882 5.40099C19.4712 5.28199 20.4722 5.24699 25.6907 5.24349V5.25049ZM43.1487 9.89849C42.7075 9.89849 42.2705 9.9854 41.8629 10.1543C41.4552 10.3231 41.0848 10.5706 40.7728 10.8826C40.4608 11.1946 40.2133 11.565 40.0445 11.9727C39.8756 12.3803 39.7887 12.8173 39.7887 13.2585C39.7887 13.6997 39.8756 14.1367 40.0445 14.5443C40.2133 14.952 40.4608 15.3224 40.7728 15.6344C41.0848 15.9464 41.4552 16.1939 41.8629 16.3627C42.2705 16.5316 42.7075 16.6185 43.1487 16.6185C44.0398 16.6185 44.8945 16.2645 45.5246 15.6344C46.1547 15.0042 46.5087 14.1496 46.5087 13.2585C46.5087 12.3674 46.1547 11.5127 45.5246 10.8826C44.8945 10.2525 44.0398 9.89849 43.1487 9.89849ZM28.2037 13.8255C26.2964 13.7957 24.4023 14.1457 22.6316 14.855C20.8609 15.5643 19.249 16.6187 17.8897 17.957C16.5304 19.2952 15.451 20.8905 14.7141 22.6499C13.9773 24.4093 13.5978 26.2978 13.5978 28.2052C13.5978 30.1127 13.9773 32.0012 14.7141 33.7606C15.451 35.52 16.5304 37.1153 17.8897 38.4535C19.249 39.7917 20.8609 40.8462 22.6316 41.5555C24.4023 42.2648 26.2964 42.6147 28.2037 42.585C31.9786 42.5261 35.5789 40.9852 38.2276 38.2949C40.8763 35.6045 42.3608 31.9806 42.3608 28.2052C42.3608 24.4299 40.8763 20.8059 38.2276 18.1156C35.5789 15.4253 31.9786 13.8844 28.2037 13.8255ZM28.2037 18.869C30.6794 18.869 33.0536 19.8524 34.8042 21.603C36.5547 23.3536 37.5382 25.7278 37.5382 28.2035C37.5382 30.6792 36.5547 33.0534 34.8042 34.804C33.0536 36.5545 30.6794 37.538 28.2037 37.538C25.728 37.538 23.3538 36.5545 21.6032 34.804C19.8526 33.0534 18.8692 30.6792 18.8692 28.2035C18.8692 25.7278 19.8526 23.3536 21.6032 21.603C23.3538 19.8524 25.728 18.869 28.2037 18.869Z" fill="#7F7F7F" fill-opacity="0.8"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13_147">
                                    <rect width="56" height="56" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>

                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <path d="M56.007 28.175C56.007 12.614 43.47 0 28.007 0C12.537 0.0035 0 12.614 0 28.1785C0 42.238 10.241 53.893 23.625 56.007V36.3195H16.52V28.1785H23.632V21.966C23.632 14.9065 27.8145 11.0075 34.209 11.0075C37.275 11.0075 40.4775 11.557 40.4775 11.557V18.487H36.946C33.4705 18.487 32.3855 20.6605 32.3855 22.89V28.175H40.1485L38.9095 36.316H32.382V56.0035C45.766 53.8895 56.007 42.2345 56.007 28.175Z" fill="#7F7F7F"/>
                                </svg>
                            </a>

                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="48" viewBox="0 0 68 48" fill="none">
                                    <path d="M21.1092 47.5676C46.4688 47.5676 60.3414 29.2623 60.3414 13.4159C60.3414 12.9036 60.3414 12.3841 60.3162 11.8718C63.017 10.1686 65.348 8.05987 67.2 5.64448C64.6771 6.61353 62.0036 7.2522 59.2662 7.53976C62.1496 6.03831 64.3092 3.6759 65.3436 0.891636C62.6345 2.28977 59.6695 3.27125 56.5782 3.7931C54.5 1.86498 51.7499 0.587651 48.754 0.158979C45.758 -0.269692 42.6834 0.174215 40.0064 1.42194C37.3294 2.66966 35.1994 4.65157 33.9463 7.06067C32.6932 9.46978 32.3869 12.1716 33.075 14.7477C27.5929 14.5082 22.2298 13.2676 17.3336 11.1062C12.4373 8.94483 8.11727 5.911 4.6536 2.2015C2.89523 4.84716 2.35861 7.97663 3.15271 10.9544C3.94682 13.9323 6.01211 16.5352 8.9292 18.2346C6.74327 18.1699 4.60539 17.6585 2.688 16.7418V16.9064C2.69177 19.6779 3.79389 22.3633 5.80807 24.5086C7.82225 26.6539 10.6249 28.1276 13.7424 28.6806C12.5591 28.9646 11.3368 29.1061 10.1094 29.1014C9.24413 29.1036 8.3806 29.0338 7.5306 28.8928C8.4117 31.2786 10.1273 33.3645 12.4372 34.8585C14.7471 36.3524 17.5356 37.1795 20.412 37.224C15.5255 40.5675 9.48948 42.3808 3.276 42.372C2.18115 42.376 1.08706 42.321 0 42.2074C6.30636 45.7098 13.6302 47.5696 21.1092 47.5676Z" fill="#7F7F7F"/>
                                </svg>
                            </a>

                         </div>
                    </div>

                    <div className='col-lg-8'>
                        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            <div className="col d-flex flex-column">
                                <h5 className="">Products</h5>
                                <a href="#">Snails</a>
                                <a href="#">Poultry</a>
                                <a href="#">Greenhouse</a>
                                <a href="#">Filter</a>
                                <a href="#">Snail feed</a>
                                <a href="#">Sprinkler</a>
                            </div>
                            <div className="col d-flex flex-column">
                                <h5 className="">Services</h5>
                                <a href="#">Video shooting</a>
                                <a href="#">Camera hiring</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                            </div>
                            <div className="col d-flex flex-column">
                                <h5 className="">About us</h5>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                                <a href="#">Lorem Ipsum</a>
                            </div>
                        </div>
                    </div>

                </div>

                <p className='text-center mt-5'>© { new Date().getFullYear() }, Trisolace Company Ltd.</p>

            </div>
        </footer>

    );

}