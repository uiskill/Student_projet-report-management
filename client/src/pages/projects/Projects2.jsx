import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects2 = () => {
  const projects = [
    {
      name: "ROBAGE BOT",
      link: "https://drive.google.com/file/d/1uhqBK3E5K3sW7Wdi_V9V4fzoHSJwMklh/view?usp=sharing"
    },
    {
      name: "EV CHARGING STATION",
      link: "https://drive.google.com/file/d/18yB5X13zZ5cCGBm3wknsZFNXUI8abL2A/view?usp=sharing"
    },
    {
      name: "IoT BASE TRACKING AND HEALTH MONITORING SYSTEM FOR PETDOGS",
      link: "https://drive.google.com/file/d/1eYgXzCW9A6Hh8OERPm-dj8e8YQ7LzFaR/view?usp=sharing"
    },
    {
      name: "VEHICLE OVERLOADING DETECTION AND TRACKING SYSTEM",
      link: "https://drive.google.com/file/d/1s2kAWj2mjS7L-g466kxD2P3B544TRuCj/view?usp=sharing"
    },
    {
      name: " MICROCONTROLLER BASED 2D PLOTTER  DRAWING ROBOT ",
      link: "https://drive.google.com/file/d/1qPQdW23xd99QkeGgfAbT1vrXiEraDgq2/view?usp=sharing"
    },
    {
      name: "AUTOMATIC BORDER SURVEILLANCE  SYSYETM",
      link: "https://drive.google.com/file/d/14YJQX570Qn6WWSxgX0V0lk9KDvxS5qEg/view?usp=sharing"
    },
    {
      name: "DESIGN AND DEVELOPMENT OF FIRE PROTECTION SYSTEM FOR ELECTRIC VEHICLE BATTERY",
      link: "https://drive.google.com/drive/folders/1G-UYzguPjXWxdOOgiHG_Tc-MVaFJgMzP?usp=sharing"
    },
    {
      name: "SMART ONION STORAGE SYSTEM",
      link: "https://drive.google.com/file/d/1QJoZlE870qvZsFwIBUKuOd0xDUHfHA9h/view?usp=sharing"
    },
    {
      name: "TEXT-BASED PERSONALITY PREDICTION FROM TWITTER DATA SOURCE USING MACHINE LEARNING",
      link: "https://drive.google.com/file/d/1SxCU2UZ6rSC3h9UZb8SX0ylnYM_5tEWz/view?usp=sharing"
    },
    {
      name: "COIN OPERATED MOBILE PHONE CHARGER",
      link: "https://drive.google.com/file/d/1PZJbV5tIYIUrtCDvQ2VsSn8iEJlB9uT4/view?usp=sharing"
    },
    {
      name: "FERTILIZER SPREADER AND SEEDING ROBOT  VEHICLE",
      link: "https://drive.google.com/drive/folders/1Qksfh45Tao9fzgXm1UGbmvKS3PwZF-j0?usp=sharing"
    },
    {
      name: "LIVE INVENTORY MONITORING FOR CONTACTLESS SMART VENDING MACHINE",
      link: "https://drive.google.com/file/d/1sAVNjopOunNCU7oPA87-j0T0MCjEMsG3/view?usp=sharing"
    },
    {
      name: "SMART MIRROR USING RASBERRY PI",
      link: "https://drive.google.com/file/d/1xJ_BEF8bwjNhRPABD3jj4yTmufUfRTqa/view?usp=sharing"
    },
    {
      name: "STAMPED AVOIDANCE SYSTEM FOR KUMBHMELA-20ROBOT TRACKING VIA CENTRALLY MONITORED SYSTEM  FOR LOGISTICS",
      link: "https://drive.google.com/file/d/19o-ixYoD5RwVRRra5ijVLN8tM-fOu6-S/view?usp=sharing"
    },
   
  ];

  return (
    <Container>
      <h1 style={{padding:"20px"}}>Reports A.Y. 2022-23</h1>
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

export default Projects2;
