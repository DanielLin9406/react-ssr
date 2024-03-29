import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RequireAuthHOC from "../../shared/presenter/routes/RequireAuthHOC";
import DashboardPage from "./DashboardPage";
import { getCurrentUser } from "../../modules/user/model/use-case/getCurrentUser";

const mapStateToProps = ({ userState }: { userState: any }) => ({
  user: userState.user,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getCurrentUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequireAuthHOC(DashboardPage));
