// Spinner.js
import React, { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <div  className="text-center my-3">
        <img src="/loading.gif" alt="loading" />
      </div>
    );
  }
}

export default Spinner;
