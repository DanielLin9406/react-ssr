import React, { Component } from "react";

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
          {this.props.users.map((ele: any) => (
            <div key={ele.id}>{ele.name}</div>
          ))}
        </div>
      )) || <div>test</div>
    );
  }
}

export default DashboardPage;
