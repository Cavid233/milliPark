import React from 'react';
import { StyleSheet } from 'react-native';
import { DesignCanvas } from '@/components';
import ActivityCard from '../activityCard';
import { SvgXmlIconNames } from '@/assets';
import SlideHeading from './slideHeading';

// Listed bottom-to-top in Figma's stacking order.
const activities = [
  {
    title: 'Qayıqla\ngəzinti',
    icon: SvgXmlIconNames.boat,
    iconLayout: { left: 53.58, top: 18.47, width: 140, height: 140 },
    position: { left: 52.98, top: 449.78, rotate: '-4deg' },
  },
  {
    title: 'Piyada\ngəzinti',
    icon: SvgXmlIconNames.hiking,
    iconLayout: { left: 83.57, top: 12.57, width: 90, height: 120 },
    position: { left: 177.98, top: 522.78, rotate: '4deg' },
  },
  {
    title: 'Düşərgə',
    icon: SvgXmlIconNames.camping,
    iconLayout: { left: 69.7, top: 1.17, width: 140, height: 140 },
    position: { left: 181.93, top: 348.75, rotate: '4deg' },
  },
  {
    title: 'Veloyürüş',
    icon: SvgXmlIconNames.bicycle,
    iconLayout: { left: 62.79, top: 19.07, width: 125.219, height: 90.001 },
    position: { left: 55.98, top: 282.78, rotate: '-4deg' },
  },
];

const ExperiencesSlide = () => {
  return (
    <DesignCanvas>
      <SlideHeading
        top={118}
        title="Unudulmaz təcrübələr yaşayın"
        description="Piyada gəzinti, dağçılıq, düşərgə, foto, safari və daha çoxu"
      />
      {activities.map(({ title, icon, iconLayout, position }) => (
        <ActivityCard
          key={title}
          title={title}
          icon={icon}
          iconLayout={iconLayout}
          style={[
            styles.card,
            {
              left: position.left,
              top: position.top,
              transform: [{ rotate: position.rotate }],
            },
          ]}
        />
      ))}
    </DesignCanvas>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
  },
});

export default ExperiencesSlide;
