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
      //any comment
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