import React, { Component }  from 'react';
import { SectionWrapper } from './../../atoms/shared';
import CollapseBlock from "./../../molecules/Collapse";

import { getData } from "./../../../assets/utils.js";

class Projects extends Component {

  state = {
    projects: []
  }

  async componentDidMount() {
    const projects = await getData("/api/projects", "defaultProject", true);
    this.setState({projects});
  }

  render() {
    return (
      <SectionWrapper title="My projects">
        <CollapseBlock data={this.state.projects} />
      </SectionWrapper>
    );
  }

}


export default Projects;
