import { Configuration } from 'webpack';
// import TerserPlugin from 'terser-webpack-plugin';

export default (config: Configuration): Configuration => {
    return {
        ...config,
        output: {
            ...config.output,
            library: {
                type: 'umd',
                name: 'vanillaJsApp',
            },
            globalObject: 'this',
            chunkLoadingGlobal: 'webpackChunkMFE',
        },
        optimization: {
            ...config.optimization,
            concatenateModules: true,
            minimize: false,
            runtimeChunk: false
        }
    };
};