@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Be+Vietnam+Pro:wght@300;400;600;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Be Vietnam Pro", sans-serif;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

/* ===== NAVBAR ===== */

.top-menu {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #111;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-weight: 700;
  font-size: 20px;
  font-family: "Press Start 2P", cursive;
}

.menu-right {
  display: flex;
  gap: 25px;
  margin-left: auto;
}

.menu-item {
  position: relative;
  cursor: pointer;
}

.dropdown-btn {
  display: inline-block;
  background-color: #222;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  transition: 0.2s ease;
}

.menu-item:hover,
.dropdown-btn:hover {
  background-color: #333;
}

/* ===== DROPDOWN ===== */

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 180px;
  border-radius: 10px;
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  padding: 12px 15px;
  text-decoration: none;
  color: #222;
}

/* ===== HERO ===== */

.hero {
  position: relative;
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;

  background-image: url("https://i.imgur.com/9fz89Iz.png");
  background-size: cover;
  background-position: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
}

.hero > * {
  position: relative;
  z-index: 1;
}

.main-title {
  font-family: "Press Start 2P", cursive;
  font-size: 60px;
}

.subtitle-title {
  font-size: 22px;
}

/* ===== COURSES ===== */

.course {
  padding: 120px 60px;
  color: white;
}

.biology {
  background: #2e8b57;
}

.chemistry {
  background: #d4a017;
}

.physics {
  background: #b22222;
}

/* ===== BUTTON ===== */

.learn-btn {
  display: inline-block;
  margin-top: 35px;
  padding: 14px 30px;

  background: white;
  color: black;

  text-decoration: none;

  border: 4px solid black;
  box-shadow: 4px 4px 0 black;
}

/* ===== ABOUT ===== */

.about-us {
  padding: 120px 40px;
  text-align: center;
  background: #111;
  color: white;
}

/* ===== BIOLOGY OVERLAY ===== */

.bioCourse {
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: none;

  padding: 60px 40px;

  overflow-y: auto;

  background:
    linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
    url("https://i.imgur.com/yZdjKbs_d.webp?maxwidth=760&fidelity=grand");

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.bioCourse.show {
  display: block;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  cursor: pointer;
}

/* ===== GRID ===== */

.units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.unit-card {
  background: rgba(255,255,255,0.08);

  border-radius: 20px;

  overflow: hidden;

  padding: 10px;
}

.unit-header {
  width: 100%;
  padding: 20px;

  background: transparent;
  border: none;

  color: white;

  display: flex;
  justify-content: space-between;

  cursor: pointer;
}

.unit-content {
  list-style: none;

  max-height: 0;
  overflow: hidden;

  transition: max-height 0.4s ease;
}

.unit-card.active .unit-content {
  max-height: 300px;
}

/* ===== CHEMISTRY OVERLAY ===== */

.chemCourse {
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: none;

  padding: 60px 40px;

  overflow-y: auto;

  background:
    linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
    url("https://i.imgur.com/LNt3UHL_d.webp?maxwidth=760&fidelity=grand");

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.chemCourse.show {
  display: block;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background: rgba(255,255,255,0.15);
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== GRID ===== */

.units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.unit-card {
  background: rgba(255,255,255,0.08);

  border-radius: 20px;

  overflow: hidden;

  padding: 10px;
}

.unit-header {
  width: 100%;
  padding: 20px;

  background: transparent;
  border: none;

  color: white;

  display: flex;
  justify-content: space-between;

  cursor: pointer;
}

.unit-content {
  list-style: none;

  max-height: 0;
  overflow: hidden;

  transition: max-height 0.4s ease;
}

.unit-card.active .unit-content {
  max-height: 300px;
}


/* ===== PHYSICS OVERLAY ===== */

.physCourse {
  position: fixed;
  inset: 0;

  z-index: 9999;

  display: none;

  padding: 60px 40px;

  overflow-y: auto;

  background:
    linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
    url("https://i.imgur.com/OjGmIlV.png");

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.physCourse.show {
  display: block;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background: rgba(255,255,255,0.15);
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== GRID ===== */

.units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.unit-card {
  background: rgba(255,255,255,0.08);

  border-radius: 20px;

  overflow: hidden;

  padding: 10px;
}

.unit-header {
  width: 100%;
  padding: 20px;

  background: transparent;
  border: none;

  color: white;

  display: flex;
  justify-content: space-between;

  cursor: pointer;
}

.unit-content {
  list-style: none;

  max-height: 0;
  overflow: hidden;

  transition: max-height 0.4s ease;
}

.unit-card.active .unit-content {
  max-height: 300px;
}