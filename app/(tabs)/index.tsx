import MovieCard from "@/components/movieCard";

import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data:movies,
    loading: moviesLoading,
    error: moviesError,
    reset,
  } = useFetch(() => fetchMovies({ query: "" })
  )


  return (
    <View className=" flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={icons.logo}
          className="h-12 w-10 justify-center mt-20 mb-5 mx-auto "
        />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className=" mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error :{moviesError?.message}</Text>
        ) : (
          <View>
            <View>
              <SearchBar
                onPress={() => {
                  router.push("/search");
                }}
                placeholder="Search for a movie"
              />
            </View>

            <>
              <Text className=" text-lg text-white font-bold mt-5 mb-3">
                {" "}
                Latest Movis
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                   <MovieCard {...item} />
                  //  <Text className=" text-white text-sm">{item.title}</Text>
                )
              
              }
              keyExtractor={(item)=> item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{justifyContent:'flex-start', gap:20, paddingRight:5 , marginBottom:10}}
              className="mt-2 pb-32"
              scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
