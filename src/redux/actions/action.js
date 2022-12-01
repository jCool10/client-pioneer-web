import { MEMBER_DETAIL_TYPE } from '../types/MemberType';

export const MemberDetailAction = (id) => ({
  type: MEMBER_DETAIL_TYPE,
  payload: id,
});
