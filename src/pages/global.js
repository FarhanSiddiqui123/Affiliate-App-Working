
module.exports = {
	customer_obj: {},
	video_url: "",
	customer_exists: false,
	store: null,
	user: null,
	nav: null,
	added_bags: [],
	edit_orderList: [],
	registerEvents: false,
	appVersion: 1.0,  // 5.27
	backFrom: "",
	affiliate_role: [2, 12],
	userLocation: {},
	deviceInfo: {},
	company_code : "Molty",
	is_oe_company: true,
	cms_data: {},
	apiKey: "AIzaSyBalcCbhcPZDS5cLNVG6XadiMzxkvaPy4Y",

	formatCurrency: (x) => {
		if (!(x > 0))
			return 0

		if (!x)
			return

		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

};
