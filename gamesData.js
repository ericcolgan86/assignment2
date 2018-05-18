import gameModel from './api/games/gameModel';

const games = [
    {
        'id': 'MHW',
        'name': 'Monster Hunter World',
        'description': 'Monster Hunter: World[a] is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series, it was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version being scheduled later in the year. In the game, the player takes the role of a Hunter, tasked to hunt down and either kill or trap monsters that roam in one of several environmental spaces. If successful, the player is rewarded through loot consisting of parts from the monster and other elements that are used to craft weapons and armor, among other equipment. The games core loop has the player crafting appropriate gear to be able to hunt down more difficult monsters, which in turn provide parts that lead to more powerful gear. Players may hunt alone, or can hunt in cooperative groups of up to four players via the games online services',
        'imageurlsmall':'/Images/MHW-SMALL.jpg',
        'imageurlbig':'/Images/MHW-BIG.jpg',
        'reviewurl':'https://www.youtube.com/embed/HBxeTJusD2M',
        'rating':'5'
    },
    {
        'id': 'DS',
        'name': 'Dark Souls',
        'description': 'Dark Souls is an action role-playing video game developed by FromSoftware and published by Namco Bandai Games for PlayStation 3, Nintendo Switch, Xbox 360, and Microsoft Windows. A spiritual successor to FromSoftwares Demons Souls, it is the second installment in the Souls series of games.',
        'imageurlsmall':'/Images/DS-SMALL.jpg',
        'imageurlbig':'/Images/DS-BIG.jpg',
        'reviewurl':'https://www.youtube.com/embed/KmLaLqYauTA',
        'rating':'4'
    },
    {
        'id': 'MGS',
        'name': 'Metal Gear Solid',
        'description': 'Metal Gear is a series of action-adventure stealth video games, created by Hideo Kojima and developed and published by Konami.The first game, Metal Gear,was released in 1987 for the MSX home computer architecture.',
        'imageurlsmall':'/Images/MGS-SMALL.jpg',
        'imageurlbig':'/Images/MGS-BIG.jpg',
        'reviewurl':'https://www.youtube.com/embed/153tKBF0CWE',
        'rating':'3'
    }
];

export const loadGames = () => {
    gameModel.find({}).remove(() => {
        gameModel.collection.insert(games, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Game Data: ${err}`);
    } else {
      console.info(`${games.length} games were successfully stored.`);
    }
  });
});
};