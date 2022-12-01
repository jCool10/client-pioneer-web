import { MEMBER_DETAIL_TYPE } from '../types/MemberType';
import { listMember } from '../../assets/data';

const initialState = {
  listMember: listMember,

  memberDetail: {},
};

export const MemberReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEMBER_DETAIL_TYPE: {
      state.memberDetail = {};
      return { ...state, memberDetail: state.listMember.filter((member) => member.id === payload) };
    }

    default:
      return state;
  }
};
