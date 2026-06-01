// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Grid from '@mui/material/Grid';
import AlertUI from './components/AlertUI';
import HeaderUI from './components/HeaderUI';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

        <Grid container spacing={5} justifyContent="center" alignItems="center">

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }} >
          <HeaderUI />
         </Grid>

         {/* Alertas */}
         <Grid size={{ xs: 12, md: 12 }} >
          <AlertUI description="No se preveen lluvias"/>
          
          </Grid>

         {/* Selector */}
         <Grid size={{ xs: 3, md: 3 }}  >Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid size={{ xs: 9, md: 9 }} >Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid size={{ xs: 6, md: 6 }} >Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid size={{ xs: 6, md: 6 }} >Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid size={{ xs: 12, md: 12 }} >Elemento: Información adicional</Grid>

      </Grid>
      
    </>
  )
}

export default App
