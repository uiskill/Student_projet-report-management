import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects1 = () => {
  const projects = [
    {
      name: "INTELLIGIENT WASHROOM AUTOMATION SYSTEM WITH MULTI-SENSOR INTEGRATION",
      link: "https://drive.google.com/drive/folders/1YkMp7a-v8n7xf3uSdY7J0PPO5dI5K3vg?usp=sharing"
    },
    {
      name: "ONION-SHIELD: PRESERVING FRESHNESS THROUGH SMART STORAGE",
      link: "https://drive.google.com/drive/folders/1hsK1wQtExum2kY7CDDdi9XaRumJHA3tz?usp=sharing"
    },
    {
      name: "BIOMETRIC BASED SMART ATM",
      link: "https://drive.google.com/drive/folders/1pBGTb1zVnmWcs801qDU3uoi2y-hnrQE3?usp=sharing"
    },
    {
      name: "FARMING PLANTATION ROBOTIC VEHICLE",
      link: "https://drive.google.com/drive/folders/11VywoTbEl0uLh9LOBTuj42VMMhF_uMTu?usp=sharing"
    },
    {
      name: "DEVELOPING A WAR FIELD SPYING ROBOT USING RASPBERRY PI",
      link: "https://drive.google.com/drive/folders/1hqTUObvR3V1viJyfTMXL3RD0HejNmD-B?usp=sharing"
    },
    {
      name: "FINGERPRINT BASED VOTING SYSTEM",
      link: "https://drive.google.com/drive/folders/1AT1OHDCrF5XlL_CX8Wvz6aDMgoPwh6FY?usp=sharing"
    },
    {
      name: "DESIGN AND DEVELOPMENT OF FIRE PROTECTION SYSTEM FOR ELECTRIC VEHICLE BATTERY",
      link: "https://drive.google.com/drive/folders/1G-UYzguPjXWxdOOgiHG_Tc-MVaFJgMzP?usp=sharing"
    },
    {
      name: "CROPGUARD: A MINI AGRI DRONE",
      link: "https://drive.google.com/drive/folders/1P4fcl5Teehg5Ugw4m8wONJiWd8VVoKWo?usp=sharing"
    },
    {
      name: "EFFICIENT SOLAR PANEL CLEANING ROBOT",
      link: "https://drive.google.com/drive/folders/15N0Z1MMfDsnD4f-9g2Ahj9Re0r_FmZOZ?usp=sharing"
    },
    {
      name: "GMAP BASED SMART ATTENDANCE SYSTEM",
      link: "https://drive.google.com/drive/folders/1J_iLPox7FRmYH-3JECDCfrH8P27bCbXu?usp=sharing"
    },
    {
      name: "SMART FARMING USING IOT",
      link: "https://drive.google.com/drive/folders/16c5gycaO_EQNK7vBEH-KS9h-OsU6q1Z3?usp=sharing"
    },
    {
      name: "INDUSTRIAL WORKER SAFETY USING MACHINE LEARNING AND IoT",
      link: "https://drive.google.com/drive/folders/1MFWzCC4BUKGkpTY2NfOz-9S2fy1AdR28?usp=sharing"
    },
    {
      name: "PORTABLE SECURITY SYSTEM",
      link: "https://drive.google.com/drive/folders/1UjQq4w3_U6oNSGhGEEtuAGq_PzMyRRZZ?usp=sharing"
    },
    {
      name: "STAMPED AVOIDANCE SYSTEM FOR KUMBHMELA-2025 USING DRONE TECHNOLOGY",
      link: "https://drive.google.com/drive/folders/1UQTyqs__gcNb83Yx4WrSnkF-Oqes18c2?usp=sharing"
    },
    {
      name: "MONITORING AND CONTROLLING OF AIR AND NOISE POLLUTION IN INDUSTRY",
      link: "https://drive.google.com/drive/folders/1QW_6npequ0O-V-7KjpDIwPmlgLgEPutd?usp=sharing"
    },
    {
      name: "INTELLIGENT E. V.",
      link: "https://drive.google.com/drive/folders/1vH4c_ZmssGzlKRmTMyb8OXWuKkgd5sYb?usp=sharing"
    },
    {
      name: "SMART MULTI-PURPOSE TROLLEY",
      link: "https://drive.google.com/drive/folders/1XdHoC-tVNKbgnXe5sYGNe2tRwbnhmS3M?usp=sharing"
    },
    {
      name: "SMART TRAFFIC LIGHT MANAGEMENT USING IOT FOR EMERGENCY VEHICLE",
      link: "https://drive.google.com/drive/folders/1GLiprBgYrmPYU9g-FDrWAoNbeO6-UYI_?usp=sharing"
    }
  ];

  return (
    <Container>
      <h1 style={{padding:"20px"}}>Reports A.Y. 2023-24</h1>
      <ListGroup>
        {projects.map((project, index) => (
          <ListGroup.Item 
            key={index} 
            action 
            as="a" 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {project.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Projects1;
