import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStore from '../stores/TeamDataStore';
import NavbarLogo from '../components/NavbarLogo';
import NavbarItems from '../components/NavbarItems';
import TeamCardList from '../components/TeamCardList';
import Scrollbars from 'react-custom-scrollbars';


function CardsView({ isAdmin }) {

  const data = useStore(state => state.teamData);

  // const logOut = () => firebase.auth().signOut();

  return (
    data.length === 0 ? (
      <div className="loadingio-spinner-eclipse-uzl9l7691o "><div className="ldio-5ki7dfraqbv">
        <div></div>
      </div></div>
    ) : (
      <div style={{ width: "100vw", height: "100vh" }}>
        <nav className="mb-0 navbar  navbar-expand navbar-dark bg-dark">
          <NavbarLogo />
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
