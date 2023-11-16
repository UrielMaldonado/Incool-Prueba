import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Logo = 'https://lh7-us.googleusercontent.com/Pl9v_nMLupJCZWi-7mzjbdtD_KJjYjS9kxQ-tEtmZDLQapMqW5e9Jf_awcLA9N3tK-mUEz06cP08K-YsjyuQ84sOeploYPj5PkcG6DQTmoSDgLOa-vFIxQ2SSvsZn7jfrfSsiBEq5PFtB4mAieMq9Cw';

const tarjetas = Array(6).fill({
  Titulo: 'Cliente Inncol',
  Descripcion: 'Tiene como objetivo crear productos y herramientas que aumenten la productividad de los ingenieros y operadores en las industrias de aviación y petróleo y gas.'
});

export default function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {tarjetas.map((tarjeta, index) => (
        <Card key={index} sx={{ width: 400, height: 374, padding: '40px 24px', borderRadius: 10, gap: 24, background: '#EAE4FF', margin: 2 }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Logo} width={'158px'} alt="Logo" />
            <Typography variant="h5" sx={{
              width: '162px',
              height: '29px',
              color: '#6940FF',
              fontFamily: 'Inter',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '29px',
              letterSpacing: '0em',
              textAlign: 'center',
              marginBottom: '30px',
              marginTop: '30px'
            }}>
              {tarjeta.Titulo}
            </Typography>
            <Typography variant="body2" sx={{
              width: '352px',
              height: '110px',
              fontFamily: 'Inter',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '22px',
              letterSpacing: '0em',
              textAlign: 'center',
              color: '#303133'
            }}>
              {tarjeta.Descripcion}
            </Typography>
            <Button href='https://www.inncol.com.mx/' variant="contained" sx={{ width: 'Fixed (1,440px)', height: '43px', padding: '12px 10px', borderRadius: '10px', background: '#6940FF', color: 'white', marginTop: '20px' }}>
              Ver sitio
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
