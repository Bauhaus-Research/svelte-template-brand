// readable store for brand data
import { readable } from 'svelte/store';

export let brandName = 'Bauhaus Research';
export let brandStory =
	'We are a company that wants to get your company started in their first food truck';
export let tagline = 'Our Mission';
export let blogtagline = 'What we think about';
export let taglinehomepage = 'Navigate the Street Food Business';
export let taglinehomepagepara =
	'Want to know how to get a successful foodtruck? Marketing seo yada yada. WE do that for you.';
export let email = 'ryan@bauhausresearch.com';
export let context = `Company: ${brandName}`;
export let info = [
	{
		title: '01',
		subtitle: 'Local Expertise',
		para: 'We have an in-depth understanding of the local street food scene, allowing us to provide tailored solutions that resonate with your target audience.'
	},
	{
		title: '02',
		subtitle: 'Custom Web Solutions',
		para: 'Our team creates custom websites designed to showcase your unique brand and menu, setting you apart from competitors using generic templates.'
	},
	{
		title: '03',
		subtitle: 'SEO Mastery',
		para: `We specialize in search engine optimization (SEO) strategies that drive local traffic to your website, ensuring you're easily discoverable by hungry customers nearby.`
	},
	{
		title: '04',
		subtitle: 'Mobile Optimization',
		para: 'We prioritize mobile responsiveness to make sure your website looks and works great on smartphones, where most customers search for food options.'
	},
	{
		title: '05',
		subtitle: 'Emergency Support:',
		para: ` As a local company, we're readily available for in-person meetings, on-site assistance, and prompt customer support to address your needs quickly.`
	},
	{
		title: '06',
		subtitle: 'Results-Driven',
		para: `We focus on delivering measurable results, whether it's increased website traffic, higher rankings on search engines, or more online orders.`
	},
	{
		title: '07',
		subtitle: 'Security',
		para: ` We prioritize the security of your website and customer data, implementing industry best practices to protect against cyber threats.`
	},
	{
		title: '08',
		subtitle: 'Sustainable Practices',
		para: `Our company is committed to eco-friendly practices, from using green hosting solutions to minimizing our carbon footprint.`
	}
];

export let questions = [
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	},
	{
		id: 1,
		question: 'What is your favorite color?',
		answers: [
			{
				id: 1,
				answer: 'Blue',
				votes: 0
			},
			{
				id: 2,
				answer: 'Red',
				votes: 0
			}
		]
	}
];

export let websiteServices = [
	{
		Service: 'Custom Website Design',
		Basic: 'check',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Form Design and Deployment',
		Basic: 'check',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'E-commerce Integration',
		Basic: 'cross',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Basic Search Engine Optimization (SEO)',
		Basic: 'check',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Responsive Web Design',
		Basic: 'check',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Loyalty Program',
		Basic: 'cross',
		Standard: 'Add-On',
		Premium: 'check'
	},
	{
		Service: 'Slack Integration',
		Basic: 'cross',
		Standard: 'Add-On',
		Premium: 'check'
	},
	{
		Service: 'Dine-in Order + Payments',
		Basic: 'cross',
		Standard: 'Add-On',
		Premium: 'check'
	},
	{
		Service: 'Content Management System (CMS)',
		Basic: 'cross',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Social Media Integration',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'E-commerce Product Listings',
		Basic: 'cross',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Web Hosting',
		Basic: 'check',
		Standard: 'check',
		Premium: 'check'
	},
	{
		Service: 'Domain Registration',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Security and SSL Certificate',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Analytics and Reporting',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: '24/7 Customer Support',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Mobile App Development',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'Add-On'
	},
	{
		Service: 'Content Writing',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Premium Search Engine Optimization (SEO)',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Logo Design',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'check'
	},
	{
		Service: 'Gift Cards & Merchandising',
		Basic: 'cross',
		Standard: 'cross',
		Premium: 'Add-On'
	}
];

