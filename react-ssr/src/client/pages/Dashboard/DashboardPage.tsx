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
    const { user } = this.props;
    // console.log(this.props.user);
    return (
      (user && (
        <div>
          <Link to="/">Home</Link>
          {this.props.user.map((ele: any) => (
            <div key={ele.id}>{ele.name}</div>
          ))}
          <GreenButton>click</GreenButton>
        </div>
      )) || <div>test</div>
    );
  }
}

export default DashboardPage;
