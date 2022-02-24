import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './carousel.module.scss'
import { escape } from "@microsoft/sp-lodash-subset";
import Slider from "react-slick";
import { getBannerConfiguration } from '../../../../../SiderService';
import { ICarouselProps } from "../../IcarouselProps";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Web, IWeb } from "@pnp/sp/presets/all";

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
                <p>This is  yooo fMTN</p>
              </div>
            </div>

            <div className={styles.risk__backgroundImage}>
              <div className={styles.risk__yellowbg}>
                <p>This is MTN</p>
              </div>
            </div>

            <div className={styles.risk__backgroundImage3}>
              <div className={styles.risk__yellowbg}>
                <p>This is MTN</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}