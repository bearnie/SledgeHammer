// Timesheets
export const TIMESHEETS_ADD = 'TIMESHEETS_ADD';
export const TIMESHEETS_ADD_SUCCESS = 'TIMESHEETS_ADD_SUCCESS';
export const TIMESHEETS_REMOVE = 'TIMESHEETS_REMOVE';
export const TIMESHEETS_REMOVE_SUCCESS = 'TIMESHEETS_REMOVE_SUCCESS';

export const TIMESHEETS_START_FETCHING = 'TIMESHEETS_START_FETCHING';
export const TIMESHEETS_DONE_FETCHING = 'TIMESHEETS_DONE_FETCHING';

// Generic Firebase interactions
export const firebase = {
  FIREBASE_UPDATE_REQUESTED: 'FIREBASE_UPDATE_REQUESTED',
  FIREBASE_UPDATE_FULFILLED: 'FIREBASE_UPDATE_FULFILLED',
  FIREBASE_UPDATE_REJECTED: 'FIREBASE_UPDATE_REJECTED',

  FIREBASE_REMOVE_REQUESTED: 'FIREBASE_REMOVE_REQUESTED',
  FIREBASE_REMOVE_FULFILLED: 'FIREBASE_REMOVE_FULFILLED',
  FIREBASE_REMOVE_REJECTED: 'FIREBASE_REMOVE_REJECTED',

  FIREBASE_LISTEN_REQUESTED: 'FIREBASE_LISTEN_REQUESTED',
  FIREBASE_LISTEN_FULFILLED: 'FIREBASE_LISTEN_FULFILLED',
  FIREBASE_LISTEN_REJECTED: 'FIREBASE_LISTEN_REJECTED',
  FIREBASE_LISTEN_CHILD_ADDED: 'FIREBASE_LISTEN_CHILD_ADDED',
  FIREBASE_LISTEN_CHILD_CHANGED: 'FIREBASE_LISTEN_CHILD_CHANGED',
  FIREBASE_LISTEN_CHILD_REMOVED: 'FIREBASE_LISTEN_CHILD_REMOVED',
  FIREBASE_LISTEN_REMOVED: 'FIREBASE_LISTEN_REMOVED',

  FIREBASE_RESET_DATA: 'FIREBASE_RESET_DATA'
}

export const metaTypes = {
  customers: 'customers',
  timesheets: 'timesheets',
}

export type MetaType = $Keys<typeof metaTypes>

export type EmptyAction = {
  type: string,
}

export type MetaAction = EmptyAction & { metaType: MetaType }

export type MetaActionWithError = MetaAction & { error: string }

export type MetaActionWithItems = MetaAction & { items: Object }

export type MetaActionWithRef =  MetaAction & { ref: Object }

export type MetaActionWithId = MetaAction & { id: string }

export type MetaActionWithChild = MetaActionWithId & { value: Object }

export type MetaActionWithClear = MetaAction & { clearItems: boolean }

export type UpdateItemsActions = MetaAction | MetaActionWithError

export type RemoveItemActions = MetaAction | MetaActionWithError

export type ListenToPathActions = MetaAction | MetaActionWithRef |
  MetaActionWithChild | MetaActionWithId | MetaActionWithError |
  MetaActionWithItems | MetaActionWithClear
