
import* as React from 'react'
import styles from "./backgroundSlider.module.scss"
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import * as jQuery from 'jquery'

const BackgroundSlide = () => {
  const slide1 = `${require('../../assets/adult.jpg')}`;
  const slide2 = `${require('../../assets/insurer.jpg')}`;
  const slide3 = `${require('../../assets/many.jpg')}`;
    
  const slider = [slide1,slide2,slide3]
  const [index,setIndex] = React.useState(0)
  console.log(slider.length)
  let idx = 1
    
   function changeImg () {
     idx ++;
     setIndex(idx)
      if (index > slider.length - 1){
           idx = 0
      }
      // styles.mybackground = '{{transform = `translateX(${-index * 800}px)`}}'
      } 
    
  setInterval(changeImg,10000)
 
  return (
    <div className={styles.mybackground} style={{backgroundImage:`url(${slider[index]})`, width: `${400}px`, height: `${300}px`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>

      this is it
    </div>
  )
}

export default BackgroundSlide;