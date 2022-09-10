import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import { Card, CardBody } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";

function Cards() {
  return (
    <>
      <PageTitle>Settings</PageTitle>

      <p className="dark:text-white">Display</p>
    </>
  );
}

export default Cards;
