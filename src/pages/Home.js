import React from 'react/addons';
import HealthInput from 'components/HealthInput.js';
import HealthTable from 'components/HealthTable.js';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <HealthInput />
        <HealthTable />
      </div>
    );
  }
}

export default HomePage;
