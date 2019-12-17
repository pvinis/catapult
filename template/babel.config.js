module.exports = function(api) {
	api.cache.forever()
	return {
		presets: ['module:metro-react-native-babel-preset'],
	}
}
