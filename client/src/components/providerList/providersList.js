import React from 'react';
// import "./addAdminUser.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';  

export const Providerslist =() => { 
    return (
        <div className="provdrs_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>LOGO</th>
                                            <th></th>
                                            <th>STATUS</th>
                                            <th>UPDATE</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div className="provdr_lgo"><img src="images/skills_australia.jpg"></img></div></td>
                                            <td>Global College Australasia</td>
                                            <td><span className="provdr_status">Invisible to agents</span></td>
                                            <td>4 months ago</td>
                                            <td><a href="#">Edit &nbsp;<i className="fas fa-pen"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><div className="provdr_lgo"><img src="images/skills_australia.jpg"></img></div></td>
                                            <td>Global College Australasia</td>
                                            <td>Invisible to agents</td>
                                            <td>4 months ago</td>
                                            <td><a href="#">Edit &nbsp;<i className="fas fa-pen"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
        </div>
    )
};