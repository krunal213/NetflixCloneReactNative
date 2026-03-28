import { View, StyleSheet, FlatList, Image, ListRenderItem } from 'react-native';
import { AppHeader, type HeaderAction } from '../../AppHeader';
import { Chip, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { ChipItem, BannerItem, MovieItem, Content } from './homeAsyncThunk'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import React, { useEffect } from 'react';
import {homeAsyncThunk} from './homeAsyncThunk'

export function Home() {

  const dispatch = useDispatch<AppDispatch>()
  const content = useSelector((state: RootState) => state.home)
  useEffect(() => {
    dispatch(homeAsyncThunk())
  }, [dispatch])

  const headerActions: HeaderAction[] = [
    { icon: require('@assets/icons/ic_download.png'), onPress: () => console.log('Notifications') },
    { icon: require('@assets/icons/ic_search.png'), onPress: () => console.log('Search') },
  ];

  // 🔹 Type guards
  const isChips = (data: unknown[]): data is ChipItem[] =>
    typeof data[0] === 'object' && data[0] !== null && 'label' in data[0];

  const isBanner = (data: unknown[]): data is BannerItem[] =>
    typeof data[0] === 'object' && data[0] !== null && 'image' in data[0];

  const isMovieRow = (data: unknown[]): data is MovieItem[] =>
    typeof data[0] === 'object' && data[0] !== null && 'poster' in data[0];

  // 🔹 Chips Row
  const ChipsRow = ({ data }: { data: ChipItem[] }) => (
    <FlatList
      data={data} // 👈 REQUIRED
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingLeft: 16, marginTop: 12 }}
      renderItem={({ item }) => (
        <Chip
          style={home.chip}
          onPress={() => console.log('Chip:', item.id)}
        >
          {item.label}
        </Chip>
      )}
    />
  );

  // 🔹 Banner
  const Banner = ({ item }: { item: BannerItem }) => (
    <View>
      <Image
        source={{ uri: item.image }}
        style={{
          height: 480,
          borderColor: "#9aa5a9",
          borderWidth: 1.5,
          borderRadius: 12,
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16
        }}
        resizeMode="cover"
      />
    </View>
  );

  // 🔹 Movie Row
  const MovieRow = ({
    title,
    data,
  }: {
    title?: string;
    data: MovieItem[];
  }) => (
    <View style={{
      marginTop: 32,
      marginLeft: 16,
      marginRight: 16
    }}>
      {title && (
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginBottom: 10,
            marginLeft: 4,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.poster }}
            style={{
              width: 110,
              height: 160,
              borderRadius: 6,
              marginRight: 12,
            }}
          />
        )}
      />
    </View>
  );

  // 🔹 MAIN renderItem (NO type switch)
  const renderItem: ListRenderItem<Content> = ({ item }) => {
    const { data, title } = item;

    if (!data || data.length === 0) return null;
    if (isChips(data)) return <ChipsRow data={data} />;
    if (isBanner(data)) return <Banner item={data[0]} />;
    if (isMovieRow(data)) return <MovieRow title={title} data={data} />;
    return null;
  };

  return (
    <LinearGradient colors={['#20525E', '#295F6A', '#32727E']} // dark → light
      start={{ x: 0, y: 0 }}   // top
      end={{ x: 0, y: 1 }}
      style={home.container}  >
      <View style={home.container}>
        <AppHeader
          logo={require('@assets/icons/ic_netflix.png')}
          actions={headerActions} style={
            {
              backgroundColor: 'transparent', elevation: 0
            }
          } />

        <FlatList
          data={content.result ?? []}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}


const home = StyleSheet.create({
  container: {
    flex: 1
  },
  chip: {
    marginRight: 12,
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    borderWidth: 1
  }
});