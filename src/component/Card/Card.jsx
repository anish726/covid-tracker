import React from 'react'
import {Card, CardContent,Typography,Grid} from '@material-ui/core'

 import style from './Card.module.css'
  import CountUp from 'react-countup';

function Cards({data:{ confirmed, recovered, deaths, lastUpdate }}) {
  if(!confirmed){
      return 'Loading...'
  }
     
    return (
        <div className={style.container}>
            <Grid container spacing ={3} justify="center">
                <Grid item component={Card} xs={12} md={3}  className={style.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                          <Typography varaint="h5">
                              <CountUp start={0}end={confirmed.value} duration={2.5} separator="," /></Typography>  
    <Typography color="textSecondary">{new Date(confirmed).toDateString()}</Typography>
                          <Typography variant="body2" >Number of active cases of covid 19</Typography>
                          </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={style.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                          <Typography varaint="h5">
                          <CountUp start={0}end={recovered.value} duration={2.5} separator="," /></Typography>  
                         <Typography color="textSecondary">{new Date(recovered).toDateString()}</Typography>
                          <Typography variant="body2" >Number of recoveries from Covid 19</Typography>
                          </CardContent> 
                </Grid>
                <Grid item component={Card} xs={12} md={3 } className={style.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                          <Typography varaint="h5">
                              
                          <CountUp start={0}end={deaths.value} duration={2.5} separator="," /></Typography>  
                         <Typography color="textSecondary">{new Date(deaths).toDateString()}</Typography>
                          <Typography variant="body2" >Number of death from Covid 19</Typography>
                          </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards;
