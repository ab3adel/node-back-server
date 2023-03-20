import Grid from '@mui/material/Grid'
import {Card} from '../../components/card/card'
import { Header } from '../../components/header/header';
import Pagination from '@mui/material/Pagination'
import { InputWithControl } from '../../mini-components/form/input/input';
import {useSelector,useDispatch} from 'react-redux'
import {homeSlicer,iInitial} from '../../services/store/features/homeSlicer'
import { useState ,useEffect} from 'react';
import { loadPartialConfig } from '@babel/core';
import { EllipsisLoader } from '../../mini-components/loader/loader';

const Home=()=>{
const state= useSelector((state:{products:iInitial})=>state.products)
const dispatch=useDispatch()
const [page, setPage] = useState(1)
const [loading ,setLoading]=useState(false)
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};
console.log(state)

useEffect(()=>{
    if (page) {
      
        dispatch(homeSlicer.actions.getProducts(page))
    }
},[page])
if (loading) {
    return (
        <Grid container xs={12}
        justifyContent="center">

            <EllipsisLoader />
        </Grid>
    )
}
    return (

        <Grid container


        >
          
            <Grid item container
            xs={12} 
            rowGap={2}
            >
  {state.current_page?
    state.current_page.map(ele=>
        <Card {...ele} />
        )
        :
        <Grid container xs={12}
        justifyContent="center">

            <EllipsisLoader />
        </Grid>
  }
             
            </Grid>
            <Grid item container xs={12}
            justifyContent="center"
            >

                <Pagination count={5} color="secondary"
                page={page} onChange={handleChange}/>
            </Grid>
        </Grid>
    )
}

export default Home;