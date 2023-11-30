import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div>
        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-center py-4">
                      <a
                        href="index.html"
                        className="logo d-flex align-items-center w-auto"
                      >
                        <img src="assets/img/logo.png" alt="logo" />
                        <span className="d-none d-lg-block">
                          Righteous Pharmaceuticals
                        </span>
                      </a>
                    </div>
                    {/* End Logo */}
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Login to Your Account
                          </h5>
                          <p className="text-center small">
                            Enter your userId &amp; password to login
                          </p>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label
                              htmlFor="yourUsername"
                              className="form-label"
                            >
                              UserID
                            </label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="yourUsername"
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter your userId.
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password!
                            </div>
                          </div>
                          <div className="col-12"></div>
                          <div className="col-12">
                            <Link
                              href={"/admin/dashboard"}
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Login
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="credits">
                      Designed by
                      <a href="https://rightclicksolutions.tech">
                        RightClickSolutions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* End #main */}
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </div>
    </>
  );
}
