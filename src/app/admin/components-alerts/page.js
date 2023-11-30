import Link from "next/link";
import React from "react";

export default function ComponentsAlert() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Alerts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/admin/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item">Components</li>
              <li className="breadcrumb-item active">Alerts</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Default</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
