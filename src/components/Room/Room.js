import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Room({room}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {room.avatar}
          </Avatar>
        }
       
        title={room.title}
      />
      <CardMedia
       
        component="img"
       height="194"
       image={room.imgUrl}
       alt="Paella dish"
      />
       <img src={`/images/${room.bedType}.png`} alt=""/>
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
        {room.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />: {room.bed}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />: {room.capacity} 
        </IconButton>
        <IconButton aria-label="price">
        <AttachMoneyIcon />: {room.price} 
        </IconButton>
        <Link to={`/book/${room.bedType}`}>
         <Button  variant="contained" color="primary">
            Book      
           </Button>
        </Link>
             
      </CardActions>
    </Card>
  );
}















// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useNavigate } from 'react-router-dom';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Room({room}){
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const history = useNavigate()
//     const handleBook = (bedType) => {
//         history.push(`/book/${bedType}`);
//     }
//   return (
//     // <div className="title">
//     //   <h1>hello world</h1>
//     // </div>
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             {room.avatar}
//           </Avatar>
//         }
//         title={room.title}
//       />

//       <CardMedia
//         className={classes.media}
//         image={room.imgUrl}
//         title="Paella dish"
//       />
//       <img src={`/images/${room.bedType}.png`} alt=""/>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {room.description}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <LocalHotelIcon />: {room.bed} 
//         </IconButton>
//         <IconButton aria-label="share">
//           <WcIcon />: {room.capacity} 
//         </IconButton>
//         <IconButton aria-label="price">
//           <AttachMoneyIcon />: {room.price} 
//         </IconButton>
//         <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
//             Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
