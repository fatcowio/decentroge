import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

import { AuthContext } from "../utils/AuthProvider";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import CTA from "../components/CTA";
import {} from "@windmill/react-ui";
import PONK from "../assets/img/irupus.png";
function Buttons() {
  const { address, signer, connect } = useContext(AuthContext);
  const [visible, setVisible] = React.useState(false);
  const [userstatus, setuserstatus] = useState("");
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  async function isUserRegistered() {
    const data = await signer?.isRegistered();
    setuserstatus(data);
  }
  useEffect(() => {
    isUserRegistered();
  }, [signer]);

  return (
    <>
      {/* {isUserRegistered() == false ? setVisible(true) : setVisible(false)} */}
      {/* <Button onClick={handler}>Open modal</Button> */}
      {userstatus == false ? (
        <Button color="gradient" onClick={handler} className="mt-6">
          Add Profile
        </Button>
      ) : (
        ""
      )}

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="place image url here"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Tell us something interesting about you"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
      <PageTitle>Decentroge Community</PageTitle>

      <form className="mb-4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            placeholder="Search Users"
            required=""
          />
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <a
          class="overflow-hidden border border-gray-200 rounded-lg grid grid-cols-1 group sm:grid-cols-3"
          href=""
        >
          <div class="relative">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src={PONK}
              alt=""
            />
          </div>

          <div class="p-8 sm:col-span-2">
            <ul class="flex space-x-1">
              <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                Tip
              </li>
            </ul>

            <h5 class="mt-4 font-bold"> 0xfab34..3afe8</h5>

            <p class="mt-2 text-sm text-gray-500">Storage Platforms</p>
            <p>fsafd</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Buttons;
