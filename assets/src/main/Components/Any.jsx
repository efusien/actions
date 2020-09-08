import React from 'react';

class Any extends React.Component {

  constructor(props) {
    super(props);
    console.log('any');
    this.state = {
      message: 'Hello world',
    };
  }
  render() {
      //any comment1
    return (
      <div>
        {'Any'}
      </div>
    );
  }
}

Any.propTypes = {};
Any.defaultProps = {};

export default Any;