export let aboutUs = [
	{
		title: 'Puerto Rican Cooking',
		subtitle: 'Loremipsum',
		icon: 'pr.svg'
	},
	{
		title: 'Fresh Ingredients',
		subtitle: 'Loremipsum',
		icon: 'lettuce.svg'
	},
	{
		title: 'Community',
		subtitle: 'Well regarded among the community.',
		icon: 'community.svg'
	}
];
export let contactOptions = [
	{
		title: 'Email Us',
		icon: 'lettuce',
		p: `
        Contact Support anytime for updates <span><a class="text-red-800 font-bold" href="mailto:someone@yoursite.com">support@streetfoodservice.us</a></span>
        `
	},
	{
		title: 'Albert',
		icon: 'lettuce',
		p: `
       For general questions 24/7, meet:
        `
	},
	{
		title: 'Contact Form',
		icon: 'lettuce',
		p: `
       For quicker service, use our
        `
	}
];
export let contentDown = [
	{
		title: '25 Creative Instagram Ideas for Restaurants',
		content: `No amount of tactics, hacks, or best practices can overcome mediocre Instagram content.

		To help with this, we’ve curated 25 great examples of restaurant Instagram content and packaged them for easy reading and brainstorming. If you download the report, you'll get all of the following:`,
		image: ''
	}
];

