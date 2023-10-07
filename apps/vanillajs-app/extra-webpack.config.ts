import { Configuration } from 'webpack';

export default (config: Configuration): Configuration => {
    return {
        ...config,
        output: {
            ...config.output,
            library: {
                type: 'umd',
                name: 'vanillajs-app',
            }
        },
    };
};