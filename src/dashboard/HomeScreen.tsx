import { View, StyleSheet, FlatList, Image, ListRenderItem } from 'react-native';
import { AppHeader, type HeaderAction } from './AppHeader';
import { Chip, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export function HomeScreen() {
  const headerActions: HeaderAction[] = [
    { icon: 'arrow-collapse-down', onPress: () => console.log('Notifications') },
    { icon: 'magnify', onPress: () => console.log('Search') },
  ];

  // 🔹 Section interface (NO id, NO type)
  interface Content {
    title?: string;
    data: unknown[];
  }

  // 🔹 Item interfaces (IDs ONLY here)
  interface ChipItem {
    id: string;
    label: string;
  }

  interface BannerItem {
    id: string;
    image: string;
    title: string;
  }

  interface MovieItem {
    id: string;
    poster: string;
  }

  // 🔹 Data
  const content: Content[] = [
    {
      data: [
        { id: 'c1', label: 'Coming Soon' },
        { id: 'c2', label: 'Comedy' },
        { id: 'c3', label: 'Drama' },
        { id: 'c4', label: 'Sci-Fi' },
        { id: 'c5', label: 'Romance' },
      ],
    },
    {
      data: [
        {
          id: 'b1',
          image:
            'https://m.media-amazon.com/images/M/MV5BMmQ0ZjliZTgtMjQ3NC00N2NiLTkxNjktY2VkOTQ2N2QyODNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          title: 'Kuch Kuch Hota Hai',
        },
      ],
    },
    {
      title: 'Releases in the Past Year',
      data: [
        {
          id: 'm1',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Tu_Meri_Main_Tera_Main_Tera_Tu_M_1765534607.jpg',
        },
        {
          id: 'm2',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Raat_Akeli_Hai_The_Bansal_Murders_1765883140.jpg',
        },
      ],
    },
    {
      title: 'Continue Watching',
      data: [
        {
          id: 'm3',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Tu_Meri_Main_Tera_Main_Tera_Tu_M_1765534607.jpg',
        },
        {
          id: 'm4',
          poster:
            'https://assets.gadgets360cdn.com/pricee/assets/product/202512/Raat_Akeli_Hai_The_Bansal_Murders_1765883140.jpg',
        },
      ],
    },
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
          style={homeScreen.chip}
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
      style={homeScreen.container}  >
      <View style={homeScreen.container}>
        <AppHeader title={
          <Image
            source={require('../../assets/icons/ic_netflix.png')}
          />
        } actions={headerActions} style={
          {
            backgroundColor: 'transparent', elevation: 0
          }
        } />

        <FlatList
          data={content}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}


const homeScreen = StyleSheet.create({
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