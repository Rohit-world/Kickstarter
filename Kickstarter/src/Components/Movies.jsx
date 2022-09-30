import React from 'react';
import { Moviedata } from './Data';
import { Box,Link ,Stack,Text,Grid,GridItem,Image,Divider, border} from '@chakra-ui/react';

const Movies = () => {
    return (
        <div style={{}}>

            <div style={ {
         overflow: "scroll",
        margin: "4px 4px",
        padding: "3% 0%",
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        
       
        display:"flex",
        gap:"20px",
       
       
    }}>
{Moviedata.map((ele)=>(


    <div display="grid" key={Math.random()}>
    <img style={{width:"500px",height:"200px",borderBottom:"8px solid teal"}} src={ele.Poster} alt="" />
    <Text fontSize="Large" >{ele.Title}</Text>
    <Text color="grey"> year: {ele.Year}  imdb:{ele.imdbID}</Text>
    </div>
))}



    </div>
        </div>
    );
}

export default Movies;
