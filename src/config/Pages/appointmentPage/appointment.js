import IMAGE0 from '../../../config/Assets/Projects/image0.jpg';

export const OPTIONS = ['תספורת + זקן = 60', 'תספורת = 50', 'זקן = 20'];
export const BARBERS_HEADER = 'הספרים שלנו';

export const AVAILABLE_BARBERS = [
  {
    barberName: 'אוראל',
    barberImage: IMAGE0,
    barberDescription: 'king',
    barberAvailability: {
      ראשון: ['10:30', '14:30'],
      שני: ['10:30', '14:30'],
      שלישי: ['10:30', '14:30'],
      רביעי: ['10:30', '14:30'],
      חמישי: ['10:30', '14:30'],
    },
  },
  {
    barberName: 'שמעון',
    barberImage: IMAGE0,
    barberDescription: 'king',
    barberAvailability: {
      ראשון: ['10:30', '14:30'],
      שני: ['10:30', '14:30'],
      שלישי: ['10:30', '14:30'],
      רביעי: ['10:30', '14:30'],
      חמישי: ['10:30', '14:30'],
    },
  },
];

export const AVAILABLE_TIME_HEADER = 'השעות הפנויות הן -';

export const JOB_TYPES = [
  { text: 'תספורת & זקן', value: 'תספורת & זקן' },
  { text: 'תספורת', value: 'תספורת' },
  { text: 'זקן', value: 'זקן' },
];
