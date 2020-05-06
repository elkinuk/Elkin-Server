import React, { Component } from 'react';

import { SectionWrapper } from './../../atoms/shared';
import Fiddle from './../../molecules/Fiddle';

import { getData } from "./../../../assets/utils.js";

class FiddlesList extends Component {
  state = { fiddles: [] }

  async componentDidMount() {
    const fiddles = await getData("/api/fiddles", "defaultFiddle");
    this.setState({ fiddles });
  }

  createGroup(data) {
    return data.map(fiddle => (
      <Fiddle
        key={ fiddle._id }
        title={ fiddle.title }
        keyHash={ fiddle.keyHash }
        text={ fiddle.text }
        config={ fiddle.config }
      />
    ));
  }

  render() {
    return ( 
      <SectionWrapper title="Fiddles">
        { this.createGroup(this.state.fiddles) }
      </SectionWrapper>
     );
  }
}
 
export default FiddlesList;