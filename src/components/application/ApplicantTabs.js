import React from 'react'
import { Tab } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Applicants', render: () => <Tab.Pane>Table of all applicants here.. no intake date
      
  </Tab.Pane> },
  { menuItem: 'Accepted', render: () => <Tab.Pane>Table of accepted applicants.. no intake date yet.</Tab.Pane> },
  { menuItem: 'Denied', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export const ApplicantTabs = () => <Tab panes={panes}  />