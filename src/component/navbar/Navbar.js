import React, { useEffect } from "react";

// routing
import { NavLink as Link } from "react-router-dom";

// alert
import { warning } from "../../util/Alert";

// redux
import { useDispatch } from "react-redux";

// types
import { UNSET_ADMIN } from "../../store/admin/types";

//MUI
import { makeStyles } from "@material-ui/core";

// jquery
import $ from "jquery";

const useStyles = makeStyles(() => ({
  navLink: {
    "&.active": {
      color: "#E85382 !important",
      fontWeight: 500,
      fontSize: 16,
    },
    "&.active span": {
      color: "#E85382 !important",
      fontWeight: 900,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleLogout = () => {
    const data = warning();
    data.then((isLogout) => {
      if (isLogout) {
        dispatch({ type: UNSET_ADMIN });
        window.location.href = "/";
      }
    });
  };

  useEffect(() => {
    $("").addClass("submenu-margin");
  }, []);
  return (
    <>
      <div class="page-sidebar">
        <Link to="/hasan/dashboard">
          <span className="logo text-danger">Rayzi</span>
        </Link>
        <ul class="list-unstyled accordion-menu">
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Dashboard"
          >
            <Link to="/hasan/dashboard" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="activity"></i>
              </span>
              Dashboard
            </Link>
          </li>
          {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="User">
            <Link to="/hasan/user" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="users"></i>
              </span>
              User
            </Link>
          </li> */}
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="User"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="users"></i>
              </span>
              User
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link to="/hasan/user" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Real
                </Link>
              </li>
              <li>
                <Link to="/hasan/fakeUser" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Fake
                </Link>
              </li>
            </ul>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Banner">
            <Link to="/hasan/banner" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="image"></i>
              </span>
              Banner
            </Link>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Plan"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="layout"></i>
              </span>
              Plan
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link to="/hasan/coinPlan" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Coin Plan
                </Link>
              </li>
              <li>
                <Link to="/hasan/vipPlan" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>VIP Plan
                </Link>
              </li>
            </ul>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Purchase Plan History"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="clock"></i>
              </span>
              Plan History
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link
                  to="/hasan/coinPlan/history"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Coin Plan
                </Link>
              </li>
              <li>
                <Link
                  to="/hasan/vipPlan/history"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>VIP Plan
                </Link>
              </li>
            </ul>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Gift"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="gift"></i>
              </span>
              Gift
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link
                  to="/hasan/giftCategory"
                  className={`${classes.navLink}`}
                  onClick={() => localStorage.removeItem("GiftClick")}
                >
                  <i class="far fa-circle"></i>Category
                </Link>
              </li>
              <li>
                <Link
                  to="/hasan/gift"
                  className={`${classes.navLink}`}
                  onClick={() => localStorage.setItem("GiftClick", true)}
                >
                  <i class="far fa-circle"></i>Gift
                </Link>
              </li>
            </ul>
          </li>

          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Sticker">
            <Link to="/hasan/sticker" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="anchor"></i>
              </span>
              Sticker
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Theme">
            <Link to="/hasan/theme" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
              <i data-feather="image"></i>
              </span>
              Theme
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Song">
            <Link to="/hasan/song" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="music"></i>
              </span>
              Song
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Hashtag">
            <Link to="/hasan/hashtag" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="hash"></i>
              </span>
              Hashtag
            </Link>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Dashboard"
          >
            <Link to="/hasan/comment" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="message-circle"></i>
              </span>
              Comment
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Level">
            <Link to="/hasan/level" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="bar-chart"></i>
              </span>
              Level
            </Link>
          </li>
          {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Post">
          {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Post">
            <Link to="/hasan/post" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="maximize"></i>
              </span>
              Post
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Video">
            <Link to="/hasan/video" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="film"></i>
              </span>
              Video
            </Link>
          </li> */}
          
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Post"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="maximize"></i>
              </span>
              Post
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link to="/hasan/post" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Real
                </Link>
              </li>
              <li>
                <Link to="/hasan/post/fake" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Fake
                </Link>
              </li>
            </ul>
          </li>

          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Video"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="film"></i>
              </span>
              Video
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link to="/hasan/video" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Real
                </Link>
              </li>
              <li>
                <Link to="/hasan/video/fake" className={`${classes.navLink}`}>
                  <i class="far fa-circle"></i>Fake
                </Link>
              </li>
            </ul>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Video">
            <Link to="/hasan/reportedUser" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="flag"></i>
              </span>
              Reported User
            </Link>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Complain"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="help-circle"></i>
              </span>
              Complain
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link
                  to="/hasan/pendingComplain"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Pending
                </Link>
              </li>
              <li>
                <Link
                  to="/hasan/solvedComplain"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Solved
                </Link>
              </li>
            </ul>
          </li>
          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Redeem"
            className="pointer-cursor"
          >
            <a
              href={() => false}
              className="add-collapse-margin"
              style={{ marginLeft: 0 }}
            >
              <span className="sidenav__icon">
                <i data-feather="key"></i>
              </span>
              Redeem
              <i class="fas fa-chevron-right dropdown-icon"></i>
            </a>
            <ul class="">
              <li>
                <Link
                  to="/hasan/pendingRedeem"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Pending
                </Link>
              </li>
              <li>
                <Link
                  to="/hasan/AcceptedRedeem"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Accepted
                </Link>
              </li>
              <li>
                <Link
                  to="/hasan/declineRedeem"
                  className={`${classes.navLink}`}
                >
                  <i class="far fa-circle"></i>Declined
                </Link>
              </li>
            </ul>
          </li>

          <li
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Google Ad"
          >
            <Link to="/hasan/advertisement" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="book"></i>
              </span>
              Google Ad
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Setting">
            <Link to="/hasan/Setting" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="settings"></i>
              </span>
              Setting
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Profile">
            <Link to="/hasan/profile" className={`${classes.navLink}`}>
              <span className="sidenav__icon">
                <i data-feather="user"></i>
              </span>
              Profile
            </Link>
          </li>
          <li data-bs-toggle="tooltip" data-bs-placement="top" title="Logout">
            <a
              href={() => false}
              onClick={handleLogout}
              className="add-collapse-margin"
            >
              <i data-feather="log-out"></i>Logout
            </a>
          </li>
        </ul>
        <a
          href={() => false}
          id="sidebar-collapsed-toggle"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <i data-feather="arrow-right"></i>
        </a>
      </div>
    </>
  );
};
export default Navbar;
