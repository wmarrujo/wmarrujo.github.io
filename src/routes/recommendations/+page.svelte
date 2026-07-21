<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"

	////////////////////////////////////////////////////////////////////////////////

	type Recommendation = {
		title: string;
		link: string;
		image?: string;
		author?: string;
		thesis?: string;
		pitch?: string;
	}
	type List = Recommendation[] | {[group: string]: List}

	const recommendations: List = {
		"Manifestos": [
			{title: "Agile Manifesto", link: "https://agilemanifesto.org/", author: "Kent Beck et al."},
			{title: "The 12 Principles of Agile", link: "https://agilemanifesto.org/principles.html", author: "Kent Beck et al."},
			{title: "The Cult of Done Manifesto", link: "https://medium.com/@bre/the-cult-of-done-manifesto-724ca1c2ff13", author: "Bre Pettis"},
			{title: "A Brief Guide to World Domination", link: "https://chrisguillebeau.com/downloads/worlddomination.pdf", author: "Chris Guillebeau"},
			{title: "The Tyranny of Structurelessness", link: "https://www.jofreeman.com/joreen/tyranny.htm", author: "Jo Freeman"},
			{title: "The Twelve-Factor App", link: "https://12factor.net/", author: "Adam Wiggins"},
			{title: "The Best Way to Count", link: "https://youtu.be/rDDaEVcwIJM?si=SMRy32925p7w-1_5", author: "Jan Misali"},
		],
		"Books": {
			"Politics & Philosophy": [
				{title: "What's Our Problem?", author: "Tim Urban", thesis: "The Psychology Behind the Politics", pitch: "Why is America (and the world) so divided? Why are republicans burning anything the left touches? Why is the left cancelling everything? What are the Implications? Read how we got here, building up the psychology from first principles.", link: "https://waitbutwhy.com/whatsourproblem", image: "/recommendations/books/covers/What's%20our%20Problem.webp"},
				{title: "High Conflict", author: "Amanda Ripley", thesis: "How to see & stop High Conflict", pitch: "Many conflicts are a trap, however much you fight and struggle, the conflict deepens. This book talks about why that happens, how to see it for what it is, and what you can do to get out of it and to build cultures resilient to it.", link: "https://www.amandaripley.com/high-conflict", image: "/recommendations/books/covers/High%20Conflict.webp"},
				{title: "Debt: The First 5000 Years", author: "David Graeber", thesis: "Debt & Money came before Barter", pitch: "A deep-dive into the history of debt, credit, money, and the \"economy\" for all of recorded human history. Shatters all of the commonly held beliefs you thought you knew about money. Focus on how money came about, the morality aspect, and all the entanglements with politics.", link: "https://davidgraeber.org/books/debt-the-first-5000-years/", image: "/recommendations/books/covers/Debt.webp"},
				{title: "The Shock Doctrine", author: "Naomi Klein", thesis: "\"Free Market\" Capitalism Relies on Violence", pitch: "THIS BOOK WILL MAKE YOU MAD. Milton Friedman & Gang proposed an economic theory that if you get a country to a clean slate & put a free market on it, it will succeed. This book exposes just how badly that theory has gone for so many countries around the world since ~1960.", link: "https://naomiklein.org/the-shock-doctrine/", image: "/recommendations/books/covers/The%20Shock%20Doctrine.webp"},
				{title: "The Jakarta Method", author: "Vincent Bevins", thesis: "American Anti-Communist Mass-Murder Program", pitch: "A historical geopolitical look into the post-WWII 3rd world, and the West's involvement. Focuses on Indonesia's role as an emergent 3rd world leader, advocating for anti-imperialism and self-determination, and how America's anti-communist effort led to genocide and a brutal dictatorship. And how that method was then exported elsewhere to the world.", link: "https://vincentbevins.com/book/", image: "/recommendations/books/covers/The%20Jakarta%20Method.webp"},
				{title: "Factfulness", author: "Hans Rosling", thesis: "The world is actually getting better", pitch: "Explains 10 tendencies that we have to see the world as worse than it actually is. Explains that we all have misconceptions about the world that the facts don't bear out. Particular things may be bad, but generally are getting better, and almost everything is better than it has ever been.", link: "https://www.gapminder.org/factfulness-book/", image: "/recommendations/books/covers/Factfulness.webp"},
				{title: "Bullshit Jobs", author: "David Graeber", thesis: "Most jobs today are worthless", pitch: "50% of jobs today have no purpose, they're there just to make superiors feel important, duct tape problems that should be fixed permanently, tick boxes just to say we did, or creating extra work just because, or a supporting job for these jobs. This is different from shit jobs, which just suck, but are useful.", link: "https://davidgraeber.org/books/bullshit-jobs/", image: "/recommendations/books/covers/Bullshit%20Jobs.webp"},
				{title: "Of Boys and Men", author: "Richard Reeves", thesis: "The issues facing men right now, and what to do about it", pitch: "Looks at many of the most pressing issues facing men in the modern day. Proposes some solutions of what we can do to solve those issues.", link: "https://richardvreeves.com/books/", image: "/recommendations/books/covers/Of%20Boys%20and%20Men.webp"},
				{title: "Originals", author: "Adam Grant", thesis: "How to be a creative person", pitch: "Originals are people willing to take risks and who are open to alternatives, often challenging the status quo. This book shows examples of other people who are originals. It gives a guide about how to nurture that in yourself, and strategies about how to navigate original ideas in the world.", link: "https://adamgrant.net/book/originals/", image: "/recommendations/books/covers/Originals.webp"},
				{title: "12 Rules for Life", author: "Jordan Peterson", thesis: "Rules to live your life by", pitch: "A set of 12 rules that the author claims will bring order and prosperity to your life if you follow them. Informed by the author's work in clinical psychology. Dives into questions of morality, analyzed through a lens of western culture.", link: "https://www.amazon.com/gp/product/0345816021/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=jordanbpetery-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345816021&linkId=7040f4ef87c497f0638662f157af2363", image: "/recommendations/books/covers/12%20Rules%20for%20Life.webp"},
				{title: "Homo Deus", author: "Yuval Harari", thesis: "Questions about the future of humanity", pitch: "Investigates all the ways that humans have come to be, and what questions we'll have to grapple with in the future, both far and near. Specifically talks about what makes us human, what makes society, and how it will change with coming technologies and cultural forces.", link: "https://www.ynharari.com/book/homo-deus/", image: "/recommendations/books/covers/Homo%20Deus.webp"},
				{title: "Freakonomics", author: "Steven Levitt & Stephen Dubner", thesis: "Counterintuitive Economics", pitch: "Takes a look at many examples of people doing things that you wouldn't expect, and shows how the various incentives play a role. Not a book on morality, just on what is.", link: "https://freakonomics.com/books/#freakonomics", image: "/recommendations/books/covers/Freakonomics.webp"},
				{title: "Good to Great", author: "Jim Collins", thesis: "How to take a Company from Good to Great", pitch: "Learn the lessons from the few companies that were able to take regular good company performance and turned it into great performance for more than 15 years.", link: "https://www.jimcollins.com/books.html", image: "/recommendations/books/covers/Good%20to%20Great.webp"},
				{title: "Mindset", author: "Carol Dweck", thesis: "Have a Growth Mindset, not a Fixed Mindset", pitch: "Outlines the difference and impact between having a Growth Mindset, one focused on learning from mistakes, versus having a fixed mindset, where you think you can't change. Paired with many, many examples.", link: "https://www.penguinrandomhouse.com/books/44330/mindset-by-carol-s-dweck-phd/", image: "/recommendations/books/covers/Mindset.webp"},
				{title: "Caste", author: "Isabel Wilkerson", thesis: "What pillars keep caste systems", pitch: "Breaks down the fundamental pillars of caste systems. Focuses on America, Nazi Germany, and India. Answers what are the origins, and what forces keep caste systems in place.", link: "https://www.isabelwilkerson.com/", image: "/recommendations/books/covers/Caste.webp"},
				{title: "Invisible Rulers", author: "Renée DiResta", thesis: "Social Media & Bespoke Realities", pitch: "Dives into the online world of social media since about 2010 and the effect it's had on society, and what we can do about it. In particular how it has created fake realities that feel real to its inhabitants.", link: "https://www.reneediresta.com/books/", image: "/recommendations/books/covers/Invisible%20Rulers.webp"},
				{title: "7 Rules of Power", author: "Jeffrey Pfeffer", thesis: "Rules to Power", pitch: "Identifies 7 rules to having and maintaining power, motivated by evidence. These are not \"nice\", but the raw way power works.", link: "https://jeffreypfeffer.com/books/7-rules-of-power/", image: "/recommendations/books/covers/7%20Rules%20of%20Power.webp"},
				{title: "The Hundred Years' War on Palestine", author: "Rashid Khalidi", thesis: "Israel-Palestine Modern History", pitch: "Historically covers the events in the land of Israel-Palestine from 1917 to 2017, and understands them as a war of colonialism by the Zionists towards the existing Arab population.", link: "https://us.macmillan.com/books/9781627798556/thehundredyearswaronpalestine/", image: "/recommendations/books/covers/The%20Hundred%20Years'%20War%20on%20Palestine.webp"},
				{title: "The Body Keeps the Score", author: "Bessel Van Der Kolk", thesis: "How trauma works", pitch: "A lifelong journey of trying to heal trauma, meanwhile discovering its true causes and effective ways of curing it.", link: "https://www.besselvanderkolk.com/resources/the-body-keeps-the-score", image: "/recommendations/books/covers/The%20Body%20Keeps%20the%20Score.webp"},
				{title: "The Gutenberg Parenthesis", author: "Jeff Jarvis", thesis: "Effects of the transition to and from the era of print", pitch: "Covers what happened at the dawn of print and throughout the centuries. Puts in perspective the kinds of change that we can come to expect from this new transition away from print being the dominant force in information.", link: "https://jeffjarvis.com/", image: "/recommendations/books/covers/The%20Gutenberg%20Parenthesis.webp"},
				{title: "How Minds Change", author: "David McRaney", thesis: "How to actually change minds", pitch: "What are the techniques that actually work to change someone's mind. You won't get people to concede on facts alone.", link: "https://www.davidmcraney.com/howmindschangehome", image: "/recommendations/books/covers/How%20Minds%20Change.webp"},
				{title: "Thinking in Bets", author: "Annie Duke", thesis: "Think of every decision as a bet", pitch: "Understanding of human psychology and how we usually make decisions. Techniques for how to see the world through the lens of bets, practicing this with people and thus making better decisions. Using the world of poker as a key example of all of this.", link: "https://www.annieduke.com/books/", image: "/recommendations/books/covers/Thinking%20in%20Bets.webp"},
				{title: "The Art of War", author: "Sun Tzu", thesis: "War principles", pitch: "The specific nuggets of wisdom generated from medieval warfare in China. A lot of it gives broad insights into the patterns of thinking in this part of the world.", link: "https://www.johnminford.com/books", image: "/recommendations/books/covers/The%20Art%20of%20War.webp"},
				{title: "The Righteous Mind", author: "Jonathan Haidt", thesis: "How morality works", pitch: "A deep dive into the psychological and biological underpinnings of morality. With a focus on how it has affected American politics. Takes a research-based approach.", link: "https://righteousmind.com/", image: "/recommendations/books/covers/The%20Righteous%20Mind.webp"},
			],
			"Entrepreneurship & Leadership": [
				{title: "The Millionaire Fastlane", author: "M.J. DeMarco", thesis: "3 roads to life, take the fastlane", pitch: "Proposes that there are 3 roads to life, the sidewalk, the slowlane, and the fastlane. They each have their formulas for relating to money and strategies for getting wealthy. This book tells you about the author's path to wealth and implores you to take a bet on the fastlane. It gives direct advice on what to do and what mindsets to shift.", link: "https://www.themillionairefastlane.com/", image: "/recommendations/books/covers/The%20Millionaire%20Fastlane.webp"},
				{title: "Dream Year", author: "Ben Arment", thesis: "Instructions on how to start", pitch: "Why did you put your dreams to the side? Take a risk. This book explains what to expect, and how to get through it.", link: "https://www.penguinrandomhouse.com/books/316435/dream-year-by-ben-arment/", image: "/recommendations/books/covers/Dream%20Year.webp"},
				{title: "Profit First", author: "Mike Michalowicz", thesis: "Take your profit first", pitch: "Espouses the idea that businesses should be profitable from the start and how to do that is to build profit into your money flow from the beginning. Everything else is paid for with the remaining money. Noting that if you can't do that, your business is doomed.", link: "https://mikemichalowicz.com/profit-first/", image: "/recommendations/books/covers/Profit%20First.webp"},
				{title: "The Pumpkin Plan", author: "Mike Michalowicz", thesis: "Focus on one, cull the rest", pitch: "Draws an analogy between business ideas and prize-winning pumpkin farmers. The strategy being to focus on the best-performing ideas and ignore all the rest ruthlessly in order to grow the biggest and fastest you can.", link: "https://mikemichalowicz.com/pumpkin-plan/", image: "/recommendations/books/covers/The%20Pumpkin%20Plan.webp"},
				{title: "The Mom Test", author: "Rob Fitzpatrick", thesis: "How to ask good questions", pitch: "Handbook for asking good questions in order to get actually useful feedback from people, especially people who are very much inclined to lie to you, in order to make you go away or not hurt your feelings, like your mom.", link: "https://www.momtestbook.com/", image: "/recommendations/books/covers/The%20Mom%20Test.webp"},
				{title: "Zero to One", author: "Peter Thiel & Blake Masters", thesis: "Philosophy of a startup", pitch: "Find a truth that very few people agree with you on. Learn from the past. All happy companies are different, but all failures are the same. Discusses monopolies vs perfect competition and shows you need a bit of both in your business. Discusses the role of luck. Explores how tight-knit groups help. Sales strategies. Discusses technology's impact on jobs. What a founder's role in the company is.", link: "http://zerotoonebook.com/", image: "/recommendations/books/covers/Zero%20to%20One.webp"},
				{title: "Never Split the Difference", author: "Chris Voss & Tahl Raz", thesis: "How to negotiate", pitch: "Overview of the lessons learned as a hostage negotiator, and how the same strategies can help you in your life.", link: "https://www.amazon.com/gp/product/0062407805/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062407805&linkCode=as2&tag=thblswgr-20&linkId=4KDXXVGJOC5IEB3I", image: "/recommendations/books/covers/Never%20Split%20the%20Difference.webp"},
				{title: "Range", author: "David Epstein", thesis: "Benefits of being a generalist", pitch: "Shows how being a generalist helps with the kind of problems you usually encounter in the world. Contrasts it to early specialization and when that strategy is most useful. Talks about the kinds of learning environments that exist and the psychology of how we interact with them and how different strategies play out.", link: "https://davidepstein.com/range/", image: "/recommendations/books/covers/Range.webp"},
				{title: "The E Myth Revisited", author: "Michael E. Gerber", thesis: "Work on your business, not in it", pitch: "Proposes a model of there being 3 people in an entrepreneur, The Entrepreneur, The Manager, and The Technician. Explains what role each plays, and the pitfalls of becoming too much of each one. Talks a lot about Franchises and how the product of the business is the business itself. How to create business systems that stand the test of time.", link: "https://www.michaelegerbercompanies.com/product/the-e-myth-revisited/", image: "/recommendations/books/covers/The%20E%20Myth%20Revisited.webp"},
				{title: "The $100 Startup", author: "Chris Guillebeau", thesis: "You don't need much to start a business", pitch: "How others have started a business on little and specific steps and instructions for how you can do the same.", link: "https://100startup.com/", image: "/recommendations/books/covers/The%20$100%20Startup.webp"},
				{title: "The Infinite Game", author: "Simon Sinek", thesis: "Play to continue, not to win", pitch: "Establishes a dichotomy between finite games with set rules and a finite period with winners and losers, and infinite games, like life, politics, and business. Shows that the best strategy is advancing a just cause, building trusting teams, studying your worthy rival, existential flexibility, and having the courage to lead.", link: "https://simonsinek.com/books/the-infinite-game/", image: "/recommendations/books/covers/The%20Infinite%20Game.webp"},
				{title: "Leaders Eat Last", author: "Simon Sinek", thesis: "Build a Circle of Safety", pitch: "As a leader, you have to make sure that your people are taken care of first. Protect your organization, establish trust.", link: "https://simonsinek.com/books/leaders-eat-last/", image: "/recommendations/books/covers/Leaders%20Eat%20Last.webp"},
				{title: "Start with Why", author: "Simon Sinek", thesis: "Why → How → What", pitch: "Why is the reason for being, from which flows how you make it happen, finally, what you specifically do or have is derived from that. This ordering is crucial for making systems that work. Based in biology. Places importance on how this is communicated.", link: "https://simonsinek.com/books/start-with-why/", image: "/recommendations/books/covers/Start%20with%20Why.webp"},
				{title: "Turn the Ship Around!", author: "David Marquet", thesis: "Control, Competence, Clarity", pitch: "Establishes a leadership model rejecting hierarchical non-thinking obedience-only methods, instead showing how to make an organization full of leaders all the way through. Focuses on Control, Competence, and Clarity as the ways of achieving that and gives specific instructions on how to make it happen in a real organization.", link: "https://davidmarquet.com/turn-the-ship-around-book/", image: "/recommendations/books/covers/Turn%20the%20Ship%20Around.webp"},
				{title: "The 22 Immutable Laws of Marketing", author: "Al Ries & Jack Trout", thesis: "Marketing Philosophy", pitch: "Establishes the laws of psychology that anyone in marketing must heed or else they will fail. Outlines how they interact and when they take effect.", link: "https://assets-global.website-files.com/6638ffec16ad648a50c4b7e4/6638ffec16ad648a50c4b84f_22%20Immutable%20Laws%20of%20Marketing%20--%20by%20Ries%20and%20Trout%20--%20v2.pdf", image: "/recommendations/books/covers/The%2022%20Immutable%20Laws%20of%20Marketing.webp"},
				{title: "Shape Up", author: "Ryan Singer", thesis: "How to organize project work", pitch: "They came up with a unique and effective way to organize project work. New feature development specifically. Plus techniques to organize the process.", link: "https://basecamp.com/shapeup", image: "/recommendations/books/covers/Shape%20Up.webp"},
			],
			"Lifestyle": [
				{title: "King Warrior Magician Lover", author: "Robert Moore & Douglas Gillette", thesis: "The 4 Archetypes of a Man", pitch: "What is manhood? especially today? Uses archetypes to help understand the different aspects of what makes great men, and what aspects can make bad men. How boys become men.", link: "https://www.barnesandnoble.com/w/king-warrior-magician-lover-robert-moore/1100537240", image: "/recommendations/books/covers/King%20Warrior%20Magician%20Lover.webp"},
				{title: "Building a Second Brain", author: "Tiago Forte", thesis: "Structured Note Taking & Mindset", pitch: "Your brain is good at ideas, but bad at remembering and keeping track of things. Here is a framework that you can follow that will work to be that part, which frees up your brain to do what it's good at. It points to a new way of thinking about your knowledge.", link: "https://www.buildingasecondbrain.com/book", image: "/recommendations/books/covers/Building%20a%20Second%20Brain.webp"},
				{title: "Deep Work", author: "Cal Newport", thesis: "How to focus", pitch: "Instructions on how to not be distracted and cultivate deep work, focused on what you want to be doing. And why it's especially valuable today.", link: "https://calnewport.com/writing/", image: "/recommendations/books/covers/Deep%20Work.webp"},
				{title: "7 Habits of Highly Effective People & The 8th Habit", author: "Stephen Covey", thesis: "Principled Living", pitch: "How do you handle all of the most difficult things in life? You have to have a properly ordered mental framework. These 7 habits are what you do to improve in every aspect of life. They are built up from first principles. The 8th habit extends this to the information age.", link: "https://www.franklincovey.com/books/", image: "/recommendations/books/covers/The%207%20Habits%20of%20Highly%20Effective%20People.webp"},
				{title: "Love Does", author: "Bob Goff", thesis: "Love through action", pitch: "Many autobiographical narratives all combining to give Bob's insightful view on love, how it is expressed by actions, and how this relates to a kind of faith that is not commonly expressed. Gives a sense of ease about the world where it's clear the kind of life that is most fulfilling.", link: "https://www.bobgoff.com/books/love-does/", image: "/recommendations/books/covers/Love%20Does.webp"},
			]
		},
		"Games": [
			{title: "4D Golf", link: "https://store.steampowered.com/app/2147950/4D_Golf/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2147950/header.jpg"},
			{title: "Fez", link: "https://store.steampowered.com/app/224760/FEZ/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/224760/header.jpg"},
			{title: "Antichamber", link: "https://store.steampowered.com/app/219890/Antichamber/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/219890/header.jpg"},
			{title: "Captain Sonar", link: "https://boardgamegeek.com/boardgame/171131/captain-sonar", image: "https://cf.geekdo-images.com/Dpu5nFJu4UUJ4Y50WyKueg__itemrep@2x/img/7aD6wtwAMKsAHG7mPVL-gwYoMno=/fit-in/492x600/filters:strip_icc()/pic7069368.jpg"},
			{title: "Hyperbolica", link: "https://store.steampowered.com/app/1256230/Hyperbolica/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1256230/header.jpg"},
			{title: "Superliminal", link: "https://store.steampowered.com/app/1049410/Superliminal/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1049410/header.jpg"},
			{title: "5D Chess With Multiverse Time Travel", link: "https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1349230/header.jpg"},
			{title: "Outer Wilds", link: "https://store.steampowered.com/app/753640/Outer_Wilds/", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg"},
			{title: "Daybreak", link: "https://boardgamegeek.com/boardgame/334986/daybreak", image: "https://cf.geekdo-images.com/YU8rm_FMnKHS2GPDFvLb6g__itemrep@2x/img/Zpbyb72A8NtfZvJCuP7o1gv8ymc=/fit-in/492x600/filters:strip_icc()/pic7068528.png"},
		],
		"Organizations": [
			{title: "GapMinder", link: "https://www.gapminder.org/"},
			{title: "The School of Life", link: "https://www.theschooloflife.com/"},
		],
		"Creators": {
			"Math & Science": [
				{title: "Nicky Case", link: "https://ncase.me/", image: "https://yt3.googleusercontent.com/jF0CZn-d_bnDBTelzY3LD4aK4lmj6XD4RLBEwV5zVXsfIr7bS7aEJaPxK4EDWdB6sdYttCbgB0I=s400-c-k-c0x00ffffff-no-rj"},
				{title: "3Blue1Brown", link: "https://www.youtube.com/@3blue1brown", image: "https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s400-c-k-c0x00ffffff-no-rj"},
				{title: "AlphaPhoenix", link: "https://www.youtube.com/@AlphaPhoenixChannel", image: "https://yt3.googleusercontent.com/ytc/AIdro_lAubzuua0Ymk5ZM4jL7_z4yhbKVfzHkKiISlbOH7KoA_Q=s400-c-k-c0x00ffffff-no-rj"},
				{title: "BrainCraft", link: "https://www.youtube.com/@braincraft", image: "https://yt3.googleusercontent.com/Jjl8__22NuuwUkVgtbEG1aisqMbrr1PJKz84v9t8hra5wplPxhMcQZipZJcx3BB2FXuXNYprdw=s400-c-k-c0x00ffffff-no-rj"},
				{title: "CGPGrey", link: "https://www.youtube.com/@CGPGrey", image: "https://yt3.googleusercontent.com/ytc/AIdro_nxrDGcxMGo8yKf2_Dw0eaGEWj39IAIdZQjAuz-_mBHjUI=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Geography Now", link: "https://www.youtube.com/@GeographyNow", image: "https://yt3.googleusercontent.com/F6rTK52cIGQiLsyPpCETZfLIVxrQNA2QAOnGNAPWjVU-n5B3LXGnJ2GDxEfl64f0FjGWTX5KSDY=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Jay Foreman", link: "https://www.youtube.com/@JayForeman", image: "https://yt3.googleusercontent.com/gdhWgiMWgoBvqWJL9G4VzSIDzstzJOc1NTcqZ9NsQjFmcJ6tqhYGe8LWQGj5Joc9CfySDInvlQ=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Journey to the Microcosmos", link: "https://www.youtube.com/@journeytomicro", image: "https://yt3.googleusercontent.com/vK_NzEZ6ct2GGtsVJVVLOujgFQtvwosp0RfsI0RqwiJ1PdwjUPxS6Vdj6NMFn4g5MlSZJ-qs=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Kurzgesagt", link: "https://www.youtube.com/@kurzgesagt", image: "https://yt3.googleusercontent.com/ytc/AIdro_n1Ribd7LwdP_qKtqWL3ZDfIgv9M1d6g78VwpHGXVR2Ir4=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Looking Glass Universe", link: "https://www.youtube.com/@LookingGlassUniverse", image: "https://yt3.googleusercontent.com/ytc/AIdro_nEWHEffgnq0cuPXVEyb2OjGZFKnkMrvs7_VHdI033KR9U=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Mark Rober", link: "https://www.youtube.com/@MarkRober", image: "https://yt3.googleusercontent.com/ytc/AIdro_ksXY2REjZ6gYKSgnWT5jC_zT9mX900vyFtVinR8KbHww=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Minute Earth", link: "https://www.youtube.com/@MinuteEarth", image: "https://yt3.googleusercontent.com/ytc/AIdro_katEIhwNI2gGmuRx4MGjzfCAn_VT96ty5YxNLQCY-MjQ=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Minute Physics", link: "https://www.youtube.com/@MinutePhysics", image: "https://yt3.googleusercontent.com/ytc/AIdro_mNlRy8Ablr-4VtAT6eDe7ED-3tfNFZ0FwhEYdtc6B_oQ=s400-c-k-c0x00ffffff-no-rj"},
				{title: "PBS Infinite Series", link: "https://www.youtube.com/@pbsinfiniteseries", image: "https://yt3.googleusercontent.com/ytc/AIdro_nmI2f85ZS3_JRq8Zxew9c89zpThr1PlGmU7F5Z_1odaCk=s400-c-k-c0x00ffffff-no-rj"},
				{title: "PBS Idea Channel", link: "https://www.youtube.com/@pbsideachannel", image: "https://yt3.googleusercontent.com/ytc/AIdro_l-nRJBS4wc0PJA2z9cchYWvKmpepflmtIRdQGdAu__JQ=s400-c-k-c0x00ffffff-no-rj"},
				{title: "PBS SpaceTime", link: "https://www.youtube.com/@pbsspacetime", image: "https://yt3.googleusercontent.com/A7npG37dOJQffCnkUAyHI8wxnYhWA2q9SQY58AJ_bZUgKv30RtKD9sz5FQs4fs9-xWCg9S0P5jw=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Practical Engineering", link: "https://www.youtube.com/@PracticalEngineeringChannel", image: "https://yt3.googleusercontent.com/ytc/AIdro_m1Y4p9FzWjJBIhIwbVt6Z1qGKa8eWUTzE3kizORZMFKf4=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Primer", link: "https://www.youtube.com/@PrimerBlobs", image: "https://yt3.googleusercontent.com/YicJ3lAVdXC5jI7SA7mnX7pPoULN2Gfgh_S4IgDPDPjLaeTx1vWiQeh-reCty2uWuoVK70K5Lg=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Real Engineering", link: "https://www.youtube.com/@RealEngineering", image: "https://yt3.googleusercontent.com/ytc/AIdro_mzOoa3L9W_0hApabWg66Ryujuw7FGmLt23dOpIoO5mVNaC=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Reducible", link: "https://www.youtube.com/@Reducible", image: "https://yt3.googleusercontent.com/4Y72xFDw395XHf878UgzsxXc1I-36cgpjgjWaZx7KRP5D3VsMk_bvFoenvYjDRhEGF9Eo2LdPg=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Scott Manley", link: "https://www.youtube.com/@scottmanley", image: "https://yt3.googleusercontent.com/ytc/AIdro_mczi2iS2r0rMXrruJMcOQf4ac5glddZwhDdFHZzljTPC4=s400-c-k-c0x00ffffff-no-rj"},
				{title: "SciShow Space", link: "https://www.youtube.com/@scishowspace", image: "https://yt3.googleusercontent.com/eNkl_l8VyZhw9UN6cW5MGg5KW8BzPdT0V7_FvNLITk9MmuJ0Dsz3YrL0trASWHexOoZ5mDuS=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Smarter Every Day", link: "https://www.youtube.com/@smartereveryday", image: "https://yt3.googleusercontent.com/ytc/AIdro_l59Ewmp0DHZBRWbY9dVqjd2_mWwvrn8ad0bJfmdbMRYcA=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Stand-Up Maths", link: "https://www.youtube.com/@standupmaths", image: "https://yt3.googleusercontent.com/ytc/AIdro_kH1XY27N-S65HtyJ97eLeiYGSqanZuuVP2NgTzBt081h4=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Steve Mould", link: "https://www.youtube.com/@SteveMould", image: "https://yt3.googleusercontent.com/iX-akiHlJYuPDq4YVBO83cfjWW0aQefdewmI326XVhZkzxnS3MrqNVi49J33jLBw5LR_ZVyKFA=s400-c-k-c0x00ffffff-no-rj"},
				{title: "The Backyard Scientist", link: "https://www.youtube.com/@TheBackyardScientist", image: "https://yt3.googleusercontent.com/ytc/AIdro_nNL1yViBIY9zKnmWPmnaR3SAv9NbD3oLsA-QHUxlxRhlU=s400-c-k-c0x00ffffff-no-rj"},
				{title: "This Place", link: "https://www.youtube.com/@ThisPlaceChannel", image: "https://yt3.googleusercontent.com/ytc/AIdro_mXVVtWN3jmMFPUdO-Ht_wh36KNQHx1agDKan5p7AYK1_0=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Tier Zoo", link: "https://www.youtube.com/@TierZoo", image: "https://yt3.googleusercontent.com/ytc/AIdro_nEZmwHLHj4M9KtLtmgcIOM68qlMv8OhDOGUpNT1uHMfA=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Veritasium", link: "https://www.youtube.com/@veritasium", image: "https://yt3.googleusercontent.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Vihart", link: "https://vimeo.com/vihart", image: "https://i.vimeocdn.com/portrait/10622854_288x288?sig=b961dfcf8439fed5edd5f1cce8166fd062f9bc1f9a5e24f948fe595172713b21&v=1"},
				{title: "Zach Star", link: "https://www.youtube.com/@zachstar", image: "https://yt3.googleusercontent.com/ytc/AIdro_lszMno_6-JawRNW8UCfK8zjUvt7WTMZco67xUk094V2EE=s400-c-k-c0x00ffffff-no-rj"},
				{title: "ZoggFromBetelgeuse", link: "https://www.youtube.com/@ZoggFromBetelgeuse", image: "https://yt3.googleusercontent.com/ytc/AIdro_mzN7gUrWt4DipfPHpwAXy30J6dUvaY22TjVSVuCFLcmA=s400-c-k-c0x00ffffff-no-rj"},
			],
			"Design & Music": [
				{title: "Alto Clef", link: "https://www.youtube.com/@AltoClef", image: "https://yt3.googleusercontent.com/HWhMSc7Eb6JA9fAOGmZy3Gc-bumqVCjHsZ8JsonC_VocpngTMFMCzvYdc4t_rrdEBePcDinYoiI=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Razbuten", link: "https://www.youtube.com/@razbuten", image: "https://yt3.googleusercontent.com/ytc/AIdro_kj7fc-mISaX42SXiInwIDFHbn4jQw6CJuzhFjw8010cQk=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Extra Credits", link: "https://www.youtube.com/@extracredits", image: "https://yt3.googleusercontent.com/WUFdolvGD_8Deimk4YBdqETajhYqA2qJEs-K7jzDqqlK4aRJ_XnyJU9PJOBFyzbQrspUsNm-=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Sideways", link: "https://www.youtube.com/@Sideways440", image: "https://yt3.googleusercontent.com/ytc/AIdro_mmUFchpGjrBTDYZJai91RY96GzHJIWhTPbDcC12wWzow=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Tantacrul", link: "https://www.youtube.com/@Tantacrul", image: "https://yt3.googleusercontent.com/ytc/AIdro_kfBfBABvGzPoazpxLm35feN55rYWbc9dxVyvCUCzstZwU=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Twoset Violin", link: "https://www.youtube.com/@twosetviolin", image: "https://yt3.googleusercontent.com/4hwmD7Fi_bOVbG89iauxcBGXEm1vPfcAlD7u5XkSPaXxCVplZ5QYrNOJOoYhdouHMr_x1bsdJyo=s400-c-k-c0x00ffffff-no-rj"},
			],
			"Lifestyle & Philanthropy": [
				{title: "Answer in Progress", link: "https://www.youtube.com/@answerinprogress", image: "https://yt3.googleusercontent.com/cKg2Ftzeyey5uN7_BJ98HAfLrupIaPJ_1E2hBd-5aVRMBWpYOX2zxbv3s02SEJ2ubVp4RpC2jOI=s400-c-k-c0x00ffffff-no-rj"},
				{title: "PhilosophyTube", link: "https://www.youtube.com/@PhilosophyTube", image: "https://yt3.googleusercontent.com/s5g3Zjsm4yoWa39CucvIq7GtV_BNCOMyNR4xSPPvlv7vf1LVd40_XqdWhnEwPXSpgMEGizDAeJo=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Tom Scott", link: "https://www.youtube.com/@TomScottGo", image: "https://yt3.googleusercontent.com/WxHs0Jf1Jp_4ZU84wxnRL0owNHkzaLUEiD-GIfgCrVjZ0JhgriPTdPfGrkf-U7zwIs5zQl9ccg=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Vlogbrothers", link: "https://www.youtube.com/@vlogbrothers", image: "https://yt3.googleusercontent.com/ytc/AIdro_kRgkKL2CrQ4Ix8eIcTVlL7kQtdiePYEmYeCHq126dk4TE=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Vsauce", link: "https://www.youtube.com/@Vsauce", image: "https://yt3.googleusercontent.com/ytc/AIdro_mpYedipdXUXCKkwjQEeFrepFlDHZ0LiczqWeKyG0YmJvA=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Wheezy Waiter", link: "https://www.youtube.com/@wheezywaiter", image: "https://yt3.googleusercontent.com/CQlF37IyawkC2vSvIpg_NLt0eFFzdR4iu2Bg0Eac4uQaWPcA2-_UKXjPcV09Sln86Ja6QegJjp0=s400-c-k-c0x00ffffff-no-rj"},
			],
			"History, Politics, & Language": [
				{title: "ClimateTown", link: "https://www.youtube.com/@ClimateTown", image: "https://yt3.googleusercontent.com/cS6R18LbaUmn6XLWbGt-RKOrwVxtEBinZ2oZ9PkCilbGcDJB3BytzyTNNNeXU22XsfqEkFuPRnU=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Extra History", link: "https://www.youtube.com/@extrahistory", image: "https://yt3.googleusercontent.com/Zh0F8fpARiZBKd5ajAAsvRs9QURxmUZWqo1FOFNg6h1s3ySswsbcOXvNH3qBdsssr2OA_nC_=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Kraut", link: "https://www.youtube.com/@Kraut_the_Parrot", image: "https://yt3.googleusercontent.com/-UKEkBtv21FlHqmFQiXxQoBp3AhMFzXC8TQ9oaxg5w3zh0Ygh7glWikFxzxQm7fKO4yYymt4yrI=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Not Just Bikes", link: "https://www.youtube.com/@NotJustBikes", image: "https://yt3.googleusercontent.com/Spd_8mQFfs8mALM5XZaoc0R799rWeuOWeC_QLrpLTXhw-rxtUZyPzYkByaCrgDTNQzykD_28qtg=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Rare Earth", link: "https://www.youtube.com/@RareEarthSeries", image: "https://yt3.googleusercontent.com/ytc/AIdro_nfn4l1CWY3MeU7nCP281IpjCCmjltrD8VCs8eitUOcFoLc=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Rational Animations", link: "https://www.youtube.com/@RationalAnimations", image: "https://yt3.googleusercontent.com/8LaC125xLp9MBvj8w90KRa3GgILpazDxaPlWTeJlGPpFqHU3SjTIrlnCLpbUb54SQHR-qATDjQ=s400-c-k-c0x00ffffff-no-rj"},
				{title: "NativLang", link: "https://www.youtube.com/@NativLang", image: "https://yt3.googleusercontent.com/JmxnNPc7Ic0jnaPdLksokGXjgu4PE36iOdqiq3qSW9U2vGNQVF-ahQCQWbzTg85uNz8QIU-v8w=s400-c-k-c0x00ffffff-no-rj"},
				{title: "Xidnaf", link: "https://www.youtube.com/@Xidnaf", image: "https://yt3.googleusercontent.com/ytc/AIdro_mqGqrziLcUIwnv6tQLfd-1tsfIPMUmdO6lk-lZw4qSwf0=s400-c-k-c0x00ffffff-no-rj"},
			]
		},
	}
</script>

<nav class="flex items-center gap-4 p-3 sticky top-0 z-10 bg-primary">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="hover:underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="underline">Recommendations</a>
</nav>

<main class="p-4">
	<ul class="grid grid-cols-[repeat(auto-fit,15rem)] justify-center gap-4">
		{#each Object.entries(recommendations as Record<string, List>) as [name, items], i}
			{@render deck(name, items, `r${i}`)}
		{/each}
	</ul>
</main>

{#snippet cardBody(item: Recommendation)}
	<div class="p-3 h-[60%]">
		{#if item.image}
			<img src={item.image} alt={item.title} class="w-full h-full object-cover rounded-md">
		{:else}
			<div class="w-full h-full flex items-center justify-center bg-primary text-accent font-title text-5xl rounded-md">{item.title.charAt(0)}</div>
		{/if}
	</div>
	<div class="flex flex-col gap-1 p-3 flex-1 min-h-0">
		<h3 class="m-0 font-title text-lg leading-tight">{item.title}</h3>
		{#if item.author}
			<p class="m-0 text-xs opacity-70">{item.author}</p>
		{/if}
		{#if item.thesis}
			<p class="m-0 text-xs opacity-85 line-clamp-3">{item.thesis}</p>
		{/if}
	</div>
{/snippet}

{#snippet card(item: Recommendation)}
	<li class="w-[15rem] aspect-[3/4]">
		{#if item.link}
			<a class="flip-card block w-full h-full rounded-xl no-underline text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg {item.pitch ? 'flippable' : ''}" href={item.link}>
				<div class="flip">
					<div class="flip-front bg-secondary rounded-xl shadow-md overflow-hidden">{@render cardBody(item)}</div>
					{#if item.pitch}
						<div class="flip-back bg-secondary rounded-xl shadow-md">{item.pitch}</div>
					{/if}
				</div>
			</a>
		{:else}
			<span class="flip-card block w-full h-full rounded-xl text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg {item.pitch ? 'flippable' : ''}">
				<div class="flip">
					<div class="flip-front bg-secondary rounded-xl shadow-md overflow-hidden">{@render cardBody(item)}</div>
					{#if item.pitch}
						<div class="flip-back bg-secondary rounded-xl shadow-md">{item.pitch}</div>
					{/if}
				</div>
			</span>
		{/if}
	</li>
{/snippet}

{#snippet deck(name: string, items: List, id: string)}
	<li class="w-[15rem] aspect-[3/4]">
		<button class="flex flex-col w-full h-full rounded-xl bg-secondary shadow-md p-4 font-title text-2xl text-white border-none cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg" popovertarget={id} aria-haspopup="dialog">
			<span class="flex-1"></span>
			<span class="text-center">{name}</span>
			<span class="flex-[2]"></span>
		</button>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<dialog popover="manual" id={id} aria-label={name}
			onkeydown={(e) => { if (e.key === "Escape") { (e.currentTarget as HTMLElement).hidePopover(); e.stopPropagation() } }}>
			<div class="relative flex items-center justify-center p-4">
				<h2 class="m-0 font-title text-2xl text-center">{name}</h2>
				<button class="absolute right-4 top-1/2 -translate-y-1/2 border-none rounded-lg bg-secondary text-white p-2 cursor-pointer" popovertarget={id} popovertargetaction="hide" aria-label="Close">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
				</button>
			</div>
			<ul class="grid grid-cols-[repeat(auto-fit,15rem)] justify-center gap-4 flex-1 overflow-auto p-4">
				{#if Array.isArray(items)}
					{#each items as item}
						{@render card(item)}
					{/each}
				{:else}
					{#each Object.entries(items) as [subName, subItems], j}
						{@render deck(subName, subItems, `${id}-${j}`)}
					{/each}
				{/if}
			</ul>
		</dialog>
	</li>
{/snippet}

<style lang="postcss">
	:global(:root) {
		--nav-height: 3rem;
	}

	:popover-open {
		position: fixed;
		inset: var(--nav-height) 1rem 1rem 1rem;
		margin: 0;
		width: auto;
		height: auto;
		max-width: none;
		max-height: none;
		padding: 0;
		border: none;
		border-radius: 0.75rem;
		background: #003566;
		color: inherit;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
	}

	[popover]::backdrop {
			background: transparent;
		}

		.flip {
			position: relative;
			width: 100%;
			height: 100%;
			transform-style: preserve-3d;
			transition: transform 0.6s ease;
		}
		.flip-front,
		.flip-back {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
		}
		.flip-front {
			overflow: hidden;
		}
		.flip-back {
			transform: rotateY(180deg);
			padding: 0.75rem;
			font-size: 0.875rem;
			line-height: 1.25;
			text-align: left;
			overflow-y: auto;
		}
		.flippable:hover .flip {
			transform: rotateY(180deg);
		}
		.flippable:hover .flip-front {
			pointer-events: none;
		}
	</style>
