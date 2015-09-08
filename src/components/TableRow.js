import React from 'react/addons';
import HealthActionCreator from 'actions/HealthActionCreator';

const propTypes = {
  item: React.PropTypes.object
};

const cellStyles = {
  textAlign: 'center',
  paddingTop: '20'
};

class ItemRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td style={cellStyles}>{this.props.item.bloodPressure}</td>
        <td style={cellStyles}>{this.props.item.weight}</td>
        <td style={cellStyles}><button onClick={this.onRemove.bind(this)}>Remove</button></td>
      </tr>
    );
  }

  onRemove() {
    HealthActionCreator.eliminateRecord(this.props.item);
  }
}

ItemRow.propTypes = propTypes;

export default ItemRow;
