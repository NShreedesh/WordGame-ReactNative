import {ImageProps, ImageSourcePropType} from 'react-native/types';

export interface IWord {
  answer: string;
  imageName: ImageSourcePropType;
}

export const wordList: IWord[] = [
  {
    answer: 'cat',
    imageName: require('../../public/assets/cat.jpg'),
  },
  {
    answer: 'dog',
    imageName: require('../../public/assets/dog.jpg'),
  },
  {
    answer: 'hat',
    imageName: require('../../public/assets/hat.jpg'),
  },
  {
    answer: 'run',
    imageName: require('../../public/assets/run.jpg'),
  },
  {
    answer: 'sit',
    imageName: require('../../public/assets/sit.jpg'),
  },
  {
    answer: 'eat',
    imageName: require('../../public/assets/eat.jpg'),
  },
  {
    answer: 'cup',
    imageName: require('../../public/assets/cup.jpg'),
  },
  {
    answer: 'pen',
    imageName: require('../../public/assets/pen.jpg'),
  },
  {
    answer: 'car',
    imageName: require('../../public/assets/car.jpg'),
  },
  {
    answer: 'sun',
    imageName: require('../../public/assets/sun.jpg'),
  },
  {
    answer: 'box',
    imageName: require('../../public/assets/box.jpg'),
  },
  {
    answer: 'egg',
    imageName: require('../../public/assets/egg.jpg'),
  },
  {
    answer: 'key',
    imageName: require('../../public/assets/key.jpg'),
  },
  {
    answer: 'sad',
    imageName: require('../../public/assets/sad.jpg'),
  },
  {
    answer: 'hot',
    imageName: require('../../public/assets/hot.jpg'),
  },
  {
    answer: 'wet',
    imageName: require('../../public/assets/wet.jpg'),
  },
];
