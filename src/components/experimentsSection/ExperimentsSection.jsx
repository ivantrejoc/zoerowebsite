import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import diamond from "../../assets/icons/diamond.svg";
import brands from "../../assets/img/brands1.jpg";
import brandsTwo from "../../assets/img/brands2.png";
import leadBrand from "../../assets/img/leads-forge.png";
import teuserBrand from "../../assets/img/imageTeuserMain.png";
import expirementsBrand from "../../assets/img/frame-300.png";

const ExperimentsSection = () => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const diamondRef = useRef(null);
  const leftSideImgRef = useRef(null);
  const rightImagesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Animation for title
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animation for diamond
    tl.fromTo(
      diamondRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    );

    // Animation for left side image
    tl.fromTo(
      leftSideImgRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    );

    // Animation for right images container
    tl.fromTo(
      rightImagesRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <Box
      id="experiments"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        marginBottom: "15vh",
        width: "100%",
        height: "120vh",
        [theme.breakpoints.down("xxl")]: {
          height: "120vh",
        },
        [theme.breakpoints.down("md")]: {
          height: "221vh",
          marginBottom: 4,
        },
        [theme.breakpoints.down("sm")]: {
          height: "173vh",
        },
        [theme.breakpoints.down("xs")]: {
          height: "142vh",
        },
        [theme.breakpoints.down("xxs")]: {
          height: "124vh",
        },
        [theme.breakpoints.down("xxxs")]: {
          height: "113.5vh",
        },
      }}
    >
      <Box
        id="title-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "10vh",
          padding: "10vh 0 10vh 0",
          gap: "55vw",
          maxHeight: "100vh",
          [theme.breakpoints.down("xxl")]: {
            gap: "45vw",
          },
          [theme.breakpoints.down("md")]: {
            gap: "20vw",
          },
          [theme.breakpoints.down("sm")]: {
            padding: "5vh 0 5vh 0",
          },
          [theme.breakpoints.down("xs")]: {
            gap: "27vw",
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          ref={titleRef}
          sx={{
            marginLeft: "8vw",
            [theme.breakpoints.down("xxl")]: {
              width: "34%",
            },
            [theme.breakpoints.down("md")]: {
              width: "57%",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.375rem",
              marginLeft: "6vw",
            },
            [theme.breakpoints.down("xxs")]: {
              fontSize: "1.175rem",
            },
          }}
        >
          THE EXPERIMENTS
        </Typography>

        <img id="diamond" src={diamond} alt="diamond" ref={diamondRef} />
      </Box>
      <Box
        id="experiments-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          position: "relative",
          width: "83%",
          height: "99.1vh",
          [theme.breakpoints.down("xxl")]: {
            height: "100vh",
          },
          [theme.breakpoints.down("md")]: {
            height: "200vh",
          },
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            width: "90%",
          },
        }}
      >
        <Box
          id="experiments-image-container"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexShrink: 0,
            boxSizing: "border-box",
            gap: 4,
            [theme.breakpoints.down("xxl")]: {
              gap: 4,
            },
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: 1,
            },
            [theme.breakpoints.down("sm")]: {
              gap: 2,
            },
            [theme.breakpoints.down("xs")]: {
              gap: 7,
            },
            [theme.breakpoints.down("xxxs")]: {
              gap: 1,
            },
          }}
        >
          <Box
            id="left-images"
            sx={{
              width: "50.225rem",
              height: "50.225rem",
              flexShrink: 0,
              boxSizing: "border-box",
              [theme.breakpoints.down("xxl")]: {
                width: "40.425rem",
                height: "40.425rem",
              },
              [theme.breakpoints.down("md")]: {
                width: "39.825rem",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "32rem",
              },
              [theme.breakpoints.down("xs")]: {
                width: "100%",
                height: "21rem",
              },
              [theme.breakpoints.down("xxs")]: {
                height: "18rem",
              },
            }}
          >
            <a href="/domain-expansion">
              <img
                id="left-side-img"
                src={brands}
                alt="brands-1"
                ref={leftSideImgRef}
              />
            </a>
          </Box>
          <Box
            id="right-images"
            ref={rightImagesRef}
            sx={{
              width: "37.2rem",
              height: "100%",
              display: "flex",
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: 4,
              [theme.breakpoints.down("xxl")]: {
                gap: 3,
              },
              [theme.breakpoints.down("md")]: {
                flexDirection: "row",
                width: "100%",
                height: "18.65rem",
                gap: 1,
              },
              [theme.breakpoints.down("sm")]: {
                height: "12rem",
                gap: "0.5rem",
              },
              [theme.breakpoints.down("xs")]: {
                height: "12rem",
              },
              [theme.breakpoints.down("xxs")]: {
                height: "10rem",
              },
            }}
          >
            <Box
              id="up-right-images"
              sx={{
                width: "100%",
                height: "28.38215rem",
                flexShrink: 0,
                boxSizing: "border-box",
                [theme.breakpoints.down("xxl")]: {
                  height: "23.38215rem",
                },
                [theme.breakpoints.down("md")]: {
                  width: "18.65rem",
                  height: "18.65rem",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "16rem",
                  height: "12rem",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "12rem",
                  height: "12rem",
                },
                [theme.breakpoints.down("xxs")]: {
                  width: "10rem",
                  height: "10rem",
                },
              }}
            >
              <a href="/seafena">
                <img id="seafena-img" src={brandsTwo} alt="brands-1" />
              </a>
            </Box>
            <Box
              id="down-right-images"
              sx={{
                width: "100%",
                height: "19.8rem",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                gap: 4,
                flexShrink: 0,
                boxSizing: "border-box",
                [theme.breakpoints.down("xxl")]: {
                  height: "15.6rem",
                  gap: 2,
                },
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                },
                [theme.breakpoints.down("sm")]: {
                  gap: 1,
                },
              }}
            >
              <Box
                id="dowm-left-images"
                sx={{
                  width: "30%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  [theme.breakpoints.down("xxl")]: {
                    height: "15.6rem",
                    gap: 2,
                  },
                  [theme.breakpoints.down("md")]: {
                    flexDirection: "row",
                    width: "52%",
                    height: "7rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: "6rem",
                    width: "49%",
                    gap: 1,
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "47.9%",
                    height: "5rem",
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: "50.3%",
                    height: "4rem",
                  },
                }}
              >
                <Box
                  id="top-image"
                  sx={{
                    width: "100%",
                    height: "35%",
                    [theme.breakpoints.down("xxl")]: {
                      height: "6.1rem",
                    },
                    [theme.breakpoints.down("md")]: {
                      height: "7rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "6rem",
                      width: "8rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "7rem",
                      height: "5rem",
                    },
                    [theme.breakpoints.down("xxs")]: {
                      height: "4rem",
                    },
                    [theme.breakpoints.down("xxxs")]: {
                      width: "3.5rem",
                    },
                  }}
                >
                  <a href="/leads-forge">
                    <img
                      id="lead-forge-img"
                      src={leadBrand}
                      alt="leads-forge-logo"
                    />
                  </a>
                </Box>
                <Box
                  id="bottom-image"
                  sx={{
                    width: "100%",
                    height: "60%",
                    [theme.breakpoints.down("xxl")]: {
                      height: "9.45rem",
                    },
                    [theme.breakpoints.down("md")]: {
                      height: "7rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                      height: "6rem",
                      width: "8rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "7rem",
                      height: "5rem",
                    },
                    [theme.breakpoints.down("xxs")]: {
                      height: "4rem",
                    },
                    [theme.breakpoints.down("xxxs")]: {
                      width: "3.5rem",
                    },
                  }}
                >
                  <a href="/teuser">
                    <img id="teuser-img" src={teuserBrand} alt="teuser-logo" />
                  </a>
                </Box>
              </Box>
              <Box
                id="left-image"
                sx={{
                  width: "70%",
                  height: "100%",
                  [theme.breakpoints.down("md")]: {
                    width: "20.67rem",
                    height: "7.7rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "15.9rem",
                    height: "5.5rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "11.49rem",
                    height: "6.5rem",
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: "50.3%",
                    height: "5.5rem",
                  },
                }}
              >
                <a href="/experiments">
                  <img
                    id="experiment-img"
                    src={expirementsBrand}
                    alt="experiments"
                  />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ExperimentsSection;
