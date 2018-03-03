// these are relative at the location of gulpfile.js.
module.exports = {
    tasks_dir: "./tasks",
    debug: false,

    sass: {
        command: "sass",
        watch_command: "sass:watch",
        dir: "app/src/sass",
        dest: "app/css",
        sources: ["**/*.scss"]
    },

    scripts: {
        command: "scripts",
        watch_command: "scripts:watch",
        dir: "app/src/js",
        dest: "app/js",
        sources: ["**/*.js"]
    },

    build: {
        views: {
            command: "build:views",
            dir: "app",
            sources: [
                "**/*.html",
                "**/*.twig"
            ],
            search_path: "app",
            dest: ""
        },

        images: {
            command: "build:images",
            dir: "app/src/img",
            sources: [
                "**/*.jpg",
                "**/*.png",
                "**/*.gif"
            ],
            dest: "img"
        },

        fonts: {
            command: "build:fonts",
            dir: "app",
            sources: [
                "**/*.eot",
                "**/*.svg",
                "**/*.ttf",
                "**/*.woff",
                "**/*.woff2",
                "**/*.otf"
            ],
            dest: "fonts"
        },

        dist: "app/dist"
    }
};