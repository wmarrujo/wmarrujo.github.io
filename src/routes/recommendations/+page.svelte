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
			{title: "A Brief Guide to World Domination", link: "https://content.chrisguillebeau.com/wp-content/uploads/2023/05/worlddomination.pdf", author: "Chris Guillebeau"},
			{title: "The Tyranny of Structurelessness", link: "https://www.jofreeman.com/joreen/tyranny.htm", author: "Jo Freeman"},
			{title: "The Twelve-Factor App", link: "https://12factor.net/", author: "Adam Wiggins"},
			{title: "The Best Way to Count", link: "https://youtu.be/rDDaEVcwIJM?si=SMRy32925p7w-1_5", author: "Jan Misali"},
		],
		"Books": {
			"Politics & Philosophy": [
				{title: "What's Our Problem?", author: "Tim Urban", thesis: "The Psychology Behind the Politics", pitch: "Why is America (and the world) so divided? Why are republicans burning anything the left touches? Why is the left cancelling everything? What are the Implications? Read how we got here, building up the psychology from first principles.", link: "https://waitbutwhy.com/whatsourproblem"},
				{title: "High Conflict", author: "Amanda Ripley", thesis: "How to see & stop High Conflict", pitch: "Many conflicts are a trap, however much you fight and struggle, the conflict deepens. This book talks about why that happens, how to see it for what it is, and what you can do to get out of it and to build cultures resilient to it.", link: "https://www.amandaripley.com/high-conflict"},
				{title: "Debt: The First 5000 Years", author: "David Graeber", thesis: "Debt & Money came before Barter", pitch: "A deep-dive into the history of debt, credit, money, and the \"economy\" for all of recorded human history. Shatters all of the commonly held beliefs you thought you knew about money. Focus on how money came about, the morality aspect, and all the entanglements with politics.", link: "https://davidgraeber.org/books/debt-the-first-5000-years/"},
				{title: "The Shock Doctrine", author: "Naomi Klein", thesis: "\"Free Market\" Capitalism Relies on Violence", pitch: "THIS BOOK WILL MAKE YOU MAD. Milton Friedman & Gang proposed an economic theory that if you get a country to a clean slate & put a free market on it, it will succeed. This book exposes just how badly that theory has gone for so many countries around the world since ~1960.", link: "https://naomiklein.org/the-shock-doctrine/"},
				{title: "The Jakarta Method", author: "Vincent Bevins", thesis: "American Anti-Communist Mass-Murder Program", pitch: "A historical geopolitical look into the post-WWII 3rd world, and the West's involvement. Focuses on Indonesia's role as an emergent 3rd world leader, advocating for anti-imperialism and self-determination, and how America's anti-communist effort led to genocide and a brutal dictatorship. And how that method was then exported elsewhere to the world.", link: "https://vincentbevins.com/book/"},
				{title: "Factfulness", author: "Hans Rosling", thesis: "The world is actually getting better", pitch: "Explains 10 tendencies that we have to see the world as worse than it actually is. Explains that we all have misconceptions about the world that the facts don't bear out. Particular things may be bad, but generally are getting better, and almost everything is better than it has ever been.", link: "https://www.gapminder.org/factfulness-book/"},
				{title: "Bullshit Jobs", author: "David Graeber", thesis: "Most jobs today are worthless", pitch: "50% of jobs today have no purpose, they're there just to make superiors feel important, duct tape problems that should be fixed permanently, tick boxes just to say we did, or creating extra work just because, or a supporting job for these jobs. This is different from shit jobs, which just suck, but are useful.", link: "https://davidgraeber.org/books/bullshit-jobs/"},
				{title: "Of Boys and Men", author: "Richard Reeves", thesis: "The issues facing men right now, and what to do about it", pitch: "Looks at many of the most pressing issues facing men in the modern day. Proposes some solutions of what we can do to solve those issues.", link: "https://richardvreeves.com/books/"},
				{title: "Originals", author: "Adam Grant", thesis: "How to be a creative person", pitch: "Originals are people willing to take risks and who are open to alternatives, often challenging the status quo. This book shows examples of other people who are originals. It gives a guide about how to nurture that in yourself, and strategies about how to navigate original ideas in the world.", link: "https://adamgrant.net/book/originals/"},
				{title: "12 Rules for Life", author: "Jordan Peterson", thesis: "Rules to live your life by", pitch: "A set of 12 rules that the author claims will bring order and prosperity to your life if you follow them. Informed by the author's work in clinical psychology. Dives into questions of morality, analyzed through a lens of western culture.", link: "https://www.amazon.com/gp/product/0345816021/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=jordanbpetery-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345816021&linkId=7040f4ef87c497f0638662f157af2363"},
				{title: "Homo Deus", author: "Yuval Harari", thesis: "Questions about the future of humanity", pitch: "Investigates all the ways that humans have come to be, and what questions we'll have to grapple with in the future, both far and near. Specifically talks about what makes us human, what makes society, and how it will change with coming technologies and cultural forces.", link: "https://www.ynharari.com/book/homo-deus/"},
				{title: "Freakonomics", author: "Steven Levitt & Stephen Dubner", thesis: "Counterintuitive Economics", pitch: "Takes a look at many examples of people doing things that you wouldn't expect, and shows how the various incentives play a role. Not a book on morality, just on what is.", link: "https://freakonomics.com/books/#freakonomics"},
				{title: "Good to Great", author: "Jim Collins", thesis: "How to take a Company from Good to Great", pitch: "Learn the lessons from the few companies that were able to take regular good company performance and turned it into great performance for more than 15 years.", link: "https://www.jimcollins.com/books.html"},
				{title: "Mindset", author: "Carol Dweck", thesis: "Have a Growth Mindset, not a Fixed Mindset", pitch: "Outlines the difference and impact between having a Growth Mindset, one focused on learning from mistakes, versus having a fixed mindset, where you think you can't change. Paired with many, many examples.", link: "https://www.penguinrandomhouse.com/books/44330/mindset-by-carol-s-dweck-phd/"},
				{title: "Caste", author: "Isabel Wilkerson", thesis: "What pillars keep caste systems", pitch: "Breaks down the fundamental pillars of caste systems. Focuses on America, Nazi Germany, and India. Answers what are the origins, and what forces keep caste systems in place.", link: "https://www.isabelwilkerson.com/"},
				{title: "Invisible Rulers", author: "Renée DiResta", thesis: "Social Media & Bespoke Realities", pitch: "Dives into the online world of social media since about 2010 and the effect it's had on society, and what we can do about it. In particular how it has created fake realities that feel real to its inhabitants.", link: "https://www.reneediresta.com/books/"},
				{title: "7 Rules of Power", author: "Jeffrey Pfeffer", thesis: "Rules to Power", pitch: "Identifies 7 rules to having and maintaining power, motivated by evidence. These are not \"nice\", but the raw way power works.", link: "https://jeffreypfeffer.com/books/7-rules-of-power/"},
				{title: "The Hundred Years' War on Palestine", author: "Rashid Khalidi", thesis: "Israel-Palestine Modern History", pitch: "Historically covers the events in the land of Israel-Palestine from 1917 to 2017, and understands them as a war of colonialism by the Zionists towards the existing Arab population.", link: "https://us.macmillan.com/books/9781627798556/thehundredyearswaronpalestine/"},
				{title: "The Body Keeps the Score", author: "Bessel Van Der Kolk", thesis: "How trauma works", pitch: "A lifelong journey of trying to heal trauma, meanwhile discovering its true causes and effective ways of curing it.", link: "https://www.besselvanderkolk.com/resources/the-body-keeps-the-score"},
				{title: "The Gutenberg Parenthesis", author: "Jeff Jarvis", thesis: "Effects of the transition to and from the era of print", pitch: "Covers what happened at the dawn of print and throughout the centuries. Puts in perspective the kinds of change that we can come to expect from this new transition away from print being the dominant force in information.", link: "https://jeffjarvis.com/"},
				{title: "How Minds Change", author: "David McRaney", thesis: "How to actually change minds", pitch: "What are the techniques that actually work to change someone's mind. You won't get people to concede on facts alone.", link: "https://www.davidmcraney.com/howmindschangehome"},
				{title: "Thinking in Bets", author: "Annie Duke", thesis: "Think of every decision as a bet", pitch: "Understanding of human psychology and how we usually make decisions. Techniques for how to see the world through the lens of bets, practicing this with people and thus making better decisions. Using the world of poker as a key example of all of this.", link: "https://www.annieduke.com/books/"},
				{title: "The Art of War", author: "Sun Tzu", thesis: "War principles", pitch: "The specific nuggets of wisdom generated from medieval warfare in China. A lot of it gives broad insights into the patterns of thinking in this part of the world.", link: "https://www.johnminford.com/books"},
				{title: "The Righteous Mind", author: "Jonathan Haidt", thesis: "How morality works", pitch: "A deep dive into the psychological and biological underpinnings of morality. With a focus on how it has affected American politics. Takes a research-based approach.", link: "https://righteousmind.com/"},
			],
			"Entrepreneurship & Leadership": [
				{title: "The Millionaire Fastlane", author: "M.J. DeMarco", thesis: "3 roads to life, take the fastlane", pitch: "Proposes that there are 3 roads to life, the sidewalk, the slowlane, and the fastlane. They each have their formulas for relating to money and strategies for getting wealthy. This book tells you about the author's path to wealth and implores you to take a bet on the fastlane. It gives direct advice on what to do and what mindsets to shift.", link: "https://www.themillionairefastlane.com/"},
				{title: "Dream Year", author: "Ben Arment", thesis: "Instructions on how to start", pitch: "Why did you put your dreams to the side? Take a risk. This book explains what to expect, and how to get through it.", link: "https://www.penguinrandomhouse.com/books/316435/dream-year-by-ben-arment/"},
				{title: "Profit First", author: "Mike Michalowicz", thesis: "Take your profit first", pitch: "Espouses the idea that businesses should be profitable from the start and how to do that is to build profit into your money flow from the beginning. Everything else is paid for with the remaining money. Noting that if you can't do that, your business is doomed.", link: "https://mikemichalowicz.com/profit-first/"},
				{title: "The Pumpkin Plan", author: "Mike Michalowicz", thesis: "Focus on one, cull the rest", pitch: "Draws an analogy between business ideas and prize-winning pumpkin farmers. The strategy being to focus on the best-performing ideas and ignore all the rest ruthlessly in order to grow the biggest and fastest you can.", link: "https://mikemichalowicz.com/pumpkin-plan/"},
				{title: "The Mom Test", author: "Rob Fitzpatrick", thesis: "How to ask good questions", pitch: "Handbook for asking good questions in order to get actually useful feedback from people, especially people who are very much inclined to lie to you, in order to make you go away or not hurt your feelings, like your mom.", link: "https://www.momtestbook.com/"},
				{title: "Zero to One", author: "Peter Thiel & Blake Masters", thesis: "Philosophy of a startup", pitch: "Find a truth that very few people agree with you on. Learn from the past. All happy companies are different, but all failures are the same. Discusses monopolies vs perfect competition and shows you need a bit of both in your business. Discusses the role of luck. Explores how tight-knit groups help. Sales strategies. Discusses technology's impact on jobs. What a founder's role in the company is.", link: "http://zerotoonebook.com/"},
				{title: "Never Split the Difference", author: "Chris Voss & Tahl Raz", thesis: "How to negotiate", pitch: "Overview of the lessons learned as a hostage negotiator, and how the same strategies can help you in your life.", link: "https://www.amazon.com/gp/product/0062407805/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062407805&linkCode=as2&tag=thblswgr-20&linkId=4KDXXVGJOC5IEB3I"},
				{title: "Range", author: "David Epstein", thesis: "Benefits of being a generalist", pitch: "Shows how being a generalist helps with the kind of problems you usually encounter in the world. Contrasts it to early specialization and when that strategy is most useful. Talks about the kinds of learning environments that exist and the psychology of how we interact with them and how different strategies play out.", link: "https://davidepstein.com/range/"},
				{title: "The E-Myth Revisited", author: "Michael E. Gerber", thesis: "Work on your business, not in it", pitch: "Proposes a model of there being 3 people in an entrepreneur, The Entrepreneur, The Manager, and The Technician. Explains what role each plays, and the pitfalls of becoming too much of each one. Talks a lot about Franchises and how the product of the business is the business itself. How to create business systems that stand the test of time.", link: "https://www.michaelegerbercompanies.com/product/the-e-myth-revisited/"},
				{title: "The $100 Startup", author: "Chris Guillebeau", thesis: "You don't need much to start a business", pitch: "How others have started a business on little and specific steps and instructions for how you can do the same.", link: "https://100startup.com/"},
				{title: "The Infinite Game", author: "Simon Sinek", thesis: "Play to continue, not to win", pitch: "Establishes a dichotomy between finite games with set rules and a finite period with winners and losers, and infinite games, like life, politics, and business. Shows that the best strategy is advancing a just cause, building trusting teams, studying your worthy rival, existential flexibility, and having the courage to lead.", link: "https://simonsinek.com/books/the-infinite-game/"},
				{title: "Leaders Eat Last", author: "Simon Sinek", thesis: "Build a Circle of Safety", pitch: "As a leader, you have to make sure that your people are taken care of first. Protect your organization, establish trust.", link: "https://simonsinek.com/books/leaders-eat-last/"},
				{title: "Start with Why", author: "Simon Sinek", thesis: "Why → How → What", pitch: "Why is the reason for being, from which flows how you make it happen, finally, what you specifically do or have is derived from that. This ordering is crucial for making systems that work. Based in biology. Places importance on how this is communicated.", link: "https://simonsinek.com/books/start-with-why/"},
				{title: "Turn the Ship Around!", author: "David Marquet", thesis: "Control, Competence, Clarity", pitch: "Establishes a leadership model rejecting hierarchical non-thinking obedience-only methods, instead showing how to make an organization full of leaders all the way through. Focuses on Control, Competence, and Clarity as the ways of achieving that and gives specific instructions on how to make it happen in a real organization.", link: "https://davidmarquet.com/turn-the-ship-around-book/"},
				{title: "The 22 Immutable Laws of Marketing", author: "Al Ries & Jack Trout", thesis: "Marketing Philosophy", pitch: "Establishes the laws of psychology that anyone in marketing must heed or else they will fail. Outlines how they interact and when they take effect.", link: "https://assets-global.website-files.com/6638ffec16ad648a50c4b7e4/6638ffec16ad648a50c4b84f_22%20Immutable%20Laws%20of%20Marketing%20--%20by%20Ries%20and%20Trout%20--%20v2.pdf"},
				{title: "Shape-Up", author: "Ryan Singer", thesis: "How to organize project work", pitch: "They came up with a unique and effective way to organize project work. New feature development specifically. Plus techniques to organize the process.", link: "https://basecamp.com/shapeup"},
			],
			"Lifestyle": [
				{title: "King Warrior Magician Lover", author: "Robert Moore & Douglas Gillette", thesis: "The 4 Archetypes of a Man", pitch: "What is manhood? especially today? Uses archetypes to help understand the different aspects of what makes great men, and what aspects can make bad men. How boys become men.", link: "https://www.barnesandnoble.com/w/king-warrior-magician-lover-robert-moore/1100537240"},
				{title: "Building a Second Brain", author: "Tiago Forte", thesis: "Structured Note Taking & Mindset", pitch: "Your brain is good at ideas, but bad at remembering and keeping track of things. Here is a framework that you can follow that will work to be that part, which frees up your brain to do what it's good at. It points to a new way of thinking about your knowledge.", link: "https://www.buildingasecondbrain.com/book"},
				{title: "Deep Work", author: "Cal Newport", thesis: "How to focus", pitch: "Instructions on how to not be distracted and cultivate deep work, focused on what you want to be doing. And why it's especially valuable today.", link: "https://calnewport.com/writing/"},
				{title: "7 Habits of Highly Effective People & The 8th Habit", author: "Stephen Covey", thesis: "Principled Living", pitch: "How do you handle all of the most difficult things in life? You have to have a properly ordered mental framework. These 7 habits are what you do to improve in every aspect of life. They are built up from first principles. The 8th habit extends this to the information age.", link: "https://www.franklincovey.com/books/"},
				{title: "Love Does", author: "Bob Goff", thesis: "Love through action", pitch: "Many autobiographical narratives all combining to give Bob's insightful view on love, how it is expressed by actions, and how this relates to a kind of faith that is not commonly expressed. Gives a sense of ease about the world where it's clear the kind of life that is most fulfilling.", link: "https://www.bobgoff.com/books/love-does/"},
			]
		},
		"Games": [
			{title: "4D Golf", link: "https://store.steampowered.com/app/2147950/4D_Golf/"},
			{title: "Fez", link: "https://store.steampowered.com/app/224760/FEZ/"},
			{title: "Antichamber", link: "https://store.steampowered.com/app/219890/Antichamber/"},
			{title: "Captain Sonar", link: "https://boardgamegeek.com/boardgame/171131/captain-sonar"},
			{title: "Hyperbolica", link: "https://store.steampowered.com/app/1256230/Hyperbolica/"},
			{title: "Superliminal", link: "https://store.steampowered.com/app/1049410/Superliminal/"},
			{title: "5D Chess With Multiverse Time Travel", link: "https://store.steampowered.com/app/1349230/5D_Chess_With_Multiverse_Time_Travel/"},
			{title: "Outer Wilds", link: "https://store.steampowered.com/app/753640/Outer_Wilds/"},
			{title: "Daybreak", link: "https://boardgamegeek.com/boardgame/334986/daybreak"},
		],
		"Organizations": [
			{title: "GapMinder", link: "https://www.gapminder.org/"},
			{title: "The School of Life", link: "https://www.theschooloflife.com/"},
		],
		"Creators": {
			"Math & Science": [
				{title: "Nicky Case", link: "https://ncase.me/"},
				{title: "3Blue1Brown", link: "https://www.youtube.com/@3blue1brown"},
				{title: "AlphaPhoenix", link: "https://www.youtube.com/@AlphaPhoenixChannel"},
				{title: "BrainCraft", link: "https://www.youtube.com/@braincraft"},
				{title: "CGPGrey", link: "https://www.youtube.com/@CGPGrey"},
				{title: "Geography Now", link: "https://www.youtube.com/@GeographyNow"},
				{title: "Jay Foreman", link: "https://www.youtube.com/@JayForeman"},
				{title: "Journey to the Microcosmos", link: "https://www.youtube.com/@journeytomicro"},
				{title: "Kurzgesagt", link: "https://www.youtube.com/@kurzgesagt"},
				{title: "Looking Glass Universe", link: "https://www.youtube.com/@LookingGlassUniverse"},
				{title: "Mark Rober", link: "https://www.youtube.com/@MarkRober"},
				{title: "Minute Earth", link: "https://www.youtube.com/@MinuteEarth"},
				{title: "Minute Physics", link: "https://www.youtube.com/@MinutePhysics"},
				{title: "PBS Infinite Series", link: "https://www.youtube.com/@pbsinfiniteseries"},
				{title: "PBS Idea Channel", link: "https://www.youtube.com/@pbsideachannel"},
				{title: "PBS SpaceTime", link: "https://www.youtube.com/@pbsspacetime"},
				{title: "Practical Engineering", link: "https://www.youtube.com/@PracticalEngineeringChannel"},
				{title: "Primer", link: "https://www.youtube.com/@PrimerBlobs"},
				{title: "Real Engineering", link: "https://www.youtube.com/@RealEngineering"},
				{title: "Reducible", link: "https://www.youtube.com/@Reducible"},
				{title: "Scott Manley", link: "https://www.youtube.com/@scottmanley"},
				{title: "SciShow Space", link: "https://www.youtube.com/@scishowspace"},
				{title: "Smarter Every Day", link: "https://www.youtube.com/@smartereveryday"},
				{title: "Stand-Up Maths", link: "https://www.youtube.com/@standupmaths"},
				{title: "Steve Mould", link: "https://www.youtube.com/@SteveMould"},
				{title: "The Backyard Scientist", link: "https://www.youtube.com/@TheBackyardScientist"},
				{title: "This Place", link: "https://www.youtube.com/@ThisPlaceChannel"},
				{title: "Tier Zoo", link: "https://www.youtube.com/@TierZoo"},
				{title: "Veritasium", link: "https://www.youtube.com/@veritasium"},
				{title: "Vihart", link: "https://www.youtube.com/@Vihart"},
				{title: "Zach Star", link: "https://www.youtube.com/@zachstar"},
				{title: "ZoggFromBetelgeuse", link: "https://www.youtube.com/@ZoggFromBetelgeuse"},
			],
			"Design & Music": [
				{title: "Alto Clef", link: "https://www.youtube.com/@AltoClef"},
				{title: "Razbuten", link: "https://www.youtube.com/@razbuten"},
				{title: "Extra Credits", link: "https://www.youtube.com/@extracredits"},
				{title: "Sideways", link: "https://www.youtube.com/@Sideways440"},
				{title: "Tantacrul", link: "https://www.youtube.com/@Tantacrul"},
				{title: "Twoset Violin", link: "https://www.youtube.com/@twosetviolin"},
			],
			"Lifestyle & Philanthropy": [
				{title: "Answer in Progress", link: "https://www.youtube.com/@answerinprogress"},
				{title: "PhilosophyTube", link: "https://www.youtube.com/@PhilosophyTube"},
				{title: "Tom Scott", link: "https://www.youtube.com/@TomScottGo"},
				{title: "Vlogbrothers", link: "https://www.youtube.com/@vlogbrothers"},
				{title: "Vsauce", link: "https://www.youtube.com/@Vsauce"},
				{title: "Wheezy Waiter", link: "https://www.youtube.com/@wheezywaiter"},
			],
			"History, Politics, & Language": [
				{title: "ClimateTown", link: "https://www.youtube.com/@ClimateTown"},
				{title: "Extra History", link: "https://www.youtube.com/@extrahistory"},
				{title: "Kraut", link: "https://www.youtube.com/@Kraut_the_Parrot"},
				{title: "Not Just Bikes", link: "https://www.youtube.com/@NotJustBikes"},
				{title: "Rare Earth", link: "https://www.youtube.com/@RareEarthSeries"},
				{title: "Rational Animations", link: "https://www.youtube.com/@RationalAnimations"},
				{title: "NativLang", link: "https://www.youtube.com/@NativLang"},
				{title: "Xidnaf", link: "https://www.youtube.com/@Xidnaf"},
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
	<ul class="grid grid-cols-[repeat(auto-fit,12rem)] justify-center gap-4">
		{#each Object.entries(recommendations as Record<string, List>) as [name, items], i}
			{@render deck(name, items, `r${i}`)}
		{/each}
	</ul>
</main>

{#snippet cardBody(item: Recommendation)}
	{#if item.image}
		<img src={item.image} alt={item.title} class="w-full h-[60%] object-cover">
	{:else}
		<div class="w-full h-[60%] flex items-center justify-center bg-primary text-accent font-title text-5xl">{item.title.charAt(0)}</div>
	{/if}
	<div class="flex flex-col gap-1 p-3 flex-1 min-h-0">
		<h3 class="m-0 font-title text-lg leading-tight">{item.title}</h3>
		{#if item.author}
			<p class="m-0 text-xs opacity-70">{item.author}</p>
		{/if}
		{#if item.thesis}
			<p class="m-0 text-xs opacity-85 line-clamp-3">{item.thesis}</p>
		{/if}
		{#if item.pitch}
			<p class="m-0 text-xs opacity-60 line-clamp-2">{item.pitch}</p>
		{/if}
	</div>
{/snippet}

{#snippet card(item: Recommendation)}
	<li class="w-48 aspect-[3/4]">
		{#if item.link}
			<a class="flex flex-col w-full h-full rounded-xl bg-secondary shadow-md overflow-hidden no-underline text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg" href={item.link}>
				{@render cardBody(item)}
			</a>
		{:else}
			<span class="flex flex-col w-full h-full rounded-xl bg-secondary shadow-md overflow-hidden text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
				{@render cardBody(item)}
			</span>
		{/if}
	</li>
{/snippet}

{#snippet deck(name: string, items: List, id: string)}
	<li class="w-48 aspect-[3/4]">
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
			<ul class="grid grid-cols-[repeat(auto-fit,12rem)] justify-center gap-4 flex-1 overflow-auto p-4">
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
		inset: var(--nav-height) 0 0 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
