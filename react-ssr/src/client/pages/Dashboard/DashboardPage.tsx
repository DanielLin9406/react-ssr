import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GreenButton } from "../../shared/view/dump/Button";
interface DashboardPageProps {}

interface DashboardState {}

class DashboardPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { users } = this.props;
    return (
      (users && (
        <div>
          <Link to="/">Home</Link>
          {this.props.users.map((ele: any) => (
            <div key={ele.id}>{ele.name}</div>
          ))}
          <GreenButton>click</GreenButton>
        </div>
      )) || <div>test</div>
    );
  }
}

export default DashboardPage;
