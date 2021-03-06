var GetAirportInfo = require('airportsjs');
var destinationRequests = require('../../ApisWrapper')
var flightRequests = require('../../FlightsWrapper')

module.exports = {

	index: function (req, res) {
    var Origin1 = req.body.origin_one
    var Origin2 = req.body.origin_two
    var DepDate = req.body.from.slice(6,10) +  "-" + req.body.from.slice(0,2) + "-" + req.body.from.slice(3,5)
    var RetDate = req.body.to.slice(6,10) + "-" + req.body.to.slice(0,2) + "-" + req.body.to.slice(3,5)
		console.log('Origin1', Origin1, "Origin2", Origin2);
		destinationRequests.matchedDestinations(Origin1, Origin2, DepDate, RetDate).then(function(destinationsresult){
				return res.view('index', {
					searchresults: destinationsresult,
					OriginOne: Origin1,
					OriginTwo: Origin2,
					depdate: DepDate,
					retdate: RetDate,
					searchBar: "true",
					user: req.user
				});
		  })
		  .catch(function (err) {
				return res.view('404')
		})

	},

	show: function (req, res) {
		var originOne = req.params.originOne
		var originTwo = req.params.originTwo
		var destination = req.params.destination
		var DepDate = req.params.DepDate
		var RetDate = req.params.RetDate
		var destLoca = GetAirportInfo.lookupByIataCode(destination.toUpperCase())

		flightRequests.theFlights(originOne, originTwo, destination, DepDate, RetDate).then(function(flightsResult){
			return res.view('show', {
					searchresults: flightsResult,
					originOne: originOne,
					originTwo: originTwo,
					destination: destination,
					destLoca: destLoca,
					searchBar: "true",
					user: req.user
				});
		  })
		  .catch(function (err) {
				return res.view('404')
		})

	}
};
