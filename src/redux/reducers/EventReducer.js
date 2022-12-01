import { eventData } from '../../assets/eventData';
import { experienceData } from '../../assets/experienceData';

const initialState = {
  eventData,
  experienceData,
};

export const EventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'first':
      return { ...state, ...payload };

    default:
      return state;
  }
};
