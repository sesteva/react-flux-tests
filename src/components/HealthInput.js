import React from 'react/addons';
import HealthActionCreator from 'actions/HealthActionCreator';

const divStyle = {
  padding: '20'
};

class HealthInput extends React.Component {

  render() {
    return (
        <div style={divStyle}>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>BP <input type="text" name="bp" ref="bp"/></label>
            <label> Weight <input type="number" name="weight" ref="weight"/></label>
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    let bp = React.findDOMNode(this.refs.bp).value.trim();
    let weight = React.findDOMNode(this.refs.weight).value.trim();
    if (bp && weight) {
      let record = {
        bloodPressure: bp,
        weight: weight
      };
      HealthActionCreator.createRecord(record);
      React.findDOMNode(this.refs.bp).value = '';
      React.findDOMNode(this.refs.weight).value = '';
    }
  }
}

export default HealthInput;
