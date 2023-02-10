import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Movies from '../components/Movies'
import resposeMovies from '../mock/responseMovies.json'

export default function Home() {
  const movies = resposeMovies.Search
  const [query, setQuery] = useState('')
  return (
    <SafeAreaView className='flex-1 items-center bg-blue-300 px-12'>
      <Text className='font-bold text-xl text-blue-800 py-5'>App Logo</Text>
      <View className='flex-row gap-x-2 bg-slate-400 rounded-md px-4 py-2'>
        <TextInput
          value={query}
          onChangeText={value => setQuery(value)}
          placeholder='Search for movies'
          className='w-full text-white font-bold'
        />
        <TouchableOpacity onPress={() => Alert.alert('searching')}>
          <Ionicons name='search' color={'white'} size={25} />
        </TouchableOpacity>
      </View>
      <Movies movies={movies} />
    </SafeAreaView>
  )
}