export let pressRel = [
	{
		title: `Navigating the Legal Landscape: Street Food Services' Expert Advice for Food Truck Businesses`,
		subtitle: 'Loremipsum',
		slug: '9quwxqyewbx',
		content: `
		<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigating the Legal Landscape: Street Food Services' Expert Advice for Food Truck Businesses</title>
</head>

<body class="bg-gray-100">
    <header class="text-red-900 text-center py-4">
        <h1 class="text-3xl font-semibold">Learn the basics of the Legistlature as it pertains to your Food Truck Restauramt</h1>
    </header>

    <article class="mx-8 my-6 text-gray-800 text-lg">
        <p>
            The world of food trucks is filled with delicious possibilities, but it's also governed by a complex web
            of laws and regulations. These regulations, while necessary, can often pose significant challenges for
            food truck entrepreneurs looking to hit the streets and serve up their culinary creations.
        </p>

        <p>
            At Street Food Services, we understand the hurdles and intricacies of the legal landscape that the food
            truck industry faces. In this article, we'll dive into the laws that generally limit the food truck
            industry and how our expert advice can help food truck businesses navigate these challenges with success.
        </p>

        <h2 class="text-2xl font-semibold my-4">The Regulatory Roadblocks</h2>
        <p>
            Food truck businesses encounter various legal constraints, including permits, health codes, zoning regulations,
            and more. These regulations, while essential for public safety, can sometimes seem overwhelming.
        </p>

        <h2 class="text-2xl font-semibold my-4">How Street Food Services Can Assist</h2>
        <p>
            Street Food Services specializes in helping food truck businesses not only overcome these legal hurdles but also
            thrive within the boundaries set by local authorities. Here's how our expert advice can make a difference:
        </p>

        <ul class="list-disc ml-8">
            <li><strong>Regulatory Guidance:</strong> We provide in-depth guidance on acquiring permits, licenses, and meeting health codes.</li>
            <li><strong>Zoning Solutions:</strong> We help you find strategic locations that comply with zoning regulations, ensuring prime spots for your food truck.</li>
            <li><strong>Legal Compliance:</strong> Our team ensures your business operations align with local and state laws.</li>
            <li><strong>Documentation Assistance:</strong> We assist in preparing the necessary paperwork, saving you time and potential legal headaches.</li>
            <li><strong>Advocacy:</strong> If legal issues arise, we can connect you with legal professionals experienced in food truck matters.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">Your Journey to Food Truck Success</h2>
        <p>
            While legal limitations may seem daunting, they don't have to be barriers to your food truck dreams.
            Street Food Services is here to provide expert guidance and support, ensuring you can navigate the
            regulatory landscape with confidence and focus on serving your delicious creations.
        </p>

        <p>
            If you're ready to conquer the legal challenges and make your food truck business thrive,
            <strong>contact Street Food Services today!</strong>
        </p>
    </article>

    <footer class="text-red-900 text-center py-4">
        <p class="text-lg"><strong>Ready to turn your food truck dream into a reality?</strong> <br>Contact Street Food Services now!</p>
    </footer>
</body>

</html>
		`,
		icon: 'pr.svg',
		location: 'San',
		date: 'August 22, 2023'
	},
	{
		title: `Best Practices for Starting a Food Truck with Street Food Services`,
		subtitle: 'Loremipsum',
		slug: '9quwxqyewbx',
		content: `
		<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rolling Success: Best Practices for Starting a Food Truck with Street Food Services</title>
    <style>
        /* Custom styles can be added here */
    </style>
</head>

<body class="bg-gray-100">
    <header class="text-red-900 text-center py-4">
        <h1 class="text-3xl font-semibold">Trouble Navigating the market? Here are some of our best practices for newer small business owners</h1>
    </header>

    <article class="mx-8 my-6 text-gray-800 text-lg">
        <p>
            Food trucks have become a vibrant and competitive part of the culinary landscape. The allure of
            hitting the streets and serving up delicious dishes is enticing, but the journey to food truck
            success can be challenging.
        </p>

        <p>
            At Street Food Services, we've been helping aspiring food truck entrepreneurs turn their dreams into
            reality. In this article, we'll explore the best practices for starting a food truck business and
            how Street Food Services can be your partner on the road to success.
        </p>

        <h2 class="text-2xl font-semibold my-4">Navigating the Food Truck Frontier</h2>
        <p>
            The competitive nature of the food truck market demands careful planning and execution. Here are
            some essential best practices to get you started on the right track:
        </p>

        <ul class="list-disc ml-8">
            <li><strong>Market Research:</strong> Understand your target audience, location, and competitors to identify a niche for your offerings.</li>
            <li><strong>Legal Requirements:</strong> Familiarize yourself with permits, licenses, health regulations, and zoning laws in your area.</li>
            <li><strong>Business Plan:</strong> Develop a comprehensive business plan covering your menu, pricing, marketing, and financial projections.</li>
            <li><strong>Menu Innovation:</strong> Create a unique and appealing menu with signature dishes that set you apart.</li>
            <li><strong>Location Strategy:</strong> Choose high-traffic locations and consider partnerships with local businesses for visibility.</li>
            <li><strong>Marketing and Branding:</strong> Build a strong brand identity, including a memorable logo and online presence through a website and social media.</li>
            <li><strong>Customer Engagement:</strong> Foster customer loyalty through excellent service and engagement, such as loyalty programs or events.</li>
            <li><strong>Financial Management:</strong> Keep track of expenses, revenue, and taxes to ensure a sustainable business model.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">How Street Food Services Can Help</h2>
        <p>
            Street Food Services specializes in web development and services tailored for food truck businesses.
            Here's how we can be your partner on the journey:
        </p>

        <ul class="list-disc ml-8">
            <li><strong>Stunning Websites:</strong> We create eye-catching and functional websites to showcase your menu and attract customers.</li>
            <li><strong>Mobile Optimization:</strong> We ensure that your online presence is optimized for mobile devices, capturing on-the-go customers.</li>
            <li><strong>Online Ordering:</strong> We can set up online ordering systems for efficient customer service.</li>
            <li><strong>Digital Marketing:</strong> Our team develops effective digital marketing strategies to boost your online visibility.</li>
            <li><strong>Search Engine Optimization (SEO):</strong> We improve your search engine rankings to help customers find you more easily.</li>
            <li><strong>Social Media Integration:</strong> We integrate your social media profiles into your website for a seamless online presence.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">Ready to Roll?</h2>
        <p>
            Starting a food truck is a thrilling journey, and success requires a mix of passion, dedication,
            and the right support. Street Food Services is here to provide you with the tools and expertise
            needed to launch and thrive in the competitive food truck world.
        </p>

        <p>
            If you're ready to roll with your food truck dreams, <strong>contact Street Food Services today!</strong>
        </p>
    </article>

    <footer class="text-red-900 text-center py-4">
        <p class="text-lg"><strong>Ready to turn your food truck dream into reality?</strong> <br>Contact Street Food Services now!</p>
    </footer>
</body>

</html>
		`,
		icon: 'pr.svg',
		location: 'San',
		date: 'July 11, 2023'
	},
	{
		title: 'How Street Food Services Can Help in the Competitive Food Truck Market',
		subtitle: 'Loremipsum',
		slug: '9qh8s891h',
		content: `
		<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How Street Food Services Can Help in the Competitive Food Truck Market</title>
</head>
<body>
    <header class="text-center text-red-900 text-3xl font-semibold my-8">
        <h1>The Competitive Landscape of Food Trucks</h1>
    </header>
    
    <article class="mx-8 text-gray-800 text-lg">
        <p>
            The food service market has undergone a remarkable transformation in recent years, with food trucks taking center stage in the culinary scene.
            As the competition within this niche continues to intensify, food truck owners face the challenge of standing out amidst a crowded field.
        </p>
        <p>
            At Street Food Services, we understand the unique dynamics of the food truck industry. We specialize in providing web development and services tailored explicitly to the needs of food truck businesses, helping you thrive in this fiercely competitive market.
        </p>
        <h2 class="text-xl font-semibold my-4">Why Choose Street Food Services?</h2>
        <p>
            With our expertise, we offer a range of solutions to set your food truck apart:
        </p>
        <ul class="list-disc ml-8">
            <li>Stunning and Functional Websites</li>
            <li>Mobile Optimization for On-the-Go Customers</li>
            <li>Online Ordering Systems</li>
            <li>Digital Marketing Strategies</li>
            <li>Search Engine Optimization (SEO) to Boost Visibility</li>
            <li>Social Media Integration</li>
        </ul>
        <p>
            These services are designed to enhance your online presence, making it easier for customers to find and engage with your food truck. We understand that in this competitive landscape, a strong digital presence can make all the difference.
        </p>
        <h2 class="text-xl font-semibold my-4">Partner with Us for Success</h2>
        <p>
            Street Food Services is not just a web development company; we are your partners in navigating the challenges of the modern food truck market.
            Let us help you reach a wider audience, increase customer engagement, and grow your business, all while you focus on what you do best – serving up delicious meals from your food truck.
        </p>
        <p>
            Don't let the intensifying competition discourage you. Embrace it with confidence, knowing that Street Food Services is here to support your journey to success.
        </p>
        <p>
            Contact us today to learn more about how we can help your food truck business thrive in this highly competitive landscape.
        </p>
    </article>
</body>
</html>
		`,
		date: 'June 29, 2023',
		location: 'TAMPA',
		icon: 'pr.svg'
	},
	{
		title: 'The Power of Synergy in the Food Truck Industry',
		subtitle: 'Loremipsum',
		location: 'TAMPA',
		slug: '9dh9qxebn',
		content: `
		<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Power of Synergy in the Food Truck Industry</title>

</head>

<body class="bg-gray-100">
    <header class=" text-center py-4">
        <h1 class="text-3xl text-red-900 font-semibold">The Power of Synergy in the Food Truck Industry</h1>
    </header>

    <article class="mx-8 my-6 text-gray-800 text-lg">
        <p>
            The food truck industry has grown increasingly competitive, with trucks serving up delicious cuisines on every corner.
            In this bustling marketplace, it's essential for food truck owners to explore opportunities for synergy with other
            businesses in the industry.
        </p>

        <p>
            At Street Food Services, we understand the immense potential that collaboration among food trucks can unlock.
            While the idea of synergy is enticing, it's equally vital to have a trusted mediator like us to connect you with
            vetted, non-malicious companies that can help you both achieve your goals.
        </p>

        <h2 class="text-2xl font-semibold my-4">Why Synergy Matters</h2>
        <p>
            Synergy is more than just a buzzword; it's a powerful concept with tangible benefits for food truck owners:
        </p>

        <ul class="list-disc ml-8">
            <li>1. <strong>Cost Efficiency:</strong> Collaborate on bulk purchases, shared marketing efforts, and events to reduce expenses.</li>
            <li>2. <strong>Enhanced Visibility:</strong> Joint promotions and co-hosted events can attract larger crowds and increase your presence.</li>
            <li>3. <strong>Knowledge Sharing:</strong> Exchange insights and best practices with fellow food truck entrepreneurs to improve operations.</li>
            <li>4. <strong>Community Support:</strong> Create a network that helps one another during challenging times.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">How Street Food Services Can Assist</h2>
        <p>
            Street Food Services plays a crucial role in fostering synergy within the food truck community.
            We connect you with trusted partners and businesses that share your goals and values.
        </p>

        <p>
            Our platform helps you explore collaboration opportunities, whether it's participating in food truck festivals, organizing themed events,
            or simply sharing resources and expertise.
        </p>

        <p>
            We believe that by bringing food truck owners together, we can strengthen the industry as a whole and help you achieve greater success.
        </p>

        <h2 class="text-2xl font-semibold my-4">Join the Synergy Movement</h2>
        <p>
            Don't miss out on the incredible advantages that synergy can bring to your food truck business.
            Contact Street Food Services today, and let us connect you with reliable, like-minded companies that share your vision.
            Together, we can achieve new heights of success in the dynamic world of food trucks.
        </p>
    </article>
    
    <footer class=" text-red-900 hover:text-green-900 duration-150 transition-colors text-center py-4">
        <p class="text-lg">Ready to explore the power of synergy? <strong>Contact Street Food Services today!</strong></p>
    </footer>
</body>

</html>
		`,
		date: 'March 3, 2023',
		icon: 'pr.svg'
	},
	{
		title: `Boosting Business: Street Food Services Helps Anchor Brewery's Food Truck`,
		subtitle: 'Loremipsum',
		slug: '9quwxqyebx',
		content: `
		<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boosting Business: Street Food Services Helps Anchor Brewery's Food Truck</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <header class=" text-red-900 text-center py-4">
        <h1 class="text-3xl font-semibold">Anchor came to us when they were lost</h1>
    </header>

    <article class="mx-8 my-6 text-gray-800 text-lg">
        <p>
            The food truck industry is known for its cutthroat competition, with trucks vying for attention in a crowded marketplace.
            In this fierce landscape, even established names like Anchor Brewery face challenges when it comes to maximizing the potential of their food truck.
        </p>

        <p>
            Street Food Services recently partnered with Anchor Brewery in San Francisco to help them enhance their food truck's online presence
            and drive more customers to their brewery. This case study explores how our expertise made a significant impact on their business.
        </p>

        <h2 class="text-2xl font-semibold my-4">The Competitive Challenge</h2>
        <p>
            Anchor Brewery's food truck was serving fantastic dishes, but they struggled to reach their target audience effectively.
            With numerous other food trucks in the area, standing out was a daunting task.
        </p>

        <h2 class="text-2xl font-semibold my-4">How Street Food Services Stepped In</h2>
        <p>
            Street Food Services assessed Anchor Brewery's unique needs and crafted a tailored solution to address their challenges.
            Here's how we made a difference:
        </p>

        <ul class="list-disc ml-8">
            <li><strong>Stunning Website Redesign:</strong> We created an attractive and user-friendly website for the food truck, featuring mouthwatering visuals and an easy-to-navigate menu.</li>
            <li><strong>Optimized SEO:</strong> We implemented a robust SEO strategy to improve the food truck's visibility in local search results, ensuring that potential customers could easily find them.</li>
            <li><strong>Social Media Boost:</strong> Our team enhanced their social media presence, engaging with customers and promoting special events to increase brand awareness.</li>
            <li><strong>Online Ordering System:</strong> We integrated a streamlined online ordering system, allowing customers to place orders in advance, which helped boost sales during peak hours.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">The Results</h2>
        <p>
            Thanks to the partnership with Street Food Services, Anchor Brewery's food truck saw a remarkable turnaround in its business:
        </p>

        <ul class="list-disc ml-8">
            <li><strong>Increased Foot Traffic:</strong> The brewery's food truck experienced a notable increase in customers visiting their location.</li>
            <li><strong>Higher Online Visibility:</strong> Improved SEO and social media efforts led to higher online visibility and better search rankings.</li>
            <li><strong>Enhanced Customer Engagement:</strong> Online ordering and a more interactive website led to increased customer engagement and loyalty.</li>
        </ul>

        <h2 class="text-2xl font-semibold my-4">Experience the Transformation</h2>
        <p>
            The Anchor Brewery food truck case study demonstrates the transformative power of a strategic online presence.
            If your food truck business faces similar challenges, consider partnering with Street Food Services.
            Contact us today and let us help you boost your business to new heights, just like we did for Anchor Brewery.
        </p>
    </article>

    <footer class=" text-red-900 hover:text-green-900 duration-150 transition-colors text-center py-4">
        <p class="text-lg">Ready to elevate your food truck's success? <strong>Contact Street Food Services now!</strong></p>
    </footer>
</body>

</html>
		`,
		icon: 'pr.svg',
		location: 'San Francisco',
		date: 'October 23, 2022'
	}
];

