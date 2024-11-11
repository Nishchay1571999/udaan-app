import { Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Home/Header'
import Create from '@/components/Home/Create'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'
const DATA = [
  {
    name: "Joe Belfiore",
    status: "In a world far away"
  },
  {
    name: "Bill Gates",
    status: "In a world far away"
  }, {
    name: "Mark Zuckerberg",
    status: "In a world far away"
  }, {
    name: "Maricca Mayer",
    status: "In a world far away"
  },
  {
    name: "Sundar Pichai",
    status: "In a world far away"
  },
  {
    name: "Elon Mush",
    status: "In a world far away"
  },
  {
    name: "Dave",
    status: "In a world far away"
  }, {
    name: "Bhavesh",
    status: "In a world far away"
  }, {
    name: "Aman Gupta",
    status: "In a world far away"
  },
  {
    name: "Anupam Mittal",
    status: "In a world far away"
  }, {
    name: "HYcj s",
    status: "In a world far away"
  },
  {
    name: "Hjcxbash",
    status: "In a world far away"
  }, {
    name: "ciihge",
    status: "In a world far away"
  }, {
    name: "bchdsf",
    status: "In a world far away"
  },
  {
    name: "xbhsahu",
    status: "In a world far away"
  },
  {
    name: "bdshdqqd",
    status: "In a world far away"
  },
  {
    name: "bhsba",
    status: "In a world far away"
  }, {
    name: "cuidns",
    status: "In a world far away"
  }, {
    name: "JKnsk",
    status: "In a world far away"
  },
  {
    name: "bjksnl",
    status: "In a world far away"
  }
]
const Home = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [offset, setOffset] = useState<number>(0)
  const [data, setData] = useState<typeof DATA>(DATA.slice(0, 5))
  const [createNew, setCreateNew] = useState<boolean>(false)
  const [newName, setNewName] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const getNextPage = () => {
    console.log({ offset })
    setTimeout(() => {
      setOffset(previous => previous + 1)
      setData(previous => previous.concat(DATA.slice((offset + 1) * 5, (offset + 1) * 5 + 5)))
      console.log("SET TIME OUT COMPLETED")
    }, 2000)

  }
  return (
    <View style={styles.container}>
      <Header title='Contacts' searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={data.filter((item) => {
          if (searchText === "") {
            return item
          } else {
            if (item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
              return item
            } else {
              return undefined
            }
          }
        })}
        onEndReached={() => {
          console.log("END REACHED")
          getNextPage()
        }}
        ListFooterComponent={() => {
          return <Text>{'Loading'}</Text>
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainerStyles}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.contactContainer}>
              <View style={styles.imageContainer}>
              </View>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.status}</Text>
              </View>
            </View>
          )
        }} />
      <View style={styles.createContactsContainer}>
        <Create createNew={createNew} setCreateNew={setCreateNew} />

      </View>
      <Modal visible={createNew} transparent={true}>
        <View style={styles.createContainer}>
          <View>
            <TextInput value={newName} onChangeText={setNewName} placeholder='Name' placeholderTextColor="grey" />
          </View>
          <View>
            <TextInput value={newStatus} onChangeText={setNewStatus} placeholder='Status' placeholderTextColor="grey" />
          </View>
          <Pressable style={styles.submitButton} onPress={() => {
            if (newName !== "" && newStatus !== "") {
              setData(previous => previous.concat({ name: newName, status: newStatus }))
            }
            setCreateNew(!createNew)
          }}>
            <Text>{'Submit'}</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  listContainerStyles: {
    paddingHorizontal: 20,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    padding: 5,
    borderRadius: 10
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "pink",
    marginRight: 20
  },
  createContactsContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,

  },
  createContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0
  },
  submitButton: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "orange",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})