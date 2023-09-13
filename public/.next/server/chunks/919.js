exports.id = 919;
exports.ids = [919];
exports.modules = {

/***/ 8003:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7266))

/***/ }),

/***/ 3417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ AuthContextProvider),
  _: () => (/* binding */ UserAuth)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(8166);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(1288);
;// CONCATENATED MODULE: ./app/firebase.js
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk3x1Vu2ZBo2jHa8wk4bDwAtnPGzK80Uw",
    authDomain: "nextjs-auth-p.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "nextjs-auth-p",
    messagingSenderId: "81357715804",
    appId: "1:81357715804:web:cf172174113584d4286999"
};
// Initialize Firebase
const app = (0,app_dist/* initializeApp */.ZF)(firebaseConfig);
const auth = (0,dist/* getAuth */.v0)(app);

;// CONCATENATED MODULE: ./app/context/AuthContext.js




const AuthContext = /*#__PURE__*/ (0,react_.createContext)();
const AuthContextProvider = ({ children })=>{
    const [user, setUser] = (0,react_.useState)(null);
    const googleSignIn = ()=>{
        const provider = new dist/* GoogleAuthProvider */.hJ();
        (0,dist/* signInWithPopup */.rh)(auth, provider);
    };
    const logOut = ()=>{
        (0,dist/* signOut */.w7)(auth);
    };
    (0,react_.useEffect)(()=>{
        const unsubscribe = (0,dist/* onAuthStateChanged */.Aj)(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>unsubscribe();
    }, [
        user
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            user,
            googleSignIn,
            logOut
        },
        children: children
    });
};
const UserAuth = ()=>{
    return (0,react_.useContext)(AuthContext);
};


/***/ }),

/***/ 7266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(5723);
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/context/AuthContext.js + 1 modules
var AuthContext = __webpack_require__(3417);
;// CONCATENATED MODULE: ./app/components/Navbar.jsx




const Navbar = ()=>{
    const { user, googleSignIn, logOut } = (0,AuthContext/* UserAuth */._)();
    const [loading, setLoading] = (0,react_.useState)(true);
    const handleSignIn = async ()=>{
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignOut = async ()=>{
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    (0,react_.useEffect)(()=>{
        const checkAuthentication = async ()=>{
            await new Promise((resolve)=>setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [
        user
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-20 w-full border-b-2 flex items-center justify-between p-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: "About"
                        })
                    }),
                    !user ? null : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "p-2 cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/profile",
                            children: "Profile"
                        })
                    })
                ]
            }),
            loading ? null : !user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        onClick: handleSignIn,
                        className: "p-2 cursor-pointer",
                        children: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        onClick: handleSignIn,
                        className: "p-2 cursor-pointer",
                        children: "Sign up"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Welcome, ",
                            user.displayName
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "cursor-pointer",
                        onClick: handleSignOut,
                        children: "Sign out"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(1338);
;// CONCATENATED MODULE: ./app/layout.js
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthContext/* AuthContextProvider */.H, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\next-auth-firebase-main\app\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;