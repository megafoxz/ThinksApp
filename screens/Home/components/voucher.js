import React, { useState, useEffect } from 'react'
import { Box, Heading, Center, VStack, FlatList, Text, Flex, CheckCircleIcon } from 'native-base'
import DetailVoucher from './detailVoucher'
import { SIZES } from '../../../constants'
import ListVoucher from '../../../dump/voucher'
import { ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import NoFoundData from '../../../components/common/NoFoundData'
import _ from 'lodash'
import { style } from 'styled-system'


export default function voucher() {
  const [listVoucher, setListVoucher] = useState([])
  const [limitVoucher, setLimitVoucher] = useState(0)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    loadMoreVoucher()
  }, [])


  const renderItem = ({ item }) => <DetailVoucher uriImage={item.image} heading={item.heading} />
  const footerLoading = () => (
    <Flex justifyContent="flex-end">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          loadMoreVoucher()
        }}
      //On Click of button load more data
      >
        <Text fontSize={SIZES.body5} color="red">Load More</Text>
        {refreshing ? (
          <ActivityIndicator
            color="white"
            style={{ marginLeft: 8 }} />
        ) : null}
      </TouchableOpacity>
    </Flex>
  )

  function loadMoreVoucher() {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      setListVoucher(ListVoucher)
    })

  }

  return (
    <Box width={SIZES.width} p={2}>
      <Heading size="sm">Hot voucher</Heading>
      <Box style={styles.fit_header_voucher} width="100%" pt={2} safeArea >
        {
          listVoucher.length > 0 ?
            <FlatList
              data={listVoucher}
              renderItem={renderItem}
              refreshing={refreshing}
              onRefresh={loadMoreVoucher}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={() => <Box>
                <Text>List Voucher is empty!</Text>
              </Box>}
              ListFooterComponent={footerLoading}
            ></FlatList>
            : <NoFoundData />
        }
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  fit_header_voucher: {
    paddingTop: 7
  }
});
