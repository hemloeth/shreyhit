(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavMenu",
    ()=>NavMenu,
    "navMenuItems",
    ()=>navMenuItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navMenuItems = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/personal",
        label: "Personal"
    },
    {
        href: "/products",
        label: "Products"
    },
    {
        href: "/franchise",
        label: "Franchise"
    },
    {
        href: "/dealership",
        label: "Dealership"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
function NavMenu({ onItemClick, variant = "desktop" }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (href)=>pathname === href;
    if (variant === "desktop") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-8",
            children: navMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `font-medium transition-colors ${isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
                    children: item.label
                }, item.href, false, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: navMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                onClick: onItemClick,
                className: `py-2 px-4 rounded-lg font-medium transition-colors ${isActive(item.href) ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-card hover:text-foreground"}`,
                children: item.label
            }, item.href, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(NavMenu, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavMenu;
var _c;
__turbopack_context__.k.register(_c, "NavMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/components/nav-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2 sm:gap-3 group flex-1 min-w-0 mr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/shreyhit-logo.png",
                                    alt: "Shreyhit Logo",
                                    width: 48,
                                    height: 48,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] leading-tight sm:text-sm md:text-base lg:text-lg font-bold text-foreground",
                                        children: "Shreyhit Manufacturer (OPC) Pvt. Ltd."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[8px] sm:text-xs text-muted-foreground leading-tight",
                                        children: "ISO 9001:2015 Certified"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavMenu"], {
                        variant: "desktop"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "md:hidden flex flex-col gap-1.5 p-2 hover:bg-card/50 rounded-lg transition-colors",
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-border bg-card/50 backdrop-blur-sm animate-slideDown",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$nav$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavMenu"], {
                        variant: "mobile",
                        onItemClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Navigation, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-card border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-primary mb-4",
                                    children: "Shreyhit"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 8,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm leading-relaxed",
                                    children: "ISO 9001 Certified Manufacturer of premium consumer products since 2025."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-foreground mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                className: "hover:text-primary transition-colors",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/about",
                                                className: "hover:text-primary transition-colors",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/products",
                                                className: "hover:text-primary transition-colors",
                                                children: "Products"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-foreground mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-semibold",
                                            children: "Director & CEO:"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        " Prince Srivastava"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-semibold",
                                            children: "Phone:"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        " +91 63913 91576"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-semibold",
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        " Goverdhanpur Bazar, Utraula, Balrampur 271604, UP, India"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border pt-8 text-center text-muted-foreground text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 Shreyhit Manufacturer (OPC) Private Limited. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DealershipPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DealershipPage() {
    _s();
    const [dealershipForm, setDealershipForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>{
            setDealershipForm({
                name: "",
                email: "",
                phone: "",
                location: "",
                message: ""
            });
            setSubmitted(false);
        }, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-background to-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 sm:mb-16 animate-fadeInUp text-center px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4",
                                    children: "Dealership Opportunities"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto",
                                    children: "Become an authorized Shreyhit dealer and distribute premium quality products in your region. Grow your business with our trusted brand."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 md:p-12 mb-16 animate-fadeInUp",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold text-foreground mb-4",
                                                children: "Distribute Shreyhit Products"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground mb-6",
                                                children: "Partner with an ISO 9001:2015 certified manufacturer and gain exclusive distribution rights for premium consumer products in your territory."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card border border-border rounded-lg px-4 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: "₹3-7L"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 46,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Investment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 47,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card border border-border rounded-lg px-4 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: "7+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Products"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card border border-border rounded-lg px-4 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: "100%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-64 md:h-80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/company-banner.png",
                                            alt: "Shreyhit Dealership",
                                            fill: true,
                                            className: "object-contain rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16 animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-primary mb-8 text-center",
                                    children: "Why Become a Shreyhit Dealer?"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "🤝"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "Exclusive Territory Rights"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Get exclusive distribution rights in your designated area with no competition from other Shreyhit dealers."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "📦"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "Premium Product Range"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Distribute 7+ high-quality products across multiple categories with consistent demand and market appeal."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "💰"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "Attractive Margins"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Enjoy competitive wholesale pricing with excellent profit margins and flexible payment terms."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "🚚"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "Reliable Supply Chain"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Guaranteed regular product supply with efficient logistics and timely delivery to your location."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "📢"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "Marketing Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Receive promotional materials, marketing collateral, and brand support to boost your sales."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card border border-border rounded-lg p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "🏆"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-3",
                                                    children: "ISO Certified Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: "Partner with an ISO 9001:2015 certified manufacturer known for quality and reliability."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-primary mb-8 text-center",
                                    children: "What You Get as a Dealer"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Exclusive Distribution Rights"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Sole distribution rights in your designated territory"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Wholesale Pricing"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Competitive dealer pricing with attractive profit margins"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Complete Product Portfolio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Access to all 7+ premium product lines"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Flexible Order Quantities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Order based on your market demand and storage capacity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Marketing Materials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Promotional materials, product catalogs, and display items"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Dedicated Support Team"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Direct access to our dealer support team for assistance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Regular Product Updates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Stay informed about new products and special offers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold text-xl",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-foreground mb-1",
                                                                    children: "Business Growth Support"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "Guidance on market expansion and sales strategies"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-8 animate-fadeInUp",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-primary mb-6",
                                            children: "Investment Details"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-3 border-b border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Initial Stock Investment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-foreground",
                                                            children: "₹3-5 Lakhs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-3 border-b border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Infrastructure Setup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-foreground",
                                                            children: "₹1-2 Lakhs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-3 border-b border-border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Working Capital"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-foreground",
                                                            children: "As per need"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground font-bold",
                                                            children: "Total Investment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-primary text-xl",
                                                            children: "₹3-7 Lakhs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-xs mt-6",
                                            children: "* Investment may vary based on territory size and market potential"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-8 animate-fadeInUp",
                                    style: {
                                        animationDelay: "0.1s"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-primary mb-6",
                                            children: "Requirements"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-muted-foreground text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Warehouse or storage facility (minimum 500 sq ft)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Valid GST registration and trade license"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Existing distribution network preferred"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Transportation arrangement capability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Experience in FMCG/consumer goods distribution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Strong local market knowledge and connections"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary font-bold",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Commitment to brand standards and quality"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-8 animate-fadeInUp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-primary mb-6 text-center",
                                        children: "Apply for Dealership"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-6 text-sm text-center",
                                        children: "Fill out the form below and our dealership team will contact you within 48 hours to discuss the opportunity."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-green-400 font-semibold",
                                                children: "Thank you! Your dealership application has been received."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm mt-2",
                                                children: "Our team will contact you within 48 hours."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Full Name",
                                                value: dealershipForm.name,
                                                onChange: (e)=>setDealershipForm({
                                                        ...dealershipForm,
                                                        name: e.target.value
                                                    }),
                                                required: true,
                                                className: "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Email Address",
                                                value: dealershipForm.email,
                                                onChange: (e)=>setDealershipForm({
                                                        ...dealershipForm,
                                                        email: e.target.value
                                                    }),
                                                required: true,
                                                className: "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                placeholder: "Phone Number",
                                                value: dealershipForm.phone,
                                                onChange: (e)=>setDealershipForm({
                                                        ...dealershipForm,
                                                        phone: e.target.value
                                                    }),
                                                required: true,
                                                className: "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Business Location / City",
                                                value: dealershipForm.location,
                                                onChange: (e)=>setDealershipForm({
                                                        ...dealershipForm,
                                                        location: e.target.value
                                                    }),
                                                required: true,
                                                className: "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "Tell us about your distribution experience and network",
                                                value: dealershipForm.message,
                                                onChange: (e)=>setDealershipForm({
                                                        ...dealershipForm,
                                                        message: e.target.value
                                                    }),
                                                required: true,
                                                rows: 5,
                                                className: "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all",
                                                children: "Submit Dealership Application"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-lg p-8 animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-primary mb-8 text-center",
                                    children: "Partner with a Certified Brand"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-muted-foreground mb-8",
                                    children: "Shreyhit is ISO 9001:2015 certified, ensuring the highest quality standards in manufacturing"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-background rounded-lg p-6 border border-primary/30 max-w-2xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/iso-certificate-detailed.png",
                                        alt: "ISO 9001:2015 Certificate",
                                        width: 600,
                                        height: 700,
                                        className: "w-full h-auto object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-muted-foreground text-sm mt-6",
                                    children: "Certificate No: 23QTR619 | Valid until: 25/06/2028"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/dealership/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DealershipPage, "fGihMDVjmF4WV7Pkd0ogmGKFC9k=");
_c = DealershipPage;
var _c;
__turbopack_context__.k.register(_c, "DealershipPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_v0-shreyhit-website-design-main%202_e7368320._.js.map