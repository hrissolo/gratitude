import React from 'react'
import { Tab } from 'semantic-ui-react'
import { ApplicantList } from "./ApplicantList"
import { DeniedList } from "./DeniedList"
import { AcceptedList } from "./AcceptedList"
import "./Application.css"

const panes = [
  
  { menuItem: 'Applicants', render: () => <Tab.Pane> <ApplicantList/> </Tab.Pane> },
  { menuItem: 'Accepted', render: () => <Tab.Pane> <AcceptedList/> </Tab.Pane> },
  { menuItem: 'Denied', render: () => <Tab.Pane>  <DeniedList/> </Tab.Pane> },
  
]

export const ApplicantTabs = () => {
return <> <div className="tabContainer"> <Tab panes={panes}  /></div></>}