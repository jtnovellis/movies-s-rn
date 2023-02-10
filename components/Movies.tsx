import { Image, ScrollView, Text, View } from 'react-native'
import { Movie } from '../types'

interface MoviesProps {
  movies: Movie[]
}

function ListOfMovies({ movies }: MoviesProps) {
  return (
    <ScrollView className='mt-12 w-full'>
      {movies.map(movie => (
        <View key={movie.imdbID} className=''>
          <Text className='text-blue-900 font-bold text-md py-2'>
            {movie.Title}
          </Text>
          <Image
            style={{ width: 270, height: 320 }}
            source={{
              uri: movie.Poster,
            }}
          />
        </View>
      ))}
    </ScrollView>
  )
}

function NoMovies() {
  return <Text>There are not movies</Text>
}

export default function Movies({ movies }: MoviesProps) {
  const hasMovies = movies.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />
}
