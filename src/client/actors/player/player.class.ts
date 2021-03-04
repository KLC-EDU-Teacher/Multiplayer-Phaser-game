export class Player {
    // create your member variables like we glanced over inside
    // of our domain the player instance which will be a type of
    // Phaser Sprite
    public player: Phaser.Sprite;
    // The player can be controlled with a keyboard
    // KeyBoardControl class still does not exist at this point
    // so your IDE should complain about it not being there
    public controls: KeyBoardControl;
    // playerState will keep side effects our player will get
    // during the course of the game. It will nicely embody all
    // of the states in one object
    public playerState: Map<string, boolean | number>;
    // Through Phaser this is used to control the ship's velocity
    // The math behind this is not going to be done by us, this
    // is why we decided to go for the usage of Phaser, which
    // will be more of a valuein your career.
    public angularVelocity: number = 300;

    // Most classes need a constructor method but it is still
    // optional
    // In our Player constructor we shall initialize some
    // members with initial values so we could use them
    // throughout our Player class

    constructor(private gameInstance: Phaser.Game, public playerInstance: any) 
    {
        // Once we get information from the server we shall
        // create the player with the correct phaser game instance
        this.createPlayer(this.gameInstance);
        // We also save a local copy of the player created by
        // the server so we can reference the correct name and
        // coordinate
        this.playerInstance = playerInstance;
        // Lastly we shall be needing a place to keep all of our
        // side effects. This will serve as a common container
        // for all of our player states (ex: number of bullets
        // fired, is the player moving?, etc)
        this.playerState = new Map();
    }

    // We shall need a way to create our players which are
    // requested through other classes in our game Having a
    // factory or a centralized way to create a player means
    // that we run little risk of duplicating code
    public createPlayer(): void {
    }
    // Our game will have some sort of loot drop system.
    // If a player picks up a loot, we shall assign it to the
    // player who picked it up
    public assignPickup(): void {
    }
    // As changes happen through the game world, the player
    // view will have to reflect these changes. The view is
    // nothing more than a graphical representation of our
    // awesome spaceship
    public view(): void {
    }
    // Once we instantiate the player we must attach some
    // controls to it!
    private addControls(): void {
    }
    // Let's add an extra method to attach physics to our player
    // Physics will be provided by Phaser's arcade implementation
    // and will add a lot of liveliness to our game.
    private attachPhysics(): void {
    }

}