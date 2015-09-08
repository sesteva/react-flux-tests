import React from 'react/addons';
import HealthStore from 'stores/HealthStore';
import ItemRow from 'components/TableRow';

const propTypes = {};

const tableStyle = {
  padding: '20',
  width: '100%'
};

function getStateFromStores() {
  return {
    items: HealthStore.getState()
  };
}

function getItem(item, index) {
  return (
    <ItemRow item={item} key={index}/>
  );
}

class HealthTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = getStateFromStores();
    this.listeners = {
      healthChangeListener: null
    };
  }

  componentDidMount() {
    // https://gist.github.com/flatanimals/01d861fd231a840d82d6#file-stuff-jsx-L21
    this.listeners.healthChangeListener = this.onChange.bind(this);
    HealthStore.addChangeListener(this.listeners.healthChangeListener);
  }

  componentWillUnmount() {
    if (this.listeners.healthChangeListener !== null) {
      HealthStore.removeChangeListener(this.listeners.healthChangeListener);
    }
  }

  render() {
    let listItems = this.state.items.map(getItem);
    return (
      <div>
        <table style={tableStyle}>
          <tr>
            <th>BP</th>
            <th>Weight</th>
            <th>Action</th>
          </tr>
          {listItems}
        </table>
      </div>
    );
  }

  onChange() {
    this.setState(getStateFromStores());
  }

}

HealthTable.propTypes = propTypes;

export default HealthTable;
