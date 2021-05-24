import React, { useState } from 'react';
import styled from "styled-components";
import CopyrightIcon from '@material-ui/icons/Copyright';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from './SidebarOption';
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Chat app by Virginijus</h2>
          <h3>
            <FiberManualRecordIcon />
           {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={CopyrightIcon} title="Options" />
      <SidebarOption Icon={CopyrightIcon} title="Options 2" />
      <SidebarOption Icon={CopyrightIcon} title="Options 3" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Pridėti pokalbių kambarį" />

    {channels?.docs.map((doc) => (
      <SidebarOption 
      key={doc.id} 
      id={doc.id}
      title={doc.data().name} 
      />
    ))}
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--app-color);
  flex: 0.3;
  border-top: 1px solid #262626;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #262626;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #262626;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: blue;
  }
`;