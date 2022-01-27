import React from 'react'
import { Box, AspectRatio, Image, Stack, Text, Center  } from 'native-base';
import NoFoundImg from '../../assets/images/no-result-founded-2.png'
import { SIZES, images } from '../../constants'
export default function NoFoundData({children, height}) {
  
  return (
    <Box width={SIZES.width} p={4} height={ SIZES.height / 5 }>
      { children ? children : <Center width={"100%"} height={"100%"}>
        <Image width="60%" height="60%" 
          resizeMode="contain"
          alt="Waiting Image"
          source={ images.no_result_founded_2 }
        />
        <Text fontSize="sm" bold italic m={1}>Data is empty!</Text>
      </Center>  }  
    </Box>
  )
}
