import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BoardView from './BoardView';

import { 
  boardViewActionCreators, 
  cardActionCreators 
} from './modules/index';

const mapStateToProps = state => {
  const { 
    isFocusOnCreateCardForm, 
    isCreateCardFormOpen
  } = state.boardView;

  const { 
    isFocusOnCreateCardItemForm, 
    isCreateCardItemFormOpen
  } = state.card;

  return {
    isFocusOnCreateCardForm, 
    isCreateCardFormOpen,

    isFocusOnCreateCardItemForm, 
    isCreateCardItemFormOpen
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    boardViewActions: bindActionCreators(boardViewActionCreators, dispatch),
    cardActions: bindActionCreators(cardActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardView);
