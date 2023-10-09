import { Configuration } from 'webpack';

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
        },
        module: {
            rules:[
                ...config.module?.rules ?? [],
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                    options: {
                        sources: false,
                    },
                },
            ]
        }
    };
};