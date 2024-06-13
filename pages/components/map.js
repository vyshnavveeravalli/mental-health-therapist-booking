import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";


mapboxgl.accessToken = 'pk.eyJ1IjoidnlzaG5hdnZlZXJhdmFsbGkiLCJhIjoiY2x2cmswa3o4MGlvZzJqbXNqcXFhZTUyaSJ9.Ku02pTtQTbfe4ncmZeM7qw';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [12.816812028215523,80.04073281796667],
          zoom: 3,
        })
      }, [])
  return <Wrapper id='map'></Wrapper>
  
}

export default Map

const Wrapper = tw.div`flex-1`