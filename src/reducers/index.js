import {ADD_RECIPE, REMOVE_FROM_CALENDAR} from '../actions'
import {combineReducers} from 'redux'

function food(state={}, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const {recipe} = action
      return {
        ...state,
        [recipe.label]: recipe
      }
      //break;
    default:
      return state
  }
}

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

function calendar(state = initialCalendarState, action) {
  const {day, meal, recipe} = action;
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
      //break;
    case REMOVE_FROM_CALENDAR:
        return {
          ...state,
          [day]: {
            ...state[day],
            [meal]: null,
          }
        }
        //break;
    default:
      return state
  }
}

export default combineReducers({
  food,
  calendar
})
