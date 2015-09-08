import HealthInput from 'components/HealthInput';
import React from 'react/addons';

let mockActionCreator = {
  createRecord(record) {
    // console.log('creating record after submitting form succesfully...')
    return null;
  }
};

HealthInput.__Rewire__('HealthActionCreator', mockActionCreator);

const TestUtils = React.addons.TestUtils;

describe('HealthInput component', () => {
  let component, form, renderedDOM, bp, weight, button;

  beforeEach( ()=> {
    component = TestUtils.renderIntoDocument(<HealthInput />);
    renderedDOM = () => React.findDOMNode(component);
    form = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
    bp = React.findDOMNode(component.refs.bp);
    weight = React.findDOMNode(component.refs.weight);
  });

  it('should render empty default values for bp and weight', ()=> {
    expect(bp.value).toEqual('');
    expect(weight.value).toEqual('');
  });

  describe('when submitting the form', () => {

    it('should clean inputs if bp and weight values exist', ()=> {
      bp.value = 'hola';
      TestUtils.Simulate.change(bp);

      weight.value = 1;
      TestUtils.Simulate.change(weight);

      TestUtils.Simulate.submit(form);

      expect(bp.value).toEqual('');
      expect(weight.value).toEqual('');

    });

    it('should not clean if bp or weight are missing', ()=> {
      bp.value = 'hola';
      TestUtils.Simulate.change(bp);

      TestUtils.Simulate.submit(form);

      expect(bp.value).toEqual('hola');
      expect(weight.value).toEqual('');
    });

  });

});
