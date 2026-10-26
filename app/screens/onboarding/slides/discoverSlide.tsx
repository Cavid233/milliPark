import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DesignCanvas } from '@/components';
import ParkCard from '../parkCard';
import { images } from '@/assets';
import SlideHeading from './slideHeading';

// Side cards sit centered in their rotated Figma bounds; the center card is
// the same card scaled up to 200x217.
const DiscoverSlide = () => {
  return (
    <DesignCanvas>
      <SlideHeading
        top={157}
        title={'Azərbaycanın\ntəbii gözəlliklərini kəşf edin'}
        description="Milli parklar, dağlar, çaylar və göllərlə daha yaxın olun"
      />
      <View style={styles.cards}>
        <ParkCard
          image={images.hirkanPark}
          title="Hirkan Milli Parkı"
          location="Astara, Azərbaycan"
          isDimmed
          style={[styles.card, styles.rightCard]}
        />
        <ParkCard
          image={images.shahdagPark}
          title="Şahdağ Milli Parkı"
          location="Qusar, Azərbaycan"
          style={[styles.card, styles.leftCard]}
        />
        <ParkCard
          image={images.goygolPark}
          title="Göygöl Milli Parkı"
          location="Gəncə, Azərbaycan"
          style={[styles.card, styles.centerCard]}
        />
      </View>
    </DesignCanvas>
  );
};

const styles = StyleSheet.create({
  cards: {
    position: 'absolute',
    left: -49,
    top: 386,
    width: 500,
    height: 262,
  },
  card: {
    position: 'absolute',
  },
  rightCard: {
    left: 309.84,
    top: 26.51,
    transform: [{ rotate: '7deg' }],
  },
  leftCard: {
    left: 11.21,
    top: 26.29,
    transform: [{ rotate: '-7deg' }],
  },
  centerCard: {
    left: 161,
    top: 11,
    transform: [{ scale: 200 / 180 }],
  },
});

export default DiscoverSlide;
