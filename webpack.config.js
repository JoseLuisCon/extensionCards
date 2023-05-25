const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const entryPoints = {
	VideoComponent: {
		path: "./src/VideoComponent.js",
		outputHtml: "video_component.html",
		build: true,
	},
	VideoOverlay: {
		path: "./src/VideoOverlay.js",
		outputHtml: "video_overlay.html",
		build: true,
	},
	Panel: {
		path: "./src/Panel.js",
		outputHtml: "panel.html",
		build: true,
	},
	Config: {
		path: "./src/Config.js",
		outputHtml: "config.html",
		build: true,
	},
	LiveConfig: {
		path: "./src/LiveConfig.js",
		outputHtml: "live_config.html",
		build: true,
	},
	Mobile: {
		path: "./src/Mobile.js",
		outputHtml: "mobile.html",
		build: true,
	},
};

// defines where the bundle file will live
const bundlePath = path.resolve(__dirname, "build/");

module.exports = (env, argv) => {
	const entry = {};

	let plugins = [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["build"] }), new webpack.HotModuleReplacementPlugin()];

	Object.keys(entryPoints).forEach((key) => {
		if (entryPoints[key].build) {
			entry[key] = entryPoints[key].path;
			if (argv.mode === "production") {
				plugins.push(
					new HtmlWebpackPlugin({
						inject: true,
						template: "./template.html",
						filename: entryPoints[key].outputHtml,
						chunks: [key],
					})
				);
			}
		}
	});

	const config = {
		entry,
		optimization: {
			minimize: false, // this setting is default to false to pass review more easily. you can opt to set this to true to compress the bundles, but also expect an email from the review team to get the full source otherwise.
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.scss$/,
					use: [
						"style-loader", // creates style nodes from JS strings
						"css-loader", // translates CSS into CommonJS
						"sass-loader", // compiles Sass to CSS, using Node Sass by default
					],
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					loader: "file-loader",
					options: {
						name: "img/[name].[ext]",
					},
				},
			],
		},
		resolve: {
			extensions: ["*", ".js", ".jsx"],
			fallback: {
				assert: require.resolve("assert"),
				buffer: require.resolve("buffer"),
				crypto: require.resolve("crypto-browserify"),
				stream: require.resolve("stream-browserify"),
			},
		},
		output: {
			filename: "[name].bandle.js",
			path: bundlePath,
		},
		plugins,
	};

	if (argv.open) {
		config.devtool = "source-map";
		config.devServer = {
			static: {
				directory: path.join(__dirname, "public"),
			},
			host: "localhost",
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			port: 8080,
		};
		config.devServer.https = true;
	}

	if (argv.mode === "production") {
		config.optimization.splitChunks = {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					chunks: "all",
					test: /node_modules/,
					name: false,
				},
			},
			name: false,
		};
	}

	return config;
};
