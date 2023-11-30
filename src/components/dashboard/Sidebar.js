import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " href="/admin/dashboard">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="/admin/components-alerts"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Distributor</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link href="/admin/components-alerts">
                  <i className="bi bi-circle" />
                  <span>Distributor Maintenance</span>
                </Link>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle" />
                  <span>Distributor & Products relationship Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Components Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-hospital" />
              <span>Doctor</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <i className="bi bi-circle" />
                  <span>Doctor Unavailability Reason Maintenance</span>
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="bi bi-circle" />
                  <span>Doctor Access Maintenance</span>
                </a>
              </li>
              <li>
                <a href="forms-editors.html">
                  <i className="bi bi-circle" />
                  <span>Doctor Grade Maintenance</span>
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="bi bi-circle" />
                  <span>Doctor Speciality Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-prescription2" />
              <span>Products</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <i className="bi bi-circle" />
                  <span>Product Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Tables Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-r-square" />
              <span>Region</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>Region Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Charts Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-segmented-nav" />
              <span>Segment</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <i className="bi bi-circle" />
                  <span>Segment Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Icons Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav-site"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-geo" />
              <span>Site</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="charts-nav-site"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>Site Maintenance</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>Site Type Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Icons Nav */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav-user"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-person-lines-fill" />
              <span>User</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="charts-nav-user"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>User Access Maintenance</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>User Maintenance</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>User Department Maintenance</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>User Designation Maintenance</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="bi bi-circle" />
                  <span>User Type Maintenance</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Icons Nav */}

          {/* =====================================Single Pages Link ==========================================*/}

          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person" />
              <span>Profile</span>
            </a>
          </li>
          {/* End Profile Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-door-closed" />
              <span>Logout</span>
            </a>
          </li>

          {/* End Blank Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
}
