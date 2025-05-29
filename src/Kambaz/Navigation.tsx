import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
  );
}