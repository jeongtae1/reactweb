# reactweb
/*
import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';


function App(){
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width:'100%',
    height:'100%'
  });
  return(
    <>
     <Grid container spacing={2}  whiteSpace='nowrap'>
      <Grid item xs={3} sx={{bgcolor:'#3f50b5' }}/>
      <Grid item xs={6} sx={{bgcolor:'#3f50b5' }}whiteSpace='nowrap'>
        <Link href='https://sports.news.naver.com/index'><Button sx={{color: '#fff'}}><Typography variant="h5" sx={{fontWeight:'bold'}}>N SPORTS</Typography></Button></Link>
        <Link href='https://m.sports.naver.com/community/index'><Button><Typography variant="h6" sx={{fontWeight:'bold'  ,color:'#c2eafc'}}>커뮤니티</Typography></Button></Link>
        <Link href='https://news.naver.com/'><Button><Typography sx={{fontWeight:'bold'  ,color:'#c2eafc'}}>뉴스</Typography></Button></Link>
        <Link href='https://weather.naver.com/'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>날씨</Typography></Button></Link>
        <Link href='https://entertain.naver.com/home'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc'}}>연예</Typography></Button></Link>
      </Grid>
      <Grid item xs={3} sx={{bgcolor:'#3f50b5' }}>
        <Link href='https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fsports.news.naver.com%2Findex'>
      <Button variant="contained" size="small">로그인</Button></Link>
      </Grid>
      <Grid item xs={3} sx={{bgcolor:'#3f50b5' }}/>
      <Grid item xs={6} sx={{bgcolor:'#3f50b5'}} >
        <Link href='https://sports.news.naver.com/index'><Button sx={{color: '#fff'}}><Typography sx={{fontWeight:'bold', }}>스포츠 홈</Typography></Button></Link>
        <Link href='https://sports.news.naver.com/kbaseball/index'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>야구</Typography></Button></Link>
        <Link href='https://sports.news.naver.com/wbaseball/index'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>해외야구</Typography></Button></Link>        
        <Link href='https://sports.news.naver.com/kfootball/index'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>축구</Typography></Button></Link>
        <Link href='https://sports.news.naver.com/wfootball/index'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>해외축구</Typography></Button></Link>
        <Link href='https://sports.news.naver.com/basketball/index'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>농구</Typography></Button></Link>
        <Link href='https://game.naver.com/esports/League_of_Legends/home'><Button><Typography sx={{fontWeight:'bold' ,color:'#c2eafc' }}>e스포츠</Typography></Button></Link>
      </Grid>
      <Grid item xs={3} sx={{bgcolor:'#3f50b5' }}/>
     </Grid>
    <Container fixed >
      <Grid container spacing={2}  textAlign='left'>
        <Grid item xs={8} sx={{mt:3}}>
        <Link href='https://sports.news.naver.com/news?oid=654&aid=0000024147'>
          <Box sx={{ p: 2, maxWidth: 500, }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 160, height: 95 }}>
                  <Img alt="complex" src="https://imgnews.pstatic.net/image/654/2022/11/04/0000024147_001_20221104090501696.jpg?type=w647" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    손흥민, 눈 주위 4군데 골절…일정 앞당겨 오늘 수술</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box></Link>
          <Divider light />
          <Link href='https://sports.news.naver.com/news?oid=477&aid=0000392107'>
          <Box sx={{ p: 2, maxWidth: 500, }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{  width: 160, height: 95 }}>
                  <Img alt="complex" src="https://imgnews.pstatic.net/image/477/2022/11/04/0000392107_001_20221104053101985.jpg?type=w647" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    '스페인 레전드' 피케, 바르셀로나서 은퇴…알메이라전이 마지막</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box></Link>
          <Divider light />
          <Link href='https://sports.news.naver.com/news?oid=003&aid=0011517957'>
          <Box sx={{ p: 2, maxWidth: 500, }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 160, height: 95  }}>
                  <Img alt="complex" src="https://imgnews.pstatic.net/image/003/2022/11/04/NISI20180628_0014226776_web_20180628012040_20221104162105109.jpg?type=w647" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    월드컵 광화문 거리응원 없다…서울시 "취소 공문 접수"
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box></Link>
          <Divider light />
          <Link href='https://sports.news.naver.com/news?oid=109&aid=0004733341'>
          <Box sx={{ p: 2, maxWidth: 500, }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 160, height: 95  }}>
                  <Img alt="complex" src="https://imgnews.pstatic.net/image/109/2022/11/04/0004733341_001_20221104122103117.jpeg?type=w647" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    ‘벌써 2번째 부상’ 안우진 딜레마, 최고 에이스를 어떻게 써야하나
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box></Link>
          <Divider light />
          <Link href='https://sports.news.naver.com/news?oid=108&aid=0003101727'>
          <Box sx={{ p: 2, maxWidth: 500, }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{  width: 160, height: 95  }}>
                  <Img alt="complex" src="https://imgnews.pstatic.net/image/108/2022/11/04/0003101727_001_20221104144301257.jpg?type=w647" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    "한국행, 내 인생 바꿔놨다" 무명이 영웅되는 팀, 이젠 악동마저 드라마를 쓴다
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box></Link>
          <Divider light />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs sx={{display:'flex', flexWrap:'wrap','& > :not(style)':{
          m:1, width:180, height:128 }}}>
          <List component="nav" aria-label="mailbox folders">
            <Typography >스포츠 창작자 영상</Typography>
            <Divider light />
            <Link href='https://sports.news.naver.com/kfootball/vod/index?id=1002167&category=football'>
            <ListItem button>
              <Box  sx={{ p: 2, maxWidth: 200,}}>
                <ButtonBase sx={{ width: 110, height: 68 }}>
                  <Img alt="complex" src="https://phinf.pstatic.net/tvcast/20221103_237/znOIm_1667453558263l5zLw_JPEG/1667453540198.jpeg" />
                </ButtonBase>
                <Typography variant="body2">'수술 확정' 손흥민 안와골절로 월드컵 참가...</Typography>
            </Box>
            </ListItem>
            </Link>
            <Divider light />
            <Link href='https://sports.news.naver.com/kbaseball/vod/index?id=1001993&category=kbo&gameId=77771102WOSK02022&date=20221102&listType=game'>
            <ListItem button>
              <Box  sx={{ p: 2, maxWidth: 200,}}>
                <ButtonBase sx={{  width: 110, height: 68  }}>
                  <Img alt="complex" src="https://sports-phinf.pstatic.net/20221102_180/1667383946282LiDCx_JPEG/8_%C5%B0%BF%F2_vs_SSG2%C8%B8%C3%CA_%BD%C9%C6%C7%B0%FA_%C7%D4%B2%B2_%C6%F9%C6%AE%C0%C7_%BA%B8%C5%A9%B8%A6_%C1%F6%C0%FB%C7%CF%B4%C2_%C7%AA%C0%CC%B1%D7.jpg" />
                </ButtonBase>
                <Typography variant="body2">심판과 함께 폰트의 보크를 지적하는 푸이그</Typography>
            </Box>
            </ListItem>
            </Link>
            <Divider light />
            <Link href='https://sports.news.naver.com/kbaseball/vod/index?id=1001517&category=baseballlesson&listType=total'>
            <ListItem button>
              <Box  sx={{ p: 2, maxWidth: 200,}}>
                <ButtonBase sx={{ width: 110, height: 68  }}>
                  <Img alt="complex" src="https://sports-phinf.pstatic.net//20221031_101/1667188920678TF53S_JPEG/CA202210310001.jpg" />
                </ButtonBase>
                <Typography variant="body2">LG팬들 분노 폭발! 류지현 감독, 쓸쓸한 굿바이? 재... </Typography>
            </Box>
            </ListItem>
            </Link>
            <Divider light />
            <Link href='https://sports.news.naver.com/golf/vod/index?id=1001648&category=golflesson&listType=total'>
            <ListItem button>
              <Box  sx={{ p: 2, maxWidth: 200,}}>
                <ButtonBase sx={{ width: 110, height: 68 }}>
                  <Img alt="complex" src="https://phinf.pstatic.net/tvcast/20221031_295/HbW4Y_1667193038076UHsWY_PNG/1667192986430.png" />
                </ButtonBase>
                <Typography variant="body2">[골프레슨] 이 방법을 알고 골프 인생이 바뀌었습...</Typography>
            </Box>
            </ListItem></Link>
            <Divider light />
            <Link href='https://sports.news.naver.com/wfootball/vod/index?id=1001929&category=wfootballlesson&gameId=2022110250035645885&date=20221102&listType=game'>
            <ListItem button>
              <Box  sx={{ p: 2, maxWidth: 200,}}>
                <ButtonBase sx={{  width: 110, height: 68 }}>
                  <Img alt="complex" src="https://phinf.pstatic.net/tvcast/20221102_183/sJLHo_1667358045051HYzwL_PNG/1667357970162.png" />
                </ButtonBase>
                <Typography variant="body2">[숏폼] 챔스 16강 진출하고 신난 해리 케인</Typography>
            </Box>
            </ListItem>
            </Link>
            <Divider light />
          </List>
        </Grid>
      </Grid>
    </Container>

    
    </>
  )
}
export default App;
*/
