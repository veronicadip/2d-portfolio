import {defineConfig} from "vite";

export default defineConfig({
    base: "./",
    build: {
        // You can't use the default value with kaboom because the code won't work
        minify: "terser",
    }
})
