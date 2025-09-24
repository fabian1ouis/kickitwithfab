import { BlogPost, Author, Category } from '../types';

export const authors: Author[] = [
  {
    name: 'Mike Johnson',
    bio: 'Sports journalist with over 10 years of experience covering NFL and NBA.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    social: {
      twitter: '@mikejohnson',
      linkedin: 'mikejohnson',
    }
  },
  {
    name: 'Sarah Williams',
    bio: 'Former Olympic athlete turned sports writer, specializing in athletics and fitness.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    social: {
      twitter: '@sarahwilliams',
      instagram: '@sarahsports',
    }
  },
  {
    name: 'David Chen',
    bio: 'Basketball analyst and former college player with deep insights into the game.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    social: {
      twitter: '@davidchen',
    }
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Football', slug: 'football', description: 'NFL and college football coverage', color: 'bg-blue-600' },
  { id: '2', name: 'Basketball', slug: 'basketball', description: 'NBA and college basketball news', color: 'bg-orange-600' },
  { id: '3', name: 'Athletics', slug: 'athletics', description: 'Track and field, marathons, and more', color: 'bg-green-600' },
  { id: '4', name: 'Baseball', slug: 'baseball', description: 'MLB and minor league baseball', color: 'bg-red-600' },
  { id: '5', name: 'Soccer', slug: 'soccer', description: 'MLS, Premier League, and World Cup', color: 'bg-purple-600' },
  { id: '6', name: 'Tennis', slug: 'tennis', description: 'Grand Slams and professional tennis', color: 'bg-yellow-600' }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'NFL Season Preview: Top Contenders for the Championship',
    excerpt: 'As the new NFL season approaches, we analyze the top teams with the best chances of making it to the Super Bowl.',
    content: `The NFL season is upon us, and excitement is building as teams prepare for what could be the most competitive season in recent memory. 

After analyzing preseason performances, roster changes, and coaching strategies, several teams stand out as legitimate championship contenders.

**The Kansas City Chiefs** remain the team to beat, with Patrick Mahomes continuing to evolve his game and a defense that has shown significant improvement. Their offensive line has been retooled, and the addition of key defensive pieces makes them even more formidable.

**The Buffalo Bills** have built one of the most complete rosters in the league. Josh Allen's development into an elite quarterback, combined with a strong defense and improved running game, positions them as serious contenders.

**The San Francisco 49ers** boast perhaps the most talented roster top-to-bottom. If they can stay healthy, their combination of elite defense, strong running game, and versatile offense makes them dangerous.

The season promises to be full of surprises, and these early predictions will undoubtedly be tested as the games unfold.`,
    image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[0],
    category: 'Football',
    tags: ['NFL', 'Season Preview', 'Championship'],
    publishedAt: '2024-01-15',
    readTime: 5,
    featured: true,
    trending: true,
    views: 2500
  },
  {
    id: '2',
    title: 'NBA Trade Deadline: Impact Players on the Move',
    excerpt: 'The NBA trade deadline brought significant changes to several championship contenders. Here\'s our analysis.',
    content: `The NBA trade deadline has passed, and the landscape of the league has shifted dramatically with several blockbuster moves that could reshape the championship race.

**Major Moves Analysis**

The biggest surprise came from the Western Conference, where multiple contenders made significant upgrades. The trade activity suggests that several teams are going all-in for this season's championship push.

**Eastern Conference Impact**

The Eastern Conference saw equally important moves, with several teams addressing key weaknesses that had held them back in previous playoff runs.

**Playoff Implications**

These trades will undoubtedly impact the playoff picture, with some teams emerging as new favorites while others may have lost their championship window.`,
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[2],
    category: 'Basketball',
    tags: ['NBA', 'Trade Deadline', 'Playoffs'],
    publishedAt: '2024-01-12',
    readTime: 4,
    trending: true,
    views: 1800
  },
  {
    id: '3',
    title: 'Olympic Athletics: Rising Stars to Watch',
    excerpt: 'Meet the young athletes who are breaking records and setting themselves up as future Olympic champions.',
    content: `The world of athletics is witnessing an incredible new generation of talent that promises to make the upcoming Olympic Games truly spectacular.

**Track Events**

In the sprint events, several young athletes have already posted times that would have won medals at previous Olympic Games. Their technique, combined with advanced training methods, is producing remarkable results.

**Field Events**

The field events are seeing similar breakthroughs, with new records being set regularly by athletes who bring fresh approaches to traditional events.

**Training Revolution**

Modern training methods, better nutrition, and advanced sports science are contributing to these remarkable performances, suggesting that we may see multiple world records fall at the next Olympics.`,
    image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[1],
    category: 'Athletics',
    tags: ['Olympics', 'Track and Field', 'Rising Stars'],
    publishedAt: '2024-01-10',
    readTime: 6,
    featured: true,
    views: 1200
  },
  {
    id: '4',
    title: 'March Madness: Cinderella Stories and Bracket Busters',
    excerpt: 'The NCAA tournament has delivered incredible upsets and unforgettable moments. Here are the stories everyone\'s talking about.',
    content: `March Madness has lived up to its name once again, delivering shocking upsets, incredible individual performances, and the kind of drama that makes college basketball special.

**Biggest Upsets**

This year's tournament has featured several stunning upsets that have destroyed millions of brackets and created instant legends.

**Breakout Stars**

Several players have used the tournament stage to announce themselves to the basketball world, with performances that will be remembered for years to come.

**Championship Implications**

As we head into the final rounds, the remaining teams represent a mix of traditional powerhouses and surprising underdogs, setting up what could be an unforgettable championship game.`,
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[2],
    category: 'Basketball',
    tags: ['March Madness', 'NCAA', 'College Basketball'],
    publishedAt: '2024-01-08',
    readTime: 4,
    views: 2200
  },
  {
    id: '5',
    title: 'World Cup Soccer: Tactical Evolution in Modern Football',
    excerpt: 'How modern soccer tactics have evolved and what we can expect to see in upcoming international competitions.',
    content: `Soccer tactics continue to evolve at a rapid pace, with coaches and players constantly innovating to gain competitive advantages at the highest levels of the game.

**Formation Trends**

The traditional formations are being reimagined, with teams adopting more fluid systems that can change throughout a match based on game state and opponent positioning.

**Player Roles**

Modern players are required to be more versatile than ever, with many capable of playing multiple positions and adapting their role within the team structure.

**Technology Integration**

Data analysis and sports science are playing increasingly important roles in how teams prepare and adapt their tactics both before and during matches.`,
    image: 'https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[0],
    category: 'Soccer',
    tags: ['World Cup', 'Soccer', 'Tactics'],
    publishedAt: '2024-01-05',
    readTime: 5,
    views: 1600
  },
  {
    id: '6',
    title: 'Tennis Grand Slam Preview: Court Surfaces and Player Adaptability',
    excerpt: 'Analyzing how different court surfaces affect player performance and shape Grand Slam outcomes.',
    content: `The tennis calendar's Grand Slam events each present unique challenges due to their distinct playing surfaces, creating fascinating tactical and physical demands for players.

**Surface Analysis**

Each Grand Slam's surface characteristics significantly impact play style, ball behavior, and the physical demands placed on players throughout the tournament.

**Player Adaptability**

The greatest players in tennis history have been those who could adapt their games to excel on all surfaces, though many specialists have found great success on their preferred courts.

**Strategic Preparation**

Modern players and their teams spend considerable time adjusting training regimens, equipment choices, and tactical approaches for each surface transition.`,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[1],
    category: 'Tennis',
    tags: ['Tennis', 'Grand Slam', 'Strategy'],
    publishedAt: '2024-01-03',
    readTime: 4,
    views: 950
  }
];