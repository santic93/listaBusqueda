const SEARCH = 'SEARCH';
const ACTIVE = 'ACTIVE';

export default function UseReducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case SEARCH:
      return { ...state, search: payload };
    case ACTIVE:
      return { ...state, active: payload };
  }
}
