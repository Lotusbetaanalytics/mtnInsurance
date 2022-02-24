import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { getBannerConfiguration } from "../../../../SliderServices";
import { ICarouselProps } from "../ICarouselProps";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Web, IWeb } from "@pnp/sp/presets/all";
import { NextBtn } from "../container";

const history = useHistory();

const riskHandler = () => {
  history.push("/risksurvey/flowscreen1");
};

export interface IReactCarouselWpState {
  bannerCardData: any[];
}

const settings = {
  centerMode: false,
  dots: true,
  infinite: true,
  lazyLoad: true,
  fade: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  speed: 1000,
  pauseOnHover: false,
  adaptiveHeight: true,
};

export default class ReactCarouselWp extends React.Component<
  ICarouselProps,
  IReactCarouselWpState
> {
  public constructor(props: ICarouselProps, state: IReactCarouselWpState) {
    super(props);
    this.state = {
      bannerCardData: [],
    };
  }

  public async componentDidMount() {
    let bannerDetails = await getBannerConfiguration();

    this.setState({
      bannerCardData: bannerDetails,
    });
  }
  public render(): React.ReactElement<ICarouselProps> {
    const { bannerCardData } = this.state;

    return (
      <div className={styles.row}>
        <div className={styles.Bannercard}>
          <Slider {...settings}>
            <div className={styles.risk__backgroundImage2}>
              <div className={styles.risk__yellowbg}>
                <div className={styles.risk__content}>
                  <img src={require("../assets/logo.png")} alt="logo" />
                  <h2>Welcome to</h2>
                  <br></br>
                  <span>
                    The Insurance Risk Management <br />
                    Portal
                  </span>

                  <button className={styles.risk__SliderBtn}>
                    Risk Survey
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.risk__backgroundImage}>
              <div className={styles.risk__yellowbg}>
                <div className={styles.risk__content}>
                  <img src={require("../assets/logo.png")} alt="logo" />
                  <h2>Welcome to</h2>
                  <br></br>
                  <span>
                    The Insurance Risk Management <br />
                    Portal
                  </span>
                  <button className={styles.risk__SliderBtn}>
                    Risk Survey
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.risk__backgroundImage3}>
              <div className={styles.risk__yellowbg}>
                <div className={styles.risk__content}>
                  <img src={require("../assets/logo.png")} alt="logo" />
                  <h2>Welcome to</h2>
                  <br></br>
                  <span>
                    The Insurance Risk Management <br />
                    Portal
                  </span>

                  <NextBtn buttonName="Risk Survey" handler={riskHandler} />

                  {/* <button
                    className={styles.risk__SliderBtn}
                    onClick={riskHandler}
                  >
                    Risk Survey
                  </button> */}
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
