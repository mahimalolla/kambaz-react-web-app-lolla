import { Routes, Route, Navigate } from "react-router-dom";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Account/Dashboard";
import './styles.css';

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}