import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const imagenUrl = 'https://lh7-us.googleusercontent.com/Pl9v_nMLupJCZWi-7mzjbdtD_KJjYjS9kxQ-tEtmZDLQapMqW5e9Jf_awcLA9N3tK-mUEz06cP08K-YsjyuQ84sOeploYPj5PkcG6DQTmoSDgLOa-vFIxQ2SSvsZn7jfrfSsiBEq5PFtB4mAieMq9Cw';

export default function Navbar() {
  return (
    <div style={{ width: '100%'}}>
      <AppBar position="static" sx={{ background: '#ffffff', color: 'black'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={imagenUrl} width={100} />
            <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
              <Button  variant="contained" sx={{ background: '#6940FF', color: 'white' }}>Inicia Sesion</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" style={{ textAlign: 'center', padding: '64px', background: '#6940FF', width: '100%', gap: '24px' }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
          Conoce los proyectos con los que hemos trabajado
        </Typography>
        <Button href='https://www.inncol.com.mx/' variant="outlined" sx={{ marginTop: '10px', background: '#FFCD59', color: '#6940FF' }}>Contactanos </Button>
      </Container>
    </div>
  );
}
