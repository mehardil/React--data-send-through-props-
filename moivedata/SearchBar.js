import "./style.css";
import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '30px', transform: 'scale(1)' }}
  >
    
  </Box>
);

export default function SearchBar({data, inputValue,setValue}) {

  // useEffect(() => {
  //   data && data.length && data.map(e => {
  //   if( (e.id == inputValue || e.name == inputValue ||  e.origin_country == inputValue) && inputValue.length > 1) 
  //   setValue('')
  //   })
  // }, [inputValue])
  
  return (
<div class="set">
  {data && data.length && data.map(e => {
  if( (e.id == inputValue || e.name == inputValue ||  e.origin_country == inputValue) && inputValue.length > 1){ 
   
    return (
    
    <Card sx={{ minWidth: 275 }} >
     
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        { e.id }
         
        </Typography>
        <Typography variant="h5" component="div">
         {e.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {e.origin_country}
        </Typography>
        <Typography variant="body2">      
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">learn more</Button>
      </CardActions>
      
    </Card>
  
  
    )
  }

})
}

  </div>

)} 
