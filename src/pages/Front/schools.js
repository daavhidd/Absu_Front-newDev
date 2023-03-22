import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { PulseSpinner } from "react-spinners-kit";
import $ from "jquery";
import Header from "../../layouts/FrontHeader";
import Footer from "../../layouts/Footer";
import { enquireScreen } from "enquire-js";



let isMobile;

enquireScreen((b) => {
    isMobile = b;
});

const Schools = () => {
  useEffect(() => {
    setTimeout(() => {
      $("#preloader").fadeOut();
    }, 2000);
  }, []);
  require("antd/dist/antd.css");

  return (
    <>
      <div id="preloader">
        <div id="status">
          <center>
            <PulseSpinner
              color="white"
              backColor="#FFF"
              frontColor="#FFF"
              size={45}
            />
          </center>
        </div>
      </div>
      <div className="min-vh-100">
        <Header />

        

        <Footer />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Schools);