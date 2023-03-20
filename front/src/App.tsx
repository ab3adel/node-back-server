import Grid from '@mui/material/Grid'
import {useRoutes} from 'react-router-dom'
import { routes } from './services/route';
import {Notification} from './mini-components/notification/notification'
import notificationContext, { iAlert } from './services/context/notification/context'
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
function App() {
  const appRoutes=useRoutes(routes)
  const {alert,setAlert} =useContext(notificationContext)
  const {i18n} =useTranslation()
  return (
    <Grid container

    >
      <Grid item container xs={12}>
         {appRoutes}
      </Grid>
      <Notification
      setOpen={()=>setAlert((pre:iAlert)=>({...pre,open:false}))}
       open={alert.open}
       message={alert.message}
       action={alert.action}
       
       />
    </Grid>
  );
}

export default App;
