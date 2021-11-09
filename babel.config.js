module.exports = (api) => {
    // Cache configuration is a required option
    api.cache(false);
    const presets = [
        [
            "@babel/preset-env", {
                useBuiltIns: "usage"
            }
        ]
    ];

    const plugins = [
        "@babel/proposal-class-static-block"
    ];

    return {
        presets,
        plugins
    };
};
