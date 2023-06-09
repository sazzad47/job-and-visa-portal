import React from "react";
import Checkout from "../../components/payment";
import Breadcrumb from "../../components/Breadcrumb";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import Auth from "../../components/Auth";
import Head from "next/head";

export default function Payment() {
  const { state } = useContext(DataContext);
  const { auth } = state;

  return (
    <>
      {auth.token ? (
        <>
          <Breadcrumb title="Payment" />
          <Head>
            <title>Payment</title>
          </Head>
          <Checkout />
        </>
      ) : (
        <div className="authContainer">
          <Auth />
        </div>
      )}
    </>
  );
}
