module.exports = {
	index: function (req, res) {
		return res.view('homepage', {
			user: req.user
		});
	}
};