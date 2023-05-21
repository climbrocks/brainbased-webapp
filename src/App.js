import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import MainDisplay from './components/MainDisplay';
import './App.scss';
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
const App = () => {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <MainDisplay />
    </div>
  );
}

export default withAuthenticator(App);
