import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DashboardPage from "./DashboardPage";
import { getCurrentUser } from "../../modules/user/model/use-case/getCurrentUser";

const mapStateToProps = ({ userProfile }: { userProfile: any }) => ({
  users: userProfile.users,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getCurrentUser }, dispatch);

// const SSRLoadData = ({ dispatch }: { dispatch: any }) =>
//   dispatch(getCurrentUser());

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

// export default {
//   component: connect(mapStateToProps, mapDispatchToProps)(DashboardPage),
//   SSRLoadData,
// };
