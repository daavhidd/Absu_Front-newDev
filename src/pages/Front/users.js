import React, { useEffect, useState } from 'react';
import { darken, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GroupIcon from '@mui/icons-material/Group';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import {useMergeState} from "../../ /utility/helpers";
import { useMergeState } from "../../utils/helpers";
import { Input, Modal, Upload, message } from 'antd';
import { PlusOutlined, UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import Endpoint from "../../utils/endpoint";
import "antd/dist/antd.css";
import {MDBDataTableV5} from "mdbreact";
import { PulseSpinner } from "react-spinners-kit";
import $, { data } from "jquery"
const drawerWidth = 240;



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
let userArr = []
export const Users = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [userList, setUserList] = React.useState([false]);
    const [state, setState] = useMergeState({
        personalData: [],
        fileList:[],
        userList:[],
        viewOppen:false,
        personName:"",
        lga:"",
        passportUrl:"",
        email:"",
        higestQualification:"",
        dateOfBirth:""
    });
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleChange = ({ fileList }) => {
        setState({ fileList });
        setTimeout(() => {
            console.log(state.fileList);
        }, 2000);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = true;
        // const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "doc/pdf" || file.type === "doc/docx";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        console.log(file, "file before");
        //fileHold = file;

        setTimeout(() => {
            // console.log(fileHold, "exttrrrr before");
        }, 1500);

        return isJpgOrPng && isLt2M;
    };
    const loadUsers = () => {
     
            Endpoint.getAllPerson()
                .then((rep) => {
                    // this.setState({pageLoading: false});
                    console.log(rep.data);
                    $("#preloader").fadeOut()
                    var dataReal = rep?.data;
                    // for(var a = 0; a = dataReal.length; a++){
                    //     if(dataReal?.firstName[a].includes("null")){

                    //     }
                    //     else{
                    //         userArr.push(rep.data[a])
                    //     }
                    // }
                    let mappedData = dataReal.map((x, i) => {
                        if(!x?.firstName?.includes("null")){
                            return{
                                sNo: i + 1,
                                name: x.lastName == null || x.firstName==null ? "-" : x.lastName + " " + x.firstName,
                                email: x.email,
                                actions:
                                    <div>
                                        <button className="btn btn-sm btn-primary"
                                        style={{background:"#490404"}}
                                        onClick={() => handlePreview(x)}>
                                            view
                                        </button>
                                    </div>
                            }
                        }
                     
                    });
                    // if(mappedData && mappedData)
                    console.log(mappedData, "mapp");
                    let tableData = {
                        columns: [
                            {
                                label: 'S/No',
                                field: 'sNo',
                            },
                            {
                                label: 'Name',
                                field: 'name',
                            },
                            {
                                label: 'Email',
                                field: 'email',
                            },
                            {
                                label: ' ',
                                field: 'actions',
                            },
                        ],
                        rows: mappedData,
                    };
                    userArr = tableData
                    setState({userList: tableData});
                    setTimeout(() => {
                       console.log(state.userList) 
                    }, 2000);
                })
        
    }
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 2000);
    };
    const handlePreview = (data) => {
        console.log(data)
        setState({
            viewOppen: !state.viewOppen,
            personName: data.firstName + " " + data.lastName,
            passport: data.passportUrl,
            email: data.email,
            lga: data.lga,
            higestQualification:data.higestQualification,
            dateOfBirth: data.dateOfBirth

        })


    }
    useEffect(() => {
        loadUsers()
    }, []);
    return (
        <Box sx={{ display: 'flex' }}>
              <Modal title={state.personName} visible={state.viewOppen} onOk={handlePreview} onCancel={handlePreview}>
                <img src={state.passportUrl} style={{width:"50px"}}/>
                <p>
                   Email:  {state.email}
                </p>
                <p>
                   LGA:  {state.lga}
                </p>
                <p>
                   Highest Qualification:  {state.higestQualification}
                </p>
                <p>
                   Date of birth:  {state.dateOfBirth}
                </p>
            </Modal>
            <div id="preloader">
                <div id="status">
                    <center>
                        <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />

                    </center>
                </div>
            </div>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ background: "#490404", fontSize: "15px" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" className="monte" style={{ fontSize: "15px" }}>
                        Admin Panel Uche Ndi Abia
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    
                    {/* <ListItem key={1} disablePadding sx={{ display: 'block' }}>
                    <Link to="/admin/dashboard">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GroupIcon />

                            </ListItemIcon>
                            <ListItemText style={{color:"#000"}} primary={"Form setup"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </Link>
                    </ListItem> */}

                    <ListItem key={1} disablePadding sx={{ display: 'block' }}>
                    <Link to="/admin/manage__users">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <GroupIcon />

                            </ListItemIcon>
                            <ListItemText style={{color:"#000"}} primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </Link>
                    </ListItem>
                </List>
                <Divider />

            </Drawer>


            <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ marginTop: "1px", background: "#fff" }}>
                <DrawerHeader />

                <div className='row'>

                    <div className='col-sm-12 col-lg-12'>
                            <h3 className='l' style={{ fontSize: "15px", fontWeight:"700" }}>
                                View users
                            </h3>
                    </div>

                    <div className='col-sm-12 col-lg-12'>
                    <div className="overflow-scroll">
						<MDBDataTableV5
							hover
							striped
							entriesOptions={[10, 20, 25]}
							entries={10}
							pagesAmount={4}
							pagingTop
							searchTop
							searchBottom={false}
							// data={state.userList}
							data={userArr}
							sortRows={['name']}
						/>
					</div>
                    </div>
                 

                    <div className='col-sm-12'>
                        <button className='btn btn-primary' style={{background:"#22420d"}}>
                            Save <i className='fa fa-save' />
                        </button>
                    </div>
                </div>

                <hr />
            </Box>
        </Box>
    );
}


export default Users;