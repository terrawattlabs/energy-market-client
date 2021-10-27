/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const TablesWidget1: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* <!--begin::Header--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            Campaign Leaders
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                Day
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                Week
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_3"
              >
                Month
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!--end::Header--> */}

      {/* <!--begin::Body--> */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-success">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Group-chat.svg"
                            className="svg-icon-1 svg-icon-success"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Top Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "46%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            46%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-warning">
                          <KTSVG
                            path="/media/icons/duotone/Layout/Layout-4-blocks.svg"
                            className="svg-icon-1 svg-icon-warning"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Popular Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, VueJS, Laravel
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "87%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            87%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-success ">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Add-user.svg"
                            className="svg-icon-1 svg-icon-success"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        New Users
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "53%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            53%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px">
                        <span className="symbol-label bg-light-danger">
                          <KTSVG
                            path="/media/icons/duotone/Home/Library.svg"
                            className="svg-icon-1 svg-icon-danger"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Weekly Bestsellers
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            92%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}

          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_2"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-success">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Add-user.svg"
                            className="svg-icon-1 svg-icon-success"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        New Users
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "53%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            53%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-danger">
                          <KTSVG
                            path="/media/icons/duotone/Home/Library.svg"
                            className="svg-icon-1 svg-icon-danger"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Weekly Bestsellers
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            92%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-primary">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Group-chat.svg"
                            className="svg-icon-1 svg-icon-primary"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Top Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "46%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            46%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="ps-0 py-3">
                      <div className="symbol symbol-65px me-3">
                        <span className="symbol-label bg-light-warning">
                          <KTSVG
                            path="/media/icons/duotone/Layout/Layout-4-blocks.svg"
                            className="svg-icon-1 svg-icon-warning"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Popular Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, VueJS, Laravel
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "87%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            87%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}

          {/* <!--begin::Tap pane--> */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_3"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            {/* <!--begin::Table--> */}
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-warning me-3">
                        <span className="symbol-label">
                          <KTSVG
                            path="/media/icons/duotone/Layout/Layout-4-blocks.svg"
                            className="svg-icon-1 svg-icon-warning"
                          />
                        </span>
                      </div>
                    </td>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Popular Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML, VueJS, Laravel
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-warning">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "87%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            87%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-success me-3">
                        <span className="symbol-label">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Add-user.svg"
                            className="svg-icon-1 svg-icon-success"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        New Users
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-success">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "53%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            53%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-primary me-3">
                        <span className="symbol-label">
                          <KTSVG
                            path="/media/icons/duotone/Communication/Group-chat.svg"
                            className="svg-icon-1 svg-icon-primary"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Top Authors
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-primary">
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "46%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            46%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0 py-3">
                      <div className="symbol symbol-65px bg-light-danger me-3">
                        <span className="symbol-label">
                          <KTSVG
                            path="/media/icons/duotone/Home/Library.svg"
                            className="svg-icon-1 svg-icon-danger"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        Weekly Bestsellers
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        HTML/CSS/JS, Python
                      </span>
                    </td>
                    <td>
                      <div className="d-flex flex-column w-100 me-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span className="text-dark me-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="progress h-6px  w-100 bg-light-danger">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-muted fs-7 fw-bold ps-3">
                            92%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--end::Table--> */}
          </div>
          {/* <!--end::Tap pane--> */}
        </div>
      </div>
    </div>
  );
};

export { TablesWidget1 };
