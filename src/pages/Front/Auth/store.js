<div id="preloader">
<div id="status">
    <center>
        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

    </center>
</div>
</div>
<Toaster position="top-center" reverseOrder={false} />
{/* <Header logoOut="yes"/> */}

<div className="d-lg-flex half">
    <div className="bg order-1 order-md-2 login__bg">
        <div className="container">
            <h1 style={{ color: "#FFF", marginTop: "500px", fontSize: "2.626em" }} className="text-center">
                Uche Ndi Abia 2023
            </h1>
        </div>
    </div>
    <div className="contents order-2 order-md-1" >
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7" style={isMobile ? { marginTop: "3em" } : { marginTop: "3em" }}>
                    {this.state.headText ? <center>
                        <img src={Logo} style={{ height: "100px" }} />
                        <br />
                        <br />
                        <h3 style={isMobile ? { fontSize: "16px" } : { fontSize: "20px" }}>
                            Uche Ndi Abia Recruitment Form
                        </h3>
                        {/* <h3>LlodAnt Eleaårning Solution</h3> */}
                        <br />
                        <br />
                    </center> : null}
                   



                </div>
            </div>
        </div>
    </div>
</div>