export let faqItem = [
	{
		title: 'What services does your company provide for street food businesses?',
		answer:
			'Our company offers a range of services tailored to the needs of street food businesses. We provide website design, development, and maintenance services, along with SEO optimization, online ordering systems, social media management, and more.'
	},
	{
		title: 'How can a professionally designed website benefit my street food business?',
		answer:
			'Having a professional website can significantly boost your street food business. It allows you to showcase your menu, provide location information, accept online orders, and engage with customers. It enhances your online presence and makes it easier for potential customers to find you.'
	},
	{
		title: ' Do you offer SEO services for street food businesses?',
		answer:
			'Yes, we do. Our SEO services are designed to improve your online visibility. We optimize your website for search engines, helping you rank higher in search results. This means more people can discover your delicious street food.'
	},
	{
		title: 'How does your online ordering system work?',
		answer: `Our online ordering system allows your customers to place orders directly from your website or mobile app. It's a convenient way to increase sales, especially during peak hours. We integrate a secure and user-friendly ordering system tailored to your business needs.`
	}
];

export let prodItem = [
	{
		tagline: '',
		title: 'Hobby',
		price: 79.95,
		setupfee: '1800',
		linkto: '/',
		features: `
 <li>Seo Optimized</li>
		<li>Responsive Mobile & Desktop Design</li>
		<li>Forms for Newsletters, job inquires, etc</li>
`
	},
	{
		tagline: 'Most Popular',
		title: 'Pro',
		price: 129.95,
		setupfee: '1800',
		linkto: '',
		features: `
 <li>Everything from the Hobbyist plan</li>
		<li>Responsive Mobile & Desktop Design</li>
		<li>Forms for Newsletters, job inquires, etc</li>
`
	},
	{
		tagline: '',
		linkto: '',
		title: 'Enterprise',
		price: 299.95,
		setupfee: '1800',
		features: `
 <li>Seo Optimized</li>
		<li>Responsive Mobile & Desktop Design</li>
		<li>Forms for Newsletters, job inquires, etc</li>
`
	},
	{
		tagline: '',
		linkto: '/pricing#customPricing',
		title: 'Custom Pricing',
		price: 'Contact Us',
		setupfee: '',
		features: `
 <li>Seo Optimized</li>
		<li>Responsive Mobile & Desktop Design</li>
		<li>Forms for Newsletters, job inquires, etc</li>
`
	}
];
