import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ButtonArea from "../components/buttonArea/ButtonArea";
import binaryStripe from "../assets/img/binary-stripe.png";
import HeroTwoSection from "../components/heroTwoSection/HeroTwoSection";

const Terms = () => {
  const theme = useTheme();
  return (
    <Box
      id="terms-main-body"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
        overflowX: "hidden",
        position: "relative",
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover"
      }}
    >
      <Box
        id="hero-experiment-container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          overflowX: "0px",
          marginBottom: 12
        }}
      >
        <Box
          id="terms-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 6
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: "center",
              fontFamily: "Urbanist",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%"
            }}
          >
            Last updated: Feb 4th, 2023
          </Typography>
        </Box>

        <Box
          id="terms-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 6
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: "center",
              fontFamily: "Urbanist",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              marginBottom: 3
            }}
          >
            Cookies Settings
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%"
            }}
          >
            Sit vel orci et malesuada nam eu. Hac sed auctor mus ipsum amet.
            Varius sed nisl leo, aliquet. In ultrices eget fermentum, aliquet
            dictum nec mattis. Fermentum quam blandit dictum ipsum est. Congue
            ac urna, id sed consectetur. Consectetur purus in lorem in volutpat
            orci, magna. Amet, nibh dictum augue vitae sit facilisi tortor orci.
            Vitae, tempor arcu elit, eu. Egestas at sed quis tempor, quam.
            Libero dictum placerat enim cras facilisis blandit non tortor. Etiam
            arcu morbi tincidunt sit vitae, morbi sit viverra vel. Ut risus
            neque, tortor facilisis arcu
          </Typography>
        </Box>
        <Box
          id="terms-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 6
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: "center",
              fontFamily: "Urbanist",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              marginBottom: 3
            }}
          >
            Privacy Settings
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%",
              marginBottom: 1.5
            }}
          >
            Arcu eget ut tortor eros in et risus. Egestas ipsum dui, fringilla
            odio mattis et. Amet, sem posuere lacus, et placerat consectetur est
            nunc. Tempus nibh nisl justo, quam tincidunt porta cras aliquam.
            Eget gravida posuere neque consequat venenatis, ipsum in. Cras
            aliquet faucibus egestas quisque arcu amet. Nec dui tempus, non
            ornare. Ornare tellus euismod ornare neque platea lobortis accumsan
            accumsan. Nunc scelerisque duis in amet, vitae sed felis nascetur
            congue.
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%"
            }}
          >
            Commodo volutpat placerat molestie morbi quis lorem ante
            scelerisque. Sit pellentesque porttitor mattis tellus blandit. Erat
            quisque massa dolor faucibus erat elementum id. Non feugiat neque
            magna sed accumsan. Nulla elit commodo nunc id. Id sit senectus
            vestibulum eget tortor risus vestibulum. Faucibus facilisi commodo
            aliquam aliquet massa porttitor egestas. Enim quam consectetur
            bibendum sodales ornare faucibus at egestas tincidunt. Interdum
            egestas pellentesque quisque egestas aliquam varius est, velit nec.
            Arcu commodo scelerisque odio posuere amet sit consectetur. Auctor
            tristique posuere egestas aliquet orci egestas.
          </Typography>
        </Box>
        <Box
          id="terms-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            position: "relative",
            width: "86%",
            height: "100%",
            margin: "0 7vw 0 7vw",
            maxHeight: "100%",
            marginBottom: 12
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: "center",
              fontFamily: "Urbanist",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              marginBottom: 3
            }}
          >
            Usage Settings
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%",
              marginBottom: 1.5
            }}
          >
            Sagittis dolor id adipiscing euismod gravida nibh platea sapien,
            elementum. Nulla neque, curabitur velit integer ultricies feugiat
            etiam. Donec magna pharetra nullam mauris. Nec, fermentum, varius
            habitasse arcu habitasse in et. Ut cursus id nulla et ac imperdiet
            pellentesque dui. At et egestas sed pellentesque tristique cras hac.
            Egestas diam velit dignissim pellentesque leo, velit vitae euismod.
            At in odio nunc, etiam nunc, turpis praesent sit. Tristique
            adipiscing metus consectetur lacus nam fames aenean etiam. Ante
            tincidunt felis metus consectetur ipsum, ultrices condimentum enim
            ipsum. Sed lacus mattis pretium sed neque ornare dictum erat.
            Habitasse nulla convallis sagittis sed. Fames suspendisse ut nisl
            scelerisque diam lacus.
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.5625rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "141.5%"
            }}
          >
            Nullam gravida nisl ultrices risus augue risus dolor dis.
            Vestibulum, sed consectetur vitae elit sagittis ipsum pellentesque
            dapibus. Tellus elementum tempor leo nibh fermentum, et enim,
            rhoncus in. Orci, blandit sodales quam tellus leo justo, viverra
            vestibulum. Sapien vulputate scelerisque varius sit lacus, in mauris
            ac. Sed faucibus vulputate sit senectus tortor amet accumsan et
            dolor. Euismod tincidunt feugiat ac mattis eget cum in nunc. Nulla
            pharetra vitae, et, ante urna, fringilla. Et nec nisl facilisis
            habitant est tortor. Erat consequat habitasse cursus placerat ornare
            sit scelerisque lectus. Dolor dictum proin etiam.
          </Typography>
        </Box>
        <ButtonArea />
        {/* BINARY STRIPE */}
        <Box
          id="binary-stripe-container"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: "relative",
            backgroundImage: `url(${binaryStripe})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "20vh",
            marginBottom: "15vh"
          }}
        />
        <HeroTwoSection />
      </Box>
    </Box>
  );
};
export default Terms;
