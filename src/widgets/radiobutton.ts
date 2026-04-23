// importing local code, code we have written
import {IdleUpWidgetState, PressedWidgetState } from "../core/ui";
import {Window, Widget, RoleType, EventArgs} from "../core/ui";
// importing code from SVG.js library
import {Circle, Text, Box} from "../core/ui";
import { RadioGroup } from "./radiogroup";

class RadioButton extends Widget{
    private _circle: Circle;
    private _text: Text;
    private _input: string;
    private _fontSize: number;
    private _text_y: number;
    private _text_x: number;
    private defaultText: string= "RadioButton";
    private defaultFontSize: number = 18;
    private defaultWidth: number = 15;
    private defaultHeight: number = 15;

    private _checked: boolean = false;
    private _radio_group: RadioGroup;
    private _group_num: number;

    constructor(parent:Window, group:RadioGroup){
        super(parent);
        // set defaults
        this.height = this.defaultHeight;
        this.width = this.defaultWidth;
        this._input = this.defaultText;
        this._fontSize = this.defaultFontSize;
        // set Aria role
        this.role = RoleType.button;
        // render widget
        this.render();
        // set default or starting state
        this.setState(new IdleUpWidgetState());
        // prevent text selection
        this.selectable = false;
        // adds button to group and sets its index
        this._radio_group = group
        this._radio_group.add_button(this);
        this._group_num = group.buttonSize();

    }

    set fontSize(size:number){
        this._fontSize= size;
        this.update();
    }

    private positionText(){
        let box:Box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._circle.y() + ((+this._circle.height()/2)) - (box.height/2));
        this._text.x(+this._circle.x() + 20);
        if (this._text_y > 0){
            this._text.y(this._text_y);
        }
        this._text.fill("black");
    }
    
    render(): void {
        this._group = (this.parent as Window).window.group();
        this._circle = this._group.circle(this.width, this.height);
        this._circle.stroke("black");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent circle on top of text to 
        // prevent selection cursor and to handle mouse events
        let eventcircle = this._group.circle(this.width, this.height).opacity(0).attr('id', 0);

        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or circle objects
        // receive events
        this.registerEvent(eventcircle);
    }

    override update(): void {
        if(this._text != null)
            this._text.font('size', this._fontSize);
            this._text.text(this._input);
            this.positionText();

        if(this._circle != null)
            this._circle.fill(this.backcolor);
        
        super.update();
    }
    
    pressReleaseState(): void{
        if (!this._checked) {
            this._checked = true
            this._circle.fill("#80acff");
            this._radio_group.select_button(this);
        } 

        if (this.previousState instanceof PressedWidgetState)
            this.raise(new EventArgs(this));
    }

    uncheck(): void {
        this._checked = false;
        this._circle.fill("white");
    }

    //TODO: implement the onClick event using a callback passed as a parameter
    
    onClick(callback: (event: EventArgs) => void):void{
        this.attach(callback);
    }

    
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    idleupState(): void {
        if (this._checked) {
            this._circle.fill("#80acff");
        } 
        else { 
            this._circle.fill("white");
        }
    }
    idledownState(): void {
        throw new Error("Method not implemented.");
    }
    pressedState(): void {
        throw new Error("Method not implemented.");
    }
    hoverState(): void {
        this._circle.fill("#d7dce7");
    }
    hoverPressedState(): void {
        throw new Error("Method not implemented.");
    }
    pressedoutState(): void {
        throw new Error("Method not implemented.");
    }
    moveState(): void {
        throw new Error("Method not implemented.");
    }
    keyupState(keyEvent?: KeyboardEvent): void {
        throw new Error("Method not implemented.");
    }

    public get text() {
        return this._input
    }

    set text(text:string){
        this._input = text;
        this.update();
    }

}

export {RadioButton}