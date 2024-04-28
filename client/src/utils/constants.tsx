import { BsBoxSeam, BsHeart, BsPerson, BsLock } from 'react-icons/bs';

import { ProfileLink, TopDestination, Tour, TourFilter } from './types';

export const topDestinations: TopDestination[] = [
  {
    id: 1,
    image: './images/amsterdam.jpg',
    title: 'Amsterdam',
    toursTotal: 64,
  },
  {
    id: 2,
    image: './images/cape-town.jpg',
    title: 'Cape Town',
    toursTotal: 59,
  },
  {
    id: 3,
    image: './images/madeira.jpg',
    title: 'Madeira',
    toursTotal: 151,
  },
  {
    id: 4,
    image: './images/barcelona.jpg',
    title: 'Barcelona',
    toursTotal: 14,
  },
  {
    id: 5,
    image: './images/dusseldorf.jpg',
    title: 'Dusseldorf',
    toursTotal: 45,
  },
  {
    id: 6,
    image: './images/munich.jpg',
    title: 'Munich',
    toursTotal: 70,
  },
  {
    id: 7,
    image: './images/california.jpg',
    title: 'California',
    toursTotal: 6,
  },
  {
    id: 8,
    image: './images/london.jpg',
    title: 'Lodon',
    toursTotal: 83,
  },
];

export const profileLinks: ProfileLink[] = [
  {
    id: 1,
    text: 'Personal data',
    link: '',
    icon: <BsPerson className='w-6 h-6' />,
  },
  {
    id: 2,
    text: 'Favourites',
    link: 'favourites',
    icon: <BsHeart className='w-6 h-6' />,
  },
  {
    id: 3,
    text: 'My Tours',
    link: 'my-tours',
    icon: <BsBoxSeam className='w-6 h-6' />,
  },
  {
    id: 4,
    text: 'Change password',
    link: 'change-password',
    icon: <BsLock className='w-6 h-6' />,
  },
];

export const dummy_tours: Tour[] = [
  {
    _id: '87aba4d1-090d-457d-98c0-1d6cb41b97ac',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    image: './images/amsterdam.jpg',
    country: 'Indonesia',
    countryISO: 'ID',
    rating: 3.3,
    reviews: 279,
    price: 487,
    duration: 7,
  },
  {
    _id: '55751b3e-baef-4264-9c66-027457d7ddfe',
    title:
      'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque',
    image: './images/munich.jpg',
    country: 'Portugal',
    countryISO: 'PT',
    rating: 2.9,
    reviews: 274,
    price: 205,
    duration: 4,
  },
  {
    _id: '05ab91d3-2e68-4423-812f-c3bb02ca7601',
    title: 'vehicula consequat morbi a ipsum integer',
    image: './images/barcelona.jpg',
    country: 'Portugal',
    countryISO: 'PT',
    rating: 2.8,
    reviews: 5,
    price: 383,
    duration: 1,
  },
  {
    _id: 'cb6d966c-4de9-4c91-a65c-70ba4d4c32cc',
    title: 'eu nibh quisque id justo sit amet sapien',
    image: './images/madeira.jpg',
    country: 'China',
    countryISO: 'CN',
    rating: 3.1,
    reviews: 200,
    price: 249,
    duration: 3,
  },
  {
    _id: 'c01a87c5-18b5-4c08-ae91-b07a6e626550',
    title:
      'pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero',
    image: './images/california.jpg',
    country: 'Brazil',
    countryISO: 'BR',
    rating: 2.0,
    reviews: 242,
    price: 390,
    duration: 1,
  },
  {
    _id: '9f4712c5-0ec6-4ac6-9d5c-4c7c42613926',
    title: 'posuere metus vitae ipsum aliquam',
    image: './images/london.jpg',
    country: 'Cameroon',
    countryISO: 'CM',
    rating: 1.0,
    reviews: 162,
    price: 114,
    duration: 7,
  },
];

export const tourCategories: TourFilter[] = [
  {
    id: 1,
    text: 'city trips',
  },
  {
    id: 2,
    text: 'ecotourism',
  },
  {
    id: 3,
    text: 'escorted tour',
  },
  {
    id: 4,
    text: 'group tour',
  },
  {
    id: 5,
    text: 'hosted tour',
  },
];

export const tourLanguages: TourFilter[] = [
  {
    id: 1,
    text: 'english',
  },
  {
    id: 2,
    text: 'espanol',
  },
  {
    id: 3,
    text: 'portuguese',
  },
  {
    id: 4,
    text: 'francais',
  },
  {
    id: 5,
    text: 'japanese',
  },
];
