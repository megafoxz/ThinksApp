
import React from 'react'
import { VStack, Input, Icon, Center, NativeBaseProvider, useColorModeValue,} from 'native-base'
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet } from 'react-native'

export default function Search() {
  return (
    <Center flex={1} style={styles.container} >
      <VStack space={3} width="90%" >
        <VStack width="100%" space={2}>
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            height={44}
            bg="gray.200"
            borderRadius={15}
            py={1}
            px={2}
            placeholderTextColor={useColorModeValue("blueGray.400", "blueGray.50")}
            InputLeftElement={<Icon size='sm' ml={2} size={5} color="blueGray.600" as={<Ionicons name="ios-search" />} />}
          />
        </VStack>
      </VStack>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginBottom: 25
  }
})
