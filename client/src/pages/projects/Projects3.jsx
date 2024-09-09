import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects3 = () => {
  const projects = [
    {
      name: "AUTOMATIC MOVABLE RAILWAY PLATFORM FOR OLD AGE/  HANDICAPPED PERSON",
      link: "https://drive.google.com/drive/folders/1OjqNLhDLdiZ6b6YjREdEQpfoa-0-0IAs?usp=sharing"
    },
    {
      name: "AUTOMATIC LOAD SHEDDING SYSTEM USING IOT",
      link: "https://drive.google.com/drive/folders/1hsK1wQtExum2kY7CDDdi9XaRumJHA3tz?usp=sharing"
    },
    {
      name: "COVID-19 DETECTION USING CHEST X-RAY",
      link: "https://drive.google.com/drive/folders/13yhU9ouUGxuxder2EE_cWZTC7P5Au2W0?usp=sharing"
    },
    {
      name: "SMART LIBRARY",
      link: "https://drive.google.com/drive/folders/1TG-HI7WspCcsLnNVnVrthfq6zJ-S0N0k?usp=sharing"
    },
    {
      name: "IoT BASED FOOD DEHYDRATION SYSTEM",
      link: "https://drive.google.com/drive/folders/1JNIzrErUgWj6Uolf5h-pypnIEUkWrNCW?usp=sharing"
    },
    {
      name: "BRAIN TUMOR DETECTION USING IMAGE PROCESSING",
      link: "https://drive.google.com/drive/folders/1fWfERQWSGofh5pr2jlYb8Y7t3S3JQmDX?usp=sharing"
    },
    {
      name: "CANOPY DETECTION AND PESTICIDES SPRAYING USING AGRICULTURAL  DRONES",
      link: "https://drive.google.com/drive/folders/1CGqi0ElB3tw7F7KTu2OiiXuMkwY8ALBG?usp=sharing"
    },
    {
      name: "SOLDIER HEALTH MONITORING AND TRACKING SYSTEM USING IOT",
      link: "https://drive.google.com/drive/folders/1tHg4eYu6hKrP_qrw4FNHr_-D9XFqyQnD?usp=sharing"
    },
    {
      name: "DEEP LEARNING BASED ARRHYTHMIA CLASSIFICATION USING SINGLE LEAD  ECG",
      link: "https://drive.google.com/drive/folders/1C3Ek8F8tuPam9fic6FRsRKzYS66AJr_Z?usp=sharing"
    },
    {
      name: "COIN OPERATED MOBILE PHONE CHARGER",
      link: "https://drive.google.com/file/d/1PZJbV5tIYIUrtCDvQ2VsSn8iEJlB9uT4/view?usp=sharing"
    },
    {
      name: "IOT BASED FACE MASK AND TEMPERATURE DETECTION SYSTEM",
      link: "https://drive.google.com/drive/folders/1Qksfh45Tao9fzgXm1UGbmvKS3PwZF-j0?usp=sharing"
    },
    {
      name: "AUTOMATIC BOTTLE FILLING SYSTEM USING PLC &amp; SCADA",
      link: "https://drive.google.com/drive/folders/1d14biBJphYOz149lpPHwU6xxMO1T9rjY?usp=sharing"
    },
    {
      name: "AUTOMATIC STREET LIGHT USING LDR",
      link: "https://drive.google.com/drive/folders/1J0sFGemu6cpCnGzdEgFU-0K9Ja4sFWL5?usp=sharing"
    },
    {
      name: "IOFT BASED HI-TECH ONION FARMING",
      link: "https://drive.google.com/drive/folders/1twsAYsVErJPtkp9XRwQz6lhpAnYuDusd?usp=sharing"
    },
    {
      name: "EMBEDDED BASED E-PASSPORT VERIFICATION AND PASSENGER TEMPERATURE DETECTION SYSTEM IN VIEW OF COVID-19",
      link: "https://drive.google.com/file/d/11JdVhZDr6ajkusX0D3xGnzgCwwnWXkq_/view?usp=sharing"
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

export default Projects3;
