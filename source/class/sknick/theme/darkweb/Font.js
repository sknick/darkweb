/**
 * @asset(qx/font/Roboto/*.woff)
 * @asset(qx/font/Roboto/*.woff2)
 * @asset(qx/font/Roboto/*.eot)
 * @asset(qx/font/Roboto/*.ttf)
 * @asset(qx/iconfont/MaterialIcons/*)
 */
qx.Theme.define("sknick.theme.darkweb.Font", {
    fonts: {
        "default": {
            size: 14,
            family: ["Verdana", "sans-serif"],
            color: "text-primary-on-surface"
        },

        "bold":
            {
                size: 14,
                family: ["Verdana", "sans-serif"],
                bold: true,
                color: "text-primary-on-surface"
            },

        "headline":
            {
                size: 24,
                family: ["Verdana", "sans-serif"],
                color: "text-primary-on-surface"
            },

        "small":
            {
                size: 12,
                family: ["Verdana", "sans-serif"],
                color: "text-primary-on-surface"
            },

        "monospace":
            {
                size: 14,
                family: ["monospace"],
                color: "text-primary-on-surface"
            }
    }
});
