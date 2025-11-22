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
                        className: "flex items-center gap-2 sm:gap-3 group flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity flex-shrink-0",
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
                                className: "block min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-base md:text-lg font-bold text-foreground leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Shreyhit Manufacturer (OPC) Pvt. Ltd."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                                lineNumber: 20,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: "Shreyhit Manufacturer"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                                lineNumber: 21,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground hidden sm:block",
                                        children: "ISO 9001:2015 Certified"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                        lineNumber: 23,
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
                        lineNumber: 28,
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
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                        lineNumber: 31,
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
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx",
                lineNumber: 52,
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
"[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/v0-shreyhit-website-design-main 2/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const products = [
    {
        name: "Shreyhit Premium Tea",
        category: "Beverages",
        image: "/premium-tea-product.jpg",
        description: "Rich, aromatic tea leaves sourced and packaged with care for the perfect brew",
        benefits: [
            "100% Natural",
            "Rich Aroma",
            "Premium Quality",
            "Fresh Packaging"
        ]
    },
    {
        name: "Shreyhit Toothbrush",
        category: "Oral Care",
        image: "/toothbrush-product.jpg",
        description: "Ergonomic design with gentle bristles for optimal dental care and comfort",
        benefits: [
            "Ergonomic Design",
            "Soft Bristles",
            "Durable",
            "Hygienic"
        ]
    },
    {
        name: "Shreyhit Dry Fruits Mix",
        category: "Food & Beverages",
        image: "/dry-fruits-product.jpg",
        description: "Premium selection of hand-picked nuts and dried fruits with excellent nutritional value",
        benefits: [
            "Hand-Picked",
            "High Nutrition",
            "Premium Quality",
            "Delicious Taste"
        ]
    },
    {
        name: "Shreyhit Detergent Powder",
        category: "Cleaning",
        image: "/detergent-powder-product.jpg",
        description: "Powerful cleaning formula for all fabric types with superior stain removal",
        benefits: [
            "Powerful Formula",
            "All Fabrics",
            "Eco-Friendly",
            "Long Lasting"
        ]
    },
    {
        name: "Shreyhit Scrubber",
        category: "Cleaning",
        image: "/scrubber-product.jpg",
        description: "Durable scrubber with superior cleaning power for kitchens and household use",
        benefits: [
            "Durable",
            "High Cleaning Power",
            "Long Life",
            "Affordable"
        ]
    },
    {
        name: "Shreyhit Sanitary Pads",
        category: "Personal Care",
        image: "/sanitary-pads-product.jpg",
        description: "Comfortable, reliable protection with premium materials and superior absorption",
        benefits: [
            "Comfortable",
            "Reliable",
            "Highly Absorbent",
            "Dermatologically Tested"
        ]
    }
];
function ProductsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-background to-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-16 animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl font-bold text-primary mb-4",
                                    children: "Our Products"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg max-w-2xl",
                                    children: "Discover our complete range of premium, ISO 9001 certified products manufactured with excellence and care. Each product is crafted to meet the highest quality standards."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",
                            children: products.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 animate-fadeInUp group",
                                    style: {
                                        animationDelay: `${i * 0.1}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.image || "/placeholder.svg",
                                                    alt: product.name,
                                                    width: 400,
                                                    height: 320,
                                                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold",
                                                    children: product.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-foreground mb-2",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm mb-4",
                                                    children: product.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-primary text-xs font-semibold mb-2",
                                                            children: "Key Benefits"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: product.benefits.map((benefit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-primary/20 text-primary text-xs px-2 py-1 rounded-full",
                                                                    children: benefit
                                                                }, idx, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 text-sm",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-lg p-8 mb-16 animate-fadeInUp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-primary mb-8",
                                    children: "ISO 9001:2015 Certification"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-background border border-primary/30 rounded-lg p-6 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/iso-certificate-detailed.png",
                                                alt: "ISO 9001:2015 Certificate",
                                                width: 400,
                                                height: 500,
                                                className: "w-full h-auto object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-foreground mb-6",
                                                    children: "Quality Assurance Commitment"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-6",
                                                    children: "All our products are manufactured under ISO 9001:2015 quality management standards, ensuring consistent excellence, reliability, and customer satisfaction across every product line."
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-background border border-border rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-primary font-semibold text-sm mb-1",
                                                                    children: "Certificate Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-foreground font-bold",
                                                                    children: "23QTR619"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-background border border-border rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-primary font-semibold text-sm mb-1",
                                                                    children: "Certification Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-foreground font-bold",
                                                                    children: "25/06/2025"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-background border border-border rounded-lg p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-primary font-semibold text-sm mb-1",
                                                                    children: "Valid Until"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-foreground font-bold",
                                                                    children: "25/06/2028"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3 text-muted-foreground text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary font-bold",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "International Quality Management Standards"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary font-bold",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Regular Audits & Compliance Checks"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary font-bold",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Continuous Process Improvement"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary font-bold",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Customer Satisfaction Focus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp",
                            style: {
                                animationDelay: "0.2s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-primary mb-4",
                                            children: "Daily Essentials"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mb-4",
                                            children: "Our range includes essential products for daily hygiene and household cleaning, all manufactured to the highest quality standards."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-muted-foreground text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Premium Tea"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Ergonomic Toothbrush"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Detergent Powder"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-primary mb-4",
                                            children: "Personal Care"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mb-4",
                                            children: "Specialized personal care products designed with comfort, hygiene, and quality as our top priorities."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-muted-foreground text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Sanitary Pads"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Kitchen Scrubber"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Premium Dry Fruits"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$v0$2d$shreyhit$2d$website$2d$design$2d$main__2$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Downloads/v0-shreyhit-website-design-main 2/app/products/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_v0-shreyhit-website-design-main%202_503b9edd._.js.map