import { BsBoxSeam, BsHeart, BsPerson, BsLock } from 'react-icons/bs';

import { ProfileLink, TopDestination, Tour, TourFilter } from './types';

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

export const topDestinations: TopDestination[] = [
  {
    id: 1,
    text: 'amsterdam',
    image: './images/amsterdam.jpg',
    link: '/tours/amsterdam',
  },
  {
    id: 2,
    text: 'barcelona',
    image: './images/barcelona.jpg',
    link: '/tours/barcelona',
  },
  {
    id: 3,
    text: 'california',
    image: './images/california.jpg',
    link: '/tours/california',
  },
  {
    id: 4,
    text: 'cape town',
    image: './images/cape-town.jpg',
    link: '/tours/cape-town',
  },
  {
    id: 5,
    text: 'dusseldorf',
    image: './images/dusseldorf.jpg',
    link: '/tours/dusseldorf',
  },
  {
    id: 6,
    text: 'london',
    image: './images/london.jpg',
    link: '/tours/london',
  },
  {
    id: 7,
    text: 'madeira',
    image: './images/madeira.jpg',
    link: '/tours/madeira',
  },
  {
    id: 8,
    text: 'munich',
    image: './images/munich.jpg',
    link: '/tours/munich',
  },
];

export const dummy_tours: Tour[] = [
  {
    _id: '87aba4d1-090d-457d-98c0-1d6cb41b97ac',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 10.55,
    location: {
      city: 'london',
      country: 'united kingdom',
    },
    rating: 3.8,
    numOfReviews: 35,
    included: [],
    excluded: [],
    image: './images/london.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: '55751b3e-baef-4264-9c66-027457d7ddfe',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 487,
    location: {
      city: 'paris',
      country: 'france',
    },
    rating: 4.8,
    numOfReviews: 635,
    included: [],
    excluded: [],
    image: './images/amsterdam.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: '05ab91d3-2e68-4423-812f-c3bb02ca7601',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 487,
    location: {
      city: 'porto',
      country: 'portugal',
    },
    rating: 3,
    numOfReviews: 63,
    included: [],
    excluded: [],
    image: './images/barcelona.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: 'cb6d966c-4de9-4c91-a65c-70ba4d4c32cc',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 99.99,
    location: {
      city: 'barcelona',
      country: 'spain',
    },
    rating: 4.8,
    numOfReviews: 635,
    included: [],
    excluded: [],
    image: './images/amsterdam.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: 'c01a87c5-18b5-4c08-ae91-b07a6e626550',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 105,
    location: {
      city: 'california',
      country: 'united states',
    },
    rating: 2.2,
    numOfReviews: 1054,
    included: [],
    excluded: [],
    image: './images/california.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: '9f4712c5-0ec6-4ac6-9d5c-4c7c42613926',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 1010,
    location: {
      city: 'dusseldorf',
      country: 'germany',
    },
    rating: 5,
    numOfReviews: 5536,
    included: [],
    excluded: [],
    image: './images/dusseldorf.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: '9f4712c5-0ec6-4ac6-9d5c-4c7c42613925',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 1010,
    location: {
      city: 'funchal',
      country: 'madeira',
    },
    rating: 5,
    numOfReviews: 15536,
    included: [],
    excluded: [],
    image: './images/madeira.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
  {
    _id: '9f4712c5-0ec6-4ac6-9d5c-4c7c42613927',
    title: 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
    description: '',
    price: 60.55,
    location: {
      city: 'cape town',
      country: 'south africa',
    },
    rating: 3.6,
    numOfReviews: 536,
    included: [],
    excluded: [],
    image: './images/cape-town.jpg',
    duration: 120,
    createdBy: '6620cd4a216876fa0945c751',
  },
];

export const durationList: TourFilter[] = [
  { id: 1, text: '1 Day', value: '1' },
  { id: 2, text: '2-4 Days', value: '2-4' },
  { id: 3, text: '5-7 Days', value: '5-7' },
  { id: 4, text: '7+ Days', value: '7' },
];

export const ageList: TourFilter[] = [
  { id: 1, text: '10+', value: '' },
  { id: 2, text: '12+', value: '' },
  { id: 3, text: '15+', value: '' },
];

export const activityList: TourFilter[] = [
  { id: 1, text: 'City Tours', value: '' },
  { id: 2, text: 'Family Friendly Tours', value: '' },
  { id: 3, text: 'Outdoor Activities', value: '' },
  { id: 4, text: 'Wild & Adventure Tours', value: '' },
  { id: 5, text: 'Indulgence & Luxury Tours', value: '' },
];

export const locationList: TourFilter[] = [
  { id: 1, text: 'America', value: '' },
  { id: 2, text: 'Asia', value: '' },
  { id: 3, text: 'Scandinavia', value: '' },
  { id: 4, text: 'South Africa', value: '' },
  { id: 5, text: 'Western Europe', value: '' },
];
