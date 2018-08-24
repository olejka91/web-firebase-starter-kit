// @flow
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";
import * as yup from 'yup'
import { compose } from "recompose";
import i18n from "../../localization/i18next";
import SignUpPage from "./SignUp";

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^\w{2,}/, i18n.t("signUpPage.uName"))
    .required(i18n.t("signUpPage.uNameRequired")),
  email: yup
    .string()
    .email(i18n.t("signUpPage.email"))
    .required(i18n.t("signUpPage.emailRequired")),
  passwordOne: yup
    .string()
    .matches(
      /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16})$/,
      i18n.t("signUpPage.password")
    )
    .required(i18n.t("signUpPage.passRequired")),
  passwordTwo: yup
    .string()
    .test("confirm", i18n.t("signUpPage.confirmPassword"), function confirm(
      val
    ) {
      return val === this.resolve(yup.ref("passwordOne"));
    })
    .required(i18n.t("signUpPage.confirmPassRequired"))
});

export default compose(
  withFormik({
    mapPropsToValues: () => {
      return { username: "", email: "", passwordOne: "", passwordTwo: "" };
    },
    validationSchema: schema,
    validateOnChange: true,
    handleSubmit: (values, { props, setSubmitting }) => {
      // NOTE: set a request or action
      // if (!props.serverErrorMessage) {
      //   setSubmitting(false);
      // }
    }
  }),
  withRouter
)(SignUpPage);
