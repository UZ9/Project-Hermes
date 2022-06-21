// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../stores/TeamDataStore';
import NavbarItems from '../components/NavbarItems';
import TeamCardList from '../components/TeamCardList';
import Scrollbars from 'react-custom-scrollbars';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import LoadingAnimation from '../components/loading/LoadingAnimation';


function CardsView({ isAdmin }) {

  // We can only load the custom scrollbars when the device isn't mobile
  // const { isMobile } = useMobileDetect();

  const data = useStore(state => state.teamData);


  return (
    data.length === 0 ? (
      <>
        <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarItems active="" />
        </nav>

        <LoadingAnimation />
      </>
    ) : (
      <div style={{ width: "100vw", height: "100vh" }}>
        <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarItems active="" />
        </nav>
        <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
          <div className="container-fluid">
            <TeamCardList />
          </div>
        </Scrollbars>
      </div>)
  );
}

export default CardsView;
