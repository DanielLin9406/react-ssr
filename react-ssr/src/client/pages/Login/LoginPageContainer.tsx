import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import AuthedHOC from "../../shared/presenter/routes/AuthedHOC";
// import { getCurrentUser } from "../../modules/user/model/use-case/getCurrentUser";

// const mapStateToProps = ({ staff }: { staff: any }) => ({
//   staff,
// });

// const mapDispatchToProps = (dispatch: any) =>
//   bindActionCreators({ getCurrentUser }, dispatch);

// const SSRLoadData = ({ dispatch }: { dispatch: any }) =>
//   dispatch(getCurrentUser());

// export default {
//   component: connect(mapStateToProps, mapDispatchToProps)(LoginPage),
//   SSRLoadData,
// };

export default AuthedHOC(LoginPage);
