// @flow
import React from "react";
import i18n from "../../localization/i18next";

const LandingPage = () => (
  <div>
    <h1>{i18n.t("landingPage.title")}</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed
      in.
    </p>
  </div>
);

export default LandingPage;
