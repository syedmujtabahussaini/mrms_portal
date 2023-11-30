import React from "react";

export default function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>RightClickSolutions</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://rightclicksolutions.tech/">RightClickSolutions</a>
        </div>
      </footer>
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}
