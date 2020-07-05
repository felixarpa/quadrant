import React from "react";
import {
  Navbar,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Icon } from "@material-ui/core";
import "../index.scss";

const Toolbar = (props) => (
  <Navbar className="justify-content-between projects-toolbar">
    <input className="projects-toolbar-search-box" placeholder="Search" onChange={props.handleSearch} />
    <Form inline>
      <DropdownButton
        id="project-sorting"
        title="Sort"
        className="mr-sm-2"
        variant="outline-primary"
        onSelect={props.handleSorting}
      >
        <Dropdown.Item eventKey="new" active={props.sorting === "new"}>Newest</Dropdown.Item>
        <Dropdown.Item eventKey="old" active={props.sorting === "old"}>Oldest</Dropdown.Item>
        <Dropdown.Item eventKey="name" active={props.sorting === "name"}>Name</Dropdown.Item>
      </DropdownButton>
      <ToggleButtonGroup name="layout-toggle" type="checkbox" value={props.layout} onChange={props.handleLayout}>
        <ToggleButton variant="outline-primary" value="gallery"><Icon>view_module</Icon></ToggleButton>
        <ToggleButton variant="outline-primary" value="list"><Icon>view_list</Icon></ToggleButton>
      </ToggleButtonGroup>
    </Form>
  </Navbar>
);

export default Toolbar;
