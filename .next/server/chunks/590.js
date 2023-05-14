"use strict";
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 6661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/vector.348e2700.png","height":78,"width":82,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42hWNsUoDQRRF7+zOzI4Sg4YgWohWERG1sBes1eBP2PoHtpZ2lv6DTVIJtgpaClYpjKiIaIyb7I67OzcvD96DB+eeqyBTu39t2pxtk3HFjlklI/ZNhg6Ar7h212+af5wIsGhH9DbDjOyqgC034HNkPQ7lWSiIi2QYLsXyo3N2BXbWsx1NtUlKND7DtkuxIfrfndP0JhlzINBaJEdpj6eoRBlX2JJAvXc2eyyWIHCpJf2mKtwSeJGqxtJDeQUgVPNqXQXsaZuxY3IcuSEfdcHiezMO9Q+2tA/7cYFrBZnd896yzXngUs5J5Z/xYOzZBfA+AWkdgWXD3TSYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6152);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_CarousalArrows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_vector_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6661);







const CarousalArrowWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton)(({ backgroundColor , backgroundColorHover , theme  })=>({
        backgroundColor: `${backgroundColor}`,
        "&:hover": {
            backgroundColor: `${backgroundColorHover}`
        }
    }));
const ArrowsWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
    }));
const CarousalWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            gap: "10px"
        }
    }));
const BlogsCarousalCardWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        width: "100%",
        maxWidth: "1444px",
        margin: "0 auto",
        padding: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        background: "rgba(217, 217, 217, 0.1)",
        borderRadius: "65px"
    }));
const BlogsCarousal = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        width: "100%",
        maxWidth: "1444px",
        margin: "0 auto",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            padding: "40px 20px"
        }
    }));
const CardCarousel = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card)(({ theme  })=>({
        padding: "80px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "40px",
        [theme.breakpoints.down("sm")]: {
            padding: "20px",
            gap: "20px"
        }
    }));
const CarousalCardButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button)(({ theme  })=>({
        width: "264px",
        padding: "10px 0px",
        fontSize: "16px",
        fontWeight: 900,
        color: "#2F91E0",
        lineHeight: "125%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }));
const CarousalCardSecondButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button)(({ theme  })=>({
        width: "264px",
        fontSize: "22px",
        padding: "10px 0px",
        fontWeight: 500,
        color: "#4F84B7",
        lineHeight: "33px",
        textAlign: "center",
        letterSpacing: "0.05em",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }));
const CarousalCardContent = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography)(({ theme  })=>({
        width: "264px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#423D51",
        lineHeight: "150%",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            width: "50vw"
        }
    }));
const CarousalCardSubContent = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography)(({ theme  })=>({
        width: "372px",
        fontSize: "16px",
        fontWeight: 400,
        color: "rgba(0, 0, 0, 0.36)",
        lineHeight: "24px",
        textAlign: "justify",
        letterSpacing: "0.05em",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }));
const GenericCarousel = ({ carouselList  })=>{
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleNextClick = ()=>{
        setActiveIndex(activeIndex === carouselList.length - 1 ? 0 : activeIndex + 1);
    };
    const handlePrevClick = ()=>{
        setActiveIndex(activeIndex === 0 ? carouselList.length - 1 : activeIndex - 1);
    };
    const handleCarouselChange = (now, previous)=>{};
    const items = carouselList.map((listItem, index)=>{
        // Render two blog posts side by side
        const nextIndex = (index + 1) % carouselList.length;
        const nextListItem = carouselList[nextIndex];
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CarousalWrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogsCarousalCardWrapper, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardCarousel, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {
                                alt: "Rounded Image",
                                src: _public_images_vector_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                            }),
                            listItem.heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardContent, {
                                children: listItem.heading
                            }),
                            listItem.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardSubContent, {
                                children: listItem.description
                            }),
                            listItem.label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardButton, {
                                variant: "outlined",
                                children: listItem.label
                            }),
                            listItem.benefit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardSecondButton, {
                                variant: "outlined",
                                children: listItem.benefit
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogsCarousalCardWrapper, {
                    children: nextListItem && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardCarousel, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {
                                alt: "Rounded Image",
                                src: _public_images_vector_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                            }),
                            nextListItem.heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardContent, {
                                children: nextListItem.heading
                            }),
                            nextListItem.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardSubContent, {
                                children: nextListItem.description
                            }),
                            nextListItem.label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardButton, {
                                variant: "outlined",
                                children: nextListItem.label
                            }),
                            nextListItem.benefit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalCardSecondButton, {
                                variant: "outlined",
                                children: nextListItem.benefit
                            })
                        ]
                    })
                })
            ]
        }, index);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogsCarousal, {
                animation: "fade",
                indicators: false,
                index: activeIndex,
                autoPlay: false,
                onChange: handleCarouselChange,
                children: items
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ArrowsWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalArrowWrapper, {
                        backgroundColor: "white",
                        backgroundColorHover: "#f5f5f5",
                        onClick: handlePrevClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CarousalArrows__WEBPACK_IMPORTED_MODULE_4__/* .LeftArrowIcon */ .qg, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarousalArrowWrapper, {
                        backgroundColor: "#0395CE",
                        backgroundColorHover: "#2196f3",
                        onClick: handleNextClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CarousalArrows__WEBPACK_IMPORTED_MODULE_4__/* .RightArrowIcon */ .AD, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericCarousel);


/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* binding */ RightArrowIcon),
/* harmony export */   "CP": () => (/* binding */ WhiteLeftArrowIcon),
/* harmony export */   "qg": () => (/* binding */ LeftArrowIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LeftArrowIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "currentColor",
            d: "M16.59 7.41L12.18 12l4.41 4.59L15 18l-6-6 6-6z"
        })
    });
const WhiteLeftArrowIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "white",
            d: "M16.59 7.41L12.18 12l4.41 4.59L15 18l-6-6 6-6z"
        })
    });
const RightArrowIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "white",
            d: "M14.59 12L8.71 6.12a1.001 1.001 0 1 1 1.42-1.42l6.36 6.36c.39.39.39 1.02 0 1.41l-6.36 6.36a1.001 1.001 0 1 1-1.42-1.42L14.59 12z"
        })
    });


/***/ })

};
;