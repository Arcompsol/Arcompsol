"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BENEFITS\": function() { return /* binding */ BENEFITS; },\n/* harmony export */   \"FOOTER_LOCATIONS\": function() { return /* binding */ FOOTER_LOCATIONS; },\n/* harmony export */   \"FOOTER_SECTIONS\": function() { return /* binding */ FOOTER_SECTIONS; },\n/* harmony export */   \"QUALITIES\": function() { return /* binding */ QUALITIES; },\n/* harmony export */   \"ROUTES\": function() { return /* binding */ ROUTES; },\n/* harmony export */   \"VALUES\": function() { return /* binding */ VALUES; }\n/* harmony export */ });\nconst ROUTES = {\n    HOME: \"/\",\n    SERVICES: \"#services\",\n    CAREERS: \"/careers\",\n    ABOUT: \"/about\",\n    LETS_TALK: \"#lets-talk\"\n};\nconst FOOTER_SECTIONS = [\n    {\n        heading: \"Our Services\",\n        tabs: [\n            {\n                label: \"App Development\",\n                route: \"/\"\n            },\n            {\n                label: \"Cloud Solutions\",\n                route: \"/\"\n            }\n        ]\n    },\n    {\n        heading: \"Resources\",\n        tabs: [\n            {\n                label: \"Case studies\",\n                route: \"/\"\n            },\n            {\n                label: \"Blogs\",\n                route: \"/\"\n            }\n        ]\n    },\n    {\n        heading: \"Company\",\n        tabs: [\n            {\n                label: \"About Us\",\n                route: \"/\"\n            },\n            {\n                label: \"Contact Us\",\n                route: \"/\"\n            },\n            {\n                label: \"Privacy Policy\",\n                route: \"/\"\n            },\n            {\n                label: \"Terms of Service\",\n                route: \"/\"\n            }\n        ]\n    }\n];\nconst FOOTER_LOCATIONS = [\n    {\n        location: \"United States\",\n        address: \"Infomation technologies building, Kudus , Jawa tengah Indonesian\",\n        phone: \"+923204487749\",\n        phone2: \"+923009442848\",\n        email: \"arcompsol@gmail.com\"\n    },\n    {\n        location: \"PAKISTAN\",\n        address: \"Infomation technologies building, Kudus , Jawa tengah Indonesian\",\n        phone: \"+923204487749\",\n        phone2: \"+923009442848\",\n        email: \"arcompsol@gmail.com\"\n    }\n];\nconst QUALITIES = [\n    {\n        heading: \"Do you have a Passion to learn\",\n        description: \"If you have passion to learn new things, we want to hear from you. We look forward for people who has passion for everything they do.\"\n    },\n    {\n        heading: \"Do you have Confidence to take responsibilities\",\n        description: \"We are surrounded with people with full of confidence. So we need it in ton. Or else you will be an odd man out. Take responsibilities to grow.\"\n    },\n    {\n        heading: \"Do you Empathy towards others\",\n        description: \"Empathy is flowing in us. We onboard people who takes care of fellow human, it could be your colleague or your customer.\"\n    }\n];\nconst VALUES = [\n    {\n        heading: \"High Integrity\",\n        description: \"We do the right thing even when it's the harder option, and especially when no one's looking.\"\n    },\n    {\n        heading: \"Low Ego\",\n        description: \"Improving global outcomes is our top priority at work, and it is also the foundation for individual success.\"\n    },\n    {\n        heading: \"Candor with Empathy\",\n        description: \"We say what we mean, directly, candidly, and sincerely, but always with empathy and respect.\"\n    },\n    {\n        heading: \"Ownership\",\n        description: \"We do the right thing even when it's the harder option, and especially when no one's looking.\"\n    },\n    {\n        heading: \"Commitment\",\n        description: \"Improving global outcomes is our top priority at work, and it is also the foundation for individual success.\"\n    }\n];\nconst BENEFITS = [\n    {\n        benefit: \"Location\",\n        description: \"We have a distributed team, with Cleta working across the country. Those located in the Bay Area love our sunny, beautiful SoMa office. In addition to catered lunches, our kitchen is perennially stocked with snacks and drinks. Special requests welcome!\"\n    },\n    {\n        benefit: \" Health & Wellness\",\n        description: \"* 100% employer-paid medical coverage and 99% employer-paid dental and vision coverage for you and all your dependents.FSAs available too.\\n* $60 per month for however you prefer to stay in shape.\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLFNBQVM7SUFDcEJDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsV0FBVztBQUNiLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsU0FBUztRQUNUQyxNQUFNO1lBQ0o7Z0JBQ0VDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtZQUNBO2dCQUNFRCxPQUFPO2dCQUNQQyxPQUFPO1lBQ1Q7U0FDRDtJQUNIO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxNQUFNO1lBQ0o7Z0JBQ0VDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtZQUNBO2dCQUNFRCxPQUFPO2dCQUNQQyxPQUFPO1lBQ1Q7U0FDRDtJQUNIO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxNQUFNO1lBQ0o7Z0JBQ0VDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtZQUNBO2dCQUNFRCxPQUFPO2dCQUNQQyxPQUFPO1lBQ1Q7WUFDQTtnQkFDRUQsT0FBTztnQkFDUEMsT0FBTztZQUNUO1lBQ0E7Z0JBQ0VELE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtTQUNEO0lBQ0g7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO1FBQ0VDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUosVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsWUFBWTtJQUN2QjtRQUNFVixTQUFTO1FBQ1RXLGFBQ0U7SUFDSjtJQUNBO1FBQ0VYLFNBQVM7UUFDVFcsYUFDRTtJQUNKO0lBQ0E7UUFDRVgsU0FBUztRQUNUVyxhQUNFO0lBQ0o7Q0FDRCxDQUFDO0FBRUssTUFBTUMsU0FBUztJQUNwQjtRQUNFWixTQUFTO1FBQ1RXLGFBQ0U7SUFDSjtJQUNBO1FBQ0VYLFNBQVM7UUFDVFcsYUFDRTtJQUNKO0lBQ0E7UUFDRVgsU0FBUztRQUNUVyxhQUNFO0lBQ0o7SUFDQTtRQUNFWCxTQUFTO1FBQ1RXLGFBQ0U7SUFDSjtJQUNBO1FBQ0VYLFNBQVM7UUFDVFcsYUFDRTtJQUNKO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFdBQVc7SUFDdEI7UUFDRUMsU0FBUztRQUNUSCxhQUNFO0lBQ0o7SUFDQTtRQUNFRyxTQUFTO1FBQ1RILGFBQ0U7SUFDSjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cz8wNTg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBST1VURVMgPSB7XG4gIEhPTUU6IFwiL1wiLFxuICBTRVJWSUNFUzogXCIjc2VydmljZXNcIixcbiAgQ0FSRUVSUzogXCIvY2FyZWVyc1wiLFxuICBBQk9VVDogXCIvYWJvdXRcIixcbiAgTEVUU19UQUxLOiBcIiNsZXRzLXRhbGtcIixcbn07XG5cbmV4cG9ydCBjb25zdCBGT09URVJfU0VDVElPTlMgPSBbXG4gIHtcbiAgICBoZWFkaW5nOiBcIk91ciBTZXJ2aWNlc1wiLFxuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQXBwIERldmVsb3BtZW50XCIsXG4gICAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkNsb3VkIFNvbHV0aW9uc1wiLFxuICAgICAgICByb3V0ZTogXCIvXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBoZWFkaW5nOiBcIlJlc291cmNlc1wiLFxuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ2FzZSBzdHVkaWVzXCIsXG4gICAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkJsb2dzXCIsXG4gICAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiQ29tcGFueVwiLFxuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQWJvdXQgVXNcIixcbiAgICAgICAgcm91dGU6IFwiL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiQ29udGFjdCBVc1wiLFxuICAgICAgICByb3V0ZTogXCIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJQcml2YWN5IFBvbGljeVwiLFxuICAgICAgICByb3V0ZTogXCIvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJUZXJtcyBvZiBTZXJ2aWNlXCIsXG4gICAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGT09URVJfTE9DQVRJT05TID0gW1xuICB7XG4gICAgbG9jYXRpb246IFwiVW5pdGVkIFN0YXRlc1wiLFxuICAgIGFkZHJlc3M6IFwiSW5mb21hdGlvbiB0ZWNobm9sb2dpZXMgYnVpbGRpbmcsIEt1ZHVzICwgSmF3YSB0ZW5nYWggSW5kb25lc2lhblwiLFxuICAgIHBob25lOiBcIis5MjMyMDQ0ODc3NDlcIixcbiAgICBwaG9uZTI6IFwiKzkyMzAwOTQ0Mjg0OFwiLFxuICAgIGVtYWlsOiBcImFyY29tcHNvbEBnbWFpbC5jb21cIixcbiAgfSxcbiAge1xuICAgIGxvY2F0aW9uOiBcIlBBS0lTVEFOXCIsXG4gICAgYWRkcmVzczogXCJJbmZvbWF0aW9uIHRlY2hub2xvZ2llcyBidWlsZGluZywgS3VkdXMgLCBKYXdhIHRlbmdhaCBJbmRvbmVzaWFuXCIsXG4gICAgcGhvbmU6IFwiKzkyMzIwNDQ4Nzc0OVwiLFxuICAgIHBob25lMjogXCIrOTIzMDA5NDQyODQ4XCIsXG4gICAgZW1haWw6IFwiYXJjb21wc29sQGdtYWlsLmNvbVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFFVQUxJVElFUyA9IFtcbiAge1xuICAgIGhlYWRpbmc6IFwiRG8geW91IGhhdmUgYSBQYXNzaW9uIHRvIGxlYXJuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIklmIHlvdSBoYXZlIHBhc3Npb24gdG8gbGVhcm4gbmV3IHRoaW5ncywgd2Ugd2FudCB0byBoZWFyIGZyb20geW91LiBXZSBsb29rIGZvcndhcmQgZm9yIHBlb3BsZSB3aG8gaGFzIHBhc3Npb24gZm9yIGV2ZXJ5dGhpbmcgdGhleSBkby5cIixcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiRG8geW91IGhhdmUgQ29uZmlkZW5jZSB0byB0YWtlIHJlc3BvbnNpYmlsaXRpZXNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2UgYXJlIHN1cnJvdW5kZWQgd2l0aCBwZW9wbGUgd2l0aCBmdWxsIG9mIGNvbmZpZGVuY2UuIFNvIHdlIG5lZWQgaXQgaW4gdG9uLiBPciBlbHNlIHlvdSB3aWxsIGJlIGFuIG9kZCBtYW4gb3V0LiBUYWtlIHJlc3BvbnNpYmlsaXRpZXMgdG8gZ3Jvdy5cIixcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiRG8geW91IEVtcGF0aHkgdG93YXJkcyBvdGhlcnNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRW1wYXRoeSBpcyBmbG93aW5nIGluIHVzLiBXZSBvbmJvYXJkIHBlb3BsZSB3aG8gdGFrZXMgY2FyZSBvZiBmZWxsb3cgaHVtYW4sIGl0IGNvdWxkIGJlIHlvdXIgY29sbGVhZ3VlIG9yIHlvdXIgY3VzdG9tZXIuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVkFMVUVTID0gW1xuICB7XG4gICAgaGVhZGluZzogXCJIaWdoIEludGVncml0eVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBkbyB0aGUgcmlnaHQgdGhpbmcgZXZlbiB3aGVuIGl0J3MgdGhlIGhhcmRlciBvcHRpb24sIGFuZCBlc3BlY2lhbGx5IHdoZW4gbm8gb25lJ3MgbG9va2luZy5cIixcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiTG93IEVnb1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJbXByb3ZpbmcgZ2xvYmFsIG91dGNvbWVzIGlzIG91ciB0b3AgcHJpb3JpdHkgYXQgd29yaywgYW5kIGl0IGlzIGFsc28gdGhlIGZvdW5kYXRpb24gZm9yIGluZGl2aWR1YWwgc3VjY2Vzcy5cIixcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6IFwiQ2FuZG9yIHdpdGggRW1wYXRoeVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBzYXkgd2hhdCB3ZSBtZWFuLCBkaXJlY3RseSwgY2FuZGlkbHksIGFuZCBzaW5jZXJlbHksIGJ1dCBhbHdheXMgd2l0aCBlbXBhdGh5IGFuZCByZXNwZWN0LlwiLFxuICB9LFxuICB7XG4gICAgaGVhZGluZzogXCJPd25lcnNoaXBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2UgZG8gdGhlIHJpZ2h0IHRoaW5nIGV2ZW4gd2hlbiBpdCdzIHRoZSBoYXJkZXIgb3B0aW9uLCBhbmQgZXNwZWNpYWxseSB3aGVuIG5vIG9uZSdzIGxvb2tpbmcuXCIsXG4gIH0sXG4gIHtcbiAgICBoZWFkaW5nOiBcIkNvbW1pdG1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSW1wcm92aW5nIGdsb2JhbCBvdXRjb21lcyBpcyBvdXIgdG9wIHByaW9yaXR5IGF0IHdvcmssIGFuZCBpdCBpcyBhbHNvIHRoZSBmb3VuZGF0aW9uIGZvciBpbmRpdmlkdWFsIHN1Y2Nlc3MuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQkVORUZJVFMgPSBbXG4gIHtcbiAgICBiZW5lZml0OiBcIkxvY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldlIGhhdmUgYSBkaXN0cmlidXRlZCB0ZWFtLCB3aXRoIENsZXRhIHdvcmtpbmcgYWNyb3NzIHRoZSBjb3VudHJ5LiBUaG9zZSBsb2NhdGVkIGluIHRoZSBCYXkgQXJlYSBsb3ZlIG91ciBzdW5ueSwgYmVhdXRpZnVsIFNvTWEgb2ZmaWNlLiBJbiBhZGRpdGlvbiB0byBjYXRlcmVkIGx1bmNoZXMsIG91ciBraXRjaGVuIGlzIHBlcmVubmlhbGx5IHN0b2NrZWQgd2l0aCBzbmFja3MgYW5kIGRyaW5rcy4gU3BlY2lhbCByZXF1ZXN0cyB3ZWxjb21lIVwiLFxuICB9LFxuICB7XG4gICAgYmVuZWZpdDogXCIgSGVhbHRoICYgV2VsbG5lc3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiKiAxMDAlIGVtcGxveWVyLXBhaWQgbWVkaWNhbCBjb3ZlcmFnZSBhbmQgOTklIGVtcGxveWVyLXBhaWQgZGVudGFsIGFuZCB2aXNpb24gY292ZXJhZ2UgZm9yIHlvdSBhbmQgYWxsIHlvdXIgZGVwZW5kZW50cy5GU0FzIGF2YWlsYWJsZSB0b28uXFxuKiAkNjAgcGVyIG1vbnRoIGZvciBob3dldmVyIHlvdSBwcmVmZXIgdG8gc3RheSBpbiBzaGFwZS5cIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiUk9VVEVTIiwiSE9NRSIsIlNFUlZJQ0VTIiwiQ0FSRUVSUyIsIkFCT1VUIiwiTEVUU19UQUxLIiwiRk9PVEVSX1NFQ1RJT05TIiwiaGVhZGluZyIsInRhYnMiLCJsYWJlbCIsInJvdXRlIiwiRk9PVEVSX0xPQ0FUSU9OUyIsImxvY2F0aW9uIiwiYWRkcmVzcyIsInBob25lIiwicGhvbmUyIiwiZW1haWwiLCJRVUFMSVRJRVMiLCJkZXNjcmlwdGlvbiIsIlZBTFVFUyIsIkJFTkVGSVRTIiwiYmVuZWZpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/constants.ts\n"));

/***/ })

});