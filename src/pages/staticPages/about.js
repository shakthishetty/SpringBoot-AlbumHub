import React from 'react';
import { Typography, Box, Link, CardContent, Card, Grid, Divider, Avatar } from '@mui/material';
import shakthiImage from '../../assets/images/users/shakthi image.jpg'; // Adjust the path based on your directory structure

// ProfileImage Component
const ProfileImage = ({ src, alt }) => (
  <Avatar
    src={src}
    alt={alt}
    sx={{ width: 150, height: 150, marginBottom: 2 }}
  />
);

// ContactInfo Component
const ContactInfo = ({ linkedin, phone, email }) => (
  <Box textAlign="center" mt={2}>
    <Typography variant="body2" gutterBottom>
      Connect with me on{' '}
      <Link href={linkedin} target="_blank" rel="noopener">
        LinkedIn
      </Link>
    </Typography>
    <Typography variant="body2">Phone: {phone}</Typography>
    <Typography variant="body2">Email: {email}</Typography>
  </Box>
);

// MainCardContent Component
const MainCardContent = () => (
  <CardContent>
    <Typography variant="body2">
      About StudyEasy and React!
    </Typography>
  </CardContent>
);

// Bio Component
const Bio = ({ bio }) => (
  <Box mt={2}>
    <Typography variant="body2">
      {bio}
    </Typography>
  </Box>
);

// Skills Component
const Skills = ({ skills }) => (
  <Box mt={2}>
    <Typography variant="h6" gutterBottom>
      Skills & Interests
    </Typography>
    <Grid container spacing={1}>
      {skills.map((skill, index) => (
        <Grid item key={index}>
          <Box px={2} py={1} bgcolor="primary.main" color="primary.contrastText" borderRadius={1}>
            {skill}
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// SamplePage Component
const SamplePage = () => {
  const bio = "I am a passionate developer with a keen interest in web technologies and open-source projects. I enjoy learning new frameworks and libraries, and I'm always looking for ways to improve my coding skills.";
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Spring Boot', 'Git', 'Material-UI'];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" mb={2}>
          About
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Use ProfileImage Component */}
          <ProfileImage src={shakthiImage} alt="Shakthi" />

          {/* Use MainCardContent Component */}
          <MainCardContent />

          {/* Use Bio Component */}
          <Bio bio={bio} />

          {/* Use ContactInfo Component */}
          <ContactInfo
            linkedin="https://www.linkedin.com/in/your-linkedin-profile/"
            phone="7899936836"
            email="shakthishetty154@gmail.com"
          />

          {/* Use Skills Component */}
          <Divider sx={{ width: '100%', my: 2 }} />
          <Skills skills={skills} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SamplePage;
