import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/signin.service";
import reloadPage from "../../utils/reload";
import CartBody from "../../pages/Cart/cartBody";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const settings = ["profile", "logout"];

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedToken, setLoggedToken] = useState(localStorage.getItem("token"));
  const [loggedUser, setLoggedUser] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "43.5%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "transparent",
    border: "transparent",
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (option) => {
    //setAnchorElNav(null);
    if (option === "logout") {
      localStorage.removeItem("token");
      navigate("/");
      reloadPage();
    }
    setAnchorElUser(null);
    navigate(option);
  };

  const handleCart = () => {
    setOpen(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    // VER MANANA QUE ESTO NO SE CALLE 10 VECES en cada render
    async function fetchUser() {
      const user = await getCurrentUser();
      setLoggedUser(user.data.avatar);
    }
    fetchUser();
  }, []);

  return (
    <AppBar position="static" style={{ background: "#c42b81", color: "White" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            MyManga-Store!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Signup</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MyManga-Store!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={(e) => handleCloseNavMenu(e.target.value)}
              value="products"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0.01, display: { xs: "none", md: "flex" } }}>
            {!loggedToken && (
              <Button
                onClick={(e) => handleCloseNavMenu(e.target.value)}
                value="signin"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign-In
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0.01, display: { xs: "none", md: "flex" } }}>
            {loggedToken === null ? (
              <Button
                onClick={(e) => handleCloseNavMenu(e.target.value)}
                value="signup"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Sign-Up
              </Button>
            ) : (
              <>
                <Button
                  onClick={(e) => handleCart(e.target.value)}
                  value="cart"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <ShoppingCartIcon />
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={loggedUser} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {loggedToken &&
                settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    value={setting}
                    onClick={() => handleCloseNavMenu(setting)}
                  >
                    <Typography textAlign="center">
                      {setting.toUpperCase()}
                    </Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CartBody handleClose={handleClose} />
            </Box>
          </Modal>
        )}
      </Container>
    </AppBar>
  );
};

export default Navigation;
