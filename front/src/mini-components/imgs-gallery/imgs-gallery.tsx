import './imgs-gallery.scss'
import {useEffect, useState} from 'react'
import {useHide} from '../../services/use-hide'
import Fade from '@mui/material/Fade'
import leftArrow from '../../assets/images/left-arrow-icon.svg'
import rightArrow from '../../assets/images/right-arrow-icon.svg'
import {useTranslation} from 'react-i18next'
interface iProps {images: string []}
export const ImagesGallery =({images}:iProps)=>{
    const {ref,hide,handleShow} =useHide()
    const [currentImage,setCurrentImage]=useState(0)
    const {i18n} =useTranslation()

    const nextImage=(str:string)=>{
       
        if (hide){
 
            if (str==='left') {
                if (currentImage === 0) return
                let index =currentImage -1
                setCurrentImage(index)
            }
            else {
                
                if (currentImage === images.length-1) return
                let index =currentImage + 1
                setCurrentImage(index)
            }
        }
     }
   
    return (
        <div className={`imgsGalery `}
                            style={{
                               backgroundImage:`url(${images[currentImage]}) `
                             ,backgroundSize:'cover',backgroundRepeat:'no-repeat'
                         ,
                     }}
                            ref={ref}

                            onClick={handleShow}
                           >
                              
                                <Fade in={hide}>

                                    <img src={leftArrow} className="icon left" 
                                    onClick={()=>nextImage(i18n.language === 'en'?'left':'right')}/>
                                </Fade>
                                <Fade in={hide}>
                                    <img src={rightArrow} className="icon right" 
                                    onClick={()=>nextImage(i18n.language === 'en'?'right':'left')}/>
                                 </Fade>
                                <div className="dots">
                               
                                    {
                                        images.map((ele,index:number)=>
                                        <span key={index}
                                        className={index === currentImage ? 'selected':''}
                                        >.
                                        </span>
                                        )
                                    }
                                </div>    
                            </div>
    )
}