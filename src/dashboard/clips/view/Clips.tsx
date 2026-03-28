import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions} from 'react-native';
import Video from 'react-native-video';

const { height } = Dimensions.get('window');

export function Clips() {
  return (
    <View>
      <ShortsFeed />
    </View>
  );
}

export function ShortsFeed() {
  const DATA = [
    { id: '1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: '2', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { id: '3', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <View style={clips.page}>
          <Video
            source={{ uri: item.url }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
            repeat
            paused={index !== activeIndex}
            muted
          />
        </View>
      )}
      pagingEnabled
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 80,
      }}
    />
  );
}

const clips = StyleSheet.create({
  page: {
    height
  },
});