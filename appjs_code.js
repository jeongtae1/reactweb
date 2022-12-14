import "./App.css";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";

function Calculator() {
  const [Num, setNum] = useState(0);
  const [Sign, setSign] = useState("");
  const [Num2, setNum2] = useState(0);
  var NS = 0;
  return (
    <>
      <input type="text" value={Num} />
      <br />
      <ButtonGroup size="small">
        <Button
          sx={{ width: 118 }}
          onClick={() => {
            setNum(0);
            setNum2(0);
          }}
        >
          AC
        </Button>
        <Button
          onClick={() => {
            setSign("/");
            setNum2(Num);
            setNum(0);
          }}
        >
          /
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="small">
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 7);
            } else {
              setNum(Num * 10 + 7);
            }
          }}
        >
          7
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 8);
            } else {
              setNum(Num * 10 + 8);
            }
          }}
        >
          8
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 9);
            } else {
              setNum(Num * 10 + 9);
            }
          }}
        >
          9
        </Button>
        <Button
          onClick={() => {
            setSign("x");
            setNum2(Num);

            setNum(0);
          }}
        >
          x
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="small">
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 4);
            } else {
              setNum(Num * 10 + 4);
            }
          }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 5);
            } else {
              setNum(Num * 10 + 5);
            }
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 6);
            } else {
              setNum(Num * 10 + 6);
            }
          }}
        >
          6
        </Button>
        <Button
          onClick={() => {
            setSign("-");
            setNum2(Num);

            setNum(0);
          }}
        >
          -
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="small">
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 1);
            } else {
              setNum(Num * 10 + 1);
            }
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 2);
            } else {
              setNum(Num * 10 + 2);
            }
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            if (Num === 0) {
              setNum(Num + 3);
            } else {
              setNum(Num * 10 + 3);
            }
          }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            setSign("+");
            setNum2(Num);

            setNum(0);
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="small">
        <Button
          sx={{ width: 118 }}
          onClick={() => {
            if (Num === 0) {
              setNum(0);
            } else {
              setNum(Num * 10);
            }
          }}
        >
          0
        </Button>
        <Button
          onClick={() => {
            if (Sign === "/") {
              NS = Num2 / Num;
              setNum(NS);
              setNum2(0);
            } else if (Sign === "x") {
              NS = Num2 * Num;
              setNum(NS);
              setNum2(0);
            } else if (Sign === "-") {
              NS = Num2 - Num;
              setNum(NS);
              setNum2(0);
            } else if (Sign === "+") {
              NS = Num2 + Num;
              setNum(NS);
              setNum2(0);
            }
          }}
        >
          =
        </Button>
      </ButtonGroup>
    </>
  );
}
const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  height: "100%",
});
function App() {
  return (
    <>
      <Grid container spacing={2} whiteSpace="nowrap">
        <Grid item xs={3} sx={{ bgcolor: "#3f50b5" }} />
        <Grid item xs={6} sx={{ bgcolor: "#3f50b5" }} whiteSpace="nowrap">
          <Link href="https://sports.news.naver.com/index">
            <Button sx={{ color: "#fff" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                N SPORTS
              </Typography>
            </Button>
          </Link>
          <Link href="https://m.sports.naver.com/community/index">
            <Button>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#c2eafc" }}
              >
                ????????????
              </Typography>
            </Button>
          </Link>
          <Link href="https://news.naver.com/">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
          <Link href="https://weather.naver.com/">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
          <Link href="https://entertain.naver.com/home">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={3} sx={{ bgcolor: "#3f50b5" }}>
          <Link href="https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fsports.news.naver.com%2Findex">
            <Button variant="contained" size="small">
              ?????????
            </Button>
          </Link>
        </Grid>
        <Grid item xs={3} sx={{ bgcolor: "#3f50b5" }} />
        <Grid item xs={6} sx={{ bgcolor: "#3f50b5" }}>
          <Link href="https://sports.news.naver.com/index">
            <Button sx={{ color: "#fff" }}>
              <Typography sx={{ fontWeight: "bold" }}>????????? ???</Typography>
            </Button>
          </Link>
          <Link href="https://sports.news.naver.com/kbaseball/index">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
          <Link href="https://sports.news.naver.com/wbaseball/index">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ????????????
              </Typography>
            </Button>
          </Link>
          <Link href="https://sports.news.naver.com/kfootball/index">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
          <Link href="https://sports.news.naver.com/wfootball/index">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ????????????
              </Typography>
            </Button>
          </Link>
          <Link href="https://sports.news.naver.com/basketball/index">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                ??????
              </Typography>
            </Button>
          </Link>
          <Link href="https://game.naver.com/esports/League_of_Legends/home">
            <Button>
              <Typography sx={{ fontWeight: "bold", color: "#c2eafc" }}>
                e?????????
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={3} sx={{ bgcolor: "#3f50b5" }} />
      </Grid>
      <Container fixed>
        <Grid container spacing={2} textAlign="left">
          <Grid item xs={8} sx={{ mt: 3 }}>
            <Link href="https://sports.news.naver.com/news?oid=654&aid=0000024147">
              <Box sx={{ p: 2, maxWidth: 500 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 160, height: 95 }}>
                      <Img
                        alt="complex"
                        src="https://imgnews.pstatic.net/image/654/2022/11/04/0000024147_001_20221104090501696.jpg?type=w647"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          ?????????, ??? ?????? 4?????? ??????????????? ????????? ?????? ??????
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Link>
            <Divider light />
            <Link href="https://sports.news.naver.com/news?oid=477&aid=0000392107">
              <Box sx={{ p: 2, maxWidth: 500 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 160, height: 95 }}>
                      <Img
                        alt="complex"
                        src="https://imgnews.pstatic.net/image/477/2022/11/04/0000392107_001_20221104053101985.jpg?type=w647"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          '????????? ?????????' ??????, ?????????????????? ???????????????????????????
                          ?????????
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Link>
            <Divider light />
            <Link href="https://sports.news.naver.com/news?oid=003&aid=0011517957">
              <Box sx={{ p: 2, maxWidth: 500 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 160, height: 95 }}>
                      <Img
                        alt="complex"
                        src="https://imgnews.pstatic.net/image/003/2022/11/04/NISI20180628_0014226776_web_20180628012040_20221104162105109.jpg?type=w647"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          ????????? ????????? ???????????? ?????????????????? "?????? ?????? ??????"
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Link>
            <Divider light />
            <Link href="https://sports.news.naver.com/news?oid=109&aid=0004733341">
              <Box sx={{ p: 2, maxWidth: 500 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 160, height: 95 }}>
                      <Img
                        alt="complex"
                        src="https://imgnews.pstatic.net/image/109/2022/11/04/0004733341_001_20221104122103117.jpeg?type=w647"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          ????????? 2?????? ????????? ????????? ?????????, ?????? ???????????? ?????????
                          ????????????
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Link>
            <Divider light />
            <Link href="https://sports.news.naver.com/news?oid=108&aid=0003101727">
              <Box sx={{ p: 2, maxWidth: 500 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 160, height: 95 }}>
                      <Img
                        alt="complex"
                        src="https://imgnews.pstatic.net/image/108/2022/11/04/0003101727_001_20221104144301257.jpg?type=w647"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          "?????????, ??? ?????? ????????????" ????????? ???????????? ???, ??????
                          ???????????? ???????????? ??????
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Link>
            <Divider light />
            <Calculator />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            xs
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 180,
                height: 128,
              },
            }}
          >
            <List component="nav" aria-label="mailbox folders">
              <Typography>????????? ????????? ??????</Typography>
              <Divider light />
              <Link href="https://sports.news.naver.com/kfootball/vod/index?id=1002167&category=football">
                <ListItem button>
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <ButtonBase sx={{ width: 110, height: 68 }}>
                      <Img
                        alt="complex"
                        src="https://phinf.pstatic.net/tvcast/20221103_237/znOIm_1667453558263l5zLw_JPEG/1667453540198.jpeg"
                      />
                    </ButtonBase>
                    <Typography variant="body2">
                      '?????? ??????' ????????? ??????????????? ????????? ??????...
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
              <Divider light />
              <Link href="https://sports.news.naver.com/kbaseball/vod/index?id=1001993&category=kbo&gameId=77771102WOSK02022&date=20221102&listType=game">
                <ListItem button>
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <ButtonBase sx={{ width: 110, height: 68 }}>
                      <Img
                        alt="complex"
                        src="https://sports-phinf.pstatic.net/20221102_180/1667383946282LiDCx_JPEG/8_%C5%B0%BF%F2_vs_SSG2%C8%B8%C3%CA_%BD%C9%C6%C7%B0%FA_%C7%D4%B2%B2_%C6%F9%C6%AE%C0%C7_%BA%B8%C5%A9%B8%A6_%C1%F6%C0%FB%C7%CF%B4%C2_%C7%AA%C0%CC%B1%D7.jpg"
                      />
                    </ButtonBase>
                    <Typography variant="body2">
                      ????????? ?????? ????????? ????????? ???????????? ?????????
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
              <Divider light />
              <Link href="https://sports.news.naver.com/kbaseball/vod/index?id=1001517&category=baseballlesson&listType=total">
                <ListItem button>
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <ButtonBase sx={{ width: 110, height: 68 }}>
                      <Img
                        alt="complex"
                        src="https://sports-phinf.pstatic.net//20221031_101/1667188920678TF53S_JPEG/CA202210310001.jpg"
                      />
                    </ButtonBase>
                    <Typography variant="body2">
                      LG?????? ?????? ??????! ????????? ??????, ????????? ?????????? ???...{" "}
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
              <Divider light />
              <Link href="https://sports.news.naver.com/golf/vod/index?id=1001648&category=golflesson&listType=total">
                <ListItem button>
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <ButtonBase sx={{ width: 110, height: 68 }}>
                      <Img
                        alt="complex"
                        src="https://phinf.pstatic.net/tvcast/20221031_295/HbW4Y_1667193038076UHsWY_PNG/1667192986430.png"
                      />
                    </ButtonBase>
                    <Typography variant="body2">
                      [????????????] ??? ????????? ?????? ?????? ????????? ????????????...
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
              <Divider light />
              <Link href="https://sports.news.naver.com/wfootball/vod/index?id=1001929&category=wfootballlesson&gameId=2022110250035645885&date=20221102&listType=game">
                <ListItem button>
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <ButtonBase sx={{ width: 110, height: 68 }}>
                      <Img
                        alt="complex"
                        src="https://phinf.pstatic.net/tvcast/20221102_183/sJLHo_1667358045051HYzwL_PNG/1667357970162.png"
                      />
                    </ButtonBase>
                    <Typography variant="body2">
                      [??????] ?????? 16??? ???????????? ?????? ?????? ??????
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
              <Divider light />
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default App;
