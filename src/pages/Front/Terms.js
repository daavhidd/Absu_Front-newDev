<div id="preloader2"
style={{ display: "none" }}
>
<div id="status row container" style={{ marginTop: "5em" }}>
    <div className="col-sm-8 text-white container" style={{ textAlign: "right", width: "85%" }}>
        <i className="fa fa-times" style={{ marginLeft: "-20px" }} onClick={closeYouthWing} />
    </div>
    <center className="col-sm-12 text-white">
        <div className={isMobile ? "container" : null} style={isMobile ? { background: "#8f0d22", minHeight: "75vh", paddingBottom: "71px", paddingTop: "20px" } : { background: "#8f0d22", height: "auto", paddingBottom: "150px" }}>
            <div className="row justify-content-center" style={!isMobile ? { paddingLeft: "30em", paddingRight: "30em" } : null}>
                <div className="col-lg-12 col-sm-12 text-center" style={!isMobile ? { marginTop: "6rem" } : null}>
                    <h2 className="font-weight-bolder monte " style={{ fontSize: "20px", color: "#fff" }}>
                        Youth Wing
                    </h2>

                    <p className="font-weight-400 mt-1 mb-5 monte" style={isMobile ? { lineHeight: "17px", fontSize: "14px", padding: "9px", color: "#fff", marginTop: "-13px" } : { fontSize: "14px", color: "#fff" }}>
                        <span>Join Our Youth Wing</span>
                        <br />
                        <br />
                        {!isMobile ?
                            <>
                                <br />
                            </>
                            : null
                        }
                           <div className="text-center"
                        // style={{ display: "flex", gap: "8px" }}
                        >
                            {/* <center>
                <Link to={"/recruitment"}>
                                        <button className="btn btn-outline-primary monte" style={{
                                            width: "220px", float: "left", fontSize: "16px",
                                        }}>Join our youth wing</button>
                                    </Link>

                                    <span>
                                        
                                        <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginLeft: "-14px", marginTop: "3px" }} />
                                    </span>
                                    </center> */}
                                    <Upload
                                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={state.fileList}
                                    // onPreview={handlePreview}
                                    onChange={handleChange}
                                    customRequest={dummyRequest}
                                    beforeUpload={beforeUpload}
                                    maxCount={1}
                                >
                                    {state.fileList.length >= 1 ? null :  
                                    <div style={{color:"#fff"}}>
{state.loading ? <LoadingOutlined /> : <PlusOutlined />}
<div style={{ marginTop: 8, fontSize:"10px" }}>Upload Passport</div>
</div>}
                                    {/* {this.state.imageUrl && fileList.length >= 1 ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                                    {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
                                </Upload>
                            <Input className="" onChange={(e) => { setState({ personName: e.target.value }) }} color="#ffffffd6"

                                placeholder="Name*" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} />

                            <Input onChange={(e) => { setState({ phone: e.target.value }) }} placeholder="Phone"

                                color="#ffffffd6" style={{ background: "transparent", border: "1px solid #fff", padding: '5px', width: "100%", color: "#ffffffd6", fontSize: "12px", marginTop: "20px" }} />


                            <select style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} onChange={(e) => { setState({ lga: e.target.value }) }}>
                                <option value="">LGA</option>

                                {allLgas && allLgas.map(x => {
                                    return (
                                        <option value={x}>{x}</option>

                                    )
                                })}
                            </select>
                            <select onChange={(e) => { setState({ wingtype: e.target.value }) }} style={{ background: "transparent", border: "1px solid #fff", marginTop: "20px", padding: '8px', width: "100%", color: "#ffffffd6", fontSize: "12px" }} 
                            // onChange={(e) => { setState({ lga: e.target.value }) }}
                            >
                                <option value="">Select Women Wing</option>

                                {/* {allLgas && allLgas.map(x => {
                            return (
                                <option value={x}>{x}</option>

                            )
                        })} */}
                            </select>
                            <button type="button" onClick={() => handleRegister()} className="btn btn-outline-primary" style={{
                                width: "100%", float: "left", fontSize: "10px", marginTop: "10em"
                            }}>Submit <i className="fa fa-arrow-right" /></button>
                            {/* <img src="https://www.donaldjtrump.com/assets/images/icons/arw.svg" style={{ width: "36px", marginTop: "2px" }} onClick={() => handleRegister()} /> */}
                        </div>



                    </p>

                </div>
            </div>

        </div>
        {/* <img src={bannerModal} style={isMobile ? {width:"88%"} : {width:"50%"}}/> */}

    </center>
</div>
</div>