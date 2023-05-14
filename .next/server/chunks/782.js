"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 7782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ theme)
});

;// CONCATENATED MODULE: ./src/styles/colors.ts
const colors = {
    gray: "rgba(0, 0, 0, 0.42)",
    dimGray: "#656161",
    blueWhale: "#1D2740",
    black: "#000000",
    mortar: "#5B5858",
    deepSkyBlue: "#00BDFF",
    heather: "#B4BEC8",
    suvaGreyPointEight: "rgba(135,135,135,0.8)",
    prussianBlue: "#011334",
    dimWhite: "#FFFCFC"
};

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/muiConfig/theme.ts


const theme = (0,styles_.createTheme)({
    palette: {
        common: {
            black: colors.black,
            gray: colors.gray,
            dimGray: colors.dimGray,
            blueWhale: colors.blueWhale,
            mortar: colors.mortar,
            deepSkyBlue: colors.deepSkyBlue,
            heather: colors.heather,
            suvaGreyPointEight: colors.suvaGreyPointEight,
            prussianBlue: colors.prussianBlue,
            dimWhite: colors.dimWhite
        }
    },
    typography: {
        fontFamily: [
            "Poppins",
            "sans-serif"
        ].join(",")
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "primary"
                    },
                    style: {
                        background: "linear-gradient(90.42deg, #38B089 -24.56%, #03432E 104.46%)",
                        borderRadius: "26px",
                        fontFamily: [
                            "Poppins",
                            "sans-serif"
                        ].join(","),
                        textTransform: "none",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#ffffff"
                    }
                },
                {
                    props: {
                        variant: "secondary"
                    },
                    style: {
                        background: colors.prussianBlue,
                        borderRadius: "10px",
                        fontFamily: [
                            "Poppins",
                            "sans-serif"
                        ].join(","),
                        textTransform: "none",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#ffffff",
                        ":hover": {
                            background: colors.prussianBlue
                        }
                    }
                },
                {
                    props: {
                        variant: "outlined"
                    },
                    style: {
                        background: "white",
                        border: "border: 1px solid #2F91E0",
                        borderRadius: "10px",
                        fontFamily: [
                            "Poppins",
                            "sans-serif"
                        ].join(","),
                        textTransform: "none",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#ffffff"
                    }
                }
            ]
        }
    }
});


/***/ })

};
;