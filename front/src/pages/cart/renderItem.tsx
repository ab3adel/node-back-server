
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import product from '../../assets/images/product.jpg'
import { InputWithControl } from '../../mini-components/form/input/input'
import {Delete} from '@mui/icons-material'
import ButtonIcon from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import { useTranslation } from 'react-i18next'
import {iInitial,homeSlicer,iSavedProduct} from '../../services/store/features/homeSlicer'
import { useDispatch } from 'react-redux'
import {MyDialog} from '../../mini-components/dialog/dialog'
export const RenderItem=({count,id,image,liked,price,productName,quantity,saved}:iSavedProduct)=>{
const dispatch=useDispatch()
const {t,i18n}=useTranslation()
const [openDialog,setOpenDialog]=useState(false)
const increase=()=>{
dispatch(homeSlicer.actions.addOne(id))
}
const decreas=()=>{
    dispatch(homeSlicer.actions.subOne(id))
}
    return (
        <Grid item container xs={12}>

            <Grid item container xs={12}
            padding={2}>
                <Grid item container 
                padding={2} md={4} xs={12} columnGap={2}>
                    <Grid item md={5} xs={12}>
                        <img src={image} className="product" />
                    </Grid>
                    <Grid item md={5} xs={12}
                    display="flex" alignItems={'center'}
                    className="bold"
                    textAlign={"center"}
                    justifyContent="center"
                    >
                        {productName}
                    </Grid>
                </Grid>
                <Grid item container md={6} xs={12}>

                    <Grid item display="flex"  xs={3} 
                    flexDirection="column" 
                    padding={1}
                    >
                        <div className="title" >
                           {t('price')}
                        </div>
                        <div style={{textAlign:'center',marginTop:'7px'}}
                        className="bold">
                            {price}
                        </div>
                    </Grid>
                    <Grid item xs={6}  display="flex" alignItems={'center'}
                    sx={{display:'flex',alignItems:'center',justifyContent:{xs:'center'}}}>
                        <InputWithControl 
                        value={count}
                         increase={increase}
                         decrease={decreas}
                        />
                    </Grid>
                    <Grid item xs={3}  display="flex" 
                        flexDirection="column" 
                        padding={1}
                    >
                       <div className="title" >
                          {t("total")}
                       </div>
                       <div  style={{textAlign:'center',marginTop:'7px'}}
                       className="bold">

                            {price * count}
                       </div>
                        
                    </Grid>
                    
                </Grid>
                <Grid item xs={2} display="flex" alignItems={'center'}
                sx={{position:{xs:'absolute'},top:{xs:'-5px'},left:{xs:'-2px'}}}>
                    <ButtonIcon onClick={()=>setOpenDialog(true)}>
                        <Delete color="error" />
                    </ButtonIcon>
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Divider variant='middle' sx={{width:'80%'}}  />
            </Grid>
            <MyDialog 
            open={openDialog}
            setOpen={setOpenDialog}
            message={i18n.language==='en'?
            `Are you sure you want to delete the all ${count} items from your cart`:
            `هل أنت متأكد من رغبتك في جذف العناصر ${count} كلها`}
            title={i18n.language==='en'?'You are deleting Items !':"أنت على وشك حذف عناصر"}
            action="warning"
            ok={()=>{

                dispatch(homeSlicer.actions.removeFromCart(id))
                setOpenDialog(false)
            }
            }
            />
        </Grid>
    )
}