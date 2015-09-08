import HomePage from 'pages/Home';
import HealthInput from 'components/HealthInput';
import HealthTable from 'components/HealthTable';
import createComponent from 'helpers/createComponent';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

describe('Home page', () => {
  let page;

  beforeEach( ()=> {
    // Shallow rendering -> childs are not instantiated or rendered. no DOM
    // https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
    page = createComponent(HomePage);
  });

  it('should render a form', ()=> {
    const form = page.props.children[0];
    expect(TestUtils.isElementOfType(form, HealthInput)).toBe(true);
  });

  it('should render a table', ()=> {
    const table = page.props.children[1];
    expect(TestUtils.isElementOfType(table, HealthTable)).toBe(true);
  });

});
