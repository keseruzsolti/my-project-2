export function MainPage() {
    return (
        <div className="mainPageBody">
            <div className="slidebody">
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />

                        {/*Képek:pixabay.com - ingyen felhasználható képek*/}
                        <div className="slide first">
                            <img src="images/Picture1.jpg" style={{ opacity: '0.85' }} alt="" />
                            {/*https://pixabay.com/hu/photos/iskola-vissza-az-iskol%c3%a1ba-h%c3%a1tt%c3%a9r-3596680/*/}
                        </div>

                        <div className="slide">
                            <img src="images/Picture3.jpg" style={{ opacity: '0.95' }} alt="" />
                            {/*https://pixabay.com/hu/photos/ceruz%c3%a1k-%c3%adr%c3%a1s-irodaszer-fa-ceruz%c3%a1k-1486278/*/}
                        </div>

                        <div className="slide">
                            <img src="images/Picture2.jpg" style={{ opacity: '0.9' }} alt="" />
                            {/*https://pixabay.com/hu/photos/anal%c3%b3g-huzat-pap%c3%adrra-tenni-972947/*/}
                        </div>

                        <div className="slide">
                            <img src="images/Picture4.jpg" style={{ opacity: '0.9' }} alt="" />
                            {/*https://pixabay.com/hu/photos/jegyzett%c3%b6mb-k%c3%a1v%c3%a9-toll-t%c3%b6lt%c5%91toll-1276779/*/}
                        </div>

                    </div>
                    <div className="manual-navigation">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                    </div>
                </div>
            </div>
            <div>
                <div className="container text-center p-5 text-uppercase secondTitle">
                    <h1>Üzletünkről</h1>
                    <h5>püspökladány szívében várjuk kedves vásárlóinkat</h5>
                    <div className="biggerIcon"><i className="bi bi-chevron-double-down"></i></div>
                </div>
                <div className="container p-4 text-center" style={{ width: '800px' }}>
                    <div className="mb-5">
                        <p>Üzletünk 2020-ban nyílt meg, azóta folyamatosan növekedünk és várjuk kedves vendégeinket!
                            Az üzletünkben található rengeteg világmárka, mint pl. :
                            Nebulo,Zebra,Stabilo,Ico,hP,CANON.Az üzlet kínálata magába foglalja a nyomtatványokat, az iskola-és irodaszereket,
                            ezen felül pedig rengeteg egyéb aprósággal is szolgálunk.</p>
                    </div>
                    <div className="mb-5">
                        <img src="borito.jpg" alt="Pava" style={{ width: "180px", height: "200px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}