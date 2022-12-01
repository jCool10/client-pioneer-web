import { MEMBER_DETAIL_TYPE } from '../types/MemberType';

const initialState = {
  membersLead: {},
  memberDetail: {},
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEMBER_DETAIL_TYPE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
