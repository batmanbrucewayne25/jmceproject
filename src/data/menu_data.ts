

// import demo_img_1 from "../../public/assets/img/header/home-1.jpg";
// import demo_img_2 from "../../public/assets/img/header/home-2.jpg";
// import demo_img_3 from "../../public/assets/img/header/home-3.jpg";
// import demo_img_4 from "../../public/assets/img/header/home-4.jpg";
// import demo_img_5 from "../../public/assets/img/header/home-5.jpg";
// import demo_img_6 from "../../public/assets/img/header/home-6.jpg";



interface DataType {
	id: number;
	title?: string;
	link: string;
	icon: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	has_dropdown_inner?: boolean;
	sub_menus?: {
		link?: string;
		title?: string;
		title2?: string | any;
		btn_title?: string;
		one_page_link?: string | any;
		one_page_title?: string;
		demo_img?: string | any;
		inner_menu?: boolean;
		inner_menus?: {
			link?: string; title?: string
		}[];
	}[];
}

// menu data fas fa-home-lg fas fa-book fas fa-book fas fa-book  fas fa-file-alt  fas fa-phone-rotary
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/home",
		icon: "",
		// img_dropdown: true,
		// sub_menus: [
		// 	{ link: "/", demo_img: demo_img_1, title: "Education", title2: "Education" },
		// 	{ link: "/home-2", demo_img: demo_img_2, title: "Online Course", title2: "Online Course" },
		// 	{ link: "/home-3", demo_img: demo_img_3, title: "University", title2: "University" },
		// 	{ link: "/home-4", demo_img: demo_img_4, title: "Kindergarten", title2: "Kindergarten" },
		// 	{ link: "/home-5", demo_img: demo_img_5, title: "Business Coach", title2: "Business Coach" },
		// 	{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
		// 	{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
		// 	{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
		// ],
	},
	{
		id: 2,
		title: "About Us",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			{ link: "/about", title: "About JMEC" },
			{ link: "/chairman", title: "Chairman's Message" },
			{ link: "/principal", title: "Principal's Message" },
			{ link: "/boardmembers", title: "Board Members" },
			{ link: "/vision", title: "Vision and Mission" },
			{ link: "/quality", title: "Quality Policy" }, 
		],
	},
	{
		id: 3,
		title: "Department",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			{ link: "/cse", title: "Computer Science and Engineering" },
			{ link: "/cseai", title: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)" },
			{ link: "/cseds", title: "Computer Science and Engineering (Data Science)" },
			{ link: "/siteunderconstruction", title: "Mechanical Engineering" }, 
			{ link: "/mba", title: "Management Studies" }, 
		],
	},
	{
		id: 4,
		title: "Facilities",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			{ link: "/siteunderconstruction", title: "Library" },
			{ link: "/siteunderconstruction", title: "Transport" },
			{ link: "/siteunderconstruction", title: "Hostel" },
			{ link: "/siteunderconstruction", title: "Sports" }, 
			{ link: "/siteunderconstruction", title: "Cafeteria" },
			
			// { link: "/library", title: "Library" },
			// { link: "/transport", title: "Transport" },
			// { link: "/hostel", title: "Hostel" },
			// { link: "/sports", title: "Sports" }, 
			// { link: "/cafeteria", title: "Cafeteria" }, 
		],
	},
	// {
	// 	id: 2,
	// 	title: "Courses",
	// 	link: "#",
	// 	icon: "fas fa-book",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/courses", title: "Courses" },
	// 		{ link: "/courses-grid", title: "Courses Grid" },
	// 		{ link: "/courses-list", title: "Courses List" },
	// 		{ link: "/courses-details", title: "Courses Details 01" },
	// 		{ link: "/courses-details-2", title: "Courses Details 02" },
	// 	],
	// },
	// {
	// 	id: 3,
	// 	title: "Events",
	// 	link: "#",
	// 	icon: "fas fa-gift",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/event", title: "event" },
	// 		{ link: "/event-details", title: "Event Details" },
	// 	],
	// },
	// {
	// 	id: 4,
	// 	title: "Shop",
	// 	link: "#",
	// 	icon: "fas fa-shopping-bag",
	// 	has_dropdown: true,
	// 	sub_menus: [
	// 		{ link: "/shop-grid", title: "Shop Grid" },
	// 		{ link: "/shop-list", title: "Shop List" },
	// 		{ link: "/shop-left-sidebar", title: "Shop - Left Sidebar" },
	// 		{ link: "/shop-right-sidebar", title: "Shop -  Right Sidebar" },
	// 		{ link: "/shop-details", title: "Product Details" },
	// 		{ link: "/shop-cart", title: "Shop Cart" },
	// 		{ link: "/checkout", title: "Checkout" },
	// 	],
	// },
	// {
	// 	id: 5,
	// 	title: "Pages",
	// 	link: "#",
	// 	icon: "",
	// 	has_dropdown: true,
	// 	has_dropdown_inner: true,
	// 	sub_menus: [
	// 		{ link: "/about", title: "About" },
	// 		{ link: "/instructor", title: "Instructor" },
	// 		{ link: "/instructor-details", title: "Instructor Details" },
	// 		{ link: "/program", title: "Program" },
	// 		{ link: "/program-details", title: "Program Details" },
	// 		{
	// 			inner_menu: true,
	// 			title: "Blog",
	// 			inner_menus: [
	// 				{ link: "/news", title: "Blog" },
	// 				{ link: "/news-details", title: "Blog Details" },
	// 			]
	// 		},
	// 		{ link: "/gallery", title: "Gallery" },
	// 		{ link: "/pricing", title: "Pricing Plan" },
	// 		{ link: "/faq", title: "Faqs" },
	// 		{ link: "/sign-in", title: "Sign In" },
	// 		{ link: "/register", title: "register" },
	// 		{ link: "/404", title: "404 Error" },
	// 	],
	// },
	{
		id: 5,
		title: "Admissions",
		link: "/register",
		icon: "",
		has_dropdown: false,
	},

	
	// {
	// 	id: 6,
	// 	title: "Placement",
	// 	link: "/placements",
	// 	icon: "",
	// 	has_dropdown: false,
	// },
	{
		id: 7,
		title: "Research",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			// { link: "/publications", title: "Publications" },
			// { link: "/projects", title: "Projects" },
			{ link: "/siteunderconstruction", title: "Publications" },
			{ link: "/siteunderconstruction", title: "Projects" },
		],
	},
	{
		id: 8,
		title: "IQAC",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			{ link: "/siteunderconstruction", title: "IQAC" },
			{ link: "/siteunderconstruction", title: "IIC" },
			{ link: "/siteunderconstruction", title: "ICTE" },
			// { link: "/iqac", title: "IQAC" },
			// { link: "/iic", title: "IIC" },
			// { link: "/icte", title: "ICTE" },
		],
	},
	{
		id: 9,
		title: "Alumini",
		// link: "/alumini",
		link: "/siteunderconstruction",
		icon: "",
		has_dropdown: false,
	},
	{
		id: 10,
		title: "ERP",
		link: "#",
		icon: "",
		has_dropdown: true,
		sub_menus: [
			{ link: "https://www.jmcerp.in/jmce/", title: "Staff ERP" },
			{ link: "https://www.jmcerp.in/jmce/", title: "Students ERP" },
		],
	},
	{
		id: 6,
		title: "Grievance",
		link: "/grievance",
		icon: "",
		has_dropdown: false,
	},
	// {
	// 	id: 11,
	// 	title: "COE",
	// 	link: "/coe",
	// 	icon: "",
	// 	has_dropdown: false,
	// },
	{
		id: 12,
		title: "Contact",
		link: "/contact",
		icon: "",
		has_dropdown: false,
	},
	
];
export default menu_data;
