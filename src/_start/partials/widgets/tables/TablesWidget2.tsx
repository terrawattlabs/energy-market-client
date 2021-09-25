/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../helpers";
import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const TablesWidget2: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Achievement
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_1"
              >
                Day
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_2"
              >
                Week
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_3"
              >
                Month
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-3 pb-0 mt-n3">
        <div className="tab-content mt-4" id="myTabTables2">
          {/* begin::Tap pane */}
          <div
            id="kt_tab_pane_2_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_2_1"
            className="tab-pane fade active show"
          >
            {/* begin::Table */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-120px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1 me-5">
                        <span className="symbol-label bg-light-primary align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/001-boy.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Brad Simmons
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, CSS Coding
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-primary">+28%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-danger align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/018-girl-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Jessie Clarcson
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Most Successful
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-danger">+52%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-warning align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/047-girl-25.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Lebron Wayde
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Users
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $3,400,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-warning">+34%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-success align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/043-boy-18.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Kevin Leonard
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Userss
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $35,600,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+230%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-info align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/024-boy-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Randy Trent
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Business Analyst
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $45,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+340%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}

          {/* begin::Tap pane */}
          <div
            id="kt_tab_pane_2_2"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_2_2"
            className="tab-pane fade"
          >
            {/* begin::Table */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-120px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0 py-3">
                      <div className="symbol symbol-55px mt-1 me-5">
                        <span className="symbol-label bg-light-warning align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/047-girl-25.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Lebron Wayde
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Users
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $3,400,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-warning">+34%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-success align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/043-boy-18.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Kevin Leonard
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Userss
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $35,600,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+230%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-info align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/024-boy-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Randy Trent
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Business Analyst
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $45,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+340%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 py-3">
                      <div className="symbol symbol-55px me-5 mt-1">
                        <span className="symbol-label bg-light-primary align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/001-boy.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Brad Simmons
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, CSS Coding
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-primary">+28%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 py-3">
                      <div className="symbol symbol-55px mt-1">
                        <span className="symbol-label bg-light-danger align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/018-girl-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Jessie Clarcson
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Most Successful
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-danger">+52%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}

          {/* begin::Tap pane */}
          <div
            id="kt_tab_pane_2_3"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_2_3"
            className="tab-pane fade"
          >
            {/* begin::Table */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-120px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-70px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-0 pb-3 pt-1">
                      <div className="symbol symbol-55px mt-3 me-5">
                        <span className="symbol-label bg-light-danger align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/018-girl-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Jessie Clarcson
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Most Successful
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-danger">+52%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 pb-3 pt-1">
                      <div className="symbol symbol-55px mt-3">
                        <span className="symbol-label bg-light-warning align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/047-girl-25.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Lebron Wayde
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Users
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $3,400,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-warning">+34%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 pb-3 pt-1">
                      <div className="symbol symbol-55px mt-3">
                        <span className="symbol-label  bg-light-success align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/043-boy-18.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Kevin Leonard
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Awesome Userss
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $35,600,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+230%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 pb-3 pt-1">
                      <div className="symbol symbol-55px me-5 mt-3">
                        <span className="symbol-label bg-light-primary align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/001-boy.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Brad Simmons
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, CSS Coding
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $1,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-primary">+28%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-0 pb-3 pt-1">
                      <div className="symbol symbol-55px mt-3">
                        <span className="symbol-label bg-light-info align-items-end">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/024-boy-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="px-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Randy Trent
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        Business Analyst
                      </span>
                    </td>
                    <td></td>
                    <td className="text-end">
                      <span className="text-gray-800 fw-bolder d-block fs-6">
                        $45,200,000
                      </span>
                      <span className="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td className="text-end">
                      <span className="fw-bolder text-success">+340%</span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          className="svg-icon-4"
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { TablesWidget2 };
