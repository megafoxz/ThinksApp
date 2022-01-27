import React from 'react'
import { Stack, Box, Heading, Image } from 'native-base'
import { SIZES } from '../../../constants'

export default function detailVoucher({uriImage, heading}) {
  return (
    <Stack space={2} width={SIZES.width} direction="row" height={SIZES.height / 7} mt={1} mb={1}>
      <Box flex={1}>
        <Image
          source={{
            uri: uriImage
          }}
          resizeMode="cover"
          height="100%"
          alt="Voucher background"
        /> 
      </Box>
      <Box flex={2} pl={1} pr={2}>
        <Heading size="sm">{heading}</Heading>
      </Box>
    </Stack>
  )
}
