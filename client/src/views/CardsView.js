// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../stores/TeamDataStore';
import NavbarLogo from '../components/NavbarLogo';
import NavbarItems from '../components/NavbarItems';
import TeamCardList from '../components/TeamCardList';
import Scrollbars from 'react-custom-scrollbars';
import { useMobileDetect } from '../util/responsiveHooks';


function CardsView({ isAdmin }) {

  // We can only load the custom scrollbars when the device isn't mobile
  // const { isMobile } = useMobileDetect();

  const data = useStore(state => state.teamData);

  // const logOut = () => firebase.auth().signOut();

  // console.log(isMobile);

  return (
    data.length === 0 ? (
      <div className="loadingio-spinner-eclipse-uzl9l7691o "><div className="ldio-5ki7dfraqbv">
        <div></div>
      </div></div>
    ) : (
      <div style={{ width: "100vw", height: "100vh" }}>
        <nav className="mb-0 navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarItems active="" />
        </nav>
        {/* 
        {isMobile ?
          <div className="container-fluid">
            <TeamCardList />
          </div>
          : */}
        <Scrollbars autoHeight autoHeightMin={"100vh - 56px"} autoHeightMax={"100vh - 56px"}>
          <div className="container-fluid">
            <TeamCardList />
          </div>

        </Scrollbars>
        {/* } */}


      </div>)
  );
}

export default CardsView;
